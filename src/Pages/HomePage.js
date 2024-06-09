import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import 'tailwindcss/tailwind.css';
import '../css/HomePage.css'; // Ensure this file contains any additional custom styles

// Navbar Component
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`fixed w-full z-10 transition-colors duration-300 ${scrolled ? 'bg-white bg-opacity-90 shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto flex justify-between items-center py-4 px-4 md:px-8">
        <Link to="/" className="flex items-center">
          <img src={scrolled ? '/images/logo2.png' : '/images/logo.png'} alt="Logo" className="h-8"/>
          <span className={`ml-3 text-3xl font-bold ${scrolled ? 'text-blue-600' : 'text-white'}`}>Software Service</span>
        </Link>
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="text-gray-700 hover:text-blue-600 transition">Home</Link>
          <Link to="/features" className="text-gray-700 hover:text-blue-600 transition">Features</Link>
          <Link to="/documentation" className="text-gray-700 hover:text-blue-600 transition">Documentation</Link>
          <Link to="/api" className="text-gray-700 hover:text-blue-600 transition">API</Link>
          <Link to="/login" className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">Login</Link>
          <Link to="/signup" className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">Sign Up</Link>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <XMarkIcon className="h-6 w-6 text-blue-600" /> : <Bars3Icon className="h-6 w-6 text-blue-600" />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden flex flex-col space-y-2 p-4 bg-white bg-opacity-90">
          <Link to="/" className="text-gray-700 hover:text-blue-600 transition">Home</Link>
          <Link to="/features" className="text-gray-700 hover:text-blue-600 transition">Features</Link>
          <Link to="/documentation" className="text-gray-700 hover:text-blue-600 transition">Documentation</Link>
          <Link to="/api" className="text-gray-700 hover:text-blue-600 transition">API</Link>
          <Link to="/login" className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">Login</Link>
          <Link to="/signup" className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">Sign Up</Link>
        </div>
      )}
    </nav>
  );
};

// Rest of your components remain unchanged


// Hero Section Component
const HeroSection = () => (
  <section className="hero flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 text-white h-screen">
    <div className="container mx-auto text-center px-4">
      <h2 className="text-5xl font-extrabold mb-4 animate-fade-in">Build your next idea even faster.</h2>
      <p className="text-lg mb-8">Beautifully designed, expertly crafted components and templates. The perfect starting point for your next project.</p>
      <Link to="/signup" className="bg-white text-blue-600 py-2 px-6 rounded-full hover:bg-gray-200 transition">Get Started</Link>
    </div>
  </section>
);

// Features Section Component
const FeaturesSection = () => (
  <section className="py-20 bg-gray-50">
    <div className="container mx-auto text-center">
      <h3 className="text-4xl font-bold mb-8 text-blue-600">Features</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <FeatureCard icon="speed" title="Fast Performance" description="Experience lightning fast speeds with our cutting-edge technology." />
        <FeatureCard icon="build" title="Easy Customization" description="Tailor your experience with intuitive and flexible settings." />
        <FeatureCard icon="security" title="Top-notch Security" description="Rest easy knowing your data is protected with our advanced security measures." />
      </div>
    </div>
  </section>
);

const FeatureCard = ({ icon, title, description }) => (
  <div className="p-6 border rounded-lg bg-white bg-opacity-70 backdrop-filter backdrop-blur-lg">
    <div className="flex justify-center items-center mb-4">
      <span className="material-icons text-blue-600 text-5xl">{icon}</span>
    </div>
    <h4 className="text-2xl font-bold mb-4">{title}</h4>
    <p className="text-gray-600">{description}</p>
  </div>
);

// Plugins Section Component
const PluginsSection = () => (
  <section className="py-20 bg-white">
    <div className="container mx-auto text-center">
      <h3 className="text-4xl font-bold mb-8 text-blue-600">Plugins</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <PluginCard title="Plugin 1" description="Extend the functionality with Plugin 1." />
        <PluginCard title="Plugin 2" description="Add new features with Plugin 2." />
        <PluginCard title="Plugin 3" description="Enhance your experience with Plugin 3." />
      </div>
    </div>
  </section>
);

const PluginCard = ({ title, description }) => (
  <div className="p-6 border rounded-lg bg-white bg-opacity-70 backdrop-filter backdrop-blur-lg">
    <h4 className="text-2xl font-bold mb-4">{title}</h4>
    <p className="text-gray-600">{description}</p>
  </div>
);

// Testimonials Section Component
const TestimonialsSection = () => (
  <section className="py-20 bg-gray-50">
    <div className="container mx-auto text-center">
      <h3 className="text-4xl font-bold mb-8 text-blue-600">What Our Users Say</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <TestimonialCard quote="This software has significantly improved our productivity. Highly recommend!" author="John Doe, CEO of Company" />
        <TestimonialCard quote="Excellent service and support. The best solution we've ever used." author="Jane Smith, CTO of Another Company" />
        <TestimonialCard quote="A game-changer for our business operations." author="Richard Roe, Manager at Business" />
      </div>
    </div>
  </section>
);

const TestimonialCard = ({ quote, author }) => (
  <div className="p-6 border rounded-lg bg-white bg-opacity-70 backdrop-filter backdrop-blur-lg">
    <blockquote className="text-lg italic text-gray-700">"{quote}"</blockquote>
    <cite className="block mt-4 text-gray-600">- {author}</cite>
  </div>
);

// Pricing Section Component
const PricingSection = () => (
  <section className="py-20 bg-white">
    <div className="container mx-auto text-center">
      <h3 className="text-4xl font-bold mb-8 text-blue-600">Pricing Plans</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <PricingCard plan="Basic Plan" price="$9.99/month" description="Perfect for individuals and small teams." />
        <PricingCard plan="Pro Plan" price="$29.99/month" description="Ideal for growing businesses and teams." />
        <PricingCard plan="Enterprise Plan" price="$99.99/month" description="Best for large organizations with advanced needs." />
      </div>
    </div>
  </section>
);

const PricingCard = ({ plan, price, description }) => (
  <div className="p-6 border rounded-lg bg-white bg-opacity-70 backdrop-filter backdrop-blur-lg">
    <h4 className="text-2xl font-bold mb-4">{plan}</h4>
    <p className="text-gray-600 mb-4">{description}</p>
    <p className="text-3xl font-bold">{price}</p>
    <Link to="/signup" className="bg-blue-600 text-white py-2 px-6 rounded-full mt-4 inline-block hover:bg-blue-700 transition">Sign Up</Link>
  </div>
);

// Call to Action Section Component
const CallToActionSection = () => (
  <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
    <div className="container mx-auto text-center">
      <h3 className="text-4xl font-bold mb-8">Ready to Get Started?</h3>
      <p className="text-lg mb-8">Join our community and take your business to the next level with our software service.</p>
      <Link to="/signup" className="bg-white text-blue-600 py-2 px-6 rounded-full hover:bg-gray-100 transition">Sign Up Now</Link>
    </div>
  </section>
);

// Footer Component
const Footer = () => (
  <footer className="bg-gray-800 text-white py-12">
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
      <FooterColumn title="Product" links={["Features", "Pricing", "Documentation", "FAQs"]} />
      <FooterColumn title="Company" links={["About Us", "Careers", "Blog", "Contact"]} />
      <FooterColumn title="Resources" links={["Community", "Partners", "Guides", "Webinars"]} />
      <FooterColumn title="Social" links={["Twitter", "LinkedIn", "GitHub", "Dribbble"]} />
    </div>
    <div className="container mx-auto text-center mt-8">
      <p>&copy; 2024 Software Service. All rights reserved.</p>
      <p>Contact us at <a href="mailto:support@softwareservice.com" className="text-blue-400">support@softwareservice.com</a></p>
    </div>
  </footer>
);

const FooterColumn = ({ title, links }) => (
  <div>
    <h4 className="text-xl font-bold mb-4">{title}</h4>
    <ul>
      {links.map(link => (
        <li key={link} className="mb-2"><Link to="#" className="hover:underline">{link}</Link></li>
      ))}
    </ul>
  </div>
);

// Home Page Component
const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-blue-50 to-purple-50">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <PluginsSection />
      <TestimonialsSection />
      <PricingSection />
      <CallToActionSection />
      <Footer />
    </div>
  );
};

export default HomePage;
