import { useState } from 'react';
import { Link, NavLink, Route, Routes } from 'react-router-dom';

const navigation = [
  ['/', 'Главная'],
  ['/services', 'Услуги'],
  ['/devices', 'Аппараты'],
  ['/about', 'О клинике'],
  ['/team', 'Наша команда'],
  ['/contacts', 'Контакты'],
];

const assetPath = (fileName) => `${import.meta.env.BASE_URL}images/${fileName}`;
const whatsappLink = 'https://wa.me/77014845499';

function Brand() {
  return <Link className="brand" to="/" aria-label="Symmetria — на главную"><img className="brand__logo" src={assetPath('symmetria-logo.svg')} alt="Symmetria Clinic" /></Link>;
}

function BookLink({ children, className }) {
  return <a className={className} href={whatsappLink} target="_blank" rel="noreferrer">{children}</a>;
}

function ArrowIcon() {
  return (
    <svg className="arrow-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 20 20 4M12 4h8v8" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return <>
    <div className="topline"><span>Астана · проспект Мангилик Ел, 38</span><a href="tel:+77014845499">+7 701 484 54 99</a></div>
    <header className="header">
      <Brand />
      <button className={`menu-btn ${isOpen ? 'is-open' : ''}`} aria-label={isOpen ? 'Закрыть меню' : 'Открыть меню'} aria-expanded={isOpen} onClick={() => setIsOpen(!isOpen)}><span /></button>
      <nav className={`nav ${isOpen ? 'open' : ''}`}>
        {navigation.map(([to, label]) => <NavLink key={to} to={to} end={to === '/'} onClick={() => setIsOpen(false)}>{label}</NavLink>)}
      </nav>
      <BookLink className="button button--dark header-book">Записаться</BookLink>
    </header>
  </>;
}

function Footer() {
  return <footer><Brand /><p>© 2026 Symmetria. Астана</p><div><a href="https://www.instagram.com/symmetria_clinic" target="_blank" rel="noreferrer">Instagram</a><Link to="/contacts">Контакты</Link></div></footer>;
}

function Booking() {
  return <section className="booking" id="booking">
    <div><p className="eyebrow">Ваш первый шаг</p><h2>Время для<br /><em>себя.</em></h2><p>Оставьте контакты — администратор подберёт удобное время и ответит на вопросы.</p></div>
    <form onSubmit={(event) => { event.preventDefault(); window.open(whatsappLink, '_blank', 'noopener,noreferrer'); }}>
      <label>Ваше имя<input required placeholder="Как к вам обращаться?" /></label>
      <label>Телефон<input required type="tel" placeholder="+7 (___) ___ __ __" /></label>
      <button className="button" type="submit">Отправить заявку <ArrowIcon /></button>
      <small>Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности.</small>
    </form>
  </section>;
}

const services = [
  ['01', 'Эстетика лица', 'Инъекционные и аппаратные методики'],
  ['02', 'Здоровье кожи', 'Уход, сияние и обновление'],
  ['03', 'Контуры тела', 'Лёгкость и уверенность в себе'],
];

const deviceCatalog = [
  {
    number: '01',
    name: 'SmartXide Punto',
    brand: 'DEKA · CO₂-лазер',
    image: 'devices/deka-smartxide-punto.png',
    shortDescription: 'CO₂-лазерная платформа для деликатных протоколов обновления рельефа и качества кожи.',
    technology: 'RF CO₂-лазер с фракционной технологией: врач настраивает параметры под зону, задачу и индивидуальные особенности кожи.',
    directions: ['Выравнивание текстуры и рельефа кожи', 'Работа с постакне, рубцами и растяжками', 'Протоколы обновления кожи лица и тела'],
  },
  {
    number: '02',
    name: 'Dermadrop',
    brand: 'TDA-технология',
    image: 'devices/dermadrop.png',
    shortDescription: 'Безыгольная трансдермальная доставка активных компонентов для персонализированного ухода.',
    technology: 'Технология TDA помогает доставлять активные ингредиенты без инъекций и без прямого контакта с кожей.',
    directions: ['Интенсивное увлажнение и восстановление барьера', 'Программы для сияния, ровного тона и качества кожи', 'Поддерживающие протоколы для кожи головы'],
  },
  {
    number: '03',
    name: 'Heleo4',
    brand: 'LED-фототерапия',
    image: 'devices/heleo4.png',
    shortDescription: 'Световая технология для деликатных поддерживающих протоколов восстановления и обновления кожи.',
    technology: 'LED-свет различной длины волны используется в составе врачебных программ и подбирается после оценки состояния кожи.',
    directions: ['Поддержка восстановления кожи', 'Программы для ровного тона и здорового сияния', 'Комфортное дополнение к комплексному уходу'],
  },
  {
    number: '04',
    name: 'Spectra XT',
    brand: 'Lutronic · лазерная платформа',
    image: 'devices/spectra-xt.png',
    shortDescription: 'Лазерная платформа для протоколов ровного тона, сияния и обновления кожи.',
    technology: 'Многофункциональная лазерная система позволяет врачу подбирать режим и интенсивность процедуры для конкретной эстетической задачи.',
    directions: ['Карбоновый пилинг и лазерный тонинг', 'Работа с неровным тоном и проявлениями пигментации', 'Программы для улучшения общего вида кожи'],
  },
  {
    number: '05',
    name: 'Ultraformer MPT',
    brand: 'HIFU-лифтинг',
    image: 'devices/ultraformer-mpt.png',
    shortDescription: 'Аппарат для неинвазивных программ лифтинга и улучшения плотности кожи лица и тела.',
    technology: 'Сфокусированный ультразвук работает на заданной глубине тканей; зоны и параметры врач определяет на консультации.',
    directions: ['Лифтинг овала лица и подчелюстной области', 'Поддержка плотности и упругости кожи', 'Локальные протоколы для тела'],
  },
  {
    number: '06',
    name: 'Volnewmer',
    brand: 'CLASSYS · монополярный RF',
    image: 'devices/volnewmer.png',
    shortDescription: 'Радиочастотная технология для мягких программ укрепления и улучшения качества кожи.',
    technology: 'Монополярная радиочастотная энергия прогревает ткани контролируемым способом; процедура проводится с индивидуальными настройками.',
    directions: ['Повышение визуальной упругости кожи', 'Программы для лица, шеи и области вокруг глаз', 'Работа с отдельными зонами тела'],
  },
];

function DevicesCarousel() {
  const [currentDevice, setCurrentDevice] = useState(0);
  const device = deviceCatalog[currentDevice];
  const previousDevice = () => setCurrentDevice((index) => (index - 1 + deviceCatalog.length) % deviceCatalog.length);
  const nextDevice = () => setCurrentDevice((index) => (index + 1) % deviceCatalog.length);

  return (
    <section className="devices-preview">
      <div className="devices-preview__heading">
        <div><p className="eyebrow">Аппаратная косметология</p><h2>Технологии для<br /><em>вашей гармонии.</em></h2></div>
        <Link className="text-link" to="/devices">Все аппараты <b>→</b></Link>
      </div>
      <article className="device-carousel">
        <div className="device-carousel__image"><img src={assetPath(device.image)} alt={`Аппарат ${device.name}`} /></div>
        <div className="device-carousel__content" key={device.name}>
          <span className="device-carousel__count">{device.number} / {String(deviceCatalog.length).padStart(2, '0')}</span>
          <p className="eyebrow">{device.brand}</p>
          <h3>{device.name}</h3>
          <p>{device.shortDescription}</p>
          <ul>{device.directions.map((direction) => <li key={direction}>{direction}</li>)}</ul>
          <div className="device-carousel__bottom">
            <Link className="text-link" to="/devices">Подробнее <b>→</b></Link>
            <div className="device-carousel__controls">
              <button type="button" onClick={previousDevice} aria-label="Предыдущий аппарат">←</button>
              <button type="button" onClick={nextDevice} aria-label="Следующий аппарат">→</button>
            </div>
          </div>
        </div>
      </article>
      <div className="device-carousel__dots" aria-label="Выбрать аппарат">
        {deviceCatalog.map((item, index) => <button className={index === currentDevice ? 'is-active' : ''} type="button" key={item.name} onClick={() => setCurrentDevice(index)} aria-label={item.name}>{item.number}</button>)}
      </div>
    </section>
  );
}

const clinicGalleryPhotos = [
  ['clinic-entrance.jpg', 'Входная зона клиники Symmetria'],
  ['clinic-staircase.jpg', 'Лестница и световая инсталляция в клинике'],
  ['clinic-lounge.jpg', 'Зона ожидания Symmetria'],
  ['clinic-products.jpg', 'Профессиональная косметика в клинике'],
  ['clinic-volnewmer.jpg', 'Аппарат Volnewmer'],
  ['clinic-consultation.jpg', 'Консультация специалиста'],
  ['clinic-treatment-room-wide.jpg', 'Кабинет косметологии'],
  ['clinic-treatment-room-close.jpg', 'Оснащение кабинета косметологии'],
  ['clinic-blanket.jpg', 'Деталь заботы в кабинете'],
  ['clinic-detail.jpg', 'Деталь интерьера Symmetria'],
  ['clinic-room.jpg', 'Кабинет косметологии Symmetria'],
];

function ClinicGallery() {
  const [currentPhoto, setCurrentPhoto] = useState(0);
  const [fileName, alt] = clinicGalleryPhotos[currentPhoto];
  const previousPhoto = () => setCurrentPhoto((index) => (index - 1 + clinicGalleryPhotos.length) % clinicGalleryPhotos.length);
  const nextPhoto = () => setCurrentPhoto((index) => (index + 1) % clinicGalleryPhotos.length);

  return (
    <section className="clinic-gallery">
      <div className="clinic-gallery__heading">
        <div><p className="eyebrow">Пространство Symmetria</p><h2>Красота в<br /><em>каждой детали.</em></h2></div>
        <span className="clinic-gallery__count">{String(currentPhoto + 1).padStart(2, '0')} / {String(clinicGalleryPhotos.length).padStart(2, '0')}</span>
      </div>
      <div className="clinic-carousel">
        <img className="clinic-carousel__image" src={assetPath(fileName)} alt={alt} />
        <div className="clinic-carousel__controls">
          <button type="button" onClick={previousPhoto} aria-label="Предыдущее фото">←</button>
          <button type="button" onClick={nextPhoto} aria-label="Следующее фото">→</button>
        </div>
      </div>
      <div className="clinic-carousel__thumbnails" aria-label="Выбрать фотографию">
        {clinicGalleryPhotos.map(([thumbnail, thumbnailAlt], index) => (
          <button className={index === currentPhoto ? 'is-active' : ''} type="button" key={thumbnail} onClick={() => setCurrentPhoto(index)} aria-label={thumbnailAlt}>
            <img src={assetPath(thumbnail)} alt="" />
          </button>
        ))}
      </div>
    </section>
  );
}

function Home() {
  return <main>
    <section className="hero">
      <div className="hero__copy">
        <p className="eyebrow">Эстетическая косметология · Астана</p>
        <h1>Естественная<br /><em>красота</em> — это<br />искусство баланса.</h1>
        <p className="intro">Деликатно подчёркиваем вашу индивидуальность, опираясь на доказательную косметологию и безупречный вкус.</p>
        <BookLink className="button">Выбрать процедуру <ArrowIcon /></BookLink>
      </div>
      <div className="hero__art">
        <img className="hero__photo" src={assetPath('clinic-entrance.jpg')} alt="Входная зона клиники Symmetria" />
        <div className="hero__caption">Премиальная<br />забота о себе</div>
      </div>
      <div className="hero__aside"><span>01</span><div /><span>04</span></div>
    </section>
    <section className="statement"><p className="eyebrow">Наш подход</p><h2>Красота, в которой<br />вы <em>узнаёте себя.</em></h2><p>Мы не меняем лица — мы раскрываем их гармонию. Каждая программа создаётся врачом после внимательной диагностики и разговора о ваших желаниях.</p><Link className="text-link" to="/about">О философии Symmetria <b>→</b></Link></section>
    <section className="services-preview"><div className="section-heading"><div><p className="eyebrow">Направления</p><h2>Путь к вашей<br /><em>гармонии</em></h2></div><Link className="text-link" to="/services">Все услуги <b>→</b></Link></div><div className="service-grid">{services.map(([number, title, description], index) => <Link className={`service-card service-card--${index + 1}`} to="/services" key={number}><span>{number}</span><div><h3>{title}</h3><p>{description}</p><ArrowIcon /></div></Link>)}</div></section>
    <DevicesCarousel />
    <section className="numbers"><div><strong>8</strong><span>лет бережной<br />практики</span></div><div><strong>4 000<sup>+</sup></strong><span>счастливых<br />пациентов</span></div><div><strong>15</strong><span>экспертных<br />врачей</span></div><div><strong>4.9</strong><span>рейтинг<br />пациентов</span></div></section>
    <section className="ritual"><div className="ritual__visual"><div className="arch" /><div className="sun" /><p>symmetria<br />is a feeling</p></div><div className="ritual__copy"><p className="eyebrow">Первый визит</p><h2>Ваш личный<br /><em>ритуал заботы</em></h2><ol>{[['01', 'Знакомство', 'Врач внимательно выслушает вас и ответит на все вопросы.'], ['02', 'Диагностика', 'Проведём анализ состояния кожи и черт лица.'], ['03', 'Персональный план', 'Составим комфортную программу с ясными этапами.']].map(([number, title, description]) => <li key={number}><span>{number}</span><div><b>{title}</b><p>{description}</p></div></li>)}</ol><BookLink className="button">Записаться на консультацию</BookLink></div></section>
    <section className="quote"><span>“</span><blockquote>Забота о себе начинается<br />с момента, когда вы выбираете<br /><em>слышать себя.</em></blockquote><p>— команда Symmetria</p></section>
    <Booking />
  </main>;
}

const serviceDetails = [
  { number: '01', title: 'Консультации врачей', price: 'от 8 000 ₸', description: 'Начинаем с диагностики и понятного плана лечения или эстетической коррекции.', items: ['Консультация косметологическая', 'Консультация дерматологическая', 'Обследование на аппарате SkinScan + консультация', 'Лечение системными ретиноидами — программа из 10 консультаций', 'Онлайн-консультация, 30 минут'] },
  { number: '02', title: 'Очищение, пилинги и уходы', price: 'от 8 000 ₸', description: 'Программы для акне, постакне, пигментации, сияния и обновления кожи.', items: ['pHformula AC-пилинг — акне и постакне', 'pHformula AC-пилинг спины', 'pHformula CR-пилинг — розацеа и купероз', 'PRX-T33: лицо', 'PRX-T33: лицо и шея', 'Biorepeel: лицо', 'Biorepeel: лицо и шея', 'MELINE — лечение пигментации', 'MELINE — курс из 2 процедур', 'Антикомедогенное очищение', 'Поросуживающее очищение', 'Антивозрастное очищение', 'Лечебное очищение — акне и постакне', 'Очищение для детей и подростков 12+', 'Детокс-очищение', 'AquaPure — короткая программа', 'AquaPure — полная программа', 'Extra mini очищение', 'Очищение спины с пилингом', 'Очищение груди и декольте с пилингом', 'Окситерапия HydroPeptide', 'Скульптурный массаж лица, 60 минут', 'Скульптурный массаж лица, 90 минут', 'Тканевая маска Rejuran', 'Альгинатная маска'] },
  { number: '03', title: 'Инъекционная косметология', price: 'от 20 000 ₸', description: 'Биоревитализация, коллагеностимуляция, мезотерапия и плазмотерапия для качества кожи и естественного омоложения.', items: ['NCTF 135 HA', 'Rejuran S', 'Rejuran Eye', 'Rejuran Healer', 'Rejuran HB', 'Meso-Wharton P199', 'Meso-Xanthin F199', 'Meso-Eye C71', 'Redensity 1', 'Profhilo', 'Juvederm Volite', 'Bioregen', 'Bio-Expander', 'Belotero Revive', 'PinkLLa', 'Radiesse', 'Juvelook', 'Aesplla', 'Lenisna', 'AestheFill', 'Karisma', 'Collost 7%', 'Collost 15%', 'Collost Micro', 'Мезотерапия осветляющим комплексом', 'Мезотерапия RRS Eyes', 'Плазмотерапия Cortexil PRP', 'Плазмотерапия RegenLab', 'Коллагеназа', 'Кеналог'] },
  { number: '04', title: 'Контурная пластика и ботулинотерапия', price: 'от 1 100 ₸', description: 'Деликатная коррекция объёмов, мимики и отдельных зон лица.', items: ['Juvederm Ultra Smile', 'Juvederm Ultra 3', 'Juvederm Volift', 'Juvederm Volbella', 'Teosyal RHA Kiss', 'Stylage M', 'Удаление филлера — полное', 'Удаление филлера — частичное', 'Dysport', 'Dysport — верхняя треть лица', 'Dysport — лифтинг Нефертити', 'Dysport Full Face', 'Vistabel', 'Vistabel Full Face', 'Xeomin', 'Лечение гипергидроза Botulax', 'Лечение гипергидроза Dysport', 'Сужение лица ботулотоксином', 'Traptox', 'Заполнение колец Венеры Belotero Soft', 'Belotero Balance', 'Juvederm Voluma', 'Art Filler Volume', 'Teosyal Ultra Deep', 'Teosyal Redensity 2'] },
  { number: '05', title: 'Аппаратная косметология', price: 'от 22 000 ₸', description: 'Современные методики лифтинга, улучшения текстуры, плотности и тона кожи.', items: ['Morpheus 8 — лицо', 'Morpheus 8 — лицо, шея и декольте', 'Morpheus 8 — тело', 'Morpheus 8 — локальные зоны', 'Ultraformer MPT SMAS-лифтинг', 'Ultraformer MPT-тонинг с DSB-сывороткой', 'Ultraformer MPT — лицо', 'Ultraformer MPT — лицо и область глаз', 'Ultraformer MPT — средняя треть лица', 'Ultraformer MPT — подчелюстная область', 'Ultraformer MPT — верхнее веко', 'Ultraformer MPT — малярные жировые пакеты', 'Ultraformer MPT — живот и бёдра', 'Ultraformer MPT — колени и руки', 'Lumecca — лицо', 'Lumecca — щёки, нос, шея, декольте, плечи, руки, подбородок или спина', 'Lumecca — лицо и шея', 'Lumecca — нос и щёки', 'Spectra XT — карбоновый пилинг', 'Spectra XT — Soft Peel', 'Spectra XT — лазерный тонинг', 'Spectra XT — Revital-омоложение', 'Spectra XT — Gold Toning', 'Spectra XT — удаление лентиго, веснушек и себорейного кератоза', 'Volnewmer — лицо', 'Volnewmer — подбородок, область глаз или щёки', 'Volnewmer — тело'] },
  { number: '06', title: 'Лазерные методики', price: 'от 5 000 ₸', description: 'Работа с качеством кожи, постакне, пигментацией, новообразованиями и признаками возрастных изменений.', items: ['DEKA CO₂ — интенсивная шлифовка лица', 'DEKA CO₂ — нижнее или верхнее веко', 'DEKA CO₂ — псевдоблефаропластика', 'DEKA CO₂ — шея, лоб, нос, подбородок, декольте или щёки', 'DEKA CO₂ — шея и декольте', 'DEKA CO₂ — область вокруг рта', 'DEKA CO₂ — кисти рук', 'DEKA CO₂ — внутренняя поверхность плеча или бедра', 'DEKA CO₂ — живот, надколенная область или спина', 'DEKA CO₂ — рубцы и растяжки', 'DEKA CO₂ CoolPeel — лицо, шея, плечи или верхняя часть спины', 'DEKA CO₂ — удаление новообразований', 'Mediostar — лазерное омоложение лица, щёк, носа или подбородка', 'Mediostar — лазерное лечение акне'] },
  { number: '07', title: 'Трихология, тело и аппаратные уходы', price: 'от 25 000 ₸', description: 'Программы для кожи головы, силуэта, качества кожи и восстановления барьера.', items: ['DR.CYJ Hair Filler', 'ICOONE — тело, 60 минут', 'ICOONE — лицо, 60 минут', 'ICOONE Extra, 30 минут', 'ICOONE — тело, 75 минут', 'ICOONE — курсы из 5 и 10 процедур', 'Липолитики Estetic Form Lipo Stop', 'Липолитики Meso-Sculpt C71', 'Липолитики BioGel', 'Lipase', 'DermaDrop PRODERM — проблемная кожа', 'DermaDrop MITOCELL — омоложение и лифтинг', 'DermaDrop POLAR — обновление и сияние', 'DermaDrop CANABOOST — клеточный активатор', 'DermaDrop MATCHA — детокс', 'DermaDrop HYAL 10 — глубокое увлажнение', 'DermaDrop SHINE & GLOW — густые волосы', 'DermaDrop DERMA COOL — скорая помощь', 'DermaDrop HYAL DERM — восстановление барьера', 'RF-лифтинг Forma — лицо', 'RF-лифтинг Forma — лицо и шея', 'RF-лифтинг Forma — лицо, шея и декольте'] },
  { number: '08', title: 'Лазерная эпиляция', price: 'от 5 000 ₸', description: 'Лазерная эпиляция Mediostar Next Pro для женских и мужских зон.', items: ['Подмышечные впадины', 'Верхняя губа', 'Межбровье', 'Подбородок', 'Лицо полностью', 'Шея — половина или полностью', 'Нос', 'Бакенбарды', 'Ареолы', 'Межгрудная область', 'Белая линия живота', 'Живот полностью', 'Поясница', 'Спина полностью', 'Плечи', 'Грудь полностью', 'Руки до локтя с кистями', 'Руки полностью с кистями', 'Кисти рук', 'Пальцы ног', 'Ноги полностью', 'Бёдра', 'Голени с коленями, стопами и пальцами', 'Бикини классическое', 'Бикини тотальное', 'Межъягодичная зона', 'Ягодицы — половина или полностью', 'Тотальное бикини с подмышками', 'Тотальное бикини с подмышками и голенями', 'Тотальное бикини с ногами полностью', 'Тотальное бикини с подмышками, ногами и руками', 'Мужские комплексы: грудь, подмышки, руки, ноги, живот, плечи, лицо и спина', 'Триммер — малая или большая зона'] },
];

function ServicesPage() {
  return <main className="inner">
    <section className="page-hero">
      <p className="eyebrow">Прайс Symmetria</p>
      <h1>Забота, подобранная<br /><em>для вас.</em></h1>
      <p>Стоимость зависит от зоны, препарата и индивидуального плана. Уточните точную цену и доступное время записи у администратора.</p>
    </section>
    <section className="service-list" aria-label="Услуги и ориентировочные цены">
      {serviceDetails.map(({ number, title, price, description, items }) => (
        <article key={number}>
          <span>{number}</span>
          <div><h2>{title}</h2><p>{description}</p><strong className="service-list__price">{price}</strong></div>
          <ul>{items.map((item) => <li key={item}>{item}</li>)}</ul>
          <BookLink className="button service-list__button">Уточнить цену</BookLink>
        </article>
      ))}
    </section>
  </main>;
}

function DevicesPage() {
  return <main className="inner devices-page">
    <section className="page-hero devices-page__hero">
      <p className="eyebrow">Аппараты Symmetria</p>
      <h1>Технологии,<br /><em>подобранные</em> врачом.</h1>
      <p>Современное оборудование помогает сделать программы ухода и эстетической коррекции более точными. Методика, зоны и количество процедур всегда определяются на консультации.</p>
    </section>
    <section className="devices-list" aria-label="Аппараты клиники Symmetria">
      {deviceCatalog.map((device) => (
        <article className="device-detail" key={device.name}>
          <div className="device-detail__image"><img src={assetPath(device.image)} alt={`Аппарат ${device.name}`} /><span>{device.number}</span></div>
          <div className="device-detail__content">
            <p className="eyebrow">{device.brand}</p>
            <h2>{device.name}</h2>
            <p className="device-detail__lead">{device.shortDescription}</p>
            <div className="device-detail__technology"><p className="eyebrow">Технология</p><p>{device.technology}</p></div>
            <div className="device-detail__directions"><p className="eyebrow">Основные направления</p><ul>{device.directions.map((direction) => <li key={direction}>{direction}</li>)}</ul></div>
            <p className="device-detail__note">Показания, противопоказания и ожидаемый результат врач оценивает индивидуально на очной консультации.</p>
            <BookLink className="button">Записаться на консультацию</BookLink>
          </div>
        </article>
      ))}
    </section>
  </main>;
}

function AboutPage() {
  return <main className="inner">
    <section className="page-hero about-hero"><p className="eyebrow">О Symmetria</p><h1>Место, где<br /><em>можно быть собой.</em></h1><p>В Symmetria мы соединяем знания врача, тонкое чувство эстетики и уважение к вашей природе.</p></section>
    <section className="values"><p className="eyebrow">Наши ценности</p><div>{[['01', 'Деликатность', 'Мы выбираем решения, которые выглядят естественно и ощущаются комфортно.'], ['02', 'Экспертность', 'В нашей команде — врачи, которые постоянно совершенствуют свою практику.'], ['03', 'Диалог', 'Ваше доверие важнее быстрых результатов. Мы открыто говорим о каждом этапе.']].map(([number, title, text]) => <article key={number}><span>{number}</span><h2>{title}</h2><p>{text}</p></article>)}</div></section>
    <ClinicGallery />
    <section className="doctor"><div className="doctor__portrait"><div /></div><div><p className="eyebrow">Основатель</p><h2>Марат<br /><em>Шарипов</em></h2><p>«Наша цель — создавать пространство, где забота о себе становится естественной частью жизни».</p><p className="doctor__sign">Марат Шарипов<br /><small>предприниматель, основатель</small></p></div></section>
  </main>;
}

const teamMembers = [
  {
    name: 'Екатерина Александровна Рыбовалова',
    shortName: <>Екатерина<br /><em>Александровна<br />Рыбовалова</em></>,
    role: 'Врач-дерматовенеролог, дерматокосметолог (взрослый, детский)',
    image: 'team-ekaterina-rybovalova.jpg',
    specializations: [
      'Лечение акне и постакне',
      'Терапия тяжёлых форм акне системными ретиноидами',
      'Лечение рубцов различного происхождения',
      'Диагностика новообразований кожи',
      'Дерматоскопия',
      'Лечение заболеваний кожи, волос и ногтей',
      'Детская и взрослая дерматология',
      'Эстетическая косметология',
    ],
    education: [
      ['2006 — 2012', 'Лечебное дело', 'Высшее медицинское образование.'],
      ['2012 — 2013', 'Интернатура «Лечебное дело»', 'Присвоена квалификация врача общей практики.'],
      ['2013', 'Дерматовенерология и дерматокосметология', 'Переподготовка по взрослому и детскому направлениям в Медицинском университете Астана, факультет последипломного непрерывного образования.'],
    ],
  },
  {
    name: 'Наталья Олеговна Ким',
    shortName: <>Наталья<br /><em>Олеговна Ким</em></>,
    role: 'Врач-дерматокосметолог · стаж работы 7 лет',
    image: 'team-natalya-kim.jpg',
    specializations: [
      'Лечение акне и розацеа',
      'Назначение системных ретиноидов',
      'Лечение постакне',
      'Аппаратные и инъекционные методики профилактики и лечения возрастных изменений',
    ],
    education: [
      ['2015', 'Общая медицина', 'Медицинский университет Астана, факультет «Общая медицина».'],
      ['2015 — 2017', 'Интернатура по терапии', 'Подготовка по специальности «Терапия».'],
      ['2017 — 2019', 'Дерматовенерология и дерматокосметология', 'Резидентура в Медицинском университете Астана; повышение квалификации по технологиям Ultraformer и Volnewmer, участие в семинарах по лечению акне и розацеа.'],
    ],
  },
  {
    name: 'Анель Жетписбаевна Исжанова',
    shortName: <>Анель<br /><em>Жетписбаевна<br />Исжанова</em></>,
    role: 'Врач-дерматокосметолог · стаж работы 8 лет',
    image: 'team-anel-iszhanova.jpg',
    specializations: [
      'Инъекционные процедуры: ботулинотерапия, биоревитализация, коллагенотерапия и коллагеностимуляция',
      'Аппаратная косметология: Ultraformer, Volnewmer, Morpheus 8, Lumecca, Spectra, CO₂-шлифовка и другие методики',
    ],
    education: [
      ['2006 — 2012', 'Лечебное дело', 'Медицинский университет Астана.'],
      ['2012 — 2013', 'Интернатура «Лечебное дело»', 'Присвоена квалификация врача-терапевта.'],
      ['После 2013', 'Дерматовенерология и дерматокосметология', 'Переподготовка по взрослому и детскому направлениям.'],
    ],
  },
  {
    name: 'Айгерим Уалиханкызы Уалиханова',
    shortName: <>Айгерим<br /><em>Уалиханкызы<br />Уалиханова</em></>,
    role: 'Врач-дерматолог, косметолог, трихолог · стаж 15 лет',
    image: 'team-aigerim-ualikhanova.jpg',
    specializations: [
      'Диагностика и лечение заболеваний кожи',
      'Трихологическая диагностика и лечение выпадения волос',
      'Лечение акне, постакне и гиперпигментации',
      'Инъекционные методики омоложения',
      'Аппаратные методики: Lumecca, Morpheus 8, Ultraformer MPT, Volnewmer, Spectra и DEKA Laser',
      'Anti-age программы и профилактика возрастных изменений',
    ],
    education: [
      ['Высшее образование', 'Лечебное дело', 'Казахский национальный медицинский университет имени Асфендиярова.'],
      ['Последипломное образование', 'Терапия и дерматовенерология', 'Интернатура по терапии и ординатура в РУДН, Москва, по специальности «Дерматовенерология».'],
      ['Профессиональное развитие', 'Косметология и аппаратные технологии', 'Профессиональная переподготовка по косметологии и регулярное повышение квалификации у международных экспертов.'],
    ],
  },
  {
    name: 'Ирина Александровна Парфенова',
    shortName: <>Ирина<br /><em>Александровна<br />Парфенова</em></>,
    role: 'Врач-дерматокосметолог · опыт работы 17 лет',
    image: 'team-irina-parfenova.jpg',
    specializations: [
      'Комплексный уход за кожей и индивидуальные антивозрастные программы Biologique Recherche',
      'Аппаратные методики омоложения: Morpheus 8, Ultraformer и Volnewmer',
      'Инъекционные процедуры: биоревитализация, коллагеностимуляция и мезотерапия',
    ],
    education: [
      ['2012', 'Общая медицина', 'Казахский национальный медицинский университет имени Асфендиярова.'],
      ['Профессиональная переподготовка', 'Дерматокосметология', 'Подготовка по специальности и повышение квалификации в области дерматовенерологии и современной эстетической медицины.'],
      ['Более 14 лет', 'Профессиональный уход за кожей', 'Практика работы с брендом Biologique Recherche и современными аппаратными методиками омоложения.'],
    ],
  },
  {
    name: 'Анастасия Александровна Свиридова',
    shortName: <>Анастасия<br /><em>Александровна<br />Свиридова</em></>,
    role: 'Врач-косметолог · опыт работы более 13 лет · ведущий доктор клиники',
    image: 'team-anastasia-sviridova.jpg',
    specializations: [
      'Комплексное омоложение лица без хирургического вмешательства',
      'Аппаратные технологии омоложения: Ultraformer MPT, RF-технологии и лазерные методики',
      'Инъекционная косметология и сочетанные anti-age протоколы',
      'Контурная пластика лица с сохранением естественной анатомии',
      'Full Face ботулинотерапия',
      'Биоревитализация, коллагеностимуляция и регенеративная медицина',
      'Персонализированные программы профилактики старения и авторские протоколы Symmetria',
      'Экспертиза в области естественного омоложения Natural Beauty Concept',
    ],
    education: [
      ['Высшее образование', 'Медицинский университет Астана', 'Базовое медицинское образование.'],
      ['Дополнительное обучение', 'Anti-Age Medicine', 'Первый Московский государственный медицинский университет имени И. М. Сеченова.'],
      ['Постоянное развитие', 'Инъекционные и аппаратные методики', 'Многочисленные специализации в Москве по анатомии лица, современным протоколам омоложения, инъекционным и аппаратным технологиям.'],
    ],
  },
  {
    name: 'Сауле Бейсенгазиновна Асенова',
    shortName: <>Сауле<br /><em>Бейсенгазиновна<br />Асенова</em></>,
    role: 'Врач-дерматовенеролог, врач-дерматокосметолог',
    image: 'team-saule-asenova.jpg',
    specializations: [
      'Лечение акне, постакне и заболеваний кожи',
      'Терапия тяжёлых форм акне системными ретиноидами',
      'Эстетическая и инъекционная косметология',
      'Full Face ботулинотерапия',
      'Контурная пластика',
      'Биоревитализация и коллагеностимуляция',
      'Anti-age программы омоложения и восстановление качества кожи',
      'Индивидуальные программы профилактики старения',
    ],
    education: [
      ['2010 — 2015', 'Общая медицина', 'Медицинский университет Астана, специальность «Общая медицина».'],
      ['2015 — 2017', 'Интернатура', 'Подготовка по специальности «Врач общей практики».'],
      ['2020 — 2022', 'Дерматовенерология и дерматокосметология', 'Резидентура по взрослому и детскому направлению в Казахском научном центре дерматологии и инфекционных заболеваний, Алматы.'],
    ],
  },
];

const displayedTeamMembers = [
  ...teamMembers.filter((member) => member.name === 'Анастасия Александровна Свиридова'),
  ...teamMembers.filter((member) => member.name !== 'Анастасия Александровна Свиридова'),
];

function TeamPage() {
  return (
    <main className="inner team-page">
      <section className="page-hero team-hero">
        <p className="eyebrow">Наша команда</p>
        <h1>Знания, которым<br /><em>можно доверять.</em></h1>
        <p>Наши специалисты бережно соединяют клинический опыт и персональный подход к каждому пациенту.</p>
      </section>

      <section className="team-cards" aria-label="Врачи Symmetria">
        {displayedTeamMembers.map((member, index) => (
          <article className="team-card" key={member.name}>
            <div className="team-card__image">
              <img src={assetPath(member.image)} alt={member.name} />
              <span>{String(index + 1).padStart(2, '0')}</span>
            </div>
            <div className="team-card__content">
              <p className="eyebrow">Специалист Symmetria</p>
              <h2>{member.name}</h2>
              <p className="team-card__role">{member.role}</p>

              <section className="team-card__specialties">
                <h3>Направления работы</h3>
                <ul>
                  {member.specializations.map((specialization) => <li key={specialization}>{specialization}</li>)}
                </ul>
              </section>

              <details className="team-card__education">
                <summary>Образование и опыт <span aria-hidden="true">+</span></summary>
                <div>
                  {member.education.map(([period, title, description]) => (
                    <article key={`${period}-${title}`}>
                      <span>{period}</span>
                      <h3>{title}</h3>
                      <p>{description}</p>
                    </article>
                  ))}
                </div>
              </details>

              <BookLink className="button team-card__button">Записаться к врачу</BookLink>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}

function ContactsPage() {
  return (
    <main className="inner contacts">
      <section className="page-hero">
        <p className="eyebrow">Контакты</p>
        <h1>
          Будем рады
          <br />
          <em>встрече.</em>
        </h1>
      </section>

      <section className="contact-grid">
        <div>
          <p className="eyebrow">Клиника Symmetria</p>
          <h2>
            Астана, проспект
            <br />
            Мангилик Ел, 38
          </h2>
          <a
            className="text-link"
            href="https://2gis.kz/astana/geo/70030076166182837"
            target="_blank"
            rel="noreferrer"
          >
            Построить маршрут <ArrowIcon />
          </a>
        </div>

        <div>
          <p className="eyebrow">Позвонить</p>
          <a className="contact-big" href="tel:+77014845499">
            +7 701 484 54 99
          </a>
          <p className="eyebrow">Написать</p>
          <a className="contact-big" href="mailto:hello@symmetria.kz">
            hello@symmetria.kz
          </a>
        </div>

        <div>
          <p className="eyebrow">Режим работы</p>
          <h2>
            Пн—Сб · 09:00—21:00
            <br />
            Вс · 10:00—18:00
          </h2>
          <BookLink className="text-link">
            Записаться онлайн →
          </BookLink>
        </div>
      </section>

      <div className="map">
        <iframe
          id="map_368227037"
          title="Карта Symmetria Clinic"
          frameBorder="0"
          src="https://makemap.2gis.ru/widget?data=eJxtj01Pg0AQhv_LeJQ0uyxfIenBxFh7MVyUqOkBYbSbLMxmmVoL4b-7gL05x_dj8rwjkGvQYbNDapGdxh7y9xH4YhFyeMCKTw4hAOvIouPFH6EmQ877NyLM5GfofdZs5sazMvxRvoi6Ncf97qmvyti-nrdbH2mwr522rKnzweLx7vbf8HD-ru-juTDsuwZ_IJfielMAXyvoZcb4oyxId-zzNfkxuqt4GZHKTaRkqsIglhspoiROD76vG8iTLJsOAbSVLajXK9AIpmLIr1mhojBWqRBJAGb213dZKpM4TISSXh-IWk-X-a9-GRlTHhHN26KyO-H0C-nfbEM"
          sandbox="allow-modals allow-forms allow-scripts allow-same-origin allow-popups allow-top-navigation-by-user-activation"
        />
      </div>
    </main>
  );
}

function App() {
  return <><Header /><Routes><Route path="/" element={<Home />} /><Route path="/services" element={<ServicesPage />} /><Route path="/devices" element={<DevicesPage />} /><Route path="/about" element={<AboutPage />} /><Route path="/team" element={<TeamPage />} /><Route path="/contacts" element={<ContactsPage />} /></Routes><Footer /></>;
}

export default App;
