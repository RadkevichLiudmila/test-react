import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


// We can inject some CSS into the DOM.
const styles = {
  root: {
    background: 'linear-gradient(45deg, #0602a2 30%, #030156 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    margin: '10px',
    boxShadow: '0 3px 5px 2px rgba(65, 105, 225, .3)',
  },
};

function ClassNames(props) {
  const { value, classes, children, className, ...other } = props;
  return (
      <div>
        <Button className={classNames(classes.root, className)} {...other}>
            List
        </Button>
        <Button className={classNames(classes.root, className)} {...other}>
            Service
        </Button>
      </div>
      
    
  );
}
/*
ClassNames.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
};
*/
export default withStyles(styles)(ClassNames);