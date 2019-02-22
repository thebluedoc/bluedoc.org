import React from "react"
import PropTypes from "prop-types"
import { injectIntl } from 'react-intl'

import 'normalize.css'
import './global.css'

import Header from "../components/header"

const Layout = ({ full = false, children }) => (
  <>
    <Header />
    <main>{children}</main>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default injectIntl(Layout)
