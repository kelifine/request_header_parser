var express = require('express');
var app = express();
var path = require('path');

var object; 

function requester (req) {
     var ip = req.ip;
     var lang = req.headers['accept-language'];
     var soft = req.headers['user-agent'];
     object = {
        ipaddress: ip.substr(ip.lastIndexOf(':')+1),
        language: lang.substr(0, lang.indexOf(',')),
        software: soft.substr(0, soft.indexOf(')')+1)
    };
}

app.get('', function (req,res) {
    console.log(req.ip);
   requester(req);
    res.send(object);
});

app.listen(8080);


