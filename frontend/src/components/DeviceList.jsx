import React, { useContext } from 'react'
import { observer } from 'mobx-react-lite'
import { context } from '../index'
import { Row } from 'react-bootstrap'
import DeviceItem from './DeviceItem'

const DeviceList = observer(() => {
   const { device } = useContext(context)
   return (
      <div>
         <Row className='d-flex '>
            {device.devices.map(device =>
               <DeviceItem key={device.id} device={device} />
            )}
         </Row>
      </div>
   )
})

export default DeviceList
