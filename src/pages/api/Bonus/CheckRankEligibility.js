import initDB from '../../../helper/initDB'
import RankEligibilityBonusFill from '../../../helper/Modal/Bonus/RankEligibilityBonusFill'
import User from '../../../helper/Modal/User'
import PackageHistory from '../../../helper/Modal/History/PackageHistory'
import ReferralHistory from '../../../helper/Modal/History/ReferralHistory'

initDB()

export default async (req, res) => {
  const findAllUsers = await User.find()

  for (let index = 0; index < findAllUsers.length; index++) {
    const element = findAllUsers[index]._id

    const findForRankEligibility = await RankEligibilityBonusFill.find({ UpperLineUserId: element })

    const findWhichPackageThatUserHasPurchased = await PackageHistory.find({ PackageOwner: element })

    if (findWhichPackageThatUserHasPurchased.length !== 0) {
      console.log(findWhichPackageThatUserHasPurchased)

      if (findWhichPackageThatUserHasPurchased[0].PackagePrice >= 786) {
        var perc = (258 / 786) * 100

        var RankEligibilityBonusFills = await ReferralHistory({
          ReferralFrom: element,
          ReferralTo: element,
          ReferralCoins: '258',
          ReferralPercantage: `"${perc.toFixed(2)}%"`,
          PackageName: findWhichPackageThatUserHasPurchased[0].PackageName,
          Type:"Rank_Eligibility"
        }).save()
      }
    }
  }

  res.json('done now have fun :) ')
}
