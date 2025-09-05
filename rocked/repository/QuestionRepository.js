const Rocked = require("../helpers/DbConnector");

class QuestionRepository {
    static TABLE_NAME = 'question'
    async createQuestion(question) {
        const result = await Rocked.executeQuery(`INSERT INTO ${QuestionRepository.TABLE_NAME} (description,is_multi,options,answer) VALUES (?,?,?,?)`, question);
        return result.insertId
    }
}
module.exports = new QuestionRepository()