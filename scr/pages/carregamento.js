import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import logo from '/assets/logo.png';  

const App = () => {
  return (
    <View style={styles.container}>
      <Image
        source={logo}  
        style={styles.logo}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4CA33',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 400,
    height: 100,
    marginRight:15,
  },
});

export default App;
