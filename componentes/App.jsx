import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import ClientTable from './components/ClientTable';
import RegisterClientModal from './components/RegisterClientModal';

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Sidebar />
      <ClientTable onCreateClient={() => setModalOpen(true)} />
      <RegisterClientModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}

export default App;