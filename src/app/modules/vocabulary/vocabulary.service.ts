import { IVocabulary } from "./vocabulary.interface"
import { vocabularyModel } from "./vocabulary.model"


const addVocabulary = async (payload: IVocabulary) => {
    const result = await vocabularyModel.create(payload)
    return result
}

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
    addVocabulary,
    getAllVocabularyFromDB,
    getUpdatedVocabularyFromDB,
    getSingleVocabularyFromDB,
    deletedFromDB
}