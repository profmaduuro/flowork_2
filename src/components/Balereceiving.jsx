import React from 'react'
import './balereceiving.css'
import Badge from 'react-bootstrap/Badge';

export const Balereceiving = (props) => {
  return (
    <div>
        <div>
            <a href="/home">
            <i className='bi bi-house-door'></i>
                </a>
                
                <h5 className='navbar-expand-lg navbar-light bg-light card_10'>Bale Receiving</h5>
            
        </div>
        

        <br />

        <div className='col-auto card_10 col-sm-4'>
            <div className='form'>
                <div>
                    <p>echo #bales received/ echo is balanced</p>
                </div>
                <form action="">
                    <label htmlFor="">Barcode</label>
                    <input type="text" className='form-control' />
                    <label htmlFor="">Grower</label>
                    <input type="text" className='form-control' />
                    <label htmlFor="">Group</label>
                    <input type="text" className='form-control' />
                    <label htmlFor="">Lot</label>
                    <input type="text" className='form-control' />
                    <br />
                    <button type='button' className='btn btn-success'>Receive <Badge bg="secondary">9</Badge></button>
                </form>
                <br />
                <div>
                    <button className='btn btn-primary'>Complete Grower</button>
                </div>

            </div>

        </div>

        <br />

        {/* <div className='col-auto card_10 col-sm-4'>
            <div className=''>
              <p>V125160</p>




            </div>

        </div> */}

        {/* modals */}

        



    </div>
  )
}
