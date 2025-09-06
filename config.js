const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}


module.exports = {

SESSION_ID: process.env.SESSION_ID === undefined ? 'VISPER-MD&3kIlQSza#18JG14qp09stns80L-KqywDAB9Hs_7FgllS55Kgp6LI' : process.env.SESSION_ID, 
PORT: process.env.PORT === undefined ? 'JLXhDLa0KnwLyfb7yvgthEpI8sUoXn2YugLj' : process.env.PORT,    
SESSION_NAME: process.env.SESSION_NAME === undefined ? 'vispermdoffical' : process.env.SESSION_NAME, 

};

