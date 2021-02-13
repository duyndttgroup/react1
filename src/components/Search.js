import React, { Component } from 'react'
import EditUser from './EditUser'

class Search extends Component {
  constructor(props) {
    super(props)
    this.state = { tempValue: '', userObj: {} }
  }
  getUserEditInfo = (info) => {
    this.setState({
      userObj: info,
    })
    this.props.getUserEditInfoAp(info)
  }
  isShowEditForm = () => {
    if (this.props.editUserStatus === true) {
      return (
        <EditUser
          getUserEditInfo={(info) => this.getUserEditInfo(info)}
          userEditObject={this.props.userEditObject}
          changeEditUserStatus={() => this.props.changeEditUserStatus()}
        />
      )
    }
  }

  isChange = (event) => {
    this.setState({
      tempValue: event.target.value,
    })
    this.props.checkConnect(this.state.tempValue)
  }
  hienThiNut = () => {
    if (this.props.hienThiForm === true) {
      return (
        <div
          onClick={() => this.props.thayDoiTrangThai()}
          className='btn btn-block btn-outline-secondary'
        >
          Dong lai
        </div>
      )
    } else {
      return (
        <div
          className='btn btn-block btn-outline-info mt-3'
          onClick={() => this.props.thayDoiTrangThai()}
        >
          Them moi
        </div>
      )
    }
  }

  render() {
    return (
      <div className='col-12'>
        <div className='row'>{this.isShowEditForm()}</div>
        <div className='form-group'>
          <div className='btn-group'>
            <input
              type='text'
              className='form-control'
              placeholder='Nhap tu khoa'
              onChange={(event) => this.isChange(event)}
            />
            <div
              className='btn btn-info'
              onClick={() => this.props.checkConnect(this.state.tempValue)}
            >
              Tim
            </div>
          </div>
          {this.hienThiNut()}
        </div>
        <hr />
      </div>
    )
  }
}

export default Search
