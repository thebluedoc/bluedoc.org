import React from 'react'
import cn from './footer.module.css'

const Footer = () => (
  <footer className={cn.wrap}>
    <div className={`wrap-container ${cn.footer}`}>
      <span className={cn.copyright}>© 2019 Bluedoc. All rights reserved.</span>
      <div className={cn.links}>
        <a className={cn.link} href="#">Feedback</a>
        <a className={cn.link} href="#">Help</a>
        <a className={cn.link} href="#">About Bluedoc</a>
      </div>
    </div>
  </footer>
)

export default Footer
