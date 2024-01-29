import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'

// 画像ファイルをインポート
import ImageFile from '../static/images/pocha.jpeg'

const useStyles = makeStyles((theme) => ({
  // 表示サイズを指定
  large: {
    width: theme.spacing(25),
    height: theme.spacing(25),
  },
}));

const MyAvatar: React.FC = () => {
  const classes = useStyles();

  return (
    <div>
      <Box p={2}>
        <Box display='flex' justifyContent='center' p={1} >
          <Avatar
            alt='太郎'
            src={ImageFile}
            className={classes.large}
          />
        </Box>
        <Box display='flex' justifyContent='center' p={2} >
          <Typography variant='h5' >
            TARO
          </Typography>
        </Box>
        <Box display='flex' justifyContent='center' p={1} >
          <Typography variant='body1'>
            Front / Backend Enginner
          </Typography>
        </Box>
      </Box>
    </div>
  );
}

export default MyAvatar;
