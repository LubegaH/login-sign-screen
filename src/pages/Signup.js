import Header from '../components/Header';
import Signup from '../components/Signup';
const SignupPage = () => {
  return (
    <>
      <Header
        heading='Signup for an Account'
        paragraph='Already have an account?'
        linkName='Login'
        linkUrl='/'
      />
      <Signup />
    </>
  );
};

export default SignupPage;
