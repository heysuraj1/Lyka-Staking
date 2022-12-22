// ** MUI Imports
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import { useState, useEffect } from 'react'
import SuperUserLevel from '../Levels/SuperUserLevel'
import LeftLine from '../Levels/SecondLevel/LeftLine'
import RightLine from '../Levels/SecondLevel/RightLine'
import ThirdLevelLeft from '../Levels/ThirdLevel/ThirdLevelLeft'
import ThirdLevelRight from '../Levels/ThirdLevel/ThirdLevelRight'
import ThirdLevelLeft2 from '../Levels/ThirdLevel/ThirdLevelLeft2'
import ThirdLevelRight2 from '../Levels/ThirdLevel/ThirdLevelRight2'
import LeftOne1 from '../Levels/FourthLevel/LeftOne1'
import RightOne1 from '../Levels/FourthLevel/RightOne1'
import LevelTwo2 from '../Levels/FourthLevel/RightOne2'
import LeftOne2 from '../Levels/FourthLevel/LeftOne2'
import LeftOne3 from '../Levels/FourthLevel/LeftOne3'
import RightOne3 from '../Levels/FourthLevel/RightOne3'
import LeftOne4 from '../Levels/FourthLevel/LeftOne4'
import RightOne4 from '../Levels/FourthLevel/RightOne4'
import axios from 'axios'



const MUITable = () => {

  
  const [packageId, setPackageId] = useState('63a09f41f5579f410045984c')
  const [price, setPrice] = useState('')
  const [datas, setDatas] = useState('')
  const [showHistoryScreen, setShowHistoryScreen] = useState(null)
  const [TopUpHistory, setTopUpHistory] = useState('')



  useEffect(() => {
  
    try {
      axios.post("/api/ChartGeograph",{
        id:"63a09f41f5579f410045984c"
      }).then((acc)=>{
        console.log(acc.data)
        setDatas(acc.data)
      })
      .catch((err)=>{
        console.log(err)
      })
      
    } catch (error) {
      console.log(error)
    }
  }, [])
  












  return (
    <>
    {
      datas ? 

      <Grid container>
        <Grid item xs={12}>
          <Typography variant='h4'>Member/Genealogy</Typography>
        </Grid>

        <SuperUserLevel datas={datas} />

        <Grid item xs={6}>
          <LeftLine datas={datas} />
          <div style={{ marginTop: 30 }}>
            <Grid container>
              <Grid item xs={6}>
                <ThirdLevelLeft datas={datas} />
                <div style={{ marginTop: 40 }}>
                  <Grid container>
                    <Grid item xs={6}>
                      <LeftOne1 datas={datas}/>
                      <div></div>
                    </Grid>
                    <Grid item xs={6}>
                      <RightOne1 datas={datas}/>
                      <div></div>
                    </Grid>
                  </Grid>
                </div>
              </Grid>
              <Grid item xs={6}>
                <ThirdLevelRight datas={datas}/>
                <div style={{ marginTop: 40 }}>
                  <Grid container>
                    <Grid item xs={6}>
                      <LeftOne2 datas={datas}/>

                      <div></div>
                    </Grid>
                    <Grid item xs={6}>
                      <LevelTwo2 datas={datas}/>
                      <div></div>
                    </Grid>
                  </Grid>
                </div>
              </Grid>
            </Grid>
          </div>
        </Grid>

        <Grid item xs={6}>
          <RightLine datas={datas}/>
          <div style={{ marginTop: 30 }}>
            <Grid container>
              <Grid item xs={6}>
                <ThirdLevelLeft2 datas={datas}/>
                <div style={{ marginTop: 40 }}>
                  <Grid container>
                    <Grid item xs={6}>
                      <LeftOne3 datas={datas}/>
                      <div></div>
                    </Grid>
                    <Grid item xs={6}>
                      <RightOne3 datas={datas}/>
                      <div></div>
                    </Grid>
                  </Grid>
                </div>
              </Grid>
              <Grid item xs={6}>
                <ThirdLevelRight2 datas={datas}/>
                <div style={{ marginTop: 40 }}>
                  <Grid container>
                    <Grid item xs={6}>
                      <LeftOne4 datas={datas}/>
                      <div></div>
                    </Grid>
                    <Grid item xs={6}>
                      <RightOne4 datas={datas}/>
                      <div></div>
                    </Grid>
                  </Grid>
                </div>
              </Grid>
            </Grid>
          </div>
        </Grid>
      </Grid>

      :


      <></>
    }
    </>
  )
}

export default MUITable
