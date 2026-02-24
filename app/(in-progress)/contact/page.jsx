'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Github, Twitter } from 'lucide-react';
import { MagneticButton, ParallaxFade } from '@/components';
import { Contact as ContactSection, Transition } from '@/layout';
import { GlobalNavbar } from '@/layout';

export default function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'vikassagar891@example.com',
      href: 'mailto:vikassagar891@example.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 7382149073',
      href: 'tel:+917382149073'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Chandigarh & Hyderabad, India',
      href: '#'
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/vikassagar--/',
      color: 'text-blue-600'
    },
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/VIKASSAGAR891',
      color: 'text-gray-800'
    },
    {
      icon: Twitter,
      label: 'X',
      href: 'https://x.com/Vikas47256234',
      color: 'text-blue-400'
    }
  ];

  return (
    <Transition>
      <GlobalNavbar />
      
      {/* Hero Section */}
      <section className='relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-secondary overflow-hidden'>
        <div className='absolute inset-0 opacity-10'>
          <div className='absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl' />
          <div className='absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl' />
        </div>
        
        <div className='container relative z-10 py-20'>
          <motion.div
            className='max-w-3xl mx-auto text-center'
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h1 className='text-[clamp(3rem,8vw,6rem)] font-bold leading-tight mb-6'>
              Let's Connect
            </h1>
            <p className='text-xl md:text-2xl text-muted-foreground mb-8'>
              I'm always interested in hearing about new projects and opportunities. 
              Feel free to reach out!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className='container py-20 md:py-32'>
        <div className='max-w-4xl mx-auto mb-20'>
          <ParallaxFade>
            <h2 className='text-[clamp(2rem,4vw,3.5rem)] font-bold mb-12 text-center'>
              Get In Touch
            </h2>
          </ParallaxFade>
          
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {contactInfo.map((info, index) => (
              <ParallaxFade key={index} delay={index * 0.1}>
                <motion.a
                  href={info.href}
                  className='bg-secondary rounded-xl p-6 text-center group cursor-pointer'
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                >
                  <div className='mb-4 flex justify-center'>
                    <info.icon className='w-8 h-8 text-primary group-hover:scale-110 transition-transform' />
                  </div>
                  <h3 className='text-lg font-semibold mb-2'>{info.label}</h3>
                  <p className='text-muted-foreground'>{info.value}</p>
                </motion.a>
              </ParallaxFade>
            ))}
          </div>
        </div>

        {/* Social Links */}
        <div className='max-w-2xl mx-auto'>
          <ParallaxFade>
            <h3 className='text-2xl font-semibold text-center mb-8'>Connect on Social</h3>
          </ParallaxFade>
          
          <div className='flex justify-center gap-6'>
            {socialLinks.map((social, index) => (
              <ParallaxFade key={index} delay={index * 0.1}>
                <motion.a
                  href={social.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='group'
                  whileHover={{ scale: 1.2, transition: { duration: 0.3 } }}
                >
                  <div className={`p-4 bg-secondary rounded-full ${social.color} group-hover:bg-primary group-hover:text-white transition-all`}>
                    <social.icon className='w-6 h-6' />
                  </div>
                </motion.a>
              </ParallaxFade>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className='bg-secondary py-20 md:py-32'>
        <div className='container'>
          <ParallaxFade>
            <h2 className='text-[clamp(2rem,4vw,3.5rem)] font-bold mb-12 text-center'>
              Send a Message
            </h2>
          </ParallaxFade>
          
          <form className='max-w-2xl mx-auto space-y-6'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              <ParallaxFade delay={0.1}>
                <div>
                  <label htmlFor='name' className='block text-sm font-medium mb-2'>
                    Full Name
                  </label>
                  <input
                    type='text'
                    id='name'
                    placeholder='Your name'
                    className='w-full px-4 py-3 bg-background rounded-lg border border-primary/20 focus:border-primary focus:outline-none transition'
                  />
                </div>
              </ParallaxFade>
              
              <ParallaxFade delay={0.15}>
                <div>
                  <label htmlFor='email' className='block text-sm font-medium mb-2'>
                    Email Address
                  </label>
                  <input
                    type='email'
                    id='email'
                    placeholder='your.email@example.com'
                    className='w-full px-4 py-3 bg-background rounded-lg border border-primary/20 focus:border-primary focus:outline-none transition'
                  />
                </div>
              </ParallaxFade>
            </div>

            <ParallaxFade delay={0.2}>
              <div>
                <label htmlFor='subject' className='block text-sm font-medium mb-2'>
                  Subject
                </label>
                <input
                  type='text'
                  id='subject'
                  placeholder='What is this about?'
                  className='w-full px-4 py-3 bg-background rounded-lg border border-primary/20 focus:border-primary focus:outline-none transition'
                />
              </div>
            </ParallaxFade>

            <ParallaxFade delay={0.25}>
              <div>
                <label htmlFor='message' className='block text-sm font-medium mb-2'>
                  Message
                </label>
                <textarea
                  id='message'
                  rows={6}
                  placeholder='Your message here...'
                  className='w-full px-4 py-3 bg-background rounded-lg border border-primary/20 focus:border-primary focus:outline-none transition resize-none'
                />
              </div>
            </ParallaxFade>

            <ParallaxFade delay={0.3}>
              <div className='flex justify-center pt-4'>
                <MagneticButton variant='primary' size='lg'>
                  Send Message
                </MagneticButton>
              </div>
            </ParallaxFade>
          </form>
        </div>
      </section>

      

      <ContactSection />
    </Transition>
  );
}
