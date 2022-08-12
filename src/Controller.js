const fs = require("fs");

class Controller {
    getTemplate(filename) {
        return new Promise((resolve, reject) => {
            fs.readFile(filename, 'utf8', ((err, data) => {
                if (err) {
                    reject(err);
                }
                resolve(data)
            }))
        })
    }
}
module.exports= Controller;
