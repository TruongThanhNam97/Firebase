import React, { Component } from 'react';
import { connect } from 'react-redux';

class Search extends Component {
    isChange=(event)=>{
        if (event.target.value!=="")
        {
            this.props.search(event.target.value);
        }
        else
        {
            this.props.search(null);
        }
    } 
    render() {
        return (
            <div className="col-12">
                <div className="form-group">
                    <div className="btn-group search">
                        <input onChange={(event)=>this.isChange(event)} type="text" className="form-control" name="search" aria-describedby="helpId" placeholder="Nhập tên cần tìm" />
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => ({
    
})
const mapDispatchToProps = dispatch => {
    return {
        search : (search) => {
            dispatch({
                type : "search",search
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)