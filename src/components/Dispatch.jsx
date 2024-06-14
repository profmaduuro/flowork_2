import React from 'react'

export const Dispatch = (props) => {
  return (
    <div>
         <a href="/home">
                <i className='bi bi-house-door'></i> 

        </a>
        <h3 className='bi bi-home'>Dispatch</h3>

        <nav class="navbar navbar-expand-lg navbar-light bg-white card_10">
            <div class="container-fluid">
                {/* <a href="#" class="navbar-brand">Brand</a> */}
                <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                    <div class="navbar-nav">
                        <a href="" class="nav-item nav-link active" data-bs-toggle="modal" data-bs-target="#example3">Create Truck</a>
                        <a href="" class="nav-item nav-link" data-bs-toggle="modal" data-bs-target="#example"></a>
                        <a href="" class="nav-item nav-link" data-bs-toggle="modal" data-bs-target="#example2"></a>
                    </div>
                </div>
            </div>
        </nav>

        <br />
        <br />

        <div className='card_10'>
        
            <ul class="nav nav-tabs" role="tablist">
                <li class="nav-item" role="presentation">
                    <a class="nav-link active" id="icon-tab-0" data-bs-toggle="tab" href="#icon-tabpanel-0" role="tab" aria-controls="icon-tabpanel-0" aria-selected="true"><i class="fa-solid fa-plane-up"></i> Dispatch</a>
                </li>
                <li class="nav-item" role="presentation">
                    <a class="nav-link" id="icon-tab-1" data-bs-toggle="tab" href="#icon-tabpanel-1" role="tab" aria-controls="icon-tabpanel-1" aria-selected="false"><i class="fa-solid fa-suitcase"></i> Shipment files</a>
                </li>
                <li class="nav-item" role="presentation">
                    <a class="nav-link" id="icon-tab-2" data-bs-toggle="tab" href="#icon-tabpanel-2" role="tab" aria-controls="icon-tabpanel-2" aria-selected="false"><i class="fa-solid fa-star"></i> </a>
                </li>
            </ul>
            <div class="tab-content pt-5" id="tab-content">
                <div class="tab-pane active" id="icon-tabpanel-0" role="tabpanel" aria-labelledby="icon-tab-0">
                    <div className='form'>
                    <form action="">
                    <div className='row'> 
                        <div className='col-5'>
                            <label htmlFor="">Select Truck</label>
                            <select type="text" className='form-control'>
                                <option value="">Select Truck </option>
                                <option value="">AEG1010150424-PA2</option>
                                <option value="">AEG1010150424-PA4</option>
                                <option value="">AEG1010150424-PA3</option>
                            </select>
                        </div>
                        <div className='col'>
                            
                        </div>
                    </div>
                    <br />
                    <div className='row'>
                        <div className='col-5'>
                            <label htmlFor="">Scarn Barcode</label>
                            <input type="barcode" className='form-control' />
                        </div>
                        <div className='col'>
                            {/* <input type="text" className='form-control' /> */}
                            
                        </div>

                    </div>
                    <br />
                    <div>
                        <button type='submit' className='btn btn-primary'>Close Dispatch Truck</button>
                    </div>

                    
                </form>
            

                    </div>
                    
                </div>
                <div class="tab-pane" id="icon-tabpanel-1" role="tabpanel" aria-labelledby="icon-tab-1">
                    <div class="row">
                        <div class="col-3">
                            <input type="search" id="form1" className="form-control input-sm" placeholder='Search' />
                            
                        </div>
                        <div className='col-3'>
                            <button type="button" class="btn btn-primary" data-mdb-ripple-init>
                            Submit
                            </button>

                        </div>   
                    </div>
                    <br />
                <div class="tab-pane active" id="icon-tabpanel-0" role="tabpanel" aria-labelledby="icon-tab-0">
                    <div className='table table-responsive' data-bs-spy="scroll" style={{ maxHeight: "500px", 
                    overflowY: "auto" }}>
                        <table className='table table-striped table-hover'>
                            <thead style={{ position: "sticky", 
                    top: "0" }} className='card_10'>
                                <th></th>
                                <th>Truck ID</th>
                                <th>Horse Reg</th>
                                <th>Trailer Reg</th>
                                <th>Dispatch Date</th>
                                <th>Packing House</th>
                                <th>Total Bales</th>
                                <th>Season</th>
                                <th>Created By</th>
                                <th>Status</th>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><input type="checkbox" className='form-check-input'/></td>
                                    <td>AED1152-PA2</td>
                                    <td>AED115</td>
                                    <td>AED116</td>
                                    <td>15-05-2024</td>
                                    <td>PA2</td>
                                    <td>180</td>
                                    <td>2024</td>
                                    <td>BKAPONDA</td>
                                    <td>Closed</td>
                                </tr>
                                <tr>
                                    <td><input type="checkbox" className='form-check-input'/></td>
                                    <td>AED1152-PA2</td>
                                    <td>AED115</td>
                                    <td>AED116</td>
                                    <td>15-05-2024</td>
                                    <td>PA2</td>
                                    <td>180</td>
                                    <td>2024</td>
                                    <td>BKAPONDA</td>
                                    <td>Closed</td>
                                </tr>
                                <tr> 
                                    <td><input type="checkbox" className='form-check-input'/></td>
                                    <td>AED1152-PA2</td>
                                    <td>AED115</td>
                                    <td>AED116</td>
                                    <td>15-05-2024</td>
                                    <td>PA2</td>
                                    <td>180</td>
                                    <td>2024</td>
                                    <td>BKAPONDA</td>
                                    <td>Closed</td>
                                </tr>
                                <tr> 
                                    <td><input type="checkbox" className='form-check-input'/></td>
                                    <td>AED1152-PA2</td>
                                    <td>AED115</td>
                                    <td>AED116</td>
                                    <td>15-05-2024</td>
                                    <td>PA2</td>
                                    <td>180</td>
                                    <td>2024</td>
                                    <td>BKAPONDA</td>
                                    <td>Closed</td>
                                </tr>
                                <tr> 
                                    <td><input type="checkbox" className='form-check-input'/></td>
                                    <td>AED1152-PA2</td>
                                    <td>AED115</td>
                                    <td>AED116</td>
                                    <td>15-05-2024</td>
                                    <td>PA2</td>
                                    <td>180</td>
                                    <td>2024</td>
                                    <td>BKAPONDA</td>
                                    <td>Closed</td>
                                </tr>
                                <tr> 
                                    <td><input type="checkbox" className='form-check-input'/></td>
                                    <td>AED1152-PA2</td>
                                    <td>AED115</td>
                                    <td>AED116</td>
                                    <td>15-05-2024</td>
                                    <td>PA2</td>
                                    <td>180</td>
                                    <td>2024</td>
                                    <td>BKAPONDA</td>
                                    <td>Closed</td>
                                </tr>
                                <tr> 
                                    <td><input type="checkbox" className='form-check-input'/></td>
                                    <td>AED1152-PA2</td>
                                    <td>AED115</td>
                                    <td>AED116</td>
                                    <td>15-05-2024</td>
                                    <td>PA2</td>
                                    <td>180</td>
                                    <td>2024</td>
                                    <td>BKAPONDA</td>
                                    <td>Closed</td>
                                </tr>
                                <tr> 
                                    <td><input type="checkbox" className='form-check-input'/></td>
                                    <td>AED1152-PA2</td>
                                    <td>AED115</td>
                                    <td>AED116</td>
                                    <td>15-05-2024</td>
                                    <td>PA2</td>
                                    <td>180</td>
                                    <td>2024</td>
                                    <td>BKAPONDA</td>
                                    <td>Closed</td>
                                </tr>
                                <tr> 
                                    <td><input type="checkbox" className='form-check-input'/></td>
                                    <td>AED1152-PA2</td>
                                    <td>AED115</td>
                                    <td>AED116</td>
                                    <td>15-05-2024</td>
                                    <td>PA2</td>
                                    <td>180</td>
                                    <td>2024</td>
                                    <td>BKAPONDA</td>
                                    <td>Closed</td>
                                </tr>
                                <tr> 
                                    <td><input type="checkbox" className='form-check-input'/></td>
                                    <td>AED1152-PA2</td>
                                    <td>AED115</td>
                                    <td>AED116</td>
                                    <td>15-05-2024</td>
                                    <td>PA2</td>
                                    <td>180</td>
                                    <td>2024</td>
                                    <td>BKAPONDA</td>
                                    <td>Closed</td>
                                </tr>
                                <tr> 
                                    <td><input type="checkbox" className='form-check-input'/></td>
                                    <td>AED1152-PA2</td>
                                    <td>AED115</td>
                                    <td>AED116</td>
                                    <td>15-05-2024</td>
                                    <td>PA2</td>
                                    <td>180</td>
                                    <td>2024</td>
                                    <td>BKAPONDA</td>
                                    <td>Closed</td>
                                </tr>
                                <tr> 
                                    <td><input type="checkbox" className='form-check-input'/></td>
                                    <td>AED1152-PA2</td>
                                    <td>AED115</td>
                                    <td>AED116</td>
                                    <td>15-05-2024</td>
                                    <td>PA2</td>
                                    <td>180</td>
                                    <td>2024</td>
                                    <td>BKAPONDA</td>
                                    <td>Closed</td>
                                </tr>
                                <tr> 
                                    <td><input type="checkbox" className='form-check-input'/></td>
                                    <td>AED1152-PA2</td>
                                    <td>AED115</td>
                                    <td>AED116</td>
                                    <td>15-05-2024</td>
                                    <td>PA2</td>
                                    <td>180</td>
                                    <td>2024</td>
                                    <td>BKAPONDA</td>
                                    <td>Closed</td>
                                </tr>
                                <tr> 
                                    <td><input type="checkbox" className='form-check-input'/></td>
                                    <td>AED1152-PA2</td>
                                    <td>AED115</td>
                                    <td>AED116</td>
                                    <td>15-05-2024</td>
                                    <td>PA2</td>
                                    <td>180</td>
                                    <td>2024</td>
                                    <td>BKAPONDA</td>
                                    <td>Closed</td>
                                </tr>
                                <tr> 
                                    <td><input type="checkbox" className='form-check-input'/></td>
                                    <td>AED1152-PA2</td>
                                    <td>AED115</td>
                                    <td>AED116</td>
                                    <td>15-05-2024</td>
                                    <td>PA2</td>
                                    <td>180</td>
                                    <td>2024</td>
                                    <td>BKAPONDA</td>
                                    <td>Closed</td>
                                </tr>
                            </tbody>
                        </table>

                    </div>
                </div>
                <div>
                    <button className='btn btn-secondary'> Download Shipment File</button>
                </div>
                
                </div>
                {/* <div class="tab-pane" id="icon-tabpanel-2" role="tabpanel" aria-labelledby="icon-tab-2">Laying</div>
                <div class="tab-pane" id="icon-tabpanel-2" role="tabpanel" aria-labelledby="icon-tab-2">Booking</div> */}
              
            </div>
       
        </div>

        {/* modals */}

        <div className="modal fade" id="example3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Create Truck</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body form-group row">
                    <form className='col-xs-2'>
                   
                    <div class="inline">
                        <div className='row'>
                            <div className='col'>
                            <label for="recipient-name" class="col-form-label">Packing House</label>
                                <select type="date" class="form-control" id="">
                                    <option value="">Select Destination</option>
                                    <option value="">MTC</option>
                                    <option value="">PA2</option>
                                    <option value="">PA3</option>
                                </select>
                            </div>
                            <div className='col'>
                                <label for="recipient-name" class="col-form-label">Date</label>
                                    <input type="date" class="form-control" id="" />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col'>
                                <label htmlFor="">Driver's Name</label>
                               <input type="name" className='form-control' id='' />
                            </div>
                            <div className='col'>
                                <label htmlFor="">Driver's ID</label>
                                <input type="text" className='form-control' id=''/>
                            </div>

                        </div>
                        <div className='row'>
                            <div className='col'>
                                <label htmlFor="">Horse Reg</label>
                               <input type="text" className='form-control' id='' />
                            </div>
                            <div className='col'>
                                <label htmlFor="">Trailer Reg</label>
                                <input type="text" className='form-control' id=''/>
                            </div>

                        </div>
                        
                        <label for="recipient-name" class="col-form-label">Destination</label>
                        <input type="text" class="form-control" id="" />
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

       <div className="modal fade" id="example4" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Create Truck</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body form-group row">
                    <form className='col-xs-2'>
                   
                    <div class="inline">
                        <div className='row'>
                            <div className='col'>
                            <label for="recipient-name" class="col-form-label">Packing House</label>
                                <select type="date" class="form-control" id="">
                                    <option value="">Select Destination</option>
                                    <option value="">MTC</option>
                                    <option value="">PA2</option>
                                    <option value="">PA3</option>
                                </select>
                            </div>
                            <div className='col'>
                                <label for="recipient-name" class="col-form-label">Date</label>
                                    <input type="date" class="form-control" id="" />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col'>
                                <label htmlFor="">Driver's Name</label>
                               <input type="name" className='form-control' id='' />
                            </div>
                            <div className='col'>
                                <label htmlFor="">Driver's ID</label>
                                <input type="text" className='form-control' id=''/>
                            </div>

                        </div>
                        <div className='row'>
                            <div className='col'>
                                <label htmlFor="">Horse Reg</label>
                               <input type="text" className='form-control' id='' />
                            </div>
                            <div className='col'>
                                <label htmlFor="">Trailer Reg</label>
                                <input type="text" className='form-control' id=''/>
                            </div>

                        </div>
                        
                        <label for="recipient-name" class="col-form-label">Destination</label>
                        <input type="text" class="form-control" id="" />
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

    </div>
  )
}
