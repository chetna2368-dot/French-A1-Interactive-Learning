const audioEnabled = 'speechSynthesis' in window;

const alphabetQuestions = [
  {
    q: 'Quelle est cette lettre ?',
    letter: 'B',
    options: ['Bé', 'Cé', 'Dé', 'Effe'],
    answer: 'Bé',
    audio: 'Bé'
  },
  {
    q: 'Quelle est cette lettre ?',
    letter: 'C',
    options: ['A', 'Cé', 'Erre', 'Pé'],
    answer: 'Cé',
    audio: 'Cé'
  },
  {
    q: 'Quelle est cette lettre ?',
    letter: 'A',
    options: ['A', 'Bé', 'Dé', 'I'],
    answer: 'A',
    audio: 'A'
  },
  {
    q: 'Quelle est cette lettre ?',
    letter: 'F',
    options: ['Effe', 'Elle', 'Gue', 'Pé'],
    answer: 'Effe',
    audio: 'Effe'
  },
  {
    q: 'Quelle est cette lettre ?',
    letter: 'M',
    options: ['Emme', 'Esse', 'O', 'Té'],
    answer: 'Emme',
    audio: 'Emme'
  },
  {
    q: 'Quelle est cette lettre ?',
    letter: 'R',
    options: ['Erre', 'A', 'Y', 'Zed'],
    answer: 'Erre',
    audio: 'Erre'
  },
  {
    q: 'Quelle est cette lettre ?',
    letter: 'S',
    options: ['Esse', 'Elle', 'U', 'Pé'],
    answer: 'Esse',
    audio: 'Esse'
  },
  {
    q: 'Quelle est cette lettre ?',
    letter: 'P',
    options: ['Pé', 'K', 'Gue', 'I'],
    answer: 'Pé',
    audio: 'Pé'
  },
  {
    q: 'Quelle est cette lettre ?',
    letter: 'L',
    options: ['Elle', 'A', 'Effe', 'Té'],
    answer: 'Elle',
    audio: 'Elle'
  },
  {
    q: 'Quelle est cette lettre ?',
    letter: 'D',
    options: ['Dé', 'Bé', 'Cé', 'Hache'],
    answer: 'Dé',
    audio: 'Dé'
  }
];

const letterWordQuestions = [
  {
    q: 'Choisis le mot qui commence par la lettre A.',
    letter: 'A',
    options: ['🐝 abeille', '🍎 pomme', '🐱 chat'],
    answer: '🐝 abeille',
    audio: 'abeille'
  },
  {
    q: 'Choisis le mot qui commence par la lettre B.',
    letter: 'B',
    options: ['🧒 bébé', '🐠 poisson', '🌞 soleil'],
    answer: '🧒 bébé',
    audio: 'bébé'
  },
  {
    q: 'Choisis le mot qui commence par la lettre C.',
    letter: 'C',
    options: ['🐱 chat', '🍓 fraise', '🌧️ pluie'],
    answer: '🐱 chat',
    audio: 'chat'
  },
  {
    q: 'Choisis le mot qui commence par la lettre F.',
    letter: 'F',
    options: ['🌼 fleur', '🚗 voiture', '🍎 pomme'],
    answer: '🌼 fleur',
    audio: 'fleur'
  }
];

const numberQuestions = [
  {
    q: 'Comment dit-on 42 en français ?',
    options: ['quarante-deux', 'soixante-deux', 'vingt-deux', 'quarante-cinq'],
    answer: 'quarante-deux',
    audio: 'quarante-deux'
  },
  {
    q: 'Comment dit-on 78 en français ?',
    options: ['soixante-dix-huit', 'quatre-vingt-huit', 'soixante-huit', 'quatre-vingt-dix-huit'],
    answer: 'soixante-dix-huit',
    audio: 'soixante-dix-huit'
  },
  {
    q: 'Quel est le bon nombre pour « soixante-dix » ?',
    options: ['60', '70', '80', '90'],
    answer: '70',
    audio: 'soixante-dix'
  },
  {
    q: 'Quel est le bon nombre pour « quatre-vingt-dix » ?',
    options: ['80', '90', '100', '70'],
    answer: '90',
    audio: 'quatre-vingt-dix'
  },
  {
    q: 'Complète : 20 — 21 — ___ — 23 — 24',
    options: ['22', '20', '25', '26'],
    answer: '22',
    audio: 'vingt-deux'
  },
  {
    q: 'Choisis le bon nombre : 25',
    options: ['vingt-cinq', 'vingt-deux', 'quarante-cinq', 'trente-cinq'],
    answer: 'vingt-cinq',
    audio: 'vingt-cinq'
  },
  {
    q: 'Quel est le bon nombre pour « soixante-quinze » ?',
    options: ['75', '65', '85', '95'],
    answer: '75',
    audio: 'soixante-quinze'
  },
  {
    q: 'Quel est le bon nombre pour « quatre-vingts » ?',
    options: ['80', '60', '90', '70'],
    answer: '80',
    audio: 'quatre-vingts'
  }
];

const dayQuestions = [
  {
    q: 'Mets les jours dans l’ordre.',
    options: ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi', 'dimanche'],
    answer: ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi', 'dimanche'],
    type: 'order'
  },
  {
    q: 'Quel jour vient après mercredi ?',
    options: ['lundi', 'jeudi', 'vendredi', 'samedi'],
    answer: 'jeudi',
    audio: 'jeudi'
  },
  {
    q: 'Quel jour vient avant vendredi ?',
    options: ['jeudi', 'samedi', 'dimanche', 'lundi'],
    answer: 'jeudi',
    audio: 'jeudi'
  },
  {
    q: 'Quel jour vient après samedi ?',
    options: ['dimanche', 'lundi', 'mardi', 'mercredi'],
    answer: 'dimanche',
    audio: 'dimanche'
  }
];

const monthQuestions = [
  {
    q: 'Mets les mois dans l’ordre.',
    options: ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'],
    answer: ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'],
    type: 'order'
  },
  {
    q: 'Complète : janvier → février → ___ → avril',
    options: ['mai', 'mars', 'juin', 'juillet'],
    answer: 'mars',
    audio: 'mars'
  },
  {
    q: 'Quel est le 7e mois de l’année ?',
    options: ['juin', 'juillet', 'août', 'mai'],
    answer: 'juillet',
    audio: 'juillet'
  },
  {
    q: 'Quel est le premier mois de l’année ?',
    options: ['janvier', 'février', 'mars', 'avril'],
    answer: 'janvier',
    audio: 'janvier'
  }
];

const greetingQuestions = [
  {
    q: 'Salut ! Est-ce formel ou informel ?',
    options: ['Formel', 'Informel'],
    answer: 'Informel',
    audio: 'informel'
  },
  {
    q: 'Bonjour, Madame. Est-ce formel ou informel ?',
    options: ['Formel', 'Informel'],
    answer: 'Formel',
    audio: 'formel'
  },
  {
    q: 'Choisis la bonne réponse : « Très bien, merci. »',
    options: ['Bonjour !', 'Très bien, merci.', 'À plus !', 'Bonne journée.'],
    answer: 'Très bien, merci.',
    audio: 'très bien merci'
  },
  {
    q: 'Quel est le bon départ ? « À bientôt ! »',
    options: ['Bonjour', 'Au revoir', 'Salut', 'Bonne nuit'],
    answer: 'Au revoir',
    audio: 'au revoir'
  }
];

const verbQuestions = [
  {
    q: 'Je ___ français.',
    options: ['es', 'suis', 'est', 'sont'],
    answer: 'suis',
    audio: 'je suis'
  },
  {
    q: 'Tu ___ content ?',
    options: ['es', 'suis', 'sommes', 'êtes'],
    answer: 'es',
    audio: 'tu es'
  },
  {
    q: 'J’___ 15 ans.',
    options: ['suis', 'ai', 'as', 'est'],
    answer: 'ai',
    audio: 'j’ai'
  },
  {
    q: 'Je ___ Emma.',
    options: ['m’appelle', 'appelle', 's’appelle', 'nous appelons'],
    answer: 'm’appelle',
    audio: 'je m’appelle'
  },
  {
    q: 'Il ___ Paul.',
    options: ['m’appelle', 's’appelle', 't’appelles', 'nous appelons'],
    answer: 's’appelle',
    audio: 'il s’appelle'
  }
];

const introQuestions = [
  {
    q: 'Complète : Bonjour ! Je ______ Emma.',
    options: ['suis', 'm’appelle', 'ai', 'vais'],
    answer: 'm’appelle',
    audio: 'je m’appelle'
  },
  {
    q: 'Complète : Je ______ Lucas.',
    options: ['m’appelle', 'suis', 'viens', 'vais'],
    answer: 'm’appelle',
    audio: 'je m’appelle'
  },
  {
    q: 'Quelle est la bonne phrase ?',
    options: ['Je suis Emma.', 'Je m’appelle Emma.', 'Je ai Emma.', 'Je suis de Emma.'],
    answer: 'Je m’appelle Emma.',
    audio: 'je m’appelle emma'
  }
];

const personalQuestions = [
  {
    q: 'Comment tu t’appelles ?',
    options: ['Je m’appelle Emma.', 'Je suis France.', 'J’ai 12 ans.', 'Je vais bien.'],
    answer: 'Je m’appelle Emma.',
    audio: 'je m’appelle emma'
  },
  {
    q: 'Tu viens d’où ?',
    options: ['Je viens de France.', 'Je suis professeur.', 'J’ai 20 ans.', 'Je m’appelle Sophie.'],
    answer: 'Je viens de France.',
    audio: 'je viens de france'
  },
  {
    q: 'Quelle est ta nationalité ?',
    options: ['Je suis française.', 'Je viens de France.', 'Je vais bien.', 'Je m’appelle Julie.'],
    answer: 'Je suis française.',
    audio: 'je suis française'
  }
];

const ageQuestions = [
  {
    q: 'Quel âge as-tu ?',
    options: ['J’ai 15 ans.', 'Je suis 15 ans.', 'Je vais 15 ans.', 'J’ai 15.'],
    answer: 'J’ai 15 ans.',
    audio: 'j’ai quinze ans'
  },
  {
    q: 'Quand es-tu né(e) ?',
    options: ['Je suis né(e) le 12 mars 2010.', 'J’ai 12 ans.', 'Je viens de France.', 'Je suis professeur.'],
    answer: 'Je suis né(e) le 12 mars 2010.',
    audio: 'je suis né le douze mars deux mille dix'
  },
  {
    q: 'Le bon verbe pour l’âge est ?',
    options: ['être', 'avoir', 'faire', 'aller'],
    answer: 'avoir',
    audio: 'avoir'
  }
];

const phoneQuestions = [
  {
    q: 'Quel est ce numéro ? 06 12 34 56 78',
    options: ['zéro six douze trente-quatre cinquante-six soixante-dix-huit', 'six douze trente-quatre cinquante-six soixante-dix-huit', 'zéro six double un quatre', 'six seize'],
    answer: 'zéro six douze trente-quatre cinquante-six soixante-dix-huit',
    audio: 'zéro six douze trente-quatre cinquante-six soixante-dix-huit'
  },
  {
    q: 'Quel est le bon début de phrase ?',
    options: ['Mon numéro de téléphone est...', 'Je suis 06 12.', 'J’ai 06.', 'Je viens de 06.'],
    answer: 'Mon numéro de téléphone est...',
    audio: 'mon numéro de téléphone est'
  }
];

const jobQuestions = [
  {
    q: 'Quelle est la bonne réponse ? « Je suis médecin. »',
    options: ['Je suis professeur.', 'Je suis médecin.', 'Je viens de France.', 'Je suis 20 ans.'],
    answer: 'Je suis médecin.',
    audio: 'je suis médecin'
  },
  {
    q: 'Quelle est ta profession ?',
    options: ['Je suis étudiant(e).', 'Je viens de France.', 'Je m’appelle Emma.', 'Je suis célibataire.'],
    answer: 'Je suis étudiant(e).',
    audio: 'je suis étudiant'
  },
  {
    q: 'Qu’est-ce que tu fais ?',
    options: ['Je suis professeur.', 'Je vais bien.', 'Je suis né en France.', 'Je m’appelle Paul.'],
    answer: 'Je suis professeur.',
    audio: 'je suis professeur'
  }
];

const familyQuestions = [
  {
    q: 'Comment s’appelle votre mari ?',
    options: ['Mon mari s’appelle Paul.', 'Je suis marié.', 'Je viens de France.', 'Je suis professeur.'],
    answer: 'Mon mari s’appelle Paul.',
    audio: 'mon mari s’appelle paul'
  },
  {
    q: 'Comment s’appelle votre femme ?',
    options: ['Ma femme s’appelle Sophie.', 'Je suis célibataire.', 'J’ai 20 ans.', 'Je suis français.'],
    answer: 'Ma femme s’appelle Sophie.',
    audio: 'ma femme s’appelle sophie'
  },
  {
    q: 'Quel est le métier de votre mari ?',
    options: ['Mon mari est médecin.', 'Mon mari est France.', 'Mon mari vient de France.', 'Mon mari a 20 ans.'],
    answer: 'Mon mari est médecin.',
    audio: 'mon mari est médecin'
  }
];

const finalQuiz = [
  {
    q: 'Complète : Nous ___ contents.',
    options: ['sommes', 'suis', 'avez', 'ai'],
    answer: 'sommes',
    audio: 'nous sommes'
  },
  {
    q: 'Quel est le bon mot ? « ___ va ? »',
    options: ['Comment', 'Ça', 'Bonjour', 'Oui'],
    answer: 'Ça',
    audio: 'ça va'
  },
  {
    q: 'Quel jour vient après mardi ?',
    options: ['lundi', 'mercredi', 'jeudi', 'samedi'],
    answer: 'mercredi',
    audio: 'mercredi'
  },
  {
    q: 'Quel mois vient après mars ?',
    options: ['avril', 'janvier', 'février', 'juin'],
    answer: 'avril',
    audio: 'avril'
  }
];

const wheelCategories = [
  'Alphabet',
  'Nombres',
  'Jours',
  'Mois',
  'Salutations',
  'Verbes',
  'Présentation',
  'Profession'
];

const whoAmI = [
  {
    clue: 'Je suis une fille. J’ai 15 ans. Je viens de France. Je suis étudiante.',
    answer: 'Emma',
    options: ['Emma', 'Paul', 'Sophie', 'Lucas']
  },
  {
    clue: 'Je suis un garçon. Je suis médecin. Je suis marié. Mon nom est Luc.',
    answer: 'Luc',
    options: ['Luc', 'Emma', 'Julie', 'Nina']
  },
  {
    clue: 'Je suis professeur. Je suis française. Je parle français. Je suis contente.',
    answer: 'Madame',
    options: ['Madame', 'Panda', 'Le chat', 'Le train']
  }
];

const sentenceBuilderWords = [
  ['Je', 'Tu', 'Nous', 'Il'],
  ['m’appelle', 't’appelles', 'sommes', 'est'],
  ['Emma', 'Sophie', 'Paul', 'Léa'],
  ['!', '.', '?']
];

const correctIncorrectItems = [
  {
    sentence: '❌ Je suis 15 ans.',
    correct: '✅ J’ai 15 ans.'
  },
  {
    sentence: '❌ Je m’appelle France.',
    correct: '✅ Je viens de France.'
  },
  {
    sentence: '❌ Bonjour ! Je m’appelle Sophie.',
    correct: '✅ Bonjour ! Je m’appelle Sophie.'
  }
];

function speak(text) {
  if (!audioEnabled) {
    alert('La synthèse vocale n’est pas disponible dans ce navigateur.');
    return;
  }

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'fr-FR';
  utterance.rate = 0.9;
  utterance.pitch = 1;
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(utterance);
}

function createMcQuestion(item, targetId) {
  const target = document.getElementById(targetId);
  const card = document.createElement('div');
  card.className = 'quiz-card';

  const questionBox = document.createElement('div');
  questionBox.className = 'question-box';

  const title = document.createElement('h3');
  title.textContent = 'Question';

  const prompt = document.createElement('p');
  prompt.className = 'question-text';
  prompt.textContent = item.q;

  questionBox.appendChild(title);
  questionBox.appendChild(prompt);

  if (item.letter) {
    const big = document.createElement('span');
    big.className = 'letter-big';
    big.textContent = item.letter;
    questionBox.appendChild(big);
  }

  const optionList = document.createElement('div');
  optionList.className = 'option-list';

  const result = document.createElement('div');
  result.className = 'result';

  const answerBox = document.createElement('div');
  answerBox.className = 'answer-box';

  item.options.forEach((option) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'option-btn';
    button.textContent = option;

    button.addEventListener('click', () => {
      const isCorrect = option === item.answer;
      const siblings = optionList.querySelectorAll('.option-btn');

      siblings.forEach((sib) => {
        sib.disabled = true;
        if (sib.textContent === item.answer) {
          sib.classList.add('correct');
        }
        if (sib !== button && sib.textContent === option && !isCorrect) {
          sib.classList.add('wrong');
        }
      });

      button.classList.add(isCorrect ? 'correct' : 'wrong');

      result.textContent = isCorrect ? '✅ Correct !' : '❌ Pas encore !';
      result.className = `result ${isCorrect ? 'success' : 'error'}`;
      answerBox.textContent = 'Réponse : ' + item.answer;
      answerBox.classList.add('show');
    });

    optionList.appendChild(button);
  });

  const actions = document.createElement('div');
  actions.className = 'card-actions';

  const soundBtn = document.createElement('button');
  soundBtn.type = 'button';
  soundBtn.className = 'audio-btn';
  soundBtn.textContent = '🔊 Écoute';
  soundBtn.addEventListener('click', () => speak(item.audio || item.answer || item.q));

  const revealBtn = document.createElement('button');
  revealBtn.type = 'button';
  revealBtn.className = 'secondary-btn';
  revealBtn.textContent = 'Voir la réponse';
  revealBtn.addEventListener('click', () => {
    answerBox.textContent = 'Réponse : ' + item.answer;
    answerBox.classList.add('show');
  });

  actions.appendChild(soundBtn);
  actions.appendChild(revealBtn);

  card.appendChild(questionBox);
  card.appendChild(optionList);
  card.appendChild(result);
  card.appendChild(answerBox);
  card.appendChild(actions);
  target.appendChild(card);
}

function createOrderCard(item, targetId) {
  const target = document.getElementById(targetId);
  const card = document.createElement('div');
  card.className = 'quiz-card';

  const questionBox = document.createElement('div');
  questionBox.className = 'question-box';
  questionBox.innerHTML = `<h3>Question</h3><p class="question-text">${item.q}</p>`;

  const words = document.createElement('div');
  const answerLine = document.createElement('div');
  answerLine.className = 'answer-box show';
  answerLine.textContent = 'Réponse : ' + item.answer.join(' → ');

  item.options.forEach((word) => {
    const bubble = document.createElement('span');
    bubble.className = 'word-bubble';
    bubble.textContent = word;
    words.appendChild(bubble);
  });

  const actions = document.createElement('div');
  actions.className = 'card-actions';

  const soundBtn = document.createElement('button');
  soundBtn.type = 'button';
  soundBtn.className = 'audio-btn';
  soundBtn.textContent = '🔊 Écoute';
  soundBtn.addEventListener('click', () => speak(item.answer.join(' ')));

  actions.appendChild(soundBtn);

  card.appendChild(questionBox);
  card.appendChild(words);
  card.appendChild(answerLine);
  card.appendChild(actions);
  target.appendChild(card);
}

function renderNumberChart() {
  const numberChart = document.getElementById('numberChart');
  const numbers = [
    '0 zéro', '1 un', '2 deux', '3 trois', '4 quatre', '5 cinq',
    '6 six', '7 sept', '8 huit', '9 neuf', '10 dix',
    '11 onze', '12 douze', '13 treize', '14 quatorze', '15 quinze',
    '16 seize', '17 dix-sept', '18 dix-huit', '19 dix-neuf', '20 vingt',
    '21 vingt et un', '22 vingt-deux', '23 vingt-trois', '24 vingt-quatre',
    '25 vingt-cinq', '26 vingt-six', '27 vingt-sept', '28 vingt-huit', '29 vingt-neuf',
    '30 trente', '31 trente et un', '32 trente-deux', '33 trente-trois', '34 trente-quatre',
    '35 trente-cinq', '36 trente-six', '37 trente-sept', '38 trente-huit', '39 trente-neuf',
    '40 quarante', '41 quarante et un', '42 quarante-deux', '43 quarante-trois', '44 quarante-quatre',
    '45 quarante-cinq', '46 quarante-six', '47 quarante-sept', '48 quarante-huit', '49 quarante-neuf',
    '50 cinquante', '60 soixante', '70 soixante-dix', '80 quatre-vingts', '90 quatre-vingt-dix', '100 cent'
  ];

  numbers.forEach((value) => {
    const pill = document.createElement('div');
    pill.className = 'number-pill';
    pill.textContent = value;
    numberChart.appendChild(pill);
  });
}

function renderWheel() {
  const wheel = document.getElementById('wheel');
  const result = document.getElementById('wheelResult');
  const spinBtn = document.getElementById('spinWheel');

  spinBtn.addEventListener('click', () => {
    const selected = wheelCategories[Math.floor(Math.random() * wheelCategories.length)];
    result.textContent = `Catégorie : ${selected}`;
    result.className = 'result-mini success';

    if (selected === 'Alphabet') {
      speak('Alphabet');
    } else if (selected === 'Nombres') {
      speak('Nombres');
    } else if (selected === 'Jours') {
      speak('Jours de la semaine');
    } else if (selected === 'Mois') {
      speak('Mois de l’année');
    } else {
      speak(selected);
    }
  });
}

function renderWhoAmI() {
  const wrap = document.getElementById('whoAmI');
  let index = 0;

  function renderCard() {
    const item = whoAmI[index];
    wrap.innerHTML = '';

    const clue = document.createElement('div');
    clue.className = 'clue';
    clue.textContent = item.clue;
    wrap.appendChild(clue);

    const row = document.createElement('div');
    row.className = 'answer-row';

    item.options.forEach((option) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'answer-chip';
      btn.textContent = option;
      btn.addEventListener('click', () => {
        const isCorrect = option === item.answer;
        btn.style.background = isCorrect ? '#e9fff2' : '#fff1f1';
        btn.style.border = `2px solid ${isCorrect ? '#69d49a' : '#ff9c9c'}`;

        const note = document.createElement('div');
        note.className = `result-mini ${isCorrect ? 'success' : 'error'}`;
        note.textContent = isCorrect ? '✅ Correct !' : `❌ La réponse est : ${item.answer}`;
        wrap.appendChild(note);

        setTimeout(() => {
          index = (index + 1) % whoAmI.length;
          renderCard();
        }, 1200);
      });
      row.appendChild(btn);
    });

    wrap.appendChild(row);
  }

  renderCard();
}

function renderSentenceBuilder() {
  const wrap = document.getElementById('sentenceBuilder');
  const chosenWords = [];
  const builderLine = document.createElement('div');
  builderLine.className = 'builder-line';

  const result = document.createElement('div');
  result.className = 'result';

  const groups = sentenceBuilderWords;

  groups.forEach((group) => {
    const groupWrap = document.createElement('div');
    groupWrap.className = 'answer-row';

    group.forEach((word) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'word-btn';
      btn.textContent = word;
      btn.addEventListener('click', () => {
        chosenWords.push(word);
        const chip = document.createElement('span');
        chip.className = 'word-bubble';
        chip.textContent = word;
        builderLine.appendChild(chip);
      });
      groupWrap.appendChild(btn);
    });

    wrap.appendChild(groupWrap);
  });

  const submit = document.createElement('button');
  submit.type = 'button';
  submit.className = 'primary-btn';
  submit.textContent = 'Vérifier';
  submit.addEventListener('click', () => {
    const built = chosenWords.join(' ');
    const correct = 'Je m’appelle Emma !';
    if (built === correct) {
      result.textContent = '✅ Correct !';
      result.className = 'result success';
    } else {
      result.textContent = '❌ Essaye encore. La bonne phrase est : Je m’appelle Emma !';
      result.className = 'result error';
    }
  });

  wrap.appendChild(builderLine);
  wrap.appendChild(submit);
  wrap.appendChild(result);
}

function renderCorrectIncorrect() {
  const wrap = document.getElementById('correctIncorrect');
  const item = correctIncorrectItems[Math.floor(Math.random() * correctIncorrectItems.length)];

  const sentence = document.createElement('div');
  sentence.className = 'clue';
  sentence.textContent = item.sentence;

  const btn = document.createElement('button');
  btn.type = 'button';
  btn.className = 'primary-btn';
  btn.textContent = 'Afficher la bonne réponse';

  const out = document.createElement('div');
  out.className = 'result';

  btn.addEventListener('click', () => {
    out.textContent = item.correct;
    out.className = 'result success';
    speak(item.correct.replace(/✅ /, ''));
  });

  wrap.appendChild(sentence);
  wrap.appendChild(btn);
  wrap.appendChild(out);
}

function renderAll() {
  renderNumberChart();

  alphabetQuestions.forEach((item) => createMcQuestion(item, 'alphabetQuiz'));
  letterWordQuestions.forEach((item) => createMcQuestion(item, 'alphabetQuiz'));
  numberQuestions.forEach((item) => createMcQuestion(item, 'numberQuiz'));
  dayQuestions.forEach((item) => item.type === 'order' ? createOrderCard(item, 'daysQuiz') : createMcQuestion(item, 'daysQuiz'));
  monthQuestions.forEach((item) => item.type === 'order' ? createOrderCard(item, 'monthsQuiz') : createMcQuestion(item, 'monthsQuiz'));
  greetingQuestions.forEach((item) => createMcQuestion(item, 'greetingsQuiz'));
  verbQuestions.forEach((item) => createMcQuestion(item, 'verbsQuiz'));
  introQuestions.forEach((item) => createMcQuestion(item, 'introQuiz'));
  personalQuestions.forEach((item) => createMcQuestion(item, 'personalQuiz'));
  ageQuestions.forEach((item) => createMcQuestion(item, 'ageQuiz'));
  phoneQuestions.forEach((item) => createMcQuestion(item, 'phoneQuiz'));
  jobQuestions.forEach((item) => createMcQuestion(item, 'jobQuiz'));
  familyQuestions.forEach((item) => createMcQuestion(item, 'familyQuiz'));
  finalQuiz.forEach((item) => createMcQuestion(item, 'finalQuiz'));

  renderWheel();
  renderWhoAmI();
  renderSentenceBuilder();
  renderCorrectIncorrect();
}

renderAll();
