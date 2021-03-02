import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ReactDOM from 'react-dom';

import SplitPane from 'react-split-pane';
import {MyInfo} from './Myinformation.js';
import {RoopNewLink} from "./RoopNewLink.js";
import {Home} from "./Home.js";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    backgroundColor: 'blue',
    marginTop: '71px',
    marginRight: '3%',
    marginLeft: '0.5%',
    minWidth: '600px',
  },
  title: {
    fontSize: '2.5em',
    minWidth: '250px',
    marginTop: '1%',
    marginLeft: '10px',
    marginBottom: '10%',
    background: 'linear-gradient(150deg, #FFFFFF 30%, #FFFFFF 90%)',
    boxShadow: '0 3px 5px 2px rgba(0,0,0,.2)',
  },
  tab: {
    background: 'linear-gradient(150deg, #FFFFFF 30%, #FFFFFF 90%)',
    color: '#000000',
  },
  body: {
    marginLeft: '3%',
    marginRight: '3%',
    borderLeft: '3px solid rgba(0,0,0,.2)',
    padding: "10px 0px 100vh 10px",
  },

}));


export function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
<div>
    <SplitPane split="horizo​​ntal" minSize={50} defaultSize="130px">
      <SplitPane split="vertical" minSize={50} defaultSize="260px">
        <div className="title">
          <div className="titlePC">すえひろの</div>
          <div className="titlePC">ホームページ</div>
          <div className="titleSmart">
            すえひろのホームページ
          </div>
        </div>
        <div className="tabPC">
          <AppBar position="static">
            <Tabs value={value} onChange={handleChange} aria-label="simple tabs example" indicatorColor='primary' className={classes.tab}>
              <Tab label="ホーム" {...a11yProps(0)} />
              <Tab label="作品" {...a11yProps(1)} />
              <Tab label="基礎情報" {...a11yProps(2)} />
              <Tab label="予備" {...a11yProps(3)} />
            </Tabs>
          </AppBar>
        </div>
      </SplitPane>
      <div>
        <div className="tabTablet">
          <AppBar position="static">
            <Tabs value={value} onChange={handleChange} aria-label="simple tabs Tablet" indicatorColor='primary' className={classes.tab}>
              <Tab label="ホーム" {...a11yProps(0)} />
              <Tab label="作品" {...a11yProps(1)} />
              <Tab label="基礎情報" {...a11yProps(2)} />
              <Tab label="予備" {...a11yProps(3)} />
            </Tabs>
          </AppBar>
        </div>
        <div className="body">
          <TabPanel value={value} index={0}>
            <Home/>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <RoopNewLink/>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <MyInfo/>
          </TabPanel>
          <TabPanel value={value} index={3}>

          </TabPanel>
        </div>
      </div>
    </SplitPane>
    <div className="tabSmart">
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs Smart" indicatorColor='primary' className={classes.tab}>
          <Tab label="ホーム" {...a11yProps(0)} />
          <Tab label="作品" {...a11yProps(1)} />
          <Tab label="基礎情報" {...a11yProps(2)} />
          <Tab label="予備" {...a11yProps(3)} />
        </Tabs>
      </AppBar>
    </div>
    <div className="bodySmart">
      <TabPanel value={value} index={0}>
        <Home/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <RoopNewLink/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <MyInfo/>
      </TabPanel>
      <TabPanel value={value} index={3}>

      </TabPanel>
    </div>
</div>
  );
}

if (document.getElementById('appi')) {
    ReactDOM.render(<SimpleTabs />, document.getElementById('appi'));
}
