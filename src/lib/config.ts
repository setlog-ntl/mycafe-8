export interface MenuItem {
  name: string;
  nameEn?: string;
  desc: string;
  descEn?: string;
  price: string;
  category: string;
  emoji: string;
  imageUrl?: string;
  isNew?: boolean;
  isPopular?: boolean;
}

export interface BusinessHour {
  day: string;
  dayEn?: string;
  hours: string;
  hoursEn?: string;
  isHoliday?: boolean;
}

const DEMO_MENU: MenuItem[] = [
  {
    name: '아메리카노',
    nameEn: 'Americano',
    desc: '에티오피아 예가체프 싱글 오리진, 화사한 과일 산미와 깔끔한 뒷맛',
    price: '₩5,000',
    category: '커피',
    emoji: '☕',
    imageUrl: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=120&h=120&q=80&auto=format&fit=crop',
  },
  {
    name: '카페라떼',
    nameEn: 'Cafe Latte',
    desc: '스팀 밀크와 에스프레소의 완벽한 균형, 부드러운 마이크로폼',
    price: '₩5,500',
    category: '커피',
    emoji: '☕',
    imageUrl: 'https://images.unsplash.com/photo-1561882468-9110e03e0f78?w=120&h=120&q=80&auto=format&fit=crop',
    isPopular: true,
  },
  {
    name: '바닐라라떼',
    nameEn: 'Vanilla Latte',
    desc: '마다가스카르 바닐라빈 직접 추출 시럽 사용, 자연스러운 달콤함',
    price: '₩6,000',
    category: '커피',
    emoji: '🍦',
  },
  {
    name: '콜드브루',
    nameEn: 'Cold Brew',
    desc: '12시간 저온 추출, 부드럽고 진한 커피 본연의 풍미',
    price: '₩5,500',
    category: '커피',
    emoji: '☕',
    imageUrl: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=120&h=120&q=80&auto=format&fit=crop',
  },
  {
    name: '플랫화이트',
    nameEn: 'Flat White',
    desc: '리스트레토 더블샷 + 마이크로폼, 농밀한 커피 풍미',
    price: '₩5,500',
    category: '커피',
    emoji: '☕',
  },
  {
    name: '아인슈페너',
    nameEn: 'Einspänner',
    desc: '진한 아메리카노 위에 무가당 생크림, 비엔나 스타일',
    price: '₩6,500',
    category: '커피',
    emoji: '☕',
    imageUrl: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?w=120&h=120&q=80&auto=format&fit=crop',
    isNew: true,
  },
  {
    name: '말차라떼',
    nameEn: 'Matcha Latte',
    desc: '교토 우지 말차 1등급, 부드러운 밀크폼과의 조화',
    price: '₩6,000',
    category: '논커피',
    emoji: '🍵',
    imageUrl: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=120&h=120&q=80&auto=format&fit=crop',
    isPopular: true,
  },
  {
    name: '얼그레이라떼',
    nameEn: 'Earl Grey Latte',
    desc: '베르가못 향 가득한 얼그레이 직접 우린 진한 밀크티',
    price: '₩5,500',
    category: '논커피',
    emoji: '🍵',
  },
  {
    name: '유자에이드',
    nameEn: 'Yuja Ade',
    desc: '국산 유자청으로 만든 상큼한 에이드, 탄산 선택 가능',
    price: '₩6,000',
    category: '논커피',
    emoji: '🍋',
  },
  {
    name: '자몽에이드',
    nameEn: 'Grapefruit Ade',
    desc: '생 자몽 착즙, 달콤하고 상큼한 자몽 에이드',
    price: '₩6,000',
    category: '논커피',
    emoji: '🍊',
  },
  {
    name: '딸기라떼',
    nameEn: 'Strawberry Latte',
    desc: '국내산 딸기 퓨레, 봄철 시즌 한정 메뉴',
    price: '₩6,500',
    category: '논커피',
    emoji: '🍓',
  },
  {
    name: '초콜릿',
    nameEn: 'Hot Chocolate',
    desc: '발로나 55% 다크 초콜릿, 진하고 부드러운 핫초코',
    price: '₩5,500',
    category: '논커피',
    emoji: '🍫',
  },
  {
    name: '당근케이크',
    nameEn: 'Carrot Cake',
    desc: '크림치즈 프로스팅, 촉촉한 당근 케이크 1조각',
    price: '₩7,000',
    category: '디저트',
    emoji: '🍰',
    imageUrl: 'https://images.unsplash.com/photo-1567171466295-4afa63d45416?w=120&h=120&q=80&auto=format&fit=crop',
    isPopular: true,
  },
  {
    name: '크루아상',
    nameEn: 'Croissant',
    desc: '버터 48겹 수제 크루아상, 매일 아침 직접 제조',
    price: '₩4,500',
    category: '디저트',
    emoji: '🥐',
    imageUrl: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=120&h=120&q=80&auto=format&fit=crop',
  },
  {
    name: '티라미수',
    nameEn: 'Tiramisu',
    desc: '마스카포네 크림, 이탈리아 정통 레시피 티라미수',
    price: '₩7,500',
    category: '디저트',
    emoji: '🍮',
  },
  {
    name: '바스크치즈케이크',
    nameEn: 'Basque Cheesecake',
    desc: '진한 크림치즈와 바삭한 겉면, 산 세바스티안 스타일',
    price: '₩7,000',
    category: '디저트',
    emoji: '🍰',
    imageUrl: 'https://images.unsplash.com/photo-1574085733277-851d9d856a3a?w=120&h=120&q=80&auto=format&fit=crop',
  },
  {
    name: '스콘세트',
    nameEn: 'Scone Set',
    desc: '플레인·블루베리 스콘 2종 + 클로티드 크림',
    price: '₩5,500',
    category: '디저트',
    emoji: '🫐',
  },
  {
    name: '마들렌',
    nameEn: 'Madeleine',
    desc: '레몬 제스트 수제 마들렌, 촉촉하고 달콤한 한 입',
    price: '₩3,500',
    category: '디저트',
    emoji: '🍪',
  },
  {
    name: '에티오피아 예가체프',
    nameEn: 'Ethiopia Yirgacheffe',
    desc: '플로럴·베리·라임 노트, 워시드 프로세싱, 밝은 산미',
    price: '₩18,000',
    category: '원두',
    emoji: '🫘',
    imageUrl: 'https://images.unsplash.com/photo-1611854779393-1b2da9d400fe?w=120&h=120&q=80&auto=format&fit=crop',
  },
  {
    name: '콜롬비아 수프레모',
    nameEn: 'Colombia Supremo',
    desc: '초콜릿·캐러멜·견과류 노트, 균형 잡힌 바디감',
    price: '₩16,000',
    category: '원두',
    emoji: '🫘',
  },
  {
    name: '과테말라 안티구아',
    nameEn: 'Guatemala Antigua',
    desc: '스모키·다크초콜릿·스파이시 노트, 풍부한 바디감',
    price: '₩17,000',
    category: '원두',
    emoji: '🫘',
  },
  {
    name: '브라질 산토스',
    nameEn: 'Brazil Santos',
    desc: '넛티·카카오·달콤한 여운, 입문용 스페셜티 추천',
    price: '₩15,000',
    category: '원두',
    emoji: '🫘',
    imageUrl: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=120&h=120&q=80&auto=format&fit=crop',
  }
];

const DEMO_HOURS: BusinessHour[] = [
  {
    day: '월요일',
    dayEn: 'Monday',
    hours: '정기휴무',
    isHoliday: true,
  },
  {
    day: '화요일',
    dayEn: 'Tuesday',
    hours: '09:00 – 22:00',
    hoursEn: '09:00 – 22:00',
  },
  {
    day: '수요일',
    dayEn: 'Wednesday',
    hours: '09:00 – 22:00',
    hoursEn: '09:00 – 22:00',
  },
  {
    day: '목요일',
    dayEn: 'Thursday',
    hours: '09:00 – 22:00',
    hoursEn: '09:00 – 22:00',
  },
  {
    day: '금요일',
    dayEn: 'Friday',
    hours: '09:00 – 22:00',
    hoursEn: '09:00 – 22:00',
  },
  {
    day: '토요일',
    dayEn: 'Saturday',
    hours: '09:00 – 22:00',
    hoursEn: '09:00 – 22:00',
  },
  {
    day: '일요일',
    dayEn: 'Sunday',
    hours: '09:00 – 22:00',
    hoursEn: '09:00 – 22:00',
  }
];

const _basePath = process.env.NEXT_PUBLIC_REPO_NAME ? `/${process.env.NEXT_PUBLIC_REPO_NAME}` : '';

function parseJSON<T>(raw: string | undefined, fallback: T): T {
  if (!raw) return fallback;
  try {
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

export const siteConfig = {
  name: process.env.NEXT_PUBLIC_SITE_NAME || 'my cafe223123',
  nameEn: process.env.NEXT_PUBLIC_SITE_NAME_EN || 'my cafe34',
  description: process.env.NEXT_PUBLIC_DESCRIPTION || 'my cafe',
  descriptionEn: process.env.NEXT_PUBLIC_DESCRIPTION_EN || 'A cup of freshly roasted coffee every morning',
  phone: process.env.NEXT_PUBLIC_PHONE || '02-338-1204',
  primaryColor: process.env.NEXT_PUBLIC_PRIMARY_COLOR || '#8b6914',
  address: process.env.NEXT_PUBLIC_ADDRESS || '서울 마포구 연남로 23길 8',
  addressEn: process.env.NEXT_PUBLIC_ADDRESS_EN || '8, Yeonnam-ro 23-gil, Mapo-gu, Seoul',
  kakaoMapId: process.env.NEXT_PUBLIC_KAKAO_MAP_ID || '',
  menuItems: parseJSON<MenuItem[]>(process.env.NEXT_PUBLIC_MENU_ITEMS, DEMO_MENU),
  businessHours: parseJSON<BusinessHour[]>(process.env.NEXT_PUBLIC_BUSINESS_HOURS, DEMO_HOURS),
  galleryImages: parseJSON<string[]>(process.env.NEXT_PUBLIC_GALLERY_IMAGES, [
  'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&h=600&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1561882468-9110e03e0f78?w=600&h=600&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1611854779393-1b2da9d400fe?w=600&h=600&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1567171466295-4afa63d45416?w=600&h=600&q=80&auto=format&fit=crop'
]),
  instagramUrl: process.env.NEXT_PUBLIC_INSTAGRAM_URL || '',
  naverBlogUrl: process.env.NEXT_PUBLIC_NAVER_BLOG_URL || '',
  kakaoChannelUrl: process.env.NEXT_PUBLIC_KAKAO_CHANNEL_URL || '',
  fontFamily: 'Pretendard',
  designPreset: 'warm-earth',
  gaId: process.env.NEXT_PUBLIC_GA_ID || null,
};

export type SiteConfig = typeof siteConfig;
