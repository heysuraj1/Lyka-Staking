import initDB from '../../../helper/initDB';
import Package from '../../../helper/Modal/Package';
import PackageHistory from '../../../helper/Modal/History/PackageHistory';

initDB()
export default async (req, res) => {
  const { packageId, Anount ,id} = req.body

  console.log(packageId)
  console.log(Anount)
  console.log(id)

  var Lamount = Number(Anount) * 30

  const findPackage = await Package.findById(packageId)

  console.log(findPackage)



  const createPackage = await PackageHistory({
    PackageName:findPackage.PackageName,
    PackagePrice:findPackage.PackagePrice,
    PaackagePeriod:findPackage.PaackagePeriod,
    PackageMaximumLimit:"300",
    LykaToken:Lamount,
    PackgeRewardWallte:"0",
    PackageOwner:id
  }).save()



  res.json("Package Created Successfully")
}
