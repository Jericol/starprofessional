import React, { useEffect, useState } from 'react';
import './App.css'
import { useSelector } from 'react-redux';
import { HashRouter, Route, Routes } from 'react-router-dom';
import ProductNews from './pages/productNews/ProductNews';
import AppNavbar from './components/AppNavbar/AppNavbar';
import ScrollToTop from './components/scrollTop/ScrollToTop';
import LoadingScreen from './components/loading/LoadingScreen';
import ContactButton from './components/contactBoton/ContactButton';
import Home from './pages/Home/Home';
import ProductsDetail from './pages/productsDetail/ProductsDetail';
import Register from './pages/Registro/Registro';
import LoginAdmin from './pages/Login/LoginAdmin';
import Login from './pages/Login/Login';
import Faq from './pages/Faq/Faq';
import DataProcessing from './pages/tratmientoDeDatos/DataProcessing';
import Distribuidores from './pages/Contact/Distribuidores/Distribuidores';
import RegisterPanel from './pages/Registro/RegisterPanel';
import EmailForm from './pages/Registro/EmailForm';
import AddressForm from './pages/Registro/AddressForm';
import ContactForm from './pages/Registro/ContacForm';
import Payment from './pages/PasarelaPagos/Payment';
import Capilar from './pages/familias/Capilar';
import Barberia from './pages/familias/Barberia';
import Accesorios from './pages/familias/Accesorios';
import CuidadoCorporal from './pages/familias/CuidadoCorporal';
import CuidadoFacial from './pages/familias/CuidadoFacial';
import LimpiezaDesinfeccion from './pages/familias/LimpiezaDesinfeccion';
import Pestañas from './pages/familias/Pestañas';
import Uñas from './pages/familias/Uñas';
import Payload from './pages/payload/Payload';
import PrivacyPolicy from './pages/politicasPrivacidad/PrivacyPolicy';
import FormPqrs from './pages/formPqrs/FormPqrs';
import Dashboard from './pages/dashboard/Dashboard';
import Footer from './components/footer/Footer'
import SettingHttp from './components/SettingHttps/SettingHttp'




function App() {

    const isLoading = useSelector(state => state.isLoading);
    // ESTADO PARA MENU MOVIL
    const [showMenu, setShowMenu] = useState(false);
    const [allProducts, setAllProducts] = useState([]);
    const [total, setTotal] = useState(0);
    const [countProducts, setCountProducts] = useState(0);
    const [theme, setTheme] = useState('light');

    const toggleMenu = () => {
        setShowMenu(!showMenu)
    }

    // useefeect para dar mode sobre todos los componentes
    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }

    }, [theme])



    return (
        <div className='min-h-screen bg-slate-300 dark:border-[#2C3976] overflow-hidden overflow-x-hidden'>

            <HashRouter>
                <ScrollToTop />
                <AppNavbar
                    showMenu={showMenu}
                    allProducts={allProducts}
                    setAllProducts={setAllProducts}
                />
                {isLoading && <LoadingScreen />}
                {/* menu movil */}
                <ContactButton />
                {/* ACA VA LO DEL MENU MOVIL */}
                <Routes>
                    {/* Rutas */}
                    <Route path='/' element={<Home />} />
                    <Route path='/productsDetail/:Codigo' element={<ProductsDetail />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/distribuidores' element={<Distribuidores />} />
                    <Route
                        path='/loginAdmin'
                        element={<LoginAdmin />}
                    />
                    <Route path='/login'
                        element={
                            <Login
                                theme={theme}
                                setTheme={setTheme}
                            />
                        }
                    />
                    <Route path='/Faq' element={<Faq />} />
                    <Route path='/dataProcessing' element={<DataProcessing />} />
                    <Route path='/register/panel' element={<RegisterPanel />} />
                    <Route path='/register/panel/email' element={<EmailForm />} />
                    <Route path='/registro/panel/contact' element={<ContactForm />} />
                    <Route path='/register/panel/address' element={<AddressForm />} />
                    <Route path='/payment' element={<Payment />} />
                    <Route
                        path='/newProduct'
                        element={
                            <ProductNews
                                allProducts={allProducts}
                                setAllProducts={setAllProducts}
                                total={total}
                                setTotal={setTotal}
                                countProducts={countProducts}
                                setCountProducts={setCountProducts}
                            />
                        }
                    />
                    {/* familias ok*/}
                    <Route path='/Capilar' element={<Capilar />} />
                    <Route path='/Barberia' element={<Barberia />} />
                    <Route path='/Accesorios' element={<Accesorios />} />
                    <Route path='/CuidadoCorporal' element={<CuidadoCorporal />} />
                    <Route path='/CuidadoFacial' element={<CuidadoFacial />} />
                    <Route path='/Pestañas' element={<Pestañas />} />
                    <Route path='/Uñas' element={<Uñas />} />
                    <Route path='/LimpiezaDesinfeccion' element={<LimpiezaDesinfeccion />} />

                    <Route path='/payload' element={<Payload />} />
                    <Route path='/PrivacyPolicy' element={<PrivacyPolicy />} />
                    <Route path='/formPqrs' element={<FormPqrs />} />
                    <Route path='/dashboard' element={<Dashboard />} />
                </Routes>
                <Footer />
            </HashRouter>
        </div>
    )
}

export default App
