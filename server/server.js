const http = require('http');

const requestListener = function (req, res) {
	const fs = require('fs')
	fs.readFile('./data.json', 'utf8', (err, jsonString) => {
	    if (err) {
	        console.log("Error reading file from disk:", err)
	        return
	    }
	    try {
		    res.setHeader('Access-Control-Allow-Origin', '*');    	
	    	res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
	        res.end(jsonString);
	} catch(err) {
	        console.log('Error parsing JSON string:', err)
	    }
	})  
}

const server = http.createServer(requestListener);
server.listen(3000);