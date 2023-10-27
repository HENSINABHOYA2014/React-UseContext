import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import A from './Components/A';
import B from './Components/B';
import { createContext } from 'react';

export const DataContext = createContext(); // Renamed dataContext to DataContext

function App() {
  const data = [
    {
      name: 'Hensi',
      email: 'hensi@gmail.com',
      phone: '52014',
    },
    {
      name: 'Shruti',
      email: 'shruti@gmail.com',
      phone: '85201',
    },
  ];

  return (
    <div className="App">
      <DataContext.Provider value={data}> {/* Use DataContext.Provider */}
        <BrowserRouter>
          <Routes>
            <Route path="/a" element={<A />} /> {/* Corrected the Route */}
            <Route path="/b" element={<B />} /> {/* Added a separate Route for '/b' */}
          </Routes>
        </BrowserRouter>
      </DataContext.Provider>
    </div>
  );
}

export default App;
