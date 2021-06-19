const DYNASTYCNS = {
    "gold": '金',
    "han": "汉",
    "jin": "晋",
    "ming": "明",
    "nanbei": "南北",
    "qin": "秦",
    "qing": "清",
    "sangguo": "三国",
    "shang": "商",
    "sui": "隋",
    "tang": "唐",
    "wudaishiguo": "五代十国",
    "xiandai": "现代",
    "song":"宋",
    "yuan": "元",
    "zhou": "周",
}
const COLLECTION = {
    '金': {
        author: "CP_author_gold",
        work: "CP_work_gold"
    },
    "汉": {
        author: "CP_author_han",
        work: "CP_work_han"
    },
    "晋": {
        author: "CP_author_jin",
        work: "CP_work_jin"
    },
    "明": {
        author: "CP_author_ming",
        work: "CP_work_ming"
    },
    "南北": {
        author: "CP_author_nanbei",
        work: "CP_work_nanbei"
    },
    "秦": {
        author: "CP_author_qin",
        work: "CP_work_qin"
    },
    "清": {
        author: "CP_author_qing",
        work: "CP_work_qing"
    },
    "三国": {
        author: "CP_author_sanguo",
        work: "CP_work_sanguo"
    },
    "商": {
        author: "CP_author_shang",
        work: "CP_work_shang"
    },
    "隋": {
        author: "CP_author_sui",
        work: "CP_work_sui"
    },
    "唐": {
        author: "CP_author_tang",
        work: "CP_work_tang"
    },
    "五代十国": {
        author: "CP_author_wudaishiguo",
        work: "CP_work_wudaishiguo"
    },
    "现代": {
        author: "CP_author_xiandai",
        work: "CP_work_xiandai"
    },
    "宋": {
        author: "CP_author_song",
        work: "CP_work_song"
    },
    "元": {
        author: "CP_author_yuan",
        work: "CP_work_yuan"
    },
    "周": {
        author: "CP_author_zhou",
        work: "CP_work_zhou"
    },
}
const collectionName=function (dynasty,type){
    console.log(COLLECTION[dynasty].author,type)
    switch(type){
        case "author":return COLLECTION[dynasty].author;
        case "work":return COLLECTION[dynasty].work;
        default:return "ERROR"
    }
}
module.exports =collectionName
