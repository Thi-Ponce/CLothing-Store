import { signInWithGooglePopup } from '../../utils/firebase/firebade.utils';

const SignIn = () => {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    console.log(response);
  };

  return (
    <div>
      <h1>Sign In</h1>
      <button type="button" onClick={logGoogleUser}>
        Sign In With Google
      </button>
    </div>
  );
};

export default SignIn;
