'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  // State to track whether the page is being viewed on a mobile device
  const [isMobile, setIsMobile] = useState(false);

  // State to manage the index of the currently visible paragraph
  const [visibleIndex, setVisibleIndex] = useState(0);

  // Define a function to create text styles with gradient colors
  const createTextStyle = (fontSize, fontWeight, lineHeight, gradientColors) => ({
    fontFamily: 'Roboto',
    fontSize,
    fontStyle: 'normal',
    fontWeight,
    lineHeight,
    background: `linear-gradient(117deg, ${gradientColors[0]} 11.95%, ${gradientColors[1]} 110.23%)`,
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  });

  // Common text style for paragraphs
  const commonTextStyle = createTextStyle('40px', '400', '148.523%', ['#D2D2D2', 'rgba(155, 155, 155, 0.40)']);

  // Handle window resize to determine if the page is being viewed on a mobile device
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1100);
    };

    // Initial setup and cleanup of event listener
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Automatically switch visible paragraph every 2.5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleIndex((prevIndex) => (prevIndex + 1) % 5); // Assuming 5 paragraphs
    }, 2500);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  // Paragraph content
  const paragraphs = ['Resources', 'Team', 'Projects', 'About', 'Events'];

  if (isMobile) {
    // Render mobile version
    const mobileTextStyle = {
      ...commonTextStyle,
      fontSize: '60px',
    };

    return (
      <div className='flex flex-col items-center justify-center min-h-screen bg-[#121212] text-white overflow-x-hidden overflow-y-hidden'>
        <div className="p-8 relative space-y-20 flex flex-col items-center justify-center h-full">
          <p style={mobileTextStyle}>{paragraphs[visibleIndex]}</p>
          <div className='flex justify-center'>
            <Image src="/logo.png" alt='logo' width={186.87} height={151} />
          </div>
          <p style={{ marginBottom: '20px', textAlign: 'center' }}>
            Architected with ❤️ by OpenCode Team
          </p>
          <ul className='flex flex-row items-center justify-center' style={{ gap: '30px' }}>
            <li><Link href='https://chat.openai.com/'><Image src='/Group 36733.png' alt='' width={44} height={44} /></Link></li>
            <li><Link href='https://chat.openai.com/'><Image src='/Group 36734.png' alt='' width={44} height={44} /></Link></li>
            <li><Link href='https://chat.openai.com/'><Image src='/Group 36737.png' alt='' width={44} height={44} /></Link></li>
            <li><Link href='https://chat.openai.com/'><Image src='/Group 36738.png' alt='' width={44} height={44} /></Link></li>
          </ul>
        </div>
      </div>
    );
  }

  // Render desktop version
  return (
    <div className='relative bg-[#121212] max-w-full min-h-screen text-white overflow-x-hidden overflow-y-hidden'>

      {/* Semicircle */}
      <div className="semicircle-container" style={{
        position: 'absolute',
        top: '262px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '900px',
        height: '480px',
        overflow: 'hidden', // Clip the image within the container
      }}>
        <div className="semicircle" style={{
          width: '100%',
          height: '100%',
          borderRadius: '700px 700px 0 0',
          background: 'rgba(83, 159, 229, 0.01)',
          boxShadow: '5.399px 1.08px 11.879px 0px rgba(10, 168, 218, 0.26) inset',
          position: 'absolute',
        }}>
          <Image src="/logo.png" alt='logo' width={186.87} height={151} style={{
            position: 'absolute',
            width: '186.87px',
            height: '151px',
            left: '350px',
            top: '120px',
          }} />
          <p style={{
            position: 'absolute',
            left: '300px',
            top: '320px',
          }}>Architected with ❤️ by OpenCode Team</p>
        </div>
      </div>

      {/* Larger Circular Shape */}
      <div className="circle" style={{
        position: 'absolute',
        top: '62px',
        left: '50%',
        transform: 'translate(-50%)',
        width: '1260px',
        height: '680px',
        borderRadius: '800px 800px 0 0',
        opacity: 0.5,
        background: 'rgba(83, 159, 229, 0.01)',
        boxShadow: '7.249px 1.45px 15.947px 0px rgba(10, 168, 218, 0.26) inset',
      }}>
        {/* Navigation links */}
        <p className='text-white' style={{ ...commonTextStyle, position: 'absolute', left: '80px', top: '460px' }}>About</p>
        <p className='text-white' style={{ ...commonTextStyle, position: 'absolute', left: '260px', top: '200px' }}>Events</p>
        <p className='text-white' style={{ ...commonTextStyle, position: 'absolute', left: '544px', top: '100px' }}>Resources</p>
        <p className='text-white' style={{ ...commonTextStyle, position: 'absolute', left: '880px', top: '200px' }}>Projects</p>
        <p className='text-white' style={{ ...commonTextStyle, position: 'absolute', left: '1070px', top: '460px' }}>Team</p>
      </div>

      {/* Another Circular Shape */}
      <div className="circle" style={{
        position: 'absolute',
        top: '-106px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '1600px',
        height: '849px',
        borderRadius: '990px 990px 0 0',
        opacity: 0.3,
        background: 'rgba(83, 159, 229, 0.01)',
        boxShadow: '9.305px 1.861px 20.47px 0px rgba(10, 168, 218, 0.26) inset',
      }}></div>
      <ul className='flex flex-row items-center justify-center' style={{
        position: 'absolute',
        top: '400px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '1098px',
        height: '570px',
        overflow: 'hidden',
        gap: '30px'
      }}>
        <li><Link href='https://chat.openai.com/'><Image src='/Group 36733.png' alt='' width={44} height={44} /></Link></li>
        <li><Link href='https://chat.openai.com/'><Image src='/Group 36734.png' alt='' width={44} height={44} /></Link></li>
        <li><Link href='https://chat.openai.com/'><Image src='/Group 36737.png' alt='' width={44} height={44} /></Link></li>
        <li><Link href='https://chat.openai.com/'><Image src='/Group 36738.png' alt='' width={44} height={44} /></Link></li>
      </ul>
    </div>
  );
};

export default Footer;
