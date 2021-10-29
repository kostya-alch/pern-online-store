import React from 'react'
import { Card, Col, Container, Image, Row, Button } from 'react-bootstrap'
import starBig from '../assets/StarBig.png'
const DevicePage = () => {
   const device = {
      id: 5,
      name: 'Iphone 12',
      price: 25000,
      rating: 5,
      img: 'https://proprikol.ru/wp-content/uploads/2021/01/krasivye-kartinki-sobak-44.jpg',
   }
   const description = [
      { id: 1, title: 'Оперативная память', description: '5 гб' },
      { id: 2, title: 'Камера', description: '12 мп' },
      { id: 3, title: ' Процессор', description: '5 потоков' },
      { id: 4, title: 'Аккумулятор ', description: '4000' },
   ]
   return (

      <Container className='mt-3'>
         <Row>
            <Col md={4}>
               <Image height={300} width={300} src={device.img} />
            </Col>
            <Col md={4}>
               <Row className='d-flex flex-column align-items-center'>
                  <h2 className='d-flex flex-column align-items-center'>{device.name}</h2>
                  <div
                     className='d-flex align-items-center justify-content-center'
                     style={{ background: `url(${starBig}) no-repeat center center`, width: 240, height: 240, backgroundSize: 'cover', fontSize: 48 }}
                  >
                     {device.rating}
                  </div>

               </Row>
            </Col>
            <Col md={4}>
               <Card className='d-flex flex-column align-items-center justify-content-around'
                  style={{ width: 300, height: 300, fontSize: 32, border: '5px solid lightgray' }}>
                  <h3>От: {device.price} руб.</h3>
                  <Button variant={'outline-dark'}>Добавить в корзину</Button>
               </Card>
            </Col>
         </Row>
         <Row className='d-flex flex-column m-3'>
            <h1>Характеристики</h1>
            {description.map((info, index) =>
               <Row key={info.id} style={{ background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10 }}>
                  {info.title}: {info.description}
               </Row>
            )}
         </Row>
      </Container>
   )
}

export default DevicePage
