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

const AddingVocabulary = catchAsync(async (req: Request, res: Response) => {
    const { lessonId } = req.params

    const { vocabulary } = req.body


    const word = vocabulary[0].word
    const pronunciation = vocabulary[0].pronunciation
    const whenToSay = vocabulary[0].whenToSay
    const lessonNo = vocabulary[0].lessonNo

    const token = req.headers.authorization?.split(" ")[1]

    if (!token) {
        return sendResponse(res, {
            success: false,
            status: 401,
            message: "Unauthorized",
            data: null,
            statusCode: 401,
        });
    }


    const result = await lessionService.addVocabulary(lessonId, word,pronunciation,whenToSay,lessonNo, token as string);
    console.log(result)

    sendResponse(res, {
        statusCode: 200,
        status: 200,
        success: true,
        message: 'Vocabulary added Successfully',
        data: result
    })
})


const deleteVocabularyController = catchAsync(async (req: Request, res: Response) => {
    const { lessonId, vocabularyId } = req.params;
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
        return sendResponse(res, {
            success: false,
            status: 401,
            message: "Unauthorized",
            data: null,
            statusCode: 401,
        });
    }

    const updatedPost = await lessionService.DeleteVocabulary(lessonId, vocabularyId, token as string);

    sendResponse(res, {
        success: true,
        status: 200,
        message: "Vocabulary deleted successfully",
        data: updatedPost,
        statusCode: 200,
    });
});

const editVocabularyController = catchAsync(async (req: Request, res: Response) => {
    const { lessonId, vocabularyId } = req.params
    const { vocabulary } = req.body


    const word = vocabulary[0].word
    const pronunciation = vocabulary[0].pronunciation
    const whenToSay = vocabulary[0].whenToSay
    const lessonNo = vocabulary[0].lessonNo

    const token = req.headers.authorization?.split(" ")[1]

    if (!token) {
        return sendResponse(res, {
            success: false,
            status: 401,
            message: "Unauthorized",
            data: null,
            statusCode: 401,
        });
    }

    const updatedComment = await lessionService.EditVocabulary(lessonId, vocabularyId, word, pronunciation,whenToSay,lessonNo, token as string)

    sendResponse(res, {
        success: true,
        status: 200,
        message: "Vocabulary updated successfully",
        data: updatedComment,
        statusCode: 200,
    });
})


export const lessionController = {
    AddingLession,
    getAllLession,
    getUpdatedLession,
    deleteSingleLession,
    getSingleLession,
    AddingVocabulary,
    deleteVocabularyController,
    editVocabularyController

}