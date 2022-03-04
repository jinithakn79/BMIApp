import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { HomeScreen } from '../BMIApp/HomeScreen'
import { DetailsScreen } from '../BMIApp/DetailsScreen'
import { registerRootComponent } from 'expo';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen} initialParams={{bmi: String, bmiResult: String}}/>
        <Stack.Screen name="DetailsScreen" component={DetailsScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

registerRootComponent(App);