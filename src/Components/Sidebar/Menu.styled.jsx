import styled from "styled-components";

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: calc(100vw - 64px);
  background: linear-gradient(90.76deg, #FFCD76 0.72%, #CF942E 56.46%, #FFCD76 105.03%);
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  @media (min-width: 576px) {
    display: none;
  }
  a {
    font-size: 1rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    cursor: pointer;
    letter-spacing: 0.5rem;
    color: #fff;
    text-decoration: none;
    transition: color 0.3s linear;
  }
`;
