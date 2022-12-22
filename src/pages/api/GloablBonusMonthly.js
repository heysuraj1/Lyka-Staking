import initDB from '../../helper/initDB'
import GlobalBonus from '../../helper/Modal/Bonus/GlobalBonus'
import GlobalBonusHistory from '../../helper/Modal/History/GlobalBonusHistory'
import User from '../../helper/Modal/User'

initDB()

export default async (req, res) => {
  const users = await User.find()

  for (let index = 0; index < users.length; index++) {
    console.log(users[index]._id)

    const findGlobalBonusData = await GlobalBonus.find({ BonusOwner: users[index]._id })

    if (findGlobalBonusData.length !== 0) {
      const findUserData = await User.findById(users[index]._id)

      const userAllWallete = findUserData.MainWallet

      const rewardWallete = (Number(userAllWallete) * 1) / 100

      updateWallete = await User.findByIdAndUpdate(
        { _id: users[index]._id },
        { MainWallet: Number(userAllWallete) + Number(rewardWallete) }
      )

      const CreateHistory = await GlobalBonusHistory({
        Owner:users[index]._id,
        Coins:rewardWallete,
        Percantage:"1%"
      }).save()
    }

    res.json('Updated')
  }
}
