import React, { Component } from 'react';
import { Alert, AlertContainer } from "react-bs-notifier";
import { connect } from 'react-redux';



class Noti extends Component {
    display=()=>{
        if (this.props.statusAlert)
        {
            return <Alert type={this.props.typeAlert} onDismiss={()=>this.props.alertOff()} timeout={1000}>{this.props.contentAlert}</Alert>;
        }
    } 
    render() {
        return (
            <AlertContainer>
                {this.display()}
            </AlertContainer>
        );
    }
}
const mapStateToProps = (state, ownProps) => ({
    statusAlert : state.statusAlert,
    typeAlert : state.typeAlert,
    contentAlert : state.contentAlert
})
const mapDispatchToProps = dispatch => {
    return {
        alertOff : () => {
            dispatch({
                type : "alertOff"
            })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Noti)