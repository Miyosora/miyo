const express = require('express');
const app = express();
const http = require('http').Server(app);
const sql = require('./sql.js')
const port = Number(process.env.PORT || 80);
const d=new Date();


http.listen(port, function() {
  console.log("Listening on " + port+' '+d);
});

    app.use('/',express.static('public'));
    app.use('/public',express.static('public'));
            
        app.get('/public/', function(req, res){
            res.sendfile('0102A.JPG');
            res.sendfile('favicon.ico');
            res.sendfile('1.JPG');
            res.sendfile('jquery.js');
            res.sendfile('0103A.JPG');
            res.sendfile('0201.JPG');
            res.sendfile('0202.JPG');
            res.sendfile('0203.JPG');
            res.sendfile('0204.JPG');
            res.sendfile('0205.JPG');
            res.sendfile('0206.JPG');
            res.sendfile('0207.JPG');

        });
        app.get('/index.html', function(req, res, next){
            res.sendfile('index.html');
        });
        app.get('/blog.html', function(req, res, next){
            res.sendfile('blog.html');
        });
        app.get('/model.html', function(req, res, next){
            res.sendfile('model.html');
        });
        app.get('/dollrs.html', function(req, res, next){
            res.sendfile('dollrs.html');
        });
        app.get('/code.html', function(req, res, next){
            res.sendfile('code.html');
        });
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        

