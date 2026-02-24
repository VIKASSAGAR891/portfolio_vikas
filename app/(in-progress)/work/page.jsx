'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, Zap } from 'lucide-react';
import Link from 'next/link';

import { MagneticButton, ParallaxFade } from '@/components';
import { Contact, Transition } from '@/layout';
import { GlobalNavbar } from '@/layout';

export default function Work() {
  const projects = [
    {
      id: 1,
      title: 'AI-Powered Recommendation System',
      description: 'A machine learning system that provides personalized recommendations using collaborative filtering and neural networks.',
      category: 'Machine Learning',
      technologies: ['Python', 'TensorFlow', 'Flask', 'PostgreSQL'],
      image: '/placeholder-project-1.jpg',
      link: '#',
      github: '#',
      featured: true
    },
    {
      id: 2,
      title: 'Full Stack Portfolio Website',
      description: 'A modern, responsive portfolio website built with Next.js, featuring smooth animations and optimized performance.',
      category: 'Web Development',
      technologies: ['Next.js', 'React', 'Tailwind CSS', 'Framer Motion'],
      image: '/placeholder-project-2.jpg',
      link: '#',
      github: '#',
      featured: true
    },
    {
      id: 3,
      title: 'Real-Time Chat Application',
      description: 'A real-time messaging platform with user authentication, private channels, and instant notifications.',
      category: 'Web Development',
      technologies: ['React', 'Node.js', 'Socket.IO', 'MongoDB'],
      image: '/placeholder-project-3.jpg',
      link: '#',
      github: '#',
      featured: false
    },
    {
      id: 4,
      title: 'Computer Vision Object Detection',
      description: 'An object detection model trained to identify and locate multiple objects in images with high accuracy.',
      category: 'Computer Vision',
      technologies: ['Python', 'OpenCV', 'YOLO', 'NumPy'],
      image: '/placeholder-project-4.jpg',
      link: '#',
      github: '#',
      featured: false
    },
    {
      id: 5,
      title: 'Natural Language Processing Tool',
      description: 'An NLP application for sentiment analysis, text classification, and semantic understanding of user input.',
      category: 'NLP',
      technologies: ['Python', 'NLTK', 'Transformers', 'FastAPI'],
      image: '/placeholder-project-5.jpg',
      link: '#',
      github: '#',
      featured: false
    },
    {
      id: 6,
      title: 'Data Analytics Dashboard',
      description: 'An interactive dashboard for visualizing and analyzing large datasets with real-time updates.',
      category: 'Data Science',
      technologies: ['React', 'D3.js', 'Python', 'Pandas'],
      image: '/placeholder-project-6.jpg',
      link: '#',
      github: '#',
      featured: false
    }
  ];

  const categories = ['All', 'Machine Learning', 'Web Development', 'Computer Vision', 'NLP', 'Data Science'];

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
              My Projects
            </h1>
            <p className='text-xl md:text-2xl text-muted-foreground mb-8'>
              Explore a collection of AI, machine learning, and full-stack development projects 
              that showcase innovation and technical expertise.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className='container py-20 md:py-32'>
        <ParallaxFade>
          <h2 className='text-[clamp(2rem,4vw,3.5rem)] font-bold mb-16'>
            Featured Projects
          </h2>
        </ParallaxFade>

        <div className='space-y-12'>
          {projects.filter(p => p.featured).map((project, index) => (
            <ParallaxFade key={project.id} delay={index * 0.1}>
              <motion.div
                className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-secondary rounded-2xl p-8 md:p-12'
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                <div className='order-2 lg:order-1'>
                  <div className='bg-primary/10 rounded-xl p-6 h-80 flex items-center justify-center'>
                    <p className='text-muted-foreground text-center'>[Project Image]</p>
                  </div>
                </div>

                <div className='order-1 lg:order-2'>
                  <span className='text-sm font-semibold text-primary mb-2 block'>
                    {project.category}
                  </span>
                  <h3 className='text-3xl font-bold mb-4'>{project.title}</h3>
                  <p className='text-lg text-muted-foreground mb-6'>
                    {project.description}
                  </p>

                  <div className='flex flex-wrap gap-2 mb-8'>
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className='px-3 py-1 bg-background text-sm rounded-full border border-primary/20'
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className='flex gap-4'>
                    <Link href={project.link}>
                      <MagneticButton variant='primary' size='lg'>
                        <ExternalLink className='w-4 h-4 mr-2' />
                        View Project
                      </MagneticButton>
                    </Link>
                    <Link href={project.github}>
                      <MagneticButton variant='outline' size='lg'>
                        <Github className='w-4 h-4 mr-2' />
                        GitHub
                      </MagneticButton>
                    </Link>
                  </div>
                </div>
              </motion.div>
            </ParallaxFade>
          ))}
        </div>
      </section>

      {/* All Projects Section */}
      <section className='bg-secondary py-20 md:py-32'>
        <div className='container'>
          <ParallaxFade>
            <h2 className='text-[clamp(2rem,4vw,3.5rem)] font-bold mb-12 text-center'>
              All Projects
            </h2>
          </ParallaxFade>

          {/* Category Filter */}
          <div className='flex flex-wrap justify-center gap-3 mb-16'>
            {categories.map((category, index) => (
              <ParallaxFade key={index} delay={index * 0.05}>
                <button className='px-4 py-2 rounded-full border border-primary/20 hover:bg-primary hover:text-white transition-all duration-300 text-sm font-medium'>
                  {category}
                </button>
              </ParallaxFade>
            ))}
          </div>

          {/* Projects Grid */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {projects.map((project, index) => (
              <ParallaxFade key={project.id} delay={index * 0.05}>
                <motion.div
                  className='bg-background rounded-xl overflow-hidden h-full flex flex-col group'
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                >
                  <div className='h-48 bg-primary/10 flex items-center justify-center overflow-hidden'>
                    <p className='text-muted-foreground text-center'>[Project Image]</p>
                  </div>

                  <div className='p-6 flex-1 flex flex-col'>
                    <span className='text-xs font-semibold text-primary mb-2'>
                      {project.category}
                    </span>
                    <h3 className='text-xl font-bold mb-3'>{project.title}</h3>
                    <p className='text-muted-foreground text-sm mb-4 flex-grow'>
                      {project.description}
                    </p>

                    <div className='flex flex-wrap gap-2 mb-6'>
                      {project.technologies.slice(0, 3).map((tech, idx) => (
                        <span
                          key={idx}
                          className='px-2 py-1 bg-secondary text-xs rounded-full'
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className='flex gap-3'>
                      <Link href={project.link} className='flex-1'>
                        <button className='w-full px-3 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:opacity-90 transition flex items-center justify-center gap-2'>
                          <ExternalLink className='w-4 h-4' />
                          View
                        </button>
                      </Link>
                      <Link href={project.github} className='flex-1'>
                        <button className='w-full px-3 py-2 bg-secondary text-foreground rounded-lg text-sm font-medium hover:bg-primary/10 transition flex items-center justify-center gap-2'>
                          <Github className='w-4 h-4' />
                          Code
                        </button>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </ParallaxFade>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='container py-20 md:py-32'>
        <motion.div
          className='max-w-3xl mx-auto text-center'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className='text-[clamp(2rem,4vw,3.5rem)] font-bold mb-6'>
            Interested in Collaborating?
          </h2>
          <p className='text-xl text-muted-foreground mb-8 max-w-2xl mx-auto'>
            If you have a project in mind or would like to discuss any of these projects, 
            let's get in touch!
          </p>
          <Link href='/contact'>
            <MagneticButton variant='primary' size='xl'>
              <Zap className='w-5 h-5 mr-2' />
              Get in Touch
            </MagneticButton>
          </Link>
        </motion.div>
      </section>

      <Contact />
    </Transition>
  );
}
