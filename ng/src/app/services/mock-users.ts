import { User } from '../models/user';

export const USERS: User[] = [
  {
    _id: '59443d6fe3a86a2dc3cd6e72',
    email: 'akimalunar@gmail.com',
    name: {
      firstName: 'Ria',
      lastName: 'Carmin'
    },
    picture: 'https://s.gravatar.com/avatar/1713f52e8e3b5170c882b077debaada6?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fak.png',
    bio: 'Universal analyzing policy',
    collections: [
      {
        _id: '140f7415-6e62-4bd5-9658-4f9e9139d0b5',
        collection: 'Cute Cats',
        posts: ['13', '14']
      }
    ],
    following: ['595053dafc13ae36b9000083', '595053dafc13ae36b9000082'],
    followers: ['595053dafc13ae36b9000083', '595053dafc13ae36b9000082']
  }
];


