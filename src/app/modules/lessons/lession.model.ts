import { Schema, model } from "mongoose";
import { TLession } from "./lesson.interface";
import { JVocabularySchema } from "../vocabulary/vocabulary.model";



const JLessionSchema = new Schema<TLession>(
    {
        LessionName: {
            type : String,
            required : true
        },
        LessionNumber : {
            type : Number,
            required : true
        },
        vocabularyCount : {
            type : Number,
            default : 0
        },
        vocabulary : [JVocabularySchema]
    },
    {
        timestamps: true,
    },
);

export const lessionModel = model<TLession>('JLession', JLessionSchema);