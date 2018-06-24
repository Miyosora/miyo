const express = require('express');
const app = express();
const mysql = require('mysql');
const http = require('http').Server(app);
const port = Number(process.env.PORT || 80);
const bodyParser = require('body-parser');
const multer = require('multer');
const multers = multer();


function getDateTime() {

    var date = new Date();

    var hour = date.getHours(); 
    hour = (hour < 10 ? "0" : "") + hour;

    var min  = date.getMinutes();
    min = (min < 10 ? "0" : "") + min;

    var sec  = date.getSeconds();
    sec = (sec < 10 ? "0" : "") + sec;

    var year = date.getFullYear();

    var month = date.getMonth() + 1;
    month = (month < 10 ? "0" : "") + month;

    var day  = date.getDate();
    day = (day < 10 ? "0" : "") + day;

    return year + "/" + month + "/" + day + " " + hour + ":" + min + ":" + sec;

}

const config ={
    host: 'miyu.mysql.database.azure.com',
    user: 'wangkte1@miyu',
    password: 'Miyosora0',
    database: 'miyo',
    port: 3306,
    ssl: true
};

http.listen(port, function() {
  console.log("Listening on " + port+' '+getDateTime());
});
    app.use(bodyParser.urlencoded({extended:true}));
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
        app.get('/views/blog.ejs', function(req, res, next){

        const conn = new mysql.createConnection(config);
        conn.connect(
        function (err) { 
              if (err) { 
              console.log("!!! Cannot connect !!! Error:");
                        throw err;
                        }
                        else
                        {
            
            
            
            
            conn.query("select * from blog",function (err, results){

            var blog = {
                
                results
            }
            res.render('blog.ejs',blog);
            console.log("end");
            conn.end(function(err) {
                            
            });
            
            })
            
            }
        });
        

            
            
            
            
            

                        
            
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
        app.get('/sql.js', function(req, res, next){
            res.sendfile('sql.js');
        });
        



        

        app.post('/views/blog.ejs',function (req, res, next) {

            console.log(req.body.username);
            console.log(req.body.password);
            console.log(req.body.title);
            console.log(req.body.txt);
            
            const conn = new mysql.createConnection(config);
                    conn.connect(
                            function (err) { 
                            if (err) { 
                                console.log("!!! Cannot connect !!! Error:");
                                throw err;
                            }
                            else
                            {

                    console.log("Connection established.");
                    conn.query("select * from username where username ='"+req.body.username+"' and password ='"+req.body.password+"'",function (err, results)
                    {
                    if(results==""){
                        console.log(results);
                        res.render('blog.ejs');
                        console.log("end");
                            conn.end(function(err) {
                            
                            });

                    }
                    else
                        {
                        
                        if (err) throw err; 
                            console.log("查詢成功"+process.uptime());  

                            if(results[0].id>=1)
                            
                            {
                            
                            conn.query("INSERT INTO blog (time ,txt ,title) VALUES ('"+getDateTime()+"','"+req.body.txt+"','"+req.body.title+"');");
                            conn.end(function(err) {
                            
                            });
                            
                            res.redirect('blog.ejs');
                            
                            console.log("end");
                           }

                        
                       }
                   });
                    

                   
            }
            
        }
        );
        ;
});




        
        
        
        
        
    