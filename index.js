/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import adm_home from './adm_home';
import navigation from './navigation';
import fb from './fb';

AppRegistry.registerComponent(appName, () => navigation);
