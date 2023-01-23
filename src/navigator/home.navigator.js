import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/main/home.screen';
import MoreHome from '../screens/main/more-home.screen';
import {ROUTES} from './../constants'


const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator
    screenOptions={{
        headerShown: false,
    }}
    >
      <Stack.Screen name={ROUTES.HOME} component={Home} />
      <Stack.Screen name={ROUTES.MORE_HOME} component={MoreHome} />
    </Stack.Navigator>
  );
}

export default HomeStack;