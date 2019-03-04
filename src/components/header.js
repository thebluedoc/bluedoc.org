import { Link } from '../i18n'
import React from 'react'
import { FormattedMessage } from 'react-intl'

import Language from './language'
import cn from './header.module.scss'
import logo from '../images/logo.svg';

const menuLinks = [
  // {
  //   name: 'Enterprise',
  //   link: '/enterprise/'
  // },
  // {
  //   name: 'Pricing',
  //   link: '/pricing/'
  // },
  // {
  //   name: 'About',
  //   link: '/about/'
  // }
]


const Header = () => (
  <header className={cn.wrap}>
    <div className={`wrap-container ${cn.header}`}>
      <Link to='/' className={cn.logo}>
        <img src={logo}></img>
      </Link>
      <nav className={cn.nav}>
        {
          menuLinks.map(({link, name}) => 
            <Link className={cn.link} key={link} to={link} activeClassName='active'>
              <FormattedMessage id={`Header.${name}`}/>
            </Link>
          )
        }
        <a className={cn.lnk} href="https://bluedoc.io/bluedoc/help">
          <FormattedMessage id="Header.Help"/>
        </a>
      </nav>
      <Language />
    </div>
  </header>
)

export default Header
