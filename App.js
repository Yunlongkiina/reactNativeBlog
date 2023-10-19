import { StyleSheet, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import IndexScreen from './src/screens/IndexScreen';
import {Provider} from './src/context/BlogContext';
import ShowScreen from './src/screens/ShowScreen';
import CreateScreen from './src/screens/CreateScreen';
import { AntDesign } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';


const Stack = createStackNavigator();
function MyStack() {
  // const navigation = useNavigation();
  // navigation.removeListener
  
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Index"
        component={IndexScreen}
        options={({ navigation }) => ({
          title: 'Blogs',
          headerRight: () => (           
            <TouchableOpacity onPress={()=> navigation.navigate('Create')}>
              <AntDesign name="plus" size={24} color="black" />
            </TouchableOpacity>
          ),
        })}
        />
      <Stack.Screen name="Show" component={ShowScreen} />
      <Stack.Screen name="Create" component={CreateScreen} />
    </Stack.Navigator>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function App() {
  return (
    <NavigationContainer>
      <Provider>
       <MyStack />
      </Provider>
    </NavigationContainer>
  );
}