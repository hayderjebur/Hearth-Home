import { Grid } from '@mui/material';
import React, { useContext, useEffect } from 'react';
import HomeItem from '../homeItem/HomeItem';
import HomeContext from '../../context/home/homeContext';
import Loader from '../Loader';
import Paginate from '../Paginate';

const HomeList = ({ match }) => {
  const pageNumber = match.params.pageNumber || 1;
  const homeContext = useContext(HomeContext);
  const { getHomes, homes, filtered, pages, homeAddress, error } = homeContext;

  useEffect(() => {
    getHomes(homeAddress, pageNumber);
  }, [pageNumber]);

  return (
    <div>
      {homes.length !== 0 ? (
        <div>
          {filtered !== null ? (
            <Grid container spacing={1}>
              {filtered.map((home) => (
                <Grid item lg={4} md={6} sm={6} key={home._id}>
                  <HomeItem home={home} />
                </Grid>
              ))}
            </Grid>
          ) : (
            <Grid container spacing={1}>
              {homes &&
                homes.map((home) => (
                  <Grid item lg={4} md={6} sm={6} key={home._id}>
                    <HomeItem home={home} />
                  </Grid>
                ))}
            </Grid>
          )}

          <Paginate pages={pages} />
        </div>
      ) : (
        <div style={{ textAlign: 'center' }}>
          {error ? <h3>{error}</h3> : <Loader />}
        </div>
      )}
    </div>
  );
};

export default HomeList;
