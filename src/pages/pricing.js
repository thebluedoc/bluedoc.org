import React from "react";
import classnames from "classnames/bind";
import { FormattedMessage } from "react-intl";

import { withIntl } from "../i18n";
import Layout from "../layout";
import SEO from "../components/seo";
import styles from "./pricing.module.scss";

const cx = classnames.bind(styles);

const IndexPage = () => (
  <Layout>
    <SEO title="Pricing" keywords={["bluedoc, pricing"]} />
    <div className={cx("wrap")}>
      <section className={cx("wrap-container")}>
        <h1 className={cx("title")}>
          <FormattedMessage id="Pricing.Title" />
        </h1>
        <p className={cx("des")} style={{ fontSize: 17, marginBottom: 60 }}>
          <FormattedMessage id="Pricing.TitleDes" />
        </p>
        <p className={cx("des")} style={{ fontSize: 14, marginBottom: 40 }}>
          <FormattedMessage id="Pricing.Des" />
          <a href="https://bluedoc.io" target="_blank">
            {"（https://bluedoc.io）"}
          </a>
        </p>
        <div className={cx("boxWrap")}>
          <div className={cx("box")}>
            <h2 className={cx("type")}>
              <FormattedMessage id="Pricing.Basic.Title" />
            </h2>
            <b className={cx("price")}>
              <FormattedMessage id="Pricing.Basic.Price" />
            </b>
            <a
              href="https://hub.docker.com/r/bluedoc/bluedoc"
              target="_blank"
              className={cx("btn", "btn-primary")}
              style={{ marginBottom: 60 }}
            >
              <FormattedMessage id="Pricing.Basic.Button" />
            </a>
            <ul className={cx("list")}>
              <h3 className={cx("label")}>
                <FormattedMessage id="Pricing.Features" />
              </h3>
              {[...Array(12).fill(0)].map((i, index) => (
                <li key={`basic-features-${index}`}>
                  <FormattedMessage id={`Pricing.Basic.Features.${index}`} />
                </li>
              ))}
            </ul>
            <ul className={cx("list")}>
              <h3 className={cx("label")}>
                <FormattedMessage id="Pricing.Service" />
              </h3>
              {[...Array(1).fill(0)].map((i, index) => (
                <li key={`basic-service-${index}`}>
                  <FormattedMessage id={`Pricing.Basic.Service.${index}`} />
                </li>
              ))}
            </ul>
          </div>
          <div className={cx("box", "pro")}>
            <h2 className={cx("type")}>
              <FormattedMessage id="Pricing.Pro.Title" />
            </h2>
            <b className={cx("price")}>
              <FormattedMessage id="Pricing.Pro.Price" />
            </b>
            <a
              href="mailto:support@bluedoc.org"
              className={cx("btn", "btn-primary")}
              style={{ marginBottom: 60 }}
            >
              <FormattedMessage id="Pricing.Pro.Button" />
            </a>
            <ul className={cx("list")}>
              <h3 className={cx("label")}>
                <FormattedMessage id="Pricing.Features" />
              </h3>
              {[...Array(6).fill(0)].map((i, index) => (
                <li key={`pro-features-${index}`}>
                  <FormattedMessage id={`Pricing.Pro.Features.${index}`} />
                </li>
              ))}
            </ul>
            <ul className={cx("list")}>
              <h3 className={cx("label")}>
                <FormattedMessage id="Pricing.Service" />
              </h3>
              {[...Array(1).fill(0)].map((i, index) => (
                <li key={`pro-service-${index}`}>
                  <FormattedMessage id={`Pricing.Pro.Service.${index}`} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  </Layout>
);

export default withIntl(IndexPage);
