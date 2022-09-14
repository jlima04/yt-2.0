import { useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';

import { Videos, ChannelCard } from '.'
import { fetchFromAPI } from '../utils/fetchFromAPI';


const ChannelDetail = () => {
  
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);

  console.log(channelDetail)


  const { id } = useParams();
  

  useEffect(() => {
   fetchFromAPI(`channels?part=snippet&id=${id}`)
   .then((data) => setChannelDetail(data?.items[0]));
   fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
   .then((data) => setVideos(data?.items));
  }, [id])

  return (
    <Box minHeight="95vh">
        <Box>
          <div style={{
            background: 'linear-gradient(90deg, rgba(9,121,72,1) 3%, rgba(9,106,54,0.9878326330532213) 53%, rgba(9,87,121,1) 100%)',
             zIndex: 10, 
             height: '300px'
          }}
          />

          <ChannelCard Channeldetail={channelDetail}
          marginTop="-130px"/>
          
        </Box>
        <Box display='flex' p='2'>
          <Box sx={{mr: {sm : '150px'}}}/>
            <Videos videos={videos}/>

          

        </Box>

    </Box>
  )
}

export default ChannelDetail;
