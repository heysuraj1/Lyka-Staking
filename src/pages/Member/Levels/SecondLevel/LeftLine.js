import React from 'react'
import Typography from '@mui/material/Typography'

const LeftLine = ({datas}) => {
  return (
    <div style={{ textAlign: 'center' }}>
    <img src='https://lykacoin.net/images/0img.png' style={{ width: 80 }} alt='' />
    <Typography variant='h6'> {datas.FirstLevel.LeftLine.userName == "null" ? "Vacant": (datas.FirstLevel.LeftLine.userName)} </Typography>
    {
      datas.FirstLevel.LeftLine.userName == "null" ? 

      <></>
      :

      <Typography variant='h6'>2</Typography>

    }
  </div>
  )
}

export default LeftLine