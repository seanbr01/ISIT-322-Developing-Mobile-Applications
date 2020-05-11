const express = require('express');
const router = express.Router();

let publicPage = (response) => {
    response.writeHead(200, { "Content-Type": "text/html"});
    response.write("<h2>This is the Public page.</h2>");
    response.write("<a href='./p'>Private Page</a>");
    response.end();
}

router.get('/', (req, res) => {
    // res.send('Public View')
    publicPage(res);
})

module.exports = router;