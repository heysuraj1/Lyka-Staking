import React from 'react'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'


const SuperUserLevel = ({datas,updateData}) => {
  return (
    <Grid item xs={12}>
      {
        datas ? 


        <>
        
    <div style={{ textAlign: 'center' }}>
      <img src='https://lykacoin.net/images/1img.png' style={{ width: 80 }} alt='' />
      <Typography variant='h6'>{datas.SuperUser.id}</Typography>
      <Typography variant='h6'>( {datas.SuperUser.userName} )</Typography>
    </div>
        
        </>

        :


        <></>
      }
    <div></div>
  </Grid>
  )
}

export default SuperUserLevel