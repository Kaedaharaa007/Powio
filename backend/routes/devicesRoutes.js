import express from 'express'
import { createDevice, deleteDevice, getAllDevices } from '../controller/devicesController.js'

const route = express.Router()

route.post('/', createDevice)
route.get('/', getAllDevices)
route.delete('/:deviceId',deleteDevice)

export default route