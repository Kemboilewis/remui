import { Typography, useTheme } from "@mui/material";
import { BannerContainer, BannerContent, BannerDescription, BannerImage, BannerTitle } from "../../styles/banner";

export default function Banner(){
    // const theme=useTheme();
    // const matches= useMediaQuery(theme.breakpoints.down('md'));
    return (
        <BannerContainer>
          <BannerImage src="/banner/banner.png"/>
          <BannerContent>
            <Typography variant="h6">Huge collection</Typography>
            <BannerTitle variant="h2">
                New Bags
            </BannerTitle>
            <BannerDescription variant="subtitle">
                This is acollection of brand new bags which is of mitumba collection
                with a brand new belt opened just today, get the best here 
            </BannerDescription>
          </BannerContent>
        </BannerContainer>
    );
}