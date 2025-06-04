import React from 'react'
import "./buyer.css";

const Buyer = (props) => {


    const createBuyer=()=>{

        const name=document.getElementById("name").value
        const buyer_code=document.getElementById("buyer_code").value
        const selling_points=document.getElementById("selling_points").value


        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                name:name,
                buyer_code:buyer_code,
                userid: 1,
                selling_pointid:selling_points,
                created_at:"06-08-2024"
            })
        };


        fetch('http://'+props.id_address+'/king/api/create_buyer.php', requestOptions)
            .then(response => response.json())
            .then(data => {
                console.log(data[0].response,"Success")

            });

    }
    const getSellingPoints=(event)=>{
        // id = event.target.id;
        // document.getElementById("id").value=id
        //
        // console.log(id)

        var x = document.getElementById("selling_points");


        var name =null;



        while (x.hasChildNodes()) {
            x.removeChild(x.firstChild);
        }

        console.log(props.sellingPointsData,"kkkkkkk")

        props.sellingPointsData.map((u,i)=>{
            console.log(i,"my new data")
            name = document.createElement("option");
            name.value=props.sellingPointsData[i].id


            var opt = document.createTextNode(props.sellingPointsData[i].name);

            name.appendChild(opt)

            x.appendChild(name)


        })



    }


    //getSellingPoints()
    console.log(props.buyersData,"oo");
    return (
    <div>

        <a href="/">
               <i className='bi bi-house-door'></i>
            </a>
        <h4 className='bi bi-home'>Create Buyer</h4>

        <div className='card_1 center'>

           <form action="" className=''>
             <label htmlFor="">Buyer Name</label>
             <input type="text" className='form-control' id="name"/>
             <br/>
             <label htmlFor="">Buyer Code</label>
             <input type="text" className='form-control' id="buyer_code"/>
             <br/>
             <label htmlFor="">Selling Point</label>
             <select type="text" className='form-select' id="selling_points">
                 {
                     props.sellingPointsData.map((u,i)=>{
                     return(
                         <option value={props.sellingPointsData[i].id}>{props.sellingPointsData[i].name} </option>
                     )
                     })
                 }

             </select>
             <br />


           </form>
            <button type="submit" name="" id="" className='btn btn-primary' onClick={createBuyer}>Submit</button>
        </div>
        <br/>
        <br/>

        <h5>Buyers</h5>

        <div className='card_1'>

        <table class="table table-striped table-hover">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Buyer Code</th>
                <th scope="col">Selling Point</th>
                <th scope='col'>Action</th>
                </tr>
            </thead>
            <tbody id="tbody">


            {

                props.buyersData.map((u,i)=>{

                    return(
                        <tr>
                            <th scope="row">{props.buyersData[i].id}</th>
                            <td>{props.buyersData[i].name}</td>
                            <td>{props.buyersData[i].buyer_code}</td>
                            <td>{props.buyersData[i].selling_point_name}</td>
                            <td>
                                <a href='#exampleModal' className='bi bi-pencil-square me-3'
                                   data-bs-toggle="modal" data-bs-target="#exampleModal" id={props.buyersData[i].id}></a>
                                <a href='#' className='bi bi-trash' data-bs-toggle="modal" data-bs-target="#exampleModal_1" id={props.buyersData[i].id}></a>

                            </td>
                        </tr>
                    )
                })
            }


             </tbody>

             </table>

         

        </div>

        {/* Modals */}

        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Edit Buyer</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form>
                    <div class="mb-3">
                        <label for="recipient-name" class="col-form-label">Buyer Name:</label>
                        <input type="text" class="form-control" id="recipient-name" />
                    </div>
                    <div class="mb-3">
                        <label for="recipient-name" class="col-form-label">Buyer Code:</label>
                        <input type="text" class="form-control" id="recipient-name" />
                    </div>
                    <div class="mb-3">
                        <label for="recipient-name" class="col-form-label">Selling Point:</label>
                        <select type="text" class="form-select" id="recipient-name">
                            <option value="select point">Select Selling Point</option>
                            <option value="">VisionLeaf Tobacco</option>
                            <option value="">Horizon</option>
                        </select>
                    </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Update</button>
                </div>
                </div>
            </div>
        </div>

        <div class="modal fade" id="exampleModal_1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Delete Buyer</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <p>Are you sure you want to delete???</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                    <button type="submit" class="btn btn-primary">YES</button>
                </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Buyer;
