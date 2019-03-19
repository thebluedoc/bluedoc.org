import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";
import classnames from "classnames/bind";

import { languageSuffix } from "../utils";
import { Link } from "../i18n";
import Icon from "./icon";
import Language from "./language";
import styles from "./header.module.scss";
import logo from "../images/logo.png";

import Modal from "./modal";

const menuLinks = [
  // {
  //   name: 'Enterprise',
  //   link: '/enterprise/'
  // },
  {
    name: "Pricing",
    link: "/pricing/"
  }
];
const cx = classnames.bind(styles);

class Header extends PureComponent {
  constructor(props, context) {
    super(props);
    this.suffix = languageSuffix(context.language.locale);
    this.state = {
      showMenu: false
    };
  }

  static contextTypes = {
    language: PropTypes.object
  };

  ToggleMenu = () => {
    this.setState({
      showMenu: !this.state.showMenu
    });
  };

  render() {
    const { showMenu } = this.state;
    return (
      <header className={cx("wrap")}>
        <div className={cx("wrap-container", "header")}>
          <div className={cx("menu")}>
            <Icon
              name={showMenu ? "cancel" : "menu"}
              onClick={this.ToggleMenu}
            />
            <Modal show={showMenu} ToggleShow={this.ToggleMenu}>
              <div className={cx("content", { show: showMenu })}>
                {menuLinks.map(({ link, name }) => (
                  <Link
                    className={cx("link")}
                    key={link}
                    to={link}
                    activeClassName="active"
                  >
                    <FormattedMessage id={`Header.${name}`} />
                  </Link>
                ))}
                <a
                  className={cx("link")}
                  href={`https://bluedoc.io/bluedoc/help${this.suffix}`}
                  target="_blank"
                >
                  <FormattedMessage id="Header.Help" />
                </a>
                <a
                  className={cx("link")}
                  href="https://github.com/thebluedoc/bluedoc-feedback/issues/new"
                  target="_blank"
                >
                  <FormattedMessage id="Header.Feedback" />
                </a>
                <a
                  className={cx("link")}
                  href={`https://bluedoc.io/bluedoc/help${this.suffix}/about`}
                  target="_blank"
                >
                  <FormattedMessage id="Header.About" />
                </a>
              </div>
            </Modal>
          </div>
          <Link to="/" className={cx("logo")}>
            <img src={logo} alt="logo" />
            <span style={{ color: "#165eff" }}>{"Blue"}</span>
            <span style={{ color: "#8b96ad" }}>{"Doc"}</span>
          </Link>
          <nav className={cx("nav")}>
            {menuLinks.map(({ link, name }) => (
              <Link
                className={cx("link")}
                key={link}
                to={link}
                activeClassName="active"
              >
                <FormattedMessage id={`Header.${name}`} />
              </Link>
            ))}
            <a
              className={cx("link")}
              href={`https://bluedoc.io/bluedoc/help${this.suffix}`}
              target="_blank"
            >
              <FormattedMessage id="Header.Help" />
            </a>
            <a
              className={cx("link")}
              href="https://github.com/thebluedoc/bluedoc-feedback/issues/new"
              target="_blank"
            >
              <FormattedMessage id="Header.Feedback" />
            </a>
            <a
              className={cx("link")}
              href={`https://bluedoc.io/bluedoc/help${this.suffix}/about`}
              target="_blank"
            >
              <FormattedMessage id="Header.About" />
            </a>
          </nav>
          <div className={cx("language")}>
            <Language />
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
