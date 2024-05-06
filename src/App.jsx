import React, { useEffect } from 'react';
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';

import './css/style.css';

import './charts/ChartjsConfig';
import Analytics from './partials/dashboard/analytics';

// Import pages
import Dashboard from './pages/Dashboard';
import Department from './partials/dashboard/department';
import Customer from './partials/dashboard/customer';
import Priorities from './partials/dashboard/priorities';
import EditFormnih from './partials/EditForm';
import Form from './partials/AddForm';

function App() {

  const location = useLocation();

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
      </Routes>
      <Routes>
        <Route exact path="/dashboard/analytics" element={<Analytics />} />
      </Routes>
      <Routes>
        <Route exact path="/finance/department" element={<Department />} />
      </Routes>
      <Routes>
        <Route exact path="/finance/customer-service" element={<Customer />} />
      </Routes>
      <Routes>
        <Route exact path="/finance/priorities" element={<Priorities />} />
      </Routes>
      <Routes>
        <Route exact path="/customer/tambah" element={<Form />} />
      </Routes>
      <Routes>
        <Route exact path="/customer-service/2255011002/${id_customer_service}" element={<EditFormnih />} />
      </Routes>
    </>
  );
}

export default App;
