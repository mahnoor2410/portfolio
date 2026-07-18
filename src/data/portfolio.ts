import {
  Brain,
  Cpu,
  Eye,
  ScanLine,
  MessageSquareText,
  Bot,
  Workflow,
  BarChart3,
  Server,
  Globe,
  type LucideIcon,
} from 'lucide-react';

export type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const services: Service[] = [
  {
    title: 'Machine Learning Solutions',
    description:
      'End-to-end ML pipelines — data preparation, feature engineering, model training, evaluation and deployment for predictive analytics and business intelligence.',
    icon: Brain,
  },
  {
    title: 'Computer Vision Applications',
    description:
      'Real-time object detection, tracking, segmentation and custom vision systems that turn cameras into intelligent sensors for industrial and consumer use.',
    icon: Eye,
  },
  {
    title: 'Deep Learning Models',
    description:
      'Custom CNNs and transfer-learning architectures in PyTorch and TensorFlow for classification, detection and regression tasks at production scale.',
    icon: Cpu,
  },
  {
    title: 'OCR & Barcode Detection',
    description:
      'Text extraction and barcode/QR decoding pipelines using PaddleOCR, OpenCV and ZXing for document automation and inventory workflows.',
    icon: ScanLine,
  },
  {
    title: 'RAG Chatbots',
    description:
      'Retrieval-augmented chatbots over your own documents with vector search (FAISS), context grounding and citations for trustworthy answers.',
    icon: MessageSquareText,
  },
  {
    title: 'LLM Applications',
    description:
      'Generative AI apps built on Gemini, HuggingFace and LangChain — agents, summarizers, extractors and copilots tailored to your domain.',
    icon: Bot,
  },
  {
    title: 'AI Automation',
    description:
      'Automate repetitive workflows by combining vision, NLP and APIs so your team focuses on high-value work instead of manual data tasks.',
    icon: Workflow,
  },
  {
    title: 'Data Analysis',
    description:
      'Exploratory analysis, visualization and storytelling with Pandas, NumPy and Matplotlib to turn raw data into clear, actionable decisions.',
    icon: BarChart3,
  },
  {
    title: 'FastAPI Backend APIs',
    description:
      'High-performance, documented REST APIs to serve your ML models with async endpoints, validation and clean architecture.',
    icon: Server,
  },
  {
    title: 'Flask & Django AI Apps',
    description:
      'Full-stack web applications that wrap your AI models in a polished, secure and maintainable Flask or Django interface.',
    icon: Globe,
  },
];

export type SkillCategory = {
  name: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  { name: 'Programming', skills: ['Python', 'JavaScript', 'HTML', 'CSS'] },
  { name: 'Frameworks', skills: ['Flask', 'Django', 'FastAPI'] },
  { name: 'Machine Learning', skills: ['Scikit-learn', 'TensorFlow', 'NumPy', 'Pandas'] },
  { name: 'Deep Learning', skills: ['TensorFlow'] },
  { name: 'Generative AI', skills: ['Gemini API', 'LangChain', 'FAISS', 'HuggingFace', 'RAG'] },
  { name: 'Computer Vision', skills: ['YOLO', 'SORT', 'OpenCV', 'PaddleOCR', 'ZXing'] },
  { name: 'Tools', skills: ['Git', 'GitHub', 'VS Code', 'Google Colab', 'Jupyter Notebook'] },
];

export type Experience = {
  company: string;
  role: string;
  period: string;
  points: string[];
};

export const experiences: Experience[] = [
  {
    company: 'Thingtrax',
    role: 'Junior AI Engineer',
    period: 'Sep 2025 – Present',
    points: [
      'Developed industrial Computer Vision Proofs of Concept for manufacturing environments.',
      'Built object detection and multi-object tracking pipelines for real-time monitoring.',
      'Implemented OCR systems for automated label and text recognition on the factory floor.',
      'Delivered customer-focused AI workflows tailored to specific production line requirements.',
      'Designed custom AI solutions that bridge edge vision systems with downstream analytics.',
    ],
  },
  {
    company: 'CodeAlpha',
    role: 'Data Science Intern',
    period: 'Jul 2024 – Aug 2024',
    points: [
      'Developed machine learning models for classification and regression tasks.',
      'Performed data analysis and visualization to extract actionable insights.',
      'Built reproducible Python notebooks for exploratory data analysis and reporting.',
    ],
  },
];

export type Project = {
  id: string;
  title: string;
  tagline: string;
  description: string;
  tags: string[];
  category: 'Computer Vision' | 'Deep Learning' | 'NLP / GenAI' | 'Full-Stack AI';
  featured?: boolean;
  liveUrl?: string;
  githubUrl: string;
  highlights?: string[];
};

export const projects: Project[] = [
  {
    id: 'magnetic-tile-defect',
    title: 'Magnetic Tile Surface Defect Classification',
    tagline: 'End-to-end Deep Learning system for automatic defect classification',
    description:
      'Built an end-to-end deep learning system that automatically classifies surface defects on magnetic tiles. Implemented both a custom baseline CNN and a transfer-learning model using ResNet18, then compared their performance. Handled class imbalance with weighted CrossEntropy loss and evaluated using Macro F1-score. Wrapped the model in a FastAPI backend with an interactive web interface for live inference.',
    tags: ['Python', 'PyTorch', 'OpenCV', 'FastAPI', 'ResNet18', 'CNN', 'Computer Vision', 'Deep Learning'],
    category: 'Computer Vision',
    featured: true,
    liveUrl: '#',
    githubUrl: 'https://github.com/mahnoor2410',
    highlights: [
      'Custom Baseline CNN + Transfer Learning with ResNet18',
      'Full EDA, preprocessing, data augmentation, training & evaluation',
      'Class imbalance handled with weighted CrossEntropy loss',
      'Macro F1-score as the primary evaluation metric',
      'FastAPI backend + interactive web interface for inference',
    ],
  },
  {
    id: 'breathe-safe',
    title: 'Breathe Safe',
    tagline: 'AI-powered AQI Forecasting Web App',
    description:
      'A web application that forecasts Air Quality Index (AQI) using time-series machine learning models, presenting location-aware predictions and health recommendations through a clean, responsive interface.',
    tags: ['Python', 'Scikit-learn', 'Time Series', 'Flask', 'Data Visualization'],
    category: 'Full-Stack AI',
    liveUrl: '#',
    githubUrl: 'https://github.com/mahnoor2410',
  },
  {
    id: 'intellidoc-qa',
    title: 'IntelliDoc QA',
    tagline: 'Multi-PDF RAG Chatbot',
    description:
      'A retrieval-augmented chatbot that ingests multiple PDFs, indexes them with FAISS, and answers user questions grounded in the source documents with citations. Built with LangChain and an LLM API for grounded, hallucination-resistant responses.',
    tags: ['LangChain', 'FAISS', 'RAG', 'Gemini API', 'Python'],
    category: 'NLP / GenAI',
    liveUrl: '#',
    githubUrl: 'https://github.com/mahnoor2410',
  },
  {
    id: 'industrial-product-detection',
    title: 'Industrial Product Detection',
    tagline: 'YOLO + SORT + OCR pipeline',
    description:
      'A real-time industrial pipeline combining YOLO object detection, SORT tracking and OCR to identify, track and read product labels on a moving production line — feeding structured results into downstream systems.',
    tags: ['YOLO', 'SORT', 'OpenCV', 'PaddleOCR', 'Computer Vision'],
    category: 'Computer Vision',
    liveUrl: '#',
    githubUrl: 'https://github.com/mahnoor2410',
  },
  {
    id: 'ai-job-portal',
    title: 'AI Job Portal',
    tagline: 'Resume Screening using Gemini AI',
    description:
      'A job portal that screens resumes against job descriptions using the Gemini API, ranking candidates by semantic match score and surfacing shortlisted profiles to recruiters automatically.',
    tags: ['Gemini API', 'NLP', 'Python', 'FastAPI', 'Generative AI'],
    category: 'NLP / GenAI',
    liveUrl: '#',
    githubUrl: 'https://github.com/mahnoor2410',
  },
];

export type Testimonial = {
  name: string;
  role: string;
  quote: string;
  initials: string;
};

export const testimonials: Testimonial[] = [
  {
    name: 'Sarah Mitchell',
    role: 'Product Manager, Manufacturing Startup',
    initials: 'SM',
    quote:
      'Mahnoor delivered a computer vision proof of concept in record time. The detection accuracy on our production line exceeded expectations and the code was clean, documented and easy to hand off.',
  },
  {
    name: 'David Chen',
    role: 'CTO, SaaS Platform',
    initials: 'DC',
    quote:
      'We needed a RAG chatbot over our internal docs. Mahnoor built a grounded, citation-backed assistant that actually answered correctly. Communication was excellent throughout the project.',
  },
  {
    name: 'Ayesha Khan',
    role: 'Founder, EdTech Startup',
    initials: 'AK',
    quote:
      'From scoping to deployment, Mahnoor understood the business problem first and then chose the right AI approach. Our resume screening feature saved us hours every single week.',
  },
];
