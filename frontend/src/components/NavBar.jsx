import React, { useContext } from 'react'
import { context } from '../index'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import { NavLink } from 'react-router-dom'
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/consts'
import { observer } from 'mobx-react-lite'
import Container from "react-bootstrap/Container";
import { useHistory } from 'react-router-dom'

const NavBar = observer(() => {
   const { user } = useContext(context)
   const history = useHistory()
   return (
      <Navbar bg="primary" variant="dark">
         <Container>
            <NavLink style={{ color: 'white' }} to={SHOP_ROUTE}>Онлайн Магазин</NavLink>
            {user.isAuth // условный рендеринг, если пользователь еще не авторизовался
               ?
               <Nav className="ml-auto" style={{ color: 'white' }}>
                  <Button variant="success" onClick={() => history.push(ADMIN_ROUTE)} >Панель администратора</Button>
                  <Button variant="success" onClick={() => history.push(LOGIN_ROUTE)} className='mx-3'>Выйти</Button>
               </Nav>
               :
               <Nav className="ml-auto" style={{ color: 'white' }}>
                  <Button variant="success" onClick={() => user.setIsAuth(true)}>Авторизация</Button>
               </Nav>
            }
         </Container>



      </Navbar>

   )
})

export default NavBar
