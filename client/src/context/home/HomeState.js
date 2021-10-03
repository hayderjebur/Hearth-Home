import React, { useReducer } from 'react';
import axios from 'axios';
import HomeContext from './homeContext';
import homeReducer from './homeReducer';
import { GET_HOMES, FILTER_HOMES, CLEAR_FILTER, HOME_ERROR } from './types';

const HomeState = (props) => {
  const initialState = {
    homes: [],
    pages: 0,
    current: null,
    filtered: null,
    error: null,
  };

  const [state, dispatch] = useReducer(homeReducer, initialState);

  // Get Homes
  const getHomes = async (homeAddress = '', pageNumber = 1) => {
    try {
      const res = await axios.get(
        `/api/Homes?homeAddress=${homeAddress}&pageNumber=${pageNumber}`
      );

      dispatch({
        type: GET_HOMES,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: HOME_ERROR,
        payload: err.response.msg,
      });
    }
  };

  const filterHomes = (homeAddress) => {
    dispatch({ type: FILTER_HOMES, payload: homeAddress });
  };

  //Clear Filter
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };

  return (
    <HomeContext.Provider
      value={{
        homes: state.homes,
        pages: state.pages,
        filtered: state.filtered,

        filterHomes,
        getHomes,
        clearFilter,
      }}
    >
      {props.children}
    </HomeContext.Provider>
  );
};

export default HomeState;
