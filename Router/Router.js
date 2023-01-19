import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, CardStyleInterpolators } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator(); 

export default function Router() {
  return (
    <NavigationContainer >
         <Stack.Navigator screenOptions={{headerShown:false,animation:'slide_from_right',animationDuration:1}} initialRouteName={'Home'} >
          






        </Stack.Navigator>
    </NavigationContainer>
  );
}