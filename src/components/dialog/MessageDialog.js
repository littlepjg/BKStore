import React, { Component } from 'react';
import './dialog.css';

class MessageDialog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            display: this.props.error
        }
        this.toggleContainer = React.createRef();
        this.hideMessageDialog = this.hideMessageDialog.bind(this);
        this.onClickOutsideHandler = this.onClickOutsideHandler.bind(this);
    }

    componentDidMount() {
        window.addEventListener('click', this.onClickOutsideHandler);
    }

    componentWillUnmount() {
        window.removeEventListener('click', this.onClickOutsideHandler);
    }

    hideMessageDialog() {
        // this.setState({ display: false });
        this.props.resetError();
    }

    onClickOutsideHandler(event) {
        if (!this.toggleContainer.current.contains(event.target)) {
            // this.setState({ display: false });
            this.hideMessageDialog();
        }
    }

    render() {
        const { title, error } = this.props;
        const styles = {
            hide: {
                display: "none"
            }
        }
        return (
            <div className="dialog" style={error ? {} : styles.hide}>
                <div className="modal-dialog" ref={this.toggleContainer}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">{title}</h4>
                        </div>
                        <div className="modal-body">
                            <p>{error}</p>
                        </div>
                        <div className="modal-footer">
                            <button className="btn btn-default" onClick={() => this.hideMessageDialog()}>Close</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MessageDialog;