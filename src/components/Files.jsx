import React from 'react';
import './Files.css';


const Files =(props)=> {
  return (
    <div>
      <div>

      <a href="/home">
                <i className='bi bi-house-door'></i>
              </a>
      <h3 className='bi bi-home'>Files Management</h3>

      </div>
      
      <br />

      <div className='col-auto card_10 col-sm-6'> 

      <form action="">
    
        <label htmlFor="File to Upload"></label>
        <select type="text"  className='form-select'>
          <option>SELECT FILE </option>
          <option>Grower Booking</option>
          <option>Stoporder File</option>
          <option>Grower Registry</option>
          <option>TIMB Creditor Schedule</option>
        </select>

        <br />
        


        <input type="file" className='form-control sm' />

        <br />

        <div class="modal-footer">
                    <a href="#" download="#">
                    <button type="button" class="btn btn-secondary" download>Generate Sale File</button>
                      </a>
                    <button type="button" class="btn btn-primary">Submit</button>
                </div>

        </form>
        
      </div>
     
    </div>
  )
}

export default Files