import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import classnames from "classnames/bind";

import { languageSuffix } from "../utils";
import Layout from "../layout";
import SEO from "../components/seo";

import { withIntl } from "../i18n";

const cx = classnames.bind({});

class Contact extends PureComponent {
  constructor(props, context) {
    super(props);
    this.suffix = languageSuffix(context.language.locale);
  }

  static contextTypes = {
    language: PropTypes.object
  };

  render() {
    return (
      <Layout>
        <SEO title="contact us" />
        <section className={cx("wrap-container")} style={{ paddingTop: 60 }}>
          <iframe
            id="goldendata_form_Vja6iS"
            src="https://jinshuju.net/f/Vja6iS?background=white&banner=show&embedded=true"
            width="100%"
            frameBorder="0"
            allowtransparency="true"
            height="1023"
          />
        </section>
      </Layout>
    );
  }
}

export default withIntl(Contact);
