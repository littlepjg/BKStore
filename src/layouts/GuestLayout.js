import React, { Component } from 'react';
import Header from '../components/guest/Header';
import Footer from '../components/guest/Footer';

class GuestLayout extends Component {
    render() {
        return (
            <div style={{backgroundColor: "#f4f4f4"}}>
                <Header />
                {this.props.children}
                <Footer />
            </div>
        );
    }
}

export default GuestLayout;