import { AppRegistry } from 'react-native';
import { YellowBox } from 'react-native';

// ignoring the isMounted deprecationwarning
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

import App from './src/App';

AppRegistry.registerComponent('SkateMapv2', () => App);
