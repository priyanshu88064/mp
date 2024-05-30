import { useEffect, useState } from "react";

function Home() {
  const [data,setData] = useState({age:"18393",gender:"2",hi:"168",we:"62",sbp:"110",dbp:"80",chol:"1",glu:"1",smoking:"0",alc:"0",phy:"1"});

  const [result, setResult] = useState(3);

  const handleForm = e => {
    setData(prev=>{
      return {...prev,[e.target.id]:e.target.value};
    });
  }

  const handleSubmit = async () => {

    console.log("JFkdskjk")

    const response = await fetch("http://127.0.0.1:5000/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        age:data.age,
        gender:data.gender,
        hi:data.hi,
        we:data.we,
        sbp:data.sbp,
        dbp:data.dbp,
        chol:data.chol,
        glu:data.glu,
        smoking:data.smoking,
        alc:data.alc,
        phy:data.phy
      }),
    });

    const data = await response.json();
    setResult(data.result);
  };

  return (
    <div className="container">
      {/* heading */}
      <div>
        <div className="shine">CARDIOVUSCULAR DISEASE PREDICTION USING LSTM</div>
      </div>

      {/* form */}
      <div className="xyz">
        <div className="e-card playing">
          <div className="image"></div>

          <div className="wave"></div>
          <div className="wave"></div>
          <div className="wave"></div>

          <div className="infotop"></div>

          <div className="login-box">
            <form>
              <div className="user-box">
                <input onChange={handleForm} value={data.age} type="number" id="age" />
                <label>Age (days)</label>
              </div>
              <div className="user-box">
                <input onChange={handleForm} value={data.hi} type="number" id="gender" />
                <label>Height (cm)</label>
              </div>
              <div className="user-box">
                <input onChange={handleForm} value={data.we} type="number" id="hi" />
                <label>Weight (kg)</label>
              </div>
              <div className="user-box">
                <input onChange={handleForm} value={data.gender} type="number" id="we" />
                <label>Gender (1: Male | 2: Female)</label>
              </div>
              <div className="user-box">
                <input onChange={handleForm} value={data.sbp} type="number" id="sbp" />
                <label>Systolic blood pressure </label>
              </div>
              <div className="user-box">
                <input onChange={handleForm} value={data.dbp} type="number" id="dbp" />
                <label>Diastolic blood pressure</label>
              </div>
              <div className="user-box">
                <input onChange={handleForm} value={data.chol} type="number" id="chol" />
                <label>
                  Cholesterol ( 1: normal, 2: above normal, 3: well above normal
                  )
                </label>
              </div>
              <div className="user-box">
                <input onChange={handleForm} value={data.glu} type="number" id="glu" />
                <label>
                  Glucose ( 1: normal, 2: above normal, 3: well above normal )
                </label>
              </div>
              <div className="user-box">
                <input onChange={handleForm} value={data.smoking} type="number" id="smoking" />
                <label>Smoking (0: No | 1: Yes)</label>
              </div>
              <div className="user-box">
                <input onChange={handleForm} value={data.alc} type="number" id="alc" />
                <label>Alcohol intake (0: No | 1: Yes)</label>
              </div>
              <div className="user-box">
                <input onChange={handleForm} value={data.phy} type="number" id="phy" />
                <label>Physical activity (0: No | 1: Yes)</label>
              </div>
              {/* <center onSubmit={()=>handleSubmit()}>
                <a href="#">
                  SEND
                  <span></span>
                </a>
                {result}
              </center> */}
              <button onClick={handleSubmit}>SEND</button>
            </form>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}

const Footer = () => {
  return (
    <>
      <div className="parent">
        <div className="card">
          <span className="card-title" style={{ color: "black" }}>
            Created by:
          </span>
          <div className="content-box">
            <span className="card-title">► Mohit Singh Rawat</span>
            <span className="card-title">► Abhay Negi</span>
            <span className="card-title">► Amul Gairola</span>
            <span className="card-title">► Priyanshu Tiwari</span>
          </div>
        </div>
      </div>
    </>
  );
};

const Heart = () => {
  return (
    <>
      <div className="yy">
        <div className="heartbeatloader">
          <svg
            className="svgdraw"
            width="100%"
            height="100%"
            viewBox="0 0 150 400"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="path"
              d="M 0 200 l 40 0 l 5 -40 l 5 40 l 10 0 l 5 15 l 10 -140 l 10 220 l 5 -95 l 10 0 l 5 20 l 5 -20 l 30 0"
              fill="transparent"
              stroke-width="4"
              stroke="black"
            ></path>
          </svg>
          <div className="innercircle"></div>
          <div className="outercircle"></div>
        </div>
      </div>
    </>
  );
};

function App() {
  const [is, setIs] = useState(false);

  useEffect(() => {
    const x = setTimeout(() => {
      setIs(true);
    }, 5000);

    return () => {
      clearTimeout(x);
    };
  }, []);

  return <div className="home">{is ? <Home /> : <Heart />}</div>;
}
export default App;
