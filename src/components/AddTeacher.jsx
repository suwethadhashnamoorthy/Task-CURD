import { useFormik } from 'formik';
import React from 'react'

function AddTeacher() {
  const formik = useFormik(
    {
      initialValues: {
        name: "",
        class: "",
        section: "",
        date: "",
        age: "",
      }

    }
  )
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 p-2">
            <label>Teacher Name</label>
            <input className="form-control" type="text" />
            <label>Class</label>
            <input className="form-control" type="text" />
            <label>Section</label>
            <input className="form-control" type="text" />
            <label>Date Of Joining</label>
            <input className="form-control" type="text" />
            <label>Age</label>
            <input className="form-control" type="text" />
          </div>
        </div>
        <div className="col-lg-6">
          <input
            className="btn btn-primary my-2"
            type={"submit"}
            value="Submit"
          />
        </div>
      </div>
    </>
  );
}

export default AddTeacher;