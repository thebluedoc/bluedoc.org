import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { FormattedMessage } from "react-intl";
import Img from "gatsby-image";
import classnames from "classnames/bind";
import { withIntl, Link } from "../i18n";
import Layout from "../layout";
import SEO from "../components/seo";
import styles from "./index.module.scss";

import banner4 from "../images/home/banner4.png";
import banner6 from "../images/home/banner6.png";
import banner7 from "../images/home/banner7.png";
import markdown_export from "../images/home/markdown_export.png";
import markdown_import from "../images/home/markdown_import.png";
import m2_organize from "../images/home/m2_organize.png";
import m2_safe from "../images/home/m2_safe.png";
import m2_tablet from "../images/home/m2_tablet.png";

const cx = classnames.bind(styles);
const IndexPage = () => (
  <StaticQuery
    query={homeQuery}
    render={data => (
      <Layout>
        <SEO title="Home" keywords={["bluedoc"]} />
        <section className={cx("wrap-container", "section1")}>
          <div className={cx("content")}>
            <h1 className={cx("title")}>
              <FormattedMessage id="Home.Section1.Title" />
            </h1>
            <p className={cx("subTitle")}>
              <FormattedMessage id="Home.Section1.SubTitle" />
            </p>
            <Link to="/pricing" className={cx("btn")}>
              <FormattedMessage id="Home.Section1.Btn" />
            </Link>
          </div>
          <Img
            className={cx("banner")}
            imgStyle={{ objectFit: "contain" }}
            fluid={data.banner1.childImageSharp.fluid}
          />
        </section>
        <section className={`${cx("section2")}`}>
          <div className="wrap-container">
            <h2 className={cx("title")}>
              <FormattedMessage id="Home.Section2.Title" />
            </h2>
            <p className={cx("subTitle")}>
              <FormattedMessage id="Home.Section2.SubTitle" />
            </p>
            <ul>
              <li>
                <img alt="" src={m2_safe} />
                <h3 className={cx("title")}>
                  <FormattedMessage id="Home.Section2.Lists.0.Title" />
                </h3>
                <p className={cx("des")}>
                  <FormattedMessage id="Home.Section2.Lists.0.Des" />
                </p>
              </li>
              <li>
                <img alt="" src={m2_organize} />
                <h3 className={cx("title")}>
                  <FormattedMessage id="Home.Section2.Lists.1.Title" />
                </h3>
                <p className={cx("des")}>
                  <FormattedMessage id="Home.Section2.Lists.1.Des" />
                </p>
              </li>
              <li>
                <img alt="" src={m2_tablet} />
                <h3 className={cx("title")}>
                  <FormattedMessage id="Home.Section2.Lists.2.Title" />
                </h3>
                <p className={cx("des")}>
                  <FormattedMessage id="Home.Section2.Lists.2.Des" />
                </p>
              </li>
            </ul>
          </div>
        </section>
        <section className={`wrap-container ${cx("section3")}`}>
          <Img
            className={cx("banner")}
            imgStyle={{ objectFit: "contain" }}
            fluid={data.banner3.childImageSharp.fluid}
          />
          <ul>
            <li>
              <h3 className={cx("title")}>
                <FormattedMessage id="Home.Section3.Lists.0.Title" />
              </h3>
              <p className={cx("des")}>
                <FormattedMessage id="Home.Section3.Lists.0.Des" />
              </p>
            </li>
            <li>
              <h3 className={cx("title")}>
                <FormattedMessage id="Home.Section3.Lists.1.Title" />
              </h3>
              <p className={cx("des")}>
                <FormattedMessage id="Home.Section3.Lists.1.Des" />
              </p>
            </li>
            <li>
              <h3 className={cx("title")}>
                <FormattedMessage id="Home.Section3.Lists.2.Title" />
              </h3>
              <p className={cx("des")}>
                <FormattedMessage id="Home.Section3.Lists.2.Des" />
              </p>
            </li>
          </ul>
        </section>
        <section className={cx("section4")}>
          <div className="wrap-container ">
            <h2 className={cx("title")}>
              <FormattedMessage id="Home.Section4.Title" />
            </h2>
            <p className={cx("subTitle")}>
              <FormattedMessage id="Home.Section4.SubTitle" />
            </p>
          </div>
          <img className={cx("banner")} src={banner4} alt="" />
        </section>
        <section className={cx("section5")}>
          <div className="wrap-container ">
            <ul>
              <li>
                <img src={markdown_import} alt="" />
                <h3 className={cx("title")}>
                  <FormattedMessage id="Home.Section5.Lists.0.Title" />
                </h3>
                <p className={cx("des")}>
                  <FormattedMessage id="Home.Section5.Lists.0.Des" />
                </p>
              </li>
              <li>
                <img src={markdown_export} alt="" />
                <h3 className={cx("title")}>
                  <FormattedMessage id="Home.Section5.Lists.1.Title" />
                </h3>
                <p className={cx("des")}>
                  <FormattedMessage id="Home.Section5.Lists.1.Des" />
                </p>
              </li>
            </ul>
          </div>
        </section>
        <section className={cx("section6")}>
          <div className="wrap-container ">
            <h2 className={cx("title")}>
              <FormattedMessage id="Home.Section6.Title" />
            </h2>
            <img className={cx("banner")} src={banner6} alt="" />
          </div>
        </section>
        <section className={`wrap-container ${cx("section7")}`}>
          <h2 className={cx("title")}>
            <FormattedMessage id="Home.Section7.Title" />
          </h2>
          <p className={cx("subTitle")}>
            <FormattedMessage id="Home.Section7.SubTitle" />
          </p>
          <img className={cx("banner")} src={banner7} alt="" />
          <Link to="/pricing" className={cx("btn")}>
            <FormattedMessage id="Home.Section7.Btn" />
          </Link>
        </section>
      </Layout>
    )}
  />
);

export default withIntl(IndexPage);

const homeQuery = graphql`
  query {
    banner1: file(relativePath: { eq: "home/banner1.png" }) {
      childImageSharp {
        fluid(quality: 90) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    banner3: file(relativePath: { eq: "home/banner3.png" }) {
      childImageSharp {
        fluid(quality: 90) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
