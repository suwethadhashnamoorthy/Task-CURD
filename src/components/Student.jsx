import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function Student() {
  const [student, setStudent] = useState([])
  const [isLoading, setLoading] = useState(false)
  
  useEffect(() => {
onLoad()

  },[])
  let onLoad = async () => {
    setLoading(true)
    let student= await axios.get("https://64076f3677c1a905a0f9023f.mockapi.io/sample/jin");
    setStudent(student.data)
    setLoading(false)
  }
  let studDelete = async (id) => {
    try {
      await axios.delete(`https://64076f3677c1a905a0f9023f.mockapi.io/sample/jin/${id}`);
      onLoad()
    } catch (error){
      
   }
 }
  return (
    <div>
      <div class="d-sm-flex align-items-center justify-content-between mb-4 m-4">
        <h1 class="h3 mb-0 text-gray-800">Dashboard</h1>
        <Link
          to="/add-stud-info"
          class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        >
          <i class="fas fa-download fa-sm text-white-50"></i> Add Student Detail
        </Link>
      </div>
      {isLoading ? (
        <span>Loading...</span>
      ) : (
        <div class="card shadow mb-4">
          <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">
              Students DataTables
            </h6>
          </div>
          <div class="card-body">
            <div class="table-responsive">
              <table
                class="table table-bordered"
                id="dataTable"
                width="100%"
                cellspacing="0"
              >
                <thead>
                  <tr>
                    <th>S.No</th>
                    <th>Student Name</th>
                    <th>Class</th>
                    <th>Date-Of-Joining</th>
                    <th>Place</th>
                    <th>Age</th>
                    <th>Teacher Name</th>
               
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {student.map((student, index) => {
                    return (
                      <tr>
                        <td>{index + 1}</td>
                        <td>{student.name}</td>
                        <td>{student.class}</td>
                        <td>{student.date}</td>
                        <td>{student.place}</td>
                        <td>{student.age}</td>
                        <td>{student.teachername}</td>
                 

                        <td>
                          <Link
                            to={`/student/${student.id}`}
                            className="btn btn-sm btn-warning mr-2"
                          >
                            View
                          </Link>
                          <Link to={`/student/edit/${student.id}`} className="btn btn-sm btn-primary mr-2">
                            Edit
                          </Link>
                          <Link onClick={() => {studDelete(student.id)

                          }} className="btn btn-sm btn-danger mr-2">
                            Delete
                          </Link>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Student;