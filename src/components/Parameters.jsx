import React from 'react'
import './parameters.css'

const Parameters = (props) => {

    const createGrowerCharges=()=>{


        var statutory=document.getElementById("statutory").value;
        var selling_pointid = document.getElementById("selling_pointid").value;
        var amount = document.getElementById("amount").value;
        var charge_type = document.getElementById("charge_type").value;
        var creditor_number = document.getElementById("creditor_number").value;




        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                selling_pointid: selling_pointid,
                statutoryid: statutory,
                charge_typeid: charge_type,
                amount:amount,
                creditor_no:creditor_number,
                userid: 1
            })
        };


        fetch('http://'+props.id_address+'/king/api/create_grower_charges.php', requestOptions)
            .then(response => response.json())
            .then(data => {

                console.log(data)
            })
    }


  return (
    <div>
        <a href="/">
               <i className='bi bi-house-door'></i>
            </a>
      {/* <h3 className='bi bi-home'>Configure Parameters</h3> */}

      <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light card_10">
          <div class="container-fluid">
              {/* <a href="#" class="navbar-brand">Brand</a> */}
              <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                  <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                  <div class="navbar-nav">
                      <a href="" class="nav-item nav-link active" data-bs-toggle="modal" data-bs-target="#example">Add Company</a>
                      <a href="" class="nav-item nav-link" data-bs-toggle="modal" data-bs-target="#example2">Statutory Parameters</a>
                      <a href="" class="nav-item nav-link" data-bs-toggle="modal" data-bs-target="#example3">Deduction Priorities</a>
                      <a href="" class="nav-item nav-link" data-bs-toggle="modal" data-bs-target="#example4">Sale Parameters</a>
                      <a href="" class="nav-item nav-link" data-bs-toggle="modal" data-bs-target="#example5">Add Season</a>
                  </div>
              </div>
          </div>
      </nav>
      </div>
      <br />

      <div className='card_10'>
        <table className='table table-striped table-hover'>
            <thead>
                <tr>
                <th>Statutory</th>
                <th>Type</th>
                <th>Creditor #</th>
                <th>Amount</th>
                <th>Selling Point</th>
                </tr>
            </thead>
            <tbody>

            {
                props.statutoryValueData.map((u,i)=>{
                    return(
                        <tr >
                            <td>{props.statutoryValueData[i].description}</td>
                            <td>{props.statutoryValueData[i].charge_type}</td>
                            <td>{props.statutoryValueData[i].creditor_no}</td>
                            <td>{props.statutoryValueData[i].amount}</td>
                            <td>{props.statutoryValueData[i].selling_point}</td>
                            <td>Edit</td>
                            <td>Delete</td>
                        </tr>
                    )
                })
            }
            </tbody>

        </table>

      </div>

      {/* Modals */}

      <div className="modal fade" id="example" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Add Company</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body form-group row">
                    <form>
                    <div class="mb-3">
                        <label for="recipient-name" class="col-form-label ">Company Name:</label>
                        <input type="text" class="form-control " id="recipient-name" />
                    </div>
                    <div class="mb-3">
                        <label for="recipient-name" class="col-form-label">Address:</label>
                        <input type="text" class="form-control" id="recipient-name" />
                    </div>
                    <div class="mb-3">
                        <label for="recipient-name" class="col-form-label">Phone:</label>
                        <input type="text" class="form-control" id="recipient-name" />
                    </div>
                    <div class="mb-3">
                        <label for="recipient-name" class="col-form-label">Mobile:</label>
                        <input type="text" class="form-control" id="recipient-name" />
                    </div>
                    <div class="mb-3">
                        <label for="recipient-name" class="col-form-label">Email:</label>
                        <input type="email" class="form-control" id="recipient-name" />
                    </div>
                    <div class="mb-3">
                        <label for="recipient-name" class="col-form-label">Website:</label>
                        <input type="website" class="form-control" id="recipient-name" />
                    </div>
                    <div class="mb-3">
                        <label for="recipient-name" class="col-form-label">Logo:</label>
                        <input type="file" class="form-control" id="recipient-name" />
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
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Configure Parameters</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form>
                    <div class="mb-3">
                        <label for="recipient-name" class="col-form-label">Select Company:</label>
                        <select type="text" class="form-control"  id="selling_pointid">
                            <option value="">Select Company</option>
                            {
                                props.sellingPointsData.map((u,i)=>{
                                    return(
                                            <option value={props.sellingPointsData[i].id}>{props.sellingPointsData[i].name}</option>
                                        )

                                })
                            }

                        </select>
                    </div>
                    </form>
                </div>
                <div>
                <div className='card_10'>
                    <form action="">
                    <div className='row'>
                        <div className='col'>
                        <label htmlFor="">Statutory</label>
                        <select name="" id="statutory" className='form-control'>
                            {
                                props.statutoryData.map((u,i)=>{
                                    return(
                                        <option value={props.statutoryData[i].id}>{props.statutoryData[i].description}</option>
                                    )
                                })
                            }

                        </select>
                        </div>
                        <div className='col'>
                        <label htmlFor="">Amount/Value</label>
                        <input name="" id="amount" className='form-control' type='text'/>
                        </div>
                        <div className='col'>
                        <label htmlFor="">Charge Type</label>
                        <select name="" id="charge_type" className='form-control'>
                            {
                                props.chargeTypeData.map((u,i)=>{
                                    return(
                                        <option value={props.chargeTypeData[i].id}>{props.chargeTypeData[i].description}</option>
                                    )
                                })
                            }

                        </select>
                        </div>
                        <div className='col'>
                        <label htmlFor="">Creditor #</label>
                        <input name="" id="creditor_number" className='form-control' type='number'/>
                            
                        </div>

                    </div>
                    </form>
                    
                </div>
                <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary" onClick={createGrowerCharges}>Submit</button>
                    </div>

                </div>


            </div>
                
        </div>
                
      </div>

      <div className="modal fade" id="example3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Deduction Priority</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form>
                    <div class="mb-3">
                        <label for="recipient-name" class="col-form-label">Select Company:</label>
                        <select type="text" class="form-control" id="recipient-name" >
                            <option value="">Select Company</option>
                            {
                                props.sellingPointsData.map((u,i)=>{
                                    return(
                                        <option value={props.sellingPointsData[i].id}>{props.sellingPointsData[i].name}</option>
                                    )

                                })
                            }
                        </select>
                    </div>
                    </form>
                </div>
                <div className='table-responsive'>
                    <table className='table table-striped table-hover table-bordered'>
                        <thead>
                            <tr>
                                <th>Statutory</th>
                                <th>Priority</th>
                                 <th>On/Off</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Statutory Deductions</td>
                                <td><input type="number" className='col-sm' /></td>
                                <td><div  className='form-check form-switch'>
                                <input type='checkbox' className='form-check-input' role='switch' />
                                    </div></td>
                            </tr>
                            <tr>
                                <td>Internal Stoporders</td>
                                <td><input type="number" className='col-sm' /></td>
                                <td><div  className='form-check form-switch'>
                                <input type='checkbox' className='form-check-input' role='switch' />
                                    </div></td>
                            </tr>
                            <tr>
                                <td>Invoice Deductions</td>
                                <td><input type="number" className='col-sm' /></td>
                                <td><div  className='form-check form-switch'>
                                <input type='checkbox' className='form-check-input' role='switch' />
                                    </div></td>
                            </tr>
                            <tr>
                                <td>TIMB Stoporders</td>
                                <td><input type="number" className='col-sm' /></td>
                                <td><div  className='form-check form-switch'>
                                <input type='checkbox' className='form-check-input' role='switch' />
                                    </div></td>
                            </tr>
                            <tr>
                                <td>Company Deductions</td>
                                <td><input type="number" className='col-sm' /></td>
                                <td><div  className='form-check form-switch'>
                                <input type='checkbox' className='form-check-input' role='switch' />
                                    </div></td>
                            </tr>
                            <tr>
                                <td>Refunds(Admin)</td>
                                <td><input type="number" className='col-sm' /></td>
                                <td><div  className='form-check form-switch'>
                                <input type='checkbox' className='form-check-input' role='switch' />
                                    </div></td>
                            </tr>
                            
                        </tbody>

                    </table>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Submit</button>
                </div>
                </div>
            </div>
      </div>

      <div className="modal fade" id="example4" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Sale Parameters</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form>
                    <div class="mb-3">
                        <label for="recipient-name" class="col-form-label">Select Company:</label>
                        <select type="text" class="form-control" id="recipient-name" >
                            <option value="">Select Company</option>
                            <option value="">ALL</option>
                            <option value="">Vision Leaf</option>
                            <option value="">Horizon</option>
                        </select>
                    </div>
                    </form>
                </div>
                <div className='table-responsive'>
                    <table className='table table-striped table-hover table-bordered'>
                        <thead>
                            <tr>
                                <th>Description</th>
                                <th>Rate</th>
                                 <th>On/Off</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>RBZ USD Retention Rate %</td>
                                <td><input type="number" className='col-sm' /></td>
                                <td><div  className='form-check form-switch'>
                                <input type='checkbox' className='form-check-input' role='switch' />
                                    </div></td>
                            </tr>
                            <tr>
                                <td>RBZ ZWL Retention Rate %</td>
                                <td><input type="number" className='col-sm' /></td>
                                <td><div  className='form-check form-switch'>
                                <input type='checkbox' className='form-check-input' role='switch' />
                                    </div></td>
                            </tr>
                            <tr>
                                <td>Invoice USD Rate %</td>
                                <td><input type="number" className='col-sm' /></td>
                                <td><div  className='form-check form-switch'>
                                <input type='checkbox' className='form-check-input' role='switch' />
                                    </div></td>
                            </tr>
                            <tr>
                                <td>Invoice ZWL Rate %</td>
                                <td><input type="number" className='col-sm' /></td>
                                <td><div  className='form-check form-switch'>
                                <input type='checkbox' className='form-check-input' role='switch' />
                                    </div></td>
                            </tr>
                            <tr>
                                <td>Bank Charge</td>
                                <td><input type="number" className='col-sm' /></td>
                                <td><div  className='form-check form-switch'>
                                <input type='checkbox' className='form-check-input' role='switch' />
                                    </div></td>
                            </tr>
                            
                        </tbody>

                    </table>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Submit</button>
                </div>
                </div>
            </div>
      </div>

      <div className="modal fade" id="example5" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Add Season</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body form-group row">
                    <form className='col-xs-2'>
                    <div class="mb-3">
                        <label for="recipient-name" class="col-form-label">Enter Season:</label>
                        <input type="year" class="form-control" id="eseason" />
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

export default Parameters