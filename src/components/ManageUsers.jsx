import React from 'react'
import './manageusers.css'

const ManageUsers = (props) => {
  return (
    <div>
        <a href="/">
               <i className='bi bi-house-door'></i>
            </a>
      <h3 className='bi bi-home'>Create Users</h3>

      <br />

      <div className='col-auto'> 

      <button className='btn btn-primary' type='POST' data-bs-toggle="modal" data-bs-target="#exampleModal_2">Create User</button>

      {/*  */}
        
      </div>

      <br />
      <br />
      <br />

      <h4 className='bi bi-home'>Selling Points</h4>

      <div className='card_10'>
        <table class="table table-striped table-hover">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">UserName</th>
                <th scope="col">Name</th>
                <th scope="col">Surname</th>
                <th>Role</th>
                <th>Action</th>
                </tr>
            </thead>
            <tbody>
             <tr>
                <th scope="row">1</th>
                <td>TMADUURO</td>
                <td>Tafadzwa</td>
                <td>Maduuro</td>
                <td>Administrator</td>
                <td>
                <a href='#exampleModal' className='bi bi-pencil-square me-3'
                     data-bs-toggle="modal" data-bs-target="#exampleModal"></a>
                <a href="" className='bi bi-universal-access me-3' data-bs-toggle="modal" data-bs-target="#exampleModal_4"></a>
                <a href='#' className='bi bi-trash ' data-bs-toggle="modal" data-bs-target="#exampleModal_1"></a>
                </td>
             </tr>
             <tr>
                <th scope="row">2</th>
                <td>TMADUURO</td>
                <td>Tafadzwa</td>
                <td>Maduuro</td>
                <td>Administrator</td>
                <td>
        
                <a href='#exampleModal' className='bi bi-pencil-square me-3'
                     data-bs-toggle="modal" data-bs-target="#exampleModal"></a>
                <a href="" className='bi bi-universal-access me-3' data-bs-toggle="modal" data-bs-target="#exampleModal_4"></a>
                <a href='#' className='bi bi-trash ' data-bs-toggle="modal" data-bs-target="#exampleModal_1"></a>
                </td>
             </tr>
             <tr>
                <th scope="row">3</th>
                <td>TMADUURO</td>
                <td>Tafadzwa</td>
                <td>Maduuro</td>
                <td>Administrator</td>
                <td>
                <a href='#exampleModal' className='bi bi-pencil-square me-3'
                     data-bs-toggle="modal" data-bs-target="#exampleModal"></a>
                <a href="" className='bi bi-universal-access me-3' data-bs-toggle="modal" data-bs-target="#exampleModal_4"></a>
                <a href='#' className='bi bi-trash ' data-bs-toggle="modal" data-bs-target="#exampleModal_1"></a>
                </td>
             </tr>

            </tbody>
  ...
        </table>
      </div>

      {/* Modals */}

      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Edit</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form>
                    <div class="mb-3">
                        <label for="recipient-name" class="col-form-label">Name:</label>
                        <input type="text" class="form-control" id="recipient-name" />
                    </div>
                    <div class="mb-3">
                        <label for="recipient-name" class="col-form-label">Floor Code:</label>
                        <input type="text" class="form-control" id="recipient-name" />
                    </div>
                    <div class="mb-3">
                        <label for="recipient-name" class="col-form-label">Floor ID:</label>
                        <input type="text" class="form-select" id="recipient-name" />
                    </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Update</button>
                </div>
                </div>
            </div>
        </div>

        <div class="modal fade" id="exampleModal_1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Delete User</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <p>Are you sure you want to delete user???</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                    <button type="submit" class="btn btn-primary">YES</button>
                </div>
                </div>
            </div>
        </div>

        <div class="modal fade" id="exampleModal_2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Create User</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
    
                    <label htmlFor="File to Upload">Username</label>
                    <input type="text" className='form-control' placeholder='Enter Username' />

                    <br />

                    <label htmlFor="File to Upload">Name</label>
                    <input type="text" className='form-control' placeholder='Enter Name' />
                    
                    <br />
                    <label htmlFor="File to Upload">Surname</label>
                    <input type="text" className='form-control sm' placeholder='Enter Surname' />

                    <br />
                    <label htmlFor="File to Upload">Surname</label>
                    <select type="text" className='form-select sm'>
                        <option value="">Select Role</option>
                        <option value="">Administrator</option>
                        <option value="">Reg Clerk</option>
                        <option value="">Loans Clerk</option>
                        <option value="">Data Capturer</option>
                        <option value="">Receiving Clerk</option>
                        <option value="">Accounts Clerk</option>
                        <option value="">Accountant</option>
                        <option value="">Finance Manager</option>
                        <option value="">Warehouse Supervisor</option>
                    </select>

                    <br />
                    <label htmlFor="File to Upload">Create Password</label>
                    <input type="password" className='form-control sm' />

                    <br />
                    <label htmlFor="File to Upload">Verify Password</label>
                    <input type="password" className='form-control sm' />

                    <br />   
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                    <button type="submit" className='btn btn-primary' value='Submit'>Submit</button>
                </div>
                </div>
            </div>
        </div>

        <div class="modal fade" id="exampleModal_4" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Assign Rights</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
    
                    <label htmlFor="File to Upload">Username</label>
                    <select type="text" className='form-control' placeholder='Enter Username'>
                        <option value="">Select User</option>
                        <option value="">Tafadzwa Maduuro</option>
                        <option value="">Tinashe Magari</option>
                        <option value="">Bright Kaponda</option>
                    </select>

                    <br />

                    <table>
                        <h6>Rights</h6>
                        <thead>
                            <th></th>
                            <th></th>
                        </thead>
                        <tbody>
                            <tr>
                                <td></td>
                                <td type="" className='checkbox' >
                                    <input type="checkbox" className='form-check-input'/>
                                    <label className="form-check-label">Accounts</label>
                                </td>
                                <td type="checkbox" className='checkbox' >
                                    <input type="checkbox" className='form-check-input' />
                                    <label className="form-check-label">Receiving</label>
                                </td>
                                <td type="checkbox" className='checkbox'>
                                    <input type="checkbox" className='form-check-input'/>
                                    <label className="form-check-label">Sales</label>
                                </td>
                                <td type="checkbox" className='checkbox' >
                                    <input type="checkbox" className='form-check-input'/>
                                    <label className="form-check-label">Reports</label>
                                </td>
                                <td type="checkbox" className='checkbox' >
                                    <input type="checkbox" className='form-check-input'/>
                                    <label className="form-check-label">Start-off</label>
                                </td>
                                
                                
                            </tr>

                            <tr>
                                <td></td>
                                <td type="" className='checkbox' >
                                    <input type="checkbox" className='form-check-input'/>
                                    <label className="form-check-label">EOD</label>
                                </td>
                                <td type="checkbox" className='checkbox' >
                                    <input type="checkbox" className='form-check-input' />
                                    <label className="form-check-label">Settings</label>
                                </td>
                                <td type="checkbox" className='checkbox'>
                                    <input type="checkbox" className='form-check-input'/>
                                    <label className="form-check-label">GMS</label>
                                </td>
                                <td type="checkbox" className='checkbox' >
                                    <input type="checkbox" className='form-check-input'/>
                                    <label className="form-check-label">LMS</label>
                                </td>
                                <td type="checkbox" className='checkbox' >
                                    <input type="checkbox" className='form-check-input'/>
                                    <label className="form-check-label">  QuickAcc</label>
                                </td>
                                
                                
                            </tr>

                            <tr>
                                <td></td>
                                <td type="checkbox" className='checkbox'>
                                    <label className="checkbox-inline">
                                    <input type="checkbox" className='form-check-input'/>Stoporders</label>
                                </td>
                                <td type="checkbox" className='checkbox'>
                                    <label className="checkbox-inline">
                                    <input type="checkbox" className='form-check-input'/> Floor</label>
                                </td>
                                <td></td>
                                <td></td>
                                
                                
                            </tr>

                        </tbody>
                    </table>

                       
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                    <button type="submit" className='btn btn-primary' value='Submit'>Submit</button>
                </div>
                </div>
            </div>
        </div>
     

    </div>
  );
}

export default ManageUsers;