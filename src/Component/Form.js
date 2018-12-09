import React, { Component } from 'react';
import { connect } from 'react-redux';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id : null,
      name : null,
      tel : null
    }
  }
  isChange=(event)=>{
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name] : value
    })   
  }
  eventAdd=()=>{
    if (this.state.name && this.state.tel)
    {
      var item = {};
      item.name = this.state.name;
      item.tel = this.state.tel;
      this.props.addData(item);
      this.props.alertOn("success","Thêm "+item.name+" thành công");
    }
    this.setState({
      id : null,
      name : null,
      tel : null
    })   
  }
  eventEdit=()=>{
    if (this.props.selected)
    {
      var item = {};
      if (this.state.name ===null && this.state.tel===null)
      {
        item.id = this.props.selected.id;
        item.name = this.props.selected.name;
        item.tel = this.props.selected.tel;
      }
      else if (this.state.name!==null && this.state.tel===null)
      {
        item.id = this.props.selected.id;
        item.name = this.state.name;
        item.tel = this.props.selected.tel;
      }
      else if (this.state.name===null && this.state.tel!==null)
      {
        item.id = this.props.selected.id;
        item.name = this.props.selected.name;
        item.tel = this.state.tel;
      }
      else
      {
        item.id = this.props.selected.id;
        item.name = this.state.name;
        item.tel = this.state.tel;
      }
      this.props.editData(item);
      this.props.alertOn("warning","Sửa phần tử thành công");
    }
    this.setState({
      id : null,
      name : null,
      tel : null
    }) 
  } 
  displayForm=()=>{
    if (this.props.selected)
    {
        return (
 
          <form>
          <div className="form-group">
            <input defaultValue={this.props.selected.name} onChange={(event)=>this.isChange(event)} type="text" className="form-control" name="name"  aria-describedby="helpId" placeholder="Nhập tên" />
          </div>
          <div className="form-group">
            <input defaultValue={this.props.selected.tel} onChange={(event)=>this.isChange(event)} type="number" className="form-control" name="tel"  aria-describedby="helpId" placeholder="Nhập số điện thoại" />
          </div>
          <div className="form-group">
            <input onClick={()=>this.eventAdd()} type="reset" value="Add" className="btn btn-secondary btn-block" />
            <input onClick={()=>this.eventEdit()} type="reset" value="Edit" className="btn btn-secondary btn-block" />
          </div>
        </form>

        );
    }
    else
    {
      return (
<form>
          <div className="form-group">
            <input defaultValue="" onChange={(event)=>this.isChange(event)} type="text" className="form-control" name="name"  aria-describedby="helpId" placeholder="Nhập tên" />
          </div>
          <div className="form-group">
            <input defaultValue="" onChange={(event)=>this.isChange(event)} type="number" className="form-control" name="tel"  aria-describedby="helpId" placeholder="Nhập số điện thoại" />
          </div>
          <div className="form-group">
            <input onClick={()=>this.eventAdd()} type="reset" value="Add" className="btn btn-secondary btn-block" />
            <input type="reset" value="Edit" className="btn btn-secondary btn-block" />
          </div>
        </form>
      );
    }
  }   
    render() {
        return (
            <div className="col-md-3">
            <div className="card">
              <div className="card-header">
                Form thông tin
              </div>
              <div className="card-body">
                {this.displayForm()}
              </div>
            </div>
          </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => ({
    selected : state.selected
})
const mapDispatchToProps = dispatch => {
  return {
    addData : (item) => {
      dispatch({
        type : "addData",item
      })
    },
    editData : (item) => {
      dispatch({
        type : "editData",item
      })
    },
    alertOn : (typeAlert,contentAlert) => {
      dispatch({
        type : "alertOn",typeAlert,contentAlert
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form)