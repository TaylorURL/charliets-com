import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { CartProvider } from './context/CartContext'
import Header from './components/common/Header'
import Footer from './components/common/Footer'
import ScrollToTop from './components/common/ScrollToTop'
import HomeView from '../views/home/HomeView'
import MenuView from '../views/menu/MenuView'
import AboutView from '../views/about/AboutView'
import ContactView from '../views/contact/ContactView'
import CheckoutView from '../views/checkout/CheckoutView'
import SuccessView from '../views/checkout/SuccessView'
import NotFoundView from '../views/not-found/NotFoundView'

function App() {
    return (
        <CartProvider>
            <div className="min-h-screen bg-surface-100 font-body text-ink-900">
                <ScrollToTop />
                <Header />
                <main>
                    <Routes>
                        <Route path="/" element={<HomeView />} />
                        <Route path="/menu" element={<MenuView />} />
                        <Route path="/about" element={<AboutView />} />
                        <Route path="/contact" element={<ContactView />} />
                        <Route path="/checkout" element={<CheckoutView />} />
                        <Route path="/order-success" element={<SuccessView />} />
                        <Route path="*" element={<NotFoundView />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </CartProvider>
    )
}

export default App
