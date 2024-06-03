import React from 'react';


const Booking = (props) => {
  return (
    <div>
      <a href="/">
              <i className='bi bi-house-door'></i>
            </a>
     {/* <h3 className='bi bi-home'>Booking</h3> */}

     <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light card_10">
            <div class="container-fluid">
                {/* <a href="#" class="navbar-brand">Brand</a> */}
                <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                    <div class="navbar-nav">
                        <a href="" class="nav-item nav-link active" data-bs-toggle="modal" data-bs-target="#example2">Book Bales</a>
                        <a href="" class="nav-item nav-link" data-bs-toggle="modal" data-bs-target="#example"></a>
                        <a href="" class="nav-item nav-link" data-bs-toggle="modal" data-bs-target="#example3">Fetch Bookings</a>
                    </div>
                </div>
            </div>
        </nav>
      </div>

      <br />
      <br />

      <div className='card_10 table-responsive'>
        <table className='table table-striped table-hover'>
            <thead>
                <tr>
                  <th>Sale Date</th>
                <th>Grower</th>
                <th>Name</th>
                <th>Surname</th>
                <th>ID</th>
                <th># Bales</th>
                <th>Floor</th>
                <th>Created By</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>15/05/2024</td>
                    <td>V101101</td>
                    <td>Tinashe</td>
                    <td>Magamba</td>
                    <td>615321</td>
                    <td>25</td>
                    <td>VLT</td>
                    <td>TMADUURO</td>
                </tr>
                <tr>
                    <td>15/05/2024</td>
                    <td>V101101</td>
                    <td>Tinashe</td>
                    <td>Magamba</td>
                    <td>615321</td>
                    <td>25</td>
                    <td>VLT</td>
                    <td>TMADUURO</td>
                </tr>
                <tr>
                    <td>15/05/2024</td>
                    <td>V101101</td>
                    <td>Tinashe</td>
                    <td>Magamba</td>
                    <td>615321</td>
                    <td>25</td>
                    <td>VLT</td>
                    <td>TMADUURO</td>
                </tr>
                <tr>
                    <td>15/05/2024</td>
                    <td>V101101</td>
                    <td>Tinashe</td>
                    <td>Magamba</td>
                    <td>615321</td>
                    <td>25</td>
                    <td>VLT</td>
                    <td>TMADUURO</td>
                </tr>
                <tr>
                    <td>15/05/2024</td>
                    <td>V101101</td>
                    <td>Tinashe</td>
                    <td>Magamba</td>
                    <td>615321</td>
                    <td>25</td>
                    <td>VLT</td>
                    <td>TMADUURO</td>
                </tr>
                <tr>
                    <td>15/05/2024</td>
                    <td>V101101</td>
                    <td>Tinashe</td>
                    <td>Magamba</td>
                    <td>615321</td>
                    <td>25</td>
                    <td>VLT</td>
                    <td>TMADUURO</td>
                </tr>
            </tbody>

        </table>

      </div>

      {/* MODALS START HERE */}

      <div className="modal fade" id="example2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Internal Booking</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body form-group row">
                    <form>

                        <div className='row'>
                           <div className='col'>
                            <label for="recipient-name" class="col-form-label">Delivered Date</label>
                                <input type="date" className='form-control' />
                           </div>
                           <div className='col'>
                            <label for="recipient-name" class="col-form-label">Sale Date</label>
                                <input type="date" className='form-control' />
                           </div>
                        </div>
                   
                    <div class="row">
                      <div className='col'>
                      <label for="recipient-name" class="col-form-label">Company</label>
                        <select type="date" class="form-control" id="">
                            <option value="">Select Floor</option>
                            <option value="">VLT</option>
                            <option value="">HLT</option>
                        </select>
                        </div>
                        <div className='col'>
                          <label for="recipient-name" class="col-form-label">Enter Grower</label>
                          <input type="text" class="form-control" id="" />
                        </div>
                        <div className='col'>
                          <label for="recipient-name" class="col-form-label">Number of Bales</label>
                          <input type="number" class="form-control" id="" />
                        </div>  
                    </div>

                    <br />

                    <div>
                      <button className='btn btn-success'>Submit</button>
                    </div>

                    <br />
                    <br />

                    <div className='card_10 table-responsive'>
                      <table className='table table-striped table-hover'>
                          <thead>
                              <tr>
                                <th>Sell Date</th>
                              <th>Grower</th>
                              <th>Name</th>
                              <th>Surname</th>
                              <th>ID</th>
                              <th># Bales</th>
                              </tr>
                          </thead>
                          <tbody>
                              <tr>
                                  <td>15/05/2024</td>
                                  <td>V101101</td>
                                  <td>Tinashe</td>
                                  <td>Magamba</td>
                                  <td>615321</td>
                                  <td>25</td>
                              </tr>
                              <tr>
                                  <td>15/05/2024</td>
                                  <td>V101101</td>
                                  <td>Tinashe</td>
                                  <td>Magamba</td>
                                  <td>615321</td>
                                  <td>25</td>
                              </tr>
                              <tr>
                                  <td>15/05/2024</td>
                                  <td>V101101</td>
                                  <td>Tinashe</td>
                                  <td>Magamba</td>
                                  <td>615321</td>
                                  <td>25</td>
                              </tr>
                              <tr>
                                  <td>15/05/2024</td>
                                  <td>V101101</td>
                                  <td>Tinashe</td>
                                  <td>Magamba</td>
                                  <td>615321</td>
                                  <td>25</td>
                              </tr>
                              <tr>
                                  <td>15/05/2024</td>
                                  <td>V101101</td>
                                  <td>Tinashe</td>
                                  <td>Magamba</td>
                                  <td>615321</td>
                                  <td>25</td>
                              </tr>
                              <tr>
                                  <td>15/05/2024</td>
                                  <td>V101101</td>
                                  <td>Tinashe</td>
                                  <td>Magamba</td>
                                  <td>615321</td>
                                  <td>25</td>
                              </tr>
                          </tbody>

                      </table>

                    </div>

                  </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Sync To TIMB</button>
                </div>
                </div>
            </div>
      </div>

      <div className="modal fade" id="example3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Fetch Bookings by Date</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body form-group row">
                    <form className='col-xs-2'>
                   
                    <div class="inline">
                        <label for="recipient-name" class="col-form-label">Floor</label>
                        <select type="date" class="form-control" id="">
                            <option value="">Select Company</option>
                            <option value="">VLT</option>
                            <option value="">HLT</option>
                        </select>
                        <br />
                        <label for="recipient-name" class="col-form-label">Select Date</label>
                        <input type="date" class="form-control" id="" />
                        <br />

                    <div class="row">
                        <div className='col'>
                        <button type="button" class="btn btn-secondary">Fetch Bookings</button>
                        </div>
                        <div className='col'>
                        <a href="">
                        <button type="button" class="btn btn-primary" download="#vlbooking">Download</button>
                        </a>

                    </div>
                       

                        
                        
                    
                    </div>
                     
                          {/* <button type="button" class="btn btn-primary">Fetch Bookings</button> */}
                          
                       
                        
                    </div>

                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    
                </div>
                </div>
            </div>
      </div>
     
    </div>
  );
}

export default Booking;