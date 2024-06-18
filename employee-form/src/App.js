
import React, { useState } from 'react';
import axios from 'axios';
import EmployeeDetails from './components/EmployeeDetails';
import TabSection from './components/TabSection';

const App = () => {
  const [employeeDetails, setEmployeeDetails] = useState({});
  const [resumeData, setResumeData] = useState({});
  const [skillsData, setSkillsData] = useState([]);
  const [workInfoData, setWorkInfoData] = useState({});
  const [privateInfoData, setPrivateInfoData] = useState({});
  const [hrSettingsData, setHRSettingsData] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false); // Track if form is submitted

  const handleEmployeeDetailsChange = (data) => {
    setEmployeeDetails(data);
  };

  const handleResumeChange = (data) => {
    setResumeData(data);
  };

  const handleSkillsChange = (data) => {
    setSkillsData(data);
  };

  const handleWorkInfoChange = (data) => {
    setWorkInfoData(data);
  };
  const handlePrivateInfoChange = (data) => {
    setPrivateInfoData(data);
  };
  const handleHRSettingsChange = (data) => {
    setHRSettingsData(data);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const combinedData = {
      ...employeeDetails,
      ...resumeData,
      skills: skillsData,
      ...workInfoData,
      ...privateInfoData,
      ...hrSettingsData
    };

    console.log('Submitting data:', combinedData);

    try {
      const response = await axios.post('http://localhost:8080/api/submit', combinedData);
      console.log(response.data);
      setFormSubmitted(true); // Update formSubmitted state after successful submission
      alert("Form Submitted successfully")

    } catch (error) {
      console.error('There was an error submitting the form!', error);
      alert("All fields required")
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className='flex flex-col items-center'>
          <div className='w-full border-b border-gray-300'>
            <EmployeeDetails onChange={handleEmployeeDetailsChange} />
          </div>
          <div className='w-full'>
            <TabSection
              onResumeChange={handleResumeChange}
              onSkillsChange={handleSkillsChange}
              onWorkInfoChange={handleWorkInfoChange}
              onPrivateInfoChange={handlePrivateInfoChange}
              onHRSettingsChange={handleHRSettingsChange}
              formSubmitted={formSubmitted}
            />
          </div>
      <button type="submit">Submit</button>
        </div>
          
      </form>
    </div>
  );
};

export default App;
