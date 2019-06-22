import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button, Input } from 'react-native-elements';
import InnerSection from './inner-section';

export default class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <InnerSection>
          <Input placeholder="username" />
        </InnerSection>
        <InnerSection>
          <Input placeholder="password" secureTextEntry={true} />
        </InnerSection>
        <InnerSection>
          <Button title="Login" />
        </InnerSection>
      </View>
    );
  }
}
