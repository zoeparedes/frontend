import React from 'react';

const Sidebar = () => {
  return (
    <div style={{
      width: 200,
      backgroundColor: '#e74c3c',
      color: '#fff',
      height: '100vh',
      padding: 20,
      position: 'fixed'
    }}>
      <div style={{ marginBottom: 40 }}>
        <img src="https://via.placeholder.com/40" alt="Logo" />
        <h4>App Name</h4>
      </div>
      <nav style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        <span>Clientes</span>
        <span>Empleados</span>
        <span>Productos</span>
        <span>Ventas</span>
        <span>Proveedores</span>
        <span>Estadísticas</span>
        <span>Inventario</span>
      </nav>
    </div>
  );
};

export default Sidebar;
