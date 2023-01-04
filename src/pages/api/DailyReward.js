import initDB from '../../helper/initDB'
import PackageHistory from '../../helper/Modal/History/PackageHistory'
import DailyBonus from '../../helper/Modal/History/DailyBonus'
import LykaFastBonus from '../../helper/Modal/Bonus/LykaFastBonus'
import User from '../../helper/Modal/User'
import LykaFastBonusHis from '../../helper/Modal/History/LykaFastBonusHis'

initDB()

export default async (req, res) => {
  var list = []

  const findPackage = await PackageHistory.find()

  findPackage.map(hit => {
    return list.push({ id: hit.PackageOwner, price: hit.PackagePrice, name: hit.PackageName })
  })

  for (let i = 0; i < list.length; i++) {
    console.log(list[i].id)
    const myOldWallet = await User.findById(list[i].id)

    console.log("tihs => "+myOldWallet)

    const investedAmount = list[i].price

    var findPackHis = await PackageHistory.findOne({PackageOwner:list[i].id})
    var walAmount = Number(findPackHis.PackagePrice) // <===== user purchased this package 

    var findFastBonus = await LykaFastBonus.find({ FastBonusCandidate: list[i].id })

    console.log(findFastBonus)

    var per = 0.03

    if (findFastBonus.length !== 0) {
      var totLenght = findFastBonus[0].ReferLength


      if (totLenght == 2 || 3) {

        for (let index = 0; index < findFastBonus.length; index++) {

          // const element = findFastBonus[index]._id;

          const userM = await User.findOne({PackageHistory:findFastBonus[index]._id})

          if (Number(userM.PackagePrice) > walAmount*2) {

            per = Number(totLenght) / 2
            
          }
  
            console.log("block one")



          
        }


        
      }else if(totLenght == 4 || 6){

        for (let index = 0; index < findFastBonus.length; index++) {

          // const element = findFastBonus[index]._id;

          const userM = await User.findOne({PackageHistory:findFastBonus[index]._id})

          if (Number(userM.PackagePrice) > walAmount*4) {

            per = Number(totLenght) / 2
            
          }
  
            console.log("block one")



          
        }
        console.log("block two")


      }else if(totLenght == 7 || 8){

        for (let index = 0; index < findFastBonus.length; index++) {

          // const element = findFastBonus[index]._id;

          const userM = await User.findOne({PackageHistory:findFastBonus[index]._id})

          if (Number(userM.PackagePrice) > walAmount*6) {

            per = Number(totLenght) / 2
            
          }
  
            console.log("block one")



          
        }

        console.log("block three")

      }else if(totLenght == 9 || 10){

        console.log("block four")
        for (let index = 0; index < findFastBonus.length; index++) {

          // const element = findFastBonus[index]._id;

          const userM = await User.findOne({PackageHistory:findFastBonus[index]._id})

          if (Number(userM.PackagePrice) > walAmount*5) {

            per = Number(totLenght) / 2
            
          }
  
            console.log("block one")



          
        }

      }





      // per = Number(totLenght) / 2
    }

    var finalCal = (Number(investedAmount) * per) / 100

    console.log(myOldWallet)

    var myWallete = myOldWallet.MainWallet

    var finalWallete = Number(myWallete) + Number(finalCal)

    await User.findByIdAndUpdate({ _id: list[i].id }, { MainWallet: finalWallete })

    if (findFastBonus.length !== 0) {
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

    console.log('done')
  }

  res.json(list)
}
