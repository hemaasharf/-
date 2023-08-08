import React from 'react';
import Card from './Card';

import { image1, image2, image3, image4, image5, image6 } from './index'
const data = [
  { id: 1, name: "Sony Wh-Ch510 Bluetooth Wireless", price: "149$", image: image1,  },
  { id: 2, name: "boAt Rockerz 450", price: "49$", image: image2,  },
  { id: 3, name: "JBL Tune 760NC", price: "179$", image: image3,  },
  { id: 4, name: "Logitech H111 Wired", price: "39$", image: image4,  },
  { id: 5, name: "APPLE Airpods Max Bluetooth Headset", price: "199$", image: image5,  },
  { id: 6, name: "ZEBRONICS Zeb-Thunder Wired", price: "29$", image: image6,  },
]
export function ItemsList({ onChange }) {
  const renderCards = data.map((card) => {
    return <Card key={card.id} name={card.name} price={card.price} image={card.image} onChange={onChange} />
  })

  return (
    <main className='py-7  items-center'>
      <div className='py-10 gap-3 flex flex-wrap justify-center  '>
        {renderCards}
      </div>
      <Footer />

    </main>
  );
}

