import React from 'react'
import Typography from '@mui/material/Typography'

const ThirdLevelLeft = ({datas}) => {
  return (
    <div style={{ textAlign: 'center' }}>
                  <img src='https://lykacoin.net/images/1img.png' style={{ width: 80 }} alt='' />
                  <Typography variant='h6'>{datas.SecondLeve.TotalLeft.LeftLine.userName == "null" ? "Vacant" : datas.SecondLeve.TotalLeft.LeftLine.userName}</Typography>
                  {
                    datas.SecondLeve.TotalLeft.LeftLine.userName == "null" ? 

                    <></>
                    
                    :
                    <Typography variant='h6'>4</Typography>

                  }
                </div>
  )
}

export default ThirdLevelLeft