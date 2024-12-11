import config from "../../config"
import { User } from "../users/user.model"
import { IVocabulary } from "../vocabulary/vocabulary.interface"
import { lessionModel } from "./lession.model"
import { TLession } from "./lesson.interface"
import jwt from 'jsonwebtoken'

const addLession = async (payload: TLession) => {
    const result = await lessionModel.create(payload)
    return result
}

const getAllLessionFromDB = async () => {
    const result = await lessionModel.find()
    return result
}

const getUpdatedLessionFromDB = async (id: string, payload: Partial<TLession>) => {
    try {
        const updatedProduct = await lessionModel.findOneAndUpdate({ _id: id }, payload, { new: true })
        return updatedProduct
    } catch (error) {
        console.log(error)
    }
}

const getSingleLessionFromDB = async (id: string) => {

    try {
        const updatedProduct = await lessionModel.findOne({ _id: id })
        return updatedProduct
    } catch (error) {
        console.log(error)
    }
}

const deletedFromDB = async (id: string) => {
    const result = await lessionModel.deleteOne({ _id: id })
    return result
}

const addVocabulary = async (lessionId: string, word: string, pronunciation: string, whenToSay: string, lessionNo: number, token: string) => {
    const decoded = jwt.verify(token, config.jwtAccessSecret as string)

    if (typeof decoded === 'string' || !('email' in decoded)) {
        throw new Error('Invalid token structure');
    }

    const finduser = await User.findOne({ email: decoded.email })

    if (!finduser) {
        throw new Error("User not found")
    }

    const newVocabulary: IVocabulary = {
        userId: finduser._id.toString(),
        userName: finduser.name,
        adminEmail: finduser?.email,
        word: word,
        pronunciation: pronunciation,
        whenToSay: whenToSay,
        lessonNo: lessionNo,
    }


    const result = await lessionModel.findByIdAndUpdate(lessionId, { $push: { vocabulary: newVocabulary } }, { new: true })

    if (!result) {
        throw new Error("Post not found");
    }

    return result
}

const DeleteVocabulary = async (lessionId: string, vocabularyId: string, token: string) => {
    const decoded = jwt.verify(token, config.jwtAccessSecret as string);

    if (typeof decoded === 'string' || !('email' in decoded)) {
        throw new Error('Invalid token structure');
    }

    const findUser = await User.findOne({ email: decoded.email });
    if (!findUser) {
        throw new Error("User not found");
    }

    const result = await lessionModel.findOneAndUpdate(
        { _id: lessionId },
        { $pull: { vocabulary: { _id: vocabularyId } } },
        { new: true }
    );

    if (!result) {
        throw new Error("Post not found or comment does not exist");
    }

    return result;
};

const EditVocabulary = async (lessionId: string, vocabularyId: string, word: string, pronunciation: string, whenToSay: string, lessonNo: number, token: string) => {
    const decoded = jwt.verify(token, config.jwtAccessSecret as string)

    if (typeof decoded === 'string' || !('email' in decoded)) {
        throw new Error('Invalid token structure');
    }

    const finduser = await User.findOne({ email: decoded.email })

    if (!finduser) {
        throw new Error("User not found")
    }

    const result = await lessionModel.findOneAndUpdate(
        { _id: lessionId, "vocabulary._id": vocabularyId },
        {
            $set: {
                "vocabulary.$.word": word,
                "vocabulary.$.pronunciation": pronunciation,
                "vocabulary.$.whenToSay": whenToSay,
                "vocabulary.$.lessonNo": lessonNo
            }
        },
        { new: true }
    )

    if (!result) {
        throw new Error("Lesson or vocabulary not found");
    }

    return result;
}



export const lessionService = {
    addLession,
    getAllLessionFromDB,
    getSingleLessionFromDB,
    getUpdatedLessionFromDB,
    deletedFromDB,
    addVocabulary,
    DeleteVocabulary,
    EditVocabulary
}