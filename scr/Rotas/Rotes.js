import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Carregamento from '../pages/carregamento';
import Cnh from '../pages/cnh';
import Criarcontamoto1 from '../pages/criarcontamoto1';
import Criarcontamoto2 from '../pages/criarcontamoto2';
import Criarcontamoto3 from '../pages/criarcontamoto3';
import Criarcontamoto4 from '../pages/criarcontamoto4';
import Criarcontapais1 from '../pages/criarcontapais1';
import Criarcontapais2 from '../pages/criarcontapais2';
import Criarcontapais3 from '../pages/criarcontamoto3';
import Criarcontapais3 from '../pages/dados';

const Stack = createNativeStackNavigator();
 
const AppNavigator = () => {

  return (
<NavigationContainer>
<Stack.Navigator initialRouteName="Carregamento">
<Stack.Screen name="Carregamento" component={Carregamento} />
<Stack.Screen name="Cnh" component={Cnh} />
<Stack.Screen name="Criarcontamoto1" component={Criarcontamoto1} />
<Stack.Screen name="Criarcontamoto2" component={Criarcontamoto2} />
<Stack.Screen name="Criarcontamoto3" component={Criarcontamoto3} />
<Stack.Screen name="Criarcontamoto4" component={Criarcontamoto4} />
<Stack.Screen name="Criarcontapais1" component={Criarcontapais1} />
<Stack.Screen name="Criarcontapais2" component={Criarcontapais2} />
<Stack.Screen name="Criarcontapais3" component={Criarcontapais3} />


</Stack.Navigator>
</NavigationContainer>

  );

};
 
export default AppNavigator;

 