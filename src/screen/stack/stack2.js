import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

class Stack2 extends React.Component {
  constructor(props) {
    super(props);
  }
  _gotoTab1() {
    this.props.navigation.navigate('Tab1');
  }
  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text>Stack 2</Text>
        <TouchableOpacity onPress={this._gotoTab1.bind(this)}>
          <Text>Goto Tab 1</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Stack2;
