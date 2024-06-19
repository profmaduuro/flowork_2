import React from 'react'

export const CaptureInternals = (props) => {
    let splitid=0;
    let transporter_growersid=0;
    let growerid=0;
    let mySplit_transporter_growers_ids=0

    const createSaleStopOrder=(event)=>{

        const internal_stop_order_amountid=document.getElementById("stop_orders").value
        const quantity=document.getElementById("stop_order_quantity").value

        splitid=mySplit_transporter_growers_ids.split(",")[0]
        transporter_growersid=mySplit_transporter_growers_ids.split(",")[1]
        growerid=mySplit_transporter_growers_ids.split(",")[2]

        console.log(transporter_growersid)


        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                transporter_growersid: transporter_growersid,
                splitid: splitid,
                internal_stop_order_amountid:internal_stop_order_amountid,
                quantity:quantity,
                userid: 1
            })
        };

        fetch('http://localhost/king/api/create_split_internal_stop_order.php', requestOptions)
            .then(response => response.json())
            .then(data => {

                console.log("lots data "+data)

                getDeductions(mySplit_transporter_growers_ids)

            })

    }

    const getStopOrders=(event)=>{

    }
    const addStopOrder=(event)=>{
        //console.log(event.target.id,"ok id stoporders")
        mySplit_transporter_growers_ids=event.target.id


        //const id=document.getElementById("id").value
        splitid=mySplit_transporter_growers_ids.split(",")[0]
        transporter_growersid=mySplit_transporter_growers_ids.split(",")[1]
        growerid=mySplit_transporter_growers_ids.split(",")[2]


        var lots = document.getElementById("lots");




        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                transporter_growersid: transporter_growersid,
                splitid: splitid,
                userid: 1
            })
        };

        fetch('http://localhost/king/api/get_bales_for_processing.php', requestOptions)
            .then(response => response.json())
            .then(data => {

                console.log("lots data "+data)
                let Arr = [];
                let bales=0;

                data.map((u,i)=>{
                    Arr.push(data[i].lot)
                    bales++
                })

                let minValue = Math.min(...Arr);
                let maxValue = Math.max(...Arr);
                console.log("Minimum element is:" + minValue);
                console.log("Maximum Element is:" + maxValue);

                lots.innerText=minValue+"-"+maxValue+" ("+bales+" bales)"
                getDeductions(mySplit_transporter_growers_ids)

            })


    }

    const captureStopOrder=()=>{

    }





    const getDeductions=(mySplit_transporter_growers_ids)=>{
        //console.log(event.target.id,"ok id stoporders")
        //const mySplit_transporter_growers_ids=event.target.id




        //const id=document.getElementById("id").value
        splitid=mySplit_transporter_growers_ids.split(",")[0]
        transporter_growersid=mySplit_transporter_growers_ids.split(",")[1]
        growerid=mySplit_transporter_growers_ids.split(",")[2]


        var x = document.getElementById("tbody1");



        var tr =null;

        var grower=null;
        var sale=null;
        var internal=null;
        var amount=null;
        var quantity= null;
        var delete_record=null


        while (x.hasChildNodes()) {
            x.removeChild(x.firstChild);
        }


        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                transporter_growersid: transporter_growersid,
                splitid: splitid,
                userid: 1
            })
        };


        fetch('http://localhost/king/api/get_split_internal_stop_order.php', requestOptions)
            .then(response => response.json())
            .then(data => {
                console.log(data,"my new data")

                // let minValue = Math.min(...Arr);
                // let maxValue = Math.max(...Arr);

                // console.log("Minimum element is:" + minValue);
                // console.log("Maximum Element is:" + maxValue);

                let count=0

                // eslint-disable-next-line array-callback-return
                data.map((u, i) => {


                    console.log(data[i], "my new data")
                    console.log(count, "count")

                    // console.log(u,"data")
                    let tr = document.createElement("tr");

                    console.log(tr.key,"key")
                    if (data.length>=count){





                        grower = document.createElement("td");
                        sale = document.createElement("td");
                        internal = document.createElement("td");
                        amount = document.createElement("td");
                        quantity = document.createElement("td");



                        var growerData = document.createTextNode(data[i].grower_num);
                        var saleData = document.createTextNode(data[i].splitid);
                        var internalData = document.createTextNode(data[i].description);
                        var amountData = document.createTextNode(data[i].amount);
                        var quantityData = document.createTextNode(data[i].quantity);

                        grower.appendChild(growerData)
                        sale.appendChild(saleData)
                        internal.appendChild(internalData)
                        amount.appendChild(amountData)
                        quantity.appendChild(quantityData)


                        tr.appendChild(grower)
                        tr.appendChild(sale)
                        tr.appendChild(internal)
                        tr.appendChild(amount)
                        tr.appendChild(quantity)



                        x.appendChild(tr)
                    }

                    count++
                })

            });

    }




    return (
    <div>
        <div className=''>
            <a href="/home">
                    <i className='bi bi-house-door'></i>
                </a>

            <h3>Capture Internal Stoporders</h3>

        </div>
        <br />

        <div className='card_10'>
                <h4> Growers</h4>
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
                        <th>Sale Date</th>
                        <th>Grower</th>
                        <th>Name</th>
                        <th>Bales</th>
                        <th>Selling Point</th>
                        <th>Season</th>
                    </thead><br />
                    <tbody >

                    {
                        props.captureInternalsData.map((u,i)=> {
                            console.log(props.captureInternalsData);
                            let id = []
                            id.push(props.captureInternalsData[i].splitid)
                            id.push(props.captureInternalsData[i].transporter_growersid)
                            id.push(props.captureInternalsData[i].growerid)

                            return(
                                <tr >
                                    <td>{props.captureInternalsData[i].created_at}</td>
                                    <td>{props.captureInternalsData[i].grower_num}</td>
                                    <td>{props.captureInternalsData[i].name}</td>
                                    <td>{props.captureInternalsData[i].number_of_bales}</td>
                                    <td>{props.captureInternalsData[i].selling_point_name}</td>
                                    <td>2024</td>
                                    <td><a href="" data-bs-toggle="modal" data-bs-target="#example2" id={id} onClick={addStopOrder}>Add StopOrder</a></td>

                                </tr>
                            )
                        })
                    }

                    </tbody>
                </table>
             

               </div>     

            </div>
                

            {/* Modals */}

                <div className="modal fade" id="example2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-lg">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Internals Batching</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">

                        <div className='row'>
                            <div className='col'>
                                <h4>V123456</h4>
                            </div>
                            <div className='col'>
                                <h5>LOTS</h5>
                                <h5 ><b id="lots"></b></h5>
                            </div>
                                
                                
                        </div>
                            <br />
                         <div className='row'> 
                            <div className='col'>
                               <label htmlFor="">Stoporder</label>
                               <select type="text" id="stop_orders" className='form-control'>
                                <option value="">Select Internal</option>

                                   {

                                       props.internalStopOrdersData.map((u,i)=>{
                                           return(
                                                   <option value={props.internalStopOrdersData[i].id}>{props.internalStopOrdersData[i].description}</option>
                                               )

                                       })
                                   }

                               </select>
                            </div>
                            <div className='col'>
                               <label htmlFor="">Quantity</label>
                               <input type="number" id="stop_order_quantity" className='form-control'/>
                            </div>
                            {/* <div className='col'>
                               <label htmlFor="">ID</label>
                               <input type="number" className='form-control' />
<<<<<<< HEAD
                            </div>
                            {/* <div className='col'>*/}
                            {/*   <label htmlFor="">1st Lot</label>*/}
                            {/*   <input type="text" className='form-control' />*/}
                            {/*</div>*/}
                            {/*<div className='col'>*/}
                            {/*   <label htmlFor="">Last Lot</label>*/}
                            {/*   <input type="text" className='form-control' />*/}
                            {/*</div>*/}
                             {/*<div> */}
                            {/* <div className='col'>
                               <label htmlFor="">1st Lot</label>
                               <input type="text" className='form-control' />
                            </div>
                            <div className='col'>
                               <label htmlFor="">Last Lot</label>
                               <input type="text" className='form-control' />
                            </div> */}

                            <div className='col'>
                               <label htmlFor="">.</label>
                               <button type="text" className='btn btn-primary' onClick={createSaleStopOrder}>Submit</button>
                            </div>
                        </div>
                        <br />   
                        <div className='card_10'>
                        <div className='table-responsive' style={{ maxHeight: "250px", 
                            overflowY: "auto", maxWidth: "auto" }}>
                            <table className='table table-striped table-hover tableFixHead '>
                                <thead className='card_10' style={{ position: "sticky", 
                                    top: "0" }}>
                                    <tr>

                                    <th>Grower</th>
                                    <th>Sale</th>
                                    <th>Internal</th>
                                    <th>Amount</th>
                                    <th>Quantity</th>
                                    </tr>
                                </thead>
                                <tbody id="tbody1">

                                   
                                </tbody>

                            </table>
                            </div>
                            </div>
                        
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                        </div>
                    </div>
            </div>


    </div>
  )
}
