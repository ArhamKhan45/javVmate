import "../../../scss/profileinfo.scss";

export default function Profileinfo({ title, basicdata }) {
  const showdata = basicdata.map((item, index) => {
    // console.log(Object.keys(item));
    let mykey = Object.keys(item);
    mykey = mykey[0];

    // console.log(basicdata.length);
    if (basicdata.length == 1) {
      return (
        <div key={index} className="single-item">
          <p>{item[mykey]}</p>
        </div>
      );
    } else {
      return (
        <div key={index} className="many-items">
          <p>
            <span>{mykey}:</span>
            <b>{item[mykey]}</b>
          </p>
        </div>
      );
    }
  });

  return (
    <div className="profile-info">
      <h4>{title}</h4>
      <div className="profile-main-info">{showdata}</div>
    </div>
  );
}

{
  /* <p key={index}>
        <span>{mykey}: </span> <b>{item[mykey]}</b>
      </p> */
}
