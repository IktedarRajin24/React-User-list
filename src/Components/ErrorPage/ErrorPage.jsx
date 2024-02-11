/* eslint-disable no-unused-vars */
import React from "react";
import "./ErrorPage.css";

const ErrorPage = () => {
  return (
    <div className="flex justify-center items-center errorPage">
      <h1 className="inline-block text-4xl font-bold text-red-600 text-center align-middle">
        ⚠️ 404 not found. Page does not exist❗️❗️
      </h1>
    </div>
  );
};

export default ErrorPage;
