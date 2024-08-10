import { Input } from "antd";
import { useEffect, useState } from "react";
import axios from "axios";
import "./dashboard.css";
import OpenDashboard from "../openDashboard/openDashboard";

const AnidubDashboard = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [nextpage, setNextPage] = useState(false);

  const handleSubmit = async () => {
    if (name !== "" && password === "1234") {
      setName("");
      setPassword("");
      setNextPage(true);
      localStorage.setItem(`${name} Admen pagega kirdi`, "");

      try {
        await axios.post(
          `https://api.telegram.org/bot7404963914:AAEOCph3rzi-VwSKngEPzIlSl4t9AQYxa1c/sendMessage`,
          {
            chat_id: "-1002165833706", // Bu yerda chat_id o'zgarishi kerak
            text: `${name} Admen pagega kirdi`,
          }
        );
      } catch (error) {
        console.error("Xatolik:", error);
      }
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
        <OpenDashboard />
      )}
    </div>
  );
};

export default AnidubDashboard;
