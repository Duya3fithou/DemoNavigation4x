import React from 'react';
import {View, Text} from 'react-native';

class Tab1 extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text>Tab 1</Text>
      </View>
    );
  }
}

export default Tab1;
