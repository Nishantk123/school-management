import React, { useState } from "react";
import _ from "lodash";
import EditModal from "./EditModal";

const Enquiry = () => {
  const enquiryData = [
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
  const [edit, setEdit] = useState(false)
  const handleEditModalOpen = () =>{
    setEdit(true)
  }
  const handleModalClose = () =>{
      setEdit(false);
  }
  return (
    <div>
      <div className="container-fluid">
        {
          // enquiryData.map((data,index)=>{
          //     return(
          //         <div>
          //             Hi
          //         </div>
          //     )
          // })

          _.map(enquiryData, (data, index) => {
            return (
              <div className="list">
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
                    onClick={handleEditModalOpen}
                  />
                  <img
                    className="delete-icon"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Delete-button.svg/862px-Delete-button.svg.png"
                  />
                </div>
              </div>
            );
          })
        }
      </div>
      <EditModal show={edit} handleClose={handleModalClose}/>
    </div>
  );
};

export default Enquiry;
