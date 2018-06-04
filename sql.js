var mysql = require('mysql');

const config ={
    host: 'miyu.mysql.database.azure.com',
    user: 'wangkte1@miyu',
    password: 'Miyosora0',
    database: 'miyo',
    port: 3306,
    ssl: true
};
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
         queryDatabase();
    }   
});

function queryDatabase(){




};