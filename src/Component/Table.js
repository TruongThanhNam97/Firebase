import React, { Component } from 'react';
import { connect } from 'react-redux';
import firebase from "./Firebase";


class Table extends Component {
  constructor(props) {
    super(props)
    this.state = {
      listData : null
    }
  } 
  componentWillMount() {
    firebase.on("value",accs=>{
      var data = [];
      accs.forEach(acc=>{
        var item = {};
        item.id = acc.key;
        item.name = acc.val().name;
        item.tel = acc.val().tel;
        data.push(item);
      })
      this.setState({
        listData : data
      })
    })
  }
  eventDelete=(value)=>{
    this.props.deleteData(value.id);
    this.props.alertOn("danger","Xóa "+value.name+" thành công");
  } 
  displayData=()=>{
    if (this.props.search)
    {
      return this.state.listData.map((value,key)=>{
        if (value.name.toLocaleLowerCase().indexOf(this.props.search.toLocaleLowerCase())!==-1)
        {
          return (
            <tr key={key}>
                  <td>{value.name}</td>
                  <td>{value.tel}</td>
                  <td>
                    <div className="btn-group">
                      <div className="btn btn-warning" onClick={()=>this.props.selected(value)}>
                        <div className="fa fa-wrench" />
                        Sửa
                      </div>
                      <div className="btn btn-danger" onClick={()=>this.props.deleteData(value.id)} >
                        <div className="fa fa-ban" />
                        Xóa
                      </div>
                    </div>
                  </td>
                </tr>
          );
        }
        return true;
      })
    }
    else if (this.state.listData)
    {
      return this.state.listData.map((value,key)=>{
        return (
                  <tr key={key}>
                  <td>{value.name}</td>
                  <td>{value.tel}</td>
                  <td>
                    <div className="btn-group">
                      <div className="btn btn-warning" onClick={()=>this.props.selected(value)}>
                        <div className="fa fa-wrench" />
                        Sửa
                      </div>
                      <div className="btn btn-danger" onClick={()=>this.eventDelete(value)} >
                        <div className="fa fa-ban" />
                        Xóa
                      </div>
                    </div>
                  </td>
                </tr>
        );
      })
    }
  } 
    render() {
        return (
            <div className="col-9">
            <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <th>Tên</th>
                  <th>Điện thoại</th>
                  <th>Thao tác</th>
                </tr>
              </thead>
              <tbody>
                {this.displayData()}
              </tbody>
            </table>
          </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => ({
  search : state.search
})
const mapDispatchToProps = dispatch => {
    return {
        selected : (selected) => {
          dispatch({
            type : "selected",selected
          })
        },
        deleteData : (id) => {
          dispatch({
            type : "deleteData",id
          })
        },
        alertOn : (typeAlert,contentAlert) => {
          dispatch({
            type : "alertOn",typeAlert,contentAlert
          })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Table)