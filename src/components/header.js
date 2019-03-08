import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'
import { languageSuffix } from '../utils'
import { Link } from '../i18n'

import Language from './language'
import cn from './header.module.scss'
import logo from '../images/logo.png';

const menuLinks = [
  // {
  //   name: 'Enterprise',
  //   link: '/enterprise/'
  // },
  // {
  //   name: 'Pricing',
  //   link: '/pricing/'
  // },
]

class Header extends PureComponent {
  constructor(props, context) {
    super(props);
    this.suffix = languageSuffix(context.language.locale);
  }

  static contextTypes = {
    language: PropTypes.object,
  }

  render() {
    return (
      <header className={cn.wrap}>
        <div className={`wrap-container ${cn.header}`}>
          <Link to='/' className={cn.logo}>
            <img src={logo} alt="logo" />
            <span style={{color: '#165eff'}}>Blue</span>
            <span style={{color: '#8b96ad'}}>Doc</span>
          </Link>
          <nav className={cn.nav}>
            {
              menuLinks.map(({link, name}) => 
                <Link className={cn.link} key={link} to={link} activeClassName='active'>
                  <FormattedMessage id={`Header.${name}`}/>
                </Link>
              )
            }
            <a className={cn.link} href={`https://bluedoc.io/bluedoc/help${this.suffix}/about`}>
              <FormattedMessage id="Header.About"/>
            </a>
            <a className={cn.link} href={`https://bluedoc.io/bluedoc/help${this.suffix}`}>
              <FormattedMessage id="Header.Help"/>
            </a>
          </nav>
          <Language />
        </div>
      </header>
    )
  }
}

export default Header
