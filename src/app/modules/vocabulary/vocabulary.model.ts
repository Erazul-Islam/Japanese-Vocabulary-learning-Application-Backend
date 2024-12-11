import { Schema, model } from "mongoose";
import { IVocabulary } from "./vocabulary.interface";

export const JVocabularySchema = new Schema<IVocabulary>(
    {
        word: {
            type : String,
            required : true
        },
        pronunciation : {
            type : String,
            required : true
        },
        whenToSay : {
            type : String,
            required : true
        },
        lessonNo : {
            type : Number,
            required : true
        },
        adminEmail : {
            type : String,
            required : true
        },
        userId : {
            type : String,
            required : true
        },
        userName : {
            type : String,
            required : true
        }
    },
    {
        timestamps: true,
    },
);

export const vocabularyModel = model<IVocabulary>('JVocabulary', JVocabularySchema);