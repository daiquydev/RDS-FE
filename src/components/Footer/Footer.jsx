import React from 'react'
import { Box, Container, styled, Typography } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {

  const CustomContainer = styled(Container)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-around",
    gap: theme.spacing(5),
    [theme.breakpoints.down("md")]: {
      flexDirection: 'column',
      alignItems: 'flex-start', 
      justifyContent: 'center',
    }
  }));

  const IconBox = styled(Box)(({ theme }) => ({
    display: "flex",
    gap: ".5rem",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "flex-start", 
    },
  }));

  const FooterLink = styled("span")(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    gap: ".5rem",
    [theme.breakpoints.down("md")]: {
      alignItems: "flex-start", 
      justifyContent: 'flex-start',
    }
  }));

  const CenterFooterLink = styled(FooterLink)(({ theme }) => ({
    [theme.breakpoints.down("md")]: {
      alignItems: "flex-start", 
      justifyContent: 'flex-start',
    }
  }));

  const featured_list = [
    { path: "/", display: "Guides" },
    { path: "/", display: "Services" },
    { path: "/", display: "Contact us" },
  ];

  const overview_list = [
    { path: "/", display: "Location" },
    { path: "/", display: "Partnerships" },
    { path: "/", display: "Terms of use & Privacy Policies" },
  ];

  const Link = styled(Typography)(() => ({
    fontSize: "16px",
    color: "#000066",
    fontWeight: "500",
    cursor: "pointer",
    "&:hover": {
      color: "#66B2FF",
    },
  }));

  return (
    <Box sx={{ py: 10, backgroundColor: "#FFF6B2" }}>
      <CustomContainer>
        <Box>
          <Typography
            sx={{
              fontSize: "20px",
              color: "1C1C1D",
              fontWeight: "700",
              mb: 2,
            }}
          >
            Featured
          </Typography>
          <CenterFooterLink>
            {featured_list.map((item, index) => (
              <Link key={index}>{item.display}</Link>
            ))}
          </CenterFooterLink>
        </Box>

        <Box>
          <Typography
            sx={{
              fontSize: "20px",
              color: "1C1C1D",
              fontWeight: "700",
              mb: 2,
            }}
          >
            Overview
          </Typography>
          <FooterLink>
            {overview_list.map((item, index) => (
              <Link key={index}>{item.display}</Link>
            ))}
          </FooterLink>
        </Box>

        <Box>
          <Typography
            sx={{
              fontSize: "20px",
              color: "1C1C1D",
              fontWeight: "700",
              mb: 2,
            }}
          >
            Get in touch
          </Typography>
          <Typography
            sx={{
              fontSize: "16px",
              color: "#000066",
              fontWeight: "500",
              mb: 2,
            }}
          >
            Keep in touch with our social media pages.
          </Typography>

          <IconBox>
            <FacebookIcon />
            <InstagramIcon />
            <TwitterIcon />
          </IconBox>
        </Box>
      </CustomContainer>
    </Box>
  );
};

export default Footer;
