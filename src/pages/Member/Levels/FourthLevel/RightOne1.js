import React from 'react'
import Typography from '@mui/material/Typography'


const RightOne1 = ({datas}) => {
  return (
    <div style={{ textAlign: 'center' }}>
      {
        datas ? 

        <>
        
        
<img src='https://lykacoin.net/images/1img.png' style={{ width: 80 }} alt='' />
<Typography variant='h6'>{datas.ThirdLevel.One.RightLine.userName == "null" ? "Vacant" : datas.ThirdLevel.One.RightLine.userName}</Typography>
{
  datas.ThirdLevel.One.RightLine.userName == "null" ?

  <></>
  :

  <Typography variant='h6'>9</Typography>

}
        
        </>


        :


        <></>
      }
  </div>
  )
}

export default RightOne1