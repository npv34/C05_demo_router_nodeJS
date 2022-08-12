const Controller = require("./Controller");
class AppController extends Controller{
    showHomePage(req, res) {
        this.getTemplate('./template/index.html').then(data => {
            res.writeHead(200, 'oke', {'Content-type': 'text/html'});
            res.write(data);
            res.end()
        })
    }

    showAboutPage(req, res) {
        this.getTemplate('./template/about.html').then(data => {
            res.writeHead(200, 'oke', {'Content-type': 'text/html'});
            res.write(data);
            res.end()
        })
    }

}

module.exports = AppController
