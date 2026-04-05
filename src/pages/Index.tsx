import { useState } from 'react';
import Icon from '@/components/ui/icon';

const HERO_IMG = 'https://cdn.poehali.dev/projects/cd43ea5d-c78d-4a20-8356-eccb8bb2ccc2/files/e6449323-c915-4fe7-97d6-8a3400a26851.jpg';
const GALLERY_IMGS = [
  {
    url: 'https://cdn.poehali.dev/projects/cd43ea5d-c78d-4a20-8356-eccb8bb2ccc2/files/e6449323-c915-4fe7-97d6-8a3400a26851.jpg',
    title: 'Панорама Балаково',
    desc: 'Вид с воздуха на город и Волгу',
  },
  {
    url: 'https://cdn.poehali.dev/projects/cd43ea5d-c78d-4a20-8356-eccb8bb2ccc2/files/d2a27e58-8bf8-4d19-81fe-ab8374d1ac5a.jpg',
    title: 'Промышленная мощь',
    desc: 'Балаковская АЭС и ГЭС — гордость города',
  },
  {
    url: 'https://cdn.poehali.dev/projects/cd43ea5d-c78d-4a20-8356-eccb8bb2ccc2/files/533fcf90-1686-4b79-8258-eb1ad30c3978.jpg',
    title: 'Городская жизнь',
    desc: 'Современный центр и набережная',
  },
];

const ATTRACTIONS = [
  {
    name: 'Краеведческий музей',
    address: 'ул. Ленина, 22',
    hours: 'Вт–Вс: 10:00–18:00',
    price: 'Взрослые — 200 ₽, Дети — 80 ₽',
    phone: '+7 (8453) 4-22-55',
    icon: 'Building2',
    color: '#F2520A',
  },
  {
    name: 'Церковь Троицы Живоначальной',
    address: 'ул. Коммунистическая, 1',
    hours: 'Ежедневно: 08:00–19:00',
    price: 'Вход свободный',
    phone: '+7 (8453) 4-11-33',
    icon: 'Church',
    color: '#0E95B4',
  },
  {
    name: 'Парк культуры и отдыха',
    address: 'пр. Героев, 10',
    hours: 'Ежедневно: 09:00–22:00',
    price: 'Вход свободный',
    phone: '+7 (8453) 4-55-00',
    icon: 'Trees',
    color: '#22c55e',
  },
  {
    name: 'Набережная Волги',
    address: 'Набережная ул.',
    hours: 'Круглосуточно',
    price: 'Вход свободный',
    phone: '',
    icon: 'Waves',
    color: '#0E95B4',
  },
  {
    name: 'Дом-музей В.И. Чапаева',
    address: 'ул. Чапаева, 10',
    hours: 'Вт–Вс: 10:00–17:00',
    price: 'Взрослые — 150 ₽, Дети — 50 ₽',
    phone: '+7 (8453) 4-33-22',
    icon: 'Landmark',
    color: '#F5C518',
  },
  {
    name: 'Балаковская АЭС (экскурсии)',
    address: 'Промышленная зона',
    hours: 'По записи',
    price: 'Бесплатно (по заявке)',
    phone: '+7 (8453) 9-40-00',
    icon: 'Zap',
    color: '#F2520A',
  },
];

const HISTORY_FACTS = [
  {
    year: '1762',
    title: 'Основание',
    text: 'Балаково основано как слобода старообрядцев на берегу Волги. Первые поселенцы занимались рыболовством и торговлей зерном.',
  },
  {
    year: '1850-е',
    title: 'Торговый расцвет',
    text: 'Слобода становится крупным торговым центром Поволжья. Здесь строятся амбары, пристани, особняки богатых купцов.',
  },
  {
    year: '1911',
    title: 'Статус города',
    text: 'Балаково получает статус города. Архитектор Фёдор Шехтель возводит здесь один из своих шедевров — церковь Троицы.',
  },
  {
    year: '1956',
    title: 'Строительство ГЭС',
    text: 'Начало строительства Саратовской ГЭС. Город переживает промышленный бум, население стремительно растёт.',
  },
  {
    year: '1985',
    title: 'Запуск АЭС',
    text: 'Балаковская атомная электростанция — одна из крупнейших в России. Около 15% электроэнергии европейской части страны.',
  },
  {
    year: 'Сегодня',
    title: 'Современный Балаково',
    text: 'Население более 190 тысяч человек. Балаково — важнейший промышленный и культурный центр Саратовской области.',
  },
];

type Section = 'home' | 'gallery' | 'history';

const Index = () => {
  const [activeSection, setActiveSection] = useState<Section>('home');
  const [selectedPhoto, setSelectedPhoto] = useState<null | typeof GALLERY_IMGS[0]>(null);
  const [activeAttraction, setActiveAttraction] = useState<null | typeof ATTRACTIONS[0]>(null);

  const scrollTo = (id: Section) => {
    setActiveSection(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen" style={{ background: 'var(--clr-light)', fontFamily: 'Golos Text, sans-serif' }}>

      {/* ─── NAVBAR ─── */}
      <nav style={{ background: 'var(--clr-dark)' }} className="sticky top-0 z-50 shadow-xl">
        <div className="max-w-6xl mx-auto px-4 py-0 flex items-center justify-between">
          <button onClick={() => scrollTo('home')} className="flex items-center gap-2 py-4">
            <span className="text-2xl font-bold" style={{ color: 'var(--clr-orange)', fontFamily: 'Oswald, sans-serif' }}>БАЛ</span>
            <span className="text-2xl font-bold text-white" style={{ fontFamily: 'Oswald, sans-serif' }}>АКОВО</span>
          </button>
          <div className="flex items-center gap-6">
            {[
              { id: 'home' as Section, label: 'Главная', icon: 'Home' },
              { id: 'gallery' as Section, label: 'Галерея', icon: 'Images' },
              { id: 'history' as Section, label: 'История', icon: 'BookOpen' },
            ].map(({ id, label, icon }) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className={`nav-link flex items-center gap-1.5 text-sm font-medium py-4 transition-colors ${activeSection === id ? 'text-white active' : 'text-gray-400 hover:text-white'}`}
              >
                <Icon name={icon} size={15} />
                <span className="hidden sm:inline">{label}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* ─── HOME ─── */}
      {activeSection === 'home' && (
        <div className="animate-fade-in">
          {/* Hero */}
          <section className="relative overflow-hidden" style={{ minHeight: '82vh' }}>
            <img src={HERO_IMG} alt="Балаково" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(17,24,39,0.82) 0%, rgba(17,24,39,0.45) 60%, transparent 100%)' }} />
            <div className="relative z-10 max-w-6xl mx-auto px-4 flex flex-col justify-center" style={{ minHeight: '82vh', paddingBottom: '120px' }}>
              <div className="animate-fade-in-up">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium mb-6" style={{ background: 'rgba(242,82,10,0.2)', border: '1px solid rgba(242,82,10,0.5)', color: '#F5C518' }}>
                  <Icon name="MapPin" size={12} />
                  Саратовская область, Россия
                </div>
                <h1 className="font-bold text-white leading-tight mb-4" style={{ fontSize: 'clamp(3rem, 8vw, 7rem)', fontFamily: 'Oswald, sans-serif' }}>
                  ЖИВОЙ<br /><span style={{ color: 'var(--clr-orange)' }}>БАЛАКОВО</span>
                </h1>
                <p className="text-gray-300 text-lg max-w-xl mb-8" style={{ animationDelay: '0.2s' }}>
                  Город энергии, истории и Волжских просторов. Откройте для себя жемчужину Саратовской области.
                </p>
                <div className="flex flex-wrap gap-3">
                  <button onClick={() => scrollTo('gallery')} className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white transition-all hover:scale-105" style={{ background: 'var(--clr-orange)' }}>
                    <Icon name="Images" size={16} />
                    Галерея
                  </button>
                  <button onClick={() => scrollTo('history')} className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all hover:scale-105" style={{ background: 'rgba(255,255,255,0.1)', color: 'white', border: '1px solid rgba(255,255,255,0.3)', backdropFilter: 'blur(10px)' }}>
                    <Icon name="BookOpen" size={16} />
                    История
                  </button>
                </div>
              </div>
            </div>
            {/* Stat bar */}
            <div className="absolute bottom-0 left-0 right-0 z-10">
              <div className="max-w-6xl mx-auto px-4">
                <div className="grid grid-cols-3 gap-px rounded-t-2xl overflow-hidden" style={{ background: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.15)', borderBottom: 'none' }}>
                  {[
                    { value: '190 тыс.', label: 'Жителей' },
                    { value: '1762', label: 'Год основания' },
                    { value: '1 АЭС', label: 'Крупнейшая в РФ' },
                  ].map((s, i) => (
                    <div key={i} className="text-center py-4 px-2">
                      <div className="font-bold text-xl" style={{ color: 'var(--clr-yellow)', fontFamily: 'Oswald, sans-serif' }}>{s.value}</div>
                      <div className="text-gray-300 text-xs mt-0.5">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Достопримечательности */}
          <section className="py-20 max-w-6xl mx-auto px-4">
            <div className="mb-12">
              <div className="section-divider w-16 mb-6" />
              <h2 className="font-bold text-4xl" style={{ color: 'var(--clr-dark)', fontFamily: 'Oswald, sans-serif' }}>ДОСТОПРИМЕЧАТЕЛЬНОСТИ</h2>
              <p className="text-gray-500 mt-2">Нажмите на карточку, чтобы узнать подробности</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {ATTRACTIONS.map((a, i) => (
                <button
                  key={i}
                  onClick={() => setActiveAttraction(activeAttraction?.name === a.name ? null : a)}
                  className="card-hover text-left rounded-2xl p-6 transition-all"
                  style={{
                    background: 'white',
                    border: '1px solid #e5e7eb',
                    ...(activeAttraction?.name === a.name ? { outline: `2px solid ${a.color}`, outlineOffset: '0px' } : {}),
                  }}
                >
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: `${a.color}20` }}>
                    <Icon name={a.icon} size={20} style={{ color: a.color }} />
                  </div>
                  <h3 className="font-semibold text-lg mb-2" style={{ color: 'var(--clr-dark)', fontFamily: 'Oswald, sans-serif' }}>{a.name}</h3>
                  <p className="text-gray-500 text-sm flex items-center gap-1.5">
                    <Icon name="MapPin" size={13} />
                    {a.address}
                  </p>
                  {activeAttraction?.name === a.name && (
                    <div className="mt-4 pt-4 border-t border-gray-100 space-y-2 animate-fade-in">
                      <div className="flex items-start gap-2 text-sm">
                        <Icon name="Clock" size={14} className="mt-0.5 shrink-0" style={{ color: a.color }} />
                        <span className="text-gray-600">{a.hours}</span>
                      </div>
                      <div className="flex items-start gap-2 text-sm">
                        <Icon name="Ticket" size={14} className="mt-0.5 shrink-0" style={{ color: a.color }} />
                        <span className="text-gray-600">{a.price}</span>
                      </div>
                      {a.phone && (
                        <div className="flex items-center gap-2 text-sm">
                          <Icon name="Phone" size={14} className="shrink-0" style={{ color: a.color }} />
                          <span className="font-medium" style={{ color: a.color }}>{a.phone}</span>
                        </div>
                      )}
                    </div>
                  )}
                </button>
              ))}
            </div>
          </section>

          {/* Карта */}
          <section className="py-16 px-4" style={{ background: 'var(--clr-dark)' }}>
            <div className="max-w-6xl mx-auto">
              <div className="mb-8">
                <div className="section-divider w-16 mb-6" />
                <h2 className="font-bold text-4xl text-white" style={{ fontFamily: 'Oswald, sans-serif' }}>ИНТЕРАКТИВНАЯ КАРТА</h2>
                <p className="text-gray-400 mt-2">Три исторических объекта в самом сердце Балаково</p>
              </div>
              <div className="rounded-2xl overflow-hidden" style={{ height: 460, border: '1px solid rgba(255,255,255,0.1)' }}>
                <iframe
                  src="https://yandex.ru/map-widget/v1/?ll=47.7955%2C52.0355&spn=0.025%2C0.015&l=map&pt=47.7942%2C52.0348%2Cpmorm1~47.7968%2C52.0361%2Cpmorm2~47.7951%2C52.0342%2Cpmorm3"
                  width="100%"
                  height="100%"
                  style={{ border: 'none' }}
                  title="Карта Балаково"
                  allowFullScreen
                />
              </div>

              {/* Описания объектов */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                {[
                  {
                    num: '1',
                    color: '#F2520A',
                    name: 'Усадьба Мальцева',
                    address: 'ул. Чапаева, 67',
                    desc: 'Купеческая усадьба XIX века — один из красивейших образцов эклектики в Поволжье. Принадлежала роду богатых торговцев хлебом.',
                    icon: 'Home',
                  },
                  {
                    num: '2',
                    color: '#0E95B4',
                    name: 'Историческая пожарная часть',
                    address: 'ул. Коммунистическая, 15',
                    desc: 'Пожарное депо начала XX века с сохранившейся каланчой. Памятник архитектуры регионального значения, символ дореволюционного Балаково.',
                    icon: 'Flame',
                  },
                  {
                    num: '3',
                    color: '#F5C518',
                    name: 'Церковь Троицы Живоначальной',
                    address: 'ул. Коммунистическая, 1',
                    desc: 'Шедевр архитектора Фёдора Шехтеля (1909–1913). Редкий образец модерна в православном храмостроении, охраняется государством.',
                    icon: 'Church',
                  },
                ].map((obj) => (
                  <div key={obj.num} className="rounded-xl p-5 flex gap-4" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}>
                    <div className="shrink-0 w-9 h-9 rounded-full flex items-center justify-center font-bold text-white text-sm" style={{ background: obj.color, fontFamily: 'Oswald, sans-serif' }}>
                      {obj.num}
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-0.5" style={{ fontFamily: 'Oswald, sans-serif', fontSize: '1rem' }}>{obj.name}</h4>
                      <p className="text-xs mb-2 flex items-center gap-1" style={{ color: obj.color }}>
                        <Icon name="MapPin" size={11} />
                        {obj.address}
                      </p>
                      <p className="text-gray-400 text-sm leading-relaxed">{obj.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Контакты */}
          <section className="py-20 max-w-6xl mx-auto px-4">
            <div className="mb-10">
              <div className="section-divider w-16 mb-6" />
              <h2 className="font-bold text-4xl" style={{ color: 'var(--clr-dark)', fontFamily: 'Oswald, sans-serif' }}>КОНТАКТЫ</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: 'MapPin', label: 'Адрес', value: 'г. Балаково, Саратовская область', color: '#F2520A' },
                { icon: 'Phone', label: 'Горячая линия', value: '+7 (8453) 4-00-00', color: '#0E95B4' },
                { icon: 'Mail', label: 'Email', value: 'info@balakovo-city.ru', color: '#F5C518' },
              ].map((c, i) => (
                <div key={i} className="flex items-start gap-4 p-6 rounded-2xl" style={{ background: 'white', border: '1px solid #e5e7eb' }}>
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0" style={{ background: `${c.color}15` }}>
                    <Icon name={c.icon} size={20} style={{ color: c.color }} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs mb-0.5">{c.label}</p>
                    <p className="font-semibold text-gray-800">{c.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      )}

      {/* ─── GALLERY ─── */}
      {activeSection === 'gallery' && (
        <div className="animate-fade-in">
          <section className="py-16 max-w-6xl mx-auto px-4">
            <div className="mb-12">
              <div className="section-divider w-16 mb-6" />
              <h2 className="font-bold text-5xl" style={{ color: 'var(--clr-dark)', fontFamily: 'Oswald, sans-serif' }}>ГАЛЕРЕЯ</h2>
              <p className="text-gray-500 mt-2 text-lg">Балаково в объективе</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {GALLERY_IMGS.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedPhoto(img)}
                  className="group relative rounded-2xl overflow-hidden card-hover text-left"
                  style={{ aspectRatio: '4/3' }}
                >
                  <img src={img.url} alt={img.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%)' }} />
                  <div className="absolute bottom-0 left-0 right-0 p-5 text-white translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    <h3 className="font-semibold text-lg" style={{ fontFamily: 'Oswald, sans-serif' }}>{img.title}</h3>
                    <p className="text-gray-300 text-sm">{img.desc}</p>
                  </div>
                  <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Icon name="ZoomIn" size={14} className="text-white" />
                  </div>
                </button>
              ))}
            </div>
          </section>

          {selectedPhoto && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in" style={{ background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(8px)' }} onClick={() => setSelectedPhoto(null)}>
              <div className="relative max-w-4xl w-full rounded-2xl overflow-hidden" onClick={e => e.stopPropagation()}>
                <img src={selectedPhoto.url} alt={selectedPhoto.title} className="w-full object-cover rounded-2xl" />
                <div className="absolute bottom-0 left-0 right-0 p-6" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 100%)' }}>
                  <h3 className="font-bold text-2xl text-white" style={{ fontFamily: 'Oswald, sans-serif' }}>{selectedPhoto.title}</h3>
                  <p className="text-gray-300">{selectedPhoto.desc}</p>
                </div>
                <button onClick={() => setSelectedPhoto(null)} className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center text-white" style={{ background: 'rgba(0,0,0,0.5)' }}>
                  <Icon name="X" size={18} />
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* ─── HISTORY ─── */}
      {activeSection === 'history' && (
        <div className="animate-fade-in">
          <section className="py-16 max-w-4xl mx-auto px-4">
            <div className="mb-14">
              <div className="section-divider w-16 mb-6" />
              <h2 className="font-bold text-5xl" style={{ color: 'var(--clr-dark)', fontFamily: 'Oswald, sans-serif' }}>ИСТОРИЯ</h2>
              <p className="text-gray-500 mt-2 text-lg">Более 260 лет на берегах Волги</p>
            </div>
            <div className="relative">
              <div className="absolute left-7 top-0 bottom-0 w-0.5" style={{ background: 'linear-gradient(to bottom, var(--clr-orange), var(--clr-teal), var(--clr-yellow))' }} />
              <div className="space-y-10">
                {HISTORY_FACTS.map((fact, i) => (
                  <div key={i} className="flex gap-6 animate-fade-in-up" style={{ animationDelay: `${i * 0.1}s` }}>
                    <div className="shrink-0 flex flex-col items-center">
                      <div className="w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-xs z-10 shadow-lg" style={{ background: i % 3 === 0 ? 'var(--clr-orange)' : i % 3 === 1 ? 'var(--clr-teal)' : 'var(--clr-dark)', fontFamily: 'Oswald, sans-serif', fontSize: '0.65rem' }}>
                        {fact.year}
                      </div>
                    </div>
                    <div className="flex-1 pb-2 pt-1">
                      <span className="inline-block px-3 py-0.5 rounded-full text-xs font-semibold mb-2 text-white" style={{ background: i % 3 === 0 ? 'var(--clr-orange)' : i % 3 === 1 ? 'var(--clr-teal)' : 'var(--clr-dark)' }}>
                        {fact.year}
                      </span>
                      <h3 className="font-bold text-2xl mb-2" style={{ color: 'var(--clr-dark)', fontFamily: 'Oswald, sans-serif' }}>{fact.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{fact.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Цитата */}
          <section className="py-16 px-4" style={{ background: 'var(--clr-dark)' }}>
            <div className="max-w-3xl mx-auto text-center">
              <Icon name="Quote" size={40} style={{ color: 'var(--clr-orange)', margin: '0 auto 1.5rem' }} />
              <p className="text-2xl font-medium text-white leading-relaxed mb-6" style={{ fontFamily: 'Oswald, sans-serif' }}>
                «Балаково — это не просто город. Это сердце Поволжья, бьющееся в ритме Волги.»
              </p>
              <p className="text-gray-400 text-sm">— из краеведческой летописи Балакова</p>
            </div>
          </section>
        </div>
      )}

      {/* ─── FOOTER ─── */}
      <footer style={{ background: 'var(--clr-dark)', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <span className="font-bold text-xl" style={{ color: 'var(--clr-orange)', fontFamily: 'Oswald, sans-serif' }}>БАЛ</span>
            <span className="font-bold text-xl text-white" style={{ fontFamily: 'Oswald, sans-serif' }}>АКОВО</span>
            <p className="text-gray-500 text-xs mt-1">Туристический портал города</p>
          </div>
          <div className="flex gap-6 text-sm text-gray-400">
            {[
              { id: 'home' as Section, label: 'Главная' },
              { id: 'gallery' as Section, label: 'Галерея' },
              { id: 'history' as Section, label: 'История' },
            ].map(({ id, label }) => (
              <button key={id} onClick={() => scrollTo(id)} className="hover:text-white transition-colors">
                {label}
              </button>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;