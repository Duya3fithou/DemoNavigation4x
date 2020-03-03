import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

class Stack1 extends React.Component {
  constructor(props) {
    super(props);
  }
  _gotoStack2() {
    this.props.navigation.navigate('Stack2');
  }
  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text>Stack 1</Text>
        <TouchableOpacity onPress={this._gotoStack2.bind(this)}>
          <Text>Go to Stack 2</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Stack1;
