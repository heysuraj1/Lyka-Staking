import initDB from '../../helper/initDB'
import User from '../../helper/Modal/User'

initDB()
export default async (req, res) => {
  const { id } = req.body

  var findSuperUser = await User.findById(id)

  
  var superUserId = findSuperUser.SponserCode
  var superUserName = findSuperUser.FullName
  
  //   sides 
  
var LevelOneRightSideId = findSuperUser.RightTeamId
var LevelOneLeftSideId = findSuperUser.LeftTeamId


if (LevelOneRightSideId !== null) {

    
    
}


if (LevelOneLeftSideId !== null) {
    


}






res.json({LevelOneRightSideId,LevelOneLeftSideId})



















  
  res.json({
    SuperUser: {
      id: superUserId,
      userName: superUserName
    },
    FirstLevel: {
      LeftLine: {
        id: "null",
        userName: "null"
      },
      RightLine: {
        id: "null",
        userName: "null"
      }
    },
    SecondLeve: {
      TotalLeft: {
        LeftLine: {
          id: "null",
          userName: "null"
        },
        RightLine: {
          id: "null",
          userName: "null"
        }
      },
      TotalRight: {
        LeftLine: {
          id: "null",
          userName: "null"
        },
        RightLine: {
          id: "null",
          userName: "null"
        }
      }
    },
    ThirdLevel: {
      One: {
        LeftLine: {
          id: "null",
          userName: "null"
        },
        RightLine: {
          id: "null",
          userName: "null"
        }
      },
      Two: {
        LeftLine: {
          id: "null",
          userName: "null"
        },
        RightLine: {
          id: "null",
          userName: "null"
        }
      },
      Three: {
        LeftLine: {
          id: "null",
          userName: "null"
        },
        RightLine: {
          id: "null",
          userName: "null"
        }
      },
      Four: {
        LeftLine: {
          id: "null",
          userName: "null"
        },
        RightLine: {
          id: "null",
          userName: "null"
        }
      }
    }
  })
}
