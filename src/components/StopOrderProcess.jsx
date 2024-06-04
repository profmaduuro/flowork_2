import React from 'react'

const StopOrderProcess = (props) => {
  return (
    <div>
      <a href="/home">
              <i className='bi bi-house-door'></i>
            </a>
     {/* <h3 className='bi bi-home'>StopOrder Processing</h3> */}

     <div className=''>
        <nav class="navbar navbar-expand-lg navbar-light bg-white card_10">
            <div class="container-fluid">
                {/* <a href="#" class="navbar-brand">Brand</a> */}
                <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                    <div class="navbar-nav">
                        <a href="" class="nav-item nav-link active" data-bs-toggle="modal" data-bs-target="#example3">Stop-order Processing</a>
                        <a href="" class="nav-item nav-link" data-bs-toggle="modal" data-bs-target="#example"></a>
                        <a href="" class="nav-item nav-link" data-bs-toggle="modal" data-bs-target="#example2"></a>
                    </div>
                </div>
            </div>
        </nav>
      </div>

      <br />
      <br />

      <div className='card_10 table-responsive'>
        <div>
          <h5>Deductions Table</h5>
        </div>
        <table className='table table-striped table-hover'>
            <thead>
                <tr>
                  <th>Sale Date</th>
                <th>Grower</th>
                <th>Name</th>
                <th>Creditor</th>
                <th>Name</th>
                <th>Amount</th>
                <th>Currency</th>
                <th>DeductionFrom</th>
                <th>Day</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>15/05/2024</td>
                    <td>V101101</td>
                    <td>61512</td>
                    <td>MTC Rollover</td>
                    <td>150.00</td>
                    <td>USD</td>
                    <td>Internal Invoice</td>
                    <td>4152</td>
                    <td>15/05/2024</td>
                </tr>
                <tr>
                    <td>15/05/2024</td>
                    <td>V101101</td>
                    <td>61512</td>
                    <td>MTC Rollover</td>
                    <td>150.00</td>
                    <td>USD</td>
                    <td>Internal Invoice</td>
                    <td>4152</td>
                    <td>15/05/2024</td>
                </tr>
                
            </tbody>

        </table>

      </div>

      {/* modals */}

      <div className="modal fade" id="example3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Stoporder Processing</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body form-group row">
                    <form className='col-xs-2'>
                   
                    <div class="inline">
                        <label for="recipient-name" class="col-form-label">Selling Point</label>
                        <select type="date" class="form-control" id="">
                            <option value="">Select Company</option>
                            <option value="">VLT</option>
                            <option value="">HLT</option>
                        </select>
                        <br />
                        {/* <label for="recipient-name" class="col-form-label">Upload Contract Registry</label>
                        <input type="file" class="form-control" id="" /> */}
                    </div>

                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Start Stoporder Processing</button>
                </div>
                </div>
            </div>
      </div>
     
    </div>
  )
}

export default StopOrderProcess;
