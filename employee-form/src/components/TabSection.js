
import React, { useState, useEffect } from 'react';
import ResumeForm from './ResumeForm';
import WorkInfoForm from './WorkInfoForm';
import PrivateInfoForm from './PrivateInfoForm';
import HRSettingsForm from './HRSettingsForm';

const TabSection = ({ onResumeChange, onSkillsChange, onWorkInfoChange, onPrivateInfoChange,onHRSettingsChange,formSubmitted }) => {
  const [activeTab, setActiveTab] = useState('resume');
  const [resumeData, setResumeData] = useState({});
  const [skillsData, setSkillsData] = useState([]);
  const [workInfoData, setWorkInfoData] = useState({});
  const [privateInfoData, setPrivateInfoData] = useState({});
  const [hrSettingsData, setHRSettingsData] = useState();

  


  const handleResumeChange = (data) => {
   
    setResumeData(data);
    onResumeChange(data);
  };

  const handleSkillsChange = (data) => {
    setSkillsData(data);
    onSkillsChange(data);
  };

  const handleWorkInfoChange = (data) => {
    setWorkInfoData(data);
    onWorkInfoChange(data);
  };
  const handlePrivateInfoChange = (data) => {
    setPrivateInfoData(data);
    onPrivateInfoChange(data);
  };
  const handleHRSettingsChange = (data) => {
    setHRSettingsData(data);
    onHRSettingsChange(data);
  };
  const renderTabContent = () => {
    switch (activeTab) {
      case 'resume':
        return <ResumeForm onChange={handleResumeChange} onSkillsChange={handleSkillsChange} />;
      case 'workInfo':
        return <WorkInfoForm onChange={handleWorkInfoChange} />;
      case 'privateInfo':
          return <PrivateInfoForm onChange={handlePrivateInfoChange} />;
      case 'hrSettings':
            return <HRSettingsForm onChange={handleHRSettingsChange}/>;
      default:
        return null;
    }
  };

  return (
    <div>
      <div className='flex gap-2'>
        <button type="button" onClick={() => setActiveTab('resume')}>Resume Upload</button>
        <button type="button" onClick={() => setActiveTab('workInfo')}>Work Information</button>
        <button type="button" onClick={() => setActiveTab('privateInfo')}>Private Information</button>
        <button type="button" onClick={() => setActiveTab('hrSettings')}>HR Settings</button>
      </div>
      <div>
        {renderTabContent()}
      </div>
    </div>
  );
};

export default TabSection;
