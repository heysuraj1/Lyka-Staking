import React from 'react'
import Typography from '@mui/material/Typography'

const RightLine = ({datas}) => {
  
  return (
    <div style={{ textAlign: 'center' }}>

      {
        datas ?


        <>
        
        <img src='https://lykacoin.net/images/1img.png' style={{ width: 80 }} alt='' />
        <Typography variant='h6'>{datas.FirstLevel.RightLine.userName == "null" ? "Vacant":datas.FirstLevel.RightLine.userName}</Typography>
        {
          datas.FirstLevel.RightLine.userName == "null" ? 
    
          <></>
          :
    
          <Typography variant='h6'>3</Typography>
    
        }
        </>

        :


        <></>
      }
  </div>
  )
}

export default RightLine