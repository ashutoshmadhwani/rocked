class AppResponse {
    statusCode
    responseCode
    message
    data
    constructor(statusCode = 200, responseCode = 'S_001', message = '', data = {}) {
        this.statusCode = statusCode
        this.responseCode = responseCode
        this.message = message
        this.data = data
    }
}
module.exports = AppResponse