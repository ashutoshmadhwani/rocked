const { isEmptyString } = require("../../helpers/utils")
const examRepository = require("../../repository/examRepository")
const QuestionRepository = require("../../repository/QuestionRepository")


class AdminService {
    async getAllExams() {
        //get all exams from db basis limit and page number and filters
        //limit
        //page
        //name
        //status
        //order by 

        //modify list and return
        /**
         * {
         * id, name, status, questions given
         * }
         */

        let exams = await examRepository.getAllExams()
        exams = exams.map(exam => {
            let questionsGiven = exam?.questions?.split(',').length || 0
            return {
                id: exam.id,
                name: exam.name,
                status: exam.status,
                totalQuestions: exam.total_questions,
                questionsGiven

            }
        })
        return exams


    }
    async createExam(examData) {
        let examDataToInsert = [examData.name, examData.totalQuestions, examData.totalQuestionsExam, examData.minScore, new Date(examData.startDate)]
        await examRepository.createExam(examDataToInsert);
        console.log('exam data inserted successfully');
    }
    async saveExam(examData) {
        //takes exam_id array of questions and exam status and updates existing exam

        let exam = await examRepository.getExamById(examData.examId)
        exam = exam[0]
        const existingQuestions = isEmptyString(exam.questions) ? '' : `${exam.questions},`
        const questionsSaved = await this.saveQuestions(examData.questions)
        let examDataToUpdate = [`${existingQuestions}${questionsSaved.join(',')}`, examData.status]
        await examRepository.updateExamById(examData.examId, examDataToUpdate)
    }
    async saveQuestions(questions) {
        let questionsSaved = []
        for (let question of questions) {
            let questionToInsert = [question.description, question.isMulti, question.options.join(','), question.answer.join(',')]
            let questionId = await QuestionRepository.createQuestion(questionToInsert)
            questionsSaved.push(questionId)
        }
        return questionsSaved
    }
}

//singleton
module.exports = new AdminService()