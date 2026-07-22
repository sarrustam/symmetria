import { useState } from 'react';
import { Link, NavLink, Route, Routes } from 'react-router-dom';

const navigation = [
  ['/', 'Главная'],
  ['/services', 'Услуги'],
  ['/about', 'О клинике'],
  ['/team', 'Наша команда'],
  ['/contacts', 'Контакты'],
];

const assetPath = (fileName) => `${import.meta.env.BASE_URL}images/${fileName}`;
const whatsappLink = 'https://wa.me/77014845499';

function Brand() {
  return <Link className="brand" to="/"><i />SYMMETRIA<small>clinic of aesthetics</small></Link>;
}

function BookLink({ children, className }) {
  return <a className={className} href={whatsappLink} target="_blank" rel="noreferrer">{children}</a>;
}

function ArrowIcon() {
  return <span className="arrow-icon" aria-hidden="true" />;
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
    <section className="numbers"><div><strong>8</strong><span>лет бережной<br />практики</span></div><div><strong>4 000<sup>+</sup></strong><span>счастливых<br />пациентов</span></div><div><strong>15</strong><span>экспертных<br />врачей</span></div><div><strong>4.9</strong><span>рейтинг<br />пациентов</span></div></section>
    <section className="ritual"><div className="ritual__visual"><div className="arch" /><div className="sun" /><p>symmetria<br />is a feeling</p></div><div className="ritual__copy"><p className="eyebrow">Первый визит</p><h2>Ваш личный<br /><em>ритуал заботы</em></h2><ol>{[['01', 'Знакомство', 'Врач внимательно выслушает вас и ответит на все вопросы.'], ['02', 'Диагностика', 'Проведём анализ состояния кожи и черт лица.'], ['03', 'Персональный план', 'Составим комфортную программу с ясными этапами.']].map(([number, title, description]) => <li key={number}><span>{number}</span><div><b>{title}</b><p>{description}</p></div></li>)}</ol><BookLink className="button">Записаться на консультацию</BookLink></div></section>
    <section className="quote"><span>“</span><blockquote>Забота о себе начинается<br />с момента, когда вы выбираете<br /><em>слышать себя.</em></blockquote><p>— команда Symmetria</p></section>
    <Booking />
  </main>;
}

const serviceDetails = [
  ['01', 'Эстетика лица', 'Мягкая коррекция и профилактика возрастных изменений с сохранением вашей мимики и характера.', ['Ботулинотерапия', 'Контурная пластика', 'Биоревитализация', 'SMAS-лифтинг']],
  ['02', 'Здоровье кожи', 'Продуманные протоколы для чистой, плотной и сияющей кожи без агрессивных решений.', ['Чистка лица', 'Пилинги', 'Фотоомоложение', 'Лазерные методики']],
  ['03', 'Контуры тела', 'Комплексный подход к качеству кожи, силуэту и ощущению лёгкости.', ['Эндосфера-терапия', 'Лимфодренаж', 'Аппаратные методики', 'Уходы для тела']],
];

function ServicesPage() { return <main className="inner"><section className="page-hero"><p className="eyebrow">Symmetria care</p><h1>Ваша красота —<br /><em>наш язык заботы.</em></h1><p>Технологии и тактильность, чтобы вы чувствовали себя уверенно в каждом отражении.</p></section><section className="service-list">{serviceDetails.map(([number, title, description, items]) => <article key={number}><span>{number}</span><div><h2>{title}</h2><p>{description}</p></div><ul>{items.map((item) => <li key={item}>{item}</li>)}</ul><BookLink>Записаться <ArrowIcon /></BookLink></article>)}</section></main>; }

function AboutPage() {
  return <main className="inner">
    <section className="page-hero about-hero"><p className="eyebrow">О Symmetria</p><h1>Место, где<br /><em>можно быть собой.</em></h1><p>В Symmetria мы соединяем знания врача, тонкое чувство эстетики и уважение к вашей природе.</p></section>
    <section className="values"><p className="eyebrow">Наши ценности</p><div>{[['01', 'Деликатность', 'Мы выбираем решения, которые выглядят естественно и ощущаются комфортно.'], ['02', 'Экспертность', 'В нашей команде — врачи, которые постоянно совершенствуют свою практику.'], ['03', 'Диалог', 'Ваше доверие важнее быстрых результатов. Мы открыто говорим о каждом этапе.']].map(([number, title, text]) => <article key={number}><span>{number}</span><h2>{title}</h2><p>{text}</p></article>)}</div></section>
    <ClinicGallery />
    <section className="doctor"><div className="doctor__portrait"><div /></div><div><p className="eyebrow">Основательница</p><h2>Алия<br /><em>Сарсенова</em></h2><p>«Я верю, что эстетическая медицина должна возвращать не просто свежесть лицу, а спокойствие внутри. Когда вы нравитесь себе — это заметно во всём».</p><p className="doctor__sign">Алия Сарсенова<br /><small>врач-косметолог, основательница</small></p></div></section>
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
];

function TeamPage() {
  return (
    <main className="inner team-page">
      <section className="page-hero team-hero">
        <p className="eyebrow">Наша команда</p>
        <h1>Знания, которым<br /><em>можно доверять.</em></h1>
        <p>Наши специалисты бережно соединяют клинический опыт и персональный подход к каждому пациенту.</p>
      </section>

      <section className="team-roster" aria-label="Специалисты Symmetria">
        {teamMembers.map((member, index) => (
          <article className="team-doctor" key={member.name}>
            <header className="team-doctor__label"><span>{String(index + 1).padStart(2, '0')}</span><p>Специалист Symmetria</p></header>
            <div className="team-doctor__overview">
              <div className="team-doctor__image"><img src={assetPath(member.image)} alt={member.name} /></div>
              <div className="team-doctor__intro"><p className="eyebrow">Ваш врач</p><h2>{member.shortName}</h2><p className="team-doctor__role">{member.role}</p><p>Внимательный и системный подход к здоровью кожи — от диагностики до комфортного плана лечения и эстетической коррекции.</p><BookLink className="button">Записаться к врачу</BookLink></div>
            </div>
            <div className="team-doctor__details">
              <section className="team-doctor__specialties"><p className="eyebrow">Специализация</p><ul>{member.specializations.map((specialization) => <li key={specialization}>{specialization}</li>)}</ul></section>
              <section className="team-doctor__education"><p className="eyebrow">Образование</p><div>{member.education.map(([period, title, description]) => <article key={period}><span>{period}</span><h3>{title}</h3><p>{description}</p></article>)}</div></section>
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
  return <><Header /><Routes><Route path="/" element={<Home />} /><Route path="/services" element={<ServicesPage />} /><Route path="/about" element={<AboutPage />} /><Route path="/team" element={<TeamPage />} /><Route path="/contacts" element={<ContactsPage />} /></Routes><Footer /></>;
}

export default App;
