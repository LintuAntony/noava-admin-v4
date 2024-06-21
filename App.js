import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import AppContent from './App/app-content/AppContent.js';
// function App() {

//   return (
//     <div >
//     <Router>
//        <Slidebar/>
//        <Header/>
      
//       <Footer/>
//       <Routes>
//         <Route path='default' element={ <Default/>}/>
//         <Route path='sub-category' element={<SubCategory/>}/>
//       </Routes>
//     </Router>
     

//     </div>
//   );
// }

// export default App;


function App() {
  return (
    <Router>
     <AppContent/>
    </Router>
  );
}

export default App;