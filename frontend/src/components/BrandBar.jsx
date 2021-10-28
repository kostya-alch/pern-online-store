import React, { useContext } from 'react'
import { observer } from 'mobx-react-lite'
import { context } from '../index'
import { Card, Row } from 'react-bootstrap'

const BrandBar = observer(() => {
   const { device } = useContext(context)
   return (
      <div>
         <Row className="d-flex">
            {device.brands.map(brand =>
               <Card
                  style={{ cursor: 'pointer' }}
                  key={brand.id}
                  className='p-3'
                  onClick={() => device.setSelectedBrand(brand)}
                  border={brand.id === device.selectedBrand.id ? 'danger' : 'light'}

               >
                  {brand.name}
               </Card>
            )}

         </Row>
      </div>
   )
})

export default BrandBar
