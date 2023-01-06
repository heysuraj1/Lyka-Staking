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

    const findForRankEligibility = await RankEligibilityBonusFill.findOne({ UpperLineUserId: element })


    if (findForRankEligibility !== null) {

      console.log(findForRankEligibility)

      const findWhichPackageThatUserHasPurchased = await PackageHistory.find({ PackageOwner: element })

      if (findWhichPackageThatUserHasPurchased.length !== 0) {

        if (Number(findWhichPackageThatUserHasPurchased[0].PackagePrice) >= 500) {


          if (Number(findWhichPackageThatUserHasPurchased[0].PackagePrice) == 500) {

            console.log("came here")
            
            
            if (findForRankEligibility.BusinessAmount >= 5000) {
              
              console.log("came here also")


              const userOldWallete = await User.findById(element)

              const finalWall = Number(userOldWallete.MainWallet) + 250



              const updateUserDatas = await User.findByIdAndUpdate({ _id: element }, { MainWallet: finalWall })




            }





          } else if (Number(findWhichPackageThatUserHasPurchased[0].PackagePrice) == 1000) {

            if (findForRankEligibility.BusinessAmount >= 10000) {
              const finalWall = Number(userOldWallete.MainWallet) + 500



              const updateUserDatas = await User.findByIdAndUpdate({ _id: element }, { MainWallet: finalWall })




            }






          } else if (Number(findWhichPackageThatUserHasPurchased[0].PackagePrice) == 2500) {

            if (findForRankEligibility.BusinessAmount >= 25000) {
              const finalWall = Number(userOldWallete.MainWallet) + 1000



              const updateUserDatas = await User.findByIdAndUpdate({ _id: element }, { MainWallet: finalWall })




            }






          } else if (Number(findWhichPackageThatUserHasPurchased[0].PackagePrice) == 5000) {

            if (findForRankEligibility.BusinessAmount >= 100000) {
              const finalWall = Number(userOldWallete.MainWallet) + 2500



              const updateUserDatas = await User.findByIdAndUpdate({ _id: element }, { MainWallet: finalWall })




            }






          } else if (Number(findWhichPackageThatUserHasPurchased[0].PackagePrice) == 10000) {

            if (findForRankEligibility.BusinessAmount >= 500000) {

              const finalWall = Number(userOldWallete.MainWallet) + 5000



              const updateUserDatas = await User.findByIdAndUpdate({ _id: element }, { MainWallet: finalWall })




            }






          } else if (Number(findWhichPackageThatUserHasPurchased[0].PackagePrice) == 25000) {

            if (findForRankEligibility.BusinessAmount >= 1000000) {

              const finalWall = Number(userOldWallete.MainWallet) + 10000

              const updateUserDatas = await User.findByIdAndUpdate({ _id: element }, { MainWallet: finalWall })

            }

          } else if (Number(findWhichPackageThatUserHasPurchased[0].PackagePrice) == 50000) {

            if (findForRankEligibility.BusinessAmount >= 2500000) {

              const finalWall = Number(userOldWallete.MainWallet) + 25000

              const updateUserDatas = await User.findByIdAndUpdate({ _id: element }, { MainWallet: finalWall })

            }

          } else if (Number(findWhichPackageThatUserHasPurchased[0].PackagePrice) == 100000) {

            if (findForRankEligibility.BusinessAmount >= 10000000) {

              const finalWall = Number(userOldWallete.MainWallet) + 50000

              const updateUserDatas = await User.findByIdAndUpdate({ _id: element }, { MainWallet: finalWall })


            }

          }

          var perc = (258 / 500) * 100

          var RankEligibilityBonusFills = await ReferralHistory({
            ReferralFrom: element,
            ReferralTo: element,
            ReferralCoins: '258',
            ReferralPercantage: `"10%"`,
            PackageName: findWhichPackageThatUserHasPurchased[0].PackageName,
            Type: "Rank_Eligibility"
          }).save()
        }
      }





    }







  }

  res.json('done now have fun :) ')
}
