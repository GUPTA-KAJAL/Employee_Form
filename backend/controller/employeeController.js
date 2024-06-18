import {Employee} from "../models/employeeModel.js"



  export const submission=async(req,res)=>{
    try {
        const newEmployee = new Employee(req.body);
        await newEmployee.save();
        res.status(201).send(newEmployee);
      } catch (error) {
        console.error('Error saving employee:', error);
        res.status(400).send({ error: error.message });
      }
  }