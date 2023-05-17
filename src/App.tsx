import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Box, Container, Tab, Tabs} from "@mui/material";
import TabPanel from "./components/TabPanel/TabPanel";
import Calculator from "./components/Calculator/Calculator";
import ToDo from "./components/ToDo/ToDo";
import { Provider } from 'react-redux';
import store from './store/store';


function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}


function App() {
    const [value, setValue] = useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

  return (
      <Provider store={store}>
          <div className="App">
              <Container>
                  <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                      <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                          <Tab label="Calculator" {...a11yProps(0)} />
                          <Tab label="ToDo" {...a11yProps(1)} />
                          <Tab label="Item Three" {...a11yProps(2)} />
                          <Tab label="Item Three" {...a11yProps(3)} />
                          <Tab label="Item Three" {...a11yProps(4)} />
                      </Tabs>
                  </Box>
                  <TabPanel value={value} index={0}>
                      <Calculator/>
                  </TabPanel>
                  <TabPanel value={value} index={1}>
                      <ToDo/>
                  </TabPanel>
                  <TabPanel value={value} index={2}>
                      Item Three
                  </TabPanel>
                  <TabPanel value={value} index={3}>
                      Item Three
                  </TabPanel>
                  <TabPanel value={value} index={4}>
                      Item Three
                  </TabPanel>
              </Container>

          </div>
      </Provider>

  );
}

export default App;
