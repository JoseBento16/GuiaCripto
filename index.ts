import { registerRootComponent } from 'expo';

// Import the platform-specific entry. Do not include the file extension here
// so the bundler can resolve the platform-specific file automatically.
import App from './src/App';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
