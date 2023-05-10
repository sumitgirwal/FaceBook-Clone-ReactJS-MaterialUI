import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
  CardActions,
  Checkbox,
} from "@mui/material";

import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import React from "react";
import { Favorite } from "@mui/icons-material";
import Post from './Post';

const Feed = () => {
  return (
    <Box flex={4} p={2} >
   
       <Post />
       <Post />
       <Post />
       <Post />
       <Post />
       <Post />
       <Post />
    </Box>
  );
};

export default Feed;
