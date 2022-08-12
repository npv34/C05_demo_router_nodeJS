const Controller = require("./Controller");
const qs = require('qs');

class UserController extends Controller{
    showAddUserPage(req, res) {
        this.getTemplate('./template/users/add.html').then(data => {
            res.writeHead(200, 'oke', {'Content-type': 'text/html'});
            res.write(data);
            res.end()
        })
    }

    showPageList(req, res) {
        this.getTemplate('./template/users/list.html').then(data => {
            res.writeHead(200, 'oke', {'Content-type': 'text/html'});
            res.write(data);
            res.end()
        })
    }

    addUser(req, res) {
        // gui du lieu tu request
        let data = '';
        req.on('data', chunk => {
            data += chunk
        });
        req.on('end', () => {
            let dataForm = qs.parse(data)
            // luu data vao file

            // chuyen huong sang trang /users
            res.writeHead(301, {'Location': '/users'})
            res.end()
        })
    }
}

module.exports = UserController;
