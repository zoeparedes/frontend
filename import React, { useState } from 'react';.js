import React, { useState } from 'react';

const AuthForm = () => {
  const [email, setEmail] = useState('');

  const handleEmailLogin = () => {
    if (!email) {
      alert('Por favor, ingresa un correo electrónico.');
      return;
    }
    // Aquí iría la lógica real para autenticar con email
    alert(`Iniciando sesión con: ${email}`);
  };

  const handleGoogleLogin = () => {
    // Aquí iría la lógica de autenticación con Google
    alert('Iniciar sesión con Google (simulado)');
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      <div style={{ backgroundColor: '#ff5a5a', height: 60 }}></div>

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 'calc(100vh - 60px)' }}>
        <div style={{
          backgroundColor: '#f2eded',
          padding: 40,
          width: 320,
          borderRadius: 8,
          textAlign: 'center'
        }}>
          <h2>Crea una cuenta</h2>
          <p style={{ margin: 0, marginBottom: 20, color: '#666', fontSize: 14 }}>Ingresa tu e-mail</p>

          <input
            type="email"
            placeholder="ejem.@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              width: '100%',
              padding: 10,
              marginBottom: 12,
              border: '1px solid #ccc',
              borderRadius: 4
            }}
          />

          <button
            onClick={handleEmailLogin}
            style={{
              backgroundColor: '#000',
              color: '#fff',
              border: 'none',
              padding: 12,
              width: '100%',
              borderRadius: 4,
              cursor: 'pointer',
              marginBottom: 16
            }}
          >
            Inicia sesión con email
          </button>

          <div style={{ color: '#999', margin: '12px 0' }}>o continua con</div>

          <div
            onClick={handleGoogleLogin}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 8,
              border: '1px solid #ddd',
              padding: 10,
              borderRadius: 4,
              backgroundColor: '#f9f9f9',
              cursor: 'pointer'
            }}
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
              alt="Google"
              style={{ width: 16, height: 16 }}
            />
            <span>Google</span>
          </div>

          <div style={{
            fontSize: 12,
            color: '#888',
            marginTop: 20
          }}>
            Al hacer clic en continuar, acepta nuestros Términos de servicio y Política de privacidad.
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
