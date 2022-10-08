
import { Favorite, Person, ShoppingCartRounded } from "@mui/icons-material";
import { Divider, ListItemButton, ListItemIcon } from "@mui/material";
import { ActionIconsContainerDesktop, ActionIconsContainerMobile, MyList } from "../../styles/appbar";
import { colors } from "../../styles/theme";



export default function Actions({matches}) {
    const Component = matches
    ?ActionIconsContainerMobile:
    ActionIconsContainerDesktop
    return(
        <Component>

        <MyList type="row">
            <ListItemButton sx={{
                justifyContent:'center',
            }}
            >
                <ListItemIcon
                sx={{
                    display:'flex',
                    justifyContent:'center',
                    color:matches&& colors.secondary,
                }}
                >
                    <ShoppingCartRounded/>
                </ListItemIcon>
            </ListItemButton>
            <Divider orientation="vertical" flexItem/>
            <ListItemButton sx={{
                justifyContent:'center',
            }}
            >
                <ListItemIcon  sx={{
                    display:'flex',
                    justifyContent:'center',
                    color:matches&& colors.secondary,
                }}
                >
                    <Favorite/>
                </ListItemIcon>
            </ListItemButton>
            <Divider orientation="vertical" flexItem/>
            <ListItemButton sx={{
                justifyContent:'center',
            }} 
            >
                <ListItemIcon  sx={{
                    display:'flex',
                    justifyContent:'center',
                    color:matches&& colors.secondary,
                }}
                >
                    <Person/>
                </ListItemIcon>
            </ListItemButton>
            <Divider orientation="vertical" flexItem/>

        </MyList>
        </Component>
    )
}