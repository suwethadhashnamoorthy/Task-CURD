import axios from "axios";
import { useFormik } from "formik";
import React from "react";

function AddStudents() {
  const formik = useFormik({
    initialValues: {
      name: "",
      class: "",
      date: "",
      place: "",
      age: "",
      teachername: "",
      class:"",
   }, 
    validate: (values) => {
      let errors = {};

      if (values.name === "") {
        errors.name = "Please Enter Name";
      } else if (values.class === "") {
        errors.name = "Please Enter Class";
      } else if (values.date === "") {
        errors.name = "Enter Date";
      } else if (values.place === "") {
        errors.name = "Enter the Place";
      } else if (values.age === "") {
        errors.name = "Enter Age";
      } else if (values.teachername === "") {
        errors.name = "Enter Teacher Name";
      } 
      return errors;
    },
    onSubmit: async (values) => { 
      // console.log(values)     
      let student = await axios.post(
        "https://64076f3677c1a905a0f9023f.mockapi.io/sample/jin",values
      );
      alert("Student Details Updated")
    },
      
    
  });
  return (
    <>
      <div className="container">
        <form onSubmit={formik.handleSubmit}>
          <div className="row">
            <div className="col-lg-6">
              <label>Student Name</label>
              <input
                className="form-control"
                type={"text"}
                value={formik.values.name}
                onChange={formik.handleChange}
                name="name"
              />
              <span>{formik.errors.name}</span>
            </div>
            <div className="col-lg-6">
              <label>Class</label>
              <input
                className="form-control"
                type={"text"}
                value={formik.values.class}
                onChange={formik.handleChange}
                name="class"
              />
            </div>
            <div className="col-lg-6">
              <label>Date</label>
              <input
                className="form-control"
                type={"text"}
                value={formik.values.date}
                onChange={formik.handleChange}
                name="date"
              />
            </div>
            <div className="col-lg-6">
              <label>Place</label>
              <input
                className="form-control"
                type={"text"}
                value={formik.values.place}
                onChange={formik.handleChange}
                name="place"
              />
            </div>
            <div className="col-lg-6">
              <label>Age</label>
              <input
                className="form-control"
                type={"text"}
                value={formik.values.age}
                onChange={formik.handleChange}
                name="age"
              />
            </div>
            <div className="col-lg-6">
              <label>Teacher Name</label>
              <input
                className="form-control"
                type={"text"}
                value={formik.values.teachername}
                onChange={formik.handleChange}
                name="teachername"
              />
            </div>
            
          </div>
          <div className="col-lg-6">
            <input
              className="btn btn-primary my-2"
              type={"submit"}
              value="Submit"
              disabled={!formik.isValid}
            />
          </div>
        </form>
      </div>
    </>
  );
}

export default AddStudents;
