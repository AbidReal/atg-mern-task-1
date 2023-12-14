import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import "./Posts.css";
import { IoMdArrowDropdown } from "react-icons/io";
import { BsThreeDots } from "react-icons/bs";

const Posts = () => {
  // data for the posts/cards

  const data = [
    {
      id: 1,
      image: "../../../public/article-1.png",
      category: "✍️ Article",
      title: "What if famous brands had regular fonts? Meet RegulaBrands!",
      description:
        "I’ve worked in UX for the better part of a decade. From now on, I plan to rei…",
      personImage: "../../../public/person-1.png",
      personName: "Sarthak Kamra",
      views: "1.4k views",
    },
    {
      id: 2,
      image: "../../../public/article-2.png",
      category: "🔬️ Education",
      title:
        "Tax Benefits for Investment under National Pension Scheme launched by Government",
      description:
        "I’ve worked in UX for the better part of a decade. From now on, I plan to rei…",
      personImage: "../../../public/person-2.png",
      personName: "Sarah West",
      views: "1.4k views",
    },
    {
      id: 3,
      image: "../../../public/article-3.png",
      category: "🗓️ Meetup",
      title: "Finance & Investment Elite Social Mixer @Lujiazui",
      personImage: "../../../public/person-3.png",
      personName: "Ronal Jones",
      views: "1.4k views",
      date: "Fri, 12 Oct, 2018",
      location: "Ahmedabad, India",
      linkVisit: "Visit Website",
    },
    {
      id: 4,
      category: "💼️ Job",
      title: "Software Developer",
      personImage: "../../../public/person-4.png",
      personName: "Joseph Gray",
      views: "1.4k views",
      team: "Innovaccer Analytics Private Ltd.",
      location: "Noida, India",
      linkApply: "Apply on timesjobs",
    },
  ];

  return (
    <div style={{ marginTop: "40px" }}>
      <div className="custom-container">
        <div
          className="d-flex justify-content-between pb-3"
          style={{ borderBottom: "1px solid #e0e0e0" }}
        >
          <div className="d-flex">
            <div
              className="me-4"
              style={{
                position: "relative",
              }}
            >
              All Posts(32)
              <span
                style={{
                  position: "absolute",
                  bottom: "-16px",
                  left: 0,
                  width: "100%",
                  borderBottom: "1px solid black",
                }}
              ></span>
            </div>
            <div
              className="me-4 mobile-hide"
              style={{
                color: "#8a8a8a",
                fontWeight: 400,
              }}
            >
              Article
            </div>
            <div
              className="me-4 mobile-hide"
              style={{
                color: "#8a8a8a",
                fontWeight: 400,
              }}
            >
              Event
            </div>
            <div
              className="me-4 mobile-hide"
              style={{
                color: "#8a8a8a",
                fontWeight: 400,
              }}
            >
              Education
            </div>
            <div
              className="me-4 mobile-hide"
              style={{
                color: "#8a8a8a",
                fontWeight: 400,
              }}
            >
              Job
            </div>
          </div>

          <div>
            <Button variant="light" className=" me-4  tablet-hide">
              Write a Post{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
              >
                <g clipPath="url(#clip0_1_839)">
                  <path
                    d="M6.41663 9.16663L11 13.75L15.5833 9.16663H6.41663Z"
                    fill="black"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_839">
                    <rect width="22" height="22" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </Button>
            <Button className=" tablet-hide">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
              >
                <g clipPath="url(#clip0_1_859)">
                  <path
                    d="M7.33333 9.16671H4.58333V6.41671H2.75V9.16671H0V11H2.75V13.75H4.58333V11H7.33333V9.16671ZM16.5 10.0834C18.0217 10.0834 19.2408 8.85504 19.2408 7.33337C19.2408 5.81171 18.0217 4.58337 16.5 4.58337C16.2067 4.58337 15.9225 4.62921 15.6658 4.71171C16.1883 5.45421 16.4908 6.35254 16.4908 7.33337C16.4908 8.31421 16.1792 9.20337 15.6658 9.95504C15.9225 10.0375 16.2067 10.0834 16.5 10.0834ZM11.9167 10.0834C13.4383 10.0834 14.6575 8.85504 14.6575 7.33337C14.6575 5.81171 13.4383 4.58337 11.9167 4.58337C10.395 4.58337 9.16667 5.81171 9.16667 7.33337C9.16667 8.85504 10.395 10.0834 11.9167 10.0834ZM17.985 12.0634C18.7458 12.7325 19.25 13.585 19.25 14.6667V16.5H22V14.6667C22 13.255 19.8275 12.3842 17.985 12.0634ZM11.9167 11.9167C10.0833 11.9167 6.41667 12.8334 6.41667 14.6667V16.5H17.4167V14.6667C17.4167 12.8334 13.75 11.9167 11.9167 11.9167Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_859">
                    <rect width="22" height="22" fill="white" />
                  </clipPath>
                </defs>
              </svg>{" "}
              Join Group
            </Button>
            <Button variant="light" className="d-sm-none">
              Filter:All <IoMdArrowDropdown />
            </Button>
          </div>
        </div>
      </div>

      {/* cards section */}
      <div className="row custom-container-2 p-0">
        <div className=" mt-4 col-lg-8 col-12 p-0">
          {data.map((item) => (
            <div key={item.id} className="card mt-3">
              {item.image && (
                <img src={item.image} alt="Card" className="card-image" />
              )}
              <div
                className="card-body text-left"
                style={{ textAlign: "left" }}
              >
                {item.category && (
                  <p className="card-category">{item.category}</p>
                )}
                {item.title && (
                  <div className="d-flex justify-content-between">
                    <h3
                      className="card-title"
                      style={{ fontSize: "22px", fontWeight: "600" }}
                    >
                      {item.title}
                    </h3>
                    <div>
                      <Dropdown>
                        <Dropdown.Toggle
                          variant="light"
                          id="dropdown-basic"
                          className="d-flex align-items-center"
                        >
                          <BsThreeDots style={{ fontSize: "22px" }} />
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item href="#/action-1">Edit</Dropdown.Item>
                          <Dropdown.Item href="#/action-2">
                            Report
                          </Dropdown.Item>
                          <Dropdown.Item href="#/action-3">
                            Option 3
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                  </div>
                )}
                {item.description && (
                  <p className="card-description">{item.description}</p>
                )}
                <div className="d-flex gap-5">
                  {item.date && (
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <g clipPath="url(#clip0_1_895)">
                          <path
                            d="M15.8333 2.49992H15V0.833252H13.3333V2.49992H6.66667V0.833252H5V2.49992H4.16667C3.24167 2.49992 2.50833 3.24992 2.50833 4.16659L2.5 15.8333C2.5 16.7499 3.24167 17.4999 4.16667 17.4999H15.8333C16.75 17.4999 17.5 16.7499 17.5 15.8333V4.16659C17.5 3.24992 16.75 2.49992 15.8333 2.49992ZM15.8333 15.8333H4.16667V6.66658H15.8333V15.8333ZM5.83333 8.33325H10V12.4999H5.83333V8.33325Z"
                            fill="black"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_1_895">
                            <rect width="20" height="20" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      {item.date}
                    </div>
                  )}
                  {item.team && (
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <g clipPath="url(#clip0_1_941)">
                          <path
                            d="M11.6667 5.00008V3.33341H8.33342V5.00008H11.6667ZM3.33341 6.66675V15.8334H16.6667V6.66675H3.33341ZM16.6667 5.00008C17.5917 5.00008 18.3334 5.74175 18.3334 6.66675V15.8334C18.3334 16.7584 17.5917 17.5001 16.6667 17.5001H3.33341C2.40841 17.5001 1.66675 16.7584 1.66675 15.8334L1.67508 6.66675C1.67508 5.74175 2.40841 5.00008 3.33341 5.00008H6.66675V3.33341C6.66675 2.40841 7.40841 1.66675 8.33342 1.66675H11.6667C12.5917 1.66675 13.3334 2.40841 13.3334 3.33341V5.00008H16.6667Z"
                            fill="black"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_1_941">
                            <rect width="20" height="20" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      {item.team}
                    </div>
                  )}
                  {item.location && (
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <g clipPath="url(#clip0_1_886)">
                          <path
                            d="M9.99996 1.66675C6.77496 1.66675 4.16663 4.27508 4.16663 7.50008C4.16663 11.8751 9.99996 18.3334 9.99996 18.3334C9.99996 18.3334 15.8333 11.8751 15.8333 7.50008C15.8333 4.27508 13.225 1.66675 9.99996 1.66675ZM5.83329 7.50008C5.83329 5.20008 7.69996 3.33342 9.99996 3.33342C12.3 3.33342 14.1666 5.20008 14.1666 7.50008C14.1666 9.90008 11.7666 13.4918 9.99996 15.7334C8.26663 13.5084 5.83329 9.87508 5.83329 7.50008Z"
                            fill="black"
                          />
                          <path
                            d="M9.99996 9.58341C11.1506 9.58341 12.0833 8.65067 12.0833 7.50008C12.0833 6.34949 11.1506 5.41675 9.99996 5.41675C8.84937 5.41675 7.91663 6.34949 7.91663 7.50008C7.91663 8.65067 8.84937 9.58341 9.99996 9.58341Z"
                            fill="black"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_1_886">
                            <rect width="20" height="20" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      {item.location}
                    </div>
                  )}
                </div>
                {item.linkApply && (
                  <div
                    className="border rounded text-center py-2 my-2"
                    style={{ color: "#02B875", width: "100%" }}
                  >
                    {item.linkApply}
                  </div>
                )}
                {item.linkVisit && (
                  <div
                    className="border rounded text-center py-2 my-2"
                    style={{ color: "#E56135", width: "100%" }}
                  >
                    {item.linkVisit}
                  </div>
                )}

                {item.personImage && item.personName && (
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="person-info d-flex align-items-center">
                      <img
                        src={item.personImage}
                        alt="Person"
                        className="person-image"
                      />
                      <p
                        className="person-name ms-2 mt-3 font-weight-bold "
                        style={{ fontWeight: "bold", fontSize: "18px" }}
                      >
                        {item.personName}
                      </p>
                    </div>
                    <div className="d-flex align-items-center my-auto">
                      <p
                        className="card-views d-flex align-items-center my-auto"
                        style={{ fontSize: "12px" }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          className="me-2"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M0.75 9C2.0475 5.7075 5.25 3.375 9 3.375C12.75 3.375 15.9525 5.7075 17.25 9C15.9525 12.2925 12.75 14.625 9 14.625C5.25 14.625 2.0475 12.2925 0.75 9ZM15.615 9C14.3775 6.4725 11.8425 4.875 9 4.875C6.1575 4.875 3.6225 6.4725 2.385 9C3.6225 11.5275 6.1575 13.125 9 13.125C11.8425 13.125 14.3775 11.5275 15.615 9ZM9 7.125C10.035 7.125 10.875 7.965 10.875 9C10.875 10.035 10.035 10.875 9 10.875C7.965 10.875 7.125 10.035 7.125 9C7.125 7.965 7.965 7.125 9 7.125ZM5.625 9C5.625 7.14 7.14 5.625 9 5.625C10.86 5.625 12.375 7.14 12.375 9C12.375 10.86 10.86 12.375 9 12.375C7.14 12.375 5.625 10.86 5.625 9Z"
                            fill="#525252"
                          />
                        </svg>

                        {item.views}
                      </p>
                      <div
                        className=" d-flex align-items-center  ms-4 "
                        style={{ backgroundColor: "#EDEEF0", padding: "12px" }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                        >
                          <g clipPath="url(#clip0_1_973)">
                            <path
                              d="M13.5 12.06C12.93 12.06 12.42 12.285 12.03 12.6375L6.6825 9.525C6.72 9.3525 6.75 9.18 6.75 9C6.75 8.82 6.72 8.6475 6.6825 8.475L11.97 5.3925C12.375 5.7675 12.9075 6 13.5 6C14.745 6 15.75 4.995 15.75 3.75C15.75 2.505 14.745 1.5 13.5 1.5C12.255 1.5 11.25 2.505 11.25 3.75C11.25 3.93 11.28 4.1025 11.3175 4.275L6.03 7.3575C5.625 6.9825 5.0925 6.75 4.5 6.75C3.255 6.75 2.25 7.755 2.25 9C2.25 10.245 3.255 11.25 4.5 11.25C5.0925 11.25 5.625 11.0175 6.03 10.6425L11.37 13.7625C11.3325 13.92 11.31 14.085 11.31 14.25C11.31 15.4575 12.2925 16.44 13.5 16.44C14.7075 16.44 15.69 15.4575 15.69 14.25C15.69 13.0425 14.7075 12.06 13.5 12.06Z"
                              fill="#2D2D2D"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_1_973">
                              <rect width="18" height="18" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        {/* recommendation section */}
        <div className="col-lg-4 col-12 ps-5" style={{ textAlign: "left" }}>
          {" "}
          <div className="d-flex justify-content-between align-items-center border-bottom my-4">
            <div className="my-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <g clipPath="url(#clip0_1_842)">
                  <path
                    d="M9 1.5C6.0975 1.5 3.75 3.8475 3.75 6.75C3.75 10.6875 9 16.5 9 16.5C9 16.5 14.25 10.6875 14.25 6.75C14.25 3.8475 11.9025 1.5 9 1.5ZM5.25 6.75C5.25 4.68 6.93 3 9 3C11.07 3 12.75 4.68 12.75 6.75C12.75 8.91 10.59 12.1425 9 14.16C7.44 12.1575 5.25 8.8875 5.25 6.75Z"
                    fill="black"
                  />
                  <path
                    d="M9 8.625C10.0355 8.625 10.875 7.78553 10.875 6.75C10.875 5.71447 10.0355 4.875 9 4.875C7.96447 4.875 7.125 5.71447 7.125 6.75C7.125 7.78553 7.96447 8.625 9 8.625Z"
                    fill="black"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_842">
                    <rect width="18" height="18" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              {"  "}
              Nodia, India
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <g clipPath="url(#clip0_1_848)">
                  <path
                    d="M2.5 14.375V17.5H5.625L14.8417 8.28334L11.7167 5.15834L2.5 14.375ZM17.2583 5.86667C17.5833 5.54167 17.5833 5.01667 17.2583 4.69167L15.3083 2.74167C14.9833 2.41667 14.4583 2.41667 14.1333 2.74167L12.6083 4.26667L15.7333 7.39167L17.2583 5.86667Z"
                    fill="black"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_848">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
          <div className="d-flex">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <g opacity="0.5" clipPath="url(#clip0_1_853)">
                  <path
                    d="M7.33337 10H8.66671V11.3334H7.33337V10ZM7.33337 4.66671H8.66671V8.66671H7.33337V4.66671ZM7.99337 1.33337C4.31337 1.33337 1.33337 4.32004 1.33337 8.00004C1.33337 11.68 4.31337 14.6667 7.99337 14.6667C11.68 14.6667 14.6667 11.68 14.6667 8.00004C14.6667 4.32004 11.68 1.33337 7.99337 1.33337ZM8.00004 13.3334C5.05337 13.3334 2.66671 10.9467 2.66671 8.00004C2.66671 5.05337 5.05337 2.66671 8.00004 2.66671C10.9467 2.66671 13.3334 5.05337 13.3334 8.00004C13.3334 10.9467 10.9467 13.3334 8.00004 13.3334Z"
                    fill="black"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_853">
                    <rect width="16" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="ms-1" style={{ fontSize: "12px", opacity: "0.5" }}>
              Your location will help us serve better and extend a personalised
              experience.
            </div>
          </div>
        </div>
      </div>
      {/* cards */}
    </div>
  );
};

export default Posts;
