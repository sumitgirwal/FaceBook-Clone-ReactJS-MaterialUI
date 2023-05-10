import styled from '@emotion/styled';
import { Mail, Notifications, Pets } from '@mui/icons-material';
 
import { AppBar, Box, Typography, Toolbar, InputBase, Badge, Avatar, Menu, MenuItem } from '@mui/material';
import React, { useState } from 'react';

const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
});

const Search = styled("div")(({theme})=>({
    backgroundColor:"white",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%"
}));

const Icons = styled("div")(({theme})=>({
    display: "none", 
    alignItems: "center",
    gap: "10px",
    [theme.breakpoints.up("sm")]:{
        display: "flex"
    }
}));

const UserBox = styled("div")(({theme})=>({
    display: "flex", 
    alignItems: "center",
    gap: "20px",
    [theme.breakpoints.up("sm")]:{
        display: "none"
    }
}))


const Navbar = () => {
    const [open, setOpen] = useState(false)
    return (
        <AppBar position='stick'>
            <StyledToolbar>
                 <Typography variant='h6' sx={{ display: { xs: "none", sm:"block"}}}>FaceBook</Typography>
                 <Pets sx={{display: {xs: "block", sm: "none"}}}></Pets>
                 <Search>
                    <InputBase placeholder="search..."></InputBase>
                 </Search>
                 <Icons>
                    <Badge badgeContent={4} color="error">
                        <Mail />
                    </Badge>
                    <Badge badgeContent={2} color="error">
                        <Notifications />
                    </Badge>
                    <Avatar  onClick={e=>setOpen(true)}   src="https://mui.com/static/images/avatar/1.jpg" sx={{width:30, height:30}} ></Avatar>
                    
                 </Icons>
                 <UserBox  onClick={e=>setOpen(true)}  >
                 <Avatar src="https://mui.com/static/images/avatar/1.jpg" sx={{width:30, height:30}} />
                 <Typography variant='h6'>Mark</Typography>
                 </UserBox>
            </StyledToolbar>
            <Menu
                        id="fade-menu"
                        MenuListProps={{
                        'aria-labelledby': 'fade-button',
                        }}
                        
                        open={open}
                        onClose={e=>setOpen(false)}
                        anchorOrigin={{
                            vertical: "top",
                            horizontal: "right",
                        }}
                        transformOrigin={{
                            vertical: "top",
                            horizontal: "right"
                        }}
                    >
                        <MenuItem >Profile</MenuItem>
                        <MenuItem >My account</MenuItem>
                        <MenuItem >Logout</MenuItem>
                    </Menu>
        </AppBar>
    )
}

export default Navbar;