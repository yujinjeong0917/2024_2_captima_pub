import React from 'react';

const menuItems = [
  {
    name: '카프티마 스페셜',
    description: '비밀 레시피로 만든 특별한 음료',
    price: '5,000원',
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
  },
  {
    name: '코딩 에너지 드링크',
    description: '밤샘 코딩에 필수!',
    price: '4,500원',
    image: 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
  },
  {
    name: '버그 프리 스무디',
    description: '버그 없는 코드를 위한 상큼한 스무디',
    price: '6,000원',
    image: 'https://images.unsplash.com/photo-1502741224143-90386d7f8c82?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
  },
  {
    name: '알고리즘 샐러드',
    description: '두뇌 회전에 좋은 신선한 샐러드',
    price: '7,000원',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
  },
  {
    name: '해커톤 핫도그',
    description: '긴 밤을 위한 든든한 간식',
    price: '4,000원',
    image: 'https://images.unsplash.com/photo-1619740455993-9e612b1af08a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
  }
];

const MenuSection: React.FC = () => {
  return (
    <section className="py-16 px-4">
      <h2 className="text-3xl font-bold mb-8 text-center">메뉴</h2>
      <div className="space-y-12">
        {menuItems.map((item, index) => (
          <div key={index} className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
            <div className="w-full md:w-1/2 mb-4 md:mb-0">
              <img src={item.image} alt={item.name} className="w-full h-64 object-cover rounded-lg" />
            </div>
            <div className="w-full md:w-1/2 md:px-8">
              <h3 className="text-2xl font-bold mb-2">{item.name}</h3>
              <p className="text-gray-400 mb-2">{item.description}</p>
              <p className="text-yellow-500 font-bold">{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MenuSection;