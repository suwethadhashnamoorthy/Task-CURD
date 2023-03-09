import React from 'react'
import { Link } from 'react-router-dom';

function Teacher() {
  return (
    <div>
      <div class="d-sm-flex align-items-center justify-content-between mb-4 m-4">
        <h1 class="h3 mb-0 text-gray-800">Teachers Dashboard</h1>
        <Link to="/add-teacher-info"
          class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        >
          <i class="fas fa-download fa-sm text-white-50"></i> Add Teacher
          Detail
        </Link>
      </div>

      <div class="card shadow mb-4">
        <div class="card-header py-3">
          <h6 class="m-0 font-weight-bold text-primary">Teachers DataTables</h6>
        </div>
        <div class="card-body">
          <div class="table-responsive">
            <table
              class="table table-bordered"
              id="dataTable"
              width="100%"
              cellspacing="0">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Department</th>
                  <th>Place</th>
                  <th>Date-Of-Joining</th>
                  <th>Age</th>
                </tr>
              </thead>              
              <tbody>
                <tr>
                  <td>Namjoon</td>
                  <td>English</td>
                  <td>Dongjak</td>
                  <td>12/09/1993</td>
                  <td>29</td>
                </tr>

                <tr>
                  <td>Seokjin</td>
                  <td>Language</td>
                  <td>Anyang</td>
                  <td>04/12/1992</td>
                  <td>30</td>
                </tr>

                <tr>
                  <td>Min Yunki</td>
                  <td>Music</td>
                  <td>Taejeon-dong</td>
                  <td>09/03/1993</td>
                  <td>30</td>
                </tr>
                <tr>
                  <td>Hoseok</td>
                  <td>Dance</td>
                  <td>Gwangju</td>
                  <td>218/02/1994</td>
                  <td>29</td>
                </tr>
                <tr>
                  <td>Jimin Park</td>
                  <td>Chemistry</td>
                  <td>Busan</td>
                  <td>13/10/1995</td>
                  <td>27</td>
                </tr>
                <tr>
                  <td>Taehyung</td>
                  <td>Maths</td>
                  <td>Bisan-dong</td>
                  <td>30/12/1995</td>
                  <td>27</td>
                </tr>
                <tr>
                  <td>Jeon Jungkook</td>
                  <td>Drawing</td>
                  <td>Busan</td>
                  <td>01/09/1997</td>
                  <td>25</td>
                </tr>

              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Teacher