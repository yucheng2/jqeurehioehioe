var express = require('express');
const {createReadStream} = require("node:fs");
const {resolve} = require("node:path");
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

//  返回文件流
router.get('/file', function (req, res, next) {
  // 文件在public目录中的word/DOC 文档.doc
  const fileStream = createReadStream(resolve(__dirname, '../public/word/DOC 文档.doc'));
  const head = {
    'Content-Type': 'application/zip, application/octet-stream; charset=ISO-8859-1',
    'Content-Disposition': 'attachment;filename=\"test123.zip\"'
  };
  res.writeHead(200, head);
  fileStream.pipe(res);
});

module.exports = router;
