import { useState } from 'react';

import { useDispatch } from 'react-redux';
import { fetchSearch } from '../redux/actions';

import styled from 'styled-components';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils';

import { logo } from '../images';

const Nav = () => {
  const dispatch = useDispatch();
  const [textInput, setTextInput] = useState('');

  const inputHandler = (e) => {
    setTextInput(e.target.value);
  };

  const submitSearch = (e) => {
    e.preventDefault();
    dispatch(fetchSearch(textInput));
    setTextInput('');
  };

  const clearSearched = () => {
    dispatch({ type: 'CLEAR_SEARCHED' });
  };

  return (
    <StyledNav variants={fadeIn} initial='hidden' animate='show'>
      <Logo onClick={clearSearched}>
        <img src={logo} alt='logo' />
        <h1>GameNews</h1>
      </Logo>
      <form className='search'>
        <input value={textInput} onChange={inputHandler} type='text' />
        <button onClick={submitSearch} type='submit'>
          Search
        </button>
      </form>
    </StyledNav>
  );
};

const StyledNav = styled(motion.nav)`
  padding: 0rem 0rem;
  text-align: center;

  /* nav::active, */
  /* button::active { */
  /* } */
  input {
    outline: none;
    width: 30%;
    font-size: 1.3rem;
    padding: 0.7rem;
    border: none;
    margin-top: 1rem;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  }
  button {
    outline: none;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    font-size: 1.3rem;
    border: none;
    padding: 0.7rem 1.2rem;
    cursor: pointer;
    background: #ff7676;
    color: white;
  }
`;

const Logo = styled(motion.div)`
  display: flex;
  justify-content: center;
  padding: 1rem;
  cursor: pointer;
  img {
    height: 2rem;
    width: 2rem;
    margin-right: 0.3rem;
  }
`;

export default Nav;
