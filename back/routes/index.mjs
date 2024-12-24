import express from 'express';
import {createReadStream} from 'node:fs';
import {resolve} from 'node:path';
import mime from 'mime'
import {__dirname} from '../utils/index.mjs'

var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});
const verify = false
//  返回文件流
router.get('/file', function (req, res, next) {
    // 获取参数
    const {name, pwd} = req.query;
    console.log(name, pwd)
    if(!verify){
        res.send({
            status: 0,
            msg: '失败'
        })
    }
    // 文件在public目录中的word/DOC 文档.doc
    const fileStream = createReadStream(resolve(__dirname, '../public/word/DOC 文档.doc'));
    const type = mime.getType("doc")
    const head = {
        'Content-Type': type,
        'Content-Disposition': 'attachment;filename=\"download.doc\"'
    };
    res.writeHead(200, head);
    fileStream.pipe(res);
});

export default router;
