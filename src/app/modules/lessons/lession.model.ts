import { Schema, model } from "mongoose";
import { TLession } from "./lesson.interface";



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
        description : {
            type : String,
            required : true
        }
    },
    {
        timestamps: true,
    },
);

export const lessionModel = model<TLession>('JLession', JLessionSchema);