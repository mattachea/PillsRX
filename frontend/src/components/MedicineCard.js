import React from "react";
import { Button } from "reactstrap";
import "../styles/MedicineCard.css";

export default function MedicineCard({ name }) {
  return (
    <div className="medicine_card_container">
      <p className="medicine_card_name">{name}</p>

      <Button color="primary">edit</Button>
    </div>
  );
}
