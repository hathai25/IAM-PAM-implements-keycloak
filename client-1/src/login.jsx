import React from "react";
import Keycloak from 'keycloak-js';

let initOptions = {
  url: 'http://localhost:8080/',
  realm: 'SpringBootKeycloak',
  clientId: 'react-client',
  onLoad: 'login-required', //check-sso
  KeycloakResponseType: 'code'
}
const keycloak = new Keycloak(initOptions);

keycloak.init({ onLoad: initOptions.onLoad, KeycloakResponseType: 'code' }).success((auth) => {
  if (!auth) {
    window.location.reload();
  } else {
    keycloak.loadUserProfile().then(res => {
      localStorage.setItem('userInfo', JSON.stringify(res))
    });
    localStorage.setItem('token', keycloak.token)
  }
  setTimeout(() => {
    keycloak.updateToken(70).success((refreshed) => {
      if (refreshed) {
        localStorage.setItem('token', keycloak.token)
        // console.debug('Token refreshed' + refreshed);
      } else {
        console.warn('Token not refreshed, valid for '
          + Math.round(keycloak.tokenParsed.exp + keycloak.timeSkew - new Date().getTime() / 1000) + ' seconds');
      }
    }).error(() => {
      console.error('Failed to refresh token');
    });

  }, 60000)
}).error(() => {
  console.error("Authenticated Failed");
});
const AuthWrapper = ({ children }) => {
  return (
    <>
      {children}
    </>
  )
}
export default AuthWrapper;