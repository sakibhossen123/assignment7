import React, { useState } from "react";
import { use } from "react";
import IssueCard from "./IssueCard";

import { toast } from "react-toastify";
import TaskStatas from "./TaskStatas/TaskStatas";
import ResolvedStatas from "./RsolvedStatas/ResolvedStatas";

const IssueMnage = ({
  data,
  setInProgress,
  InProgress,
  setTaskStatas,
  taskStatas,
  setResolved,
  Resolveds,
  setResolve,
  Resolved,
}) => {
  const issues = use(data);
  // console.log(issues);
  // console.log(data);
  const [mainData, setMainData] = useState(issues);
  // const [ttiff,setkdslfakfj] = useState(taskStatas)

  // console.log(mainData);
  const handelTask = (task) => {
    const filterdTask = taskStatas.filter((i) => i.id !== task.id);
    console.log(filterdTask);
    setTaskStatas(filterdTask);
    setInProgress(InProgress - 1);
    setResolved([...Resolveds, task]);
    setResolve(Resolved + 1);
    const filterData = issues.filter((i) => i.id != task.id);
    setMainData(filterData);
    toast("Completed!");
  };
  // console.log(issues);
  // console.log(taskStatas);

  return (
    <div className="md:grid md:grid-cols-4 gap-3.5 max-w-[1280px] px-5 mx-auto flex flex-col-reverse">
      <div className="grid h-fit md:grid-cols-2 col-span-3">
        {mainData.map((issue) => (
          <IssueCard
            taskStatas={taskStatas}
            setTaskStatas={setTaskStatas}
            InProgress={InProgress}
            setInProgress={setInProgress}
            issue={issue}
          >
            {" "}
          </IssueCard>
        ))}
      </div>

      <div className="col-span-1">
        <div>
          <h1 className="text-2xl font-semibold">Task Status</h1>
          <p className="text-gray-400">Select a ticket to add to Task Status</p>
          <div>
            {taskStatas?.map((task) => (
              <TaskStatas
                key={task.id}
                setResolved={setResolved}
                Resolveds={Resolveds}
                data={data}
                handelTask={handelTask}
                task={task}
              ></TaskStatas>
            ))}
          </div>
        </div>
        <div>
          <h1 className="text-2xl font-semibold">Resolved Task</h1>
          <p className="text-gray-400">No resolved tasks yet.</p>
        </div>
        <div>
          <ResolvedStatas Resolveds={Resolveds}></ResolvedStatas>
        </div>
      </div>
    </div>
  );
};

export default IssueMnage;
