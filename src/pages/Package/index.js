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
import {useState,useEffect} from "react"
const MUITable = () => {

  const [packageId, setPackageId] = useState("638f8724217e0034fdce9d0a")
  const [price, setPrice] = useState("")



  useEffect(() => {
getData()
  }, [])
  
  const getData = () =>{
  
    var UserData = localStorage.getItem("jwt")
    var parsedData = JSON.parse(UserData)
  
    axios.post("/api/Package/CheckPackage",{
      ids:parsedData._id
     })
     .then((acc)=>{
      console.log(acc.data)
     })
     .catch((err)=>{
      console.log(err)
     })
    }







  const handlePurchaseTopUp = () => {


    var data = localStorage.getItem("jwt")
    var parseData = JSON.parse(data)

    try {
      axios.post('/api/Package/PurchasePackage', {
        packageId:packageId,
        Anount:price,
        id:parseData._id
      })
      .then((acc)=>{
        console.log(acc.data)
      })
      .catch((err)=>{
        console.log(err)
      })
    } catch (error) {
      console.log(error)
    }
  }




  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Typography variant='h4'>Package</Typography>
      </Grid>

      <Grid item xs={12}>
        <Card>
          <CardHeader title='Topup With Lyka Coin (BEP-20)' titleTypographyProps={{ variant: 'h6' }} />

          <div style={{ marginLeft: 100, marginRight: 100, marginBottom: 40, marginTop: 20 }}>
            <FormControl fullWidth>
              <InputLabel id='form-layouts-separator-select-label'>Select Package</InputLabel>
              <Select
                label='Select Package'
                defaultValue=''
                id='form-layouts-separator-select'
                labelId='form-layouts-separator-select-label'
              >
                <MenuItem value='Lyka Junior - $100'>Lyka Junior - $100</MenuItem>
                <MenuItem value='Lyka Pro - $500'>Lyka Pro - $500</MenuItem>
                <MenuItem value='Lyka Senate - $1000'>Lyka Senate - $1000</MenuItem>
                <MenuItem value='Lyka Director - $2500'>Lyka Director - $2500</MenuItem>
                <MenuItem value='Lyka President - $5000'>Lyka President - $5000</MenuItem>
                <MenuItem value='Lyka Ambassador - $10000'>Lyka Ambassador - $10000</MenuItem>
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
}

export default MUITable
