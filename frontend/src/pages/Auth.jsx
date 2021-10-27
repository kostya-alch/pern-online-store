import Button from 'react-bootstrap/Button'
import React from 'react'
import { Container, Form } from 'react-bootstrap'
import Card from 'react-bootstrap/esm/Card'
import { NavLink } from 'react-router-dom'
import { useLocation } from 'react-router'
import { LOGIN_ROUTE, REGISTATION_ROUTE } from '../utils/consts'
import Row from 'react-bootstrap/Row'


const Auth = () => {
   const location = useLocation() // хук, который отслеживает наши маршруты 
   const isLogin = location.pathname === LOGIN_ROUTE // проверяем, совпадает ли адрес ссылки с роутом логина

   return (
      <Container className='d-flex justify-content-center align-items-center'
         style={{ height: window.innerHeight - 54 }}>
         <Card style={{ width: 600 }} className='p-5'>
            <h2 className='m-auto '>{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
            <Form className='d-flex flex-column'>
               <Form.Control
                  placeholder='Введите ваш email'
                  className='mt-4'
               />
               <Form.Control
                  placeholder='Введите ваш пароль'
                  className='mt-4'
               />
               <Row className='d-flex justify-content-between mt-3 pl-3 pr-3'>

                  {
                     isLogin
                        ? <div className='mb-3'>
                           Нет аккаунта? <NavLink to={REGISTATION_ROUTE}>Зарегистрируйтесь!</NavLink>
                        </div>
                        : <div className='mb-3'>
                           Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войдите!</NavLink>
                        </div>
                  }
                  <Button
                     variant={'outline-success'}
                  >
                     {isLogin ? 'Войти' : 'Регистрация'}
                  </Button>
               </Row>
            </Form>
         </Card>
      </Container>
   )
}

export default Auth
