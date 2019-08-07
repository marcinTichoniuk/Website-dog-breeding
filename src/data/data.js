import img1 from '../images/aris.jpg';
import imgM from '../images/arisM.jpg';
import img2 from '../images/fredy.jpg';
import img2M from '../images/fredyM.jpg';
import img3 from '../images/G3.jpg';
import img4 from '../images/kora1.jpg';

// import aris images
// import aris1 from '../images/aris/aris.jpg';

// const arisImages = [
//   { original: , thumbnail: },
//   { original: , thumbnail: },
//   { original: , thumbnail: },
//   { original: , thumbnail: },
//   { original: , thumbnail: },
//   { original: , thumbnail: },
// ]

const images = [
  {
    original: img1,
    thumbnail: img1,
  },
  {
    original: img2,
    thumbnail: img2,
  },
  {
    original: img4,
    thumbnail: img4,
  },
]

export default {
  dogs: [

    {
      id: 1,
      gender: 'male',
      name: 'Aris',
      birth: '24.06.2006',
      title: 'Champion Polski',
      realName: 'VAGABONG VIKING BLUE Energizer',
      img: img1,
      imgM: imgM,
      gallery: images,
      exams: 'HD - A',
      titles: `1x CACIB, 2x Zwycięzca Młodzieży, 2x Naj. pies w rasie`,
      description: 'Aris to najstarszy członek stada. Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis eius reprehenderit minus voluptates rerum. Possimus facilis dolor eligendi, labore ex consequuntur ullam doloribus pariatur similique vel? Dicta perferendis molestiae sequi.'
    },

    {
      id: 2,
      gender: 'male',
      name: 'Fredy',
      birth: '19.02 2013',
      title: 'Młodzieżowy Champion Polski',
      realName: 'FREDY HD The Best Of Gajowy',
      img: img2,
      imgM: img2M,
      gallery: images,
      exams: 'HD - A, CEA - normal, TNS - normal, CL - normal',
      description: 'Veritatis eius reprehenderit minus voluptates rerum. Possimus facilis dolor eligendi, labore ex consequuntur ullam doloribus pariatur similique vel? Dicta perferendis molestiae sequi.'
    },
  ],



  femaleDogs: [

    {
      id: 3,
      gender: 'female',
      name: 'G',
      birth: '18.12.2010',
      title: 'Champion Polski',
      realName: 'ANGEL IN BLACK Valey Of Borders',
      img: img3,
      gallery: images,
      exams: 'HD - A, CEA - DNA normal, TNS DNA - normal',
      titles: '1x Naj. Baby w rasie, 1x Naj. Szczenię w rasie, 3x CWC Zwycięzca',
      description: 'Veritatis eius reprehenderit minus voluptates rerum. Possimus facilis dolor eligendi, labore ex consequuntur ullam doloribus pariatur similique vel? Dicta perferendis molestiae sequi.'
    },

    {
      id: 4,
      gender: 'female',
      name: 'Kora',
      birth: '13.04.2012',
      title: '',
      realName: 'BLACKBERRY Valey Of Borders',
      img: img4,
      gallery: images,
      exams: 'HD - A, CEA - normal, TNS - normal, CL - normal',
      description: 'Veritatis eius reprehenderit minus voluptates rerum. Possimus facilis dolor eligendi, labore ex consequuntur ullam doloribus pariatur similique vel? Dicta perferendis molestiae sequi.'
    },

    {
      id: 5,
      gender: 'female',
      name: 'Beki',
      birth: '13.04.2012',
      title: '',
      realName: 'BACK TO BLACK Valey Of Borders',
      img: img4,
      gallery: images,
      exams: 'HD - A, CEA - normal, TNS - normal, CL - normal',
      description: 'Veritatis eius reprehenderit minus voluptates rerum. Possimus facilis dolor eligendi, labore ex consequuntur ullam doloribus pariatur similique vel? Dicta perferendis molestiae sequi.'
    },

    {
      id: 6,
      gender: 'female',
      name: 'Tina',
      birth: '03.01.2015',
      title: 'Młodzieżowy Champion Polski',
      realName: 'SONIA Valey Of Borders',
      img: img4,
      gallery: images,
      exams: 'CEA - normal, TNS - normal, CL - normal',
      description: 'Veritatis eius reprehenderit minus voluptates rerum. Possimus facilis dolor eligendi, labore ex consequuntur ullam doloribus pariatur similique vel? Dicta perferendis molestiae sequi.'
    },
  ]
}

