import React, { useContext } from 'react';
import styled from 'styled-components';
import './dailyDetails.css';
// icons
import rain from '../../../img/white-cloud.svg';
//componnets
import { WeatherContext } from '../../WeatherContext/WeatherContext';

const DialyDetailsContainer = styled.div`
  //   background-color: green;
  // height: 500px;
  margin-top: 200px;
  width: 100%;
  position: absolute;
  color: white;
  font-size: 23px;
  display: flex;
  padding: 20px;
  //
  height: 60%;
  justify-content: space-around;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;
export default function DailyDetails() {
  const [weatherDisplay, setWeatherDisplay] = useContext(WeatherContext);

  return (
    <div>
      <DialyDetailsContainer>
        <div className="short-desc">
          <span style={{ fontSize: '1.5em', margin: '0 0 30px 30px' }}>
            Today,{' '}
            <span style={{ fontSize: '20px' }}>{weatherDisplay.city.name}</span>
          </span>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-around',
            }}
          >
            <img src={rain} alt="rainy cloud"></img>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span>feels like </span>
              <span>wind</span>
              <span>humidity</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span>20°C</span>
              <span>2,5 km/h</span>
              <span>89%</span>
            </div>
          </div>
        </div>
        <div className="slide-forcast">
          <div className="slide">
            <span>Friday</span>
            <div>
              <span>21"C</span>
              <img src={rain} alt=" cloud" className="cloud-icon"></img>
            </div>
          </div>
          <div className="slide">
            <span>Saturday</span>
            <div>
              <span>18"C</span>
              <img src={rain} alt=" cloud" className="cloud-icon"></img>
            </div>
          </div>
          <div className="slide">
            <span>Sunday</span>
            <div>
              <span>20"C</span>
              <img src={rain} alt=" cloud" className="cloud-icon"></img>
            </div>
          </div>
        </div>
      </DialyDetailsContainer>
    </div>
  );
}
