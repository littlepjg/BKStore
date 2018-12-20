import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import * as actions from '../../actions/user_cart_actions';

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

class CustomizedBadge extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log('userid:', this.props.user_id);
        console.log('cartsddd: ', this.props.cart);
        if (this.props.user_id) {
            this.props.getUserCart(this.props.user_id);
        }
    }

    render() {
        const { classes } = this.props;
        const count = this.props.cart.products.reduce((s, p) => s + p.amount, 0);
        return (
            <NavLink to="/user/cart" style={{ marginLeft: 18 }}>
                <Badge badgeContent={count} classes={{ badge: count ? classes.badge : classes.displayNone }}>
                    <ShoppingCartIcon className={classes.cart} />
                </Badge>
            </NavLink>
        );
    }
}

CustomizedBadge.propTypes = {
    classes: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
    return {
        cart: state.user.cart,
        user_id: state.auth.user.id
    }
}

export default connect(mapStateToProps, actions)(withStyles(styles)(CustomizedBadge));