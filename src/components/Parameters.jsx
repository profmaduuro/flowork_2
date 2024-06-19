import React from 'react'
import './parameters.css'

const Parameters = (props) => {

    const createAfforestration=()=>{

        var selling_pointid = document.getElementById("selling_pointid").value;
        var afforestration_charge = document.getElementById("afforestration_charge").value;
        var afforestration_charge_type = document.getElementById("afforestration_charge_type").value;
        var afforestration_priority = document.getElementById("afforestration_priority").value;
        var afforestration_on_of = document.getElementById("afforestration_on_of").value;



        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                selling_pointid: selling_pointid,
                //statutoryid: ,
                charge_typeid: afforestration_charge_type,
                // amount:date,
                // creditor_no:growerid,
                userid: 1
            })
        };


        fetch('http://localhost/king/api/balance_bales.php', requestOptions)
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
                            <td>Weighing & Auction</td>
                            <td>Bale</td>
                            <td>2</td>
                            <td>7.5</td>
                            <td>Vision Leaf Tobacco</td>
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
<<<<<<< HEAD
<<<<<<< HEAD
                <div className='table-responsive'>
                    <table className='table table-striped table-hover table-bordered'>
                        <thead>
                            <tr>
                                <th>Statutory</th>
                                <th>Amount/Value</th>
                                <th>Charge Type</th>
                                 <th>Priority</th>
                                 <th>On/Off</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Afforestration</td>
                                <td><input type="text" id="afforestration_charge"/></td>
                                <td><select name="" id="afforestration_charge_type">
                                    {
                                        props.chargeTypeData.map((u,i)=>{
                                            return(
                                                <option value={props.chargeTypeData[i].id}>{props.chargeTypeData[i].description}</option>
                                            )
                                        })
                                    }

                                    </select></td>
                                <td><div className='col-xs-2'>
                                <input type="number" className='form-control' id="afforestration_priority"/>
                                    </div></td>
                                <td><div  className='form-check form-switch'>
                                <input type='checkbox' className='form-check-input' role='switch' id="afforestration_on_of"/>
                                    </div></td>
                            </tr>
                            <tr>
                                <td>Weighing & Auction</td>
                                <td><input type="text" id="weighing_and_auction_charge"/></td>
                                <td><select name="" id="weighing_and_auction_charge_type">
                                    {
                                        props.chargeTypeData.map((u,i)=>{
                                            return(
                                                <option value={props.chargeTypeData[i].id}>{props.chargeTypeData[i].description}</option>
                                            )
                                        })
                                    }
                                </select></td>
                                <td><div className='col-xs-2'>
                                    <input type="number" className='form-control' id="weighing_and_auction_priority"/>
                                </div></td>
                                <td><div  className='form-check form-switch'>
                                    <input type='checkbox' className='form-check-input' role='switch' id="weighing_and_auction_on_of"/>
                                </div></td>
                            </tr>
                            <tr>
                                <td>Floor Commission</td>
                                <td><input type="text" id="floor_commission_charge"/></td>
                                <td><select name="" id="floor_commission_charge_type">
                                    {
                                        props.chargeTypeData.map((u,i)=>{
                                            return(
                                                <option value={props.chargeTypeData[i].id}>{props.chargeTypeData[i].description}</option>
                                            )
                                        })
                                    }
                                </select></td>
                                <td><div className='col-xs-2'>
                                    <input type="number" className='form-control' id="floor_commission_priority"/>
                                </div></td>
                                <td><div  className='form-check form-switch'>
                                    <input type='checkbox' className='form-check-input' role='switch' id="floor_commission_on_of"/>
                                </div></td>
                            </tr>
                            <tr>
                                <td>Service Charge</td>
                                <td><input type="text" id="service_charge_charge"/></td>
                                <td><select name="" id="service_charge_charge_type">
                                    {
                                        props.chargeTypeData.map((u,i)=>{
                                            return(
                                                <option value={props.chargeTypeData[i].id}>{props.chargeTypeData[i].description}</option>
                                            )
                                        })
                                    }
                                </select></td>
                                <td><div className='col-xs-2'>
                                    <input type="number" className='form-control' id="service_charge_priority"/>
                                </div></td>
                                <td><div  className='form-check form-switch'>
                                    <input type='checkbox' className='form-check-input' role='switch' id="service_charge_on_of"/>
                                </div></td>
                            </tr>
                            <tr>
                                <td>MOA</td>
                                <td><input type="text" id="moa_usd_charge"/></td>
                                <td><select name="" id="moa_usd_charge_type">
                                    {
                                        props.chargeTypeData.map((u,i)=>{
                                            return(
                                                <option value={props.chargeTypeData[i].id}>{props.chargeTypeData[i].description}</option>
                                            )
                                        })
                                    }
                                </select></td>
                                <td><div className='col-xs-2'>
                                    <input type="number" className='form-control' id="moa_usd_priority"/>
                                </div></td>
                                <td><div  className='form-check form-switch'>
                                    <input type='checkbox' className='form-check-input' role='switch' id="moa_usd_on_of"/>
                                </div></td>
                            </tr>
                            <tr>
                                <td>MOA</td>
                                <td><input type="text" id="moa_zig_charge"/></td>
                                <td><select name="" id="moa_zig_charge_type">
                                    {
                                        props.chargeTypeData.map((u,i)=>{
                                            return(
                                                <option value={props.chargeTypeData[i].id}>{props.chargeTypeData[i].description}</option>
                                            )
                                        })
                                    }
                                </select></td>
                                <td><div className='col-xs-2'>
                                    <input type="number" className='form-control' id="moa_zig_priority"/>
                                </div></td>
                                <td><div  className='form-check form-switch'>
                                    <input type='checkbox' className='form-check-input' role='switch' id="moa_zig_on_of"/>
                                </div></td>
                            </tr>
                            <tr>
                                <td>Bank Charge</td>
                                <td><input type="text" id="bank_charge_charge"/></td>
                                <td><select name="" id="bank_charge_charge_type">
                                    {
                                        props.chargeTypeData.map((u,i)=>{
                                            return(
                                                <option value={props.chargeTypeData[i].id}>{props.chargeTypeData[i].description}</option>
                                            )
                                        })
                                    }
                                </select></td>
                                <td><div className='col-xs-2'>
                                    <input type="number" className='form-control' id="bank_charge_priority"/>
                                </div></td>
                                <td><div  className='form-check form-switch'>
                                    <input type='checkbox' className='form-check-input' role='switch' id="bank_charge_on_of"/>
                                </div></td>
                            </tr>
                        </tbody>
=======
=======
                <div>
>>>>>>> 1963b08a8986c3b1519fae82d7dbcf9ec13f6b48
                <div className='card_10'>
                    <form action="">
                    <div className='row'>
                        <div className='col'>
                        <label htmlFor="">Statutory</label>
                        <select name="" id="" className='form-control'>
                            <option value="">Select Statutory</option>
                            <option value="">Afforestration</option>
                            <option value="">MOA</option>
                            <option value="">MOA</option>
                            <option value="">Weighing & Auction</option>
                            <option value="">Floor Commission</option>
                            <option value="">Service Charge</option>
                            <option value="">Bank Charge</option>
                        </select>
                        </div>
                        <div className='col'>
                        <label htmlFor="">Amount/Value</label>
                        <input name="" id="" className='form-control' type='text'/>
                        </div>
                        <div className='col'>
                        <label htmlFor="">Charge Type</label>
                        <select name="" id="" className='form-control'>
                            <option value="">Select Charge Type</option>
                            <option value="">Mass</option>
                            <option value="">Value</option>
                            <option value="">Bales</option>
                            <option value="">Mass & Value</option>
                        </select>
                        </div>
                        <div className='col'>
                        <label htmlFor="">Priority</label>
                        <input name="" id="" className='form-control' type='number'/>
                            
                        </div>
<<<<<<< HEAD
>>>>>>> 84d9cda51b977887e8f2428c64f60fff1fd1f76b
=======
>>>>>>> 1963b08a8986c3b1519fae82d7dbcf9ec13f6b48

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