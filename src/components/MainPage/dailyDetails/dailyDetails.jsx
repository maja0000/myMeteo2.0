import React from 'react';
import styled from 'styled-components';
import './dailyDetails.css';
// icons
import rain from '../../../img/rain-icon.svg';

const DialyDetailsContainer = styled.div`
  //   background-color: green;
  height: 500px;
  margin-top: 200px;
  width: 100%;
  position: absolute;
  color: white;
  font-size: 23px;
  display: flex;
  padding: 20px;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;
export default function DailyDetails() {
  return (
    <div>
      <DialyDetailsContainer>
        <div className="short-desc">
          <span style={{ fontSize: '2em', margin: '30px 0 30px 30px' }}>
            Today
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
              <img src={rain} alt=" cloud"></img>
            </div>
          </div>
          <div className="slide">
            <span>Friday</span>
            <div>
              <span>21"C</span>
              <img src={rain} alt=" cloud"></img>
            </div>
          </div>
          <div className="slide">
            <span>Friday</span>
            <div>
              <span>21"C</span>
              <img src={rain} alt=" cloud"></img>
            </div>
          </div>
        </div>
      </DialyDetailsContainer>
    </div>
  );
}
