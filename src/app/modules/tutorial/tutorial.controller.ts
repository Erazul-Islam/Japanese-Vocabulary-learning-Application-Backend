import { Request, Response } from "express"
import catchAsync from "../../utiils/catchAsync"
import sendResponse from "../../utiils/sendResponse"
import { tutorialService } from "./tutorial.service"

const AddingLession = catchAsync(async (req: Request, res: Response) => {
    const result = await tutorialService.addTutorial(req.body)
    sendResponse(res, {
        statusCode: 200,
        status: 200,
        success: true,
        message: 'Tutorial added Successfully',
        data: result
    })
})

const getAllLession = async (req: Request, res: Response) => {

    try {
        const result = await tutorialService.getAllTutorialFromDB()
        res.status(200).json({
            statusCode: 200,
            status: 200,
            success: true,
            message: "Tutorial retrieved successfully",
            data: result
        })
    } catch (err) {
        console.log(err)
    }
}

const deleteSingleTutorial = async (req: Request, res: Response) => {

    try {
        const TutorialId = req.params.tutorialId
        const result = await tutorialService.deletedFromDB(TutorialId)
        res.status(200).json({
            success: true,
            message: "Tutorial deleted successfully!",
            data: result
        })
    } catch (err) {
        console.log(err)
    }

}

export const tutorialController = {
    AddingLession,
    getAllLession,
    deleteSingleTutorial
}