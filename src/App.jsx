import { Route, Routes } from 'react-router-dom';

import { Signin } from '@internals/pages';

function App() {
  return (
    <>
      <Routes>
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </>
  );
}

export default App;
