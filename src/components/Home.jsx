import React from 'react';
import '../styles/login.css';
import Layout from './Layout';
import Navbar from './Navbar';
import Login from './Login';

const Home = () => {
	return (
		<Layout>
          <Navbar></Navbar>
          <Login></Login>
        </Layout>
	);
}

export default Home;