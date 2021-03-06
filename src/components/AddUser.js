import React, { Component } from 'react'

class AddUser extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: '',
      name: '',
      tel: '',
      permission: '',
    }
  }
  isChange = (event) => {
    const name = event.target.name
    const value = event.target.value
    this.setState({
      [name]: value,
    })
    // var item = {}
    // item.id = this.state.id
    // item.name = this.state.name
    // item.tel = this.state.tel
    // item.permission = this.state.permission
  }

  kiemTraTrangThai = () => {
    if (this.props.hienThiForm === true) {
      return (
        <div className='col'>
          <form>
            <div className='card border-primary mb-3 mt-2'>
              <div className='card-header'>Them moi User</div>
              <div className='card-body text-primary'>
                <div className='form-group'>
                  <input
                    name='name'
                    type='text'
                    className='form-control'
                    placeholder='Ten User'
                    onChange={(event) => this.isChange(event)}
                  />
                </div>
                <div className='form-group'>
                  <input
                    name='tel'
                    type='text'
                    className='form-control'
                    placeholder='Dien thoai'
                    onChange={(event) => this.isChange(event)}
                  />
                </div>
                <div className='form-group'>
                  <select
                    className='custom-select'
                    name='permission'
                    onChange={(event) => this.isChange(event)}
                    required
                  >
                    <option value>Chon quyen mac dinh</option>
                    <option value={1}>Admin</option>
                    <option value={2}>Moderator</option>
                    <option value={3}>Normal</option>
                  </select>
                </div>
                <div className='form-group'>
                  <input
                    type='reset'
                    className='btn-block btn-primary'
                    onClick={() =>
                      this.props.add(
                        this.state.id,
                        this.state.name,
                        this.state.tel,
                        this.state.permission
                      )
                    }
                    value='Them moi'
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      )
    }
  }
  render() {
    return <div>{this.kiemTraTrangThai()}</div>
  }
}

export default AddUser
