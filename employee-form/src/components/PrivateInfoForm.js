import React, { useState, useEffect } from 'react';

const PrivateInfoForm = ({onChange} ) => {
    const [privateInfoData, setPrivateInfoData] = useState({
        address: '',
        email: '',
        phone: '',
        language: '',
        homeWorkDistance: '',
        privateCarPlate: '',
        maritalStatus: '',
        dependentChildren: '',
        certificateLevel: '',
        fieldOfStudy: '',
        school: '',
        emergencyContactName: '',
        emergencyContactPhone: '',
        nationality: '',
        identificationNo: '',
        passportNo: '',
        gender: '',
        dateOfBirth: '',
        placeOfBirth: '',
        countryOfBirth: '',
        nonResident: ''
    });
    useEffect(() => {
        onChange(privateInfoData);
      }, [privateInfoData, onChange]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPrivateInfoData({
          ...privateInfoData,
          [name]: value
        });
      };
    
    //   grid grid-cols-6 gap-4
   
   
    return (
        <div className="p-4">
            <h2 className="text-xl font-bold mb-4">Private Information Form</h2>
            <form className="flex  flex-row ">
                {/* Column 1: Private Contact */}
                <div className="col-span-2 flex-1 p-7">
                    <h3 className="text-lg font-semibold mb-2">Private Contact</h3>
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
                            <input
                                type="text"
                                id="address"
                                name="address"
                                placeholder="Enter address..."
                                className="w-full p-2 border border-gray-300 rounded"
                                value={privateInfoData.address}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Enter email..."
                                className="w-full p-2 border border-gray-300 rounded"
                                value={privateInfoData.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
                            <input
                                type="text"
                                id="phone"
                                name="phone"
                                placeholder="Enter phone..."
                                className="w-full p-2 border border-gray-300 rounded"
                                value={privateInfoData.phone}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="language" className="block text-sm font-medium text-gray-700">Language</label>
                            <input
                                type="text"
                                id="language"
                                name="language"
                                placeholder="Enter language..."
                                className="w-full p-2 border border-gray-300 rounded"
                                value={privateInfoData.language}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="homeWorkDistance" className="block text-sm font-medium text-gray-700">Home-Work Distance</label>
                            <input
                                type="text"
                                id="homeWorkDistance"
                                name="homeWorkDistance"
                                placeholder="Enter home-work distance..."
                                className="w-full p-2 border border-gray-300 rounded"
                                value={privateInfoData.homeWorkDistance}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="privateCarPlate" className="block text-sm font-medium text-gray-700">Private Car Plate</label>
                            <input
                                type="text"
                                id="privateCarPlate"
                                name="privateCarPlate"
                                placeholder="Enter private car plate..."
                                className="w-full p-2 border border-gray-300 rounded"
                                value={privateInfoData.privateCarPlate}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                                    {/* Column 2: Education */}
                <div className="col-span-1">
                    <h3 className="text-lg font-semibold mb-2 mt-4">Education</h3>
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="certificateLevel" className="block text-sm font-medium text-gray-700">Certificate Level</label>
                            <input
                                type="text"
                                id="certificateLevel"
                                name="certificateLevel"
                                placeholder="Enter certificate level..."
                                className="w-full p-2 border border-gray-300 rounded"
                                value={privateInfoData.certificateLevel}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="fieldOfStudy" className="block text-sm font-medium text-gray-700">Field of Study</label>
                            <input
                                type="text"
                                id="fieldOfStudy"
                                name="fieldOfStudy"
                                placeholder="Enter field of study..."
                                className="w-full p-2 border border-gray-300 rounded"
                                value={privateInfoData.fieldOfStudy}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="school" className="block text-sm font-medium text-gray-700">School</label>
                            <input
                                type="text"
                                id="school"
                                name="school"
                                placeholder="Enter school..."
                                className="w-full p-2 border border-gray-300 rounded"
                                value={privateInfoData.school}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                </div>
                    
                </div>

               

                 {/* Column 2: Family Status */}
                <div className="col-span-1 flex-1 p-7">
                    <h3 className="text-lg font-semibold mb-2">Family Status</h3>
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="maritalStatus" className="block text-sm font-medium text-gray-700">Marital Status</label>
                            <input
                                type="text"
                                id="maritalStatus"
                                name="maritalStatus"
                                placeholder="Enter marital status..."
                                className="w-full p-2 border border-gray-300 rounded"
                                value={privateInfoData.maritalStatus}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="dependentChildren" className="block text-sm font-medium text-gray-700">Number of Dependent Children</label>
                            <input
                                type="text"
                                id="dependentChildren"
                                name="dependentChildren"
                                placeholder="Enter number of dependent children..."
                                className="w-full p-2 border border-gray-300 rounded"
                                value={privateInfoData.dependentChildren}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                     {/* Column 4: Emergency Contact */}
                <div className="col-span-1">
                    <h3 className="text-lg font-semibold mb-2 mt-3">Emergency Contact</h3>
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="emergencyContactName" className="block text-sm font-medium text-gray-700">Contact Name</label>
                            <input
                                type="text"
                                id="emergencyContactName"
                                name="emergencyContactName"
                                placeholder="Enter emergency contact name..."
                                className="w-full p-2 border border-gray-300 rounded"
                                value={privateInfoData.emergencyContactName}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="emergencyContactPhone" className="block text-sm font-medium text-gray-700">Contact Phone</label>
                            <input
                                type="text"
                                id="emergencyContactPhone"
                                name="emergencyContactPhone"
                                placeholder="Enter emergency contact phone..."
                                className="w-full p-2 border border-gray-300 rounded"
                                value={privateInfoData.emergencyContactPhone}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    
                </div>
                 {/* Column 5: Citizenship */}
                 <div className="col-span-1">
                    <h3 className="text-lg font-semibold mt-3 mb-3">Citizenship</h3>
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="nationality" className="block text-sm font-medium text-gray-700">Nationality</label>
                            <input
                                type="text"
                                id="nationality"
                                name="nationality"
                                placeholder="Enter nationality..."
                                className="w-full p-2 border border-gray-300 rounded"
                                value={privateInfoData.nationality}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="identificationNo" className="block text-sm font-medium text-gray-700">Identification No</label>
                            <input
                                type="text"
                                id="identificationNo"
                                name="identificationNo"
                                placeholder="Enter identification number..."
                                className="w-full p-2 border border-gray-300 rounded"
                                value={privateInfoData.identificationNo}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="passportNo" className="block text-sm font-medium text-gray-700">Passport No</label>
                            <input
                                type="text"
                                id="passportNo"
                                name="passportNo"
                                placeholder="Enter passport number..."
                                className="w-full p-2 border border-gray-300 rounded"
                                value={privateInfoData.passportNo}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="gender" className="block text-sm font-medium text-gray-700">Gender</label>
                            <input
                                type="text"
                                id="gender"
                                name="gender"
                                placeholder="Enter gender..."
                                className="w-full p-2 border border-gray-300 rounded"
                                value={privateInfoData.gender}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="dateOfBirth" className="block text-sm font-medium text-gray-700">Date of Birth</label>
                            <input
                                type="text"
                                id="dateOfBirth"
                                name="dateOfBirth"
                                placeholder="Enter date of birth..."
                                className="w-full p-2 border border-gray-300 rounded"
                                value={privateInfoData.dateOfBirth}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="placeOfBirth" className="block text-sm font-medium text-gray-700">Place of Birth</label>
                            <input
                                type="text"
                                id="placeOfBirth"
                                name="placeOfBirth"
                                placeholder="Enter place of birth..."
                                className="w-full p-2 border border-gray-300 rounded"
                                value={privateInfoData.placeOfBirth}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="countryOfBirth" className="block text-sm font-medium text-gray-700">Country of Birth</label>
                            <input
                                type="text"
                                id="countryOfBirth"
                                name="countryOfBirth"
                                placeholder="Enter country of birth..."
                                className="w-full p-2 border border-gray-300 rounded"
                                value={privateInfoData.countryOfBirth}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="nonResident" className="block text-sm font-medium text-gray-700">Non-resident</label>
                            <input
                                type="text"
                                id="nonResident"
                                name="nonResident"
                                placeholder="Enter non-resident status..."
                                className="w-full p-2 border border-gray-300 rounded"
                                value={privateInfoData.nonResident}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                </div>                </div>

               

               

            </form>
        </div>

);
};

export default PrivateInfoForm;



