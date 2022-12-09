import initDB from '../../helper/initDB'
import PackageHistory from '../../helper/Modal/History/PackageHistory'
import User from '../../helper/Modal/User'

initDB()

export default async (req, res) => {
  var list = []

  const findPackage = await PackageHistory.find()

  findPackage.map(hit => {
    return list.push({ id: hit.PackageOwner, price: hit.PackagePrice })
  })

  for (let i = 0; i < list.length; i++) {
    const myOldWallet = await User.findById(list[i].id)

    const investedAmount = list[i].price

    var finalCal = (Number(investedAmount) * 0.03) / 100

    var myWallete = myOldWallet.MainWallet

    var finalWallete = Number(myWallete) + Number(finalCal)

    await User.findByIdAndUpdate({ _id: list[i].id }, { MainWallet: finalWallete })

    console.log('done')
  }

  res.json(list)
}
