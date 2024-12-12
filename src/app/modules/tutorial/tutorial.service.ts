import { ITutorial } from "./tutorial.interface"
import { tutorialModel } from "./tutorial.model"

const addTutorial = async (payload: ITutorial) => {
    const result = await tutorialModel.create(payload)
    return result
}

const getAllTutorialFromDB = async () => {
    const result = await tutorialModel.find()
    return result
}

const deletedFromDB = async (id: string) => {
    const result = await tutorialModel.deleteOne({ _id: id })
    return result
}

export const tutorialService = {
    addTutorial,
    getAllTutorialFromDB,
    deletedFromDB
}