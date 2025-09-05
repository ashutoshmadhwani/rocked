const Constants = {
    ERRORS: {
        EXAM_VALIDATION_ERRORS: {
            NAME_NOT_FOUND: { statusCode: 400, code: 'E_001', message: 'Exam Name required' },
            TOTAL_QUESTIONS: { statusCode: 400, code: 'E_002', message: 'Total questions expected >0' },
            TOTAL_QUESTIONS_EXAM: { statusCode: 400, code: 'E_003', message: 'Total questions for exam expected >0' },
            MIN_SCORE: { statusCode: 400, code: 'E_004', message: 'Min Passing score expected >0' },
            EXAM_START_DATE: { statusCode: 400, code: 'E_005', message: 'Exam start date required format DD-MM-YYYY, should be a date in future' },
            EXAM_DATA_NOT_FOUND: { statusCode: 400, code: 'E_006', message: 'Exam details not found' },
            EXAM_NOT_FOUND: { statusCode: 400, code: 'E_007', message: 'Exam details not found in system' },
        }
    }
}
module.exports = Constants