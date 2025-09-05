const AppResponse = require('./AppResponse')
function isEmptyString(string) {
    return isNullish(string) || typeof string != 'string' || string?.trim()?.length <= 0
}
function isNullish(data) {
    return data == null || data == undefined
}

function isEmptyObject(object) {
    return isNullish(object) || Object.keys(object).length <= 0
}

function isEmptyArray(array) {
    return isNullish(array) || !Array.isArray(array) || array.length <= 0
}

function throwError(error) {
    throw new AppResponse(error.statusCode, error.code, error.message)
}

module.exports = { isEmptyString, isNullish, throwError, isEmptyObject, isEmptyArray }