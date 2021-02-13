import React, { Component } from 'react'

class TableDataRow extends Component {
  permissionShow = () => {
    if (this.props.permission === 1) {
      return 'Admin'
    } else if (this.props.permission === 2) {
      return 'Moderator'
    } else {
      return 'Normal'
    }
  }
  editClick = () => {
    this.props.editFunClick()
    this.props.changeEditUserStatus()
  }

  render() {
    return (
      <tr>
        <td scope='row'>{this.props.id}</td>
        <td>{this.props.userName}</td>
        <td>{this.props.tel}</td>
        <td>{this.permissionShow()}</td>
        <td>
          <div className='btn-group'>
            <div
              className='btn btn-warning sua'
              onClick={() => this.editClick()}
            >
              <i className='fa fa-edit' />
              Sua
            </div>
            <div
              className='btn btn-danger'
              onClick={(idUser) => this.props.deleteButtonClick(this.props.id)}
            >
              <i className='fa fa-delete' />
              Xoa
            </div>
          </div>
        </td>
        <td />
      </tr>
    )
  }
}

export default TableDataRow
