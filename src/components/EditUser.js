import React, { Component } from 'react'

class EditUser extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: this.props.userEditObject.id,
      name: this.props.userEditObject.name,
      tel: this.props.userEditObject.tel,
      permission: this.props.userEditObject.permission,
    }
  }
  isChange = (event) => {
    const name = event.target.name
    const value = event.target.value
    this.setState({
      [name]: value,
    })
  }
  saveButton = () => {
    var info = {}
    info.id = this.state.id
    info.name = this.state.name
    info.tel = this.state.tel
    info.permission = this.state.permission
    this.props.getUserEditInfo(info)
    this.props.changeEditUserStatus()
  }
  render() {
    return (
      <div className='col'>
        <form method='post'>
          <div className='card text-white bg-warning mb-3 mt-2'>
            <div className='card-header text-center'>Sua thong tin User</div>
            <div className='card-body text-primary'>
              <div className='form-group'>
                <input
                  name='name'
                  type='text'
                  className='form-control'
                  placeholder='Ten User'
                  defaultValue={this.props.userEditObject.name}
                  onChange={(event) => this.isChange(event)}
                />
              </div>
              <div className='form-group'>
                <input
                  name='tel'
                  type='text'
                  className='form-control'
                  placeholder='Dien thoai'
                  defaultValue={this.props.userEditObject.tel}
                  onChange={(event) => this.isChange(event)}
                />
              </div>
              <div className='form-group'>
                <select
                  defaultValue={this.props.userEditObject.permission}
                  className='custom-select'
                  name='permission'
                  required
                  onChange={(event) => this.isChange(event)}
                >
                  <option value>Chon quyen mac dinh</option>
                  <option value={1}>Admin</option>
                  <option value={2}>Moderator</option>
                  <option value={3}>Normal</option>
                </select>
              </div>
              <div className='form-group'>
                <input
                  type='button'
                  className='btn-block btn-danger'
                  value='Luu'
                  onClick={() => this.saveButton()}
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default EditUser
