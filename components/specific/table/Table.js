import React from 'react'

function Table1() {
  return (
    <div>
    <div className="page-wrapper">
    <div className="page-content">
      
      <h6 className="mb-0 text-uppercase">DataTable </h6>
      <hr/>
      <div className="card">
        <div className="card-body">
          <div className="table-responsive">
            <table id="example" className="table table-striped table-bordered" style={{width:"100%"}}>
              <thead>
                <tr>
                  <th>Category</th>
                  <th>Name</th>
                  <th>Image</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
              <tr>
										<td>Laptop Skins One</td>
										<td>Abstract & Doodles</td>
										<td>image</td>
										<td>edit</td>
						
									</tr>

                  <tr>
										<td>Laptop</td>
										<td>IndiaMart</td>
										<td>image</td>
										<td>delete</td>
						
									</tr>

                  <tr>
										<td>Laptop</td>
										<td>Doodles </td>
										<td>image</td>
										<td>edit</td>
						
									</tr>
              </tbody>

              <tfoot>  
              <tr>
                <th>Category</th>
                  <th>Name</th>
                  <th>Image</th>
                  <th>Action</th>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
      
      
    </div>
  </div>
  </div>
  )
}

export default Table1
