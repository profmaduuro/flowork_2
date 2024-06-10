import React from 'react'

export const Floorsummary = (props) => {

    const floorSummary=()=>{

        const barcode=document.getElementById("barcode").value
        const row=document.getElementById("row").value


        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                barcode:barcode,
                row:row,
                userid: 1,
                created_at:"06-08-2024"
            })
        };


        fetch('http://localhost/king/api/create_floor_summary.php', requestOptions)
            .then(response => response.json())
            .then(data => {
                console.log(data[0].response,"Success")

            });


    }


    return (
    <div>
        <div className=''>
             <a href="/home">
                <i className='bi bi-house-door'></i> 
            </a>
        </div>
        <nav class="navbar navbar-expand-lg navbar-light bg-white card_10">
            <div class="container-fluid">
                {/* <a href="#" class="navbar-brand">Brand</a> */}
                <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                    <div class="navbar-nav">
                        <a href="" class="nav-item nav-link active" data-bs-toggle="modal" data-bs-target="#example3">Floor Summary</a>
                        <a href="" class="nav-item nav-link" data-bs-toggle="modal" data-bs-target="#example"></a>
                        <a href="" class="nav-item nav-link" data-bs-toggle="modal" data-bs-target="#example2"></a>
                    </div>
                </div>
            </div>
        </nav>

        <br />
        <br />

        <div className='card_10 col-md-8'>
            <div>
                <form action="">
                    <div className='row'>
                        <div className='col'>
                            <label htmlFor="">Select Date</label>
                            <input type="date" className='form-control' />
                        </div>
                        <div className='col-4'>
                            <label htmlFor="">Select Selling Point</label>
                            <select type="text" className='form-control'>
                                <option value="">All</option>
                                <option value="">Vision Leaf</option>
                                <option value="">Horizon</option>
                            </select>
                        </div>
                        <div className='col'>
                            {/* <input type="text" className='form-control' /> */}
                        </div>
                        <div className='col'>
                            <label htmlFor="">.</label>
                            <a type="button" href='#' className='btn btn-secondary' download>   Download</a>
                        </div>

                    </div>
                </form>
            </div>

        </div>

        <br />
        <br />

        <div className='card_10'>
            <div className='btn btn-secondary'>
                <h6>Daily Floor Summary</h6>
            </div>
            <br />
            <div className='table-responsive'>
                <table className='table table-striped'> 
                  <thead>
                    <th>Grower</th>
                    <th>Barcode</th>
                    <th>Group</th>
                    <th>Lot</th>
                    <th>Mass</th>
                    <th>Row</th>
                    <th>Temp Barcode</th>
                    <th>Bale Location</th>
                    <th>Date</th>
                  </thead>
                  <tbody>
                    <tr>
                        <td>V124563</td>
                        <td>650000015263r</td>
                        <td>5</td>
                        <td>1</td>
                        <td>120</td>
                        <td>5</td>
                        <td>VL0012546</td>
                        <td>A</td>
                        <td>15-05-2024</td>
                    </tr>
                    <tr>
                        <td>V124563</td>
                        <td>650000015263r</td>
                        <td>5</td>
                        <td>1</td>
                        <td>120</td>
                        <td>5</td>
                        <td>VL0012546</td>
                        <td>A</td>
                        <td>15-05-2024</td>
                    </tr>
                    <tr>
                        <td>V124563</td>
                        <td>650000015263r</td>
                        <td>5</td>
                        <td>1</td>
                        <td>120</td>
                        <td>5</td>
                        <td>VL0012546</td>
                        <td>A</td>
                        <td>15-05-2024</td>
                    </tr>
                    <tr>
                        <td>V124563</td>
                        <td>650000015263r</td>
                        <td>5</td>
                        <td>1</td>
                        <td>120</td>
                        <td>5</td>
                        <td>VL0012546</td>
                        <td>A</td>
                        <td>15-05-2024</td>
                    </tr>
                    <tr>
                        <td>V124563</td>
                        <td>650000015263r</td>
                        <td>5</td>
                        <td>1</td>
                        <td>120</td>
                        <td>5</td>
                        <td>VL0012546</td>
                        <td>A</td>
                        <td>15-05-2024</td>
                    </tr>
                  </tbody>

                </table>

            </div>

        </div>

        {/* modals */}

        <div className="modal fade" id="example3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Floor Summary</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body form-group row">
                    <form className='col-xs-2'>
                   
                    <div class="inline">
                        <label for="recipient-name" class="col-form-label">Selling Point</label>
                        <select type="date" class="form-control" id="">
                            <option value="">All</option>
                            <option value="">VLT</option>
                            <option value="">HLT</option>
                        </select>
                        
                        <label for="recipient-name" class="col-form-label">Scan Barcode</label>
                        <input type="barcode" class="form-control" id="barcode" onChange={floorSummary}/>
                        <label for="recipient-name" class="col-form-label">Row</label>
                        <input type="number" class="form-control" id="row" />

                    </div>

                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    {/* <button type="button" class="btn btn-primary"></button> */}
                </div>
                </div>
            </div>
      </div>

    </div>
  )
}
