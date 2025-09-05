const moment = require("moment/moment")
const { ERRORS } = require("../../helpers/constants")
const { isEmptyString, throwError, isEmptyObject, isEmptyArray } = require("../../helpers/utils")
const examRepository = require("../../repository/examRepository")

class AdminValidator {
    async validateNewExam(examData) {
        if (isEmptyObject(examData)) {
            throwError(ERRORS.EXAM_VALIDATION_ERRORS.EXAM_DATA_NOT_FOUND)
        }
        if (isEmptyString(examData.name)) {
            throwError(ERRORS.EXAM_VALIDATION_ERRORS.NAME_NOT_FOUND)
        }
        if (examData.totalQuestions <= 0) {
            throwError(ERRORS.EXAM_VALIDATION_ERRORS.TOTAL_QUESTIONS)
        }
        if (examData.totalQuestionsExam <= 0) {
            throwError(ERRORS.EXAM_VALIDATION_ERRORS.TOTAL_QUESTIONS_EXAM)
        }
        if (examData.minScore <= 0) {
            throwError(ERRORS.EXAM_VALIDATION_ERRORS.MIN_SCORE)
        }
        //todo date validation
        // if (isNullish(examData.startDate) || moment())
    }
    async validateExamDetails(examData) {
        const exam = await examRepository.getExamById(examData.examId)
        if (isEmptyArray(exam)) {
            throwError(ERRORS.EXAM_VALIDATION_ERRORS.EXAM_NOT_FOUND)
        }

    }
}
module.exports = new AdminValidator()