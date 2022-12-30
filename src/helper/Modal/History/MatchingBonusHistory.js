import mongoose from "mongoose";


const MatchingBonusHistory = mongoose.Schema({

    BonusOwner: {
        default: 'null',
        type: 'String'
    },
    Amount: {
        default: 'null',
        type: 'String'
    },
    Matching: {
        default: 'null',
        type: 'String'
    },
    Rate: {
        default: 'null',
        type: 'String'
    }
},
    {
        timestamps: true
    })

export default mongoose.models.MatchingBonusHistory || mongoose.model('MatchingBonusHistory', MatchingBonusHistory)
