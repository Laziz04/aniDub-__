import { Input } from "antd";
import { useState } from "react";
import "../Dashbard/dashboard.css";
import { NavLink } from "react-router-dom";
import Animation from "../headerAnimation/Animation";

const AnidubDashboard = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [nextpage, setnextpage] = useState(false);

  const handleSubmit = () => {
    if (name !== "" && password === "1234") {
      setName("");
      setPassword("");
      setnextpage(true);
    }
  };

  return (
    <div
      className="background"
      style={{
        width: "100%",
        height: "100vh",
      }}
    >
      {!nextpage ? (
        <div
          style={{
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            padding: "30px",
            borderRadius: "10px",
            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
          }}
        >
          <div
            style={{
              width: "700px",
              height: "auto",
              borderRadius: "10px",
              boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
              display: "flex",
              justifyContent: "space-around",
            }}
            className="flex items-center"
          >
            <div
              style={{
                width: "50%",
                height: "500px",
                padding: "20px",
              }}
            >
              <div className="mt-10">
                <h1
                  style={{
                    fontSize: "20px",
                    fontWeight: "bold",
                  }}
                  className="text-center"
                >
                  <span
                    style={{
                      color: "#3498db",
                    }}
                  >
                    An
                  </span>
                  iDub
                </h1>

                <div className="mt-10">
                  <Input
                    placeholder="Ismingizni kiriting.."
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <Input
                    className="mt-3"
                    placeholder="Parolni kiriting.."
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <div className="flex justify-center mt-5">
                    <button onClick={handleSubmit} className="btn_login">
                      Kirish
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="bg_img"
              style={{
                width: "50%",
                height: "500px",
              }}
            >
              <img
                src="https://i.pinimg.com/736x/bf/3d/d8/bf3dd80b99d825dd3e16c3533a49d4fd.jpg"
                alt="Background Image"
                className="inner_img"
              />
            </div>
          </div>
        </div>
      ) : (
        <Animation />
      )}
    </div>
  );
};

export default AnidubDashboard;
