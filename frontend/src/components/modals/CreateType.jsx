import React, { useState } from 'react'
import { Form, Modal } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import { createType } from '../../http/deviceAPI'
// модальное окно для создания типа девайса 
const CreateType = ({ show, onHide }) => {

   const [value, setValue] = useState('') // делаем инпут контроллируемым

   const addType = () => {
      createType({ name: value })
         .then(data => {
            setValue('')
            onHide()
         })
   }
   return (
      <Modal
         show={show}
         onHide={onHide}
         size="lg"
         aria-labelledby="contained-modal-title-vcenter"
         centered
      >
         <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
               Добавить новый тип
            </Modal.Title>
         </Modal.Header>
         <Modal.Body>
            <Form>
               <Form.Control
                  value={value}
                  onChange={e => e.target.value}
                  placeholder='Введите название типа'
               />
            </Form>
         </Modal.Body>
         <Modal.Footer>
            <Button variant='outline-danger' onClick={onHide}>Закрыть</Button>
            <Button variant='outline-success' onClick={addType}>Добавить</Button>
         </Modal.Footer>
      </Modal>
   )
}

export default CreateType
