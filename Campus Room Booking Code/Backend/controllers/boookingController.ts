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
export const createBooking = async (req:Request, res: Response) => {
      const {student_id, booking_id}  = req.body ;
      if(!student_id){
        return res.status(400).json(`All field must be provided!`)
      } 
      const numStudentId = parseInt(student_id)
      try {
        const findStudent = Booking.findByPk(numStudentId);
        if(!findStudent){
            return res.status(404).json(`cannot find the student with this ID! `);
        }

      } catch (error) {
        console.log(`Error: ${error}`);
        return res.status(500).json({error: `something went wrong in the bookingController`})
      }
}