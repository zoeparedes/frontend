import React from 'react';

const RegisterClientModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.4)', display: 'flex',
      justifyContent: 'center', alignItems: 'center', zIndex: 999
    }}>
      <div style={{
        backgroundColor: '#fff', borderRadius: 8, padding: 24,
        width: 350, boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
      }}>
        <div style={{ backgroundColor: '#ff5a5a', color: '#fff', padding: 10, textAlign: 'center', borderRadius: '8px 8px 0 0', position: 'relative' }}>
          <strong>Registrar Cliente</strong>
          <button onClick={onClose} style={{ position: 'absolute', right: 12, top: 8, background: 'transparent', border: 'none', fontSize: 18, color: '#fff' }}>×</button>
        </div>

        <form style={{ display: 'flex', flexDirection: 'column', gap: 10, paddingTop: 10 }}>
          <input placeholder="Ingrese el nombre" />
          <input placeholder="Ingrese el apellido" />
          <input placeholder="Ingrese el telefono celular" />
          <input placeholder="Ingrese la dirección" />

          <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: 16 }}>
            <button type="submit" style={{ backgroundColor: '#1c4d4f', color: '#fff', border: 'none', padding: '8px 16px', borderRadius: 4 }}>Guardar</button>
            <button onClick={onClose} style={{ backgroundColor: '#e60000', color: '#fff', border: 'none', padding: '8px 16px', borderRadius: 4 }}>Cancelar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterClientModal;
