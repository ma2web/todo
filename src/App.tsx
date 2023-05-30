import { ThemeProvider } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EditTask from './pages/EditTask/EditTask';
import Tasks from './pages/Tasks/Tasks';
import { StoreProvider } from './store/Store';
import theme from './theme/theme';

type Props = {};

const App = (props: Props) => {
  return (
    <StoreProvider>
      <ThemeProvider theme={theme}>
        <div className='App'>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Tasks />} />
              <Route path='/task/:id' element={<EditTask />} />
            </Routes>
          </BrowserRouter>
        </div>
      </ThemeProvider>
    </StoreProvider>
  );
};

export default App;
