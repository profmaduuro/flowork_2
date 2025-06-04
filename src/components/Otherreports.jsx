import React from 'react'

export const Otherreports = (props) => {
  return (
    <div>
        <div>
            <a href="/home">
                    <i className='bi bi-house-door'></i>

            </a>
            <h3 className='bi bi-home'>Other Reports</h3>
        </div>

        <div class="card_10">
            <div className='row'>
                <div className='col-2'>
                    <div class="dropdown">
                    <button class=" btn btn-primary btn-sm col-16">Statutory Reports</button>
                    <div class="dropdown-content">
                        <a href="#" data-bs-toggle="modal" data-bs-target="#moa">MOA</a>
                        <a href="#" data-bs-toggle="modal" data-bs-target="#afforestration">Afforestration Levy</a>
                        <a href="#" data-bs-toggle="modal" data-bs-target="#stoporder">Stoporder Commission</a>
                        <a href="#" data-bs-toggle="modal" data-bs-target="#tta">TTA Levy</a>
                        <a href="#" data-bs-toggle="modal" data-bs-target="#tobacco_levy">Tobacco Levy</a>
                        </div>
                    </div>
                </div>
                <div className='col'>
                    <div class="dropdown">
                    <button class=" btn btn-primary btn-sm col-16">Floor Reports</button>
                    <div class="dropdown-content">
                        <a href="#" data-bs-toggle="modal" data-bs-target="#dispatch">Dispatch Report</a>
                        <a href="#" data-bs-toggle="modal" data-bs-target="#hold">Holding Area Report</a>
                        <a href="#" data-bs-toggle="modal" data-bs-target="#collect">Collect</a>
                        <a href="#" data-bs-toggle="modal" data-bs-target="#rejection">Rejection Report</a>
                        <a href="#" data-bs-toggle="modal" data-bs-target="#floor_recon">Floor Recon</a>
                        <a href="#" data-bs-toggle="modal" data-bs-target="#disk_file">Buyer Disk File</a>
                        </div>
                    </div>
                </div>
                <div className='col'>
                <div class="dropdown">
                    <button class=" btn btn-primary btn-sm col-16">Transporter</button>
                    <div class="dropdown-content">
                        <a href="#" data-bs-toggle="modal" data-bs-target="#transporter_inv">Transporter Invoice</a>
                        <a href="#" data-bs-toggle="modal" data-bs-target="#transporter_ded">Transporter Deduction File</a>
                        </div>
                    </div>
                </div>

                <div className='col'>
                    {/* <button class=" btn btn-success btn-sm"></button> */}
                </div>
                <div className='col'>
                    {/* <button class=" btn btn-success btn-sm"></button> */}
                </div>
                <div className='col'>
                    {/* <button class=" btn btn-success btn-sm"></button> */}
                </div>
                <div className='col'>
                    {/* <button class=" btn btn-success btn-sm"></button> */}
                </div>

            </div>
        </div>
        
        {/* Modals Start here */}

        <div class="modal fade" id="moa" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content ">
                    <div class="modal-header">
                        <h5 class="modal-title" id="staticBackdropLabel">Generate MOA Report</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form action="">
                            <div className='row' >
                                <div className='col'>
                                    <label htmlFor="">Start Date</label>
                                    <input type="date" id='' className='form-control' />
                                </div>
                                <div className='col'>
                                    <label htmlFor="">End Date</label>
                                    <input type="date" id='' className='form-control' />
                                </div>
                                
                            </div>
                            <br />
                            <div className='row'>
                                <div className='col'>
                                        <label htmlFor="">Selling Point</label>
                                        <select type="number" id='' className='form-control'>
                                            <option value="">Select</option>
                                            <option value="">Vision Leaf Tobacco</option>
                                            <option value="">Horizon Leaf Tobacco</option>
                                            <option value="">Vision Leaf Tobacco</option>
                                        </select>

                                </div>
                               
                                <div className='col'>
                                    <label htmlFor="">Buyer</label>
                                    <select type="date" id='' className='form-control'>
                                        <option value="">Select</option>
                                        <option value="">PA2</option>
                                        <option value="">PA3</option>
                                    </select>
                                </div>
                                    
                            </div>
                            <br />

                        </form>

                    </div>
                    <div class="modal-footer">
                        
                        <a type="button" class="btn btn-primary" href="./FC.csv" download>Generate Report</a>
                    </div>
                    </div>
                </div>
            </div>

            <div class="modal fade" id="afforestration" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content ">
                    <div class="modal-header">
                        <h5 class="modal-title" id="staticBackdropLabel">Afforestration Report</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form action="">
                            <div className='row' >
                                <div className='col'>
                                    <label htmlFor="">Start Date</label>
                                    <input type="date" id='' className='form-control' />
                                </div>
                                <div className='col'>
                                    <label htmlFor="">End Date</label>
                                    <input type="date" id='' className='form-control' />
                                </div>
                                
                            </div>
                            <br />
                            <div className='row'>
                                <div className='col'>
                                        <label htmlFor="">Selling Point</label>
                                        <select type="number" id='' className='form-control'>
                                            <option value="">Select</option>
                                            <option value="">Vision Leaf Tobacco</option>
                                            <option value="">Horizon Leaf Tobacco</option>
                                            <option value="">Vision Leaf Tobacco</option>
                                        </select>

                                </div>
                               
                                <div className='col'>
                                    <label htmlFor="">Buyer</label>
                                    <select type="date" id='' className='form-control'>
                                        <option value="">Select</option>
                                        <option value="">PA2</option>
                                        <option value="">PA3</option>
                                    </select>
                                </div>
                                    
                            </div>
                            <br />

                        </form>

                    </div>
                    <div class="modal-footer">
                        
                        <a type="button" class="btn btn-primary" href="./FC.csv" download>Generate Report</a>
                    </div>
                    </div>
                </div>
            </div>

            <div class="modal fade" id="stoporder" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content ">
                    <div class="modal-header">
                        <h5 class="modal-title" id="staticBackdropLabel">Stoporder Commission</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form action="">
                            <div className='row' >
                                <div className='col'>
                                    <label htmlFor="">Start Date</label>
                                    <input type="date" id='' className='form-control' />
                                </div>
                                <div className='col'>
                                    <label htmlFor="">End Date</label>
                                    <input type="date" id='' className='form-control' />
                                </div>
                                
                            </div>
                            <br />
                            <div className='row'>
                                <div className='col'>
                                        <label htmlFor="">Selling Point</label>
                                        <select type="number" id='' className='form-control'>
                                            <option value="">Select</option>
                                            <option value="">Vision Leaf Tobacco</option>
                                            <option value="">Horizon Leaf Tobacco</option>
                                            <option value="">Vision Leaf Tobacco</option>
                                        </select>

                                </div>
                               
                                <div className='col'>
                                    <label htmlFor="">Buyer</label>
                                    <select type="date" id='' className='form-control'>
                                        <option value="">Select</option>
                                        <option value="">PA2</option>
                                        <option value="">PA3</option>
                                    </select>
                                </div>
                                    
                            </div>
                            <br />

                        </form>

                    </div>
                    <div class="modal-footer">
                        
                        <a type="button" class="btn btn-primary" href="./FC.csv" download>Generate Report</a>
                    </div>
                    </div>
                </div>
            </div>

            <div class="modal fade" id="tta" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content ">
                    <div class="modal-header">
                        <h5 class="modal-title" id="staticBackdropLabel">TTA Levy Report</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form action="">
                            <div className='row' >
                                <div className='col'>
                                    <label htmlFor="">Start Date</label>
                                    <input type="date" id='' className='form-control' />
                                </div>
                                <div className='col'>
                                    <label htmlFor="">End Date</label>
                                    <input type="date" id='' className='form-control' />
                                </div>
                                
                            </div>
                            <br />
                            <div className='row'>
                                <div className='col'>
                                        <label htmlFor="">Selling Point</label>
                                        <select type="number" id='' className='form-control'>
                                            <option value="">Select</option>
                                            <option value="">Vision Leaf Tobacco</option>
                                            <option value="">Horizon Leaf Tobacco</option>
                                            <option value="">Vision Leaf Tobacco</option>
                                        </select>

                                </div>
                               
                                <div className='col'>
                                    <label htmlFor="">Buyer</label>
                                    <select type="date" id='' className='form-control'>
                                        <option value="">Select</option>
                                        <option value="">PA2</option>
                                        <option value="">PA3</option>
                                    </select>
                                </div>
                                    
                            </div>
                            <br />

                        </form>

                    </div>
                    <div class="modal-footer">
                        
                        <a type="button" class="btn btn-primary" href="./FC.csv" download>Generate Report</a>
                    </div>
                    </div>
                </div>
            </div>
            
            <div class="modal fade" id="tobacco_levy" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content ">
                    <div class="modal-header">
                        <h5 class="modal-title" id="staticBackdropLabel">Tobacco Levy Report</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form action="">
                            <div className='row' >
                                <div className='col'>
                                    <label htmlFor="">Start Date</label>
                                    <input type="date" id='' className='form-control' />
                                </div>
                                <div className='col'>
                                    <label htmlFor="">End Date</label>
                                    <input type="date" id='' className='form-control' />
                                </div>
                                
                            </div>
                            <br />
                            <div className='row'>
                                <div className='col'>
                                        <label htmlFor="">Selling Point</label>
                                        <select type="number" id='' className='form-control'>
                                            <option value="">Select</option>
                                            <option value="">Vision Leaf Tobacco</option>
                                            <option value="">Horizon Leaf Tobacco</option>
                                            <option value="">Vision Leaf Tobacco</option>
                                        </select>

                                </div>
                               
                                <div className='col'>
                                    <label htmlFor="">Buyer</label>
                                    <select type="date" id='' className='form-control'>
                                        <option value="">Select</option>
                                        <option value="">PA2</option>
                                        <option value="">PA3</option>
                                    </select>
                                </div>
                                    
                            </div>
                            <br />

                        </form>

                    </div>
                    <div class="modal-footer">
                        
                        <a type="button" class="btn btn-primary" href="./FC.csv" download>Generate Report</a>
                    </div>
                    </div>
                </div>
            </div>

            <div class="modal fade" id="dispatch" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content ">
                    <div class="modal-header">
                        <h5 class="modal-title" id="staticBackdropLabel">Dispatch Report</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form action="">
                            <div className='row' >
                                <div className='col'>
                                    <label htmlFor="">Start Date</label>
                                    <input type="date" id='' className='form-control' />
                                </div>
                                <div className='col'>
                                    <label htmlFor="">End Date</label>
                                    <input type="date" id='' className='form-control' />
                                </div>
                                
                            </div>
                            <br />
                            <div className='row'>
                                <div className='col'>
                                        <label htmlFor="">Selling Point</label>
                                        <select type="number" id='' className='form-control'>
                                            <option value="">Select</option>
                                            <option value="">Vision Leaf Tobacco</option>
                                            <option value="">Horizon Leaf Tobacco</option>
                                            <option value="">Vision Leaf Tobacco</option>
                                        </select>

                                </div>
                               
                                <div className='col'>
                                    <label htmlFor="">Buyer</label>
                                    <select type="date" id='' className='form-control'>
                                        <option value="">Select</option>
                                        <option value="">PA2</option>
                                        <option value="">PA3</option>
                                    </select>
                                </div>
                                    
                            </div>
                            <br />

                        </form>

                    </div>
                    <div class="modal-footer">
                        
                        <a type="button" class="btn btn-primary" href="./FC.csv" download>Generate Report</a>
                    </div>
                    </div>
                </div>
            </div>
            
            <div class="modal fade" id="hold" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content ">
                    <div class="modal-header">
                        <h5 class="modal-title" id="staticBackdropLabel">Holding Area Report</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form action="">
                            <div className='row' >
                                <div className='col'>
                                    <label htmlFor="">Start Date</label>
                                    <input type="date" id='' className='form-control' />
                                </div>
                                <div className='col'>
                                    <label htmlFor="">End Date</label>
                                    <input type="date" id='' className='form-control' />
                                </div>
                                
                            </div>
                            <br />
                            <div className='row'>
                                <div className='col'>
                                        <label htmlFor="">Selling Point</label>
                                        <select type="number" id='' className='form-control'>
                                            <option value="">Select</option>
                                            <option value="">Vision Leaf Tobacco</option>
                                            <option value="">Horizon Leaf Tobacco</option>
                                            <option value="">Vision Leaf Tobacco</option>
                                        </select>

                                </div>
                               
                                <div className='col'>
                                    <label htmlFor="">Buyer</label>
                                    <select type="date" id='' className='form-control'>
                                        <option value="">Select</option>
                                        <option value="">PA2</option>
                                        <option value="">PA3</option>
                                    </select>
                                </div>
                                    
                            </div>
                            <br />

                        </form>

                    </div>
                    <div class="modal-footer">
                        
                        <a type="button" class="btn btn-primary" href="./FC.csv" download>Generate Report</a>
                    </div>
                    </div>
                </div>
            </div>

            <div class="modal fade" id="collect" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content ">
                    <div class="modal-header">
                        <h5 class="modal-title" id="staticBackdropLabel">Collect Report</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form action="">
                            <div className='row' >
                                <div className='col'>
                                    <label htmlFor="">Start Date</label>
                                    <input type="date" id='' className='form-control' />
                                </div>
                                <div className='col'>
                                    <label htmlFor="">End Date</label>
                                    <input type="date" id='' className='form-control' />
                                </div>
                                
                            </div>
                            <br />
                            <div className='row'>
                                <div className='col'>
                                        <label htmlFor="">Selling Point</label>
                                        <select type="number" id='' className='form-control'>
                                            <option value="">Select</option>
                                            <option value="">Vision Leaf Tobacco</option>
                                            <option value="">Horizon Leaf Tobacco</option>
                                            <option value="">Vision Leaf Tobacco</option>
                                        </select>

                                </div>
                               
                                <div className='col'>
                                    <label htmlFor="">Buyer</label>
                                    <select type="date" id='' className='form-control'>
                                        <option value="">Select</option>
                                        <option value="">PA2</option>
                                        <option value="">PA3</option>
                                    </select>
                                </div>
                                    
                            </div>
                            <br />

                        </form>

                    </div>
                    <div class="modal-footer">
                        
                        <a type="button" class="btn btn-primary" href="./FC.csv" download>Generate Report</a>
                    </div>
                    </div>
                </div>
            </div>

            <div class="modal fade" id="rejection" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content ">
                    <div class="modal-header">
                        <h5 class="modal-title" id="staticBackdropLabel">Rejection Report</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form action="">
                            <div className='row' >
                                <div className='col'>
                                    <label htmlFor="">Start Date</label>
                                    <input type="date" id='' className='form-control' />
                                </div>
                                <div className='col'>
                                    <label htmlFor="">End Date</label>
                                    <input type="date" id='' className='form-control' />
                                </div>
                                
                            </div>
                            <br />
                            <div className='row'>
                                <div className='col'>
                                        <label htmlFor="">Selling Point</label>
                                        <select type="number" id='' className='form-control'>
                                            <option value="">Select</option>
                                            <option value="">Vision Leaf Tobacco</option>
                                            <option value="">Horizon Leaf Tobacco</option>
                                            <option value="">Vision Leaf Tobacco</option>
                                        </select>

                                </div>
                               
                                <div className='col'>
                                    <label htmlFor="">Buyer</label>
                                    <select type="date" id='' className='form-control'>
                                        <option value="">Select</option>
                                        <option value="">PA2</option>
                                        <option value="">PA3</option>
                                    </select>
                                </div>
                                    
                            </div>
                            <br />

                        </form>

                    </div>
                    <div class="modal-footer">
                        
                        <a type="button" class="btn btn-primary" href="./FC.csv" download>Generate Report</a>
                    </div>
                    </div>
                </div>
            </div>

            <div class="modal fade" id="floor_recon" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content ">
                    <div class="modal-header">
                        <h5 class="modal-title" id="staticBackdropLabel">Floor Recon Report</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form action="">
                            <div className='row' >
                                <div className='col'>
                                    <label htmlFor="">Start Date</label>
                                    <input type="date" id='' className='form-control' />
                                </div>
                                <div className='col'>
                                    <label htmlFor="">End Date</label>
                                    <input type="date" id='' className='form-control' />
                                </div>
                                
                            </div>
                            <br />
                            <div className='row'>
                                <div className='col'>
                                        <label htmlFor="">Selling Point</label>
                                        <select type="number" id='' className='form-control'>
                                            <option value="">Select</option>
                                            <option value="">Vision Leaf Tobacco</option>
                                            <option value="">Horizon Leaf Tobacco</option>
                                            <option value="">Vision Leaf Tobacco</option>
                                        </select>

                                </div>
                               
                                <div className='col'>
                                    <label htmlFor="">Buyer</label>
                                    <select type="date" id='' className='form-control'>
                                        <option value="">Select</option>
                                        <option value="">PA2</option>
                                        <option value="">PA3</option>
                                    </select>
                                </div>
                                    
                            </div>
                            <br />

                        </form>

                    </div>
                    <div class="modal-footer">
                        
                        <a type="button" class="btn btn-primary" href="./FC.csv" download>Generate Report</a>
                    </div>
                    </div>
                </div>
            </div>

            <div class="modal fade" id="disk_file" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content ">
                    <div class="modal-header">
                        <h5 class="modal-title" id="staticBackdropLabel">Buyer Disk File</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form action="">
                            <div className='row' >
                                <div className='col'>
                                    <label htmlFor="">Start Date</label>
                                    <input type="date" id='' className='form-control' />
                                </div>
                                <div className='col'>
                                    <label htmlFor="">End Date</label>
                                    <input type="date" id='' className='form-control' />
                                </div>
                                
                            </div>
                            <br />
                            <div className='row'>
                                <div className='col'>
                                        <label htmlFor="">Selling Point</label>
                                        <select type="number" id='' className='form-control'>
                                            <option value="">Select</option>
                                            <option value="">Vision Leaf Tobacco</option>
                                            <option value="">Horizon Leaf Tobacco</option>
                                            <option value="">Vision Leaf Tobacco</option>
                                        </select>

                                </div>
                               
                                <div className='col'>
                                    <label htmlFor="">Buyer</label>
                                    <select type="date" id='' className='form-control'>
                                        <option value="">Select</option>
                                        <option value="">PA2</option>
                                        <option value="">PA3</option>
                                    </select>
                                </div>
                                    
                            </div>
                            <br />

                        </form>

                    </div>
                    <div class="modal-footer">
                        
                        <a type="button" class="btn btn-primary" href="./FC.csv" download>Generate Report</a>
                    </div>
                    </div>
                </div>
            </div>

            <div class="modal fade" id="transporter_inv" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content ">
                    <div class="modal-header">
                        <h5 class="modal-title" id="staticBackdropLabel">Transporter Invoice</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form action="">
                            <div className='row' >
                                <div className='col'>
                                    <label htmlFor="">Start Date</label>
                                    <input type="date" id='' className='form-control' />
                                </div>
                                <div className='col'>
                                    <label htmlFor="">End Date</label>
                                    <input type="date" id='' className='form-control' />
                                </div>
                                
                            </div>
                            <br />
                            <div className='row'>
                                <div className='col'>
                                        <label htmlFor="">Selling Point</label>
                                        <select type="number" id='' className='form-control'>
                                            <option value="">Select</option>
                                            <option value="">Vision Leaf Tobacco</option>
                                            <option value="">Horizon Leaf Tobacco</option>
                                            <option value="">Vision Leaf Tobacco</option>
                                        </select>

                                </div>
                               
                                <div className='col'>
                                    <label htmlFor="">Buyer</label>
                                    <select type="date" id='' className='form-control'>
                                        <option value="">Select</option>
                                        <option value="">PA2</option>
                                        <option value="">PA3</option>
                                    </select>
                                </div>
                                    
                            </div>
                            <br />

                        </form>

                    </div>
                    <div class="modal-footer">
                        
                        <a type="button" class="btn btn-primary" href="./FC.csv" download>Generate Report</a>
                    </div>
                    </div>
                </div>
            </div>

            <div class="modal fade" id="transporter_ded" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content ">
                    <div class="modal-header">
                        <h5 class="modal-title" id="staticBackdropLabel">Transporter Deduction Report</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form action="">
                            <div className='row' >
                                <div className='col'>
                                    <label htmlFor="">Start Date</label>
                                    <input type="date" id='' className='form-control' />
                                </div>
                                <div className='col'>
                                    <label htmlFor="">End Date</label>
                                    <input type="date" id='' className='form-control' />
                                </div>
                                
                            </div>
                            <br />
                            <div className='row'>
                                <div className='col'>
                                        <label htmlFor="">Selling Point</label>
                                        <select type="number" id='' className='form-control'>
                                            <option value="">Select</option>
                                            <option value="">Vision Leaf Tobacco</option>
                                            <option value="">Horizon Leaf Tobacco</option>
                                            <option value="">Vision Leaf Tobacco</option>
                                        </select>

                                </div>
                               
                                <div className='col'>
                                    <label htmlFor="">Buyer</label>
                                    <select type="date" id='' className='form-control'>
                                        <option value="">Select</option>
                                        <option value="">PA2</option>
                                        <option value="">PA3</option>
                                    </select>
                                </div>
                                    
                            </div>
                            <br />

                        </form>

                    </div>
                    <div class="modal-footer">
                        
                        <a type="button" class="btn btn-primary" href="./FC.csv" download>Generate Report</a>
                    </div>
                    </div>
                </div>
            </div>









    </div>
  )
}

