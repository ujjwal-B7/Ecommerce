import React, { useEffect } from "react";
import { loadUsersByAdmin } from "../store/actions/userAction";
import { useDispatch, useSelector } from "react-redux";
const Users = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.allUsers);
  useEffect(() => {
    dispatch(loadUsersByAdmin());
  }, [dispatch]);
  let i = 1;
  return (
    <div className="col-start-3 col-end-13 mt-24 w-[95%] rounded-lg mx-auto">
      <table className="w-full">
        <tr className=" text-left bg-[#4f5467] text-white uppercase sticky -top-[0.9rem] ">
          <th>No.</th>
          <th>Image</th>
          <th>Name</th>
          <th>Email</th>
        </tr>
        {users &&
          users.map((user) => (
            <tr className="text-gray-600 border-b-gray-600/60 border-[0.5px]">
              <td>{i++}</td>
              <td className="w-40 h-40 rounded-full">
                <img
                  className="w-40 h-40 rounded-full object-cover"
                  src={
                    user.profile.url
                      ? user.profile.url
                      : "/images/defaultpic.jpg"
                  }
                  alt=""
                />
              </td>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
      </table>
    </div>
  );
};

export default Users;
