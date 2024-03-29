const http = require('http');

let serveEntry = (response) => {
    response.writeHead(200, { "Content-Type": "text/html"});
    response.write("<h2>This is the entry point for this app.</h2>");
    response.write("<a href='/nextpage'>Next Page</a>");
    response.end();
}

let serveNextPage = (response) => {
    response.writeHead(200, { "Content-Type": "text/html"});
    response.write("<h2>This is the next page.</h2>");
    response.write("<a href='./'>Go back to the Empty Page.</a>");
    response.end();
}

let send404Error = (response) => {
    response.writeHead(404, { "Content-Type": "text/html"});
    response.write("Error 404: Page not Found.");
    response.end('This is the end.');
}

http.createServer();

let onRequest = (request, response) => {
    if (request.method == 'GET' && request.url == '/') {
        serveEntry(response);
    }
    else if (request.method == 'GET' && request.url == '/nextpage') {
        serveNextPage(response);
    }
    else {
        send404Error(response);
    }
}

http.createServer(onRequest).listen(3000, '127.0.0.1');
