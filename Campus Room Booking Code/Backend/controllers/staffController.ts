import { Request, Response } from "express";
import { Staff } from "../models/staff";
/**
 * @openapi
 * /api/staff/profile/{id}:
 *   get:
 *     summary: Get a staff member's profile by ID
 *     tags: [Staff]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Staff profile found
 *       400:
 *         description: Invalid ID
 *       404:
 *         description: Staff not found
 */
export const viewProfile = async (req: Request, res: Response) => {
    const staffId = req.params.id as string;
    const numStaffId = parseInt(staffId, 10);

    if (isNaN(numStaffId)) {
        return res.status(400).json('id must be a valid number!');
    }

    try {
        const foundId = await Staff.findByPk(numStaffId);
        if (!foundId) {
            return res.status(404).json('cannot find staff with this ID!');
        }
        return res.status(200).json(foundId);
    } catch (error) {
        console.log(`Error: ${error}`);
        return res.status(500).json({ error: 'Something went wrong in the staffController' });
    }
}