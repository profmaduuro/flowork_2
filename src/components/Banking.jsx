import React from 'react'

export const Banking = (props) => {
  return (
    <div>
        <div className=''>
            <a href="/home">
                    <i className='bi bi-house-door'></i>
                </a>

            <h3>Banking</h3>

        </div>

        <nav class="navbar navbar-expand-lg navbar-light bg-white card_10">
            <div class="container-fluid">
                {/* <a href="#" class="navbar-brand">Brand</a> */}
                <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                    <div class="navbar-nav">
                        <a href="" class="nav-item nav-link active" data-bs-toggle="modal" data-bs-target="#example">Capture Banking Details</a>
                        <a href="" class="nav-item nav-link" data-bs-toggle="modal" data-bs-target="#example1">Import Bank Details</a>
                        <a href="" class="nav-item nav-link" data-bs-toggle="modal" data-bs-target="#example2"></a>
                    </div>
                </div>
            </div>
        </nav>

        <br />
        <br />

        <div className='card_10'>
        
                <br />

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
        <div className='table-responsive' data-bs-spy="scroll" style={{ maxHeight: "500px", 
                    overflowY: "auto" }} >
                <table className='table table-striped'>
                    <thead style={{ position: "sticky", 
                    top: "0" }} className='card_10'>
                        <th>Grower</th>
                        <th>Name</th>
                        <th>ID</th>
                        <th>Season</th>
                        <th>Selling Point</th>
                        <th>Bank</th>
                    </thead><br />
                    <tbody>
                        <tr data-bs-toggle="modal" data-bs-target="#example2">
                            <td>V123456</td>
                            <td>Bright Kaponda</td>
                            <td>65-084355-v-04</td>
                            <td>2024</td>
                            <td>Vision Leaf Tobacco</td>
                            <td>FBC</td>
                        </tr>
                        <tr data-bs-toggle="modal" data-bs-target="#example2">
                            <td>V123456</td>
                            <td>Bright Kaponda</td>
                            <td>65-084355-v-04</td>
                            <td>2024</td>
                            <td>Vision Leaf Tobacco</td>
                            <td>FBC</td>
                        </tr>
                        <tr data-bs-toggle="modal" data-bs-target="#example2">
                            <td>V123456</td>
                            <td>Bright Kaponda</td>
                            <td>65-084355-v-04</td>
                            <td>2024</td>
                            <td>Vision Leaf Tobacco</td>
                            <td>FBC</td>
                        </tr>
                        <tr data-bs-toggle="modal" data-bs-target="#example2">
                            <td>V123456</td>
                            <td>Bright Kaponda</td>
                            <td>65-084355-v-04</td>
                            <td>2024</td>
                            <td>Vision Leaf Tobacco</td>
                            <td>FBC</td>
                        </tr>
                        <tr data-bs-toggle="modal" data-bs-target="#example2">
                            <td>V123456</td>
                            <td>Bright Kaponda</td>
                            <td>65-084355-v-04</td>
                            <td>2024</td>
                            <td>Vision Leaf Tobacco</td>
                            <td>FBC</td>
                        </tr>
                        <tr data-bs-toggle="modal" data-bs-target="#example2">
                            <td>V123456</td>
                            <td>Bright Kaponda</td>
                            <td>65-084355-v-04</td>
                            <td>2024</td>
                            <td>Vision Leaf Tobacco</td>
                            <td>FBC</td>
                        </tr>
                        <tr data-bs-toggle="modal" data-bs-target="#example2">
                            <td>V123456</td>
                            <td>Bright Kaponda</td>
                            <td>65-084355-v-04</td>
                            <td>2024</td>
                            <td>Vision Leaf Tobacco</td>
                            <td>FBC</td>
                        </tr>
                        <tr data-bs-toggle="modal" data-bs-target="#example2">
                            <td>V123456</td>
                            <td>Bright Kaponda</td>
                            <td>65-084355-v-04</td>
                            <td>2024</td>
                            <td>Vision Leaf Tobacco</td>
                            <td>FBC</td>
                        </tr>
                        <tr data-bs-toggle="modal" data-bs-target="#example2">
                            <td>V123456</td>
                            <td>Bright Kaponda</td>
                            <td>65-084355-v-04</td>
                            <td>2024</td>
                            <td>Vision Leaf Tobacco</td>
                            <td>FBC</td>
                        </tr>

                    </tbody>
                </table>
             

               </div>     

            </div>

            {/* modals */}

            <div class="modal fade" id="example" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="staticBackdropLabel">Capture Banking Details</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form action="">
                            <div className='row' >
                                <div className='col'>
                                    <label htmlFor="">Grower</label>
                                    <input type="text" id='' className='form-control' />
                                </div>
                                <div className='col'>
                                    <label htmlFor="">Sale</label>
                                    <input type="number" id='' className='form-control' />
                                </div>
                            </div>
                            <div>
                                <label htmlFor=""></label>
                                <select type="text" className='form-control'>
                                    <option value="">Select Bank</option>
                                    <option value="">FBC</option>
                                    <option value="">ZB Bank</option>
                                    <option value="">BancAbc</option>
                                </select>
                            </div>
                            <br />
                            <div className='row' >
                                <div className='col'>
                                    <label htmlFor="">USD Account</label>
                                    <input type="text" id='' className='form-control' />
                                </div>
                                <div className='col'>
                                    <label htmlFor="">ZWL Account</label>
                                    <input type="text" id='' className='form-control' />
                                </div>
                            </div><br />
                            {/* <div className='row'>
                                <div className='col'>
                                <label htmlFor="">Charge Type</label>
                                <select name="" id="" className='form-control'>
                                    <option value="">Select Type</option>
                                    <option value="">Mass</option>
                                    <option value="">Bales</option>
                                    <option value="">Value</option>
                                </select>

                                </div>
                                {/* <div className='col'>
                                    <label htmlFor="">Quantity</label>
                                    <input type="number" className='form-control' />
                                </div>
                                 *
                            </div> */}

                        </form>

                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Submit</button>
                    </div>
                    </div>
                </div>
            </div>

            <div class="modal fade" id="example2" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="staticBackdropLabel">Edit/Update Banking Details</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form action="">
                            <div className='row' >
                                <div className='col'>
                                    <label htmlFor="">Grower</label>
                                    <input type="text" className='form-control' />
                                </div>
                                <div className='col'>
                                    <label htmlFor="">Name</label>
                                    <input type="text" className='form-control' />
                                </div>
                            </div>
                            <br />
                            <div>
                                <label htmlFor="">Bank</label> 
                                <input type="text" className='form-control' />
                            </div>
                            <br />
                            <div className='row' >
                                <div className='col'>
                                    <label htmlFor="">USD Acc</label>
                                    <input type="text" className='form-control' />
                                </div>
                                <div className='col'>
                                    <label htmlFor="">ZWL Account</label>
                                    <input type="text" className='form-control' />
                                </div>
                            </div><br />
                            

                        </form>

                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Submit</button>
                    </div>
                    </div>
                </div>
            </div>

            <div class="modal fade" id="example1" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="staticBackdropLabel">Import Banking Details</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                    <button type="button" id='' className='btn btn-secondary'>Sample File</button>

                        <form action="">
                            <div className='' >
                                <div className='col'>
                                    <label htmlFor=""></label>
                                    <select type="text" id='' className='form-control'>
                                        <option value="">Select Selling Point</option>
                                        <option value="">Vision Leaf Tobacco</option>
                                        <option value="">Horizon Leaf Tobacco</option>
                                    </select>
                                </div>
                                <br />
                                <div className='col'>
                                    <input type="file" id='' className='form-control' />
                                </div>
                            </div>
                            <br />
                                
                            

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
