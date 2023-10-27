import { useEffect } from "react";
import { Button, Carousel, Image } from "react-bootstrap";
import MyTasks from "./MyTasks";
import { Link, useNavigate, useLocation, NavLink } from "react-router-dom";
import toast from "react-hot-toast";
import Loader from "../utils/Loader";
import useFetchData from "../Hooks/FetchData";
import { useStore } from "../config/Store";
import Account from "../Components/Account";

export default function Home() {
  const { data, error, loading } = useFetchData();
  const { currentUser, setShow, show } = useStore();
  const navigate = useNavigate();
  const location = useLocation();

  const handleShow = () => setShow(true);

  return (
    <>
      {error && <p className="fs-5">{error.message}</p>}

      <div className=" div-layout d-md-flex justify-content-around align-items-center gap-md-5  ">
        <div className=" mt-4 text-divlayout">
          <h1 className="mt-4 ">
            Manage your Tasks on <br />
            <span className="purple-color">TaskDuty</span>
          </h1>
          <p className="my-4 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing <br />
            elit. Non tellus, sapien, morbi ante nunc euismod ac <br />
            felis ac. Massa et, at platea tempus duis non eget. <br /> Hendrerit
            tortor fermentum bibendum mi nisl
            <br />
            semper porttitor. Nec accumsan.
          </p>
          <Button
            style={{ backgroundColor: "#974FD0", borderColor: "#974FD0" }}
            size="40px"
            as={NavLink}
            to={"/tasks"}
            onClick={currentUser === "" && handleShow}
          >
            Go to my Tasks
          </Button>
        </div>
        <div className="mt-3 img-divLayout">
          {loading ? (
            <Loader />
          ) : (
            <Carousel>
              <Carousel.Item>
                <Image
                  src="https://res.cloudinary.com/nsibaby/image/upload/v1696673236/Task%20manager/Property_1_Frame_1_pbefir.png"
                  className="img-fluid"
                />
              </Carousel.Item>
              <Carousel.Item>
                <Image
                  src="https://res.cloudinary.com/nsibaby/image/upload/v1696673236/Task%20manager/Property_1_Frame_2_bbmzdw.png"
                  className="img-fluid"
                />
              </Carousel.Item>
              <Carousel.Item>
                <Image
                  src="https://res.cloudinary.com/nsibaby/image/upload/v1696673237/Task%20manager/Property_1_Frame_3_lw3fkd.png"
                  className="img-fluid"
                />
              </Carousel.Item>
            </Carousel>
          )}
        </div>
      </div>
      <Account setShow={setShow} show={show} hide="d-none"/>
    </>
  );
}
