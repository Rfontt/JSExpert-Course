const http = require('http');

const DEFAULT_USER = { username: 'Teste', password: 'HelloWorld' }
const routes = {
    '/contact:get': (request, response) => {
        response.write('Contact us page')

        return response.end();
    },

    '/login:post': async (request, response) => {
        for await (const data of request) {
            const user = JSON.parse(data);

            if (
                user.username !== DEFAULT_USER.username || 
                user.password !== DEFAULT_USER.password
            ) {
                response.writeHeader(401);
                response.write('Login failed');

                return response.end();
            } 

            response.write('Login with sucess');
            response.end();
        }
    },

    default: (request, response) => {
        response.write('Hello world');

        return response.end();
    }
}

const handler = function(request, response) {
    const { url, method } = request;
    const routeKey = `${url}:${method.toLowerCase()}`;
    const chosen = routes[routeKey] || routes.default;

    response.writeHead(200, {
        'Content-type': "text/html"
    })

    return chosen(request, response);
   
}

const app = http.createServer(handler)
            .listen(3000, () => console.log('App running at localhost:3000'));

module.exports = app;