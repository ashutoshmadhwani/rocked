const Rocked = require("../helpers/DbConnector")

class ExamRepository {
    static TABLE_NAME = 'exam'
    async createExam(examData) {
        await Rocked.executeQuery(`INSERT INTO ${ExamRepository.TABLE_NAME} (name,total_questions,total_questions_exam,pass_score,start_date) VALUES (?,?,?,?,?)`, examData);
    }
    async getAllExams() {
        let res = await Rocked.executeQuery(`SELECT * FROM ${ExamRepository.TABLE_NAME}`);
        return res
    }
    async getExamById(examId) {
        let res = await Rocked.executeQuery(`SELECT * FROM ${ExamRepository.TABLE_NAME} WHERE id=?`, [examId]);
        return res
    }
    async updateExamById(examId, examData) {
        await Rocked.executeQuery(`UPDATE ${ExamRepository.TABLE_NAME} SET questions=?,status=? WHERE id=?`, [...examData, examId]);
    }
}
module.exports = new ExamRepository()