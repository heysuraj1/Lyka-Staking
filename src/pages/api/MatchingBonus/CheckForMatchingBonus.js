import initDB from "../../../helper/initDB"
import User from "../../../helper/Modal/User"
import PackageHistory from "../../../helper/Modal/History/PackageHistory"
import MatchingBonusHistory from "../../../helper/Modal/History/MatchingBonusHistory"

initDB()

const findTotalBussiness = async(userId, totalBussinessCache) => {
    if(userId !== "null") {
        return {
            success: true,
            data: {
                leftIncome: 0,
                rightIncome: 0,
                totalIncome: 0,
            },
        };
    }

    if(totalBussinessCache[userId] !== undefined) return {
        success: true,
        data: {
            income: totalBussinessCache[userId],
        }
    };

    try{
        let currentUser = await User.findById(userId);

        let leftUserId = currentUser.LeftTeamId;
        let rightUserId = currentUser.RightTeamId;

        const leftIncome = await findTotalBussiness(leftUserId, totalBussinessCache);
        if (!leftIncome.success) return leftIncome;

        const rightIncome = await findTotalBussiness(rightUserId, totalBussinessCache);
        if (!rightIncome.success) return rightIncome;

        const returningIncome = {
            leftIncome: leftIncome.data.totalIncome,
            rightIncome: rightIncome.data.totalIncome,
            totalIncome: leftIncome.data.totalIncome + rightIncome.data.totalIncome + currentUser.PurchasedPackagePrice,
        };

        totalBussinessCache[userId] = returningIncome;

        return {
            success: true,
            data: returningIncome
        };
    }
    catch(error){
        if(error instanceof Error || error instanceof MongoServerError){
            return {
                success: false,
                error: error.message,
            };
        }

        return {
            success: false,
            error: "Internal Server Error"
        };
    }
}

export default async (req, res) => {

    const FindAllUsers = await User.find()

    const totalBussinessCache = {};

    for (let index = 0; index < FindAllUsers.length; index++) {

        const FindMainUserPackage = await PackageHistory.findOne({ PackageOwner: FindAllUsers[index]._id })
        if (FindMainUserPackage !== null) {
            var PackPrice = FindMainUserPackage.PackagePrice

            var packPercantage = Number(PackPrice) * 8 / 100

            const findUserDirects = await User.find({ UpperlineUser: FindAllUsers[index]._id })

            if (findUserDirects.length !== 0) {

                var LeftWall = 0
                var LeftWallId = ""
                var RightWall = 0
                var RightWallId = ""

                for (let index = 0; index < findUserDirects.length; index++) {

                    if (findUserDirects[index].Position == "Right") {

                        LeftWall = Number(LeftWall) + Number(findUserDirects[index].MainWallet)
                        LeftWallId = findUserDirects[index]._id
                    }
                    if (findUserDirects[index].Position == "Left") {
                        
                        RightWall = Number(RightWall) + Number(findUserDirects[index].MainWallet)
                        RightWallId = findUserDirects[index]._id

                    }
                }
            }

            if (LeftWall >= Number(PackPrice) && RightWall >= Number(PackPrice)) {



                // this is second loop we are checking



                // const findThisUserData = await User.findById(FindAllUsers[index]._id)

                const currentUserBussiness = await findTotalBussiness(FindAllUsers[index]._id, totalBussinessCache);
                





                console.log("Yes he is eligible for matching bonus")

                const GiveMatchingBonus = await User.findById(FindAllUsers[index]._id)

                const userWallet = Number(GiveMatchingBonus.MainWallet) + Number(packPercantage)


                const ProvideMatchingBonus = await User.findByIdAndUpdate({ _id: FindAllUsers[index]._id }, { MainWallet: userWallet })


                const CreateRecord = await MatchingBonusHistory({
                    BonusOwner:FindAllUsers[index]._id,
                    Amount:packPercantage,
                    Matching:PackPrice,
                    Rate:"8%"
                }).save()

            } else {

                console.log("No he is not eligible for matching bonus")
            }
        }
    }

    res.json("done")
}