interface Props {
  handleOffLogin: () => void;
  handleUserName: (e: any) => void;
  handlePassWord: (e: any) => void;
  handleOnSubmit: (e: any) => void;
  handleConfirmPassWord: (e: any) => void;
  signupSTT: any;
  verifyPass: any;
  loginErrorMessage: any;
  signupErrorMessage: any;
}

const Login = ({
  handleOffLogin,
  handleUserName,
  handlePassWord,
  handleConfirmPassWord,
  handleOnSubmit,
  signupSTT,
  verifyPass,
  loginErrorMessage,
  signupErrorMessage,
}: Props) => {
  return (
    <div
      id="authentication-modal"
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0  max-h-full flex justify-center items-center bg-opacity-25 bg-black transition ease-in-out delay-10  hover:-translate-y-1 hover:scale-110 duration-200 h-screen "
    >
      <div className="relative w-full max-w-md max-h-full ">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 h-[450px]">
          <button
            type="button"
            className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
            data-modal-hide="authentication-modal"
            onClick={() => handleOffLogin()}
          >
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
          <div className="px-6 py-6 lg:px-8">
            <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
              Sign in to our platform
            </h3>
            <form
              className="space-y-6"
              action="#"
              onSubmit={(e) => handleOnSubmit(e)}
            >
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="name@company.com"
                  required
                  onChange={(e) => handleUserName(e)}
                ></input>
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  required
                  onChange={(e) => handlePassWord(e)}
                ></input>
              </div>
              {!signupSTT && (
                <div className="h-[30px] ">
                  <p className="text-rose-900">{loginErrorMessage}</p>
                </div>
              )}

              {signupSTT && (
                <div>
                  <label
                    htmlFor="confirmPassword"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Confirm your password
                  </label>
                  <input
                    type="password"
                    name="confirmPassword"
                    id="confirmPassword"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    required
                    onChange={(e) => handleConfirmPassWord(e)}
                  ></input>
                </div>
              )}
              {!signupSTT && (
                <div className="flex justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        type="checkbox"
                        value=""
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                        required
                      ></input>
                    </div>

                    <label
                      htmlFor="remember"
                      className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Remember me
                    </label>
                  </div>
                  <a
                    href="#"
                    className="text-sm text-blue-700 hover:underline dark:text-blue-500"
                  >
                    Lost Password?
                  </a>
                </div>
              )}
              {signupSTT && (
                <div className="h-[20px]">
                  <p className="text-rose-900">{signupErrorMessage}</p>
                </div>
              )}

              <button
                type="submit"
                className="w-full text-white bg-black hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
              >
                {signupSTT ? "Create your account" : "Login to your account"}
              </button>
              {!signupSTT && (
                <div className="text-sm font-medium text-gray-500 dark:text-gray-300 ">
                  Not registered?
                  <a
                    href="#"
                    className="text-blue-700 hover:underline dark:text-blue-500"
                  >
                    Create account
                  </a>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
