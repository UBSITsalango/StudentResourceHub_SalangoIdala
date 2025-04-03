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
  }
];
