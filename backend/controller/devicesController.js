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
        res.status(201).json({savedDevice})

    } catch (error) {
        res.status(500).json({message:'Internal server error'})
    }
}

export const getAllDevices = async(req,res) =>{
    try {
        const devices = await Device.find()
        if(devices.length === 0){
            return res.status(200).json(devices)
        }

        return res.status(200).json(devices)
    } catch (error) {
        res.status(500).json({message:'Internal server error'})
    }
}

export const deleteDevice = async (req,res)=>{
    
    try {
        const deviceId = req.params.deviceId
        const deviceExist = await Device.findOne({deviceId: deviceId}) 
        
        if(!deviceExist){
            return res.status(400).json({message: `Device with ${deviceId} doesnt exist`})
        }
        
        await Device.findOneAndDelete({deviceId: deviceId})

        return res.status(200).json({message: 'Device deleted succsessfully'})    
    } catch (error) {
        res.status(500).json({message: 'Internal server error'})
    }
    
}