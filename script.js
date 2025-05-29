let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}



/* Flying words js */

const words = [
  'Python',
  'My Skills',
  'Storyboarding',
  'Presentation',
  'Client Engagement',
  'API',
  'Website Development',
  'Digital Marketing',
  'SQL',
  'Excel',
  'Power BI',
  'Pandas',
  'EDA',
  'A/B Testing',
  'Data Cleaning',
  'select * from World',
  'Machine Learning',
  'JOIN',
  'GROUP BY',
  'VLOOKUP',
  'HLOOKUP',
  'Pivot Table',
  'Power BI DAX',
  'Excel Formulas',
  'Functions',
  'Regression',
  'Charts',
  'KPI',
  'Insights',
  'Automation',
  'Forecasting',
  'Data Modeling',
  'Exploratory Analysis',
  'Conditional Formatting',
  'INDEX MATCH',
  'Time Series',
  'Segmentation',
  'Jupyter',
  'GCP',
  'AWS',
  'Big Data',
  'select * from table',
  '=sum(Formulae)'
];

const colors = [
  'word-blue',
  'word-purple',
  'word-red',
  'word-green',
  'word-yellow',
  'word-orange',
  'word-cyan',
  'word-pink'
];


function createFlyingWord() {
  const container = document.getElementById('flying-words');
  const word = document.createElement('div');
  
  word.className = `flying-word ${colors[Math.floor(Math.random() * colors.length)]}`;
  word.textContent = words[Math.floor(Math.random() * words.length)];
  word.style.top = Math.random() * 80 + '%';
  word.style.fontSize = (16 + Math.random() * 8) + 'px';
  
  container.appendChild(word);
  
  // Remove word after animation
  setTimeout(() => {
    if (word.parentNode) {
      word.parentNode.removeChild(word);
    }
  }, 8000);
}

// Create a new word every 2 seconds
setInterval(createFlyingWord, 2000);

// Start with a few words
for (let i = 0; i < 3; i++) {
  setTimeout(createFlyingWord, i * 500);
}


// Typing Text Code

const typed = new Typed('.multiple-text', {
    strings: ['Data Scientist.', 'Data Analyst.', 'Business Analyst,'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1200,
    loop: true,
  });

