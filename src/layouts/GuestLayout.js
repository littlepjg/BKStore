import React, { Component } from 'react';
import SideBar from '../components/SideBar';
import Header from '../components/Header';
import Footer from '../components/Footer';

class GuestLayout extends Component {
    render() {
        return (
            <div>
                <aside className="sideBar">
                    <SideBar />
                </aside>
                <section className="main">
                    <Header />
                    <div className="grid">
                        {this.props.children}
                    </div>
                    <Footer />
                </section>
            </div>
        );
    }
}

export default GuestLayout;