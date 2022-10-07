
import { Favorite, Person, ShoppingCartRounded } from "@mui/icons-material";
import { Divider, ListItemButton, ListItemIcon } from "@mui/material";
import { ActionIconsContainerDesktop, ActionIconsContainerMobile, MyList } from "../../styles/appbar";



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