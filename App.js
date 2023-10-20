import { StyleSheet, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import IndexScreen from './src/screens/IndexScreen';
import {Provider} from './src/context/BlogContext';
import ShowScreen from './src/screens/ShowScreen';
import CreateScreen from './src/screens/CreateScreen';
import { AntDesign } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'; 
import EditScreen
 from './src/screens/EditScreen';
const Stack = createStackNavigator();
function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Index"
        component={IndexScreen}
        options={({ navigation }) => ({
          title: 'Blogs',
          headerRight: () => (           
            <TouchableOpacity onPress={()=> navigation.navigate('Create')}>
              <AntDesign name="plus" size={24} color="black" style={styles.addIconStyle}/>
            </TouchableOpacity>
          ),
        })}
        />
      <Stack.Screen
        name="Show"
        component={ShowScreen}
        options={({ navigation,route: { params } }) => ({
          title: 'Blog List',
          headerRight: () => (           
            <TouchableOpacity onPress={()=> navigation.navigate('Edit', {id: params.id})}>
              <Entypo
                name="edit"
                size={24}
                color="black"
                style={styles.editIconStyle}
                />
            </TouchableOpacity>
          ),
        })}

        />
      <Stack.Screen name="Create" component={CreateScreen} />
      <Stack.Screen name="Edit" component={EditScreen} />
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
  addIconStyle:{
    paddingRight:20
  },
  editIconStyle:{
    paddingRight:20
  }
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