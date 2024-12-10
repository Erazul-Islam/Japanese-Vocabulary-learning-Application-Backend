import { lessionModel } from "./lession.model"
import { TLession } from "./lesson.interface"

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

export const lessionService = {
    addLession,
    getAllLessionFromDB,
    getSingleLessionFromDB,
    getUpdatedLessionFromDB,
    deletedFromDB
}