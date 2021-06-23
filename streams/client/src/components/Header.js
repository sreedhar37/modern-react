import React from "react";
import {Link} from "react-router-dom";
import GoogleAuth from "./GoogleAuth";

const Header = () => {
    return (
      <div className="ui secondary pointing menu">
          <Link to="/" className="item">Streamy</Link>
          <div className="right menu">
              <Link to="/" className ="item">All Streams</Link>
              <GoogleAuth/>
          </div>
      </div>
    );
}
//761020468199-s40vp1sa8bepafg4tm4e2p0niocoed2a.apps.googleusercontent.com
export default Header;