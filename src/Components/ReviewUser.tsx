import { users } from "../data/user";

interface IReView {
  reviewUser: any;
  handleOffUpdate: () => void;
}

const ReviewUser = ({ reviewUser, handleOffUpdate }: IReView) => {
  return (
    <div
      id="authentication-modal"
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0  max-h-full flex justify-center items-center bg-opacity-25 bg-black transition ease-in-out delay-10  hover:-translate-y-1 hover:scale-110 duration-200 h-screen "
    >
      <div className="relative w-full max-w-md max-h-full ">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 h-[500px] w-[450px] ">
          <button
            type="button"
            className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
            data-modal-hide="authentication-modal"
            onClick={handleOffUpdate}
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
          <div className="flex w-full justify-center items-center pt-[60px] p-4">
            <div className="w-1/3">
              <img
                src={users[reviewUser].avatar}
                alt=""
                className="rounded-md"
              />
            </div>
            <div className="flex-col w-2/3 ">
              <div className="mb-2 text-lg font-medium text-gray-900 dark:text-white">
                User Name: {users[reviewUser].userName}
              </div>
              <div className="mb-2 text-lg font-medium text-gray-900 dark:text-white">
                Password: {users[reviewUser].password}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ReviewUser;
