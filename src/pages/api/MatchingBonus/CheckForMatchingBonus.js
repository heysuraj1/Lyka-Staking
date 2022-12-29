import initDB from "../../../helper/initDB"
import User from "../../../helper/Modal/User"
import PackageHistory from "../../../helper/Modal/History/PackageHistory"

initDB()

export default async (req, res) => {

    const FindAllUsers = await User.find()

    for (let index = 0; index < FindAllUsers.length; index++) {

        const FindMainUserPackage = await PackageHistory.findOne({ PackageOwner: FindAllUsers[index]._id })
        if (FindMainUserPackage !== null) {
            var PackPrice = FindMainUserPackage.PackagePrice

            var packPercantage = Number(PackPrice) * 8 / 100

            const findUserDirects = await User.find({ UpperlineUser: FindAllUsers[index]._id })

            if (findUserDirects.length !== 0) {

                var LeftWall = 0
                var RightWall = 0

                for (let index = 0; index < findUserDirects.length; index++) {

                    if (findUserDirects[index].Position == "Right") {

                        LeftWall = Number(LeftWall) + Number(findUserDirects[index].MatchingBonusWallet)

                    }

                    if (findUserDirects[index].Position == "Left") {

                        RightWall = Number(RightWall) + Number(findUserDirects[index].MatchingBonusWallet)

                    }



                }



            }

            if (LeftWall >= Number(PackPrice) && RightWall >= Number(PackPrice)) {

                console.log("Yes he is eligible for matching bonus")

                // if (findUserDirects[index].Position == "Right") {

                //     if (LeftWall >= Number(PackPrice)) {

                //         var walp = Number(PackPrice) - LeftWall

                //         const UpdateWallet = await User.findByIdAndUpdate({ _id: findUserDirects[index]._id }, { MatchingBonusWallet: walp })


                //     }


                // }


                // if (findUserDirects[index].Position == "Left") {

                //     if (RightWall >= Number(PackPrice)) {

                //         var walpp = Number(PackPrice) - RightWall

                //         const UpdateWallets = await User.findByIdAndUpdate({ _id: findUserDirects[index]._id }, { MatchingBonusWallet: walpp })


                //     }
                // }


                const GiveMatchingBonus = await User.findById(FindAllUsers[index]._id)

                const userWallet = GiveMatchingBonus.MainWallet


                const ProvideMatchingBonus = await User.findByIdAndUpdate({ _id: FindAllUsers[index]._id }, { MainWallet: packPercantage })












            } else {

                console.log("No he is not eligible for matching bonus")
            }
        }
    }

    res.json("done")
}