import React from "react";
import { AppBar, Typography, Tabs, Tab, Toolbar, IconButton, Box, Menu, MenuItem } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';

function LinkTab(props) {
    return (
        <Tab
            component="a"
            onClick={(event) => {
                event.preventDefault();
            }}
            {...props}
        />
    );
}

const Navbar = () => {
const [auth, setAuth] = React.useState(true);
const [anchorEl, setAnchorEl] = React.useState(null);
const [value, setValue] = React.useState(0);

    const handleChange = (event) => {
        setAuth(event.target.checked);
    };
    
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
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1}}>
                    QuizApp
                </Typography>
                <Tabs value={value} onChange={handleChangePage} aria-label="nav tabs">
                    <LinkTab className="tabs" label="Home" href="/dashboard"/>
                    <LinkTab className="tabs" label="Quizzes" href="/quiz"/>
                </Tabs>
            {auth && (
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
          )}
            </Toolbar>
            </AppBar>
        </Box>
        
    );
};

export default Navbar;