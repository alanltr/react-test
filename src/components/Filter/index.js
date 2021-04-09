// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import SortIcon from '@material-ui/icons/Sort';

// == Import
import './filter.scss';

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
const Filter = ({
  categories,
  isOpenSelect,
  selectedCategory,
  toggleSelect,
  setSelectedCategory,
}) => {
  const classes = useStyles();

  return (
    <div className="filter-component">
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label" />
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={isOpenSelect}
          onClose={toggleSelect}
          onOpen={toggleSelect}
          value={selectedCategory}
          onChange={setSelectedCategory}
        >
          <MenuItem value=" ">
            <em>All categories</em>
          </MenuItem>
          {categories.map((category) => (
            <MenuItem key={category} value={category}>{category}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <Button className={classes.button} onClick={toggleSelect}>
        <SortIcon />
      </Button>
    </div>
  );
};

Filter.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.string.isRequired,
  ).isRequired,
  isOpenSelect: PropTypes.bool.isRequired,
  selectedCategory: PropTypes.string.isRequired,
  toggleSelect: PropTypes.func.isRequired,
  setSelectedCategory: PropTypes.func.isRequired,
};

// == Export
export default Filter;
