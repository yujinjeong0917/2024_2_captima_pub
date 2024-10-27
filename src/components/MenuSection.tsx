import React from 'react';
import FadeIn from './FadeIn';

interface MenuItem {
  name: string;
  price: number;
  description: string;
  image?: string;
}

interface MenuCategory {
  category: string;
  items: MenuItem[];
}

const menuItems: MenuCategory[] = [
  {
    category: "안주",
    items: [
      { name: "도리토스타코", price: 8000, description: "산타도 이마를 탁 치고 가는 그 맛...!", image: "/img/tacco.jpeg" },
      { name: "묵사발", price: 8000, description: "쌈@뽕한 무돈까가 직접 만든 묵사발", image: "/img/mook.jpeg" },
      { name: "쏘야볶음", price: 12000, description: "매콤달콤한 소스로 볶아낸 바삭한 소야볶음, 술안주의 정석" },
      { name: "두부김치", price: 12000, description: "부드러운 두부와 아삭한 김치의 완벽한 만남, 소주와 찰떡궁합" },
      { name: "제육볶음", price: 12000, description: "매콤하게 볶아낸 제육과 신선한 야채의 조화, 든든한 안주" },
      { name: "오뎅탕", price: 12000, description: "깊은 감칠맛이 일품인 특제 육수의 오뎅탕, 추운 날 생각나는 따뜻한 안주" },
      { name: "황도", price: 6000, description: "달콤하고 시원한 황도, 입안 가득 퍼지는 상큼함" },
      { name: "자릿세(1인당)", price: 5000, description: "편안한 분위기에서 즐기는 여유로운 시간" }
    ]
  },
  {
    category: "음료",
    items: [
      { name: "사과장미(주)", price: 3300, description: "슬라이스한 사과에 소주를 부어먹을 수 있는 🌹같은 너를 위한 메뉴", image: "/img/apple.jpeg" },
      { name: "사이다(350mL)", price: 2000, description: "시원하고 청량한 탄산의 깔끔함" },
      { name: "물(500ml)", price: 1500, description: '깨끗하고 순수한 생수' }
    ]
  }
];

const MenuSection: React.FC = () => {
  return (
    <>
      {menuItems.map((category, index) => (
        <div key={index} className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <FadeIn delay={index * 100}>
              <h2 className="text-3xl font-bold mb-8">{category.category}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.items.map((item, itemIndex) => (
                  <FadeIn key={itemIndex} delay={itemIndex * 100 + 200}>
                    <div className="group">
                      <div className="bg-gray-900 rounded-2xl overflow-hidden">
                        {item.image && (
                          <div className="w-full h-48 overflow-hidden relative">
                            <img 
                              src={item.image} 
                              alt={item.name}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                        )}
                        <div className="p-6">
                          <div className="flex justify-between items-start mb-4">
                            <h3 className="text-xl font-medium">{item.name}</h3>
                            <span className="text-lg">₩{item.price.toLocaleString()}</span>
                          </div>
                          {item.description && (
                            <p className="text-gray-400 text-sm">{item.description}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      ))}
    </>
  );
};

export default MenuSection;