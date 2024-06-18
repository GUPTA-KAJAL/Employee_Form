import React, { useState, useEffect } from 'react';

const ResumeForm = ({ onChange, onSkillsChange }) => {
  const [resumeData, setResumeData] = useState({
    resume: ''
  });

  const [skills, setSkills] = useState(['']);

  useEffect(() => {
    onChange(resumeData);
  }, [resumeData, onChange]);

  useEffect(() => {
    onSkillsChange(skills);
  }, [skills, onSkillsChange]);

  const handleResumeChange = (e) => {
    const { name, value } = e.target;
    setResumeData({
      ...resumeData,
      [name]: value
    });
  };

  const handleSkillChange = (index, e) => {
    const newSkills = [...skills];
    newSkills[index] = e.target.value;
    setSkills(newSkills);
  };

  const addSkill = () => {
    setSkills([...skills, '']);
  };

  return (
    <div className="p-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h3 className="text-lg font-semibold mb-2">Resume</h3>
          <form className="space-y-4">
            <div>
              <label htmlFor="resumeUpload" className="block text-sm font-medium text-gray-700">Upload Resume</label>
              <input
                type="file"
                id="resumeUpload"
                name="resume"
                onChange={handleResumeChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
          </form>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Skills</h3>
          <form className="space-y-4">
            {skills.map((skill, index) => (
              <div key={index}>
                <label htmlFor={`skill${index}`} className="block text-sm font-medium text-gray-700">Skill {index + 1}</label>
                <div className="flex">
                  <input
                    type="text"
                    id={`skill${index}`}
                    name={`skill${index}`}
                    value={skill}
                    onChange={(e) => handleSkillChange(index, e)}
                    placeholder="Enter skill..."
                    className="w-full p-2 border border-gray-300 rounded mr-2"
                  />
                  {index === skills.length - 1 && (
                    <button
                      type="button"
                      onClick={addSkill}
                      className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      Add Skill
                    </button>
                  )}
                </div>
              </div>
            ))}
   
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResumeForm;

