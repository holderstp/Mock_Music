import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef, useState } from "react";
interface Props {
  handleOnSubmitUpdate: (e: any, img: any) => void;
  handleOffUpdate: () => void;

  handleUserName: (e: any) => void;
  handlePassWord: (e: any) => void;
}
const UpdateUser = ({
  handleOnSubmitUpdate,
  handleOffUpdate,
  handleUserName,
  handlePassWord,
}: Props) => {
  const inPutRef = useRef<HTMLInputElement>(null);
  const [image, setImage] = useState();
  const handlePreviewAvatar = (e: any) => {
    const file = e.target.files[0];
    file.preview = URL.createObjectURL(file);
    setImage(e.target.files[0]);
    console.log("namdaydadada", image);
  };
  const handleImageClick = () => {
    if (inPutRef.current) {
      inPutRef.current.click();
    }
  };
  return (
    <div
      id="authentication-modal"
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0  max-h-full flex justify-center items-center bg-opacity-25 bg-black transition ease-in-out delay-10  hover:-translate-y-1 hover:scale-110 duration-200 h-screen"
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
          <div className="px-6 py-6 lg:px-8 h-full">
            <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
              Edit User
            </h3>
            <form
              className="space-y-6"
              action="#"
              onSubmit={(e) => handleOnSubmitUpdate(e, image)}
            >
              <div className="w-full flex ">
                <div
                  className="w-1/3 flex justify-center mt-[70px]"
                  onClick={handleImageClick}
                >
                  {image ? (
                    <div className="w-[250px] mr-5">
                      <img
                        src={URL.createObjectURL(image)}
                        alt="err"
                        className="rounded-md border-solid border-2 border-black h-[150px]"
                      />
                    </div>
                  ) : (
                    <div className="">
                      <FontAwesomeIcon icon={faCamera} />
                    </div>
                  )}
                  <input
                    type="file"
                    onChange={handlePreviewAvatar}
                    ref={inPutRef}
                    style={{ display: "none" }}
                  />
                </div>
                <div className="w-2/3 ">
                  <div className="mt-10 ">
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
                  <div className="mt-10">
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
                  {/* <div className="mt-10">
                    <label
                      htmlFor="confirmpassword"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Confirm password
                    </label>
                    <input
                      type="password"
                      name="confirmpassword"
                      id="confirmpassword"
                      placeholder="••••••••"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      required
                      onChange={(e) => handleConfirmPassWord(e)}
                    ></input>
                  </div> */}
                  <button
                    type="submit"
                    className="w-full text-white bg-black hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-10 "
                  >
                    Update
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default UpdateUser;
