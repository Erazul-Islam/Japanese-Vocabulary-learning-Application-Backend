import { Request, Response } from "express"
import catchAsync from "../../utiils/catchAsync"
import sendResponse from "../../utiils/sendResponse"
import { vocabularyService } from "./vocabulary.service"

// const AddingVocabulary = catchAsync(async (req: Request, res: Response) => {
//     const { lessonId } = req.params
//     const { vocabulary } = req.body

//     const word = vocabulary[0].word
//     const pronunciation = vocabulary[1].pronunciation
//     const whenToSay = vocabulary[2].whenToSay
//     const lessonNo = vocabulary[3].lessonNo

//     const token = req.headers.authorization?.split(" ")[1]

//     if (!token) {
//         return sendResponse(res, {
//             success: false,
//             status: 401,
//             message: "Unauthorized",
//             data: null,
//             statusCode: 401,
//         });
//     }


//     const result = await vocabularyService.addVocabulary(lessonId, word,pronunciation,whenToSay,lessonNo, token as string);

//     sendResponse(res, {
//         statusCode: 200,
//         status: 200,
//         success: true,
//         message: 'Vocabulary added Successfully',
//         data: result
//     })
// })

const getAllVocabulary = async (req: Request, res: Response) => {

    try {
        const result = await vocabularyService.getAllVocabularyFromDB()
        res.status(200).json({
            statusCode: 200,
            status: 200,
            success: true,
            message: "Vocabulary retrieved successfully",
            data: result
        })
    } catch (err) {
        console.log(err)
    }
}
const getSingleVocabulary = async (req: Request, res: Response) => {

    const vocabularyId = req.params.vocabularyId

    try {
        const result = await vocabularyService.getSingleVocabularyFromDB(vocabularyId)
        res.status(200).json({
            statusCode: 200,
            status: 200,
            success: true,
            message: "Vocabulary retrieved successfully",
            data: result
        })
    } catch (err) {
        console.log(err)
    }
}

const getUpdatedVocabulary = async (req: Request, res: Response) => {
    const vocabularyId = req.params.vocabularyId
    const updatedData = req.body

    try {
        const updatedBike = await vocabularyService.getUpdatedVocabularyFromDB(vocabularyId, updatedData)

        res.status(200).json({
            success: true,
            message: "Vocabulary updated successfully!",
            data: updatedBike
        })
    } catch (err) {
        console.log(err)
    }
}


const deleteSingleVocabulary = async (req: Request, res: Response) => {

    try {

        const vocabularyId = req.params.vocabularyId

        const result = await vocabularyService.deletedFromDB(vocabularyId)
        res.status(200).json({
            success: true,
            message: "Vocabulary deleted successfully!",
            data: result
        })
    } catch (err) {
        console.log(err)
    }

}

export const vocabularyController = {
    // AddingVocabulary,
    getAllVocabulary,
    getUpdatedVocabulary,
    deleteSingleVocabulary,
    getSingleVocabulary,

}