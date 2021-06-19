define({ "api": [
  {
    "type": "get",
    "url": "/work",
    "title": "获取诗词",
    "name": "GetWork",
    "group": "作品",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "dynasty",
            "description": "<p>朝代</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>姓名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "kind",
            "description": "<p>种类 诗、词、曲、赋、文</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "pageNum",
            "defaultValue": "1",
            "description": "<p>页码</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "pageSize",
            "defaultValue": "10",
            "description": "<p>记录数</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/api/work"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/work.js",
    "groupTitle": "作品"
  },
  {
    "type": "post",
    "url": "/update",
    "title": "更新作品",
    "name": "update",
    "group": "作品",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>请求体</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Param-Example:",
          "content": "{\n    collection:'CP_author_zhou',\n    id : \"6006918bc32cdc043e6fb85d\",\n    update:{\n        ...修改字段\n    }\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/api/update"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/update.js",
    "groupTitle": "作品"
  },
  {
    "type": "get",
    "url": "/author",
    "title": "获取作者",
    "name": "GetAuthor",
    "group": "作者",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "dynasty",
            "description": "<p>朝代</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "pageNum",
            "defaultValue": "1",
            "description": "<p>页码</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "pageSize",
            "defaultValue": "10",
            "description": "<p>记录数</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/api/author"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/author.js",
    "groupTitle": "作者"
  },
  {
    "type": "get",
    "url": "/yun",
    "title": "获取韵部，判断字韵",
    "name": "GetYun",
    "group": "声韵",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "char",
            "description": "<p>汉字</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "yun",
            "defaultValue": "p",
            "description": "<p>p：平水韵；c：词林正韵；z：中华新韵</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/api/yun"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/yun.js",
    "groupTitle": "声韵"
  },
  {
    "type": "get",
    "url": "/cipai",
    "title": "获取词牌及示例",
    "name": "GetCipai",
    "group": "词牌",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "cipai",
            "description": "<p>词牌，模糊搜索</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/api/cipai"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/cipai.js",
    "groupTitle": "词牌"
  }
] });
