import {createServer } from 'node : http';

createServer(function(Request , Response) {
    if ( Request.url === '/api/health') {
        Response.writeHead(
            200,
            {
                'content-type': 'aplication/json'
            }
        );
        Response.end(JSON.stringify({status :'ok' }))
        return;
    }
    

    Response.writeHead(
        404,
        {'content-type' : 'aplication/JSON'}
    );
    Response.end(JSON.stringify({message : 'Recurso não encontrado.' }));
}).listen(3000);