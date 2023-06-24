export default function Nav() {
  return (
    <div className="nav flex mb-4">
      <div className="one flex">
        <div
          style={{ width: `100px`, height: "30px" }}
          className="span1 bg-green-300 me-3 rounded-lg"></div>
        <div
          style={{ width: `100px`, height: "30px" }}
          className="span2 bg-green-300 rounded-lg"></div>
      </div>
      <div
        style={{ width: `100px`, height: "30px" }}
        className="span3 bg-green-300 rounded-lg"></div>
    </div>
  );
}
