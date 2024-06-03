import React from 'react'


const SalesRun = (props) => {
  return (
    <div>
      <a href="/home">
              <i className='bi bi-house-door'></i>
            </a>
     <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light card_10">
            <div class="container-fluid">
                {/* <a href="#" class="navbar-brand">Brand</a> */}
                <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                    <div class="navbar-nav">
                        <a href="" class="nav-item nav-link active" data-bs-toggle="modal" data-bs-target="#example">Start off Day</a>
                        {/* <a href="" class="nav-item nav-link" data-bs-toggle="modal" data-bs-target="#example2">Statutory Parameters</a>
                        <a href="" class="nav-item nav-link" data-bs-toggle="modal" data-bs-target="#example3">Deduction Priorities</a>
                        <a href="" class="nav-item nav-link" data-bs-toggle="modal" data-bs-target="#example4">Sale Parameters</a> */}
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
                <th>Date</th>
                <th>Selling Point</th>
                <th>Bales Booked</th>
                <th>Laid</th>
                <th>Sold</th>
                <th>Rejected</th>
                <th>Unprocessed</th>
                <th>Rate</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>15/05/2024</td>
                    <td>VLT</td>
                    <td>150</td>
                    <td>145</td>
                    <td>140</td>
                    <td>5</td>
                    <td>0</td>
                    <td>13.7585</td>
                </tr>
                <tr>
                    <td>15/05/2024</td>
                    <td>VLT</td>
                    <td>150</td>
                    <td>145</td>
                    <td>140</td>
                    <td>5</td>
                    <td>0</td>
                    <td>13.7585</td>
                </tr>
                <tr>
                    <td>15/05/2024</td>
                    <td>VLT</td>
                    <td>150</td>
                    <td>145</td>
                    <td>140</td>
                    <td>5</td>
                    <td>0</td>
                    <td>13.7585</td>
                </tr>
                <tr>
                    <td>15/05/2024</td>
                    <td>VLT</td>
                    <td>150</td>
                    <td>145</td>
                    <td>140</td>
                    <td>5</td>
                    <td>0</td>
                    <td>13.7585</td>
                </tr>
                <tr>
                    <td>15/05/2024</td>
                    <td>VLT</td>
                    <td>150</td>
                    <td>145</td>
                    <td>140</td>
                    <td>5</td>
                    <td>0</td>
                    <td>13.7585</td>
                </tr>
                <tr>
                    <td>15/05/2024</td>
                    <td>VLT</td>
                    <td>150</td>
                    <td>145</td>
                    <td>140</td>
                    <td>5</td>
                    <td>0</td>
                    <td>13.7585</td>
                </tr>
                <tr>
                    <td>15/05/2024</td>
                    <td>VLT</td>
                    <td>150</td>
                    <td>145</td>
                    <td>140</td>
                    <td>5</td>
                    <td>0</td>
                    <td>13.7585</td>
                </tr>
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
                        <label for="recipient-name" class="col-form-label">Sale Date</label>
                        <input type="date" class="form-control" id="sale_date" />
                    </div>
                    <div class="mb-3">
                        <label for="recipient-name" class="col-form-label">Exchange Rate:</label>
                        <input type="rate" class="form-control" id="exchange_rate" />
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

export default SalesRun;