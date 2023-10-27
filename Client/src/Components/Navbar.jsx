import { Dropdown, Image } from "react-bootstrap";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { Container, NavDropdown, Nav } from "react-bootstrap";
import MyTasks from "../Pages/MyTasks";
import Home  from "../Pages/Home";
import Account from "./Account"

// import {BiPowerOff} from "react-icons/bi"
// import { useState, useEffect } from "react";
import { useStore } from "../config/Store";



export default function Navbar() {

  const location = useLocation();
   const {logOut, currentUser, show, setShow} = useStore()
 

  return (
    <nav className="">
      <div className="px-2 py-3 mx-auto d-flex justify-content-around shadow fs-md-5 align-items-center">
        <div>
          <NavLink to={`/`}>
            <Image src="https://res.cloudinary.com/nsibaby/image/upload/v1696673238/Task%20manager/taskDuty_yo3unt.png" />
          </NavLink>
        </div>
        <div className="d-flex gap-md-5 gap-2 align-items-center">
        {  location.pathname ==="/createTask" ? null :   <NavLink className="text-dark" to={"/createTask"}>New Task</NavLink>}
          {location.pathname === "/tasks" ? null : <NavLink className="text-dark" to={"/tasks"}>All Tasks</NavLink> }
          {currentUser ? (
                <Dropdown>
                  <Dropdown.Toggle variant="none" id="dropdown-basic">
                    <Image
                      src={currentUser?.user?.profileImg}
                      alt={currentUser?.user?.username}
                      roundedCircle
                      style={{
                        width: "40px",
                        height: "40px",
                        objectFit: "cover",
                      }}
                    />
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.ItemText className="text-capitalize fw-bold">
                      Hi, {currentUser?.user?.username}
                    </Dropdown.ItemText>
                    <Dropdown.Item
                      as={NavLink}
                      to={`account/user-profile/${currentUser?.user?.username}`}
                    >
                      Profile
                    </Dropdown.Item>
                    <Dropdown.Item
                      as={NavLink}
                      to={`account/${currentUser?.user?.username}/tasks`}
                    >
                      tasks
                    </Dropdown.Item>
                    <Dropdown.Item
                      as={NavLink}
                      to={`account/${currentUser?.user?.username}/saveditems`}
                    >
                      Saved items
                    </Dropdown.Item>
                    <Dropdown.Item onClick={logOut}>Logout</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              ) : (
                <Account setShow={setShow} show={show} />
              )}
        </div>
        {/* <div className="d-flex align-items-center" onClick={logOut}>
                <BiPowerOff className="me-2" size="24px" />
                <span className="fw-medium fs-5">Logout</span>
              </div> */}
      </div>
    </nav>
  );
}
