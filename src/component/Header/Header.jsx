import React from "react";
import { Autocomplete } from "@react-google-maps/api";
import { AppBar, Toolbar, Typography, InputBase, Box } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';


const Header = () => {

    return(
        
        <AppBar position="static">
            <Toolbar display='flex' sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="h5" >
                    Travel Advisor
                </Typography>
                <Box display="flex">
                    <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center' }}>
                        Explore New Places
                    </Typography>
                    <div>
                        <div>
                            <div>
                                <SearchIcon sx={{ 
                                    height: '100%', 
                                    position: 'absolute', 
                                    pointerEvents: 'none', 
                                    display: 'flex', 
                                    alignItems: 'center', 
                                    justifyContent: 'center',
                                }}/>
                            </div>    
                            <InputBase placeholder="Search" sx={{
                                position: 'relative', 
                                color: 'inherit',
                                padding: '1, 1, 1, 0', 
                                paddingLeft: '5px', 
                                width: '100%', 
                                borderRadius: '20px',
                                }} /> 
                        </div>
                    </div>    
                </Box>
            </Toolbar>
        </AppBar>
        
    );
}

export default Header;