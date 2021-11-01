import { observer } from 'mobx-react-lite'
import React, { useContext, useEffect, useState } from 'react'
import { Col, Dropdown, Form, Modal, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import { createDevice, fetchBrands, fetchTypes } from '../../http/deviceAPI'
import { context } from '../../index'
// модальное окно для создания  девайса 
const CreateDevice = observer(({ show, onHide }) => {

   const { device } = useContext(context)
   const [info, setInfo] = useState([])
   const [name, setName] = useState('')
   const [price, setPrice] = useState(0)
   const [file, setFile] = useState(null)


   useEffect(() => {
      fetchTypes().then(data => device.setTypes(data))
      fetchBrands().then(data => device.setBrands(data))
   })

   const addInfo = () => { // функция добавляет характеристику товару
      setInfo([...info, { title: '', description: '', number: Date.now() }])
   }
   const removeInfo = (number) => { // функция удаляет характеристику товару
      setInfo(info.filter(i => i.number !== number))
   }
   const changeInfo = (key, value, number) => {
      setInfo(info.map(i => i.number === number ? { ...i, [key]: value } : i)) // функция изменения характеристик девайса
   }
   const selectFile = e => {
      setFile(e.target.files[0])
   }

   const addDevice = () => {
      const formData = new FormData()
      formData.append('name', name)
      formData.append('price', `${price}`)
      formData.append('img', file)
      formData.append('brandId', device.selectedBrand.id)
      formData.append('typeId', device.selectedType.id)
      formData.append('info', JSON.stringify(info))
      createDevice(formData).then(data => onHide())
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
               Добавить новое устройство
            </Modal.Title>
         </Modal.Header>
         <Modal.Body>
            <Form>
               <Dropdown className='mt-2 mb-2'>
                  <Dropdown.Toggle>
                     {device.selectedType.name || 'Выберите тип'}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                     {device.types.map(type =>
                        <Dropdown.Item onClick={() => device.setSelectedType(type)}
                           key={type.id}>
                           {type.name}
                        </Dropdown.Item>
                     )}
                  </Dropdown.Menu>
               </Dropdown>

               <Dropdown className='mt-2 mb-2'>
                  <Dropdown.Toggle>
                     {device.selectedBrand.name || 'Выберите бренд'}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                     {device.brands.map(brand =>
                        <Dropdown.Item
                           key={brand.id}
                           onClick={() => device.setSelectedBrand(brand)}>
                           {brand.name}
                        </Dropdown.Item>
                     )}
                  </Dropdown.Menu>
               </Dropdown>
               <Form.Control
                  className='mt-3'
                  onChange={e => setName(e.target.value)}
                  value={name}
                  placeholder='Введите название устройства'
                  type='number' />
               <Form.Control
                  onChange={e => setPrice(Number(e.target.value))}
                  value={price}
                  className='mt-3'
                  placeholder='Введите стоимость устройства'
                  type='number' />
               <Form.Control
                  className='mt-3'
                  type='file' />
               <hr />
               <Button
                  variant='outline-dark'
                  onClick={addInfo}>
                  Добавить новое свойство
               </Button>
               {
                  info.map(i =>
                     <Row className='mt-3' key={i.number}>
                        <Col md={4}>
                           <Form.Control
                              value={i.title}
                              onChange={(e) => changeInfo('title', e.target.value, i.number)}
                              placeholder='Введите название характеристики'
                           />
                        </Col>
                        <Col md={4}>
                           <Form.Control
                              value={i.description}
                              onChange={(e) => changeInfo('description', e.target.value, i.number)}
                              placeholder='Введите описание'
                           />
                        </Col>
                        <Col md={4}>
                           <Button
                              variant='outline-danger'
                              onClick={removeInfo(i.number)}
                           >
                              Удалить
                           </Button>
                        </Col>

                     </Row>
                  )
               }
            </Form>
         </Modal.Body>
         <Modal.Footer>
            <Button variant='outline-danger' onClick={onHide}>Закрыть</Button>
            <Button variant='outline-success' onClick={addDevice}>Добавить</Button>
         </Modal.Footer>
      </Modal>
   )
})

export default CreateDevice
