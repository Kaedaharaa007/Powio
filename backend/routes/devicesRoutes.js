import express from 'express'
import { createDevice, getAllDevices } from '../controller/devicesController.js'

const route = express.Router()

route.post('/create', createDevice)
route.get('/getAll', getAllDevices)

export default route