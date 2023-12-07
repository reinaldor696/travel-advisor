import React from "react";

import { AppBar, Toolbar, Typography, InputBase, Box } from "@mui/material";
import { Search } from "@mui/icons-material";

import { ThemeProvider } from "@mui/material";
import { theme } from "./styles";

const Header = () => {
    const classes = theme;

    return(
        <ThemeProvider theme={theme}>
        <AppBar position="static">
            <Toolbar className={classes.toolbar}>
                <Typography variant="h5" className={classes.title}>
                    Travel Advisor
                </Typography>
                <Box display="flex">
                    <Typography variant="h6" className={classes.title}>
                        Explore New Places
                    </Typography>
                    {/* <Autocomplete> */}
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <Search />
                            </div>
                            <InputBase placeholder="Search..." classes={{ root: classes.inputRoot, input: classes.inputInput }} />
                        </div>
                    {/* </Autocomplete> */}
                </Box>
            </Toolbar>
        </AppBar>
        </ThemeProvider>
    )
}

export default Header;