import { AccountBox, Group, Home, Storefront, Person, Settings, ModeNight  } from '@mui/icons-material';
import ArticleIcon from '@mui/icons-material/Article';
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material';
import React from 'react'

const Sidebar = () => {
    return (
        <Box flex={1} p={2} sx={{ display: { xs: "none", sm:"block" } }}>
            <List>
                {/* Home Page */}
                <ListItem disablePadding>
                    <ListItemButton  component="a" href="#home">
                    <ListItemIcon>
                        <Home></Home>
                    </ListItemIcon>
                    <ListItemText primary="Homepage" />
                    </ListItemButton>
                </ListItem>

                {/* Pages */}
                <ListItem disablePadding>
                    <ListItemButton  component="a" href="#pages">
                    <ListItemIcon>
                        <ArticleIcon ></ArticleIcon>
                    </ListItemIcon>
                    <ListItemText primary="Pages" />
                    </ListItemButton>
                </ListItem>

                {/* Groups */}
                <ListItem disablePadding>
                    <ListItemButton  component="a" href="#groups">
                    <ListItemIcon>
                        <Group ></Group>
                    </ListItemIcon>
                    <ListItemText primary="Groups" />
                    </ListItemButton>
                </ListItem>

                 {/* MarketPlace */}
                 <ListItem disablePadding>
                    <ListItemButton  component="a" href="#marketplace">
                    <ListItemIcon>
                        <Storefront ></Storefront>
                    </ListItemIcon>
                    <ListItemText primary="MarketPlace" />
                    </ListItemButton>
                </ListItem>

                {/* Friends */}
                <ListItem disablePadding>
                    <ListItemButton  component="a" href="#friends">
                    <ListItemIcon>
                        <Person ></Person>
                    </ListItemIcon>
                    <ListItemText primary="Friends" />
                    </ListItemButton>
                </ListItem>

                {/* Settings */}
                <ListItem disablePadding>
                    <ListItemButton  component="a" href="#settings">
                    <ListItemIcon>
                        <Settings ></Settings>
                    </ListItemIcon>
                    <ListItemText primary="Settings" />
                    </ListItemButton>
                </ListItem>

                {/* Profile */}
                <ListItem disablePadding>
                    <ListItemButton  component="a" href="#profile">
                    <ListItemIcon>
                        <AccountBox ></AccountBox>
                    </ListItemIcon>
                    <ListItemText primary="Profile" />
                    </ListItemButton>
                </ListItem>

                {/* Theme */}
                <ListItem disablePadding>
                    <ListItemButton  component="a" href="#profile">
                    <ListItemIcon>
                        <ModeNight ></ModeNight>
                    </ListItemIcon>
                    <Switch />
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    )
}

export default Sidebar;