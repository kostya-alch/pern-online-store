import React, { useContext } from 'react'
import { observer } from 'mobx-react-lite'
import { context } from '../index'
import { ListGroup } from 'react-bootstrap'
// компонент левого меню товаров
const TypeBar = observer(() => {
   const { device } = useContext(context)
   return ( // пробегаемся мапом, чтобы вывести все типы товаров из БД
      <ListGroup>
         {device.types.map(type =>
            <ListGroup.Item
               style={{ cursor: 'pointer' }}
               active={type.id === device.selectedType.id} // кнопка активна, если айди типа совпдаает с айди выбранного типа
               onClick={() => device.setSelectedType(type)}
               key={type.id}>
               {type.name}</ListGroup.Item>
         )}
      </ListGroup>
   )
})

export default TypeBar
