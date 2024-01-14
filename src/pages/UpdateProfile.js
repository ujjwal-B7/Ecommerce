import React from "react";
import Loader from "../components/Loader";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  clearErrors,
  loadUser,
  updateProfile,
} from "../store/actions/userAction";
import { UPDATE_PROFILE_RESET } from "../store/constants/userConstants";
const UpdateProfile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [profile, setProfile] = useState();
  const [profilePreview, setProfilePreview] = useState("/Profile.png");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const { user } = useSelector((state) => state.user);
  const { isUpdated, loading, error } = useSelector(
    (state) => state.updateProfile
  );

  // updateProfile form handler
  const updateProfileSubmit = async (e) => {
    e.preventDefault();
    const myForm = new FormData();
    myForm.set("name", name);
    myForm.set("email", email);
    myForm.set("profile", profile);
    dispatch(updateProfile(myForm));
  };

  const updateProfileDataChange = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      //readystates=> 0:initial state,1:processing,2:done
      if (reader.readyState === 2) {
        setProfilePreview(reader.result);
        setProfile(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  useEffect(() => {
    if (user) {
      setName(user.name);
      setEmail(user.email);
      setProfile(user.profile.url);
    }
    if (isUpdated) {
      dispatch(loadUser());
      navigate("/profile");
      dispatch({ type: UPDATE_PROFILE_RESET });
    }
  }, [dispatch, user, isUpdated, navigate]);
  return (
    <>
      <Loader loading={loading} />
      <div
        className="w-full h-32 bg-[url('./images/store.jpg')] bg-cover"
        data-aos="zoom-in"
      ></div>
      <section className=" max-w-screen-xl mx-auto h-[80vh] flex items-center">
        <div>
          <h1 className="text-gray-900">update your profile</h1>
          <div className=" h-52 w-52">
            <img
              className="rounded-full h-52 w-52 object-cover"
              src={profile}
              alt=""
            />
          </div>
        </div>
        <form
          encType="multipart/form-data"
          onSubmit={updateProfileSubmit}
          className={`lg:w-[40%] sm:w-[60%] w-[90%] relative mx-auto bg-white p-5 rounded-xl shadow-xl
        `}
          // data-aos="fade-up"
        >
          {/* <div className="text-gray-900 h-5 w-5 pl-[1px] hover:bg-gray-400 absolute right-2 top-2 rounded-full">
          <ion-icon name="close" size="small"></ion-icon>
        </div> */}
          <div>
            <div className="my-5">
              {error && <p className="text-red-500 text-md">{error}</p>}
              <label
                htmlFor="text"
                className="block mb-2 text-md font-semibold text-gray-900"
              >
                Your Name
              </label>

              <input
                type="text"
                name="name"
                value={name}
                onChange={updateProfileDataChange}
                className=" border border-gray-900 bg-transparent  text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 "
                // style={{ backgroundColor: "gray" }}
                placeholder="Name"
                required
              />
            </div>
            <div className="my-5">
              <label
                htmlFor="email"
                className="block mb-2 text-md font-semibold text-gray-900"
              >
                Your email
              </label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={updateProfileDataChange}
                className=" border border-gray-900 bg-transparent  text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 "
                // style={{ backgroundColor: "gray" }}
                placeholder="abc@gmail.com"
                required
              />
            </div>
            <label htmlFor="profile" className="text-gray-900">
              Upload a photo
            </label>
            <div id="updateProfileImage" className="flex items-center gap-7">
              <div className="pic ">
                <input
                  className="rounded-xl"
                  type="file"
                  name="profile"
                  accept="image/*"
                  onChange={updateProfileDataChange}
                />
              </div>
              {/* <div className=" h-12 w-12">
                <img
                  className="rounded-full h-12 w-12 object-cover"
                  src={profile}
                  alt=""
                />
              </div> */}
            </div>
            {/* <button
            disabled={password.length < 8 ? true : false}
            type="submit"
            value="updateProfile"
            className="mt-4 text-white bg-gray-900 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm w-full  px-5 py-2.5 gap-4 flex justify-center items-center"
          >
            {loading && <span className="loader-btn"></span>}
            <p>Submit</p>
          </button> */}
            <button
              type="submit"
              value="updateProfile"
              className="mt-4 text-white bg-gray-900 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 gap-4 flex justify-center items-center"
            >
              {loading && <span className="loader-btn"></span>}
              <p>Submit</p>
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default UpdateProfile;
