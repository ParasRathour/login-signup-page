import { useState } from "react";
import { Users } from "lucide-react";

function Login() {
  const [isLogin, setIsLogin] = useState(true);

  const pageHandler = () => {
    event.preventDefault();
    setIsLogin((prev) => !prev); // Toggle the value of isLogin
  };
  console.log(isLogin);

  return isLogin ? (
    <div className=" flex bg-gray-200 h-[400px] w-[400px] relative mt-[200px] ml-[500px] rounded-lg justify-center items-center">
      <form className="p-10  " action="submit">
        <h1 className="text-3xl font-semibold text-gray-600 text-center mb-14">
          Login
        </h1>
        <div className="flex flex-col gap-4">
          <span className="flex justify-center">
            <Users />
          </span>
          <input
            className=" h-[30px] rounded-md text-center"
            placeholder="username"
            type="text"
          />

          <input
            className=" h-[30px] rounded-md text-center"
            placeholder="password"
            type="password"
          />
        </div>
        <div className="mt-6 flex flex-col gap-2">
          <button
            
            className="hover:bg-slate-700 border-2 h-8 rounded-md bg-black text-white"
          >
            Login
          </button>
          <h1 className="text-center">OR</h1>
          <button
            onClick={pageHandler}
            className="hover:bg-slate-700 border-2 h-8 rounded-md bg-black text-white mb-2"
          >
            Sign up
          </button>
        </div>
      </form>
    </div>
  ) : (
    <div className=" flex bg-gray-200 h-[400px] w-[400px] relative mt-[200px] ml-[500px] rounded-lg justify-center items-center">
      <form className="p-10  " action="submit">
        <h1 className="text-3xl font-semibold text-gray-600 text-center mb-14">
          sign-up
        </h1>
        <div className="flex flex-col gap-4">
          <span className="flex justify-center">
            <Users />
          </span>
          <input
            className="h-[30px] rounded-md text-center"
            placeholder="Email"
            type="email"
          />
          <input
            className=" h-[30px] rounded-md text-center"
            placeholder="username"
            type="text"
          />

          <input
            className=" h-[30px] rounded-md text-center"
            placeholder="create password"
            type="password"
          />
        </div>
        <div className="mt-6 flex flex-col gap-2">
          <button
            
            className="border-black hover:bg-slate-700 border-2 h-8 rounded-md bg-black text-white"
          >
            Sign up
          </button>
          <h1 className="text-center">OR</h1>
          <button
            onClick={pageHandler}
            className="border-black hover:bg-slate-700 border-2 h-8 rounded-md mb-2 bg-black text-white"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
