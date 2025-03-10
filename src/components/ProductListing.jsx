import ProductPanel from './ProductPanel';

const ProductListing = () => {

  const products = [
    {
      id: 1,
      name: {
        en: 'Echo Sphere',
        fr: 'Sphère Echo',
      },
      img: 'sphere.jpg',
      description: {
        en: 'The Echo Sphere delivers room-filling 360° sound with voice control capabilities. Ask questions, play music, control your smart home, and more.',
        fr: 'L\'Echo Sphere offre un son à 360° qui remplit la pièce avec des capacités de contrôle vocal. Posez des questions, écoutez de la musique, contrôlez votre maison intelligente et plus encore.',
      },
      price: {
        US: '$100',
        CA: '$130 CAD',
        GB: '$80',
      }
    },
    {
      id: 2,
      name: {
        en: 'PulseTrackPro',
        fr: 'PulseTrackPro',
      },
      img: 'pulse.jpg',
      description: {
        en: 'The PulseTrackPro is a smartwatch that tracks your heart rate, steps, and sleep. Stay connected with notifications for calls, texts, and more.',
        fr: 'La PulseTrackPro est une montre intelligente qui suit votre fréquence cardiaque, vos pas et votre sommeil. Restez connecté avec des notifications pour les appels, les SMS et plus encore.',
      },
      price: {
        US: '$150',
        CA: '$200 CAD',
        GB: '$120',
      }
    },
    {
      id: 3,
      name: {
        en: 'SoundPod Mini',
        fr: 'SoundPod Mini',
      },
      img: 'soundpod.webp',
      description: {
        en: 'The SoundPod Mini is a portable Bluetooth speaker with a 10-hour battery life. Enjoy high-quality sound wherever you go.',
        fr: 'Le SoundPod Mini est une enceinte Bluetooth portable avec une autonomie de 10 heures. Profitez d\'un son de haute qualité où que vous alliez.',
      },
      price: {
        US: '$50',
        CA: '$70 CAD',
        GB: '$40',
      }
    },
  ];

  return (
    <div className="row">
      {products.map((product, index) => (
        <div className="col-xs-12 col-xl-4 col-lg-4 col-md-6">
          <ProductPanel key={index} product={product} />
        </div>
      ))}
    </div>
  );
};

export default ProductListing;
