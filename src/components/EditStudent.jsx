import axios from "axios";
import { useFormik } from "formik";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditStudent() {
  let params = useParams();
  let navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      name: "",
      class: "",
      date: "",
      place: "",
      age: "",
      teachname: "",
    
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
      } else if (values.teachname === "") {
        errors.name = "Enter Teacher Name";
      } 

      return errors;
    },
    onSubmit: async (values) => {
      await axios.put(
        `https://64076f3677c1a905a0f9023f.mockapi.io/sample/jin/${params.studentid}`,
        values
      );
      alert("Student details Updated");
      navigate("/student");
    },
  });

  useEffect(() => {
    loadUser();
  }, []);

  let loadUser = async () => {
    try {
      let student = await axios.get(
        `https://64076f3677c1a905a0f9023f.mockapi.io/sample/jin/${params.studentid}`
      );
      formik.setValues({
        name: student.data.name,
        class: student.data.class,
        date: student.data.date,
        place: student.data.place,
        age: student.data.age,
        teachname: student.data.teachname,
      });
    } catch (error) {}
  };
  return (
    <div className="container">
      <form onSubmit={formik.handleSubmit}>
        <div className="row">
          <div className="col-lg-6">
            <label>Name</label>
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
          <div className="col-lg-6">
            <input
              className="btn btn-primary mt-2"
              type={"submit"}
              value="Submit"
              disabled={!formik.isValid}
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default EditStudent;
