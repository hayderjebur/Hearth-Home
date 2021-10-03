import React from 'react';
import { styled } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import IconButton from '@mui/material/IconButton';

export const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export const useStyles = makeStyles({
  root: {
    margin: '2rem',
    cursor: 'pointer',
  },
  m1: {
    margin: '1rem 0 ',
  },
});
