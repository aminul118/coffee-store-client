import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div className="h-[calc(100vh-68px)] flex justify-center items-center">
      <div className="card bg-base-100 w-full  max-w-md shrink-0 shadow-2xl">
        <form className="card-body ">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
            <p className="mt-4 text-center">
              You don't have any account? Please
              <Link to={"/signup"} className="text-blue-400 ml-1">
                signup
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
