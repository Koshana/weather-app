import React from 'react'

import '../styles/addCity.css';

const AddCity = () => {
  return (
    <div className='row'>
        <div className='col'>
            <form className="d-flex justify-content-center addCity">
                <input className="form-control me-2" type="search" placeholder="Enter a City"/>
                <button className="btn btn-info sm-block" type="submit">Add City</button>
            </form>
        </div>
    </div>
  )
}

export default AddCity