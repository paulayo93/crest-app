import { createStackNavigator } from '@react-navigation/stack';

import SaveUp from '../screens/main/save-up.screen';
import SaveUpDetail from '../screens/main/save-up-detail.component';
import {ROUTES} from './../constants'


const Stack = createStackNavigator();

function SaveUpStack() {
  return (
    <Stack.Navigator
    screenOptions={{

        headerShown: false,
    }}
    initialRouteName={ROUTES.SAVEUP}

    >
      <Stack.Screen name={ROUTES.SAVEUP} component={SaveUp} />
      <Stack.Screen name={ROUTES.SAVEUP_DETAIL} component={SaveUpDetail} />
    </Stack.Navigator>
  );
}

export default SaveUpStack;