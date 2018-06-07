import React from 'react';

export default class Geolocation extends React.Component {

  constructor(props){
    super(props)
    this.output = document.getElementById('mapref');
    this.state = {
      position: null,
      latitude: '',
      longitude: '',
      latlong: ''
    }
  }

  findGeoLocation = () => {
    console.log('Looking for your location...');

    if (!navigator.geolocation) {
      this.output.innerHTML = "<p>Geolocation is not supported by your browser</p>";
      return;
    }
    const success = (position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      const latlong = `${latitude} : ${longitude}`
      console.log(`You are at: ${latitude}, ${longitude}`);

      this.setState({
        position: true,
        latitude: latitude,
        longitude: longitude,
        latlong: latlong
      })
    }

    const error = (error) => {
      console.log('error');
      this.setState({
        position: true,
        latitude: 'unknown',
        longitude: 'unknown',
        latlong: `We were unable to retrieve your location: Type in a place you want to discover`
      })
    }

    /* promises ahead, beware! :) */
    navigator.geolocation.getCurrentPosition(success, error);

  }


  render() {
    return (
      <div>
        <a href="#" onClick={() => this.findGeoLocation()}>Show my Location</a>

        <p id="mapref">
          {this.state.position ? this.state.latlong : 'Searching...'}
        </p>
      </div>
    );
  }

}