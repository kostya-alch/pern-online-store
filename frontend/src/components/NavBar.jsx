import React, { useContext } from 'react'
import { context } from '../index'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import { NavLink } from 'react-router-dom'
import { SHOP_ROUTE } from '../utils/consts'
import { observer } from 'mobx-react-lite'

const NavBar = observer(() => {
   const { user } = useContext(context)
   return (
      <Navbar bg="primary" variant="dark">

         <NavLink style={{ color: 'white' }} to={SHOP_ROUTE}>Онлайн Магазин</NavLink>
         {user.isAuth
            ?
            <Nav className="ml-auto" style={{ color: 'white' }}>
               <Button variant={'outline-light'}>Панель администратора</Button>
               <Button variant={'outline-light'}>Войти</Button>
            </Nav>
            :
            <Nav className="ml-auto" style={{ color: 'white' }}>
               <Button variant={'outline-light'} onClick={() => user.setIsAuth(true)}>Авторизация</Button>
            </Nav>
         }


      </Navbar>

   )
})

export default NavBar
