import React from "react";
import { toast } from "react-toastify";


const IssueCard = ({
  issue,
  setInProgress,
  InProgress,
  setTaskStatas,
  taskStatas,
}) => {

  console.log(issue);
  const handelClick = () => {
    setTaskStatas([...taskStatas, issue]);
    setInProgress(InProgress + 1);
    toast("In Progress!");
  };

  // console.log(issue);
  return (
    <div className="mx-2 my-2">
      <div
        onClick={() => handelClick(issue)}
        className="shadow-xl rounded-md px-2.5 py-2.5"
      >
        <div className="flex justify-between">
          <h1 className="font-bold">{issue?.title}</h1>
          <button
            className={`btn rounded-full ${
              issue?.status === "In Progress"
                ? "bg-yellow-400 text-gray-500"
                : issue?.status === "Open"
                ? "bg-green-400 text-gray-500"
                : ""
            }`}
          >
            {issue?.status}{" "}
          </button>
        </div>
        <p className="text-gray-400">{issue?.description} </p>
        <div className="md:flex justify-between">
          <div className="md:flex gap-3">
            <p className="text-gray-400">{issue?.id} </p>
            <p
              className={`${
                issue?.priority === "Critical"
                  ? "text-red-600"
                  : issue?.priority === "High"
                  ? "text-red-400"
                  : issue?.priority === "Medium"
                  ? "text-yellow-500"
                  : issue?.priority === "Low"
                  ? "text-green-500"
                  : ""
              }`}
            >
              {issue?.priority}
            </p>
          </div>
          <div className="md:flex gap-3 text-gray-400">
            <p>{issue?.customer}</p>
            <p>{issue?.createdAt}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IssueCard;
