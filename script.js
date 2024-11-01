let body = document.querySelector('body');

const changeOrientation = () => {
  if(screen.orientation.type.indexOf('landscape') > -1){
    body.classList.add('landscape')
   }
   else{
    body.classList.remove('landscape')
   }
} 

changeOrientation();

screen.orientation.addEventListener('change', function() {
  changeOrientation();
});




const START = 'START';
const RULES = 'RULES';
const RESULTS = 'RESULTS';
const PLAYERS = 'PLAYERS';
const ADD_PLAYER = 'ADD_PLAYER';
//const GAME_PROCESS = 'GAME_PROCESS';
const CHOOSE_FRIEND = 'CHOOSE_PLAYER';
const CHOOSE_GAME = 'CHOOSE_GAME';
const GAME_FRUITS = 'GAME_FRUITS';
const GAME_QUESTIONS = 'GAME_QUESTIONS';
const CHOOSE_THEME = 'CHOOSE_THEME';
const ASK_QUESTION = 'ASK_QUESTION';
const CHANGE_MAX_PONTS = 'CHANGE_MAX_PONTS';
const CHOOSE_PLAYER_SCREEN = 'CHOOSE_PLAYER_SCREEN';


let questionsArr = [
    {
      themeId: 0, // Кино и мультики
      questions: [
        {
          id: 0,
          question: 'Кто был другом Ариэль?',
          answer: 'Краб',
          wasAsked: false
        },
        {
          id: 1,
          question: 'Мушу из мультфильма «Мулан» был …',
          answer: 'Драконом',
          wasAsked: false
        },
        {
          id: 2,
          question: 'Кто был мужчиной хоть куда в полном расцвете сил? ',
          answer: 'Карлсон',
          wasAsked: false
        },
        {
          id: 3,
          question: ' Кому принадлежит фраза: «Не смешите мои подковы!»? ',
          answer: 'Коню Юлию',
          wasAsked: false
        },
        {
          id: 4,
          question: 'По мнению Карлсона, это лучшее лекарство от болезни. Какое?',
          answer: 'Варенье',
          wasAsked: false
        },
        {
          id: 5,
          question: 'Матроскин говорил, что именно так надо есть бутерброд. Как?',
          answer: 'Колбасой вниз',
          wasAsked: false
        },
        {
          id: 6,
          question: 'Мультик про доброго персонажа с Луны называется… ',
          answer: 'Приключения Лунтика',
          wasAsked: false
        },
        {
          id: 7,
          question: 'Имя маленькой свинки, которая живёт с родителями и братом – … ',
          answer: 'Пеппа',
          wasAsked: false
        },
        {
          id: 8,
          question: 'Как называются круглые герои популярного мультика?',
          answer: 'Смешарики',
          wasAsked: false
        },
        {
          id: 9,
          question: 'Любимое лакомство Винни-Пуха – это … ',
          answer: 'Мёд',
          wasAsked: false
        },
        {
          id: 10,
          question: 'Какие маленькие герои в мультфильме могут всё починить?',
          answer: 'Фиксики',
          wasAsked: false
        },
        {
          id: 11,
          question: ' Кем были Ниф-Ниф, Наф-Наф и Нуф-Нуф?',
          answer: 'Поросятами',
          wasAsked: false
        },
        {
          id: 12,
          question: 'Какое имя у кота, который никак не может поймать маленького мышонка?',
          answer: 'Том',
          wasAsked: false
        },
        {
          id: 13,
          question: 'Что подарили родители дяди Фёдора Печкину?',
          answer: 'Велосипед',
          wasAsked: false
        },
        {
          id: 14,
          question: ' Как звали Царевича, который дружил с волком?',
          answer: 'Иван',
          wasAsked: false
        },
        {
          id: 15,
          question: 'Как звали зелёного великана, живущего на болоте?',
          answer: 'Шрэк',
          wasAsked: false
        },
        {
          id: 16,
          question: 'Кто был начальник умывальников и командир мочалок?',
          answer: 'Мойдодыр',
          wasAsked: false
        },
        {
          id: 17,
          question: 'Как звали красивую длинноволосую девушку, которую заперли в башне?',
          answer: 'Рапунцель',
          wasAsked: false
        },
        {
          id: 18,
          question: 'Кто потерял туфельку на балу?',
          answer: 'Золушка',
          wasAsked: false
        },
        {
          id: 19,
          question: 'Во что превратилась карета Золушки?',
          answer: 'В тыкву',
          wasAsked: false
        },
        {
          id: 20,
          question: 'Какого мальчика воспитывали животные в джунглях?',
          answer: 'Маугли',
          wasAsked: false
        },
        {
          id: 21,
          question: 'Какое животное было другом Чебурашки?',
          answer: 'Крокодил',
          wasAsked: false
        },
        {
          id: 22,
          question: 'Как звали сестру Кая?',
          answer: 'Герда',
          wasAsked: false
        },
        {
          id: 23,
          question: 'Кто стал женой Шрэка?',
          answer: 'Фиона',
          wasAsked: false
        },
        {
          id: 24,
          question: 'Кто был конопатым рыжим мальчиком?',
          answer: 'Антошка',
          wasAsked: false
        },
        {
          id: 25,
          question: 'Что должен был привезти купец средней дочери из «Аленького цветочка»?',
          answer: 'Зеркальце',
          wasAsked: false
        },
        {
          id: 26,
          question: 'Что подарила сова ослику Иа?',
          answer: 'Хвост',
          wasAsked: false
        },
        {
          id: 27,
          question: 'Кто купил на базаре самовар?',
          answer: 'Муха-Цокотуха',
          wasAsked: false
        },
        {
          id: 28,
          question: 'С кем в болоте дружил Водяной?',
          answer: 'С пиявками да лягушками',
          wasAsked: false
        },
        {
          id: 29,
          question: 'Куда всегда спешат Чип и Дейл?',
          answer: 'На помощь',
          wasAsked: false
        },
        {
          id: 30,
          question: 'Сколько героев пытались вытянуть репку?',
          answer: '6',
          wasAsked: false
        },
        {
          id: 31,
          question: 'Что мешало спать принцессе на матрасе?',
          answer: 'Горошина',
          wasAsked: false
        },
        {
          id: 32,
          question: 'Что прилетело к царевне-лягушке?',
          answer: 'Стрела',
          wasAsked: false
        },
        {
          id: 33,
          question: 'Что помогает спрятаться в сказках и стать невидимым?',
          answer: 'Шапка-невидимка',
          wasAsked: false
        },
        {
          id: 34,
          question: 'Как звали мальчика, который переехал с друзьями в деревню?',
          answer: 'Дядя Фёдор',
          wasAsked: false
        },
        {
          id: 35,
          question: ' Какая ночь была в мультфильме «Алладин»?',
          answer: 'Арабская',
          wasAsked: false
        },
      ]
    },
    {
      themeId: 1, // Космос
      questions: [
        { 
          id: 0,
          question: 'Сколько звезд в Солнечной системе?',
          answer: 'Одна – Солнце',
          wasAsked: false
        },
        {
          id: 1,
          question: 'Сколько времени будет гореть спичка на Луне?',
          answer: '0 - не будет гореть',
          wasAsked: false
        },
        {
          id: 2,
          question: 'Сколько выделяют зодиакальных созвездий?',
          answer: '12 созвездий',
          wasAsked: false
        },
        {
          id: 3,
          question: 'За какое время Земля обращается вокруг Солнца?',
          answer: '365 дней',
          wasAsked: false
        },
        {
          id: 4,
          question: 'Как звали человека, который совершил первый полет в космос и благополучно вернулся?',
          answer: 'Юрий Алексеевич Гагарин',
          wasAsked: false
        },
        {
          id: 5,
          question: 'Самая маленькая и наиболее удалённая от Солнца планета?',
          answer: 'Нептун, Плутон лишился статуса «планета»',
          wasAsked: false
        },
        {
          id: 6,
          question: 'Сколько планет в солнечной системе?',
          answer: '8 планет',
          wasAsked: false
        },
        {
          id: 7,
          question: 'Как назывался корабль, на котором Юрий Гагарин совершил первый полёт в космос?',
          answer: '«Восток - 1»',
          wasAsked: false
        },
        {
          id: 8,
          question: 'Какая планета названа в честь богини любви?',
          answer: 'Венера',
          wasAsked: false
        },
        {
          id: 9,
          question: 'Назовите клички собак, летавших в космос до людей и которые благополучно вернулись?',
          answer: 'Белка и Стрелка',
          wasAsked: false
        },
        {
          id: 10,
          question: 'Как звали первую женщину космонавта, летавшую в космос?',
          answer: 'Валентина Терешкова',
          wasAsked: false
        },
        {
          id: 11,
          question: 'Как называется специальная одежда для космонавта?',
          answer: 'Cкафандр',
          wasAsked: false
        },
        {
          id: 12,
          question: 'Какого числа отмечается день космонавтики?',
          answer: '12 апреля',
          wasAsked: false
        },
        {
          id: 13,
          question: 'Как звали человека, который первый вышел в открытый космос?',
          answer: 'Алексей Архипович Леонов',
          wasAsked: false
        },
        {
          id: 14,
          question: 'Какой прибор используется для исследования звездного неба?',
          answer: 'Телескоп',
          wasAsked: false
        },
        {
          id: 15,
          question: 'Какое название имеет специальный аппарат, который может передвигаться по поверхности Луны?',
          answer: 'Луноход',
          wasAsked: false
        },
        {
          id: 16,
          question: 'Имя человека, который впервые оказался на поверхности Луны.',
          answer: 'Нил Армстронг',
          wasAsked: false
        },
        {
          id: 17,
          question: 'Как называется камень, если он прилетел на планету из космоса?',
          answer: 'Метеорит',
          wasAsked: false
        },
        {
          id: 18,
          question: 'Что влияет на цвет звезды?',
          answer: 'Ее температура',
          wasAsked: false
        },
        {
          id: 19,
          question: 'Как называется небесное тел, вращающееся вокруг Солнца и имеющее хвост?',
          answer: 'Комета',
          wasAsked: false
        },
        {
          id: 20,
          question: 'Кого называют отцом космонавтики?',
          answer: 'Циолковский',
          wasAsked: false
        },
        {
          id: 21,
          question: 'Кто первым начал изучение космоса, используя телескоп?',
          answer: 'Галилей',
          wasAsked: false
        },
        {
          id: 22,
          question: 'Кто из древнегреческих ученых первым стал утверждать, что Земля имеет форму шара?',
          answer: 'Пифагор',
          wasAsked: false
        },
        {
          id: 23,
          question: 'Он первый стал утверждать, что Земля не единственная планета и все они вращаются вокруг солнца.',
          answer: 'Коперник',
          wasAsked: false
        },
        {
          id: 24,
          question: 'Название галактики, в которой мы живем?',
          answer: 'Млечный путь',
          wasAsked: false
        },
        {
          id: 25,
          question: 'Когда был осуществлён запуск космического корабля «Восток-1»?',
          answer: '12 апреля 1961 год',
          wasAsked: false
        },
        {
          id: 26,
          question: 'Какая планета самая яркая из видимых с Земли?',
          answer: 'Венера',
          wasAsked: false
        },
        {
          id: 27,
          question: 'С помощью какой звезды находят стороны света?',
          answer: 'Полярная звезда',
          wasAsked: false
        },
        {
          id: 28,
          question: 'Как называется совокупность нескольких ярких звезд, образующих своеобразный узор?',
          answer: 'Cозвездие',
          wasAsked: false
        },
        {
          id: 29,
          question: 'В какое время года Земля бывает ближе к Солнцу?',
          answer: 'Зимой',
          wasAsked: false
        }
      ]
    },
    {
      themeId: 2, // Наука
      questions: [
        {
          id: 0,
          question: 'Она может быть световой, морской, звуковой.',
          answer: 'Волна',
          wasAsked: false
        },
        {
          id: 1,
          question: 'Кто создал периодическую систему химических элементов?',
          answer: 'Менделеев',
          wasAsked: false
        },
        {
          id: 2,
          question: 'Правда ли, что на Земле больше соленой воды, чем пресной?',
          answer: 'Правда',
          wasAsked: false
        },
        {
          id: 3,
          question: 'Где был изобретен первый персональный компьютер?',
          answer: 'В СССР',
          wasAsked: false
        },
        {
          id: 4,
          question: 'Наука о звуке.',
          answer: 'Акустика',
          wasAsked: false
        },
        {
          id: 5,
          question: 'Наука о звездах и планетах.',
          answer: 'Астрономия',
          wasAsked: false
        },
        {
          id: 6,
          question: 'Наука о прошлом человека.',
          answer: 'История',
          wasAsked: false
        },
        {
          id: 7,
          question: 'Наука о птицах.',
          answer: 'Орнитология',
          wasAsked: false
        },
        {
          id: 8,
          question: 'Наука о предметах найденных в земле в ходе раскопок.',
          answer: 'Археология',
          wasAsked: false
        },
        {
          id: 9,
          question: 'Наука о родном крае.',
          answer: 'Краеведение',
          wasAsked: false
        },
        {
          id: 10,
          question: 'Наука о веществах и их химическом составе',
          answer: 'Химия',
          wasAsked: false
        },
        {
          id: 11,
          question: 'В названии, какого месяца больше всего букв?',
          answer: 'Сентябрь',
          wasAsked: false
        },
        {
          id: 12,
          question: 'Как в старину называли глаз?',
          answer: 'Око',
          wasAsked: false
        },
        {
          id: 13,
          question: 'Палку распилили на 12 частей. Сколько сделали распилов?',
          answer: '11',
          wasAsked: false
        },
        {
          id: 14,
          question: 'В какое время года сутки короче?',
          answer: 'Одинаково, в сутках 24 часа.',
          wasAsked: false
        },
        {
          id: 15,
          question: 'Кто открыл закон всемирного тяготения, после падения яблока с дерева на его голову?',
          answer: 'Исаак Ньютон',
          wasAsked: false
        },
        {
          id: 16,
          question: 'Как звали великого физика, который сформулировал теорию относительности?',
          answer: 'Энштейн',
          wasAsked: false
        },
        {
          id: 17,
          question: 'Воздушная оболочка Земли.',
          answer: 'Атмосфера',
          wasAsked: false
        },
        {
          id: 18,
          question: 'Когда отмечается День российской науки?',
          answer: '8 февраля',
          wasAsked: false
        },
        {
          id: 19,
          question: 'Как называлась русская мера длины, равная 1,0668 км?',
          answer: 'Верста',
          wasAsked: false
        },
        {
          id: 20,
          question: ' Кем по профессии был А.П.Чехов?',
          answer: 'Врач',
          wasAsked: false
        },
        {
          id: 21,
          question: 'Кому из древних учёных принадлежат слова: «Числа правят миром!»?',
          answer: 'Пифагор',
          wasAsked: false
        },
        {
          id: 22,
          question: 'Первая кислота, с которой познакомился человек?',
          answer: 'уксусная кислота',
          wasAsked: false
        },
        {
          id: 23,
          question: 'Это вещество раньше ценилось на вес золота.',
          answer: 'Соль',
          wasAsked: false
        },
        {
          id: 24,
          question: 'Этот ученый – один из известных физиков древности. Ему приписывают фразу: «Дайте мне точку опоры,  и я сдвину Землю». О ком идет речь?',
          answer: 'Архимед',
          wasAsked: false
        },
        {
          id: 25,
          question: 'Это битва произошла 5 апреля 1242 г., Александр Невский разбил немцев на Чудском озере.',
          answer: 'Ледовое побоище',
          wasAsked: false
        },
        {
          id: 26,
          question: 'Какой город CCCР в годы ВОВ выдержал 900-дневную осаду немецких войск?',
          answer: 'Ленинград',
          wasAsked: false
        },
        {
          id: 27,
          question: 'Этот ученый привез в Россию первую Нобелевскую премию. Кто это?',
          answer: 'Академик И.Павлов.',
          wasAsked: false
        },
        {
          id: 28,
          question: 'Какой вал изображен на картине Айвазовского?',
          answer: 'Девятый',
          wasAsked: false
        },
        {
          id: 29,
          question: 'В 1913 году в автомобилестроении был внедрен конвейер. Кто его изобрел?',
          answer: 'Генри Форд',
          wasAsked: false
        },
      ]
    },
    {
      themeId: 3, // География
      questions: [
        {
          id: 0,
          question: 'Климатическая зона, напоминающая огромный пляж? ',
          answer: 'Пустыня',
          wasAsked: false
        },
        {
          id: 1,
          question: 'Наиболее плодородная почва. ',
          answer: 'Чернозем',
          wasAsked: false
        },
        {
          id: 2,
          question: 'Это необычное явление можно пронаблюдать в полярных районах планеты.',
          answer: 'Северное сияние',
          wasAsked: false
        },
        {
          id: 3,
          question: 'В какой стране находится одно из оставшихся семи чудес света?',
          answer: 'В Египте',
          wasAsked: false
        },
        {
          id: 4,
          question: 'Этот океан самый маленький и холодный.',
          answer: 'Северный Ледовитый',
          wasAsked: false
        },
        {
          id: 5,
          question: 'И головной убор, и государство.',
          answer: 'Панама',
          wasAsked: false
        },
        {
          id: 6,
          question: 'Контур какой страны с высоты похож на сапог?',
          answer: 'Италия',
          wasAsked: false
        },
        {
          id: 7,
          question: 'Единственный континент, не имеющий растительности.',
          answer: 'Антарктида',
          wasAsked: false
        },
        {
          id: 8,
          question: 'Назовите самую длинную реку?',
          answer: 'Нил',
          wasAsked: false
        },
        {
          id: 9,
          question: 'Какой материк четырьмя океанами омывается?',
          answer: 'Евразия',
          wasAsked: false
        },
        {
          id: 10,
          question: 'Самое глубокое озеро, в которое множество рек впадает, а выходит одна.',
          answer: 'Байкал',
          wasAsked: false
        },
        {
          id: 11,
          question: 'Перечислите цветные моря.',
          answer: 'Черное, Желтое, Красное, Белое',
          wasAsked: false
        },
        {
          id: 12,
          question: 'Самый большой остров',
          answer: 'Гренландия',
          wasAsked: false
        },
        {
          id: 13,
          question: 'Он может быть коралловым, вулканическим, песчаным, необитаемым.',
          answer: 'Остров',
          wasAsked: false
        },
        {
          id: 14,
          question: 'Пролив, разделяющий два материка, океана, моря, полуострова и две страны.',
          answer: 'Берингов',
          wasAsked: false
        },
        {
          id: 15,
          question: 'Он сам вода и плавает по воде.',
          answer: 'Лед',
          wasAsked: false
        },
        {
          id: 16,
          question: 'К какой реке спешил Айболит?',
          answer: 'Лимпопо',
          wasAsked: false
        },
        {
          id: 17,
          question: 'Этот океан не омывает Россию.',
          answer: 'Индийский',
          wasAsked: false
        },
        {
          id: 18,
          question: 'Самое высокогорное в мире озеро в Андах.',
          answer: 'Титикака',
          wasAsked: false
        },
        {
          id: 19,
          question: 'Черным золотом называют…',
          answer: 'Нефть',
          wasAsked: false
        },
        {
          id: 20,
          question: 'Холоднее на Северном или Южном полюсе?',
          answer: 'На Южном',
          wasAsked: false
        },
        {
          id: 21,
          question: 'Эту столицу основали близнецы, вскормленные волчицей.',
          answer: 'Рим',
          wasAsked: false
        },
        {
          id: 22,
          question: 'Страна, которую называют «земля обетованная».',
          answer: 'Израиль',
          wasAsked: false
        },
        {
          id: 23,
          question: 'Где на земном шаре день равен ночи круглый год?',
          answer: 'Экватор',
          wasAsked: false
        },
        {
          id: 24,
          question: 'Какой город очень сердитый?',
          answer: 'Грозный',
          wasAsked: false
        },
        {
          id: 25,
          question: 'К какой ноте добавить букву, чтобы получилась река в России?',
          answer: 'До-н',
          wasAsked: false
        },
        {
          id: 26,
          question: 'Что называют макушкой Земли?',
          answer: 'Полюс',
          wasAsked: false
        },
        {
          id: 27,
          question: 'В какой город не ездят со своим самоваром?',
          answer: 'Тула',
          wasAsked: false
        },
        {
          id: 28,
          question: 'Какое озеро самое большое в мире?',
          answer: 'Каспийское',
          wasAsked: false
        },
      ]
    },
    {
      themeId: 4, // Животные
      questions: [
        {
          id: 0,
          question: 'У этой птицы нет перьев?',
          answer: 'Пингвин',
          wasAsked: false
        },
        {
          id: 1,
          question: 'Эта птица любит блестящие штучки.',
          answer: 'Сорока',
          wasAsked: false
        },
        {
          id: 2,
          question: 'Эти попугаи живут парами.',
          answer: 'Неразлучники',
          wasAsked: false
        },
        {
          id: 3,
          question: 'В Индии мясо этого животного нельзя есть. Какого животного?',
          answer: 'Коровы',
          wasAsked: false
        },
        {
          id: 4,
          question: 'Эта птица самая маленькая и летает хвостом вперед.',
          answer: 'Колибри',
          wasAsked: false
        },
        {
          id: 5,
          question: 'Здесь можно посмотреть на представителей водного мира.',
          answer: 'Океанариум',
          wasAsked: false
        },
        {
          id: 6,
          question: 'Это насекомое скользит по воде и не тонет.',
          answer: 'Водомерка',
          wasAsked: false
        },
        {
          id: 7,
          question: 'Общее название насекомых с твердым панцирем.',
          answer: 'Жук',
          wasAsked: false
        },
        {
          id: 8,
          question: 'Животное населяет реки и озера Африки, длина 4,5метра. Масса до 750 килограмм.',
          answer: 'Бегемот',
          wasAsked: false
        },
        {
          id: 9,
          question: 'Кто является самой большой кошкой на планете?',
          answer: 'Тигр',
          wasAsked: false
        },
        {
          id: 10,
          question: 'Какое млекопитающее умеет летать?',
          answer: 'Летучая мышь',
          wasAsked: false
        },
        {
          id: 11,
          question: ' У какой птицы прозвище «санитар леса»?',
          answer: 'Дятел',
          wasAsked: false
        },
        {
          id: 12,
          question: 'У какой птицы главная задача – будить всех утром?',
          answer: 'Петух',
          wasAsked: false
        },
        {
          id: 13,
          question: 'Какой зверь сам себе строит дом?',
          answer: 'Бобер',
          wasAsked: false
        },
        {
          id: 14,
          question: 'Какое животное имеет самую длинную шею?',
          answer: 'Жираф',
          wasAsked: false
        },
        {
          id: 15,
          question: 'Какое животное самое упрямое?',
          answer: 'Осёл',
          wasAsked: false
        },
        {
          id: 16,
          question: 'Кого называют «Царь зверей»?',
          answer: 'Лев',
          wasAsked: false
        },
        {
          id: 17,
          question: 'Кто может брызгать струёй воды из головы?',
          answer: 'Кит',
          wasAsked: false
        },
        {
          id: 18,
          question: 'От кого произошёл человек по мнению Чарльза Дарвина?',
          answer: 'Обезьяна',
          wasAsked: false
        },
        {
          id: 19,
          question: 'У каких котов нет шерсти?',
          answer: 'Сфинксы',
          wasAsked: false
        },
        {
          id: 20,
          question: 'Как называют детей курицы?',
          answer: 'Цыплята',
          wasAsked: false
        },
        {
          id: 21,
          question: 'Где живут звери, на которых можно прийти посмотреть?',
          answer: 'Зоопарк',
          wasAsked: false
        },
        {
          id: 22,
          question: 'Кто самое медлительное животное?',
          answer: 'Ленивец',
          wasAsked: false
        },
        {
          id: 23,
          question: 'Как называется место спячки медведя?',
          answer: 'Берлога',
          wasAsked: false
        },
        {
          id: 24,
          question: 'Детёныш овцы – это …',
          answer: 'Ягнёнок',
          wasAsked: false
        },
        {
          id: 25,
          question: 'Как называется профессия, в котором человек дрессирует собак?',
          answer: 'Кинолог',
          wasAsked: false
        },
        {
          id: 26,
          question: 'Куда заносят исчезающие виды животных?',
          answer: 'В Красную книгу',
          wasAsked: false
        },
        {
          id: 27,
          question: 'Как называется самая крупная змея?',
          answer: 'Анаконда',
          wasAsked: false
        },
        {
          id: 28,
          question: 'Как называется клетка, в которой держат животных?',
          answer: 'Вольер',
          wasAsked: false
        },
        {
          id: 29,
          question: 'Как зовут человека, который изучает птиц?',
          answer: 'Орнитолог',
          wasAsked: false
        },
      ]
    },
    
    {
      themeId: 5, // Литература
      questions: [
        {
          id: 0,
          question: 'Кто из героев отправился с друзьями в Изумрудный город к Великому Гудвину? ',
          answer: 'Элли',
          wasAsked: false
        },
        {
          id: 1,
          question: 'Упитанный мужчина в самом расцвете сил. С пропеллером!',
          answer: 'Карлсон',
          wasAsked: false
        },
        {
          id: 2,
          question: 'Из какого материала сделали самого известного сказочного солдатика?',
          answer: 'Олово',
          wasAsked: false
        },
        {
          id: 3,
          question: 'Какой персонаж стихотворения К. Чуковского «Телефон» просит прислать калоши?',
          answer: 'Крокодил',
          wasAsked: false
        },
        {
          id: 4,
          question: 'Согласно басне, эта птица никак не могла договориться с раком и щукой.',
          answer: 'Лебедь',
          wasAsked: false
        },
        {
          id: 5,
          question: 'Чьи это слова «По щучьему велению, по моему хотению»?',
          answer: 'Емеля',
          wasAsked: false
        },
        {
          id: 6,
          question: 'Кто из героев отправился в страну Лимпопо?',
          answer: 'Айболит',
          wasAsked: false
        },
        {
          id: 7,
          question: 'Домашняя птица, которая снесла золотое яичко.',
          answer: 'Курочка ряба',
          wasAsked: false
        },
        {
          id: 8,
          question: 'Какой овощ пытались вытащить из земли несколько поколений людей и животных?',
          answer: 'Репку',
          wasAsked: false
        },
        {
          id: 9,
          question: 'Как звали трех богатырей из сказок и былин?',
          answer: 'Илья Муромец, Алеша Попович и Добрыня Никитич',
          wasAsked: false
        },
        {
          id: 10,
          question: 'Вредный шарик, укатившийся и убежавший от всех.',
          answer: 'Колобок',
          wasAsked: false
        },
        {
          id: 11,
          question: 'Сказка про трёх косолапых.',
          answer: 'Три медведя',
          wasAsked: false
        },
        {
          id: 12,
          question: 'Лентяй, любящий спать на печи.',
          answer: 'Емеля',
          wasAsked: false
        },
        {
          id: 13,
          question: 'Домик, в котором ютилось много разных животных.',
          answer: 'Теремок',
          wasAsked: false
        },
        {
          id: 14,
          question: 'Героиня сказок, которую называли прекрасной и премудрой.',
          answer: 'Василиса',
          wasAsked: false
        },
        {
          id: 15,
          question: 'Очень грустная сказочная царевна.',
          answer: 'Царевна-несмеяна',
          wasAsked: false
        },
        {
          id: 16,
          question: 'Бычок, но сделанный из необычного материала.',
          answer: 'Соломенный бычок',
          wasAsked: false
        },
        {
          id: 17,
          question: 'Три маленьких животных, которые строили домики из разных материалов.',
          answer: '3 поросенка',
          wasAsked: false
        },
        {
          id: 18,
          question: 'Как звали братца Аленушки.',
          answer: 'Иванушка',
          wasAsked: false
        },
        {
          id: 19,
          question: 'Мяукающее животное в обуви из сказки.',
          answer: 'Кот в сапогах',
          wasAsked: false
        },
        {
          id: 20,
          question: 'Сказка –  Аленький … ?',
          answer: 'Аленький цветочек',
          wasAsked: false
        },
        {
          id: 21,
          question: 'Бедная и трудолюбивая девушка, ставшая впоследствии принцессой.',
          answer: 'Золушка',
          wasAsked: false
        },
        {
          id: 22,
          question: 'Маленькая девочка, которая жила в цветочке.',
          answer: 'Дюймовочка',
          wasAsked: false
        },
        {
          id: 23,
          question: 'Трубадур и компания животных-музыкантов.',
          answer: 'Бременские музыканты',
          wasAsked: false
        },
        {
          id: 24,
          question: 'Деревяный человечек с длинным носом.',
          answer: 'Буратино',
          wasAsked: false
        },
        {
          id: 25,
          question: 'Сказочная героиня, подруга Буратино.',
          answer: 'Мальвина',
          wasAsked: false
        },
        {
          id: 26,
          question: 'Изнеженная принцесса, любившая очень мягкую и пышную перину.',
          answer: 'Принцесса на горошине',
          wasAsked: false
        },
        {
          id: 27,
          question: 'Имя девочки, из страны чудес',
          answer: 'Алиса в стране чудес',
          wasAsked: false
        },
        {
          id: 28,
          question: 'Цветок, оторванные лепестки которого исполняли желания.',
          answer: 'Цветик — семицветик',
          wasAsked: false
        },
        {
          id: 29,
          question: 'Героиня сказки в красивой цветной яркой шапочке.',
          answer: 'Красная шапочка',
          wasAsked: false
        },
        {
          id: 30,
          question: 'Летающий друг малыша, очень любящий малиновое варенье.',
          answer: 'Карлсон',
          wasAsked: false
        },
        {
          id: 31,
          question: 'Сказка, в которой в качестве героев выступают овощи.',
          answer: 'Чипполино',
          wasAsked: false
        },
      ]
    },
];

let soundClose = new Audio("/sound/sound-close.mp3"),
    soundSelect = new Audio("/sound/sound-select.mp3"),
    soundVictory = new Audio("/sound/sound-victory.mp3"),
    soundClick = new Audio("/sound/sound-click.mp3"),
    soundDelete = new Audio("/sound/sound-delete.mp3"),
    soundBell = new Audio("/sound/sound-bell.mp3"),
    soundError = new Audio("/sound/sound-error.mp3");

const soundClosePlay = () => {
  soundClose.play();
}
const soundSelectPlay = () => {
  soundSelect.play();
}
const soundClickPlay = () => {
  soundClick.play();
}
const soundVictoryPlay = () => {
  soundVictory.play();
}
const soundDeletePlay = () => {
  soundDelete.play();
}
const soundBellPlay = () => {
  soundBell.play();
}
const soundErrorPlay = () => {
  soundError.play();
}


class Game extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      currentView: START,
      gameType: null,
      fruits: ['cherry', 'apple', 'pear', 'banana', 'lemon', 'strawberry'],
      players: [
         {  
              id: 0,
              name: '',
              color: 'green',
              fruits: [],
              points: 0
          },
          {  
              id: 1,
              name: '',
              color: 'purple',
              fruits: [],
              points: 0  
          },
          {  
              id: 2,
              name: '',
              color: 'orange',
              fruits: [],
              points: 0  
          },
          {  
              id: 3,
              name: '',
              color: 'yellow',
              fruits: [],
              points: 0  
          }
        ],
      currentPlayer: null,
      winner: null,
      newPlayerNameText: '',
      newPlayerId: null,
      inputError: false,
      questionTheme: null, /* выбранная тема*/
      themesList: [
          {
            id: 0,
            img: '/img/themeFruits/banana.png',
            title: 'Кино и мультики',
            inQuestion: 'про кино и мультики'
          },
          {
            id: 1,
            img: '/img/themeFruits/lemon.png',
            title: 'Космос',
            inQuestion: 'про космос'
          },
          {
            id: 2,
            img: '/img/themeFruits/strawberry.png',
            title: 'Наука',
            inQuestion: 'по науке'
          },
          {
            id: 3,
            img: '/img/themeFruits/cherry.png',
            title: 'География',
            inQuestion: 'по географии'
          },
          {
            id: 4,
            img: '/img/themeFruits/pear.png',
            title: 'Животные',
            inQuestion: 'про животных'
          },
          {
            id: 5,
            img: '/img/themeFruits/apple.png',
            title: 'Литература',
            inQuestion: 'по литературе'
          }
      ],
      maxPoints: 100,
      allQuestions: [],
      currentQuestion: null, /* заданный вопрос*/
      isGetAnswer: false, /* для показа ответа на вопрос*/
      isTruthful: null, /* ответил/не ответил на вопрос */
      showAnswerResult: false /* для показа результата ответа на вопрос - ответил/не ответил*/
    };  
  }

  componentDidMount() {
    this.setState({
      allQuestions: questionsArr
    });
  }


  chooseGame = (gameType) => {
    soundSelectPlay();

    this.setState({
      gameType,
      currentView: gameType === GAME_FRUITS? PLAYERS : CHANGE_MAX_PONTS
    })
  }

  changeCurrentView = (view) => {
    this.setState({
      currentView: view
    });
  }

  onAddPlayerName = (e) => {
    this.setState({
      newPlayerNameText: e.target.value
    });
  }

  onAddPlayer = (playerId) => { 
  /* 
  для открытия попапа. Записывает newPlayerId (кого по id добавлять), 
  и если оно не null, открывается попап
  */
    soundSelectPlay();

    setTimeout(()=>{
      this.setState({
        newPlayerId: playerId
      });
    }, 0);
  }

  addPlayer = () => { // для добавления игрока (при введении имени в попапе)
    soundSelectPlay();

    if(this.state.newPlayerNameText.length == 0 ){
      this.setState({
        inputError: true
      });

      setTimeout(()=>{
        this.setState({
          inputError: false
        });
      }, 3000);
    }
    else{
      let players = this.state.players.map(player => {
        if(player.id === this.state.newPlayerId){
          return {
            ...player,
            name: this.state.newPlayerNameText
          };
        }
        return player;
      });

      this.setState({
        players: [...players],
        newPlayerNameText: '',
        newPlayerId: null
      });
    }
  }

  popupDeletePlayerName = (e) => {
    //soundDeletePlay();

    if(e.target.nodeName !== 'svg' && e.target.nodeName !== 'path'){
      if(e.target.className.includes('popupAddPlayerInput') || e.target.className.includes('addPlayerBtn')){
        return;
      }
    }
    
    this.setState({
      newPlayerNameText: '',
      newPlayerId: null
    });
  } 

  deletePlayer = (playerId) => {
    soundDeletePlay();

    let players = this.state.players.map(player => {
      if(player.id === playerId){
        return {
          ...player,
          name: '',
          points: 0
        };
      }
      return player;
    });

    this.setState({
      players: [...players]
    });
  }

  checkFruitWinner = () => {
    for(let i = 0; i < this.state.players.length; i++){
      let player = this.state.players[i];
      let completedFruits = player.fruits.map(fruit => fruit.completed);

      if(!completedFruits.includes(false)){
        this.setState({
          winner: player,
          currentView: RESULTS,
        });
      }
    }
  }

  chooseFruit = (playerId, fruitId)=>{
    soundSelectPlay();

    let players = this.state.players.map(player => {
      if(player.id === playerId){
        return {
          ...player,
          fruits: player.fruits.map(fruit => {
            if(fruit.id === fruitId){
              return{
                ...fruit,
                completed: !fruit.completed
              }
            }
            return fruit;
          })
        };
      }
      return player;
    });

    this.setState({
      players: [...players]
    });

    setTimeout(()=>{
      this.checkFruitWinner();
    }, 0);
  }

  changeMaxPoints = (direction) => {
    let maxPoints;

    if(direction === 'up'){
      maxPoints = this.state.maxPoints + 10;
    }
    else{
      maxPoints = this.state.maxPoints === 100 ? 100 : this.state.maxPoints - 10;
    }
    this.setState({
      maxPoints: maxPoints
    });
  }

  setMaxPoints = () => {
    soundSelectPlay();

    this.setState({
        currentView: PLAYERS,
    });
  }

  choosePlayer = (id) => {
    this.setState({
      currentPlayer: id,
      currentView: CHOOSE_THEME,
    });
  }

  roundIsOver = () => {
    soundBellPlay();

    this.setState({
      players: this.state.players.map(p => {
        if(p.id === this.state.currentPlayer){
          return {
            ...p,
            points: p.points + 10
          }
        }
        return p;
      }),
      currentPlayer: null,
      currentView: CHOOSE_PLAYER_SCREEN,
    });

    setTimeout(()=>{
      for(let i = 0; i < this.state.players.length; i++){
        if(this.state.players[i].points === this.state.maxPoints){
          this.setState({
            winner: this.state.players[i],
            currentView: RESULTS,
          })
        }
      }
    });
  }

  chooseTheme = (id) => {
    soundClickPlay();
    /*Выбор темы и вопроса по этой теме */

    let allQuestionsArr = [...this.state.allQuestions],
        clearedQuestions = [];

    /* массив еще незаданных вопросов в выбранной теме*/
    let notAswered = allQuestionsArr.filter(theme => theme.themeId === id)[0].questions.filter(question => !question.wasAsked);
    
    if(notAswered.length === 0){/* если нет незаданных вопросов*/
      clearedQuestions = allQuestionsArr.map(theme => {
        if(theme.themeId === id){
          return {
            ...theme,
            questions: theme.questions.map(question => {
              return {
                ...question,
                wasAsked: false
              }
            })
          } 
        }
        else{
          return theme;
        }
      });
     
      notAswered = clearedQuestions.filter(theme => theme.themeId === id)[0].questions;
      allQuestionsArr = [...clearedQuestions];
    }

    let randomIndex = Math.floor(Math.random() * (notAswered.length - 1));
    let currentQuestion = notAswered[randomIndex];

    /* пометить выбранный вопрос как уже заданный, чтобы не задавался в дальнейшем,
       пока все вопросы по данной теме не закончатся (потом заново)
    */
    let changedQuestions = allQuestionsArr.map(theme => {
      if(theme.themeId === id){
        return {
          ...theme,
          questions: theme.questions.map(question => {
            if(question.id !== currentQuestion.id){
              return question;
            }
            else{
              return {
                ...question,
                wasAsked: true
              };
            }
          })
        }
      }
      else{
        return theme;
      }
    });

    this.setState({
      questionTheme: id,
      currentQuestion: currentQuestion,
      allQuestions: changedQuestions,
      currentView: ASK_QUESTION
    });    
  }

  getAnswer = () => {
    soundClickPlay();
    
    this.setState({
      isGetAnswer: true
    });
  }

  answerHandler = (isTruthful) => {
    if(isTruthful){
      soundBellPlay();
  
      let players = this.state.players.map(player => {
        if(player.id === this.state.currentPlayer){
          return {
            ...player,
            points: player.points + 10
          }
        }
        else{
          return player;
        }
      });

      this.setState({
        isTruthful: true,
        showAnswerResult: true,
        players: players,
        //currentPlayer: null
      });

      setTimeout(()=>{
        for(let i = 0; i < this.state.players.length; i++){
          if(this.state.players[i].points === this.state.maxPoints){
            this.setState({
              winner: this.state.players[i],
              currentView: RESULTS,
            })
          }
        }
      });
    }
    else{
      soundErrorPlay();

      this.setState({
        isTruthful: false,
        showAnswerResult: true,
       // currentPlayer: null
      });
    }
  }

  nextQuestionGameStep = () => {
    soundClickPlay();

    this.setState({
      currentView: CHOOSE_PLAYER_SCREEN,
      isTruthful: null,
      showAnswerResult: false,
      isGetAnswer: false,
      currentPlayer: null
    });
  }

  closeQuestion = () => {
    soundClosePlay();

    this.setState({
      currentView: CHOOSE_PLAYER_SCREEN,
      isGetAnswer: false,
      currentPlayer: null,
      isTruthful: null,
      showAnswerResult: false
    });
  }

  startGame = () => {
    soundClickPlay();

    if(this.state.gameType === GAME_FRUITS){
      let players = this.state.players.map(player => {
        let fruits = [];
        for(let i = 0; i < 5; i++){
          fruits[i] = {
            id: i,
            fruit: this.state.fruits[Math.floor(Math.random()*5)],
            completed: false
          }
        }
        return {
          ...player,
          fruits
        }
      });
      this.setState({
        players,
        currentView: this.state.gameType
      });
    }
    else{
      this.setState({
        currentView: CHOOSE_PLAYER_SCREEN
      });
    }    
  }

  startNewGame = () => {
    soundClickPlay();

    let playersUpadted = this.state.players.map(player => {
      return {
        ...player,
        fruits: [],
        points: 0
      }
    });

    this.setState({
      currentView: START,
      gameType: null,
      players: playersUpadted,
      winner: null,
      maxPoints: 100,
      currentPlayer: null,
      questionTheme: null,
      currentQuestion: null,
      isGetAnswer: false,
      isTruthful: null,
      showAnswerResult: false
    });
  }

  render(){
    switch(this.state.currentView){
        case START: // стартовый экран
            return (
                <div className={`gameWrapper bgStart ${this.state.screenOrientation}`}>
                 <StartScreen 
                            screenOrientation={this.state.screenOrientation}
                            changeCurrentView={this.changeCurrentView}
                          />
                </div>
              );
        case RULES:
          return (
              <div className={`gameWrapper rulesWrapper ${this.state.screenOrientation}`}>
               <RulesScreen 
                          screenOrientation={this.state.screenOrientation}
                          changeCurrentView={this.changeCurrentView}
                          startGame={this.startGame}
                      />
              </div>
            );
        case CHOOSE_GAME:
          return (
              <div className={`gameWrapper bgStandart ${this.state.screenOrientation}`}>
               <ChooseGameScreen 
                          screenOrientation={this.state.screenOrientation}
                          changeCurrentView={this.changeCurrentView}
                          chooseGame={this.chooseGame}
                      />
              </div>
            ); 
        case PLAYERS:
          return (
              <div className={`gameWrapper ${this.state.newPlayerId !== null ? 'bgOpenedPopup' : 'bgStandart'} ${this.state.screenOrientation}`}>
               <PlayersScreen 
                          screenOrientation={this.state.screenOrientation}
                          changeCurrentView={this.changeCurrentView}
                          players={this.state.players}
                          deletePlayer={this.deletePlayer}
                          startGame={this.startGame}
                          onAddPlayer={this.onAddPlayer} // для открытия попапа
                          addPlayer={this.addPlayer} // для добавления игрока при введении имени в попапе
                          newPlayerNameText={this.state.newPlayerNameText}
                          onAddPlayerName={this.onAddPlayerName}
                          newPlayerId={this.state.newPlayerId}
                          inputError={this.state.inputError}
                          popupDeletePlayerName={this.popupDeletePlayerName}
                      />
              </div>
            ); 
        case GAME_FRUITS:
          return (
              <div className={`gameWrapper bgStandart ${this.state.screenOrientation}`}>
               <GameFruits 
                          screenOrientation={this.state.screenOrientation}
                          changeCurrentView={this.changeCurrentView}
                          players={this.state.players}
                          chooseFruit={this.chooseFruit}
                      />
              </div>
            );
        case CHANGE_MAX_PONTS:
          return (
              <div className={`gameWrapper bgStandart ${this.state.screenOrientation}`}>
               <ChangeMaxPointsScreen 
                          screenOrientation={this.state.screenOrientation}
                          changeCurrentView={this.changeCurrentView}
                          maxPoints={this.state.maxPoints}
                          changeMaxPoints={this.changeMaxPoints}
                          setMaxPoints={this.setMaxPoints}
                      />
              </div>
            ); 
        case CHOOSE_PLAYER_SCREEN:
          return (
            <div className={`gameWrapper bgStandart ${this.state.screenOrientation}`}>
               <ChoosePlayerScreen 
                          screenOrientation={this.state.screenOrientation}
                          changeCurrentView={this.changeCurrentView}
                          players={this.state.players}
                          choosePlayer={this.choosePlayer}
                      />
              </div>
          );      
        case CHOOSE_THEME:
          return (
              <div className={`gameWrapper bgStandart ${this.state.screenOrientation}`}>
               <ChooseThemeScreen 
                          screenOrientation={this.state.screenOrientation}
                          changeCurrentView={this.changeCurrentView}
                          themesList={this.state.themesList}
                          chooseTheme={this.chooseTheme}
                          player={this.state.players.filter(p => p.id === this.state.currentPlayer)[0]}
                          roundIsOver={this.roundIsOver}
                      />
              </div>
            ); 
        case ASK_QUESTION:
          return (
              <div className={`gameWrapper bgStandart ${this.state.screenOrientation}`}>
               <AskQuestionScreen 
                          screenOrientation={this.state.screenOrientation}
                          changeCurrentView={this.changeCurrentView}
                          questionTheme={this.state.questionTheme}
                          themesList={this.state.themesList}
                          currentQuestion={this.state.currentQuestion}
                          isGetAnswer={this.state.isGetAnswer}
                          getAnswer={this.getAnswer}
                          answerHandler={this.answerHandler}
                          isTruthful={this.state.isTruthful}
                          showAnswerResult={this.state.showAnswerResult}
                          nextQuestionGameStep={this.nextQuestionGameStep}
                          closeQuestion={this.closeQuestion}
                      />
              </div>
            );   
        case RESULTS:
          return (
              <div className={`gameWrapper bgWinner ${this.state.screenOrientation}`}>
               <ResultsScreen 
                          screenOrientation={this.state.screenOrientation}
                          changeCurrentView={this.changeCurrentView}
                          chooseFruit={this.chooseFruit}
                          winner={this.state.winner}
                          startNewGame={this.startNewGame}
                      />
              </div>
            );      
    }
  }
}

const BackArrowButton = (props) => {
  return (
      <button className="backArrowButton" onClick={()=> {props.changeCurrentView(props.path); soundClosePlay()}}>
          <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M32 18L23 27L32 36" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
       </button>
    );
};


const StartScreen = (props) => {
  return (
    <div className="startScreen">
        <div id="preloadImg">
          <img src="/img/standart-screen-bg.jpg" />
          <img src="/img/winner-screen-bg.jpg" />
        </div>

        <img src="/img/startScreenImg/lemon.png" className="startScreenImg lemon" />
        <img src="/img/startScreenImg/cherry.png" className="startScreenImg cherry" />
        <img src="/img/startScreenImg/pear.png" className="startScreenImg pear" />
        <img src="/img/startScreenImg/strawberry.png" className="startScreenImg strawberry" />

        <img className="startScreenLogo" src="/img/logo.png" />

        <div className="startScreenBtns">
          <button className="btn green start" 
                  onClick={()=> {
                    props.changeCurrentView(CHOOSE_GAME);
                    soundClickPlay();
                  }
                  }>Играть</button>
          <button className="btn orange" 
                  onClick={()=> {
                    props.changeCurrentView(RULES);
                    soundClickPlay();
                  }
                }>Правила</button>
        </div>
    </div>
  );
}

const RulesScreen = (props) => {
  return (
    <div className="rulesScreen fruitsGameInnerWrap">
      <div className="topInnerPageNav">
        <BackArrowButton changeCurrentView={props.changeCurrentView} path={START} />
        <span className="topInnerPageNavTitle">Правила</span>
      </div>

      <div className="scrollableContent">
        <div className="rules">
          <div className="rulesGroup">
            <p class="rulesGroupTitle">Фруктовая коллекция:</p>
            <p>Участники по очереди бросают кубик и перемещают свою фишку на количество клеток, соответствующее выпавшему числу. Когда фишка оказывается на фрукте, в приложении нужно отметить этот фрукт крестиком. Побеждает игрок, который первым соберёт полную коллекцию фруктов.</p>
          </div>
          <div className="rulesGroup">
            <p class="rulesGroupTitle">Фруктовая викторина:</p>
            <p>Отвечай на вопросы викторины и первым набери 100 баллов. (количество максимального балла может быть изменено по желанию игроков)</p>
            <p>Поочередно бросайте кубик и перемещайте свою фишку на количество клеток, соответствущее выпавшему числу. Когда фишка попадает на клетку с изображением фрукта, вам необходимо ответить на вопрос, соответствующий тематике этого фрукта. Если ответите правильно, получите 10 баллов. Не удалось ответить - пропусти следующий ход. Игра продолжается до тех пор, пока один из игроков не наберёт 100 баллов. Кроме того, за каждый пройденный круг каждый участник получает дополнительные 10 баллов.</p>
          </div>
        </div>
      </div>
      <div className="rulesScreenStartBtnWrap">
          <button className="btn green w100" 
                  onClick={()=> {
                    props.changeCurrentView(CHOOSE_GAME);
                    soundClickPlay();
                  }
                }>Играть</button>
      </div>
    </div>
  );
};


const ChooseGameScreen = (props) => {
  return (
    <div className="chooseGameScreen fruitsGameInnerWrap">
      <div className="topInnerPageNav">
        <BackArrowButton changeCurrentView={props.changeCurrentView} path={START} />
        <span className="topInnerPageNavTitle">Сложность</span>
      </div>

      <div className="chooseGame">
        <p>Выбери уровень сложности</p>
        <button className="btn orange" 
                onClick={()=>{props.chooseGame(GAME_FRUITS)}}
        >Фруктовая коллекция</button>
        <button className="btn green" 
                onClick={()=>{props.chooseGame(CHANGE_MAX_PONTS)}}
        >Фруктовая викторина</button>
      </div>
    </div>
  );
}

const PlayersScreen = (props) => {
  let players = props.players.map((p, i) => {
    if(p.name.length < 1){
      return (
        <button className={`btn w100 playersListElem ${p.color}`} 
                key={p.id}
                onClick={()=>{props.onAddPlayer(p.id)}}
        >
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="21.35" cy="18.4001" rx="7.375" ry="7.375" fill="white"/>
            <path d="M34.625 21.3501L34.625 30.2001" stroke="white" stroke-width="3" stroke-linecap="round"/>
            <path d="M39.05 25.7751L30.2 25.7751" stroke="white" stroke-width="3" stroke-linecap="round"/>
            <path d="M32.0888 36.6181C32.6599 36.4888 33.0019 35.8959 32.7606 35.3625C31.957 33.5861 30.5849 32.0248 28.7868 30.8587C26.6533 29.4751 24.0392 28.7251 21.35 28.7251C18.6608 28.7251 16.0467 29.4751 13.9132 30.8587C12.1151 32.0248 10.7431 33.5861 9.93947 35.3625C9.69813 35.8959 10.0402 36.4888 10.6112 36.6181L12.5151 37.0493C18.3314 38.3665 24.3686 38.3665 30.185 37.0493L32.0888 36.6181Z" fill="white"/>
          </svg>
          Добавить игрока
        </button>
      );
    }
    else{
      return (
        <div className="addedPlayer" key={p.id}>
          {p.name}
          <button className="deletePlayerBtn" onClick={()=>{props.deletePlayer(p.id)}}>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M26.6668 26.6668L5.3335 5.3335M26.6668 5.3335L5.3335 26.6668" stroke="#B7B7B7" stroke-width="4" stroke-linecap="round"/>
            </svg>
          </button>
        </div>
      );
    }
    return;
  });

  return (
    <div className="playersScreen">
      <div className="topInnerPageNav">
        <BackArrowButton changeCurrentView={props.changeCurrentView} path={START} />
        <span className="topInnerPageNavTitle">Игроки</span>
      </div>

      <div className="scrollableContent">
        <div className="playersScreenWrap">
          <div className="playersScreenTitle">Кто будет играть?</div>

          <div className="playersList">
            {
              players
            }            
          </div>
        </div>
      </div>
      {props.players.filter(p => p.name !== '').length > 1 &&
        <button className="btn green playersScreenStartGameBtn" onClick={props.startGame}>
          Играть
        </button>
      }

      <div className={`popupAddPlayer ${props.newPlayerId !== null ? 'open' : ''}`}
           onClick={props.popupDeletePlayerName}
      >
        <div className="popupAddPlayerInner w100">
          <div className={`popupAddPlayerTitle`}>Введите имя игрока</div>

          <div className={`popupAddPlayerInputWrap ${props.inputError? 'inputError' : ''}`}>
            <input type="text" 
                   className="popupAddPlayerInput"
                   name="playerName" 
                   placeholder="Имя"
                   value={props.newPlayerNameText}
                   onChange={props.onAddPlayerName}
            />
            <button className="popupDeletePlayerNameBtn"
                    onClick={props.popupDeletePlayerName}
            >
              <svg className="" width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.6668 23.6668L2.3335 2.3335M23.6668 2.3335L2.3335 23.6668" stroke="#B7B7B7" stroke-width="4" stroke-linecap="round"/>
              </svg>
            </button>
          </div>
          <button className="btn green addPlayerBtn w100"
                  onClick={props.addPlayer}
            >Принять
          </button>
        </div>
      </div>
    </div>
  );
};


const GameFruits = ({players, chooseFruit, changeCurrentView}) => {
  let playersFruitsElems = players.filter(p => p.name !== "").map(player => {
      let fruitsElems = player.fruits.map((fruit, i) => {
        return (
          <div key={`${player}-fruit-${fruit.id}`} className={`gameFruitItem ${player.fruits[i].completed? 'completed' : ''}`}
               onClick={()=>{chooseFruit(player.id, fruit.id)}} 
          >
            <img src={`/img/fruits/${fruit.fruit}.png`} />
            {
              player.fruits[i].completed &&
              <svg width="40" height="39" viewBox="0 0 40 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M40 38.252L0 -1.74805M40 -1.74805L0 38.252" stroke="#FF0000" stroke-width="4" stroke-linecap="round"/>
              </svg>
            }
          </div>
        );
      });
      return (
        <div className="gameFruitsPlayer" key={player.id}>
          <div className={`gameFruitsPlayerIconName ${player.color}`}>
            <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
              <ellipse cx="20.7584" cy="12.6306" rx="8.625" ry="8.62501" fill="white"/>
              <path d="M33.3173 33.9364C33.9852 33.7852 34.3852 33.0918 34.1029 32.4679C33.1631 30.3905 31.5585 28.5646 29.4556 27.2008C26.9605 25.5827 23.9034 24.7056 20.7584 24.7056C17.6134 24.7056 14.5562 25.5827 12.0611 27.2008C9.95827 28.5646 8.35366 30.3905 7.41383 32.4679C7.13159 33.0918 7.5316 33.7851 8.19943 33.9364L10.426 34.4406C17.2281 35.9811 24.2886 35.9811 31.0908 34.4406L33.3173 33.9364Z" fill="white"/>
            </svg>
            <p>{player.name}</p>
          </div>
          <div className="gameFruitsList">
            {fruitsElems}
          </div>
        </div>
      );
    }
  );

  return (
    <div className="gameFruitsScreen">
      <div className="topInnerPageNav">
        <BackArrowButton changeCurrentView={changeCurrentView} path={START} />
        <span className="topInnerPageNavTitle">Игроки</span>
      </div>

      <div className="gameFruitsPlayers">
          {playersFruitsElems}
      </div>
    </div>
  );
}

const ChangeMaxPointsScreen = (props) => {
  return(
    <div className="changeMaxPointsScreen">
      <div className="topInnerPageNav">
        <BackArrowButton changeCurrentView={props.changeCurrentView} path={CHOOSE_GAME} />
        <span className="topInnerPageNavTitle">Максимальный балл</span>
      </div>

      <div className="changeMaxPointsWrapper">
          <p className="changeMaxPointsTitle">Сколько баллов до&nbsp;победы?</p>
          <div className="changeMaxPoints">
            <button onClick={()=>{props.changeMaxPoints('down')}}>
              <svg width="35" height="59" viewBox="0 0 35 59" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M27.0033 2.18103C18.5493 10.2448 10.0327 18.3763 1.57876 26.44C-0.112032 28.0663 -0.112032 31.59 1.57876 33.2163C10.158 41.3478 18.7372 49.5471 27.3164 57.7463C31.5747 61.8121 37.8369 55.0358 33.5786 50.9701C26.1266 43.9228 18.7372 36.8755 11.3478 29.8282C18.6746 22.8486 25.9387 15.9368 33.2655 8.95728C37.5864 4.89153 31.2616 -1.88473 27.0033 2.18103Z" fill="#B9D9FF"/>
              </svg>
            </button>
            <span>{props.maxPoints}</span>
            <button onClick={()=>{props.changeMaxPoints('up')}}>
              <svg width="35" height="59" viewBox="0 0 35 59" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.9966 2.18103C16.4506 10.2448 24.9672 18.3763 33.4211 26.44C35.1119 28.0663 35.1119 31.59 33.4211 33.2163C24.8419 41.3478 16.2627 49.5471 7.68349 57.7463C3.42519 61.8121 -2.837 55.0358 1.42129 50.9701C8.87331 43.9228 16.2627 36.8755 23.6521 29.8282C16.3253 22.8486 9.06117 15.9368 1.73441 8.95728C-2.58651 4.89153 3.73831 -1.88473 7.9966 2.18103Z" fill="#B9D9FF"/>
              </svg>
            </button>
          </div>
          <button className="btn centerBtn green setMaxPointsBtn" onClick={props.setMaxPoints}>Принять</button>
      </div>
    </div>
  );
}

const ChoosePlayerScreen = (props) => {
  let players = props.players.filter(p => p.name !== "").map((p, i) => {
    return (
      <button className={`btn w100 playersListElem ${p.color}`} 
              key={p.id}
              onClick={()=>{props.choosePlayer(p.id)}}
        >
          <span className="playerName">
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse cx="14.75" cy="11.7998" rx="7.375" ry="7.375" fill="white"/>
              <path d="M25.4888 30.018C26.0598 29.8887 26.4018 29.2958 26.1605 28.7624C25.3569 26.986 23.9848 25.4248 22.1867 24.2586C20.0532 22.875 17.4392 22.125 14.75 22.125C12.0607 22.125 9.44667 22.875 7.31317 24.2586C5.51507 25.4247 4.14302 26.986 3.3394 28.7624C3.09807 29.2958 3.4401 29.8887 4.01114 30.018L5.91501 30.4492C11.7313 31.7664 17.7686 31.7664 23.5849 30.4492L25.4888 30.018Z" fill="white"/>
            </svg>
            {p.name}
          </span>

          <span className="playerPoints">
            {p.points}
          </span>
      </button>
    );
  });

  return (
    <div className="choosePlayersScreen">
      <div className="topInnerPageNav">
        <BackArrowButton changeCurrentView={props.changeCurrentView} path={START} />
        <span className="topInnerPageNavTitle">Игроки</span>
      </div>

      <div className="scrollableContent">
        <div className="playersScreenWrap">
          <div className="playersScreenTitle">Выберите игрока</div>

          <div className="playersList">
            {
              players
            }            
          </div>
        </div>
      </div>
    </div>
  );
}

const ChooseThemeScreen = (props) => {
  let themesList = props.themesList.map(t => {
    return (
        <div key={t.id} className="themesListItem"
             onClick={()=>props.chooseTheme(t.id)}>
          <img src={t.img} />
          <span>{t.title}</span>
        </div>
      );
  });
  return (
    <div className="chooseThemeScreen">
      <div className="topInnerPageNav">
        <BackArrowButton changeCurrentView={props.changeCurrentView} path={START} />
        <span className="topInnerPageNavTitle">Тема</span>
      </div>

      <div className="scrollableContent">
        <div className="themesList">
          {
            themesList
          }
        </div>


        <div className="currentPlayerWrap">
          <div className={`btn playersListElem ${props.player.color}`}>
              <span className="playerName">
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse cx="14.75" cy="11.7998" rx="7.375" ry="7.375" fill="white"/>
                    <path d="M25.4888 30.018C26.0598 29.8887 26.4018 29.2958 26.1605 28.7624C25.3569 26.986 23.9848 25.4248 22.1867 24.2586C20.0532 22.875 17.4392 22.125 14.75 22.125C12.0607 22.125 9.44667 22.875 7.31317 24.2586C5.51507 25.4247 4.14302 26.986 3.3394 28.7624C3.09807 29.2958 3.4401 29.8887 4.01114 30.018L5.91501 30.4492C11.7313 31.7664 17.7686 31.7664 23.5849 30.4492L25.4888 30.018Z" fill="white"/>
                </svg>
                {props.player.name}
              </span>
          </div>
          <button className="btn w100 orange roundIsOverBtn" onClick={props.roundIsOver}>Я прошел круг! <span>+10</span></button>
        </div>
      </div>

      
    </div>
  );
}

const AskQuestionScreen = (props) => {
  //debugger
  let currentTheme = props.themesList[props.questionTheme],
      bottomButton,
      buttons;

  if(!props.showAnswerResult){
    bottomButton = <button className="btn blue big knowAnswerBtn" onClick={props.getAnswer}>Узнать ответ</button>;
  }
  else{
    bottomButton = <button className="btn blue big knowAnswerBtn" onClick={props.nextQuestionGameStep}>Далее</button>
  }

  if(!props.showAnswerResult){
    buttons = <div className="askQuestionBtns">
        <button className="btn red small" onClick={()=>{props.answerHandler(false)}}>Не ответил</button>
        <button className="btn green small" onClick={()=>{props.answerHandler(true)}}>Ответил</button>
      </div>;
   }  

  return (
    <div className="askQuestionScreen">
      <div className="topInnerPageNav">
        <BackArrowButton changeCurrentView={props.changeCurrentView} path={START} />
        <span className="topInnerPageNavTitle">Тема</span>
      </div>

      <div className="questionWrapOuter">
        <div className="questionWrap">
          <button className="askQuestionCloseBtn" onClick={props.closeQuestion}></button>

          <div className="questionImg">
             <img src={currentTheme.img} />
          </div>

          {!props.showAnswerResult &&
            <div className="questionInnerWrap">
              <div className="questionTheme">
                <span class="questionThemeText">Вопрос <span>{currentTheme.inQuestion}</span></span>
              </div>
              <div className="question">{props.currentQuestion.question}</div>
              <div className={`answer ${props.isGetAnswer? 'visible' : ''}`}><span>Ответ: </span>{props.currentQuestion.answer}</div>
            </div>
          } 

          {props.showAnswerResult && props.isTruthful &&
          <div className="answerResult">
            <p className="answerResultHead">МОЛОДЕЦ!</p>
            <p className="answerResultAddPoints">+10 очков</p>
            <p>Сделай 1 шаг вперед</p>
          </div>
          } 
          {props.showAnswerResult && !props.isTruthful &&
          <div className="answerResult">
            <p className="answerResultHead">Не расстраивайся</p>
            <p>Оставайся на месте</p>
            <p>Пропусти следующий ход</p>
          </div>
          } 
          
          {buttons}
        </div>

        {bottomButton}
      </div>
    </div>
  );
}


const ResultsScreen = ({winner, startNewGame}) => {
  soundVictoryPlay();

  return (
    <div className="gameResults">
      <div className="winnerWrap">
          <p className="winnerHead">Победитель</p>
          <div className="winner">
            <div className={`winnerIcon ${winner.color}`}>
              <svg width="81" height="81" viewBox="0 0 81 81" fill="none" xmlns="http://www.w3.org/2000/svg">
                <ellipse cx="40.5328" cy="24.8102" rx="16.6844" ry="16.6844" fill="white"/>
                <path d="M64.8271 66.0246C66.119 65.732 66.8928 64.3907 66.3468 63.1839C64.5288 59.1653 61.4248 55.6332 57.357 52.9951C52.5304 49.8649 46.6166 48.1682 40.5328 48.1682C34.4489 48.1682 28.5351 49.8649 23.7085 52.9951C19.6407 55.6332 16.5367 59.1653 14.7187 63.1839C14.1727 64.3907 14.9465 65.732 16.2384 66.0245L20.5455 67C33.7037 69.9799 47.3618 69.9799 60.52 67L64.8271 66.0246Z" fill="white"/>
              </svg>
            </div>
            <p className="winnerName">{winner.name}</p>
          </div>
      </div>
      <button className="btn orange w100 gameResultsToMainScreenBtn" onClick={startNewGame}>
          На главную
      </button>
    </div>
  );
}

ReactDOM.render(
  <Game />,
  document.getElementById('app')
);