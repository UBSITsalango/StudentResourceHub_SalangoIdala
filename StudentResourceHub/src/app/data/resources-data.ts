import { Resource } from '../models/resource';

export const RESOURCES_DATA: Resource[] = [
  {
    id: 1,
    title: 'Introduction to JavaScript',
    description: 'A beginner-friendly guide to JavaScript programming',
    category: 'Programming',
    url: 'https://example.com/js-intro',
    author: 'John Smith',
    publicationDate: new Date('2023-05-15'),
    isFeatured: true
  },
  {
    id: 2,
    title: 'UI/UX Design Basics',
    description: 'An overview of fundamental UI/UX design principles',
    category: 'Design',
    url: 'https://example.com/uiux-basics',
    author: 'Jane Doe',
    publicationDate: new Date('2022-11-10'),
    isFeatured: false
  },
  {
    id: 3,
    title: 'Linear Algebra for Beginners',
    description: 'Essential linear algebra concepts for students',
    category: 'Math',
    url: 'https://example.com/linear-algebra',
    author: 'Alice Johnson',
    publicationDate: new Date('2021-09-05'),
    isFeatured: true
  },
  {
    id: 4,
    title: 'Advanced CSS Techniques',
    description: 'Learn advanced CSS techniques for creating modern web layouts',
    category: 'Design',
    url: 'https://example.com/advanced-css',
    author: 'Michael Lee',
    publicationDate: new Date('2023-03-22'),
    isFeatured: true
  },
  {
    id: 5,
    title: 'Machine Learning 101',
    description: 'An introduction to machine learning concepts and algorithms',
    category: 'Programming',
    url: 'https://example.com/machine-learning-101',
    author: 'Sarah Brown',
    publicationDate: new Date('2022-01-11'),
    isFeatured: false
  },
  {
    id: 6,
    title: 'Introduction to Web Development',
    description: 'A step-by-step guide to building websites from scratch',
    category: 'Programming',
    url: 'https://example.com/web-development',
    author: 'David Williams',
    publicationDate: new Date('2022-08-20'),
    isFeatured: true
  },
  {
    id: 7,
    title: 'Statistics for Data Science',
    description: 'Basic statistics concepts needed for data science projects',
    category: 'Math',
    url: 'https://example.com/statistics-for-data-science',
    author: 'James Miller',
    publicationDate: new Date('2023-02-15'),
    isFeatured: true
  },
  {
    id: 8,
    title: 'Introduction to Cybersecurity',
    description: 'A guide to understanding the basics of cybersecurity principles',
    category: 'Programming',
    url: 'https://example.com/cybersecurity-intro',
    author: 'Daniel Moore',
    publicationDate: new Date('2023-01-25'),
    isFeatured: false
  },
  {
    id: 9,
    title: 'Introduction to Graphic Design',
    description: 'Basic concepts and tools for graphic design beginners',
    category: 'Design',
    url: 'https://example.com/graphic-design-intro',
    author: 'Jessica Taylor',
    publicationDate: new Date('2021-06-30'),
    isFeatured: true
  }
];
