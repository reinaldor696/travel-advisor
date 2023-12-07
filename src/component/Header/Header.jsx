import React from "react";

import { AppBar, Toolbar, Typography, InputBase, Box } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search'

import { ThemeProvider } from "@mui/material";
import theme from "./styles";

const Header = () => {
    const classes = theme;

    return(
        <ThemeProvider theme={theme}>
        <AppBar position="static">
            <Toolbar display='flex' className={classes.toolbar}>
                <Typography variant="h5" className={classes.title}>
                    Travel Advisor
                </Typography>
                <Box display="flex">
                    <Typography variant="h6" className={classes.title}>
                        Explore New Places
                    </Typography>
                    <div>
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon />
                            </div>
                            <InputBase placeholder="Search" classes={{ root: classes.inputRoot, input: classes.inputInput }} />
                        </div>
                    </div>    
                </Box>
            </Toolbar>
        </AppBar>
        </ThemeProvider>
    );
}

export default Header;