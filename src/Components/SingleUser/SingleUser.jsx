/* eslint-disable no-unused-vars */
import React from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import "./SingleUser.css";

const SingleUser = () => {
  const users = useLoaderData();
  const params = useParams();
  const user = users.filter((user) => user.id === parseInt(params.id));

  const { id, image, firstName, lastName, email, address, company } = user[0];
  return (
    <div className="md:my-0 my-3 flex justify-center items-center flex-col gap-10 singleUser">
      <div className="md:h-1/2 h-9/12 md:w-1/4 w-11/12 mx-auto px-5 py-8 shadow-md hover:shadow-2xl hover:bg-slate-50 rounded-xl transition-all duration-500 ease-in-out">
        <div>
          <img className="w-28 mx-auto mb-5" src={image} alt={`user-${id}`} />
          <h1 className="text-center my-2 font-bold text-xl">
            {firstName + " " + lastName}
          </h1>
        </div>
        <div className="w-full mx-auto">
          <p className="flex">
            <span className="font-bold w-1/3">First name: </span>
            {firstName}
          </p>
          <p className="flex">
            <span className="font-bold w-1/3">Last name: </span>
            {lastName}
          </p>
          <p className="flex">
            <span className="font-bold w-1/3">Email: </span>
            {email}
          </p>
          <p className="flex">
            <span className="font-bold w-1/3 ">Address: </span>
            <span className="text-wrap w-2/3">
              {address.address}, {address.city}, {address.state}
            </span>
          </p>
          <p className="flex">
            <span className="font-bold w-1/3">Company: </span>

            <span className="text-wrap w-2/3">
              {company.address.address}, {company.address.city},{" "}
              {company.address.state}
            </span>
          </p>
        </div>
        <div className="w-1/4 mx-auto">
          <button className="bg-blue-500 text-white px-3 py-2 rounded-lg my-10 hover:bg-blue-400  transition-colors duration-500 ease-linear">
            <Link to="/" className="flex gap-2">
              <ArrowLeftIcon className="w-5" /> Back
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleUser;
