const express = require('express')
const AdminController = require('../controllers/AdminController')
const AppResponse = require('../helpers/AppResponse')
const app = express()


//getb all exam list
app.get('/exam', async function (req, res) {
    const result = await AdminController.getExams()
    res.send(new AppResponse(200, 'S_001', 'success', result));
})

//create an exam
app.post('/exam', async function (req, res) {
    await AdminController.createExam(req.body)
    res.send('success')
})

//  draft/save exam
app.patch('/exam', async function (req, res) {
    await AdminController.saveExam(req.body)
})

module.exports = app