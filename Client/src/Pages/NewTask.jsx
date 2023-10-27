import React from "react";
import Form from "react-bootstrap/Form";
import { IoIosArrowBack, IoIosArrowDown } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";

export default function NewTask() {
  return (
    //  <div className='newtask-div border border-danger px-5 mx-auto '>
    //       <div className='d-flex mt-5 align-item-center mx-auto'>
    //           <IoIosArrowBack size="38px" />
    //         <h1>  New Task</h1>
    //       </div>
    //       <label className="" htmlFor="Title" placeholder=''>Task Title</label>
    //       <input type="text" name="Title" id="Title" />
    //       <label className="" htmlFor="desc">Description</label>
    //       <textarea type="text" name="desc" id="desc" />

    //    </div>

    //   <form className='newtask-div'>
    //     <div className='d-flex formdiv-1 mt-5 align-items-center '>
    //        <IoIosArrowBack size="38px" />
    //          <h1>  New Task</h1>
    //     </div>
    //   <div className="mb-3 formBox mx-auto">
    //     <label for="exampleInputEmail1" class="form-label">Task Title</label>
    //     <input type="text" className="form-control  " id="exampleInputEmail1" aria-describedby="emailHelp"/>
    //     <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
    //   </div>
    //   <div className="mb-3 formBox mx-auto">
    //     <label for="exampleInputPassword1" class="form-label">Description</label>
    //     <input type="text" class="form-control" id="exampleInputPassword1"/>
    //   </div>
    //   <div className="mb-3 form-check formBox mx-auto">
    //   <label className="" for="exampleCheck1" rows="3">Description</label>
    //     <textarea ></textarea>

    //   </div>
    //   <div className="mb-3 form-check formBox mx-auto">
    //     <input type="text" class="form-check-input" id="exampleCheck1"/>
    //     <label className="form-check-label" for="exampleCheck1">Tags</label>
    //   </div>
    //   <button type="submit" class="btn btn-primary formBox mx-auto">Done</button>
    // </form>

    <>
      <div className="mb-3 d-flex mt-5 formBox mx-auto">
        <IoIosArrowBack size="38px" />
        <h1> New Task</h1>
      </div>
      <div className="mb-4 formBox mx-auto position-relative">
        <label for="title" className="form-label taskposition">
          Task Title
        </label>
        <input
          type="text"
          className="form-control form-control-lg "
          id="title"
          placeholder="E.g complete your task manager project"
        />
      </div>
      <div class="mb-4 formBox mx-auto position-relative">
        <label
          for="desc"
          className="form-label desc-position "
          
        >
          Description
        </label>
        <textarea placeholder="Describe your task here..." className="form-control form-control-lg textarea-postn " id="desc" rows="3">
        
        </textarea>
      </div>
      <div class="mb-4 formBox mx-auto">

      <div className="mb-4 formBox mx-auto position-relative">
        <label for="tags" className="form-label tags-position">
          Tags
        </label>
        <input
          type="text"
          className="form-control form-control-lg "
          id="tags"
         
        />
        <IoIosArrowDown className="tags-icon" size="26px" />
      </div>
      <button
        size="400px"
        className=" mx-auto rounded-3 shadow-none border-0 mt-2"
        style={{
          backgroundColor: "#974FD0",
          color: "#FFFFFF",
          borderColor: "#974FD0",
          width: "56rem",
          height:"3rem"
        }}
      >
        Done
      </button>
      </div>
      
      <div className="mb-4 nav-link-div mx-auto ps-2">
      <NavLink className="purple-color " to={"#"} >Back to Top</NavLink>
      </div>
    </>
  );
}
