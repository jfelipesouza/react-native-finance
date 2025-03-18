import React, {useEffect, useState} from 'react';
import {ActivityIndicator, StatusBar, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import {EntryRouter} from './routers';

const MyApp: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [auth, setAuth] = useState<string | null>(null);

  const onInit = () => {
    setTimeout(() => {
      console.log('Verificou');
      setAuth(null);
    }, 1 * 1000);
  };

  useEffect(() => {
    onInit();
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <ActivityIndicator />
      </View>
    );
  }

  if (auth) {
    return <view />;
  }
  return (
    <NavigationContainer>
      <EntryRouter />
      <StatusBar
        backgroundColor={'transparent'}
        barStyle={'light-content'}
        translucent
      />
    </NavigationContainer>
  );
};

export {MyApp};
