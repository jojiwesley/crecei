'use client';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export function AOSInit() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out-sine',
      offset: 100,
       // Desabilita animações se JS não carregar
      disable: false,
      // Inicia animações mais rápido
      startEvent: 'DOMContentLoaded',
      // Melhora performance
      useClassNames: true,
      disableMutationObserver: false,
    });
  }, []);

  return null;
}
