import "../src/css/logo.css";

export function Logos() {
  return (
    <div className="logo-container">
      <div className="logo-img" alt="Southeastern Logo">
        <img src="assets/Southeastern.svg" />
      </div>
      <div className="logo-img" alt="Albertsons Logo">
        <img src="assets/Albertsons.svg" />
      </div>
      <div className="logo-img" alt="Loblaws Logo">
        <img src="assets/loblaws.svg" />
      </div>
      <div className="logo-img" alt="Ahold Delhaize Logo">
        <img src="assets/Ahold.svg" />
      </div>
      <div className="logo-img">
        <img src="assets/Total-Wine.svg" alt="Total Wine & More Logo" />
      </div>
    </div>
  );
}
