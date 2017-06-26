import { Post } from './post';

export const POSTS = [
  {
    title: 'pulvinar sed nisl nunc',
    type: 'Face to face',
    author: {
      userId: {
        $oid: '595053dafc13ae36b9000078'
      },
      displayName: 'Trudey Maffei'
    },
    timestamp: '7/6/2016',
    tags: 'birds',
    hearts: 'birds',
    content: 'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.'
  },
  {
    title: 'posuere metus vitae ipsum aliquam non mauris',
    type: 'web-enabled',
    author: {
      userId: {
        $oid: '595053dafc13ae36b9000079'
      },
      displayName: 'Maxwell Alyoshin'
    },
    timestamp: '3/19/2017',
    tags: 'cats',
    hearts: 'birds',
    content: 'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.'
  },
  {
    title: 'erat eros viverra eget congue eget semper rutrum nulla',
    type: 'Open-architected',
    author: {
      userId: {
        $oid: '595053dafc13ae36b900007a'
      },
      displayName: 'Rochester Kidney'
    },
    timestamp: '10/29/2016',
    tags: 'dogs',
    hearts: 'birds',
    content: 'Phasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.'
  },
  {
    title: 'velit eu est congue elementum',
    type: 'Re-contextualized',
    author: {
      userId: {
        $oid: '595053dafc13ae36b900007b'
      },
      displayName: 'Roseanna Balwin'
    },
    timestamp: '9/5/2016',
    tags: 'rabbits',
    hearts: 'cats',
    content: 'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.'
  },
  {
    title: 'et tempus semper est quam pharetra magna ac',
    type: 'transitional',
    author: {
      userId: {
        $oid: '595053dafc13ae36b900007c'
      },
      displayName: 'Dorothy Donegan'
    },
    timestamp: '1/4/2017',
    tags: 'cats',
    hearts: 'cats',
    content: 'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.'
  },
  {
    title: 'euismod scelerisque quam turpis adipiscing lorem vitae mattis',
    type: 'client-server',
    author: {
      userId: {
        $oid: '595053dafc13ae36b900007d'
      },
      displayName: 'Hermia Derye-Barrett'
    },
    timestamp: '2/17/2017',
    tags: 'cats',
    hearts: 'birds',
    content: 'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.'
  },
  {
    title: 'quam fringilla rhoncus mauris enim leo rhoncus sed vestibulum sit amet',
    type: 'fault-tolerant',
    author: {
      userId: {
        $oid: '595053dafc13ae36b900007e'
      },
      displayName: 'Lorianne Lanchberry'
    },
    timestamp: '12/28/2016',
    tags: 'cats',
    hearts: 'rabbits',
    content: 'In congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.'
  },
  {
    title: 'blandit nam nulla integer pede justo lacinia',
    type: 'content-based',
    author: {
      userId: {
        $oid: '595053dafc13ae36b900007f'
      },
      displayName: 'Ruttger Guesford'
    },
    timestamp: '5/23/2017',
    tags: 'dogs',
    hearts: 'dogs',
    content: 'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.'
  },
  {
    title: 'nulla nisl nunc nisl',
    type: 'homogeneous',
    author: {
      userId: {
        $oid: '595053dafc13ae36b9000080'
      },
      displayName: 'Rodolfo McNirlan'
    },
    timestamp: '10/30/2016',
    tags: 'cats',
    hearts: 'dogs',
    content: 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.'
  },
  {
    title: 'velit vivamus vel nulla eget eros elementum pellentesque quisque',
    type: 'upward-trending',
    author: {
      userId: {
        $oid: '595053dafc13ae36b9000081'
      },
      displayName: 'Pauli Gladebeck'
    },
    timestamp: '11/11/2016',
    tags: 'cats',
    hearts: 'rabbits',
    content: 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.'
  },
  {
    title: 'vulputate nonummy maecenas tincidunt lacus',
    type: 'open architecture',
    author: {
      userId: {
        $oid: '595053dafc13ae36b9000082'
      },
      displayName: 'Batsheva Belson'
    },
    timestamp: '6/6/2017',
    tags: 'dogs',
    hearts: 'cats',
    content: 'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.'
  },
  {
    title: 'diam neque vestibulum eget vulputate ut ultrices vel augue vestibulum ante ipsum',
    type: 'Multi-layered',
    author: {
      userId: {
        $oid: '595053dafc13ae36b9000083'
      },
      displayName: 'Kial Morling'
    },
    timestamp: '12/18/2016',
    tags: 'cats',
    hearts: 'rabbits',
    content: 'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.'
  }
];
