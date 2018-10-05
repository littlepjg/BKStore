import React, { Component } from 'react';
import Header from '../components/guest/Header';
import Footer from '../components/guest/Footer';

class GuestLayout extends Component {
    render() {
        return (
            <div>
                <section>
                    <Header />
                    {this.props.children}
                    <Footer />
                </section>
            </div>
        );
    }
}

export default GuestLayout;