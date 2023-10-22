// LoginModal.js
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
// import { Modal, Button } from 'react-bootstrap'; // Import Bootstrap modal components
// import '@babel/plugin-transform-private-property-in-object';

// function LoginModal({ show, onHide }) {
//   return (
//     <Modal show={show} onHide={onHide}>
//       <Modal.Header closeButton>
//         <Modal.Title>Login</Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         {/* Add your login form or content here */}
//       </Modal.Body>
//       <Modal.Footer>
//         <Button variant="secondary" onClick={onHide}>
//           Close
//         </Button>
//         <Button variant="primary" onClick={onHide}>
//           Login
//         </Button>
//       </Modal.Footer>
//     </Modal>
//   );
// }
// export default LoginModal;

const LoginModal = ({ onClose }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const handleLogin = () => {
      // Send the username and password to the server to authenticate the user.
    };
  
    return (
      <div className="login-modal">
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
        <button onClick={onClose}>Close</button>
      </div>
    );
  };
  
  export default LoginModal;