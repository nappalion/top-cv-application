import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import FancyInput from "./components/FancyInput";
import "./App.css";
import "./styles/form.css";

function App() {
  const [fields, setFields] = useState({
    name: "",
    email: "",
    phoneNum: "",
    schoolName: "",
    titleStudy: "",
    dateStudy: "",
    companyName: "",
    positionTitle: "",
    mainResponsibilities: "",
    startDate: "",
    endDate: "",
  });
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name);
    setFields({ ...fields, [name]: value });
  };

  const onSubmit = () => {
    setIsSubmit(!isSubmit);
  };
  // need a way to grab all the input items and submit it
  return (
    <>
      {!isSubmit ? (
        <div>
          <div className="section">
            <FancyInput
              label={"Name"}
              name={"name"}
              value={fields.name}
              handleChange={handleChange}
            />
            <FancyInput
              label={"Email"}
              name={"email"}
              value={fields.email}
              handleChange={handleChange}
            />
            <FancyInput
              label={"Phone Number"}
              name={"phoneNum"}
              value={fields.phoneNum}
              handleChange={handleChange}
            />
          </div>
          <div className="section">
            <FancyInput
              label={"School Name"}
              name={"schoolName"}
              value={fields.schoolName}
              handleChange={handleChange}
            />
            <FancyInput
              label={"Title of Study"}
              name={"titleStudy"}
              value={fields.titleStudy}
              handleChange={handleChange}
            />
            <FancyInput
              label={"Date of Study"}
              name={"dateStudy"}
              value={fields.dateStudy}
              handleChange={handleChange}
            />
          </div>
          <div className="section">
            <FancyInput
              label={"Company Name"}
              name={"companyName"}
              value={fields.companyName}
              handleChange={handleChange}
            />
            <FancyInput
              label={"Position Title"}
              name={"positionTitle"}
              value={fields.positionTitle}
              handleChange={handleChange}
            />
            <FancyInput
              label={"Main Responsibilities"}
              name={"mainResponsibilities"}
              value={fields.mainResponsibilities}
              handleChange={handleChange}
            />
            <FancyInput
              label={"Start Date"}
              name={"startDate"}
              value={fields.startDate}
              handleChange={handleChange}
            />
            <FancyInput
              label={"End Date"}
              name={"endDate"}
              value={fields.endDate}
              handleChange={handleChange}
            />
          </div>
        </div>
      ) : (
        <div>{JSON.stringify(fields)}</div>
      )}
      <button onClick={onSubmit}>{isSubmit ? "Edit" : "Submit"}</button>
    </>
  );
}

export default App;
