//contoh navigasi
import React from 'react';
import { Text, View } from 'react-native';
import { TabNavigator } from 'react-navigation';
// You can import from local files
import AssetExample from './components/AssetExample';
// or any pure javascript modules available in npm
import { Card } from 'react-native-elements';

import "@expo/vector-icons";

const MakananScreen = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
     <Text> Masukan  Menu Makanan Yang Anda Pesan </Text>
       <Card title="Makanan">
          <AssetExample />
        </Card>
  </View>
);

const MinumanScreen = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Masukan Minuman Yang Anda Pesan</Text>
    <Card title="Minuman">
          <AssetExample />
        </Card>
  </View>
);

const RootTabs = TabNavigator({
  Makanan: {
    screen: MakananScreen,
    backgroundColor: '#99ffff',
  },
  Minuman: {
    screen: MinumanScreen,
    backgroundColor: '#99ffff',
  },
});

export default RootTabs;