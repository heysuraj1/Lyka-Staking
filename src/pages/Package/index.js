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
import PackageHistory from './PackageHistory'

const MUITable = () => {
  const [packageId, setPackageId] = useState('')
  const [price, setPrice] = useState('')
  const [datas, setDatas] = useState('')
  const [showHistoryScreen, setShowHistoryScreen] = useState(null)
  const [TopUpHistory, setTopUpHistory] = useState('')

  useEffect(() => {
    getData()
    getAllPackages()
  }, [])

  const getData = () => {
    var UserData = localStorage.getItem('jwt')
    var parsedData = JSON.parse(UserData)

    axios
      .post('/api/Package/CheckPackage', {
        ids: parsedData._id
      })
      .then(acc => {
        if (acc.data == 0) {
          setShowHistoryScreen(false)
        } else {
          setShowHistoryScreen(true)
          setTopUpHistory(acc.data)
        }
      })
      .catch(err => {
        console.log(err)
      })
  }

  const getAllPackages = () => {
    try {
      axios
        .get('/api/Package/getAllPackages')
        .then(acc => {
          console.log('below is my data')
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

  const handlePurchaseTopUp = () => {
    var data = localStorage.getItem('jwt')
    var parseData = JSON.parse(data)

    try {
      axios
        .post('/api/Package/PurchasePackage', {
          packageId: packageId,
          Anount: price,
          id: parseData._id
        })
        .then(acc => {
          console.log(acc.data)
          getData()
          window.alert('Package Created Successfuly')
        })
        .catch(err => {
          console.log(err)
        })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      {showHistoryScreen == true ? (
        <PackageHistory TopUpHistory={TopUpHistory} />
      ) : (
        showHistoryScreen == false && (
          <Grid container spacing={6}>
            <Grid item xs={12}>
              <Typography variant='h4'>Package</Typography>
            </Grid>

            <Grid item xs={12}>
              <Card>
                <CardHeader title='Topup With Lyka Coin (BEP-20)' titleTypographyProps={{ variant: 'h6' }} />

                <div style={{ marginLeft: 100, marginRight: 100, marginBottom: 40, marginTop: 20 }}>
                  <FormControl  fullWidth>
                    <InputLabel id='form-layouts-separator-select-label'>Select Package</InputLabel>
                    <Select
                    onChange={(e)=>{setPackageId(e.target.value)}}
                      label='Select Package'
                      defaultValue=''
                      id='form-layouts-separator-select'
                      labelId='form-layouts-separator-select-label'
                    >
                      {datas ? (
                        datas.map(acc => {
                          return (
                            <MenuItem key={acc._id} value={acc._id}>
                              {acc.PackageName} - ${acc.PackagePrice}
                            </MenuItem>
                          )
                        })
                      ) : (
                        <MenuItem value='null'>Loading...</MenuItem>
                      )}
                    </Select>
                  </FormControl>

                  <p>Lyka Coin (Including 1% admin fee)</p>
                  <TextField disabled={true} fullWidth label='Total Lyka' placeholder='Carter' />

                  <div style={{ textAlign: 'center', marginTop: 30 }}>
                    <Button onClick={handlePurchaseTopUp} size='large' type='submit' sx={{ mr: 2 }} variant='contained'>
                      Submit
                    </Button>
                  </div>
                </div>
              </Card>
            </Grid>
          </Grid>
        )
      )}
    </>
  )
}

export default MUITable
