import {useEffect, useState} from "react";
import axios from "axios";
import * as requestFromServer from "../services/entitiesCrud.jsx";
import {notification} from "antd";

const User = () => {
  const [userInfo, setUserInfo] = useState(null)
  useEffect(() => {
    try {
      requestFromServer.getItems('test/user').then(r => {
        setUserInfo(r?.data)
        console.log(r)
      })
    } catch (error) {
      notification.error({
        message: 'Error',
        description: error.message,
      });
    }
  }, [])
  return (
    <div dangerouslySetInnerHTML={
      {__html: (userInfo)}
    }>

    </div>)
}

export default User