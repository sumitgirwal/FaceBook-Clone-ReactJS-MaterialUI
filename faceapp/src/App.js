import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Navbar from "./components/Navbar";
import Rightbar from "./components/Rightbar";
import { Container, Stack } from "@mui/material";
import Box from '@mui/material/Box';
function App() {
  return (
    <Box>

      <Navbar />
      <Stack direction="row" spacing={2} justifyContent="space-between">

       <Sidebar />
       <Feed />
       <Rightbar />
        
      </Stack>
    </Box>
  );
}

export default App;
