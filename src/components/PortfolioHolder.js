import React, { useState } from 'react';
// import all pages
import HomePage from './pages/Home';
import ContactPage from './pages/Contact';
import ProjectsPage from './pages/Project'


//import layout holder - a container for the pages
import Layout from './layout/Layout';
import PageLayout from './layout/PageLayout';

//import background image
import GardenBed1 from './projects/assets/images/brick.jpeg';

//import css for this component
import './PortfolioHolder.module.css';

//import header component
import Header from './Header';

//import navigation component
import Navigation from './Navigation';

//import footer component
import Footer from './Footer';



export default function PortfolioHolder() {
    const [currentPage, setCurrentPage] = useState('HomePage');

    const renderPage = () => {
        if (currentPage === 'HomePage') {
            return <PageLayout> <HomePage /> </PageLayout>;
        }

        if (currentPage === 'ProjectsPage') {
            return <PageLayout> <ProjectsPage /> </PageLayout>;
        }

        if (currentPage === 'ContactPage') {
            return <PageLayout> <ContactPage /> </PageLayout>;
        }

    };

    const handlePageChange = (page) => setCurrentPage(page);


    return (
        <Layout className='container align-items-center' style={{ backgroundImage: `url(${GardenBed1})`}} >

            <div className='row' style={{minHeight:"520px"}}>

                <div className='col-3 mr-4 ml-4' style={{minHeight:"420px", height:"80vh", padding:"1rem", marginBottom:'7rem'}}>
                    <div style={{marginBottom:'5rem', minHeight:"8rem"}}>
                        <Header title='IW'>
                        </Header>
                    </div>

                    <div className='align-items-center mt-10' style={{marginBottom:'1rem'}}>
                        <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
                    </div>
                </div>


                <div className='col-8 col-md-8 col-sm-12 page-contain ' style={{ backgroundColor: 'rgba(255, 255, 255, 0.75)', margin: '1rem', borderRadius: '20px', minWidth:"375px", marginBottom:'3rem', marginTop:'3rem'}}>
                    {renderPage()}


                </div>
            </div>
            <footer>
                <Footer footer='© Ivy Wirsing 2023' />
            </footer>




        </Layout>
    );

}
