import React from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

const AdminButtons = ({ button1Label, button2Label, button3Label }) => {
  return (
    <div className="float-right">
      <ButtonGroup aria-label="Basic example">
        <Button variant="outline-primary" className="mx-2">
          {button1Label}
        </Button>
        <Button variant="outline-primary" className="mx-2">
          {button2Label}
        </Button>
        <Button variant="outline-primary" className="mx-2">
          {button3Label}
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default AdminButtons;
