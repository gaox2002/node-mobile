import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import axios from 'axios';
import { connect } from 'react-redux';
import { getPhotos } from '../actions';
import { PhotoSection } from './photo-section';

class PhotoFeed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [{status: 'loading'}]
    };
  }

  componentDidMount() {
    this.props.getPhotos();
    // axios.get("url")
    //   .then(res => {
    //     console.log(`axios response`);
    //   });
  }

  renderPhotos() {
    return this.props.photos.map( _photo => {
      return (
        <PhotoSection key={_photo.id} photo={_photo} />
      );
    })
  }

  render() {
    return (
      <ScrollView>
        <PhotoSection />
      </ScrollView>
    );
  }
}

function mapStateToProps(state) {
  return {
    photos: state.photos
  }
}

export default connect(mapStateToProps, {getPhotos})(PhotoFeed);
