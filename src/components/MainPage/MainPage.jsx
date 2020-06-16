import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import './mainPage.css';
import moment from 'moment';
// components
import DailyDetails from './dailyDetails/dailyDetails';
import WeekForcast from './WeekForcast/WeekForcast';
import { WeatherContext } from '../WeatherContext/WeatherContext';

const PictureBackground = styled.div`
  background-image: url('https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=802&q=80');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 100vh;
  padding: 20px;
`;
const BlurredBackground = styled.div`
  margin: 0 auto;
  height: 100%;
  border-radius: 20px;
  background: rgba(255, 253, 253, 0.22);
  backdrop-filter: blur(3px);
  display: flex;
`;
const WaveBottom = styled.div`
backgroundColor: 'white',
height: '200px',
width: '100%',
`;
const DailyMainInfo = styled.div`
  height: 10%;
  width: 50%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  text-align: center;
`;
const ButtonFC = styled.button`
  border-radius: 50%;
  border: none;
  color: black;
  :focus {
    outline: none;
  }
`;

function MainPage() {
  const [weatherDisplay, setWeatherDisplay] = useContext(WeatherContext);
  // const handleChange = useContext(WeatherContext);
  console.log('!', weatherDisplay);
  const [temp, setTemp] = useState(weatherDisplay.list[0].main.temp.toFixed());
  const [celcius, setCelcius] = useState(true);
  // const handleKeyPress = (event) => {
  //   if (event.key === 'Enter') {
  //     handleChange();
  //   }
  // };
  const toFahrenheit = () => {
    if (!celcius) {
      setTemp(weatherDisplay.list[0].main.temp.toFixed());
      setCelcius(true);
    } else {
      setCelcius(false);
      setTemp(((temp * 9) / 5 + 32).toFixed());
    }
  };
  return (
    <div>
      <PictureBackground>
        <BlurredBackground>
          <DailyDetails />

          <DailyMainInfo>
            <div>
              <div>
                <span style={{ color: 'white', fontSize: '4.5em' }}>
                  {temp}
                </span>
                {celcius ? (
                  <span style={{ color: 'white', fontSize: '50px' }}>°C</span>
                ) : (
                  <span style={{ color: 'white', fontSize: '50px' }}>°F</span>
                )}
                <ButtonFC onClick={toFahrenheit}>
                  {!celcius ? 'C' : 'F'}
                </ButtonFC>
              </div>
              <span style={{ color: 'white' }}>
                {moment().format(' h:mm a')}
              </span>
              <br />
              <span style={{ color: 'white' }}>
                {moment().format('dddd')}, {moment().format('MMM Do')}{' '}
              </span>
              <div className="container">
                <input
                  type="text"
                  placeholder="Search..."
                  // onKeyPress={handleKeyPress}
                />
                <div className="search"></div>
              </div>
            </div>
          </DailyMainInfo>
          {/* <WeekForcast /> */}
          <div
            style={{
              alignSelf: 'flex-end',
              width: '100%',
              position: 'absolute',
            }}
          >
            <div>
              <svg
                class="waves"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 24 150 28"
                preserveAspectRatio="none"
                shape-rendering="auto"
              >
                <defs>
                  <path
                    id="gentle-wave"
                    d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
                  />
                </defs>
                <g class="parallax">
                  <use
                    xlinkref="#gentle-wave"
                    x="48"
                    y="0"
                    fill="rgba(255,255,255,0.7"
                  />
                  <use
                    xlinkHref="#gentle-wave"
                    x="48"
                    y="3"
                    fill="rgba(255,255,255,0.5)"
                  />
                  <use
                    xlinkHref="#gentle-wave"
                    x="48"
                    y="5"
                    fill="rgba(255,255,255,0.3)"
                  />
                  <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
                </g>
              </svg>
            </div>

            <div className="wave-bottom"></div>
          </div>
        </BlurredBackground>
      </PictureBackground>
    </div>
  );
}

export default MainPage;
