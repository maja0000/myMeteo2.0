import React from 'react';
import styled from 'styled-components';
import '../MainPage/mainPage.css';
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from 'recharts';
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
const StatsWrapper = styled.div`
  margin: 0 auto;
  margin-top: 45px;
  width: 90%;
  height: 80%;
  border-radius: 20px;
  // background-color: red;
  border: 1px solid grey;
  display: flex;
  flex-direction: column;
  text-align: center;
  color: white;
  @media (max-width: 578px) {
    margin-top: 55px;
  }
`;
export default function Statistics({
  handleKeyPress,
  weatherData,
  city,
  searchCity,
}) {
  const colors = ['salmon', 'rgba(245, 145, 29, 0.9)', '#BCDE5A'];

  return (
    <div>
      <PictureBackground>
        <BlurredBackground>
          <StatsWrapper>
            <div className="header">
              <h3>Average weather in 2019</h3>

              <div>
                <h4 style={{ marginTop: '0' }}>__berlin____</h4>
                <div className="container">
                  <input
                    type="text"
                    placeholder="Search..."
                    onKeyPress={(event) => handleKeyPress(event)}
                  />
                  <div className="search"></div>
                </div>
              </div>
            </div>
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                margin: '50px 20px 0 20px',
                justifyContent: 'center',
                overflowY: 'scroll',
              }}
            >
              {Object.keys(weatherData).map((category, index) => (
                <div className="charts" key={index}>
                  <LineChart
                    className="linechart"
                    width={250}
                    height={160}
                    data={weatherData[category].yearData}
                  >
                    <CartesianGrid stroke="#ccc" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip />
                    <Legend />
                    <Line
                      name={category}
                      type="monotone"
                      dataKey="value"
                      stroke={colors[index]}
                      strokeWidth="3"
                      activeDot={{ r: 8 }}
                    />
                  </LineChart>
                </div>
              ))}
            </div>
          </StatsWrapper>
        </BlurredBackground>
      </PictureBackground>
    </div>
  );
}
