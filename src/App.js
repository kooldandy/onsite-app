import { Login } from './app/modules/login/Login';
import { Signup } from './app/modules/signup/Signup';
import './App.css';
import { Box, Tabs, Tab } from '@material-ui/core';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';

import * as React from 'react';



function App() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="App">
      <div className="tab-content">
        <Box sx={{ width: '100%', typography: 'body1' }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <TabList onChange={handleChange} aria-label="lab API tabs example">
                <Tab label="Login" value="1" />
                <Tab label="Sign Up" value="2" />
              </TabList>
            </Box>
            <TabPanel value="1">
              <div>
                <Login></Login>
              </div>
            </TabPanel>
            <TabPanel value="2">
              <div>
                <Signup></Signup>
              </div>
            </TabPanel>

          </TabContext>
        </Box>

      </div>

    </div>

  );
}

export default App;
