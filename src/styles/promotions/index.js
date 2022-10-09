import { Box, styled, Typography } from "@mui/material";
import { colors } from "../../styles/theme";

export const PromotionsContainer = styled(Box)(({theme})=>({
    [theme.breakpoints.down('md')]:{
        padding:'40px 0px 40px 0px',
    },
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    padding:'20px 0px 20px 0px',
    overflow:'hidden',
    background:colors.secondary,

}));
export const MessageText = styled(Typography)(({theme})=>({
    fontFamily:"'Montez','cursive'",
    [theme.breakpoints.down('')]:{
        fontSize:'3rem'
    },
    color:colors.white,
    fontSize:'1.5rem',

}));