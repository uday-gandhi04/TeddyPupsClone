import React, { useCallback, useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import RouteCurtain from './components/RouteCurtain';
import PawCursor from './components/PawCursor';
import { PolaroidLightbox, Toast } from './components/PolaroidLightbox';
import HomePage from './pages/HomePage';
import PuppiesPage from './pages/PuppiesPage';
import PuppyDetailPage from './pages/PuppyDetailPage';
import GoneHomePage from './pages/GoneHomePage';
import HappyFamiliesPage from './pages/HappyFamiliesPage';
import HowItWorksPage from './pages/HowItWorksPage';
import FaqPage from './pages/FaqPage';
import ContactPage from './pages/ContactPage';

function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const target = document.getElementById(hash.slice(1));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname, hash]);

  return null;
}

export default function App() {
  const [lightboxItem, setLightboxItem] = useState(null);
  const [toastMsg, setToastMsg] = useState('');

  const showToast = useCallback((msg) => {
    setToastMsg(msg);
  }, []);

  useEffect(() => {
    if (!toastMsg) return undefined;
    const t = setTimeout(() => setToastMsg(''), 3600);
    return () => clearTimeout(t);
  }, [toastMsg]);

  return (
    <>
      <PawCursor />
      <ScrollManager />
      <RouteCurtain />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage onOpenPolaroid={setLightboxItem} />} />
        <Route path="/puppies" element={<PuppiesPage />} />
        <Route path="/puppies/:slug" element={<PuppyDetailPage onShowToast={showToast} />} />
        <Route path="/gone-home" element={<GoneHomePage />} />
        <Route path="/happy-families" element={<HappyFamiliesPage onOpenPolaroid={setLightboxItem} />} />
        <Route path="/how-it-works" element={<HowItWorksPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/contact" element={<ContactPage onShowToast={showToast} />} />
      </Routes>
      <div data-mascot-zone="footer">
        <Footer />
      </div>
      <PolaroidLightbox item={lightboxItem} onClose={() => setLightboxItem(null)} />
      <Toast message={toastMsg} />
    </>
  );
}
