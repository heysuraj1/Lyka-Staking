import mongoose from 'mongoose'

const User = mongoose.Schema(
  {
    UserName: {
      default: 'null',
      type: 'String'
    },
    SponserCode: {
      default: 'null',
      type: 'String'
    },
    FullName: {
      default: 'null',
      type: 'String'
    },
    Position: {
      default: 'null',
      type: 'String'
    },
    Country: {
      default: 'null',
      type: 'String'
    },
    ContactNumber: {
      default: 0,
      type: 'Number'
    },
    EmailId: {
      default: 'null',
      type: 'String'
    },
    EmailVerified: {
      default: 'Yes',
      type: 'String'
    },
    UserActive: {
      default: true,
      type: 'Bool'
    },
    MainWallet: {
      default: 0,
      type: 'Number'
    },
    UpperlineUser: {
      default: 'null',
      type: 'String'
    },
    Passsword: {
      default: 'null',
      type: 'String'
    },
    LeftTeamId: {
      default: 'null',
      type: 'String'
    },
    RightTeamId: {
      default: 'null',
      type: 'String'
    },
    LeftTeamName: {
      default: 'null',
      type: 'String'
    },
    RightTeamName: {
      default: 'null',
      type: 'String'
    }

  },
  {
    timestamps: true
  }
)
export default mongoose.models.Userr || mongoose.model('Userr', User)
