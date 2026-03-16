import Device from '../model/devicesModel.js'

export const createDevice = async(req,res)=>{
    try {
        const newDevice = new Device(req.body);
        const {deviceId} = newDevice

        const deviceExist = await Device.findOne({deviceId})
        if(deviceExist){
            return res.status(400).json({message:`Device with id ${deviceId} exist`})
        }

        const savedDevice = await newDevice.save()
        res.status(200).json({savedDevice})

    } catch (error) {
        res.status(500).json({message:'Internal server error'})
    }
}

export const getAllDevices = async(req,res) =>{
    try {
        const devices = await Device.find()
        if(devices.length === 0){
            return res.status(200).json({message:'No devices detected'})
        }

        return res.status(200).json(devices)
    } catch (error) {
        res.status(500).json({message:'Internal server error'})
    }
}