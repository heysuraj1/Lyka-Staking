import React from 'react'
import Typography from '@mui/material/Typography'

const ThirdLevelRight = ({ datas }) => {
  return (
    <div style={{ textAlign: 'center' }}>
      <img src='https://lykacoin.net/images/1img.png' style={{ width: 80 }} alt='' />
      <Typography variant='h6'>
        {datas.SecondLeve.TotalLeft.RightLine.userName == 'null'
          ? 'Vacant'
          : datas.SecondLeve.TotalLeft.RightLine.userName}
      </Typography>
      {datas.SecondLeve.TotalLeft.RightLine.userName == 'null' ? <></> : <Typography variant='h6'>5</Typography>}
    </div>
  )
}

export default ThirdLevelRight
