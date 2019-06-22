import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import LoginForm from './components/login-form';
import PhotoFeed from './components/photo-feed';

const AuthStack = createStackNavigator({
  Login: {
    screen: LoginForm,
    navigationOptions: {
      headerTitle: '登录'
    }
  }
})

const PhotoStack = createStackNavigator({
  Photos: {
    screen: PhotoFeed,
    navigationOptions: {
      headerTitle: '一步之遥'
    }
  }
})

export default PhotoNavigator = createAppContainer(
  {
    Auth: AuthStack,
    Photo: PhotoStack
  },
  {
    initialRouteName: 'Photo'
  }
);
