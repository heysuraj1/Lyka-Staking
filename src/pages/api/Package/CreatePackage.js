import initDB from '../../../helper/initDB'
import Package from '../../../helper/Modal/Package'

initDB()

export default async (req, res) => {
  
  const { PackageName, PackagePrice, PaackagePeriod, PackageMaximumLimit, LykaToken } = req.body

  const CreatePackage = await Package({
    PackageName,
    PackagePrice,
    PaackagePeriod,
    PackageMaximumLimit,
    LykaToken
  }).save()



  res.json(CreatePackage)
}
