import React from 'react';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';

const GooglePlacesInput = () => {
  return (
    <GooglePlacesAutocomplete
      placeholder='Search'
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        console.log('hallow');
        console.log(data, details);
      }}
      query={{
        key: 'AIzaSyApdwkfzldAcpg-DoSzLlKuFdpVDP_vNaU',
        language: 'en',
      }}
    />
  );
};

export default GooglePlacesInput;