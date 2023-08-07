import Home from './pages/Home/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Settings from './pages/Settings/Settings';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Perfil from './pages/Perfil/Perfil';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({size}) => (
          <MaterialCommunityIcons name="home" color={'#8c82fc'} size={size} />
        )
      }}/>
       <Tab.Screen name="Perfil" component={Perfil} options={{
        tabBarLabel: 'Perfil',
        tabBarIcon: ({size}) => (
          <MaterialCommunityIcons name="account" color={'#8c82fc'} size={size} />
        )
       }}/>
      <Tab.Screen name="Configurações" component={Settings} options={{
        tabBarLabel: 'Configurações',
        tabBarIcon: ({size}) => (
          <MaterialCommunityIcons name="cog" color={'#8c82fc'} size={size} />
        )
       }}/>
    </Tab.Navigator>
  );
}

export default function App() {
  return (
  <NavigationContainer>
    <MyTabs/>
  </NavigationContainer>
  )
}



