
import React, { useState, useEffect } from 'react';
import Form from '../form/Form';
import axios from 'axios';

const authToken = localStorage.getItem('authToken');

function SubCategory() {
  const [subcategories, setSubcategories] = useState([]);
  const [error, setError] = useState('');

  const fetchData = async () => {
    try {
      const response = await axios.get('https://api.noava.in/v1/subcategory', {
        headers: {
          Authorization: `Bearer ${authToken}`
        }
      });
      console.log("auth",authToken)
      const subcategoriesData = response.data.content.map(subcategory => ({
        ...subcategory,
        categoryName: subcategory.category.name.trim(),
      }));
      setSubcategories(subcategoriesData);
    } catch (error) {
      console.error('There was an error fetching the data!', error);
      setError('Failed to fetch data. Please try again later.');
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div className="page-wrapper">
        <div className="page-content">
          <div className="d-flex align-items-center mb-3">
            <h6 className="mb-0 text-uppercase">DataTable</h6>
            <div className="ms-auto">
            <Form fetchData={fetchData} />
            </div>
          </div>
          <hr />
          <div className="card">
            <div className="card-body">
              <div className="table-responsive">
                <table id="example" className="table table-striped table-bordered" style={{ width: '100%' }}>
                  <thead>
                    <tr>
                      <th>Category</th>
                      <th>Name</th>
                      <th>Image</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {subcategories.map(sub => (
                      <tr key={sub.id}>
                        <td>{sub.categoryName}</td>
                        <td>{sub.name}</td>
                        <td>
                          <img src={sub.image} alt={sub.name} width="50" />
                        </td>
                        <td>
                          <button type="button" className="btn btn-outline-primary px-4 radius-30 me-2">Edit</button>
                          <button type="button" className="btn btn-outline-danger px-4 radius-30">Delete</button>
                        </td>
                      </tr>
                    ))}
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
  );
}

export default SubCategory;

