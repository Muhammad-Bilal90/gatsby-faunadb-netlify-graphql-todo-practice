import React from 'react';
import Layout from '../Layout/layout';
import Todos from '../components/todos';
import { Router } from "@reach/router";


const Dashboard = () => {
    return (
        <Layout>
            <Router>
                <Todos path="/dashboard" />
            </Router>
        </Layout>
    );
}

export default Dashboard;