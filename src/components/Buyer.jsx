import React from 'react'
import "./buyer.css";

const Buyer = (props) => {
  return (
    <div>

        <a href="/">
               <i className='bi bi-house-door'></i>
            </a>
        <h4 className='bi bi-home'>Create Buyer</h4>

        <div className='card_1 center'>

           <form action="" className=''>
             <label htmlFor="">Buyer Name</label>
             <input type="text" className='form-control' />
             <br/>
             <label htmlFor="">Buyer Code</label>
             <input type="text" className='form-control' />
             <br/>
             <label htmlFor="">Selling Point</label>
             <select type="text" className='form-select'>
                <option value="">Select Selling Point</option>
                <option value="VLT">Vision Leaf Tobacco</option>
                <option value="HLT">Horizon Leaf Tobacco</option>
                <option value="VTT">Victory Tobacco</option>
             </select>
             <br/>
             <label htmlFor="">Upload Grades</label>
             <input type="file" className='form-control' />
             <br />
             <button type="submit" name="" id="" className='btn btn-primary'>Submit</button>

           </form>

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
            <tbody>
             <tr>
                <th scope="row">1</th>
                <td>ILT</td>
                <td>PA2</td>
                <td>Vision Leaf Tobacco</td>
                <td>
                <a href='#exampleModal' className='bi bi-pencil-square me-3'
                     data-bs-toggle="modal" data-bs-target="#exampleModal"></a>
                    <a href='#' className='bi bi-trash' data-bs-toggle="modal" data-bs-target="#exampleModal_1"></a>

                </td>
             </tr>
             <tr>
                <th scope="row">1</th>
                <td>ILT</td>
                <td>PA2</td>
                <td>Vision Leaf Tobacco</td>
                <td>
                <a href='#exampleModal' className='bi bi-pencil-square me-3'
                     data-bs-toggle="modal" data-bs-target="#exampleModal"></a>
                    <a href='#' className='bi bi-trash' data-bs-toggle="modal" data-bs-target="#exampleModal_1"></a>

                </td>
             </tr>
             <tr>
                <th scope="row">1</th>
                <td>ILT</td>
                <td>PA2</td>
                <td>Vision Leaf Tobacco</td>
                <td>
                    <a href='#exampleModal' className='bi bi-pencil-square me-3'
                     data-bs-toggle="modal" data-bs-target="#exampleModal"></a>
                    <a href='#' className='bi bi-trash' data-bs-toggle="modal" data-bs-target="#exampleModal_1"></a>

                </td>
             </tr>

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
