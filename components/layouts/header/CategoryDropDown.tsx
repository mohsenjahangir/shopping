import { useState, useRef } from 'react';
import Electronic from "../../../public/svg/electronic.svg"
import HouseIcon from "../../../public/svg/house..svg"
import ClothesIcon from "../../../public/svg/clothes.svg"
import MakeupIcon from "../../../public/svg/makeup.svg"
import TravellingIcon from "../../../public/svg/travelling.svg"
import GardenIcon from  "../../../public/svg/garden.svg"
import DrinkingIcon from "../../../public/svg/drinking.svg"
import Movie from "../../../public/svg/movie.svg"
type Category = {
  title: string; icon1:any;
  items: { id: string; name: string; href: string; icon: string; }[];
};

const categories: Category[] = [
  {
    title: 'الکترونیک',
    icon1:<Electronic/>,
    items: [
      {
        id: 'laptop',
        name: 'لپ تاپ',
        href: '#',
        icon: 'laptop-icon',
      },
      {
        id: 'mobile',
        name: 'موبایل',
        href: '#',
        icon: 'mobile-icon',
      },
      {
        id: 'tablet',
        name: 'تبلت',
        href: '#',
        icon: 'tablet-icon',
      },
      {
        id: 'camera',
        name: 'دوربین',
        href: '#',
        icon: 'camera-icon',
      },
      {
        id: 'tv',
        name: 'تلویزیون',
        href: '#',
        icon: 'tv-icon',
      },
      {
        id: 'audio-video',
        name: 'صوتی و تصویری',
        href: '#',
        icon: 'audio-video-icon',
      },
    ],
  },
  {
    title: 'لوازم خانگی',
    icon1:<HouseIcon/>,
    items: [
      {
        id: 'refrigerator',
        name: 'یخچال و فریزر',
        href: '#',
        icon: 'refrigerator-icon',
      },
      {
        id: 'washing-machine',
        name: 'ماشین لباسشویی',
        href: '#',
        icon: 'washing-machine-icon',
      },
      {
        id: 'dishwasher',
        name: 'ماشین ظرفشویی',
        href: '#',
        icon: 'dishwasher-icon',
      },
      {
        id: 'microwave',
        name: 'مایکروویو',
        href: '#',
        icon: 'microwave-icon',
      },
      {
        id: 'stove',
        name: 'اجاق گاز و فر',
        href: '#',
        icon: 'stove-icon',
      },
      {
        id: 'home-appliances',
        name: 'لوازم برقی خانگی',
        href: '#',
        icon: 'home-appliances-icon',
      },
    ],
  },
  {
    title: 'مد و پوشاک',
    icon1:<ClothesIcon/>,
    items: [
      {
        id: 'mens-clothing',
        name: 'لباس مردانه',
        href: '#',
        icon: 'mens-clothing-icon',
      },
      {
        id: 'womens-clothing',
        name: 'لباس زنانه',
        href: '#',
        icon: 'womens-clothing-icon',
      },
      {
        id: 'kids-clothing',
        name: 'لباس کودک',
        href: '#',
        icon: 'kids-clothing-icon',
      },
      {
        id: 'shoes-and-bags',
        name: 'کیف و کفش',
        href: '#',
        icon: 'shoes-and-bags-icon',
      },
      {
        id: 'fashion-accessories',
        name: 'لوازم جانبی مد',
        href: '#',
        icon: 'fashion-accessories-icon',
      },
    ],
  },
  {
  title: 'آرایشی و بهداشتی',
  icon1:<MakeupIcon/>,
  items: [
    {
      id: 'makeup',
      name: 'آرایشی',
      href: '#',
      icon: 'makeup-icon',
    },
    {
      id: 'skincare',
      name: 'مراقبت از پوست',
      href: '#',
      icon: 'skincare-icon',
    },
    {
      id: 'haircare',
      name: 'مراقبت از مو',
      href: '#',
      icon: 'haircare-icon',
    },
    {
      id: 'fragrance',
      name: 'عطر و ادکلن',
      href: '#',
      icon: 'fragrance-icon',
    },
    {
      id: 'personal-care',
      name: 'مراقبت شخصی',
      href: '#',
      icon: 'personal-care-icon',
    },
  ],
  },
  {
  title: 'ورزش و سفر',
  icon1:<TravellingIcon/>,
  items: [
    {
      id: 'sports-gear',
      name: 'تجهیزات ورزشی',
      href: '#',
      icon: 'sports-gear-icon',
    },
    {
      id: 'outdoor-gear',
      name: 'تجهیزات بیرون از خانه',
      href: '#',
      icon: 'outdoor-gear-icon',
    },
    {
      id: 'luggage',
      name: 'چمدان و کیف',
      href: '#',
      icon: 'luggage-icon',
    },
    {
      id: 'travel-accessories',
      name: 'لوازم جانبی سفر',
      href: '#',
      icon: 'travel-accessories-icon',
    },
    {
      id: 'health-and-fitness',
      name: 'سلامت و تناسب اندام',
      href: '#',
      icon: 'health-and-fitness-icon',
    },
  ],
  },
  {
  title: 'خانه و باغچه',
  icon1:<GardenIcon/>,
  items: [
    {
      id: 'furniture',
      name: 'مبلمان',
      href: '#',
      icon: 'furniture-icon',
    },
    {
      id: 'home-decor',
      name: 'دکوراسیون خانه',
      href: '#',
      icon: 'home-decor-icon',
    },
    {
      id: 'home-improvement',
      name: 'ساختمان و بازسازی خانه',
      href: '#',
      icon: 'home-improvement-icon',
    },
    {
      id: 'garden-supplies',
      name: 'ابزار باغبانی',
      href: '#',
      icon: 'garden-supplies-icon',
    },
    {
      id: 'pool-and-spa',
      name: 'استخر و سونا',
      href: '#',
      icon: 'pool-and-spa-icon',
    },
  ],
  },
  {
  title: 'خوراکی و آشامیدنی',
  icon1:<DrinkingIcon/>,
  items: [
    {
      id: 'groceries',
      name: 'خواربار',
      href: '#',
      icon: 'groceries-icon',
    },
    {
      id: 'beverages',
      name: 'نوشیدنی',
      href: '#',
      icon: 'beverages-icon',
    },
    {
      id: 'snacks',
      name: 'تنقلات',
      href: '#',
      icon: 'snacks-icon',
    },
    {
      id: 'meat-and-seafood',
      name: 'گوشت و ماهی',
      href: '#',
      icon: 'meat-and-seafood-icon',
    },
    {
      id: 'bakery-and-desserts',
      name: 'نان و شیرینی',
      href: '#',
      icon: 'bakery-and-desserts-icon',
    },
  ],
  },
  {
  title: 'کتاب، فیلم و موسیقی',
  icon1:<Movie/>,
  items: [
    {
      id: 'books',
      name: 'کتاب',
      href: '#',
      icon: 'books-icon',
    },
    {
      id: 'movies-and-tv',
      name: 'فیلم و سریال',
      href: '#',
      icon: 'movies-and-tv-icon',
    },
    {
      id: 'music',
      name: 'موسیقی',
      href: '#',
      icon: 'music-icon',
    },
    {
      id: 'video-games',
      name: 'بازی‌های ویدیویی',
      href: '#',
      icon: 'video-games-icon',
    },
    {
      id: 'board-games',
      name: 'بازی‌های میزی',
      href: '#',
      icon: 'board-games-icon',
    },
  ],
  },
  
  // ...
];

export const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const toggleDropdown = (open: boolean) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    if (open) {
      setIsOpen(true);
    } else {
      timeoutRef.current = setTimeout(() => setIsOpen(false), 200);
    }
  };

  const handleCategoryClick = (category: Category) => {
    setSelectedCategory(category);
    toggleDropdown(true);
  };

  return (
    <div className="dropdown relative " onMouseLeave={() => toggleDropdown(false)}>
      <button
        className=" hover:bg-gray-100 text-gray-800 font-bold    inline-flex items-center border-l-2 border-slate-400 w-full sm:w-auto"
        onMouseEnter={() => toggleDropdown(true)}
      >
        <span className="truncate">{'دسته بندی کالاها'}</span>
        <svg
          className={`fill-current h-4 w-4 ml-2 ${isOpen ? 'transform rotate-180' : ''}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M10 14l6-6H4z" />
        </svg>
      </button>
      {isOpen && (
        <div className="dropdown-menu absolute text-gray-700 pt-1 w-full sm:w-auto border-2">
          {categories.map((category) => (
            <div key={category.title} className="sm:inline-block sm:relative sm:mr-2 ">
              <button
                className=" flex gap-4 px-4 py-2 text-sm font-bold hover:bg-gray-200 truncate w-full sm:w-auto"
                onClick={() => handleCategoryClick(category)}
              >
                {category.icon1}
                {category.title}
              </button>
              {selectedCategory === category && (
                <div className="pl-4  mr-10  sm:absolute sm:top-0 w-full sm:right-full sm:w-48 sm:mt-2 sm:py-2 sm:rounded-lg sm:shadow-lg sm:bg-white">
                  {category.items.map((item) => (
                    <a
                      key={item.id}
                      href={item.href}
                      className="block py-2 pr-5 text-sm hover:bg-gray-200 truncate"
                      onClick={() => toggleDropdown(false)}
                    >
                      <span className={`icon ${item.icon}`} />
                      {item.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};