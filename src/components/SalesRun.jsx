import React from 'react'


const SalesRun = (props) => {

    const createStartOfDay=()=>{


        const date=document.getElementById("sale_date").value
        const exchange_rate=document.getElementById("exchange_rate").value


        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                description:date,
                amount:exchange_rate,
                userid: 1,
                created_at:"06-08-2024"
            })
        };


        fetch('http://'+props.id_address+'/king/api/create_start_of_day.php', requestOptions)
            .then(response => response.json())
            .then(data => {
                console.log(data[0].response,"Success")

            });

    }


  return (
    <div>
      <a href="/home">
              <i className='bi bi-house-door'></i>
            </a>

            <h3 className='bi bi-home'>Grower Registration</h3>
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
     <div className='card_10'>
      <div className='table-responsive' data-bs-spy="scroll" style={{ maxHeight: "500px", 
                    overflowY: "auto" }}>
        <table className='table table-striped table-hover'>
            <thead style={{ position: "sticky", 
                    top: "0" }} className='card_10'>
                <tr>
                    <th>Id</th>
                    <th>Date</th>
                    <th>Rate</th>
                    <th>Active</th>
                </tr>
            </thead>
            <tbody>

            {
                props.startOfDayData.map((u,i)=>{
                    return(
                        <tr>
                            <td>{props.startOfDayData[i].id}</td>
                            <td>{props.startOfDayData[i].description}</td>
                            <td>{props.startOfDayData[i].amount}</td>
                            <td>{props.startOfDayData[i].active}</td>
                        </tr>
                    )
                })
            }
            </tbody>

        </table>

      </div>
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
                    <button type="button" class="btn btn-primary" onClick={createStartOfDay}>Submit</button>
                </div>
                </div>
            </div>
      </div>
     
    </div>
  )
}

export default SalesRun;