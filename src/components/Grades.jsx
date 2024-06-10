import React, {useState} from 'react';
import './grades.css';
//DataTable imports
import Papa from "papaparse";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

const Grades = (props) => {

    let rowsArray = [];
    let valuesArray = [];
   // getBuyer()const
    const selectGrades=(event)=>{

        Papa.parse(event.target.files[0], {
            header: true,
            skipEmptyLines: true,
            complete: function (results) {
             //   console.log(results.data)
                results.data.map((d) => {
                    rowsArray.push(Object.keys(d));
                    valuesArray.push(Object.values(d));
                });
            },
        });
    }

    const uploadGrades = () => {

        let description="";
        const buyerid=document.getElementById("buyerid").value
        const grade_type=document.getElementById("grade_type").value

        console.log(grade_type)
        console.log(buyerid)
        console.log(valuesArray)

        if (grade_type==="timb"){

            valuesArray.map(i=>{
                description=i[0]

                const requestOptions = {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({
                        description:description,
                        userid: 1,
                        created_at:"06-08-2024"
                    })
                };


                fetch('http://localhost/king/api/create_timb_grades.php', requestOptions)
                    .then(response => response.json())
                    .then(data => {
                        console.log(data[0].response,"Success")
                    });
            })
        }else {
            // eslint-disable-next-line array-callback-return
            valuesArray.map(i=>{
                description=i[0]

                const requestOptions = {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({
                        description:description,
                        buyerid:buyerid,
                        userid: 1,
                        created_at:"06-08-2024"
                    })
                };


                fetch('http://localhost/king/api/create_buyer_grades.php', requestOptions)
                    .then(response => response.json())
                    .then(data => {
                        console.log(data[0].response,"Success")
                    });
            })

        }
        valuesArray=[]

    }

  return (
    <div>

      <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light card_10">
          <div class="container-fluid">
              {/* <a href="#" class="navbar-brand">Brand</a> */}
              <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                  <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                  <div class="navbar-nav">
                      <a href="" class="nav-item nav-link active" data-bs-toggle="modal" data-bs-target="#example">Create Grade</a>
                      <a href="" class="nav-item nav-link" data-bs-toggle="modal" data-bs-target="#example2">Upload Grades</a>
                  </div>
              </div>
          </div>
      </nav>
      </div>

      <br />

      <br />

      <div className='card_1'>
          <div className='row'>
            <h6><b>Grades</b></h6>
            
          </div>
   
          <table className='table table-striped table-hover display nowrap' id="">
            <thead>
              <th><input type="checkbox" className='form-check-input'/></th>
              <th>Grade</th>
              <th>Buyer</th>
              <th>Selling Point</th>
              <th>Season</th>
            </thead>
            <tbody>
              <tr>
                <td><input type="checkbox" className='form-check-input'/></td>
                <td>L2M</td>
                <td>PA2</td>
                <td>Vision Leaf Tobacco</td>
                <td>2024</td>
              </tr>
              <tr>
                <td><input type="checkbox" className='form-check-input'/></td>
                <td>L2M</td>
                <td>PA2</td>
                <td>Vision Leaf Tobacco</td>
                <td>2024</td>
              </tr>
              <tr>
                <td><input type="checkbox" className='form-check-input'/></td>
                <td>L2M</td>
                <td>PA2</td>
                <td>Vision Leaf Tobacco</td>
                <td>2024</td>
              </tr>
              <tr>
                <td><input type="checkbox" className='form-check-input'/></td>
                <td>L2M</td>
                <td>PA2</td>
                <td>Vision Leaf Tobacco</td>
                <td>2024</td>
              </tr>
              <tr>
                <td><input type="checkbox" className='form-check-input'/></td>
                <td>L2M</td>
                <td>PA2</td>
                <td>Vision Leaf Tobacco</td>
                <td>2024</td>
              </tr>
              <tr>
                <td><input type="checkbox" className='form-check-input'/></td>
                <td>L2M</td>
                <td>PA2</td>
                <td>Vision Leaf Tobacco</td>
                <td>2024</td>
              </tr>
            </tbody>

          </table>
      </div>

      {/* Modals */}

      <div className="modal fade" id="example" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Create Grade</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form>
                    <div class="mb-3">
                        <label for="recipient-name" class="col-form-label">Grade Name:</label>
                        <input type="text" class="form-control" id="recipient-name" />
                    </div>
                    <div class="mb-3">
                        <label for="recipient-name" class="col-form-label">Buyer Code:</label>
                        <input type="text" class="form-control" id="recipient-name" />
                    </div>
                    <div class="mb-3">
                        <label for="recipient-name" class="col-form-label">Selling Point:</label>
                        <select type="text" class="form-select" id="recipient-name">
                            <option value="select point">Select Selling Point</option>
                            <option value="">VisionLeaf Tobacco</option>
                            <option value="">Horizon</option>
                        </select>
                    </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Submit</button>
                </div>
                </div>
            </div>
      </div>

      <div className="modal fade" id="example2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Upload Grades</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form>                    
                    <div class="mb-3">
                        <label for="recipient-name" class="col-form-label">Selling Type:</label>
                        <select type="text" class="form-select" id="grade_type" >
                            <option value="select point">Select Grade Type</option>
                            <option value="timb">TIMB Grades</option>
                            <option value="buyer">Buyer Grades</option>
                        </select>
                    </div>
                    <div class="mb-3">
                        <label for="recipient-name" class="col-form-label">Select Buyer:</label>
                        <select type="text" class="form-select"  id="buyerid">
                            <option value="select point">Select Buyer</option>
                            {

                                props.buyersData.map((u,i)=>{
                                    return(
                                        <option value={props.buyersData[i].id}>{props.buyersData[i].name + "----"+props.buyersData[i].selling_point_name }</option>
                                )

                                })
                            }

                        </select>
                    </div>
                    <div class="mb-3">
                        <label for="recipient-name" class="col-form-label">Upload:</label>
                        <input type="file" class="form-control" accept=".csv" onChange={selectGrades} />
                    </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary" onClick={uploadGrades}>Submit</button>
                </div>
                </div>
            </div>
        </div>

        <div className="modal fade" id="example_1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Delete Buyer</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <p>Are you sure you want to delete???</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                    <button type="submit" class="btn btn-primary">YES</button>
                </div>
                </div>
            </div>
        </div>

      
        
       


    </div>

   

  );
}

export default Grades;