// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

// == Import
import './counter.scss';

const useStyles = makeStyles((theme) => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

// == Composant
const Counter = ({
  isOpenSelect,
  nbItemsPerPage,
  toggleSelect,
  setNbPerPage,
  deleteMovie,
}) => {
  const classes = useStyles();

  const handleChange = (e) => {
    setNbPerPage(e);
    deleteMovie();
  };

  return (
    <div className="counter-component">
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">
          Items per page
        </InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={isOpenSelect}
          onClose={toggleSelect}
          onOpen={toggleSelect}
          value={nbItemsPerPage}
          onChange={handleChange}
        >
          <MenuItem value={4}>
            <em>Items per page</em>
          </MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={8}>8</MenuItem>
          <MenuItem value={12}>12</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

Counter.propTypes = {
  isOpenSelect: PropTypes.bool.isRequired,
  toggleSelect: PropTypes.func.isRequired,
  deleteMovie: PropTypes.func.isRequired,
  setNbPerPage: PropTypes.func.isRequired,
  nbItemsPerPage: PropTypes.number.isRequired,
};

// == Export
export default Counter;
