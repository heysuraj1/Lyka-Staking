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
import axios from 'axios'
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
const MUITable = () => {
  const [packageId, setPackageId] = useState('6394c022211b0809e51b74e8')
  const [price, setPrice] = useState('')
  const [datas, setDatas] = useState('')
  const [showHistoryScreen, setShowHistoryScreen] = useState(null)
  const [TopUpHistory, setTopUpHistory] = useState('')

  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <Typography variant='h4'>Member/Genealogy</Typography>
        </Grid>

        <SuperUserLevel />

        <Grid item xs={6}>
          <LeftLine />
          <div style={{ marginTop: 30 }}>
            <Grid container>
              <Grid item xs={6}>
                <ThirdLevelLeft />
                <div style={{ marginTop: 40 }}>
                  <Grid container>
                    <Grid item xs={6}>
                      <LeftOne1 />
                      <div></div>
                    </Grid>
                    <Grid item xs={6}>
                      <RightOne1 />
                      <div></div>
                    </Grid>
                  </Grid>
                </div>
              </Grid>
              <Grid item xs={6}>
                <ThirdLevelRight />
                <div style={{ marginTop: 40 }}>
                  <Grid container>
                    <Grid item xs={6}>
                      <LeftOne2 />

                      <div></div>
                    </Grid>
                    <Grid item xs={6}>
                      <LevelTwo2 />
                      <div></div>
                    </Grid>
                  </Grid>
                </div>
              </Grid>
            </Grid>
          </div>
        </Grid>

        <Grid item xs={6}>
          <RightLine />
          <div style={{ marginTop: 30 }}>
            <Grid container>
              <Grid item xs={6}>
                <ThirdLevelLeft2 />
                <div style={{ marginTop: 40 }}>
                  <Grid container>
                    <Grid item xs={6}>
                      <LeftOne3 />
                      <div></div>
                    </Grid>
                    <Grid item xs={6}>
                      <RightOne3 />
                      <div></div>
                    </Grid>
                  </Grid>
                </div>
              </Grid>
              <Grid item xs={6}>
                <ThirdLevelRight2 />
                <div style={{ marginTop: 40 }}>
                  <Grid container>
                    <Grid item xs={6}>
                      <LeftOne4 />
                      <div></div>
                    </Grid>
                    <Grid item xs={6}>
                      <RightOne4 />
                      <div></div>
                    </Grid>
                  </Grid>
                </div>
              </Grid>
            </Grid>
          </div>
        </Grid>
      </Grid>
    </>
  )
}

export default MUITable
