import config from "../../config";
import { lessionModel } from "../lessons/lession.model";
import { User } from "../users/user.model";
import { IVocabulary } from "./vocabulary.interface"
import { vocabularyModel } from "./vocabulary.model"
import jwt from 'jsonwebtoken'




// const addVocabulary = async (lessionId: string, word: string, pronunciation: string, whenToSay: string, lessionNo: number, token: string) => {
//     const decoded = jwt.verify(token, config.jwtAccessSecret as string)

//     if (typeof decoded === 'string' || !('email' in decoded)) {
//         throw new Error('Invalid token structure');
//     }

//     const finduser = await User.findOne({ email: decoded.email })

//     if (!finduser) {
//         throw new Error("User not found")
//     }

//     const newVocabulary: IVocabulary = {
//         userId: finduser._id.toString(),
//         userName: finduser.name,
//         adminEmail: finduser?.email,
//         word: word,
//         pronunciation: pronunciation,
//         whenToSay: whenToSay,
//         lessonNo: lessionNo,
//     }

//     const result = await lessionModel.findByIdAndUpdate(lessionId, { $push: { comments: newVocabulary } }, { new: true })

//     if (!result) {
//         throw new Error("Post not found");
//     }

//     return result
// }

const getAllVocabularyFromDB = async () => {
    const result = await vocabularyModel.find()
    return result
}

const getUpdatedVocabularyFromDB = async (id: string, payload: Partial<IVocabulary>) => {
    try {
        const updatedProduct = await vocabularyModel.findOneAndUpdate({ _id: id }, payload, { new: true })
        return updatedProduct
    } catch (error) {
        console.log(error)
    }
}

const getSingleVocabularyFromDB = async (id: string) => {

    try {
        const updatedProduct = await vocabularyModel.findOne({ _id: id })
        return updatedProduct
    } catch (error) {
        console.log(error)
    }
}

const deletedFromDB = async (id: string) => {
    const result = await vocabularyModel.deleteOne({ _id: id })
    return result
}

export const vocabularyService = {
    // addVocabulary,
    getAllVocabularyFromDB,
    getUpdatedVocabularyFromDB,
    getSingleVocabularyFromDB,
    deletedFromDB
}