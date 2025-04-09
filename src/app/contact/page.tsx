'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { 
  FaArrowLeft, 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt, 
  FaUser,
  FaBuilding,
  FaComment,
  FaPaperPlane,
  FaSpinner
} from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    
    try {
      // This is a simple way to submit to an email - in production you might want to use a form service or API
      const mailtoUrl = `mailto:contact@layeroneconsultants.com?subject=Contact Form: ${formData.name}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nCompany: ${formData.company}\n\nMessage:\n${formData.message}`
      )}`;
      
      window.open(mailtoUrl);
      
      // Since this opens a mail client rather than submitting directly, we'll mark as submitted
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
      });
    } catch (err) {
      console.error('Error submitting form:', err);
      setError('There was an error submitting your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <main className="relative min-h-screen bg-black pb-20">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-0 left-1/3 w-1/2 h-1/2 bg-gradient-radial from-purple-900/20 to-transparent"></div>
        <div className="absolute bottom-0 right-1/4 w-1/3 h-2/3 bg-gradient-radial from-[#eb6a1e]/10 to-transparent"></div>
        
        {/* Grid lines */}
        <div className="absolute inset-0 w-full h-full" 
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px'
          }}
        ></div>
        
        {/* Diagonal line */}
        <div className="absolute left-0 top-0 w-full h-full overflow-hidden">
          <div className="absolute -left-1/4 top-3/4 w-full h-[1px] bg-gradient-to-r from-transparent via-[#eb6a1e]/40 to-transparent transform -rotate-12"></div>
        </div>
      </div>
      
      {/* Header */}
      <header className="relative pt-20 pb-10 container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="flex flex-col items-center">
          <Link href="/" className="mb-10">
            <Image
              src="/logo.png"
              alt="Layer One Logo"
              width={200}
              height={40}
              priority
              className="w-[200px] h-auto"
            />
          </Link>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-[orbitron] text-white mb-4 tracking-wide text-center">
            CONTACT US
          </h1>
          <div className="h-[3px] w-24 bg-gradient-to-r from-transparent via-[#eb6a1e] to-transparent mb-8"></div>
          <p className="text-xl text-white/70 text-center max-w-2xl">
            Looking to transform your business with cutting-edge technology solutions? Reach out to our expert team.
          </p>
        </div>
      </header>
      
      {/* Contact Form Section */}
      <section className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Contact Form */}
          <motion.div 
            className="lg:col-span-3 bg-black/50 backdrop-blur-sm border border-gray-800 p-8 rounded-xl shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-[orbitron] text-white mb-6">Send us a message</h2>
            
            {submitted ? (
              <div className="bg-[#eb6a1e]/20 border border-[#eb6a1e]/50 rounded-lg p-6 text-center">
                <h3 className="text-xl font-medium text-white mb-2">Thank you for your message!</h3>
                <p className="text-white/70 mb-4">We&apos;ll get back to you as soon as possible.</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="inline-flex items-center justify-center px-5 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-[#eb6a1e] hover:bg-[#eb6a1e]/80"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-1">
                    Name *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaUser className="h-5 w-5 text-gray-500" />
                    </div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full pl-10 px-4 py-2 bg-black/50 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#eb6a1e]/50 focus:border-transparent text-white"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-1">
                    Email *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaEnvelope className="h-5 w-5 text-gray-500" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full pl-10 px-4 py-2 bg-black/50 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#eb6a1e]/50 focus:border-transparent text-white"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-white/80 mb-1">
                      Phone
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaPhone className="h-5 w-5 text-gray-500" />
                      </div>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full pl-10 px-4 py-2 bg-black/50 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#eb6a1e]/50 focus:border-transparent text-white"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-white/80 mb-1">
                      Company
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaBuilding className="h-5 w-5 text-gray-500" />
                      </div>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full pl-10 px-4 py-2 bg-black/50 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#eb6a1e]/50 focus:border-transparent text-white"
                      />
                    </div>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-1">
                    Message *
                  </label>
                  <div className="relative">
                    <div className="absolute top-3 left-3 pointer-events-none">
                      <FaComment className="h-5 w-5 text-gray-500" />
                    </div>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full pl-10 px-4 py-2 bg-black/50 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#eb6a1e]/50 focus:border-transparent text-white resize-none"
                    ></textarea>
                  </div>
                </div>
                
                {error && (
                  <div className="bg-red-900/30 border border-red-500/50 rounded-md p-3 text-sm text-white">
                    {error}
                  </div>
                )}
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative inline-flex items-center justify-center px-8 py-3 overflow-hidden text-base font-medium rounded-md text-white bg-gradient-to-r from-[#eb6a1e] to-orange-600 hover:from-orange-600 hover:to-[#eb6a1e] transition-all duration-500 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  <span className="relative z-10 flex items-center">
                    {isSubmitting ? (
                      <>
                        <FaSpinner className="mr-2 animate-spin" /> Sending...
                      </>
                    ) : (
                      <>
                        <FaPaperPlane className="mr-2" /> Send Message
                      </>
                    )}
                  </span>
                  <span className="absolute inset-0 w-full h-full bg-white/10 scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500"></span>
                </button>
              </form>
            )}
          </motion.div>
          
          {/* Contact Information */}
          <motion.div 
            className="lg:col-span-2 bg-black/50 backdrop-blur-sm border border-gray-800 p-8 rounded-xl shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl font-[orbitron] text-white mb-6">Contact Info</h2>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <FaEnvelope className="text-[#eb6a1e] mr-3 w-5 h-5 flex-shrink-0" />
                <div>
                  <h3 className="text-[#eb6a1e] font-medium mb-2">Email</h3>
                  <a href="mailto:contact@layeroneconsultants.com" className="text-white hover:text-[#eb6a1e] transition-colors">
                    contact@layeroneconsultants.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <FaPhone className="text-[#eb6a1e] mr-3 w-5 h-5 flex-shrink-0" />
                <div>
                  <h3 className="text-[#eb6a1e] font-medium mb-2">Phone</h3>
                  <a href="tel:+12345678900" className="text-white hover:text-[#eb6a1e] transition-colors">
                    (234) 567-8900
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <FaMapMarkerAlt className="text-[#eb6a1e] mr-3 w-5 h-5 flex-shrink-0" />
                <div>
                  <h3 className="text-[#eb6a1e] font-medium mb-2">Location</h3>
                  <p className="text-white/80">
                    Milwaukee, WI
                    <br />
                    United States
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
              <Link 
                href="/"
                className="inline-flex items-center text-white hover:text-[#eb6a1e] transition-colors"
              >
                <FaArrowLeft className="w-5 h-5 mr-2" />
                Back to Home
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 