// setData,

const TaskStatas = ({ task, handelTask }) => {
  // console.log(task);
  return (
    <div className="shadow-xl my-3 rounded-md px-3.5 py-4">
      <h1 className="text-xl font-semibold py-3">{task?.title}</h1>
      <button
        onClick={() => {
          handelTask(task);
        }}
        className="btn bg-[#02A53B] w-full rounded-full"
      >
        Complete
      </button>
    </div>
  );
};

export default TaskStatas;
