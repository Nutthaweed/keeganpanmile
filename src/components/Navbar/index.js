import React from 'react'
import { Nav, Info ,Bars, NavMenu, Text } from './NavbarElements'

const Navbar = () => {
    return (
        <>
         <Nav>
         <Info href='/'>
          <img src={require('../../img/logo.png')} alt='logo' />
        </Info>
        <Bars />
        <Text>Panmile Paisantanajit</Text>
        <NavMenu>
          <Info href='https://www.facebook.com/panmile.paisantanajit' activeStyle>
            Facebook
          </Info>
          <Info href='https://www.instagram.com/keeganpanmile/' activeStyle>
           Instagram
          </Info>
          <Info href='https://www.facebook.com/people/%E0%B9%80%E0%B8%81%E0%B8%B2%E0%B8%B0%E0%B8%A5%E0%B9%89%E0%B8%AD-%E0%B8%9E%E0%B8%B2%E0%B9%80%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%A2%E0%B8%A7/100044151767901/' activeStyle>
            My Work Page
          </Info>
          <Info href='https://www.youtube.com/channel/UCCva9l5GAPlTBpPhLTPcifA' activeStyle>
             Youtube
          </Info>
          <Info href='https://mywebsite-nutthaweed.vercel.app/' activeStyle>
             Creator
          </Info>
        </NavMenu>
         </Nav>
        </>
    )
}

export default Navbar