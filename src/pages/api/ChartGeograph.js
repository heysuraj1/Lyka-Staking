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


  if (LevelOneRightSideId !== "null") {

    var LevelOneRightSideUser = await User.findById(LevelOneRightSideId)
    var RightSideUserName = LevelOneRightSideUser.FullName
    var RightSideUserId = LevelOneRightSideUser.SponserCode

  }else{
    RightSideUserName = "null"
    RightSideUserId= "null"
    LevelOneRightSideUser = "null"
  }

  if (LevelOneLeftSideId !== "null") {

    var LevelOneLeftSideUser = await User.findById(LevelOneLeftSideId)
    var LeftSideUserName = LevelOneLeftSideUser.FullName
    var LeftSideUserId = LevelOneLeftSideUser.SponserCode

  }else{
    LeftSideUserName = "null"
    LeftSideUserId = "null"
    LevelOneLeftSideUser = "null"
  }

  // Second Step Line

  console.log("This ===> "+LevelOneRightSideUser)
  if (LevelOneRightSideUser !== "null") {
    
    if (LevelOneRightSideUser.LeftTeamId !== "null") {
      
      const fName = await User.findById(LevelOneRightSideUser.LeftTeamId)
      var leftSideId1 = fName.FullName
    }else{
      leftSideId1 = "null"
    }

    if (LevelOneRightSideUser.RightTeamId !== "null") {
      
      const f2Name = await User.findById(LevelOneRightSideUser.RightTeamId)
      var RightSideId2 = f2Name.FullName
      
    }else{
      RightSideId2 = "null"
    }

    var leftSideName1 = LevelOneRightSideUser.LeftTeamName
    var RightSideName2 = LevelOneRightSideUser.RightTeamName
    
  }else{
    leftSideName1 = "null"
    leftSideId1 = "null"
    RightSideName2= "null"
    RightSideId2= "null"
  }

  if (LevelOneLeftSideUser !== "null") {

    if (LevelOneLeftSideUser.LeftTeamId !== "null") {

      const fName = await User.findById(LevelOneLeftSideUser.LeftTeamId)

      var AnotherLeftSideName2 = fName.RightTeamName
      var AnotherLeftSideId = fName.FullName
      

    }else{
      
      AnotherLeftSideName2 =  "null"
      AnotherLeftSideId =  "null"

    }



    if (LevelOneLeftSideUser.RightTeamId !== "null") {

      const f2Name = await User.findById(LevelOneLeftSideUser.RightTeamId)

      var AnotherRightSideId = f2Name.FullName
      var AnotherRightSideName = f2Name.LeftTeamName
      
      
    }else{
      AnotherRightSideId = "null"
      AnotherRightSideName = "null"
    }





  }else{

    AnotherRightSideName = "null"
    AnotherRightSideId = "null"
    AnotherLeftSideName2 = "null"
    AnotherLeftSideId = "null"

  }

  // Third Step Line



  // LevelOneRightSideUser.LeftTeamId  
  // LevelOneRightSideUser.RightTeamId  
  // LevelOneLeftSideUser.LeftTeamId
  // LevelOneLeftSideUser.RightTeamId




  if (LevelOneRightSideUser.LeftTeamId !== "null" && LevelOneRightSideUser.LeftTeamId !== undefined) {

    console.log("this ===> "+LevelOneRightSideUser.LeftTeamId)

    var fUserData1 = await User.findById(LevelOneRightSideUser.LeftTeamId)
    var OneLeftLineName = fUserData1.LeftTeamName
    var OneLeftLineId = fUserData1.SponserCode

    var OneRightLineName = fUserData1.RightTeamName
    var OneRightLineId = fUserData1.RightTeamId


    
  }else{
    OneLeftLineName = "null"
    OneLeftLineId = "null"
    OneRightLineName = "null"
    OneRightLineId = "null"

  }



  if (LevelOneRightSideUser.RightTeamId !== "null" && LevelOneRightSideUser.RightTeamId !== undefined) {

    var fUserData2 = await User.findById(LevelOneRightSideUser.RightTeamId)
    var TwoLeftLineName = fUserData2.LeftTeamName
    var TwoLeftLineId = fUserData2.SponserCode

    var TwoRightLineName = fUserData2.RightTeamName
    var TwoRightLineId = fUserData2.RightTeamId
    
  }else{

    TwoLeftLineName = "null"
    TwoLeftLineId = "null"
    TwoRightLineName = "null"
    TwoRightLineId = "null"

  }



  if (LevelOneLeftSideUser.LeftTeamId !== "null" && LevelOneLeftSideUser.LeftTeamId !== undefined) {

    var fUserData3 = await User.findById(LevelOneLeftSideUser.LeftTeamId)
    var ThreeLeftLineName = fUserData3.LeftTeamName
    var ThreeLeftLineId = fUserData3.SponserCode

    var ThreeRightLineName = fUserData3.RightTeamName
    var ThreeRightLineId = fUserData3.RightTeamId
    
  }else{
    ThreeLeftLineName = "null"
    ThreeLeftLineId = "null"
    ThreeRightLineName = "null"
    ThreeRightLineId = "null"

  }


  if (LevelOneLeftSideUser.RightTeamId !== "null" && LevelOneLeftSideUser.RightTeamId !== undefined) {
    var fUserData4 = await User.findById(LevelOneLeftSideUser.RightTeamId)
    var FourLeftLineName = fUserData4.LeftTeamName
    var FourLeftLineId = fUserData4.SponserCode
    
    var FourRightLineName = fUserData4.RightTeamName
    var FourRightLineId = fUserData4.RightTeamId
    
  }else{

    FourLeftLineName = "null"
    FourLeftLineId = "null"
    FourRightLineName = "null"
    FourRightLineId = "null"







  }






























  
  res.json({
    SuperUser: {
      id: superUserId,
      userName: superUserName
    },
    FirstLevel: {
      LeftLine: {
        id: LeftSideUserId,
        userName: LeftSideUserName
      },
      RightLine: {
        id: RightSideUserId,
        userName: RightSideUserName
      }
    },
    SecondLeve: {
      TotalLeft: {
        LeftLine: {
          id:  leftSideName1,
          userName: leftSideId1
        },
        RightLine: {
          id: RightSideName2,
          userName: RightSideId2
        }
      },
      TotalRight: {
        LeftLine: {
          id: AnotherLeftSideName2,
          userName: AnotherLeftSideId
        },
        RightLine: {
          id: AnotherRightSideName,
          userName: AnotherRightSideId
        }
      }
    },
    ThirdLevel: {
      One: {
        LeftLine: {
          id: OneLeftLineId,
          userName: OneLeftLineName
        },
        RightLine: {
          id: OneRightLineId,
          userName: OneRightLineName
        }
      },
      Two: {
        LeftLine: {
          id: TwoLeftLineId,
          userName: TwoLeftLineName
        },
        RightLine: {
          id: TwoRightLineId,
          userName:TwoRightLineName
        }
      },
      Three: {
        LeftLine: {
          id: ThreeLeftLineId,
          userName: ThreeLeftLineName
        },
        RightLine: {
          id: ThreeRightLineId,
          userName: ThreeRightLineName
        }
      },
      Four: {
        LeftLine: {
          id: FourLeftLineId,
          userName: FourLeftLineName
        },
        RightLine: {
          id: FourRightLineId,
          userName: FourRightLineName
        }
      }
    }
  })
}
