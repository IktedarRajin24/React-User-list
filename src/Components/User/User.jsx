/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";

const User = ({ user, onView }) => {
  //   console.log(user);
  const { id, image, firstName, lastName, email, address, company } = user;
  return (
    <div className="h-11/12 p-5 shadow-lg hover:shadow-2xl hover:bg-slate-50 rounded-xl transition-all duration-500 ease-in-out">
      <img className="w-28 mx-auto mb-5" src={image} alt={`user-${id}`} />
      <h1 className="text-center my-2 font-bold text-xl hover:underline hover:text-red-500 hover:cursor-pointer">
        <Link to={`/user/${id}`}> {firstName + " " + lastName}</Link>
      </h1>
      <div className="w-full mx-auto">
        <p className="flex mb-1">
          <span className="font-bold w-1/3">First name: </span>
          {firstName}
        </p>
        <p className="flex mb-1">
          <span className="font-bold w-1/3">Last name: </span>
          {lastName}
        </p>
        <p className="flex mb-1">
          <span className="font-bold w-1/3">Email: </span>
          {email}
        </p>
        <p className="flex mb-1">
          <span className="font-bold w-1/3 ">Address: </span>
          <span className="text-wrap w-2/3">
            {address?.address}, {address?.city}, {address?.state}
          </span>
        </p>
        <p className="flex mb-1">
          <span className="font-bold w-1/3">Company: </span>

          <span className="text-wrap w-2/3">
            {company?.name}, {company?.address?.address},{" "}
            {company?.address?.city}, {company?.address?.state}
          </span>
        </p>
      </div>
    </div>
  );
};

export default User;
