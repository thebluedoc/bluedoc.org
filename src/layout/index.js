import React from "react"
import PropTypes from "prop-types"
import { injectIntl } from 'react-intl'
import '../../static/iconfont.js';

import 'normalize.css'
import './global.css'

import Header from "../components/header"
import Footer from "../components/footer"

const Layout = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
    <Footer />
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default injectIntl(Layout)
