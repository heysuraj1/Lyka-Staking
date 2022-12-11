import initDB from '../../helper/initDB'
import PackageHistory from '../../helper/Modal/History/PackageHistory'
import DailyBonus from '../../helper/Modal/History/DailyBonus'
import LykaFastBonus from '../../helper/Modal/Bonus/LykaFastBonus'
import User from '../../helper/Modal/User'

initDB()

export default async (req, res) => {
  var list = []

  const findPackage = await PackageHistory.find()

  findPackage.map(hit => {
    return list.push({ id: hit.PackageOwner, price: hit.PackagePrice,name:hit.PackageName })
  })

  for (let i = 0; i < list.length; i++) {
    const myOldWallet = await User.findById(list[i].id)

    const investedAmount = list[i].price

    var findFastBonus = await LykaFastBonus.find({FastBonusCandidate:list[i].id})

    console.log(findFastBonus)

    var per = 0.03

    if (findFastBonus.length !== 0) {

      var totLenght = findFastBonus[0].ReferLength

      per =   Number(totLenght) / 2
      
    }

    var finalCal = (Number(investedAmount) * per) / 100

    var myWallete = myOldWallet.MainWallet

    var finalWallete = Number(myWallete) + Number(finalCal)

    await User.findByIdAndUpdate({ _id: list[i].id }, { MainWallet: finalWallete })

    const createRecord = await DailyBonus({
      BonusOwner:list[i].id,
      FormPackage:list[i].name,
      PackagePercantage:per,
      Amount:finalCal
    }).save()


    console.log('done')
  }

  res.json(list)
}
