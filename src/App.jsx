import "./App.css";

import Navbar from "./component/navbar";
import Banner from "./component/Banner";
import Footer from "./component/Footer";
import IssueMnage from "./component/IssueMnage";

import { Suspense, useState } from "react";

function App() {
  const IssuePromise = async () => {
    const result = await fetch("/data.json");
    return result.json();
  };

  const FetchPromise = IssuePromise();
 

  const [data, setData] = useState(FetchPromise);
  const [taskStatas, setTaskStatas] = useState([]);
  const [Resolveds, setResolved] = useState([]);
  const [InProgress, setInProgress] = useState(0);
  const [Resolved, setResolve] = useState(0);
  // console.log(InProgress,TaskStatas);
  // console.log(FetchPromise);
  // console.log(data);
  return (
    <>
      <Navbar />
      <Banner Resolved={Resolved} InProgress={InProgress}></Banner>

      <Suspense fallback={<h1>loading...</h1>}>
        <IssueMnage
          FetchPromise={FetchPromise}
          data={data}
          setData={setData}
          Resolveds={Resolveds}
          setResolved={setResolved}
          taskStatas={taskStatas}
          setTaskStatas={setTaskStatas}
          InProgress={InProgress}
          setInProgress={setInProgress}
          Resolved={Resolved}
          setResolve={setResolve}
        ></IssueMnage>
      </Suspense>

      <Footer />
    </>
  );
}

export default App;
