import mongoose from 'mongoose'


const Package = mongoose.Schema(
  {
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
    }
  },
  {
    timestamps: true
  }
)
export default mongoose.models.Package || mongoose.model('Package', Package)
