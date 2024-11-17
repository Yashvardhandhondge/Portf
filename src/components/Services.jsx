import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ children, variant = "solid", className, ...props }) => {
  return (
    <button
      className={`py-2 px-4 rounded ${
        variant === 'outline' ? 'border border-primary text-primary' : 'bg-primary text-white'
      } ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

const Card = ({ children, className }) => (
  <div className={`bg-transparent shadow-lg rounded-lg overflow-hidden ${className}`}>
    {children}
  </div>
);

const CardHeader = ({ children }) => (
  <div className="p-6 border-b">{children}</div>
);

const CardContent = ({ children }) => (
  <div className="p-6 flex-1">{children}</div>
);


export default function Services() {
  return (
    <div id="services" className="mx-auto max-w-7xl px-4 py-8 flex flex-col items-center justify-center md:pl-20 md:h-screen">
      {/* Animated Heading */}
      <motion.h2
        className="text-4xl lg:text-7xl font-bold mb-12 text-center"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Pricing Plans
      </motion.h2>

      {/* Animated Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {/* Basic Plan */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <Card>
            <CardHeader>
              <div className="space-y-1">
                <span className="text-sm font-medium text-primary">FOR BASIC USE</span>
                <h3 className="text-2xl font-bold">Basic</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold">$5</span>
                  <span className="text-gray-500">/ project</span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 list-disc text-gray-600">
                <li>HTML/CSS Landing Page (Up to 3 sections)</li>
                <li>Basic Responsive Design</li>
                <li>Lightweight Animations</li>
                <li>1 Page</li>
                <li>No Revision</li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>

        {/* Standard Plan */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Card>
            <CardHeader>
              <div className="space-y-1">
                <span className="text-sm font-medium text-primary">FOR Business</span>
                <h3 className="text-2xl font-bold">Standard</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold">$10</span>
                  <span className="text-gray-500">/ project</span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 list-disc text-gray-600">
                <li>React, Tailwind Landing Page (Up to 5 sections)</li>
                <li>Responsive Design</li>
                <li>Basic Animations</li>
                <li>3 Pages</li>
                <li>Revision 1 Time</li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>

        {/* Premium Plan */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Card>
            <CardHeader>
              <div className="space-y-1">
                <span className="text-sm font-medium text-primary">MOST POPULAR</span>
                <h3 className="text-2xl font-bold">Premium</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold">$25</span>
                  <span className="text-gray-500">/ project</span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 list-disc text-gray-600">
                <li>Full-stack Web Development (Frontend + Backend)</li>
                <li>Responsive Design</li>
                <li>Advanced Animations</li>
                <li>7 Pages</li>
                <li>Revisions 3 Times</li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>

        {/* Enterprise Plan */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Card>
            <CardHeader>
              <div className="space-y-1">
                <span className="text-sm font-medium text-primary">FOR Entrepreneur</span>
                <h3 className="text-2xl font-bold">Enterprise</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold">Custom</span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 list-disc text-gray-600">
                <li>Advanced Projects + Development</li>
                <li>Advanced Animations</li>
                <li>Dedicated ZOOM Meet</li>
                <li>Bug Solving</li>
                <li>Unlimited Revision</li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
