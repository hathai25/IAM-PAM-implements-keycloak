import {useEffect, useState} from 'react'
import './App.css'
import {Link} from "react-router-dom";
import AuthWrapper from "./login.jsx";
import UserTable from "./components/Page/Home/UserTable/index.jsx";
import {notification} from "antd";

function App() {
  const userInfo = JSON.parse(localStorage.getItem('userInfo'))
  return (
    <div className="App">
      <AuthWrapper>
        {userInfo && <UserTable
          key={userInfo?.id}
          data={[userInfo]}
        />}
        <div>
          <Link to={"/admin" }>Admin</Link>
        </div>
        <div>
          <Link to={"/user"}>User</Link>
        </div>
      </AuthWrapper>
    </div>
  )
}

export default App
