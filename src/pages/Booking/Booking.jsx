import React from 'react'
import buyIcon from "../../assets/buy_icon.png"
import sellIcon from "../../assets/sell_icon.png"
import rentIcon from "../../assets/sell_icon.png"
import { Box, colors, styled, Typography } from '@mui/material'

import { ArrowRightAltIcon } from '@mui/icons-material/ArrowRightAlt'
import CustomButton from '../../components/CustomButton/CustomButton'

const Booking = () => {

    const CustomBox = styled(Box)(({theme}) => ({
        width:"30%",
        [theme.breakpoints.down("md")]: {
            width: "85%"
        }
    }))

    const GuidesBox = styled(Box)(({theme}) => ({
        display: "flex",
        justifyContent: "space-between",
        width: "70%",
        marginTop: theme.spacing(5),
        marginBottom:theme.spacing(5),
        [theme.breakpoints.down("md")]: {
            width: "100%"
        },
        [theme.breakpoints.down("sm")]: {
            marginBottom: "0",
            flexDirection: "column",
            marginTop: theme.spacing(5),

        }
    }))

    const GuideBox = styled(Box)(({theme}) => ({
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        [theme.breakpoints.down("sm")]: {
           
            margin: theme.spacing(2, 0, 2, 0),

        },
    }))
  return (
    <Box
    sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "30px"
    }}
    >
    <div
    style={{
        width: "5%",
        height: "5px",
        backgroundColor: "#000339",
        margin: "0 auto",
    }}
    >
    </div>

    <Typography
    variant='h3'
    sx={{ fontSize: "35px", fontWeight: "bold", color: "#000339", my: 3}}
    >
          How to Order?
    </Typography>
    
    <CustomBox>
     <Typography
     sx={{
        fontSize: "16px",
        fontWeight: "500",
        color: "#5A6473",
        textAlign: "center",
     }}
     >
     Everything you need to know when placing an order.
     </Typography>
    </CustomBox>

    <GuidesBox>
        <GuideBox>
           <img src={buyIcon} alt="buyicon" />
           <Typography
           variant='body2'
           sx={{
            fontSize: "20px",
            fontWeight: "500",
            color: "#3B3c45",
            my: 1,
           }}
           >
            Order Guides
           </Typography>
           <Box
           sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
           }}
           >

            <Typography
            variant='body2'
            sx={{fontWeight: "bold" ,fontSize: "14px", color: "#0689FF"}}
            >
           How to order
            </Typography>
           {/* <ArrowRightAltIcon style={{color: "#0689FF"}}/> */}
           </Box>
        </GuideBox>


        <GuideBox>
           <img src={sellIcon} alt="buyicon" />
           <Typography
           variant='body2'
           sx={{
            fontSize: "20px",
            fontWeight: "500",
            color: "#3B3c45",
            my: 1,
           }}
           >
            Order Guides
           </Typography>
           <Box
           sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
           }}
           >

            <Typography
            variant='body2'
            sx={{fontWeight: "bold" ,fontSize: "14px", color: "#0689FF"}}
            >
           How to order
            </Typography>
           {/* <ArrowRightAltIcon style={{color: "#0689FF"}}/> */}
           </Box>
        </GuideBox>


        <GuideBox>
           <img src={buyIcon} alt="buyicon" />
           <Typography
           variant='body2'
           sx={{
            fontSize: "20px",
            fontWeight: "500",
            color: "#3B3c45",
            my: 1,
           }}
           >
            Order Guides
           </Typography>
           <Box
           sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
           }}
           >

            <Typography
            variant='body2'
            sx={{fontWeight: "bold" ,fontSize: "14px", color: "#0689FF"}}
            >
           How to order
            </Typography>
           {/* <ArrowRightAltIcon style={{color: "#0689FF"}}/> */}
           </Box>
        </GuideBox>

    </GuidesBox>

    <CustomButton
    backgroundColor= "#0F1B4C"
    color="#fff" 
    buttonText="See Full Guides"
     guideBtn={true}
    />
    </Box>
  )
}

export default Booking