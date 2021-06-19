const Schema = require('mongoose').Schema

const managerSchema = new Schema(
    {
        "_id": { type: Schema.Types.ObjectId },
        "dynasty": {
            type: String
        },
        "dynastyCN": {
            type: String
        },
        "author": {
            type: Schema.Types.Mixed,
            "collection": { type: String },
            "total": { type: Number },
            "created": { type: Date },
            "update": { type: Date }
        },
        "work": {
            type: Schema.Types.Mixed,
            "collection": { type: String },
            "total": { type: Number },
            "created": { type: Date },
            "update": { type: Date }
        }
    }
)