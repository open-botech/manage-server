const mongoose = require('mongoose')
const leavesSchema = mongoose.Schema({
    orderNo: String,
    dataClass: Number,
    dataItem: String,
    dataCategory: Number,
    dataLevel: Number,
    dept: String,
    person: String,
    personPhone: String,
    applyTime: Date,
    reasons: String,
    applyUser: {
        userId: String,
        userName: String,
        userEmail: String
    },
    auditUsers: String,
    curAuditUserName: String,
    auditFlows: [
        {
            userId: String,
            userName: String,
            userEmail: String
        }
    ],
    auditLogs: [
        {
            userId: String,
            userName: String,
            createTime: Date,
            remark: String,
            action: String
        }
    ],
    applyState: { type: Number, default: 1 },
    createTime: { type: Date, default: Date.now }
})

module.exports = mongoose.model("leaves",leavesSchema,"leaves")