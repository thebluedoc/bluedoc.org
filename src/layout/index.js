import React from "react";
import PropTypes from "prop-types";
import { injectIntl } from "react-intl";

import "normalize.css";
import "./global.scss";
import "../styles/index.scss";

import Header from "../components/header";
import Footer from "../components/footer";

global.Intl = require("intl");

const Layout = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
    <Footer />
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default injectIntl(Layout);
