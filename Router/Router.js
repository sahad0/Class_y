import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, CardStyleInterpolators } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';
import LandingPage from '../pages/LandingPage';
import SignUpGuide from '../pages/SignUpGuide';
import SignUpPage from '../pages/SignUpPage';
import DashboardT from '../pages/DashboardT';
import DashboardS from '../pages/DashboardS';

const Stack = createNativeStackNavigator(); 

export default function Router() {

    const {token} = useSelector((state)=>state.cart.value);
    const {user_type} = useSelector((state)=>state.cart.value.user);

    const authKey = token;
    const type = user_type;



  return (
    
    <NavigationContainer >
         <Stack.Navigator  screenOptions={{headerShown:false,animation:'slide_from_right',animationDuration:"100"}} initialRouteName={'LandingPage'} >
         
          {authKey===""&&(
             <>
             <Stack.Screen   name='LandingPage' component={LandingPage} />
             <Stack.Screen options={{animation:"fade_from_bottom",}} name='SignUpGuide' component={SignUpGuide} />
             <Stack.Screen  name='SignUp' component={SignUpPage} />
           </>
          )}

          {authKey!==""&& type==='S'&&
          (<>
            <Stack.Screen options={{animation:"fade_from_bottom",}}  name='DashboardS' component={DashboardS} />
          </>)} 


          {authKey!==""&& type==='T'&&
          (<>
            <Stack.Screen options={{animation:"fade_from_bottom",}}  name='DashboardS' component={DashboardT} />
          </>)} 


          





        </Stack.Navigator>
       
    </NavigationContainer>
  );
}