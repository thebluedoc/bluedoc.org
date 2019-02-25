import { Link } from '../i18n'
import React from 'react'
import { FormattedMessage } from 'react-intl'

import Language from './language'
import cn from './header.module.css'

const menuLinks = [
  {
    name: 'Enterprise',
    link: '/enterprise/'
  },
  {
    name: 'Pricing',
    link: '/pricing/'
  },
  {
    name: 'About',
    link: '/about/'
  },
  {
    name: 'Help',
    link: '/help/'
  }
]


const Header = () => (
  <header className={`wrap-container ${cn.header}`}>
    <nav className={cn.nav}>
      <Link to='/' className={cn.logo}>BlueDoc</Link>
      {
        menuLinks.map(({link, name}) => 
          <Link className={cn.link} key={link} to={link} activeClassName='active'>
            <FormattedMessage id={`Header.${name}`}/>
          </Link>
        )
      }
    </nav>
    <Language />
  </header>
)

export default Header
