'use client';

import { motion } from 'framer-motion';
import { Code2, Brain, Rocket, Target, Award, BookOpen } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { MagneticButton, ParallaxFade, ParallaxReveal } from '@/components';
import { Contact, Transition } from '@/layout';
import {GlobalNavbar} from '@/layout';

const bioText = `I'm Vikas Narlakanti, an AI & Machine Learning engineer with a passion for building intelligent systems that make a real-world impact. Currently pursuing my Bachelor's in AI & ML at Chandigarh University, I specialize in creating data-driven solutions that bridge the gap between complex algorithms and practical applications.`;

const journeyText = `My journey in technology began with a fascination for how machines can learn and adapt. This curiosity evolved into a deep expertise in Python, C++, and modern ML frameworks. I believe in the power of ethical AI and strive to build systems that are not only intelligent but also responsible and inclusive.`;

const philosophyText = `Beyond AI, I'm a full-stack developer who enjoys crafting complete digital experiences—from backend architecture to intuitive user interfaces. I thrive in fast-paced, collaborative environments where innovation meets impact, and I'm always eager to explore emerging technologies and methodologies.`;

export default function About() {
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
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <h1 className='text-[clamp(3rem,8vw,6rem)] font-bold leading-tight mb-6'>
                Building the Future with AI
              </h1>
              <p className='text-xl md:text-2xl text-muted-foreground mb-8'>
                Where Machine Learning meets Full Stack Development
              </p>
              <div className='flex flex-wrap gap-4'>
                <Link href='/contact'>
                  <MagneticButton variant='primary' size='lg'>
                    Get in Touch
                  </MagneticButton>
                </Link>
                <Link href='/work'>
                  <MagneticButton variant='outline' size='lg'>
                    View Projects
                  </MagneticButton>
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              className='relative'
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className='relative w-full aspect-square max-w-md mx-auto'>
                <div className='absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-full opacity-20 blur-2xl' />
                <Image
                  src='/profile.jpg'
                  alt='Vikas Narlakanti'
                  fill
                  className='rounded-full object-cover border-4 border-primary/20 relative z-10'
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <article className='container py-20 md:py-32'>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
          <div className='lg:col-span-12 mb-12'>
            <ParallaxFade>
              <h2 className='text-[clamp(2rem,4vw,3.5rem)] font-bold mb-4'>About Me</h2>
            </ParallaxFade>
          </div>
          
          <div className='lg:col-span-8'>
            <div className='text-[clamp(1.25rem,2vw,1.75rem)] leading-relaxed space-y-8'>
              <p>
                <ParallaxReveal paragraph={bioText} />
              </p>
              <p>
                <ParallaxReveal paragraph={journeyText} />
              </p>
              <p>
                <ParallaxReveal paragraph={philosophyText} />
              </p>
            </div>
          </div>
          
          <div className='lg:col-span-4'>
            <ParallaxFade delay={0.3}>
              <div className='bg-secondary rounded-2xl p-8 sticky top-8'>
                <h3 className='text-2xl font-semibold mb-6'>Quick Facts</h3>
                <ul className='space-y-4 text-muted-foreground'>
                  <li className='flex items-start gap-3'>
                    <BookOpen className='w-5 h-5 mt-1 flex-shrink-0' />
                    <span>Pursuing B.E. in AI & ML at Chandigarh University</span>
                  </li>
                  <li className='flex items-start gap-3'>
                    <Brain className='w-5 h-5 mt-1 flex-shrink-0' />
                    <span>Specialization in Machine Learning & Deep Learning</span>
                  </li>
                  <li className='flex items-start gap-3'>
                    <Code2 className='w-5 h-5 mt-1 flex-shrink-0' />
                    <span>Full Stack Development with Modern Frameworks</span>
                  </li>
                  <li className='flex items-start gap-3'>
                    <Target className='w-5 h-5 mt-1 flex-shrink-0' />
                    <span>Focus on Ethical & Scalable AI Solutions</span>
                  </li>
                </ul>
              </div>
            </ParallaxFade>
          </div>
        </div>
      </article>

      {/* Skills & Technologies Section */}
      <section className='bg-secondary py-20 md:py-32'>
        <div className='container'>
          <ParallaxFade>
            <h2 className='text-[clamp(2rem,4vw,3.5rem)] font-bold mb-16 text-center'>
              Skills & Technologies
            </h2>
          </ParallaxFade>
          
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {[
              {
                category: 'AI & Machine Learning',
                icon: Brain,
                skills: ['Python', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'Keras', 'OpenCV', 'NLP', 'Computer Vision']
              },
              {
                category: 'Programming Languages',
                icon: Code2,
                skills: ['Python', 'C++', 'JavaScript', 'TypeScript', 'SQL', 'Java']
              },
              {
                category: 'Frontend Development',
                icon: Rocket,
                skills: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'HTML5', 'CSS3']
              },
              {
                category: 'Backend Development',
                icon: Target,
                skills: ['Node.js', 'Express', 'FastAPI', 'Django', 'REST APIs', 'GraphQL']
              },
              {
                category: 'Data Science & Analytics',
                icon: Award,
                skills: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Data Visualization', 'Statistical Analysis']
              },
              {
                category: 'Tools & Platforms',
                icon: BookOpen,
                skills: ['Git', 'Docker', 'AWS', 'Google Cloud', 'MongoDB', 'PostgreSQL', 'Firebase']
              }
            ].map((item, index) => (
              <ParallaxFade key={index} delay={index * 0.1}>
                <motion.div
                  className='bg-background rounded-2xl p-6 h-full shadow-lg'
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                >
                  <div className='flex items-center gap-3 mb-4'>
                    <item.icon className='w-6 h-6 text-primary' />
                    <h3 className='text-xl font-semibold'>{item.category}</h3>
                  </div>
                  <div className='flex flex-wrap gap-2'>
                    {item.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className='px-3 py-1 bg-secondary text-sm rounded-full'
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </ParallaxFade>
            ))}
          </div>
        </div>
      </section>

      {/* Experience & Education Section */}
      <section className='container py-20 md:py-32'>
        <ParallaxFade>
          <h2 className='text-[clamp(2rem,4vw,3.5rem)] font-bold mb-16 text-center'>
            Journey & Milestones
          </h2>
        </ParallaxFade>
        
        <div className='max-w-4xl mx-auto'>
          <div className='space-y-12'>
            <ParallaxFade delay={0.1}>
              <motion.div
                className='relative pl-8 border-l-2 border-primary pb-8'
                whileHover={{ x: 8, transition: { duration: 0.3 } }}
              >
                <div className='absolute -left-[9px] top-0 w-4 h-4 bg-primary rounded-full' />
                <div className='bg-secondary rounded-xl p-6'>
                  <p className='text-sm text-muted-foreground mb-2'>2023 - Present</p>
                  <h3 className='text-2xl font-semibold mb-2'>Bachelor of Engineering in AI & ML</h3>
                  <p className='text-lg text-muted-foreground mb-4'>Chandigarh University</p>
                  <p className='text-base'>
                    Focusing on advanced machine learning, deep learning, natural language processing, 
                    and computer vision. Actively involved in research projects and building practical AI applications.
                  </p>
                </div>
              </motion.div>
            </ParallaxFade>
            
            <ParallaxFade delay={0.2}>
              <motion.div
                className='relative pl-8 border-l-2 border-accent pb-8'
                whileHover={{ x: 8, transition: { duration: 0.3 } }}
              >
                <div className='absolute -left-[9px] top-0 w-4 h-4 bg-accent rounded-full' />
                <div className='bg-secondary rounded-xl p-6'>
                  <p className='text-sm text-muted-foreground mb-2'>Ongoing</p>
                  <h3 className='text-2xl font-semibold mb-2'>Full Stack Development</h3>
                  <p className='text-lg text-muted-foreground mb-4'>Self-Taught & Projects</p>
                  <p className='text-base'>
                    Building modern web applications using React, Next.js, Node.js, and various databases. 
                    Creating seamless user experiences with responsive design and smooth animations.
                  </p>
                </div>
              </motion.div>
            </ParallaxFade>
            
            <ParallaxFade delay={0.3}>
              <motion.div
                className='relative pl-8 border-l-2 border-primary pb-8'
                whileHover={{ x: 8, transition: { duration: 0.3 } }}
              >
                <div className='absolute -left-[9px] top-0 w-4 h-4 bg-primary rounded-full' />
                <div className='bg-secondary rounded-xl p-6'>
                  <p className='text-sm text-muted-foreground mb-2'>Continuous</p>
                  <h3 className='text-2xl font-semibold mb-2'>AI Research & Development</h3>
                  <p className='text-lg text-muted-foreground mb-4'>Personal Projects & Collaboration</p>
                  <p className='text-base'>
                    Experimenting with cutting-edge AI technologies, contributing to open-source projects, 
                    and developing innovative solutions for real-world problems using machine learning.
                  </p>
                </div>
              </motion.div>
            </ParallaxFade>
          </div>
        </div>
      </section>

      {/* Values & Approach Section */}
      <section className='bg-foreground text-background py-20 md:py-32'>
        <div className='container'>
          <ParallaxFade>
            <h2 className='text-[clamp(2rem,4vw,3.5rem)] font-bold mb-16 text-center'>
              My Approach
            </h2>
          </ParallaxFade>
          
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto'>
            {[
              {
                title: 'Innovation First',
                description: 'Constantly exploring new technologies and methodologies to push the boundaries of what\'s possible with AI and web development.'
              },
              {
                title: 'User-Centric Design',
                description: 'Building intelligent systems and interfaces that prioritize user experience, accessibility, and intuitive interaction.'
              },
              {
                title: 'Ethical AI',
                description: 'Committed to developing responsible AI solutions that are fair, transparent, and beneficial to society as a whole.'
              }
            ].map((value, index) => (
              <ParallaxFade key={index} delay={index * 0.1}>
                <motion.div
                  className='text-center p-6'
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                >
                  <h3 className='text-2xl font-semibold mb-4'>{value.title}</h3>
                  <p className='text-lg opacity-80'>{value.description}</p>
                </motion.div>
              </ParallaxFade>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='container py-20 md:py-32'>
        <motion.div
          className='max-w-4xl mx-auto text-center'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className='text-[clamp(2rem,4vw,3.5rem)] font-bold mb-6'>
            Let's Create Something Amazing
          </h2>
          <p className='text-xl text-muted-foreground mb-8 max-w-2xl mx-auto'>
            Whether you have a project in mind or just want to connect, 
            I'm always open to discussing new opportunities and ideas.
          </p>
          <div className='flex flex-wrap justify-center gap-4'>
            <Link href='/contact'>
              <MagneticButton variant='primary' size='xl'>
                Start a Conversation
              </MagneticButton>
            </Link>
            <Link href='/work'>
              <MagneticButton variant='outline' size='xl'>
                View My Work
              </MagneticButton>
            </Link>
          </div>
        </motion.div>
      </section>

      <Contact />
    </Transition>
  );
}
