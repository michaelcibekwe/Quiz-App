import React, { useState } from "react";
import { Route, Link } from "react-router-dom";
import { AppBar, Typography, Tabs, Tab, Toolbar, IconButton, Box, Menu, MenuItem } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';

const Navbar = () => {
const [anchorEl, setAnchorEl] = useState(null);
const [value, setValue] = useState(0);
    
    const handleChangePage = (event, newValue) => {
        setValue(newValue);
    }

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="sticky">
            <Toolbar variant="dense">
                <Typography variant="h6" component="div" sx={{ flexGrow: 1}}>
                    QuizApp
                </Typography>
                <Tabs value={value} 
                    onChange={handleChangePage} 
                    aria-label="nav tabs"
                    textColor="white"
                    indicatorColor="secondary"
                >
                    <Tab className="tabs" component={Link} label="Home" to="/dashboard"/>
                    <Tab className="tabs" component={Link} label="Home" to="/" />
                    <Tab className="tabs" component={Link} label="Quizzes" to="/quiz"/>
                    <Tab className="tabs" component={Link} label="Log In" to="/login" />
                    <Tab className="tabs" component={Link} label="Sign Up" to="/signup" />
                    <Tab className="tabs" component={Link} label="Leaderboards" to="/leaderboard" />
                </Tabs>
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
              </Menu>
            </div>
            </Toolbar>
            </AppBar>
        </Box>
        
    );
};

export default Navbar;