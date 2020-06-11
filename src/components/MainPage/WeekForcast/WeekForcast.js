import React from 'react';
import styled from 'styled-components';

const WeeklyWeatherContainer = styled.div`
  background-color: red;
  height: 100px;
  margin-top: 450px;
  width: 100%;
  position: absolute;
  left: 0;
  color: white;
  z-index: 10;
  font-size: 23px;
`;

export default function WorkForcast() {
  return (
    <div>
      <WeeklyWeatherContainer>hello</WeeklyWeatherContainer>
    </div>
  );
}
