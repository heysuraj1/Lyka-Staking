import mongoose from 'mongoose'

const PackageHistory =  mongoose.Schema(
  {
    PackageOwner: {
      default: 'null',
      type: 'String'
    },
    PackageName: {
      default: 'null',
      type: 'String'
    },
    PackagePrice: {
      default: 'null',
      type: 'String'
    },
    PaackagePeriod: {
      default: 'null',
      type: 'String'
    },
    PackageMaximumLimit: {
      default: '300',
      type: 'String'
    },
    LykaToken: {
      default: 'null',
      type: 'String'
    },
    PackgeRewardWallte: {
      default: 'null',
      type: 'String'
    }
  },
  {
    timestamps: true
  }
)
export default mongoose.models.PackageHistory || mongoose.model('PackageHistory', PackageHistory)
