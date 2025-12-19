import React from "react";

const ResolvedStatas = ({ Resolveds }) => {
  return (
    <div>
      {Resolveds?.map((resolved) => (
        <div className="shadow-xl my-3 rounded-md px-3.5 py-4">
          <h1 className="text-xl font-semibold py-3">{resolved.title}</h1>
          <button className="text-left text-md text-[#02A53B] font-bold w-full rounded-full">
            ✔️ Completed
          </button>
        </div>
      ))}
    </div>
  );
};

export default ResolvedStatas;
