import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { ChevronDown, ChevronRight, Server, Code, Database, Cloud, Settings, Users, Search, Globe, Lightbulb, Handshake, GraduationCap } from 'lucide-react';

const ServicesShowcase = () => {
  const [expandedCategories, setExpandedCategories] = useState({});

  const services = {
    'Strategic Partnership Vision': {
      icon: Handshake,
      items: [
        'Seamless IT Team Integration',
        'End-to-End Project Delivery',
        'Dedicated Technical Resources',
        'Comprehensive Web Development',
        'Strategic Technology Planning',
        'Continuous Innovation Support',
        'Knowledge Transfer & Documentation',
        'Regular Strategic Reviews',
        'Scalable Resource Model'
      ],
      description: 'CRM Experts functions as an integral extension of Maui Oil\'s IT team, providing seamless integration of expertise and resources. Our partnership model ensures dedicated support across all technology initiatives, from strategic planning to implementation and maintenance. We combine deep industry knowledge with technical excellence to deliver sustainable, future-ready solutions that drive business value.'
    },
    'Training Services': {
      icon: GraduationCap,
      items: [
        'On-Site Technical Training',
        'In-Person Workshop Sessions',
        'Customized Training Programs',
        'System Administrator Training',
        'End-User Training',
        'Developer Training',
        'Best Practices & Standards Training',
        'Knowledge Transfer Sessions',
        'Documentation & Training Materials',
        'Hands-On Labs & Exercises'
      ],
      description: 'Our comprehensive training services combine hands-on instruction with real-world applications. We offer customized on-site and in-person training programs designed to maximize skill retention and practical application. Our experienced trainers ensure that your team gains both theoretical knowledge and practical expertise across all implemented technologies and systems.'
    },
    'Web Development Services': {
      icon: Globe,
      items: [
        'Frontend Development (React, Angular, Vue)',
        'Backend Development (Node.js, Python, .NET)',
        'Full Stack Solutions',
        'Responsive Design Implementation',
        'Progressive Web Applications (PWA)',
        'API Development and Integration',
        'Database Design and Optimization',
        'Performance Optimization',
        'Security Implementation',
        'UI/UX Development'
      ],
      description: 'Our web development team delivers comprehensive solutions across the full technology stack. We specialize in creating scalable, secure, and high-performance web applications that meet modern business needs while ensuring seamless user experiences.'
    },
    'Consulting Services': {
      icon: Lightbulb,
      items: [
        'CRM Strategy and Implementation Consulting',
        'ERP Systems Assessment and Optimization',
        'AI and Machine Learning Strategy Development',
        'Technical Infrastructure Planning',
        'Digital Transformation Roadmapping',
        'Business Process Optimization',
        'System Integration Strategy',
        'Technology Stack Assessment',
        'Vendor Selection and Management'
      ],
      description: 'Our consulting team brings decades of experience in enterprise systems, offering strategic guidance and practical solutions. We help organizations navigate complex technological decisions, optimize their operations, and implement future-proof solutions across CRM, ERP, AI, and infrastructure domains.'
    },
    'Project Management': {
      icon: Users,
      items: [
        'Dedicated Project Management for CRM and ERP Initiatives',
        'Dedicated Project Management for IT Initiatives'
      ]
    },
    'CRM & ERP Development': {
      icon: Database,
      items: [
        'MS Dynamics CRM Development',
        'MS Business Central Development with AL Programming',
        'Zoho Development/Deluge',
        'APEX Salesforce Development',
        'Netsuite Suite Scripting'
      ]
    },
    'Software Development': {
      icon: Code,
      items: [
        'Sharepoint Development',
        'C# Development',
        'Python Development',
        'TypeScript Development',
        'JavaScript Development',
        'Website Development',
        'API Integration'
      ]
    },
    'AI & Automation': {
      icon: Cloud,
      items: [
        'AI Development',
        'OpenAI Integration',
        'Claude AI Development',
        'Robotic Process Automation (RPA)',
        'UI Path Implementation',
        'Python Automation Solutions'
      ]
    },
    'Infrastructure & Administration': {
      icon: Server,
      items: [
        'Hosting and Infrastructure',
        'Linux Administration',
        'Unix Administration',
        'Windows Server Administration',
        'Cloud Infrastructure Management'
      ]
    },
    'Recruiting Services': {
      icon: Search,
      items: [
        'Dedicated Technical Recruitment for Maui Oil',
        'Access to Curated Contractor Database',
        'Former Employee Network',
        'Strategic Staffing Partnerships',
        'Internal Resource Pool'
      ],
      description: 'CRM Experts provides comprehensive recruiting services specifically tailored for Maui Oil. We leverage our extensive network of partnerships and internal resources to identify and secure the exact skill sets needed. Our recruitment process is backed by a carefully maintained database of qualified contractors and former employees, ensuring quick access to verified talent.'
    }
  };

  const toggleCategory = (category) => {
    setExpandedCategories(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  return (
    <Card className="w-full max-w-4xl bg-white shadow-lg">
      <CardHeader className="bg-blue-600 text-white rounded-t-lg">
        <CardTitle className="text-2xl font-bold">CRM Experts Services</CardTitle>
        <p className="text-blue-100">Comprehensive Enterprise Solutions</p>
      </CardHeader>
      <CardContent className="p-6">
        <div className="space-y-4">
          {Object.entries(services).map(([category, { icon: Icon, items, description }]) => (
            <div key={category} className="border rounded-lg overflow-hidden">
              <button
                onClick={() => toggleCategory(category)}
                className="w-full p-4 flex items-center justify-between bg-gray-50 hover:bg-gray-100 transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <Icon className="w-6 h-6 text-blue-600" />
                  <span className="font-semibold text-gray-800">{category}</span>
                </div>
                {expandedCategories[category] ? (
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                ) : (
                  <ChevronRight className="w-5 h-5 text-gray-500" />
                )}
              </button>
              {expandedCategories[category] && (
                <div className="p-4 bg-white">
                  {description && (
                    <p className="mb-4 text-gray-700 bg-blue-50 p-3 rounded-lg">{description}</p>
                  )}
                  <ul className="space-y-2">
                    {items.map((item, index) => (
                      <li key={index} className="flex items-center space-x-2 text-gray-700">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ServicesShowcase;