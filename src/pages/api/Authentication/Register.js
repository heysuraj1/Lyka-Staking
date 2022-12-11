import User from "../../../helper/Modal/User";
import initDB from "../../../helper/initDB";
import bcrypt from "bcrypt";

initDB()

export default async (req, res) => {
  const { FullName, Position, Country, ContactNumber, EmailId, UpperlineUser, Passsword } = req.body
  console.log(UpperlineUser)

  if (!FullName|| !Position|| !Country|| !ContactNumber|| !EmailId|| !Passsword) {
    return res.status(404).json({ error: 'You Have Not Provided All The Informations' })
  }

  if (UpperlineUser) {
    var checkReferalUser = await User.findOne({ SponserCode: UpperlineUser })
    if (!checkReferalUser) {
      return res.status(404).json({ error: 'Referal Id Is Wrong. Please Check It Again.' })
    }

    if (checkReferalUser.length == 0) {
      return res.status(404).json({ error: 'Referal Id Is Wrong. Please Check It Again.' })
    } else {


      // var UplineUser = await User.findById(checkReferalUser._id)


      // var oldWallete = UplineUser.MainWallet

      // var latestWallete = 10 + Number(oldWallete)

      // await User.findByIdAndUpdate({_id:checkReferalUser._id},{MainWallet:latestWallete})

    }
  }

  const hashedPassowd = await bcrypt.hash(Passsword, 12)

  var randValue = Math.floor(Math.random() * 90000)
  var randValue2 = Math.floor(Math.random() * 90000)

  var checkRandValue = await User.findOne({ UserName: randValue })

  while (checkRandValue !== null) {
    randValue = Math.floor(Math.random() * 90000)
    randValue2 = Math.floor(Math.random() * 90000)

    checkRandValue = await User.findOne({ UserName: randValue })
  }

  const generatedUserName = randValue
  var generateUserN = FullName.slice(0,3)

  var today = new Date()
  var dd = String(today.getDate()).padStart(2, '0')
  var mm = String(today.getMonth() + 1).padStart(2, '0') //January is 0!
  var yyyy = today.getFullYear()
  today = yyyy + '-' + mm + '-' + dd

  if (UpperlineUser) {
    var CreateUser = await User({
    FullName,
    Position,
    Country,
    ContactNumber,
    EmailId,
    UpperlineUser: checkReferalUser._id,
    Passsword:hashedPassowd,
    SponserCode:generatedUserName,
    UserName:generateUserN+randValue2
    }).save()
  } else {
    var CreateUser = await User({
    FullName,
    Position,
    Country,
    ContactNumber,
    EmailId,
    Passsword:hashedPassowd,
    SponserCode:generatedUserName,
    UserName:generateUserN+randValue2
    }).save()
  }

  res.status(200).json(CreateUser)
}
