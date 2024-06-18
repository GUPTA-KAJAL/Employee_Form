import React, { useState, useEffect } from 'react';

const EmployeeDetails = ({ onChange }) => {
  const [employeeData, setEmployeeData] = useState({
    name: '',
    workMobile:'',
    workPhone:'',
    workEmail:'',
    department:'',
    jobPosition:'',
    manager: '',
    coach: ''
  });

  useEffect(() => {
    onChange(employeeData);
  }, [employeeData, onChange]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployeeData({
      ...employeeData,
      [name]: value
    });
  };

  return (
   
    <div className="p-4 border-b border-gray-300">
        <div>
            <label className="text-2xl text-gray-400 font-bold">Employee's Name </label>
            <input type="text" name="name" value={employeeData.name}  onChange={handleChange} className=" px-2 border border-gray-300 rounded" />
        </div>
    
    
    <form className="grid grid-cols-2 gap-4">
        <div className="space-y-4">
            <div>
                <label className="block text-sm font-medium text-gray-700">Work Mobile</label>
                <input
                    type="text"
                    name="workMobile"
                    value={employeeData.workMobile}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700">Work Phone</label>
                <input
                    type="text"
                    name="workPhone"
                    value={employeeData.workPhone}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700">Work Email</label>
                <input
                    type="email"
                    name="workEmail"
                    value={employeeData.workEmail}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                />
            </div>
        </div>
        <div className="space-y-4">
            <div>
                <label className="block text-sm font-medium text-gray-700">Department</label>
                <input
                    type="text"
                    name="department"
                    value={employeeData.department}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700">Job Position</label>
                <input
                    type="text"
                    name="jobPosition"
                    value={employeeData.jobPosition}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700">Manager</label>
                <input
                    type="text"
                    name="manager"
                    value={employeeData.manager}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700">Coach</label>
                <input
                    type="text"
                    name="coach"
                    value={employeeData.coach}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                />
            </div>
        </div>
       
    </form>
</div>
  );
};

export default EmployeeDetails;
