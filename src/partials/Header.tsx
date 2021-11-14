/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from 'react';
import { MyButton } from '../components/Button';

export const Header = () => {

  const [windowWidth, setWindowWidth] = useState(window.screenX);
  const [scrollPos, setScrollPos] = useState(window.scrollY);
  const header = document.getElementById('header');
  let navContent = document.getElementById('nav-content');
  let navigation = document.getElementById('navBg');
  var toToggle = document.querySelectorAll('.toggle-colour');
  const navMenuDiv = document.getElementById('nav-content');
  // const navMenu = document.getElementById('nav-toggle');

  // detect whether user has scrolled the page down by 10px
  useEffect(() => {
    const scrollHandler = () => {
      setScrollPos(window.scrollY);
    };
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [scrollPos]);

  // detect whether its mobile
  useEffect(() => {
    const resizeHandler = () => {
      setWindowWidth(window.screenX);
    };
    window.addEventListener('resize', resizeHandler);
    return () => window.removeEventListener('resize', resizeHandler);
  }, [windowWidth]);

  useEffect(() => {

    if (navMenuDiv && windowWidth < 1022) {
      if (navMenuDiv!.classList.contains('hidden')) {
        navMenuDiv!.classList.remove('hidden');
      } else {
        navMenuDiv!.classList.add('hidden');
      }
    }
    if (navMenuDiv) {
      navMenuDiv!.classList.add('hidden');
    }
  }, [windowWidth]);

  useEffect(() => {

    if (!header || !navContent || !navigation || !toToggle) {
      console.error('No component found');
      return;
    }

    if (scrollPos > 10) {
      header.classList.add('bg-white');
      header.classList.add('shadow');
      for (let i = 0; i < toToggle.length; i++) {
        toToggle[i].classList.add('text-gray-800');
        toToggle[i].classList.remove('text-white');
      }

      navigation.classList.remove('bg-white');
      navigation.classList.add('gradient');
      navigation.classList.remove('text-gray-800');
      navigation.classList.add('text-white');
      navContent.classList.remove('bg-gray-100');
      navContent.classList.add('bg-white');
    } else {
      header.classList.remove('bg-white');
      header.classList.remove('shadow');

      for (let i = 0; i < toToggle.length; i++) {
        toToggle[i].classList.add('text-white');
        toToggle[i].classList.remove('text-gray-800');
      }

      navigation.classList.remove('gradient');
      navigation.classList.add('bg-white');
      navigation.classList.remove('text-white');
      navigation.classList.add('text-gray-800');
      navContent.classList.remove('bg-white');
      navContent.classList.add('bg-gray-100');

    }

  }, [scrollPos]);

  const toggleMobileMenu = () => {
    console.log('navMenuDiv', navMenuDiv);
    if (navMenuDiv && navMenuDiv.classList.contains('hidden')) {
      console.log('GOT IT');
      navMenuDiv.classList.remove('hidden');
    } else if (navMenuDiv) {
      navMenuDiv.classList.add('hidden');
    }
  };

  return (
    <header id="header" className="fixed w-full z-30 top-0 text-white">
      <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
        <div className="pl-4 flex items-center">
          <a className="toggle-colour text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl" href="#">
            <svg className="h-8 fill-current inline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.005 512.005">
              <rect fill="#2a2a31" x="16.539" y="425.626" width="479.767" height="50.502" transform="matrix(1,0,0,1,0,0)"/>
              <path
                className="plane-take-off"
                d=" M 510.7 189.151 C 505.271 168.95 484.565 156.956 464.365 162.385 L 330.156 198.367 L 155.924 35.878 L 107.19 49.008 L 211.729 230.183 L 86.232 263.767 L 36.614 224.754 L 0 234.603 L 45.957 314.27 L 65.274 347.727 L 105.802 336.869 L 240.011 300.886 L 349.726 271.469 L 483.935 235.486 C 504.134 230.057 516.129 209.352 510.7 189.151 Z "
              />
            </svg>
            HELLO
          </a>
        </div>
        <div className="block lg:hidden pr-4">
          <button id="nav-toggle" onClick={toggleMobileMenu} className="flex items-center p-1 text-pink-800 hover:text-gray-900 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
            <svg className="fill-current h-6 w-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
            </svg>
          </button>
        </div>

        <div className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20" id="nav-content">
          <ul className="list-reset lg:flex justify-end flex-1 items-center">
            <li className="mr-3">
              <a className="inline-block py-2 px-4 text-black font-bold no-underline" href="#features">Features</a>
            </li>
            <li className="mr-3">
              <a className="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4" href="#">link</a>
            </li>
            <li className="mr-3">
              <a className="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4" href="#">link</a>
            </li>
          </ul>

          <div id="navBg"/>
          <MyButton name="Call to action" color="blue" link="#anchor-call-to-action"/>
        </div>
      </div>
    </header>);
};
