import { User } from './user';

export const USERS: User[] = [
  {
    _id: {
      $oid: '59504a97fc13ae36b900006e'
    },
    email: 'srodolphe0@hibu.com',
    password: 'lwZU6I',
    name: {
      firstName: 'Sharai',
      lastName: 'Rodolphe'
    },
    bio: 'Universal analyzing policy',
    collections: [
      {
        _id: '140f7415-6e62-4bd5-9658-4f9e9139d0b5',
        collection: 'urna ut tellus nulla ut',
        posts: 3
      },
      {
        _id: '60f9f227-18d4-4c43-95c0-cff1731becc5',
        collection: 'ultrices mattis odio',
        posts: 3
      },
      {
        _id: '4b935f4e-1f61-4eee-a6f1-24cad4862a27',
        collection: 'leo pellentesque ultrices mattis odio donec vitae nisi nam ultrices',
        posts: 2
      },
      {
        _id: '1eaed42b-c914-489e-97a0-52f0011b42de',
        collection: 'dis parturient montes',
        posts: 2
      }
    ],
    following: 3
  }
];


