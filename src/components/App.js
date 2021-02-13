import React, { Component } from 'react'
import './../App.css'
import Header from './Header'
import Search from './Search'
import TableData from './TableData'
import AddUser from './AddUser'
import DataUser from './Data.json'
import { v4 as uuidv4 } from 'uuid'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hienThiForm: false,
      data: DataUser,
      searchText: '',
      editUserStatus: false,
      userEditObject: {},
    }
  }
  thayDoiTrangThai = () => {
    this.setState({ hienThiForm: !this.state.hienThiForm })
  }

  getNewUserData = (id, name, tel, permission) => {
    var item = {}
    item.id = uuidv4()
    item.name = name
    item.tel = tel
    item.permission = permission
    var items = this.state.data
    items.push(item)
    this.setState({ data: items })
  }

  getTextSearch = (data) => {
    this.setState({
      searchText: data,
    })
  }

  editUser = (user) => {
    this.setState({
      userEditObject: user,
    })
  }

  getUserEditInfoApp = (info) => {
    this.state.data.forEach((value, key) => {
      if (value.id === info.id) {
        value.name = info.name
        value.tel = info.tel
        value.permission = info.permission
      }
    })
  }

  deleteUser = (idUser) => {
    var tempData = this.state.data.filter((item) => item.id != idUser)
    this.setState({ data: tempData })
  }

  changeEditUserStatus = () => {
    this.setState({ editUserStatus: !this.state.editUserStatus })
  }

  render() {
    var ketqua = []
    this.state.data.forEach((item) => {
      if (item.name.indexOf(this.state.searchText) !== -1) {
        ketqua.push(item)
      }
    })
    return (
      <div>
        <Header />
        <div className='searchForm'>
          <div className='container'>
            <div className='row'>
              <Search
                getUserEditInfoAp={(info) => this.getUserEditInfoApp(info)}
                userEditObject={this.state.userEditObject}
                hienThiForm={this.state.hienThiForm}
                thayDoiTrangThai={() => this.thayDoiTrangThai()}
                checkConnect={(data) => this.getTextSearch(data)}
                editUserStatus={this.state.editUserStatus}
                changeEditUserStatus={() => this.changeEditUserStatus()}
              />
              <TableData
                deleteUser={(idUser) => this.deleteUser(idUser)}
                editFun={(user) => this.editUser(user)}
                dataUserProps={ketqua}
                changeEditUserStatus={() => this.changeEditUserStatus()}
              />
              <AddUser
                hienThiForm={this.state.hienThiForm}
                add={(id, name, tel, permission) =>
                  this.getNewUserData(id, name, tel, permission)
                }
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
