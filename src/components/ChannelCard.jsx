import { Box, CardContent, CardMedia, Typography } from '@mui/material';
import {  CheckCircle } from '@mui/icons-material'; 
import { Link } from 'react-router-dom';

import { demoProfilePicture } from '../utils/constants';

const ChannelCard = ( { Channeldetail, marginTop } ) => (
    <Box 
    sx={{ boxShadow: 'none',
     borderRadius: '20px', display: 'flex', justifyContent:'center', 
    alignItems:'center',   
    width: {xs: '356px', md : '340px'},
    height: '326px',
    margin: 'auto;',
    marginTop,
    }}>

     <Link to={`/channel/${ Channeldetail?.id?.channelId}`}>
      <CardContent sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent:'center', textAlign:'center', color: '#FFF' }}>
         <CardMedia 
         image={ Channeldetail?.snippet?.thumbnails?.default?.url || demoProfilePicture}  
         alt={Channeldetail?.snippet?.title}
         sx={{ borderRadius: '50%', height: '180px', width: '180px', mb: 2, border: '1px solid #e3e3e3'}}
         />

         <Typography variant='h6'>
          {Channeldetail?.snippet?.title}
          <CheckCircle sx={{ fontSize: 12, color: 'gray', ml: '5px' }} />
         </Typography>
         {Channeldetail?.statistics?.subscriberCount && (
          <Typography>
            {parseInt(Channeldetail?.statistics?.subscriberCount).toLocaleString()} Subscribers
          </Typography>
         )}
      
        </CardContent>
     </Link>
    </Box>
  
)

export default ChannelCard
