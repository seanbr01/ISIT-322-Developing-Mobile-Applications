const express = require('express');
const router = express.Router();

let privatePage = (response) => {
    response.writeHead(200, { "Content-Type": "text/html"});
    response.write("<h2>This is the Private page.</h2>");
    response.write("<a href='./'>Public Page</a>");
    response.end();
}


router.get('/', (req, res) => {
    //res.send('Private View')
    privatePage(res);
})

module.exports = router;