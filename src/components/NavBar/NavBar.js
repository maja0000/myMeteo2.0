import React from 'react';
import styled from 'styled-components';

// menu icons
import home from '../../img/home.svg';
import legal from '../../img/legal.svg';
import animation from '../../img/eye.svg';
import stats from '../../img/stats.svg';

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: black;
  opacity: 0.7;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
  height: 96%;
  z-index: 2;
  text-align: left;
  padding: 2rem;
  border-radius: 0 20px 20px 0;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;

  @media (max-width: 576px) {
    width: 70%;
  }

  a {
    font-size: 2rem;
    padding: 2rem 0;
    font-weight: 700;
    letter-spacing: 0.3rem;
    color: white;
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: 576px) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: #f6ae9f;
    }
  }
`;
const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <a href="/">
        <img src={home} alt="home" /> home
      </a>
      <a href="/">
        <img src={legal} alt="statistics" /> statistics
      </a>
      <a href="/">
        <img src={stats} alt="legal" /> legal
      </a>

      <a href="/">
        <img src={animation} alt="animation" /> animation
      </a>
    </StyledMenu>
  );
};

const StyledBurger = styled.button`
  position: absolute;
  top: 5%;
  left: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ open }) => (open ? '#f6ae9f' : 'white')};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? '0' : '1')};
      transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;

const Burger = ({ open, setOpen }) => {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};

export default function NavBar() {
  const [open, setOpen] = React.useState(false);
  const node = React.useRef();
  return (
    <>
      <div ref={node}>
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen} />
      </div>
    </>
  );
}
