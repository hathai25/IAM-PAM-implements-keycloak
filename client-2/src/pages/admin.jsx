import {useEffect, useState} from "react";
import * as requestFromServer from "../services/entitiesCrud.jsx";
import {notification} from "antd";

const Admin = () => {
  const [adminInfo, setAdminInfo] = useState(null)
  useEffect(() => {
    try {
      console.log('test/admin')
      requestFromServer.getItems('test/admin').then(r => {
        console.log('hi')
        console.log(r)
        if (!r) {
          notification.error({
            message: 'Error',
            description: 'You are not authorized to access this page',
          });
        }
        // setAdminInfo(r?.data)
      })
    } catch (error) {
      console.log(error)
    }
  }, [])

  return (
    <div dangerouslySetInnerHTML={
      {__html: 'Admin Page'}
    }/>)
}

export default Admin