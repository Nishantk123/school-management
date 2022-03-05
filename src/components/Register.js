import React, { useState } from "react";
import Header from "./Header";
import SideNav from "./SideNav";
import _ from "lodash";
import ChangeStateModal from "./ChangeStateModal";
const Register = () => {
  const registerData = [
    {
      parent_name: "test",
      child_name: "test2",
      parent_mobile: "898989898",
      enquired_class: "1",
      parent_email: "test@gmail.com",
    },
    {
      parent_name: "test",
      child_name: "test2",
      parent_mobile: "898989898",
      enquired_class: "1",
      parent_email: "test@gmail.com",
    },
    {
      parent_name: "test",
      child_name: "test2",
      parent_mobile: "898989898",
      enquired_class: "1",
      parent_email: "test@gmail.com",
    },
  ];

  const [showMove, setShowMove] = useState(false);
  const handleModalClose = () => {
    // setEdit(false);
    setShowMove(false);
  };
  const handlePageMove = () => {
    setShowMove(true);
  };
  return (
    <div>
      <Header />
      <div className=" d-flex">
        <SideNav classname="secondary" />
        <div className="w-100 px-3">
          {_.map(registerData, (data, index) => {
            return (
              <div className="list" key={index}>
                <div className="img-container">
                  <img
                    className="child-img"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTWC-gNXo5Wd22oY8_BGdHdlMLHcMXvWPWVA&usqp=CAU"
                  />
                </div>
                <div className="list_item">{data.child_name}</div>
                <div className="list_item">{data.parent_name}</div>
                <div className="list_item">{data.parent_mobile}</div>
                <div className="list_item">{data.parent_email}</div>
                <div className="list_item">{data.enquired_class}</div>
                <div className="list_item">
                  <img
                    className="edit-icon"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwRWHj5I3m_KJdm05iic2uYU2NtNdTssHZKQ&usqp=CAU"
                    // onClick={()=>handleEditModalOpen(data)}
                  />
                  <img
                    className="move-icon"
                    src="https://img.icons8.com/ios/500/forward-arrow.png"
                    onClick={handlePageMove}
                  />
                  <img
                    className="delete-icon"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Delete-button.svg/862px-Delete-button.svg.png"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <ChangeStateModal
        show={showMove}
        handleClose={handleModalClose}
        title="Move register to enrollment"
        current_page="register"
      />
    </div>
  );
};

export default Register;
