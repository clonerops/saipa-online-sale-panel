import { Link } from "react-router";
import { ReactSVG } from "react-svg";

import LoginForm from "./LoginForm";

const Login = () => {
  return (
    <div className="login">
      <div className="login__wrapper">
        <div className="login__wrapper-inner">
          <div className="login__action">
            <div className="login__header">
              <ReactSVG src="/svg/saipa-logo-124.svg" className="login__logo" />
              <div className="login__header-text-1">
                پنل مدیریت سامانه فروش سایپا
              </div>
              <div className="login__header-text-2">خوش آمدید</div>
            </div>
            {/* START FORM */}
            <LoginForm />
            {/* END FORM */}
            <Link to={"/"} className="login__forget">
              کلمه عبور خود را فراموش کرده ام
            </Link>
          </div>
        </div>

        <div className="login__bg" />
      </div>
    </div>
  );
};

export default Login;
