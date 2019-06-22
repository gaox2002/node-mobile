import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

class PhotoSection extends Component {
  constructor(prps) {
    super();

    this.state = {
      like: false,
      likeColor: 'black',
      heartIcon: 'ios-heart-empty'
    };
  }
  
  toggleLike = () => {
    this.setState({like: !this.state.like});

    if (this.state.like) {
      this.setState({likeColor: 'red'});
      this.setState({heartIcon: 'ios-heart'});
    } else {
      this.setState({likeColor: 'black'});
      this.setState({heartIcon: 'ios-heart-empty'});
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.thumbnailSection}>
          <Image style={styles.thumbnail}
            source={{uri: 'http://p2.ycw.com/201702/17/99086346f8a0066621e50a63f82caec2'}}/>
          <View style={styles.authContainer}>
            <Text style={styles.username}>username</Text>
          </View>
        </View>
        <View>
          <Image style={{width: null, height: 400}}
            source={{uri: 'http://p1.pstatp.com/large/66c20001c04d7b004f08'}}/>
        </View>
        <View style={styles.heart}>
          <Ionicons 
            onPress={this.toggleLike} 
            name={this.state.heartIcon} 
            size={30} style={{color: this.state.likeColor}}/>
        </View>
        <View style={styles.imageMeta}>
          <Text style={styles.username}>username2</Text>
          <Text>Caption</Text>
        </View>
      </View>
    );
  }
}

const styles = {
  container: {
    margin: 10
  },
  thumbnailSection: {
    flexDirection: 'row',
    padding: 5,
    borderBottomColor: '#DDD',
    borderBottomWidth: 1,
  },
  thumbnail: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  authContainer: {
    justifyContent: 'center',
    padding: 5
  },
  heart: {
    paddingTop: 10,
    paddingBottom: 10,
  },
  imageMeta: {
    flexDirection: 'row',
  },
  username: {
    fontWeight: 'bold',
    paddingRight: 5,
  }
};
export default PhotoSection;
