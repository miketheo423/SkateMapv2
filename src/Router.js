import React from 'react';
import { Text } from 'react-native';
import { Scene, Router, Actions } from 'react-native-router-flux';

import SpotList from './components/SpotList';

const tabIcon = ({ selected, title }) => {
  return (
    <Text style={{ color: selected ? 'red' : 'black' }}>{title}</Text>
  )
}

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root" hideNavBar>
      
        <Scene
          key="tabbar"
          tabs
          tabBarStyle={{ backgroundColor: '#FFF' }}
          showLabel={false}
        >
          <Scene key="spotFeedFlow" title="Spots" icon={tabIcon}>
              <Scene
                key="spotList"
                component={SpotList}
                title="Spots"
                initial
              />
          </Scene>
          <Scene key="spotMapFlow" title="Map" icon={tabIcon}>
              <Scene
                key="spotList"
                component={SpotList}
                title="Spots"
                initial
              />
          </Scene>
          <Scene key="profileFlow" title="Profile" icon={tabIcon}>
              <Scene
                key="spotList"
                component={SpotList}
                title="Spots"
                initial
              />
          </Scene>
        </Scene>

      </Scene>
    </Router>
  );
};

export default RouterComponent;