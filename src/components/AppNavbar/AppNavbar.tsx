import { ArrowRight } from '@mui/icons-material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import AppTypography from '../AppTypography/AppTypography';
import { useStyles } from './AppNavbar.styles';

interface Props {
  currentPage?: string;
}
const AppNavbar = ({ currentPage }: Props) => {
  const { classes } = useStyles();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar variant='dense'>
          <AppTypography
            variant='h6'
            color='inherit'
            className={classes.header}
          >
            Task Management <ArrowRight /> {currentPage}
          </AppTypography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default AppNavbar;
