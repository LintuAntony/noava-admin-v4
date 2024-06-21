import React,{useState,useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Footer from "../../components/common/footer/Footer.js";
import Header from "../../components/common/header/Header.js";
import Slidebar from "../../components/common/slidebar/Slidebar.js";
import Default from '../../components/pages/Dashboard/default/Default.js';
import SubCategory from '../../components/pages/Category/SubCategory.js';


import Table1 from '../../components/specific/table/Table.js';
// const AppContent = () => {
//     const [isLoginPage, setIsLoginPage] = useState(true);
//     const location = useLocation();
  
//     useEffect(() => {
//       setIsLoginPage( location.pathname === "/" );
//     }, [location]);
  
//     return (
//       <div>
//         {!isLoginPage && (
//           <>
            // <Slidebar />
            // <Header />
           
            // <Footer />
//           </>
//         )}
  
//         <Routes>
//          {isLoginPage && <Route path="/" element={<Login setIsLoginPage={setIsLoginPage} />} />} 
//           <Route path='default' element={ <Default/>}/>
//         {/* <Route path='sub-category' element={<SubCategory/>}/> */}
//         <Route path='tables' element={<Table1/>}/>
  
//         </Routes>
//       </div>
  //   );
  // };
  // export default AppContent;

const AppContent = () => {

return(
<>

      <Slidebar />
      <Header />
      <Routes>
    
        <Route path="default" element={<Default />} /> 
        <Route path="tables" element={<Table1 />} /> 
        <Route path="sub-category" element={<SubCategory />} />

      </Routes>
      <Footer />
    
</>

);
};
export default AppContent;