import React, { useState } from 'react'
import axios from 'axios';
const authToken = localStorage.getItem('authToken');
function Form({ fetchData }) {
    const [category, setCategory] = useState('');
    const [subcategory, setSubcategory] = useState('');
    const [image, setImage] = useState(null);
    const [error, setError] = useState('');
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      if (!category.trim() || !subcategory.trim()) {
        setError('Please fill in all fields.');
        return;
      }
  
      try {
        const subCategoryData = {
          name: subcategory,
          category: { name: category } 
        };
  
        const formData = new FormData();
        formData.append('subCategory', JSON.stringify(subCategoryData));
        formData.append('imageFile', image);
  
        const response = await axios.post('https://api.noava.in/v1/subcategory', formData, {
          headers: {
            Authorization: `Bearer ${authToken}`,
            'Content-Type': 'multipart/form-data'
          }
        });
  console.log("SD",authToken);
        if (response.status === 201) {
          fetchData();
          setCategory('');
          setSubcategory('');
          setImage(null);
          setError('');
        }
      } catch (error) {
        console.error('There was an error submitting the form!', error);
        setError('Failed to submit data. Please try again later.');
      }
    };
  
    const handleImageChange = (e) => {
      const file = e.target.files[0];
      if (file) {
        setImage(file);
      }
    };
  


  return (
    <div>
    <div className="col">
      <button type="button" className="btn btn-outline-primary px-5 radius-30" data-bs-toggle="modal" data-bs-target="#exampleModal">
        <i className='bx bx-plus-circle'></i> SubCategory
      </button>
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Subcategory</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className='p-3'>
            <div className="card">
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <label htmlFor="categoryInput" className="form-label text-black">Enter your category</label>
                  <input 
                    className="form-control" 
                    list="datalistOptions" 
                    id="categoryInput" 
                    placeholder="Type to search..." 
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                  />
                  <datalist id="datalistOptions">
                    <option value="Laptop" />
                    <option value="Mobile" />
                  </datalist>
                  <label htmlFor="SubcategoryInput" className="form-label text-black pt-3">Enter Subcategory name</label>
                  <input 
                    className="form-control" 
                    id="SubcategoryInput" 
                    placeholder="Type to search..."   
                    value={subcategory}
                    onChange={(e) => setSubcategory(e.target.value)}
                  />
                  <label htmlFor="formFile" className="form-label text-black pt-3">Upload Image</label>
                  <input 
                    className="form-control" 
                    type="file" 
                    id="formFile" 
                    onChange={handleImageChange}
                  />
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary">Clear</button>
                    <button type="submit" className="btn btn-primary">Submit</button>
                  </div>
                  {error && <p className="text-danger">{error}</p>}
                </form>
              </div>
            </div></div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
}

export default Form






    // const handleSubmit = async (e) => {
    //   e.preventDefault();
  
    //   const subCategoryData = {
    //     category: category,
    //     name: subcategory
    //   };
  
    //   const blob = new Blob([JSON.stringify(subCategoryData)], { type: "application/json" });
    //   const formData = new FormData();
    //   formData.append("subCategory", blob);
    //   formData.append("image", image);
  
    //   try {
    //     const response = await axios.post("https://api.noava.in/v1/subcategory", formData, {
    //       headers: {
    //         Authorization: `Bearer ${authToken}`,
    //         'Content-Type': 'multipart/form-data'
    //       },
    //     });
  
    //     if (response.status === 201) {
    //       fetchData();
    //       setCategory('');
    //       setSubcategory('');
    //       setImage(null);
    //       setError('');
    //     }
    //   } catch (error) {
    //     console.error('There was an error submitting the form!', error);
    //     setError('Failed to submit data. Please try again later.');
    //   }
    // };
    // const handleImageChange = (e) => {
    //     const file = e.target.files[0];
    //     if (file) {
    //       setImage(file);
    //     }
    //   };