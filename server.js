const http = require('http');
const port = 3000;
const host = 'localhost';
const url = require('url')
const AppController = require("./src/AppController");
const UserController = require("./src/UserController");

let app = new AppController()
let userController = new UserController();

const server = http.createServer((req, res) => {
    let urlPath = url.parse(req.url);
    let methodRequest = req.method;
    // router
    switch (urlPath.pathname) {
        case '/':
            app.showHomePage(req, res)
            break;
        case '/about':
            app.showAboutPage(req, res)
            break;
        case '/users/add':
            userController.showAddUserPage(req, res)
            break;
        case '/users/store':
            userController.addUser(req, res)
            break;
        case '/users':
            userController.showPageList(req, res)
            break;
        default:
            res.end()
    }
});

server.listen(port, host, () => {
    console.log('server listening on http://localhost:' + port)
})
