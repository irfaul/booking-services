import {Button} from "reactstrap";
import React from "react";
import axios from "axios";
import localforage from "localforage";
import { FaTrashAlt } from "react-icons/fa";

export default function HapusJadwal(props) {
  const handleClick = async (e) => {
    e.preventDefault();

    const token = await localforage.getItem("token");

    axios
      .delete("pbam/delete-schedule/" + props.id, {
        headers: {
          Authorization: `${token}`,
        },
      })
      .then((res) => {
         window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <Button color="danger" className="mr-2" onClick={handleClick}>
        <FaTrashAlt />
      </Button>
    </div>
  );
}
