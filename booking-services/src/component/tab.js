import React from 'react';
import {Tabs, Tab} from '@material-ui/core';


function TabPanel(props) {
  const { children, value, index} = props;
  return(
    <div>
      {
        value===index && (<h1>{children}</h1>)
      }
    </div>
  )
}

export default function UserTabs() {
  const [value, setValue] = React.useState(0);

  const handleTabs = (e, val) => {
    setValue(val);
  };

  return (
    <div>
      <Tabs value={value} onChange={handleTabs}>
          <Tab label="Semua" />
          <Tab label="PCu" />
          <Tab label="PBA" />
          <Tab label="PBAM" />
      </Tabs>
      <TabPanel value={value} index={0}>
        Item One
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
    </div>
  );
}
