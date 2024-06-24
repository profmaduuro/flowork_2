import React from 'react'
import './selling.css'

const SellingPoint = (props) => {


    const selling_point=()=>{

        const name=document.getElementById("name").value
        const floor_code=document.getElementById("floor_code").value
        const floor_id=document.getElementById("floor_id").value


        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                name:name,
                floor_code:floor_code,
                userid: 1,
                floor_id:floor_id,
                created_at:"06-08-2024"
            })
        };


        fetch('http://'+props.id_address+'/king/api/create_selling_point.php', requestOptions)
            .then(response => response.json())
            .then(data => {
                console.log(data[0].response,"Success")

            });

    }



  return (
    <div>
      <a href="/">
               <i className='bi bi-house-door'></i>
            </a>
      <h3 className='bi bi-home'>Create Selling Points</h3>

      <br />

      <div className='card_1 center'> 

      <form action="" className=''>
    
        <label htmlFor="File to Upload">Name</label>
        <input type="text" className='form-control' placeholder='Enter Name' id="name"/>

        <br />

        <label htmlFor="File to Upload">Floor Code</label>
        <input type="text" className='form-control' placeholder='Enter Floor Code' id="floor_code"/>
        
        <br />
        <label htmlFor="File to Upload">Floor ID</label>
        <input type="text" className='form-control sm' placeholder='Enter Floor id' id="floor_id" />

        <br />
        </form>
          <button type="submit" className='btn btn-primary' value='Submit' onClick={selling_point}>Submit</button>
        
      </div>

      <br />
      <br />
      <br />

      <h4 className='bi bi-home'>Selling Points</h4>

      <div className='card_1'>
        <table class="table table-striped table-hover">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Floor Code</th>
                <th scope="col">Floor Id</th>
                <th>Action</th>
                </tr>
            </thead>
            <tbody>
             <tr>
                <th scope="row">1</th>
                <td>Vision Leaf Tobacco</td>
                <td>VLT</td>
                <td>VL</td>
                <td>
                <a href='#exampleModal' className='bi bi-pencil-square me-3'
                     data-bs-toggle="modal" data-bs-target="#exampleModal"></a>
                    <a href='#' className='bi bi-trash' data-bs-toggle="modal" data-bs-target="#exampleModal_1"></a>
                </td>
             </tr>
             <tr>
                <th scope="row">2</th>
                <td>Horizon Leaf Tobacco</td>
                <td>HLT</td>
                <td>HL</td>
                <td>
                <a href='#exampleModal' className='bi bi-pencil-square me-3'
                     data-bs-toggle="modal" data-bs-target="#exampleModal"></a>
                    <a href='#' className='bi bi-trash' data-bs-toggle="modal" data-bs-target="#exampleModal_1"></a>
                </td>
             </tr>
             <tr>
                <th scope="row">3</th>
                <td>Victory Leaf Tobacco</td>
                <td>VTT</td>
                <td>VT</td>
                <td>
                <a href='#exampleModal' className='bi bi-pencil-square me-3'
                     data-bs-toggle="modal" data-bs-target="#exampleModal"></a>
                    <a href='#' className='bi bi-trash' data-bs-toggle="modal" data-bs-target="#exampleModal_1"></a>
                </td>
             </tr>
             <tr>
                <th scope="row">3</th>
                <td>Vision Leaf Tobacco</td>
                <td>VLT</td>
                <td>VL</td>
                <td>
                <a href='#exampleModal' className='bi bi-pencil-square me-3'
                     data-bs-toggle="modal" data-bs-target="#exampleModal"></a>
                    <a href='#' className='bi bi-trash' data-bs-toggle="modal" data-bs-target="#exampleModal_1"></a>
                </td>
             </tr>
             <tr>
                <th scope="row">4</th>
                <td>Vision Leaf Tobacco</td>
                <td>VLT</td>
                <td>VL</td>
                <td>
                <a href='#exampleModal' className='bi bi-pencil-square me-3'
                     data-bs-toggle="modal" data-bs-target="#exampleModal"></a>
                    <a href='#' className='bi bi-trash' data-bs-toggle="modal" data-bs-target="#exampleModal_1"></a>
                </td>
             </tr>
             <tr>
                <th scope="row">5</th>
                <td>Vision Leaf Tobacco</td>
                <td>VLT</td>
                <td>VL</td>
             </tr>

            </tbody>
  ...
        </table>
      </div>

      {/* Modals */}

      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Edit Selling Point</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form>
                    <div class="mb-3">
                        <label for="recipient-name" class="col-form-label">Name:</label>
                        <input type="text" class="form-control" id="recipient-name" />
                    </div>
                    <div class="mb-3">
                        <label for="recipient-name" class="col-form-label">Floor Code:</label>
                        <input type="text" class="form-control" id="recipient-name" />
                    </div>
                    <div class="mb-3">
                        <label for="recipient-name" class="col-form-label">Floor ID:</label>
                        <input type="text" class="form-select" id="recipient-name" />
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
  );
}

export default SellingPoint;
