import React from 'react'

export const CreateInternals = (props) => {

    const saveStopOrder=()=>{

        const amount = document.getElementById("amount").value
        const description = document.getElementById("description").value
        const creditor_number = document.getElementById("creditor_number").value
        const charge_typeid = document.getElementById("charge_type").value

        const priority = document.getElementById("priority").value
        const selling_pointid = document.getElementById("selling_point").value

        if (amount.trim()!=="") {
            const d = new Date();
            let date = d.getFullYear() + "-" + d.getMonth() + "-" + d.getDate()

            const requestOptions = {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    userid: 1,
                    amount: amount,
                    description: description,
                    creditor_number:creditor_number,
                    charge_typeid:charge_typeid,
                    priority: priority,
                    selling_pointid:selling_pointid,
                    created_at:""
                })
            };


            fetch('http://'+props.id_address+'/king/api/create_internal_stop_order.php', requestOptions)
                .then(response => response.json())
                .then(data => {
                    console.log(data[0])
                    if (data[0].response === "success") {

                        console.log(data[0])
                        // document.getElementById("barcode").value = ""
                        // document.getElementById("group").value = ""
                        // document.getElementById("lot").value = ""
                        // document.getElementById("junused").innerText = data[0].junused_bales
                        //

                    } else {
                       // document.getElementById("response").innerText = data[0].response
                    }
                });
        }else {
            //document.getElementById("response").innerText = " Capture Barcode"
        }

    }




    return (
    <div>
        <div className=''>
            <a href="/home">
                    <i className='bi bi-house-door'></i>
                </a>

            <h3>Create Internal Stoporders</h3>

        </div>
        <nav class="navbar navbar-expand-lg navbar-light bg-white card_10">
            <div class="container-fluid">
                {/* <a href="#" class="navbar-brand">Brand</a> */}
                <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                    <div class="navbar-nav">
                        <a href="" class="nav-item nav-link active" data-bs-toggle="modal" data-bs-target="#example">Create Stoporder</a>
                        <a href="" class="nav-item nav-link" data-bs-toggle="modal" data-bs-target="#example"></a>
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
                        <th>Name</th>
                        <th>Credit #</th>
                        <th>Selling Point</th>
                        <th>Season</th>
                        <th>Priority</th>
                        <th>Amount</th>
                    </thead><br />
                    <tbody>

                    {
                        props.internalStopOrdersData.map((u,i)=>{
                            return(
                                <tr data-bs-toggle="modal" data-bs-target="#example2">
                                    <td>{props.internalStopOrdersData[i].description}</td>
                                    <td>{props.internalStopOrdersData[i].creditor_number}</td>
                                    <td>{props.internalStopOrdersData[i].selling_point}</td>
                                    <td>{props.internalStopOrdersData[i].season}</td>
                                    <td>{props.internalStopOrdersData[i].priority}</td>
                                    <td>{props.internalStopOrdersData[i].amount}</td>
                                </tr>
                            )
                        })
                    }


                    </tbody>
                </table>
             

               </div>     

            </div>

            {/* modals */}
            
            <div class="modal fade" id="example" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="staticBackdropLabel">Create Internal Stoporder</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form action="">
                            <div className='row' >
                                <div className='col'>
                                    <label htmlFor="">Name</label>
                                    <input type="text" id='description' className='form-control' />
                                </div>
                                <div className='col'>
                                    <label htmlFor="">Internal Creditor #</label>
                                    <input type="text" id='creditor_number' className='form-control' />
                                </div>
                            </div>
                            <br />
                            <div className='row' >
                                <div className='col'>
                                    <label htmlFor="">Priority</label>
                                    <input type="number" id='priority' className='form-control' />
                                </div>
                                <div className='col'>
                                    <label htmlFor="">Amount</label>
                                    <input type="decimal" id='amount' className='form-control' />
                                </div>
                            </div><br />
                            <div className='row'>
                                <div className='col'>
                                <label htmlFor="">Charge Type</label>
                                <select name="" id="charge_type" className='form-control'>
                                    <option value="">Select Type</option>
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
                                    <label htmlFor="">Selling Point</label>
                                    <select name="" id="selling_point" className='form-control'>
                                        <option value="">Select Type</option>
                                        {
                                            props.sellingPointsData.map((u,i)=>{
                                                return(
                                                    <option value={props.sellingPointsData[i].id}>{props.sellingPointsData[i].name}</option>
                                                )
                                            })
                                        }

                                    </select>

                                </div>

                                {/* <div className='col'>
                                    <label htmlFor="">Quantity</label>
                                    <input type="number" className='form-control' />
                                </div>
                                 */}
                            </div>

                        </form>

                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary" onClick={saveStopOrder}>Submit</button>
                    </div>
                    </div>
                </div>
            </div>

            <div class="modal fade" id="example2" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="staticBackdropLabel">Edit Internal Stoporder</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form action="">
                            <div className='row' >
                                <div className='col'>
                                    <label htmlFor="">Name</label>
                                    <div></div>
                                </div>
                                <div className='col'>
                                    <label htmlFor="">Internal Creditor #</label>
                                    <div></div>
                                </div>
                            </div>
                            <br />
                            <div className='row' >
                                <div className='col'>
                                    <label htmlFor="">Priority</label>
                                    <input type="number" id='' className='form-control' />
                                </div>
                                <div className='col'>
                                    <label htmlFor="">Amount</label>
                                    <input type="decimal" id='' className='form-control' />
                                </div>
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

