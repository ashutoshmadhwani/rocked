const AdminService = require("../services/admin/AdminService")
const AdminValidators = require("../services/admin/AdminValidators")

class AdminController {
    async createExam(examData) {
        await AdminValidators.validateNewExam(examData)
        await AdminService.createExam(examData)
    }
    async getExams() {
        return { exams: await AdminService.getAllExams() }
    }
    async saveExam(examData) {
        await AdminService.saveExam(examData);
    }
}
module.exports = new AdminController()