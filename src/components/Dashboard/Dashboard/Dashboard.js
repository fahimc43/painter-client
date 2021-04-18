import React from 'react';
import Book from '../Book/Book';
import Sidebar from '../Sidebar/Sidebar';


const Dashboard = () => {
    return (
        <section>
            <div className="container row">
                <div className="col-md-3">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-9">
                    <Book></Book>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;