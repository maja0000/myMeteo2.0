import React from 'react';
import compas from '../../img/compas.svg';
export default function NotFound() {
  return (
    <>
      <div
        style={{
          backgroundColor: 'black',
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <img src={compas} height="20px" width="20px" alt="compass" />
        <div style={{ color: 'white' }}>
          you got lost, go back to home page{' '}
        </div>
      </div>
    </>
  );
}
