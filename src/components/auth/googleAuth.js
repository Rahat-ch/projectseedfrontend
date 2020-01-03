import React, { useState } from "react";
import GoogleLogin from 'react-google-login';
import { useMutation } from '@apollo/react-hooks';
import { GOOGLE_AUTH_MUTATION } from '../../mutations/';

const GoogleAuth = () => {
  const [authenticate] = useMutation(GOOGLE_AUTH_MUTATION)
  const [username, setUsername] = useState('');
  const [disabled, setDisabled] = useState(false);


  const responseGoogle = (response) => {
    console.log(response);
    console.log(response.accessToken)
    authenticate({ variables: { input: { accessToken: response.accessToken } } })
  };

  return (
    <GoogleLogin
      clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
      buttonText="Login With Google"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={'single_host_origin'}
      disabled={disabled}
    />
  )
}

export default GoogleAuth