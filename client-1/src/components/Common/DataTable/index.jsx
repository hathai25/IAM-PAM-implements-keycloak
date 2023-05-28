import {Table} from "antd";
import "./styles.css"
const DataTable = ({ data, columns, ...rest }) => {
  return(
    <Table
      className="custom-table"
      columns={columns}
      dataSource={data}
      bordered
      {...rest}
    />
  )
}

export default DataTable