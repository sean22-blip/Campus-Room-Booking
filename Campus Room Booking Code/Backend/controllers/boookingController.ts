import {Booking} from '../models/booking'
import { Request, Response } from 'express'
/**
 * @openapi
 * 
 *  */;
export const getInfo = async(req: Request, res: Response) => {
    const id = req.params.id as string;
    if(!id){
        console.log('id must be provided!')
        return res.status(400).json(`id must be provided!`)
    }
    try {
        const numId = parseInt(id);
        const findId = await Booking.findByPk(numId);
        if(!findId){
            console.log(`Error: this id cannot be find! `);
            return res.status(404).json(`cannot find booking with this ID!`)
        }
       return res.status(200).json(findId)
    } catch (error) {
        console.log(`Error: ${error}`, `there is an error inside the bookingController Backend!`)
        return res.status(500).json({error: error})
    }
}