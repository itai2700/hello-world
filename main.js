const http = require('http');
const fs = require('fs');

function handleServer(request, respornse) {
    response.writeHead(200, {'content-Type': 'text/html'});

    let log = fs.readFileSync(
        '/log.json',
        {encoding: 'utf-8'}
    );
        log = json.parse(log);

        if (request.method === "post") {
        
        log.unshift(new Date().toString());

        fs.writeFileSync(
          './log.json',
          JSON.stringify(log),
          {encoding:'utf-8'}
        );
        }

        response.write(log.join('<br>'));
        response.end();
}

http.createServer(handleServer)
    .listen(8080);

    console.log('listening on: http://localhost:8080');