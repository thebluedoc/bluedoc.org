import React from "react"
import { FormattedMessage } from 'react-intl'
import { withIntl } from '../i18n'

import Layout from "../layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import cn from './index.module.css';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={['bluedoc']} />
    <section className="wrap-container section-1">
      <h1 className={cn.title}><FormattedMessage id="Home.Section1.Title"/></h1>
      <p className={cn.title}><FormattedMessage id="Home.Section1.SubTitle"/></p>
    </section>
    <section className="wrap-container section-2">
      <h1 className={cn.title}><FormattedMessage id="Home.Section2.Title"/></h1>
      <p className={cn.title}><FormattedMessage id="Home.Section2.SubTitle"/></p>
      <ul>
        <li>
          <div><FormattedMessage id="Home.Section2.Lists.0.Title"/></div>
          <p><FormattedMessage id="Home.Section2.Lists.0.Des"/></p>
        </li>
        <li>
          <div><FormattedMessage id="Home.Section2.Lists.1.Title"/></div>
          <p><FormattedMessage id="Home.Section2.Lists.1.Des"/></p>
        </li>
        <li>
          <div><FormattedMessage id="Home.Section2.Lists.2.Title"/></div>
          <p><FormattedMessage id="Home.Section2.Lists.2.Des"/></p>
        </li>
      </ul>
    </section>
    <section className="wrap-container section-3">
      <ul>
        <li>
          <div><FormattedMessage id="Home.Section3.Lists.0.Title"/></div>
          <p><FormattedMessage id="Home.Section3.Lists.0.Des"/></p>
        </li>
        <li>
          <div><FormattedMessage id="Home.Section3.Lists.1.Title"/></div>
          <p><FormattedMessage id="Home.Section3.Lists.1.Des"/></p>
        </li>
        <li>
          <div><FormattedMessage id="Home.Section3.Lists.2.Title"/></div>
          <p><FormattedMessage id="Home.Section3.Lists.2.Des"/></p>
        </li>
      </ul>
    </section>
    <section className="wrap-container section-4">
      <h1 className={cn.title}><FormattedMessage id="Home.Section4.Title"/></h1>
      <p className={cn.title}><FormattedMessage id="Home.Section4.SubTitle"/></p>
    </section>
    <section className="wrap-container section-5">
      <ul>
        <li>
          <div><FormattedMessage id="Home.Section5.Lists.0.Title"/></div>
          <p><FormattedMessage id="Home.Section5.Lists.0.Des"/></p>
        </li>
        <li>
          <div><FormattedMessage id="Home.Section5.Lists.1.Title"/></div>
          <p><FormattedMessage id="Home.Section5.Lists.1.Des"/></p>
        </li>
        <li>
          <div><FormattedMessage id="Home.Section5.Lists.2.Title"/></div>
          <p><FormattedMessage id="Home.Section5.Lists.2.Des"/></p>
        </li>
      </ul>
    </section>
    <section className="wrap-container section-6">
      <h1 className={cn.title}><FormattedMessage id="Home.Section6.Title"/></h1>
    </section>
    <section className="wrap-container section-7">
      <h1 className={cn.title}><FormattedMessage id="Home.Section7.Title"/></h1>
      <p className={cn.title}><FormattedMessage id="Home.Section7.SubTitle"/></p>
    </section>
  </Layout>
)

export default withIntl(IndexPage)
