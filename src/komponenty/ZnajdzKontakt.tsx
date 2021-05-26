import * as React from 'react';
import { TextField } from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import { ChangeEventHandler } from 'react';

const ZnajdzKontakt = ({ naZmiane }: { naZmiane: ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement> }) => {
  return (
    <TextField
      type="search"
      variant="outlined"
      fullWidth
      onChange={naZmiane}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        )
      }}
    />
  );
};

export default React.memo(ZnajdzKontakt);
