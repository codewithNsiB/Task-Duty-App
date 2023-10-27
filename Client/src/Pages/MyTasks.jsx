import { CiEdit } from "react-icons/ci";
import { RiDeleteBin3Line, RiAddFill } from "react-icons/ri";
import { Button } from "react-bootstrap";
import useFetchData from "../Hooks/FetchData";
import { useEffect } from "react";
import { getAllTasks } from "../config/api";
import Loader from "../utils/Loader";
import { Link, useNavigate } from "react-router-dom";

export default function MyTasks() {
  const { data, error, loading } = useFetchData(getAllTasks);

const navigate=useNavigate()


  useEffect(() => {
    document.title = "myTask";
  }, []);
  return (
    <>
    <div className="myTask-Layout my-5">
      <div className=" mx-auto d-flex justify-content-around ">
        <p className="fs-3 ">My Tasks</p>
        <div className="pe-4" onClick={()=>{navigate("/createTask")}}>
          <RiAddFill size="20px" style={{ color: "#974FD0" }}/>
          <span className="purple-color">Add New Task</span>
        </div>
      </div>
      <>
        {data.map((tasks) => (
          <div key={tasks._id} className=" mytask-div border mb-5">
            <div className=" border-bottom  d-flex justify-content-between ">
              <div className="d-flex gap-2">
                <p>{tasks.tags}</p>
                <p>{tasks.status}</p>
              </div>
              <div className=" d-flex justify-content-between gap-3">
                <Button
                  style={{
                    backgroundColor: "#974FD0",
                    borderColor: "#974FD0",
                  }}
                  size="30px"
                  className="d-flex gap-2"
                >
                  <CiEdit />
                  <span>Edit</span>
                </Button>
                <Button
                  size="30px"
                  className="d-flex gap-2 align-items-center"
                  style={{
                    backgroundColor: "#FFFFFF",
                    color: "#974FD0",
                    borderColor: "#974FD0",
                  }}
                >
                  <RiDeleteBin3Line />
                  <span>Delete</span>
                </Button>
                <hr />
              </div>
            </div>
            <h1 className="fs-3">{tasks.title}</h1>
            <p className="fs-6">{tasks.description}</p>
          </div>
        ))}
      </>
    </div>
    <Link to={"#"}  className="purple-color fs-6 mx-auto">Back To Top</Link>
    </>
  );
}
