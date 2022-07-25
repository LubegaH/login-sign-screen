import Header from '../components/Header';
import Login from '../components/Login';
const LoginPage = () => {
  return (
    <>
      <Header
        heading='Log in to Truesoil'
        paragraph='Do not have an account yet?'
        linkName='Signup'
        linkUrl='/signup'
      />
      <Login />
    </>
  );
};

export default LoginPage;
