import initDB from '../../helper/initDB'
import PackageHistory from '../../helper/Modal/History/PackageHistory'
import DailyBonus from '../../helper/Modal/History/DailyBonus'
import LykaFastBonus from '../../helper/Modal/Bonus/LykaFastBonus'
import User from '../../helper/Modal/User'
import LykaFastBonusHis from '../../helper/Modal/History/LykaFastBonusHis'
import RenewalPurchasePackage from '../../helper/Modal/Renewal/RenewalPurchasePackage'

initDB()

export default async (req, res) => {

  var list = []

  const findPackage = await PackageHistory.find()


  if (findPackage.length == 0) {
    return res.json("no any user found")
  }

  findPackage.map(hit => {
    return list.push({ id: hit.PackageOwner, price: hit.PackagePrice, name: hit.PackageName })
  })

  for (let i = 0; i < list.length; i++) {
    const myOldWallet = await User.findById(list[i].id)

    const investedAmount = list[i].price

    var findFastBonus = await LykaFastBonus.find({ FastBonusCandidate: list[i].id })

    const findRenewalBonus = await RenewalPurchasePackage.findOne({PackageOwner:list[i].id})


    var per = 0.3


   
    if (findFastBonus.length !== 0) {
      var totLenght = findFastBonus[0].ReferLength

      const findMainUser = findFastBonus[0].FastBonusCandidate

      const findUserPackage = await PackageHistory.findOne({PackageOwner:findMainUser})


      const MainUserPackagePrice = findUserPackage.PackagePrice // <====== this is user purchased package

      // console.log("main user has purchased this package =>  "+MainUserPackagePrice)

      var FindMainUserReferals = await User.find({UpperlineUser:findMainUser,PurchasedPackagePrice:  { $gte: Number(MainUserPackagePrice) } })

      // console.log("tshis = > "+FindMainUserReferals.length)


      if (FindMainUserReferals.length == 2 || FindMainUserReferals.length == 3) {
        per = 1
        // console.log("this is block one")
      }else if(FindMainUserReferals.length == 4 || FindMainUserReferals.length == 5){
        per = 2
        // console.log("this is block two")
      }else if(FindMainUserReferals.length == 6 || FindMainUserReferals.length == 7){
        per = 3
        // console.log("this is block three")
      }else if(FindMainUserReferals.length == 8 || FindMainUserReferals.length == 9){
        per = 4
        // console.log("this is block four")
      }else if(FindMainUserReferals.length >= 10){
        per = 5
        // console.log("this is block five")
      }

      

      // if (findRenewalBonus!==null&& findRenewalBonus.DirectReferalDone == "false") {

      //   per = 0.3
        
        
      // }else if(findRenewalBonus!==null){
      //   per = 0.3
      // }else if(findRenewalBonus.DirectReferalDone == "false"){
      //   per = 0.3
      // }
      // if (findRenewalBonus!==null&& findRenewalBonus.DirectReferalDone == "true") {

      // }



      if (findRenewalBonus==null) {

        console.log("this came in null block")
        
      }else if(findRenewalBonus!==null&&findRenewalBonus.DirectReferalDone == "false"){
        console.log("fr block")
        per = 0.3
      }else if(findRenewalBonus.DirectReferalDone == "false"){
        console.log("sec block")
        per = 0.3
      }else{
        console.log("final price => "+per)
      }


    }



    var finalCal = (Number(investedAmount) * per) / 100

    // console.log(myOldWallet)

    var myWallete = myOldWallet.MainWallet

    var finalWallete = Number(myWallete) + Number(finalCal)

    await User.findByIdAndUpdate({ _id: list[i].id }, { MainWallet: finalWallete })
// console.log("below")
    // console.log(FindMainUserReferals)



    if (findRenewalBonus!==null&& findRenewalBonus.DirectReferalDone == "true") {

      if (FindMainUserReferals.length >= 2 ) {
        const createRecord = await LykaFastBonusHis({
          BonusOwner: list[i].id,
          FormPackage: list[i].name,
          PackagePercantage: per,
          Amount: finalCal
        }).save()
      } else {
        const createRecord = await DailyBonus({
          BonusOwner: list[i].id,
          FormPackage: list[i].name,
          PackagePercantage: per,
          Amount: finalCal
        }).save()
      }


    }else{
      const createRecord = await DailyBonus({
        BonusOwner: list[i].id,
        FormPackage: list[i].name,
        PackagePercantage: per,
        Amount: finalCal
      }).save()
    }


    console.log('done')
  }

  res.json(list)
}