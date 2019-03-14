import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { languageSuffix } from "../utils";
import { FormattedMessage } from "react-intl";
import cn from "./footer.module.css";

class Footer extends PureComponent {
  constructor(props, context) {
    super(props);
    this.suffix = languageSuffix(context.language.locale);
  }
  static contextTypes = {
    language: PropTypes.object
  };
  render() {
    return (
      <footer className={cn.wrap}>
        <div className={`wrap-container ${cn.footer}`}>
          <span className={cn.copyright}>
            © 2019 Bluedoc. All rights reserved.
          </span>
          <div className={cn.links}>
            {/* <a className={cn.link} href="#">Feedback</a> */}
            <a
              className={cn.link}
              href={`https://bluedoc.io/bluedoc/help${this.suffix}`}
            >
              <FormattedMessage id="Footer.Help" />
            </a>
            <a
              className={cn.link}
              href={`https://bluedoc.io/bluedoc/help${this.suffix}/about`}
            >
              <FormattedMessage id="Footer.About" />
            </a>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
