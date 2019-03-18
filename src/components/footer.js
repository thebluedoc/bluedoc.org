import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { languageSuffix } from "../utils";
import { FormattedMessage } from "react-intl";
import cn from "./footer.module.scss";

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
          <div className={cn.links}>
            <a
              className={cn.link}
              href="https://github.com/thebluedoc/bluedoc-feedback/issues/new"
              target="_blank"
            >
              <FormattedMessage id="Footer.Feedback" />
            </a>
            <a
              className={cn.link}
              href={`https://bluedoc.io/bluedoc/help${this.suffix}`}
              target="_blank"
            >
              <FormattedMessage id="Footer.Help" />
            </a>
            <a
              className={cn.link}
              href={`https://bluedoc.io/bluedoc/help${this.suffix}/about`}
              target="_blank"
            >
              <FormattedMessage id="Footer.About" />
            </a>
            <a
              className={cn.link}
              href={"https://github.com/thebluedoc/bluedoc"}
              target="_blank"
            >
              {"GitHub"}
            </a>
          </div>

          <span className={cn.copyright}>
            {"© 2019 Bluedoc. All rights reserved."}
          </span>
        </div>
      </footer>
    );
  }
}

export default Footer;
