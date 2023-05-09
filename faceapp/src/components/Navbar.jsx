import styled from '@emotion/styled';
import { AppBar, Box, Typography, Toolbar } from '@mui/material';
import React from 'react'

const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
})

const Navbar = () => {
    return (
        <AppBar position='stick'>
            <StyledToolbar>
                 <Typography>FaceBook</Typography>
            </StyledToolbar>
        </AppBar>
    )
}

export default Navbar;