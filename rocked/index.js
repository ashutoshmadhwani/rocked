const express = require('express')
const app = express()
const AdminRouter = require('./routes/AdminRouter')
const Rocked = require('./helpers/DbConnector');
const ExceptionHandler = require('./helpers/ExceptionHandler');
app.use(express.json())

async function startApp() {
    await startDB();
    app.use('/v1/admin', AdminRouter)
    app.use(ExceptionHandler)
    const server = app.listen(process.env.PORT || 1504, function () {
        console.log(`server running on ${server.address().port}`);

    })
}
async function startDB() {
    await Rocked.executeQuery(`SELECT 1`);
    console.log('DB connection success');

}
startApp()