import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div className="jumbotron text-center">
                <h1 className="display-3">React-Redux</h1>
                <p className="lead">với cơ sở dữ liệu Firebase</p>
                <hr className="my-2" />
            </div>
        );
    }
}

export default Header;