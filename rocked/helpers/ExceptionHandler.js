const AppResponse = require("./AppResponse");

function ExceptionHandler(err, req, res, next) {
    if (err instanceof AppResponse) {
        res.status(err.statusCode).send({ code: err.responseCode, message: err.message, data: err.data })
    }
    next()
}

module.exports = ExceptionHandler