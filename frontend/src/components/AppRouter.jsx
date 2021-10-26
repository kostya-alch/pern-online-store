import React, { useContext } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { context } from '../index'
import { authRoutes, publicRoutes } from '../routes'
import { SHOP_ROUTE } from '../utils/consts'


const AppRouter = () => {
   const { user } = useContext(context)
   return (
      <Switch>
         {user.isAuth && authRoutes.map(({ path, Component }) => {
            return <Route key={path} path={path} component={Component} exact /> // вывод маршуртов для авторизованных юзера
         })}
         {publicRoutes.map(({ path, Component }) => {
            return <Route key={path} path={path} component={Component} exact /> // вывод маршуртов для любых юзеров
         })}
         <Redirect to={SHOP_ROUTE} />
      </Switch>
   )
}

export default AppRouter
