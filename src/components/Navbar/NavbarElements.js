import styled from 'styled-components'
import { FaBars } from 'react-icons/fa'

export const Nav = styled.nav`
    background: black;
    height: 10px;
    display: flex;
    justify-content: space-between;
    padding: 2.5rem;
    z-index: 10;
    color: #fff;
`

export const Info = styled.a`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &.active {
        color: white;
    }
`

export const Bars = styled(FaBars)`
    display: none;
    color: white;

    @media screen and (max-width: 768px) {
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      transform: translate(-100%, 75%);
      font-size: 1.8rem;
      cursor: pointer; 
    }
`

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -24px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const Text = styled.a`
    display: flex;
    align-items: center;
    margin-left: -160px;
    color: white;
    font-size: 20px;
    text-align: center;
`