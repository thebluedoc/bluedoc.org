import React from "react"
import { StaticQuery, graphql } from 'gatsby'
import { FormattedMessage } from 'react-intl'
import Img from 'gatsby-image'
import { withIntl } from '../i18n'

import Layout from "../layout"
import SEO from "../components/seo"
import cn from './index.module.scss';

import banner3 from '../images/home/banner3.png';
import banner7 from '../images/home/banner7.png';

const IndexPage = () => (
  <StaticQuery 
    query={homeQuery}
    render={data => (
      <Layout>
        <SEO title="Home" keywords={['bluedoc']} />
        <section className={`wrap-container ${cn.section1}`}>
          <h1 className={cn.title}><FormattedMessage id="Home.Section1.Title"/></h1>
          <p className={cn.subTitle}><FormattedMessage id="Home.Section1.SubTitle"/></p>
          <Img className={cn.banner} style={{position: 'absolute'}} fluid={data.banner1.childImageSharp.fluid}/>
        </section>
        <section className={`${cn.section2}`}>
          <div className="wrap-container ">
            <h2 className={cn.title}><FormattedMessage id="Home.Section2.Title"/></h2>
            <p className={cn.subTitle}><FormattedMessage id="Home.Section2.SubTitle"/></p>
            <ul>
              <li>
                <img src="https://via.placeholder.com/107"></img>
                <h3 className={cn.title}><FormattedMessage id="Home.Section2.Lists.0.Title"/></h3>
                <p className={cn.des}><FormattedMessage id="Home.Section2.Lists.0.Des"/></p>
              </li>
              <li>
                <img src="https://via.placeholder.com/107"></img>
                <h3 className={cn.title}><FormattedMessage id="Home.Section2.Lists.1.Title"/></h3>
                <p className={cn.des}><FormattedMessage id="Home.Section2.Lists.1.Des"/></p>
              </li>
              <li>
                <img src="https://via.placeholder.com/107"></img>
                <h3 className={cn.title}><FormattedMessage id="Home.Section2.Lists.2.Title"/></h3>
                <p className={cn.des}><FormattedMessage id="Home.Section2.Lists.2.Des"/></p>
              </li>
            </ul>
          </div>
        </section>
        <section className={`wrap-container ${cn.section3}`}>
          <img className={cn.banner} src={banner3} alt=""></img>
          <ul>
            <li>
              <h3 className={cn.title}><FormattedMessage id="Home.Section3.Lists.0.Title"/></h3>
              <p className={cn.des}><FormattedMessage id="Home.Section3.Lists.0.Des"/></p>
            </li>
            <li>
              <h3 className={cn.title}><FormattedMessage id="Home.Section3.Lists.1.Title"/></h3>
              <p className={cn.des}><FormattedMessage id="Home.Section3.Lists.1.Des"/></p>
            </li>
            <li>
              <h3 className={cn.title}><FormattedMessage id="Home.Section3.Lists.2.Title"/></h3>
              <p className={cn.des}><FormattedMessage id="Home.Section3.Lists.2.Des"/></p>
            </li>
          </ul>
        </section>
        <section className={cn.section4}>
          <div className="wrap-container ">
            <h2 className={cn.title}><FormattedMessage id="Home.Section4.Title"/></h2>
            <p className={cn.subTitle}><FormattedMessage id="Home.Section4.SubTitle"/></p>
          </div>
          <ul>
            <li>
              <img src="https://via.placeholder.com/107"></img>
            </li>
            <li>
              <img src="https://via.placeholder.com/107"></img>
            </li>
            <li>
              <img src="https://via.placeholder.com/107"></img>
            </li>
          </ul>
        </section>
        <section className={cn.section5}>
          <div className="wrap-container ">
            <ul>
              <li>
                <h3 className={cn.title}><FormattedMessage id="Home.Section5.Lists.0.Title"/></h3>
                <p className={cn.des}><FormattedMessage id="Home.Section5.Lists.0.Des"/></p>
              </li>
              <li>
                <h3 className={cn.title}><FormattedMessage id="Home.Section5.Lists.1.Title"/></h3>
                <p className={cn.des}><FormattedMessage id="Home.Section5.Lists.1.Des"/></p>
              </li>
            </ul>
          </div>
        </section>
        <section className={cn.section6}>
          <div className="wrap-container ">
            <h2 className={cn.title}><FormattedMessage id="Home.Section6.Title"/></h2>
          </div>
        </section>
        <section className={`wrap-container ${cn.section7}`}>
          <h2 className={cn.title}><FormattedMessage id="Home.Section7.Title"/></h2>
          <p className={cn.subTitle}><FormattedMessage id="Home.Section7.SubTitle"/></p>
          <img src={banner7} alt=""></img>
        </section>
      </Layout>
    )}
  />
)

export default withIntl(IndexPage)


const homeQuery = graphql`
  query {
    banner1: file(relativePath: { eq: "home/banner1.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`