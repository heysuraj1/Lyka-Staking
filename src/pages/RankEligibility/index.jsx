import Grid from '@mui/material/Grid'
import React, { useState, useEffect } from 'react'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import axios from 'axios'
// import WeeklyOverview from 'src/views/dashboard/WeeklyOverview'
import WeeklyOverview from '../../views/dashboard/WeeklyOverview'


const PackageHistory = () => {
  const [datas, setDatas] = useState('')
  const [buttonDisable, setButtonDisable] = useState(true)

  useEffect(() => {
    getDatas()
  }, [])

  const getDatas = () => {
    var data = localStorage.getItem('jwt')
    var parseData = JSON.parse(data)

    console.log(parseData._id)

    try {
      axios
        .post('/api/History/ReferalHistory', {
          id: parseData._id
        })
        .then(acc => {
          console.log(acc.data)
          setDatas(acc.data)
        })
        .catch(err => {
          console.log(err)
        })
    } catch (error) {
      console.log(error)
    }
  }



  const handleButtonPress = () =>{





  }

  return (
    <div>
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <Typography variant='h4'>Refer Commisions</Typography>
        </Grid>
        <Grid item xs={6}>
          <Card style={{  }}>
          <WeeklyOverview />
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card style={{ backgroundColor: 'white', padding: 10 ,paddingBottom:40}}>
            <div style={{textAlign:"center",marginTop:40}}>
              <img src="https://cdn-icons-png.flaticon.com/512/726/726461.png" style={{width:130,height:130}} alt="" />
              {
                buttonDisable ? 

                <p onClick={handleButtonPress} style={{backgroundColor:"gray",padding:5,marginLeft:100,marginRight:100,fontWeight:"bolder",color:"white",borderRadius:10}}>Claim Reward</p>

                :


                <p onClick={handleButtonPress} style={{backgroundColor:"#9357FD",padding:5,marginLeft:100,marginRight:100,fontWeight:"bolder",color:"white",borderRadius:10}}>Claim Reward</p>
              }
            </div>
          </Card>
        </Grid>
      </Grid>
    </div>
  )
}
export default PackageHistory
