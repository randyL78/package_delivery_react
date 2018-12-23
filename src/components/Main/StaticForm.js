import React from 'react';

const StaticForm = props => 
  <div>
    <h1>Check your package delivery Time and Weather in one place!</h1>
    <form>
      <div className="col-6">
        <label htmlFor="search">Please enter a UPS tracking number</label>
        <input type="text" name="search" id="search" className="form-field" defaultValue="XCA123YHE85D23400" />
      </div>
      <button type="submit centered" className="button-secondary text-white">Search</button>
    </form>
  </div>

export default StaticForm;