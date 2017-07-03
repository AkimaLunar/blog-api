import { Post } from '../models/post';

export const POSTS = [
  {
    _id: 1,
    title: 'pulvinar sed nisl nunc',
    type: 'blog',
    author: {
      userId: '595053dafc13ae36b9000078',
      displayName: 'Trudey Maffei'
    },
    timestamp: '7/6/2016',
    tags: 'birds',
    hearts: 'birds',
    content: {
        excerpt: 'pulvinar sed nisl nunc',
        html: `<p>Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.</p>
        <h3>Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.</h3>
        <p>Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.</p>`
    }
  },
  {
    _id: 2,
    title: 'posuere metus vitae ipsum aliquam non mauris',
    type: 'blog',
    author: {
      userId: '595053dafc13ae36b9000079',
      displayName: 'Maxwell Alyoshin'
    },
    timestamp: '3/19/2017',
    tags: 'cats',
    hearts: 'birds',
    content: {
        excerpt: 'pulvinar sed nisl nunc',
        html: '<p>Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.</p>'
    }
  },
  {
    _id: 3,
    title: 'erat eros viverra eget congue eget semper rutrum nulla',
    type: 'photo',
    author: {
      userId: '595053dafc13ae36b900007a',
      displayName: 'Rochester Kidney'
    },
    timestamp: '10/29/2016',
    tags: 'dogs',
    hearts: 'birds',
    content: {
      photoUrl: 'http://via.placeholder.com/350x150',
      description: 'Very cure pic'
    }
  },
  {
    _id: 4,
    title: 'velit eu est congue elementum',
    type: 'photo',
    author: {
      userId: '595053dafc13ae36b900007b',
      displayName: 'Roseanna Balwin'
    },
    timestamp: '9/5/2016',
    tags: 'rabbits',
    hearts: 'cats',
    content: {
      photoUrl: 'http://via.placeholder.com/350x150',
      description: 'Very cure pic'
    }
  },
  {
    _id: 5,
    title: 'et tempus semper est quam pharetra magna ac',
    type: 'blog',
    author: {
      userId: '595053dafc13ae36b900007c',
      displayName: 'Dorothy Donegan'
    },
    timestamp: '1/4/2017',
    tags: 'cats',
    hearts: 'cats',
    content: {
      excerpt: 'pulvinar sed nisl nunc',
      html: '<p>Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.</p>'
    }
  },
  {
    _id: 6,
    title: 'euismod scelerisque quam turpis adipiscing lorem vitae mattis',
    type: 'blog',
    author: {
      userId: '595053dafc13ae36b900007d',
      displayName: 'Hermia Derye-Barrett'
    },
    timestamp: '2/17/2017',
    tags: 'cats',
    hearts: 'birds',
    content: {
      excerpt: 'pulvinar sed nisl nunc',
      html: '<p>Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.</p>'
    }
  },
  {
    _id: 7,
    title: 'quam fringilla rhoncus mauris enim leo rhoncus sed vestibulum sit amet',
    type: 'blog',
    author: {
      userId: '595053dafc13ae36b900007e',
      displayName: 'Lorianne Lanchberry'
    },
    timestamp: '12/28/2016',
    tags: 'cats',
    hearts: 'rabbits',
    content: {
      excerpt: 'pulvinar sed nisl nunc',
      html: '<p>Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.</p>'
    }
  },
  {
    _id: 8,
    title: 'blandit nam nulla integer pede justo lacinia',
    type: 'blog',
    author: {
      userId: '595053dafc13ae36b900007f',
      displayName: 'Ruttger Guesford'
    },
    timestamp: '5/23/2017',
    tags: 'dogs',
    hearts: 'dogs',
    content: {
      excerpt: 'pulvinar sed nisl nunc',
      html: '<p>Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.</p>'
    }
  },
  {
    _id: 9,
    title: 'nulla nisl nunc nisl',
    type: 'blog',
    author: {
      userId: '595053dafc13ae36b9000080',
      displayName: 'Rodolfo McNirlan'
    },
    timestamp: '10/30/2016',
    tags: 'cats',
    hearts: 'dogs',
    content: {
      excerpt: 'pulvinar sed nisl nunc',
      html: '<p>Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.</p>'
    }
  },
  {
    _id: 10,
    title: 'velit vivamus vel nulla eget eros elementum pellentesque quisque',
    type: 'blog',
    author: {
      userId: '595053dafc13ae36b9000081',
      displayName: 'Pauli Gladebeck'
    },
    timestamp: '11/11/2016',
    tags: 'cats',
    hearts: 'rabbits',
    content: {
      excerpt: 'pulvinar sed nisl nunc',
      html: '<p>Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.</p>'
    }
  },
  {
    _id: 11,
    title: 'vulputate nonummy maecenas tincidunt lacus',
    type: 'blog',
    author: {
      userId: '595053dafc13ae36b9000082',
      displayName: 'Batsheva Belson'
    },
    timestamp: '6/6/2017',
    tags: 'dogs',
    hearts: 'cats',
    content: {
      excerpt: 'pulvinar sed nisl nunc',
      html: '<p>Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.</p>'
    }
  },
  {
    _id: 12,
    title: 'diam neque vestibulum eget vulputate ut ultrices vel augue vestibulum ante ipsum',
    type: 'blog',
    author: {
      userId: '595053dafc13ae36b9000083',
      displayName: 'Kial Morling'
    },
    timestamp: '12/18/2016',
    tags: 'cats',
    hearts: 'rabbits',
    content: {
      excerpt: 'pulvinar sed nisl nunc',
      html: '<p>Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.</p>'
    }
  },
    {
    _id: 13,
    title: 'Cute Cat 1',
    type: 'photo',
    author: {
      userId: '59443d6fe3a86a2dc3cd6e72',
      displayName: 'Ria Carmin'
    },
    timestamp: '12/18/2016',
    tags: 'cats',
    hearts: 'rabbits',
    content: {
      photoUrl: 'http://via.placeholder.com/350x150',
      description: 'Very cure pic'
    }
  },
    {
    _id: 14,
    title: 'Cute Cat 2',
    type: 'photo',
    author: {
      userId: '59443d6fe3a86a2dc3cd6e72',
      displayName: 'Ria Carmin'
    },
    timestamp: '12/18/2016',
    tags: 'cats',
    hearts: '595053dafc13ae36b9000083',
    content: {
      photoUrl: 'http://via.placeholder.com/350x150',
      description: 'Very cure pic'
    }
  }
];
