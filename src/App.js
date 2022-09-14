import { BrowserRouter, Routes, Route} from 'react-router-dom';
import {Box} from '@mui/material';
import { NavBar, Feed, Videodetail, Channeldetail, SearchFeed } from './components';

const App = () => (
    <BrowserRouter>
    <Box sx={{ backgroundColor : '#000'}}>
     <NavBar />

     <Routes>
        <Route path='/' exact element ={<Feed />} />
        <Route path='/video/:id' element={<Videodetail/>}/>
        <Route path='/channel/:id' element={<Channeldetail/>}/>
        <Route path='/search/:searchTerm' element={<SearchFeed/>}/>
     </Routes>
    </Box>
  </BrowserRouter>
  );


export default App
