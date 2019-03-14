import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Dropdown from "./dropdown";

class Language extends PureComponent {
  static contextTypes = {
    language: PropTypes.object
  };

  state = {
    value: ""
  };

  componentDidMount() {
    const { language } = this.context;
    this.setState({
      value: language.locale || language.detected
    });
  }

  handleChange = value => {
    const { language } = this.context;
    const { originalPath } = language;

    this.setState({ value }, () => {
      localStorage.setItem("language", value);
      window.location.href = `/${value}${originalPath}`;
    });
  };

  render() {
    const { language } = this.context;
    const { languages } = language;
    const { value } = this.state;
    if (!value) {
      return null;
    }

    return (
      <Dropdown
        onChange={this.handleChange}
        options={languages}
        value={value}
        desLabel={"Language"}
      />
    );
  }
}

export default Language;
