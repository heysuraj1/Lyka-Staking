import initDB from '../../helper/initDB'
import RankEligibilityBonusFill from '../../helper/Modal/Bonus/RankEligibilityBonusFill'
import PackageHistory from '../../helper/Modal/History/PackageHistory'
initDB()

export default async (req, res) => {
  var num = 0

  const { id } = req.body

  const findData = await RankEligibilityBonusFill.find({ UpperLineUserId: id })

  for (let index = 0; index < findData.length; index++) {
    num = num + Number(findData[index].BusinessAmount)
  }

  const findPack = await PackageHistory.findOne({ PackageOwner: id })
  console.log(findPack)

  if (findPack !== null) {
    console.log(findPack.PackagePrice)

    var getPercantage = (Number(num) / 5000) * 100

    res.json(getPercantage.toFixed(0))
  }

  res.json(0)
}
