import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const styles = {
    cart: {
        fontSize: 32,
        color: "#ffffff"
    },
    badge: {
        top: -15,
        right: -15,
        background: "#f36e36",
        color: "#ffffff",
        fontSize: 13,
    },
    displayNone: {
        display: "none"
    }
};

function CustomizedBadge(props) {
    const { classes } = props;
    const visible = false;
    return (
        <NavLink to="/user/cart" style={{ marginLeft: 18 }}>
            <Badge badgeContent={4} classes={{ badge: visible ? classes.badge : classes.displayNone }}>
                <ShoppingCartIcon className={classes.cart} />
            </Badge>
        </NavLink>
    );
}

CustomizedBadge.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomizedBadge);