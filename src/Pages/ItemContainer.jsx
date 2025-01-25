import "./Css/engage.css";

export function ItemContainer(props) {
  return (
    <div className="item">
      <div className="engageitemcontainer">
        <div className="form-group">
          <br></br>{" "}
          <label className="form-control-456">
            <input className="checkbox" type="checkbox" name="checkbox-checked-state" defaultChecked="true"></input>
          </label>
        </div>
        <div className="col-sm-6 col-md-3 col-lg-3">
          <img className="col-sm-4 itemimage" src={props.image}></img>
        </div>

        <div className="col-sm-5">
          <div id="engageitemdescription">
            <p className="itemtitle" id="engagehead">
              {props.title} &nbsp;
            </p>
            <p className="itemtitle" id="price">
              {" "}
              ${props.newprice}&nbsp;
              <span className="itemtitle" id="strikethrough">
                {" "}
                ${props.oldprice}{" "}
              </span>
            </p>

            <p className="itemtitle" id="saving">
              {" "}
              You're saving ${props.saving} with{" "}
              <img
                className="savingsmmrewardsimage"
                src="https://res.cloudinary.com/dytb4ayqj/image/upload/v1709864810/mmrewardsnewlightgreen_cwppgu.png"
              />{" "}
              !
            </p>
          </div>
        </div>
        <span className="col-sm-12 col-md-3 itemtitle" id="points">
          <img
            className="pointsmmrewardsimage"
            src="https://res.cloudinary.com/dytb4ayqj/image/upload/v1710183359/mmlogorewardswhite2x_wfajad.png"
          />{" "}
          <br></br>
          {props.points} Points{" "}
        </span>
      </div>
      <hr></hr>
    </div>
  );
}
