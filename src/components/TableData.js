import React, { Component } from 'react'
import TableDataRow from './TableDataRow'

class TableData extends Component {
  deleteButtonClick = (idUser) => {
    this.props.deleteUser(idUser)
  }
  mappingDataUser = () => {
    return this.props.dataUserProps.map((value, key) => {
      return (
        <TableDataRow
          deleteButtonClick={(idUser) => this.deleteButtonClick(idUser)}
          editFunClick={() => this.props.editFun(value)}
          changeEditUserStatus={() => this.props.changeEditUserStatus()}
          key={key}
          id={value.id}
          userName={value.name}
          tel={value.tel}
          permission={value.permission}
        />
      )
    })
  }
  render() {
    return (
      <div className='col'>
        <table className='table table-striped table-inverse table-hover'>
          <thead className='thead-inverse'>
            <tr>
              <th>TT</th>
              <th>Ten</th>
              <th>Dien thoai</th>
              <th>Quyen</th>
              <th>Thao tac</th>
            </tr>
          </thead>
          <tbody>{this.mappingDataUser()}</tbody>
        </table>
      </div>
    )
  }
}

export default TableData
