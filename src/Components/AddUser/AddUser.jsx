/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { PhotoIcon } from "@heroicons/react/24/solid";
import React, { useRef, useState } from "react";

const AddUser = ({ onSetUsers, onSetAddUser }) => {
  const addImage = useRef(null);
  const [formData, setFormData] = useState({
    id: Math.random(),
    image: null,
    firstName: "",
    lastName: "",
    email: "",
    address: {
      address: "",
      city: "",
      state: "",
    },
    company: {
      name: "",
      address: {
        address: "",
        city: "",
        state: "",
      },
    },
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleAddress = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      address: { ...prevData.address, [name]: value },
    }));
  };

  const handleCompany = (e) => {
    const { name, value } = e.target;
    if (name === "name") {
      setFormData((prevData) => ({
        ...prevData,
        company: {
          ...prevData.company,
          name: value,
        },
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        company: {
          ...prevData.company,
          address: {
            ...prevData.company.address,
            [name]: value,
          },
        },
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSetUsers(formData);
    setFormData({
      image: null,
      firstName: "",
      lastName: "",
      email: "",
      address: {
        address: "",
        city: "",
        state: "",
      },
      company: {
        name: "",
        address: {
          address: "",
          city: "",
          state: "",
        },
      },
    });
    onSetAddUser(false);
  };
  return (
    <div className="flex justify-center items-center flex-col gap-10">
      <form
        className="md:h-1/2 h-9/12 2xl:w-1/3 md:w-1/2 w-11/12 mx-auto px-5 py-8 shadow-lg hover:shadow-2xl hover:bg-slate-50 rounded-xl transition-all duration-500 ease-in-out my-5"
        onSubmit={handleSubmit}
      >
        <h1 className="text-xl font-bold text-center">Add user</h1>
        <div
          className="bg-slate-100 w-20 h-20 border-4 border-dotted rounded-md mx-auto my-5 flex flex-col items-center text-slate-400 cursor-pointer"
          onClick={() => addImage.current.click()}
        >
          <input
            className="hidden"
            type="file"
            ref={addImage}
            accept=".png,.jpg,.jpeg"
            onChange={(e) => {
              let imageUrl = URL.createObjectURL(e.target.files[0]);
              setFormData((prevData) => ({
                ...prevData,
                image: imageUrl,
              }));
            }}
          />
          <p className="text-sm font-bold  w-1/2 text-center mx-auto">
            Add image
          </p>
          <PhotoIcon className="w-4" />
        </div>
        <div className="w-full mx-auto">
          <p className="flex mb-5">
            <span className="font-bold w-2/5">First name: </span>
            <input
              type="text"
              className="shadow-[0px_0px_7px_3px] shadow-slate-200 rounded-full px-2 py-1 w-10/12"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First Name"
            />
          </p>
          <p className="flex mb-5">
            <span className="font-bold w-2/5">Last name: </span>
            <input
              type="text"
              className="shadow-[0px_0px_7px_3px] shadow-slate-200 rounded-full px-2 py-1 w-10/12"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Last Name"
            />
          </p>
          <p className="flex mb-5">
            <span className="font-bold w-2/5">Email: </span>
            <input
              type="email"
              className="shadow-[0px_0px_7px_3px] shadow-slate-200 rounded-full px-2 py-1 w-10/12"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
            />
          </p>
          <p className="flex mb-5">
            <span className="font-bold w-2/5 ">Address: </span>
            <span className="w-10/12">
              <input
                type="text"
                className="shadow-[0px_0px_7px_3px] shadow-slate-200 rounded-full px-2 py-1 md:w-[30%] w-[40%] md:mb-0 mb-3 me-3"
                name="address"
                value={formData.address.address}
                onChange={handleAddress}
                placeholder="Address"
              />
              <input
                type="text"
                className="shadow-[0px_0px_7px_3px] shadow-slate-200 rounded-full px-2 py-1 md:w-[30%] w-[40%] md:mb-0 mb-3 me-3"
                name="city"
                value={formData.address.city}
                onChange={handleAddress}
                placeholder="City"
              />
              <input
                type="text"
                className="shadow-[0px_0px_7px_3px] shadow-slate-200 rounded-full px-2 py-1 md:w-[30%] w-[40%]  me-3"
                name="state"
                value={formData.address.state}
                onChange={handleAddress}
                placeholder="State"
              />
            </span>
          </p>
          <p className="flex">
            <span className="font-bold w-2/5">Company: </span>
            <span className="w-10/12">
              <input
                type="text"
                className="shadow-[0px_0px_7px_3px] shadow-slate-200 rounded-full px-2 py-1 md:w-[30%] w-[40%] mb-3 me-3"
                name="name"
                placeholder="Name"
                value={formData.company.name}
                onChange={handleCompany}
              />
              <input
                type="text"
                className="shadow-[0px_0px_7px_3px] shadow-slate-200 rounded-full px-2 py-1 md:w-[30%] w-[40%] mb-3 me-3"
                name="address"
                placeholder="Address"
                value={formData.company.address.address}
                onChange={handleCompany}
              />
              <input
                type="text"
                className="shadow-[0px_0px_7px_3px] shadow-slate-200 rounded-full px-2 py-1 md:w-[30%] w-[40%]  mb-3 me-3"
                name="city"
                placeholder="City"
                value={formData.company.address.city}
                onChange={handleCompany}
              />
              <input
                type="text"
                className="shadow-[0px_0px_7px_3px] shadow-slate-200 rounded-full px-2 py-1 md:w-[30%] w-[40%] mb-3 me-3"
                name="state"
                placeholder="State"
                value={formData.company.address.state}
                onChange={handleCompany}
              />
            </span>
          </p>
        </div>
        <div className="md:w-1/4 w-1/3 mx-auto">
          <button
            type="submit"
            className="bg-blue-500 text-white px-3 py-2 rounded-lg my-10 hover:bg-blue-400  transition-colors duration-500 ease-linear"
          >
            Add user
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddUser;
