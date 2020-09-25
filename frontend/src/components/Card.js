import React from "react";
import "../styles/Card.css";
import Checkbox from "@material-ui/core/Checkbox";
import AccessTimeIcon from "@material-ui/icons/AccessTime";

const cardInfo = {
  name: "Advil",
  dosage: "2 pills",
  time: "8 am",
  checked: false,
};

function Card() {
  const [checked, setChecked] = React.useState(cardInfo.checked);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <div className="card__container">
      <div className="card__info">
        <h3>{cardInfo.name}</h3>
        <Checkbox color="primary" checked={checked} onChange={handleChange} />
      </div>

      <br />
      <div className="card__info">
        <p>{cardInfo.dosage}</p>

        <div className="card__info__time">
          <div style={{ paddingRight: "5px", paddingTop: "5px" }}>
            {<AccessTimeIcon />}
          </div>
          <p>{cardInfo.time}</p>
        </div>
      </div>

      {/* <Button
        variant="contained"
        color="primary"
        className={classes.button}
        startIcon={<EditIcon />}
      >
        Edit
      </Button> */}
    </div>
  );
}

export default Card;
