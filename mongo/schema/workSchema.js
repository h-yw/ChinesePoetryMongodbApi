const Schema = require('mongoose').Schema

const workSchema = new Schema(
    {
        "_id": {
            type: Schema.Types.ObjectId
        },
        "authorName": {
            type: String
        },
        "kindCN": {
            type: String
        },
        "translationTr": {
            type: String
        },
        "introTr": {
            type: String
        },
        "appreciation": {
            type: String
        },
        "dynasty": {
            type: String
        },
        "content": {
            type: String
        },
        "appreciationTr": {
            type: String
        },
        "masterComment": {
            type: String
        },
        "dynastyTr": {
            type: String
        },
        "title": {
            type: String
        },
        "contentTr": {
            type: String
        },
        "titleTr": {
            type: String
        },
        "kind": {
            type: String
        },
        "translation": {
            type: String
        },
        "masterCommentTr": {
            type: String
        },
        "intro": {
            type: String
        },
        "foreword": {
            type: String
        },
        "kindCNTr": {
            type: String
        },
        "annotationTr": {
            type: String
        },
        "authorNameTr": {
            type: String
        },
        "annotation": {
            type: String
        },
        "forewordTr": {
            type: String
        }
    }
)

module.exports =workSchema