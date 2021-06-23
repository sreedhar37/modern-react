import React from 'react';
import {connect} from "react-redux";
import {singIn, signOut} from "../actions";

class GoogleAuth extends React.Component {

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '761020468199-s40vp1sa8bepafg4tm4e2p0niocoed2a.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    }

    onAuthChange = (isSignedIn) => {

        if (isSignedIn) {
            this.props.singIn(this.auth.currentUser.get().getId());
        } else {
            this.props.signOut();
        }

    }

    onSignInClick = () => {
        this.auth.signIn();
    }

    onSignOutClick = () => {
        this.auth.signOut();
    }


    renderAuthButton() {
        if (this.props.isSignedIn === null) {
            return null;

        } else if (this.props.isSignedIn) {
            return (
                <button onClick={this.onSignOutClick} className="ui red google button">
                    <i className="google icon"/>
                    Sign Out
                </button>
            )
        } else {
            return (
                <button onClick={this.onSignInClick} className="ui green google button">
                    <i className="google icon"/>
                    Sign In With Google
                </button>
            );
        }
    }

    render() {
        return <div>{this.renderAuthButton()}</div>;
    }
}

const mapStateToProps = (state) => {
    return {isSignedIn: state.auth.isSignedIn};
}
export default connect(mapStateToProps, {singIn, signOut} )(GoogleAuth);