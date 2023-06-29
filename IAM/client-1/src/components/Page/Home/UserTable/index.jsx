import DataTable from "../../../Common/DataTable/index.jsx";

const UserTable = ({data}) => {
  const columns = [
    {
      title: 'Full Name',
      dataIndex: 'firstName',
      key: 'fullname',
      render: (text, record) => {
        return `${record.firstName} ${record.lastName}`
      },
      width: 600
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      width: 600

    },
    {
      title: 'Username',
      dataIndex: 'username',
      key: 'username',
      width: 600

    }
  ]

    return (
        <DataTable
          //change color of header
          headerStyle={{backgroundColor: 'red'}}
          columns={columns}
          data={data}
        />
    );
}

export default UserTable;