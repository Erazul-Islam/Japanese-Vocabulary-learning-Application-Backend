import { IVocabulary } from "../vocabulary/vocabulary.interface"

export type TLession = {
    LessionName : string,
    LessionNumber : number,
    vocabularyCount : number,
    vocabulary : IVocabulary[]
}