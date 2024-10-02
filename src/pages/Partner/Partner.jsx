import React from 'react'
import LogoImg from "../../assets/logo.png"
import StarsImg from "../../assets/Star.png"
import LogosImg from "../../assets/logos.png"
import { Box, Container, styled, Typography } from '@mui/material'


const Partner = () => {

   const CustomContainer = styled(Container)(({theme}) => ({
        display: "flex",
        justifyContent: "space-between",
   }))

   const CustomBox = styled(Box)(({theme}) => ({
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.down("md")]: {
        mb: theme.spacing(4),
    }
   }))
           
  return (
   <Box sx={{mt: 10}}>
    <CustomContainer>
        <CustomBox>
            <Box>
               <img src={LogoImg} alt='logo' style={{maxWidth: "100%"}}/>
               <Typography
               variant='body2'
               sx={{
                color: "7D8589",
                fontSize: "16px",
                fontWeight:"bold",
                mt:2,
               }}
               >
               Over 50,000 Customers Trust Regional Delicacy Shop
               </Typography>
               </Box>
          </CustomBox>  
               <Box>
                <img src={StarsImg} alt="star" style={{maxWidth: "100%"}} />
                <Typography
                 variant='body2'
                 sx={{
                  color: "7D8589",
                  fontSize: "16px",
                  fontWeight:"bold",
                  mt:2,
                 }}
                >
                  5 Star Rating (2k+ Reviews)
                </Typography>
               </Box>
             
    </CustomContainer>
<Container sx={{display:"flex", flexDirection:"column"}}>
<img src={LogosImg} alt='logos'/>
</Container>
   </Box>
  )
}

export default Partner