var express = require('express');
var path = require('path')
var app = express();
//ʹ�þ�̬�ļ��������м��
app.use(express.static(path.join(__dirname,'app','public')));
app.listen(8080);