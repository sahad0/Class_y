import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, CardStyleInterpolators } from '@react-navigation/native-stack';
import LandingPage from '../pages/LandingPage';
import SignUpGuide from '../pages/SignUpGuide';
import SignUpPage from '../pages/SignUpPage';


const Stack = createNativeStackNavigator(); 

export default function Router() {
  return (
    <NavigationContainer >
         <Stack.Navigator screenOptions={{headerShown:false,animation:'slide_from_right',animationDuration:1}} initialRouteName={'LandingPage'} >
          
          <Stack.Screen   name='LandingPage' component={LandingPage} />
          
          <Stack.Screen options={{animation:"fade_from_bottom"}} name='SignUpGuide' component={SignUpGuide} />

          <Stack.Screen  name='SignUp' component={SignUpPage} />


        </Stack.Navigator>
       
    </NavigationContainer>
  );
}