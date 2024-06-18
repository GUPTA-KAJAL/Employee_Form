import React, { useState, useEffect } from 'react';

const WorkInfoForm = ({ onChange }) => {
  const [workInfoData, setWorkInfoData] = useState({
    workAddress: '',
    workLocation: '',
    expenseApprover: '',
    timeOffApprover: '',
    workingHours: '',
    timezone: ''
  });

  useEffect(() => {
    onChange(workInfoData);
  }, [workInfoData, onChange]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setWorkInfoData({
      ...workInfoData,
      [name]: value
    });
  };

  return (

    <div className="p-4">
    <h2 className="text-xl font-bold mb-4">Work Information Form</h2>
    <form className="space-y-4" >
        {/* Location */}
        <div>
            <h3 className="text-lg font-semibold mb-2">Location</h3>
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label htmlFor="workAddress" className="block text-sm font-medium text-gray-700">Work Address</label>
                    <input
                        type="text"
                        id="workAddress"
                        name="workAddress"
                        value={workInfoData.workAddress}
                        onChange={handleChange}
                        placeholder="Enter work address..."
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                </div>
                <div>
                    <label htmlFor="workLocation" className="block text-sm font-medium text-gray-700">Work Location</label>
                    <input
                        type="text"
                        id="workLocation"
                        name="workLocation"
                        value={workInfoData.workLocation}
                        onChange={handleChange}
                        placeholder="Enter work location..."
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                </div>
            </div>
        </div>

        {/* Approvers */}
        <div>
            <h3 className="text-lg font-semibold mb-2">Approvers</h3>
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label htmlFor="expenseApprover" className="block text-sm font-medium text-gray-700">Expense Approver</label>
                    <input
                        type="text"
                        id="expenseApprover"
                        name="expenseApprover"
                        value={workInfoData.expenseApprover}
                        onChange={handleChange}
                        placeholder="Enter expense approver..."
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                </div>
                <div>
                    <label htmlFor="timeOffApprover" className="block text-sm font-medium text-gray-700">Time Off Approver</label>
                    <input
                        type="text"
                        id="timeOffApprover"
                        name="timeOffApprover"
                        value={workInfoData.timeOffApprover}
                        onChange={handleChange}
                        placeholder="Enter time off approver..."
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                </div>
            </div>
        </div>

        {/* Schedule */}
        <div>
            <h3 className="text-lg font-semibold mb-2">Schedule</h3>
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label htmlFor="workingHours" className="block text-sm font-medium text-gray-700">Working Hours</label>
                    <input
                        type="text"
                        id="workingHours"
                        name="workingHours"
                        value={workInfoData.workingHours}
                        onChange={handleChange}
                        placeholder="Enter working hours..."
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                </div>
                <div>
                    <label htmlFor="timezone" className="block text-sm font-medium text-gray-700">Timezone</label>
                    <input
                        type="text"
                        id="timezone"
                        name="timezone"
                        value={workInfoData.timezone}
                        onChange={handleChange}
                        placeholder="Enter timezone..."
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                </div>
            </div>
        </div>

  
    </form>
</div>
  );
};

export default WorkInfoForm;



