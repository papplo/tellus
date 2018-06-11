import React from 'react';
import Button from "../components-styled/buttons/Button";



export default class Geolocation extends React.Component {
  constructor(props){
    super(props)
    this.output = document.getElementById('mapref');

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

      this.props.setState({
        position: true,
        latitude: latitude,
        longitude: longitude,
        latlong: latlong
      })
    }

    const error = (error) => {
      console.log('error');
      this.props.setState({
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
    console.log(this.state);
    return (
      <div>

        <div>
          <Button color='#8BB48F' size onClick={() => this.findGeoLocation()} >
            {this.props.value}
          </Button>

          <br /><span>{this.props.cta}</span>
        </div>

        <p id="mapref">
          {this.position? 1: 2}
        </p>
      </div>
    );
  }

}
