import { Schema, model } from "mongoose";
import { ITutorial } from "./tutorial.interface";

const JTutorialSchema = new Schema<ITutorial>(
    {
        Link : {
            type : String,
            required : true
        }
    },
    {
        timestamps: true,
    },
);

export const tutorialModel = model<ITutorial>('tutorialModel', JTutorialSchema)