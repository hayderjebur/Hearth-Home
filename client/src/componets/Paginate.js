import React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useHistory } from 'react-router-dom';

export default function Paginate({ pages }) {
  let history = useHistory();

  const onChangeHandler = (e, page) => {
    history.push(`/page/${page}`);
  };

  return (
    <Stack spacing={2}>
      <Pagination count={pages} color='primary' onChange={onChangeHandler} />
    </Stack>
  );
}
