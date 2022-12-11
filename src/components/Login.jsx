import React from 'react';
import '../styles/login.css';

const Login = () => {
	return (
		<div className="login">
			<div className="form-container">
				<h1 className="title">Iniciar Sesión</h1>
				<p className="subtitle">Introduce tu cuenta</p>
				<form action="/" className="form">
                    <label for="exampleInputEmail1" className="form-label">Nombre de usuario</label>
                    <input type="name" className="form-control" id="exampleInputEmail1"/>
					<label for="exampleInputPassword1" class="form-label">Contraseña</label>
                    <input type="password" class="form-control" id="exampleInputPassword1"/>
                    <br />
					<button type="submit" class="btn btn-success">Confirmar</button>
				</form>
			</div>
		</div>
	);
}

export default Login;