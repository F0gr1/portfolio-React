import React from 'react'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'

const About: React.FC = () => {
  return (
    <>
      <Box p={4}>
        <Box display='flex' justifyContent='center' p={1}>
          <Typography variant='h5' >
            Profile
          </Typography>
        </Box>
        <Box display='flex' justifyContent='center' p={1}>
          <Typography variant='body1' align='left'>
            私の名前は太郎です。<br />
            東京でWebエンジニアとして働いています。<br />
            よく書く言語はTypeScriptとReactです。<br />
            学生時代はPHPとLaravelなども書いていました。
          </Typography>
        </Box>
      </Box>
    </>
  );
}

export default About;
