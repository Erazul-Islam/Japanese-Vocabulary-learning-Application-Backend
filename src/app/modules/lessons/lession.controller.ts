import { Request, Response } from "express"
import catchAsync from "../../utiils/catchAsync"
import { lessionService } from "./lession.service"
import sendResponse from "../../utiils/sendResponse"




const AddingLession = catchAsync(async (req: Request, res: Response) => {
    const result = await lessionService.addLession(req.body)
    sendResponse(res, {
        statusCode: 200,
        status: 200,
        success: true,
        message: 'Lession added Successfully',
        data: result
    })
})

const getAllLession = async (req: Request, res: Response) => {

    try {
        const result = await lessionService.getAllLessionFromDB()
        res.status(200).json({
            statusCode: 200,
            status: 200,
            success: true,
            message: "Lessions retrieved successfully",
            data: result
        })
    } catch (err) {
        console.log(err)
    }
}
const getSingleLession = async (req: Request, res: Response) => {

    const lessionId = req.params.lessionId

    try {
        const result = await lessionService.getSingleLessionFromDB(lessionId)
        res.status(200).json({
            statusCode: 200,
            status: 200,
            success: true,
            message: "Lession retrieved successfully",
            data: result
        })
    } catch (err) {
        console.log(err)
    }
}

const getUpdatedLession = async (req: Request, res: Response) => {
    const LessionId = req.params.lessionId
    const updatedData = req.body

    try {
        const updatedBike = await lessionService.getUpdatedLessionFromDB(LessionId, updatedData)

        res.status(200).json({
            success: true,
            message: "Lession updated successfully!",
            data: updatedBike
        })
    } catch (err) {
        console.log(err)
    }
}


const deleteSingleLession = async (req: Request, res: Response) => {

    try {

        const LessionId = req.params.lessionId

        const result = await lessionService.deletedFromDB(LessionId)
        res.status(200).json({
            success: true,
            message: "Lession deleted successfully!",
            data: result
        })
    } catch (err) {
        console.log(err)
    }

}

export const lessionController = {
    AddingLession,
    getAllLession,
    getUpdatedLession,
    deleteSingleLession,
    getSingleLession,

}