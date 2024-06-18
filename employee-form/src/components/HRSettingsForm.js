import React, { useState, useEffect } from 'react';

const HRSettingsForm = ({onChange}) => {
    const [hrSettingsData, setHRSettingsData] = useState({
        employeeType:'',
        relatedUser:'',
        registrationNumber:'',
        jobPosition:'',
        hourlyCost:'',
        fleetMobilityCard:'',
        pinCode:'',
        badgeID:''
    });
    
    useEffect(() => {
        onChange(hrSettingsData);
      }, [hrSettingsData, onChange]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setHRSettingsData({
      ...hrSettingsData,
      [name]: value
    });
  };

    return (
        <div className="p-4">
            <h2 className="text-xl font-bold mb-4">HR Settings Form</h2>
            <form className="grid grid-cols-2 gap-4">
              
                <div>
                    <h3 className="text-lg font-semibold mb-2">Status</h3>
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="employeeType" className="block text-sm font-medium text-gray-700">Employee Type</label>
                            <input
                                type="text"
                                id="employeeType"
                                name="employeeType"
                                placeholder="Enter employee type..."
                                className="w-full p-2 border border-gray-300 rounded"
                                value={hrSettingsData.employeeType}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="relatedUser" className="block text-sm font-medium text-gray-700">Related User</label>
                            <input
                                type="text"
                                id="relatedUser"
                                name="relatedUser"
                                placeholder="Enter related user..."
                                className="w-full p-2 border border-gray-300 rounded"
                                value={hrSettingsData.relatedUser}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                </div>

               
                <div>
                    <h3 className="text-lg font-semibold mb-2">Payroll</h3>
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="registrationNumber" className="block text-sm font-medium text-gray-700">Registration Number</label>
                            <input
                                type="text"
                                id="registrationNumber"
                                name="registrationNumber"
                                placeholder="Enter registration number..."
                                className="w-full p-2 border border-gray-300 rounded"
                                value={hrSettingsData.registrationNumber}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="jobPosition" className="block text-sm font-medium text-gray-700">Job Position</label>
                            <input
                                type="text"
                                id="jobPosition"
                                name="jobPosition"
                                placeholder="Enter job position..."
                                className="w-full p-2 border border-gray-300 rounded"
                                value={hrSettingsData.jobPosition}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                </div>

               
                <div>
                    <h3 className="text-lg font-semibold mb-2">Application Settings</h3>
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="hourlyCost" className="block text-sm font-medium text-gray-700">Hourly Cost</label>
                            <input
                                type="text"
                                id="hourlyCost"
                                name="hourlyCost"
                                placeholder="Enter hourly cost..."
                                className="w-full p-2 border border-gray-300 rounded"
                                value={hrSettingsData.hourlyCost}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="fleetMobilityCard" className="block text-sm font-medium text-gray-700">Fleet Mobility Card</label>
                            <input
                                type="text"
                                id="fleetMobilityCard"
                                name="fleetMobilityCard"
                                placeholder="Enter fleet mobility card..."
                                className="w-full p-2 border border-gray-300 rounded"
                                value={hrSettingsData.fleetMobilityCard}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                </div>

            
                <div>
                    <h3 className="text-lg font-semibold mb-2">Attendance</h3>
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="pinCode" className="block text-sm font-medium text-gray-700">Pin Code</label>
                            <input
                                type="text"
                                id="pinCode"
                                name="pinCode"
                                placeholder="Enter pin code..."
                                className="w-full p-2 border border-gray-300 rounded"
                                value={hrSettingsData.pinCode}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="badgeID" className="block text-sm font-medium text-gray-700">Badge ID</label>
                            <input
                                type="text"
                                id="badgeID"
                                name="badgeID"
                                placeholder="Enter badge ID..."
                                className="w-full p-2 border border-gray-300 rounded"
                                value={hrSettingsData.badgeID}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default HRSettingsForm;
