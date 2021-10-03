import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';

export default function Loader() {
  return (
    <div style={{ textAlign: 'center', margin: '3rem' }}>
      <CircularProgress disableShrink />
    </div>
  );
}
