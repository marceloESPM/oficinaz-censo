const questions = [
  {
    title: "Ordem de Serviço",
    text: "Como você registra o que vai ser feito no carro do cliente?",
    options: [
      { text: "Combinamos de boca ou anoto num bloquinho/talão.", value: 1 },
      { text: "Preencho uma ficha no computador e imprimo.", value: 2 },
      { text: "Abro uma OS num sistema que já puxa o histórico do veículo e do cliente.", value: 3 }
    ]
  },
  {
    title: "Orçamento e Aprovação",
    text: "Como o cliente recebe e aprova o orçamento?",
    options: [
      { text: "Passo o valor por telefone ou mando um áudio no WhatsApp.", value: 1 },
      { text: "Digito a descrição do serviço e as peças no WhatsApp e espero o 'ok' do cliente.", value: 2 },
      { text: "Envio um link onde ele vê tudo detalhado e aprova com um clique.", value: 3 }
    ]
  },
  {
    title: "Kits de Revisão",
    text: "Sua oficina trabalha com kits prontos de revisão (troca de óleo, revisão de freios, etc.)?",
    options: [
      { text: "Não, monto o orçamento do zero toda vez que aparece uma revisão.", value: 1 },
      { text: "Tenho uma lista de preços anotada, mas preciso refazer o cálculo a cada carro.", value: 2 },
      { text: "Tenho kits pré-cadastrados que já puxam peças, serviços e valores na hora.", value: 3 }
    ]
  },
  {
    title: "Peças, Margem e Nota Fiscal",
    text: "Como você controla a margem de lucro das peças e a separação para a emissão de notas?",
    options: [
      { text: "Compro no distribuidor e ponho o preço meio de cabeça. Nota fiscal só se o cliente pedir muito.", value: 1 },
      { text: "Anoto na OS o preço de custo e calculo na hora. Na hora da nota, refaço tudo no site da Prefeitura.", value: 2 },
      { text: "Lanço a peça, o sistema calcula a margem exata e já separa automaticamente o que é Serviço (NFS-e) do que é Peça (NF-e).", value: 3 }
    ]
  },
  {
    title: "Fechamento de Caixa",
    text: "Como você sabe se o dia/mês deu lucro ou prejuízo?",
    options: [
      { text: "Olho o saldo do banco. Se tem dinheiro, deu lucro.", value: 1 },
      { text: "Lanço tudo numa planilha de Excel, mas as vezes esqueço algum comprovante.", value: 2 },
      { text: "O caixa é integrado com a OS. Finalizou o serviço, o dinheiro entra no DRE automático.", value: 3 }
    ]
  },
  {
    title: "Comissionamento",
    text: "Como é calculado o pagamento dos mecânicos?",
    options: [
      { text: "Pago um valor fixo, ou anoto num caderno o que cada um fez na semana.", value: 1 },
      { text: "Vou somando as OS de papel e jogo numa planilha no final do mês. Dá um trabalhão.", value: 2 },
      { text: "O sistema calcula a comissão exata automaticamente a cada OS finalizada.", value: 3 }
    ]
  },
  {
    title: "Histórico e Retorno Predivito",
    text: "Como você sabe que está na hora do cliente voltar para trocar o óleo?",
    options: [
      { text: "Coloco o adesivo no vidro e rezo para ele voltar.", value: 1 },
      { text: "Tento puxar pela memória ou olho as OS antigas quando tenho tempo.", value: 2 },
      { text: "O sistema me avisa quem está vencendo a quilometragem e eu chamo no WhatsApp.", value: 3 }
    ]
  },
  {
    title: "Cadastro do Veículo",
    text: "Como você puxa os dados do carro quando ele chega?",
    options: [
      { text: "Pergunto tudo pro cliente e anoto (chassi, motor, ano).", value: 1 },
      { text: "Vou no Google tentar achar as especificações do modelo.", value: 2 },
      { text: "Digito só a placa e o sistema preenche tudo sozinho.", value: 3 }
    ]
  },
  {
    title: "Estoque e Compras",
    text: "Como você sabe o que precisa comprar no distribuidor?",
    options: [
      { text: "Quando o mecânico grita que acabou o filtro, eu ligo pra comprar.", value: 1 },
      { text: "Faço uma contagem visual toda semana e anoto o que falta.", value: 2 },
      { text: "O sistema avisa o estoque mínimo e me ajuda a não comprar peças repetidas.", value: 3 }
    ]
  },
  {
    title: "Inspeção Veicular (Checklist)",
    text: "Como você faz o checklist de entrada para evitar que o cliente diga 'esse risco não estava aí'?",
    options: [
      { text: "Não faço, confio no olho e na palavra.", value: 1 },
      { text: "Anoto numa folha de papel e dou pro cliente assinar.", value: 2 },
      { text: "Faço um checklist digital com fotos direto no celular/tablet antes de abrir a OS.", value: 3 }
    ]
  }
];

const personas = [
  {
    max: 16,
    title: 'O Apagador de Incêndios',
    icon: '<i data-lucide="alert-triangle" style="width:80px; height:80px; color:var(--critical)"></i>',
    desc: 'Você manda muito bem na mecânica, mas a correria do dia a dia está sugando o seu lucro. A falta de organização no escritório faz o esforço da sua equipe escorrer pelo ralo. É hora de arrumar a casa e ver a cor do dinheiro.',
    actions: [
      { title: 'Recepção Rápida', desc: 'Chega de anotar em papel. Pela placa do carro, o sistema já preenche tudo pra você. Menos tempo no balcão e mais tempo produzindo.' },
      { title: 'Garantir o Lucro das Peças', desc: 'Lançou a peça na OS, o sistema já calcula o preço certo. Assim, você nunca mais esquece de cobrar sua margem de lucro.' },
      { title: 'Caixa sem Dor de Cabeça', desc: 'Ao fechar uma OS, o dinheiro cai direto no fluxo do sistema. Acabou o sofrimento de não saber quem pagou e quem ficou devendo.' }
    ]
  },
  {
    max: 24,
    title: 'O Polvo das Planilhas',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="80" height="80" fill="currentColor" style="color:var(--attention)"><path d="M12 2a6 6 0 0 0-6 6v3a2 2 0 0 0-1 1.73V18a1 1 0 0 0 2 0v-4h1v5a1 1 0 0 0 2 0v-5h1v6a1 1 0 0 0 2 0v-6h1v6a1 1 0 0 0 2 0v-6h1v5a1 1 0 0 0 2 0v-5h1v4a1 1 0 0 0 2 0v-5.27A2 2 0 0 0 19 11V8a6 6 0 0 0-6-6Zm-2 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"/></svg>',
    desc: 'Você tem controle de tudo, mas trabalha muito lançando coisas em planilhas ou cadernos. O excesso de burocracia está impedindo você de focar em crescer a sua oficina.',
    actions: [
      { title: 'Tudo em Um Só Lugar', desc: 'Faça o orçamento, controle o estoque e feche o financeiro em uma única tela. Pare de redigitar informações de um lado pro outro.' },
      { title: 'Nota Fiscal Descomplicada', desc: 'Emita a nota de serviço e a nota de peças com um clique direto da OS, sem precisar entrar em sites confusos do governo.' },
      { title: 'Aprovação pelo WhatsApp', desc: 'Mande orçamentos com a cara da sua oficina pelo WhatsApp. O cliente confia mais, aprova rápido e você ganha credibilidade.' }
    ]
  },
  {
    max: 30,
    title: 'O Piloto de Alta Performance',
    icon: '<i data-lucide="pie-chart" style="width:80px; height:80px; color:var(--teal)"></i>',
    desc: 'Parabéns! Sua oficina já roda super bem. O seu próximo desafio é usar ferramentas práticas para fazer o cliente voltar sempre e sua equipe produzir com ainda mais agilidade.',
    actions: [
      { title: 'Trazer o Cliente de Volta', desc: 'O sistema avisa quando o carro precisa voltar para trocar óleo ou revisar freios. Você avisa o cliente pelo WhatsApp e ganha um serviço que iria pro concorrente.' },
      { title: 'Kits Prontos de Serviço', desc: 'Crie "Kits" prontos (Ex: Kit Revisão 10.000km). O orçamento sai na hora, e sua equipe não esquece de cobrar pecinhas pequenas como desengripantes.' },
      { title: 'De Olho no Lucro (DRE)', desc: 'Acompanhe de jeito fácil se a oficina deu lucro ou prejuízo no mês. Saiba exatamente o que você ganhou vendendo serviço e o que ganhou vendendo peças.' }
    ]
  }
];

let currentQuestion = 0;
let userAnswers = [];
let totalScore = 0;

// Elements
const viewHero = document.getElementById('view-hero');
const viewQuiz = document.getElementById('view-quiz');
const viewForm = document.getElementById('view-form');
const viewLoading = document.getElementById('view-loading');
const viewResults = document.getElementById('view-results');

// Render Preview Chart on Landing Page
const previewCtx = document.getElementById('previewChart');
if (previewCtx) {
  new Chart(previewCtx.getContext('2d'), {
    type: 'radar',
    data: {
      labels: ['OS', 'Orçamento', 'Kits', 'Peças', 'Caixa', 'Comissão'],
      datasets: [
        {
          label: 'Você',
          data: [40, 60, 20, 80, 50, 40],
          backgroundColor: 'rgba(0, 194, 169, 0.15)',
          borderColor: '#00C2A9',
          pointBackgroundColor: '#00C2A9',
          borderWidth: 3,
          pointRadius: 4,
          pointHoverRadius: 6
        },
        {
          label: 'Média',
          data: [60, 70, 50, 60, 70, 60],
          backgroundColor: 'rgba(226, 232, 240, 0.3)',
          borderColor: '#cbd5e1',
          pointBackgroundColor: '#cbd5e1',
          borderWidth: 2,
          pointRadius: 0
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: { 
        r: { 
          min: 0, max: 100, 
          ticks: { display: false },
          grid: { color: 'rgba(0,0,0,0.04)', circular: true },
          angleLines: { color: 'rgba(0,0,0,0.04)' },
          pointLabels: { font: { family: 'Inter', size: 11, weight: '600' }, color: '#64748b' }
        } 
      },
      plugins: { legend: { display: false } }
    }
  });
}

// INICIALIZAÇÃO
document.addEventListener('DOMContentLoaded', () => {
  lucide.createIcons();
  initPreviewRadarChart();
  initPreviewBarChart();

  const urlParams = new URLSearchParams(window.location.search);
  const ansParam = urlParams.get('ans');
  const bairroParam = urlParams.get('b');

  if (ansParam && ansParam.length === 10) {
    userAnswers = ansParam.split('').map(Number);
    totalScore = userAnswers.reduce((a, b) => a + b, 0);
    
    // Hide refazer and share box
    const btnRefazer = document.getElementById('btn-refazer');
    if (btnRefazer) btnRefazer.style.display = 'none';
    const shareBox = document.querySelector('.share-box');
    if (shareBox) shareBox.style.display = 'none';

    generateResults(bairroParam || 'Sua Região');
    switchView(document.getElementById('view-results'));
  } else {
    switchView(document.getElementById('view-landing'));
  }
});

// INIT PREVIEW RADAR CHART
function initPreviewRadarChart() {
  const ctx = document.getElementById('previewRadarCanvas');
  if (!ctx) return;
  
  new Chart(ctx, {
    type: 'radar',
    data: {
      labels: ['OS', 'Orçamento', 'Kits', 'Peças/Margem', 'Fechamento', 'Comissão', 'Retorno', 'Cadastro', 'Estoque', 'Checklist'],
      datasets: [
        {
          label: '   Sua Oficina',
          data: [80, 70, 90, 60, 85, 95, 75, 80, 60, 90],
          backgroundColor: 'rgba(0, 194, 169, 0.2)',
          borderColor: 'rgba(0, 194, 169, 1)',
          borderWidth: 2,
          pointBackgroundColor: 'rgba(0, 194, 169, 1)',
          pointRadius: 2,
          pointHoverRadius: 4
        },
        {
          label: '   Seus Concorrentes',
          data: [67, 67, 33, 67, 33, 33, 33, 67, 33, 33],
          backgroundColor: 'rgba(226, 232, 240, 0.3)',
          borderColor: '#cbd5e1',
          pointBackgroundColor: '#cbd5e1',
          borderWidth: 2,
          pointRadius: 0
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { position: 'bottom', labels: { usePointStyle: true, boxWidth: 8, boxHeight: 8, padding: 24, font: { family: "'Inter', sans-serif" } } },
        tooltip: { enabled: false }
      },
      scales: {
        r: {
          angleLines: { display: false },
          suggestedMin: 0,
          suggestedMax: 100,
          ticks: { display: false },
          grid: { circular: true, color: 'rgba(0, 0, 0, 0.05)' },
          pointLabels: {
            font: { size: 10, weight: 'bold' },
            color: 'var(--dark-blue)'
          }
        }
      }
    }
  });
}

// INIT PREVIEW BAR CHART
function initPreviewBarChart() {
  const ctx = document.getElementById('previewBarCanvas');
  if (!ctx) return;
  
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Serviços', 'Marketing', 'Finanças', 'Gestão'],
      datasets: [{
        label: '   Sua Oficina',
        data: [85, 30, 55, 40],
        backgroundColor: '#00c2a9',
        borderRadius: 4
      }, {
        label: '   Mercado',
        data: [75, 60, 70, 65],
        backgroundColor: '#cbd5e1',
        borderRadius: 4
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { position: 'bottom', labels: { usePointStyle: true, boxWidth: 8, boxHeight: 8, padding: 24, font: { family: "'Inter', sans-serif" } } }
      },
      scales: {
        y: { display: false, beginAtZero: true },
        x: { grid: { display: false }, ticks: { font: { family: "'Inter', sans-serif" } } }
      }
    }
  });
}

window.startQuiz = function(e) {
  if (e) e.preventDefault();
  switchView(document.getElementById('view-quiz'));
  loadQuestion();
};

document.querySelectorAll('.btn-start-quiz').forEach(btn => {
  btn.addEventListener('click', window.startQuiz);
});

const qTitle = document.getElementById('q-title');
const qText = document.getElementById('q-text');
const optionsContainer = document.getElementById('options-container');
const progressFill = document.getElementById('quiz-progress');
const currentQNum = document.getElementById('current-q-num');
const btnBackQuiz = document.getElementById('btn-back-quiz');

btnBackQuiz.addEventListener('click', () => {
  if (currentQuestion > 0) {
    currentQuestion--;
    const lastAns = userAnswers.pop();
    totalScore -= lastAns;
    loadQuestion();
  }
});


function switchView(view) {
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  view.classList.add('active');
  window.scrollTo(0, 0);
}

function loadQuestion() {
  const q = questions[currentQuestion];
  qTitle.innerText = `${currentQuestion + 1}. ${q.title}`;
  qText.innerText = q.text;
  
  if (currentQuestion > 0) {
    btnBackQuiz.style.display = 'flex';
  } else {
    btnBackQuiz.style.display = 'none';
  }
  
  optionsContainer.innerHTML = '';
  q.options.forEach((opt) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.innerText = opt.text;
    btn.onclick = () => selectOption(opt.value);
    optionsContainer.appendChild(btn);
  });

  progressFill.style.width = `${((currentQuestion) / questions.length) * 100}%`;
  currentQNum.innerText = currentQuestion + 1;
}

function selectOption(value) {
  userAnswers.push(value);
  totalScore += value;
  
  currentQuestion++;
  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    progressFill.style.width = '100%';
    setTimeout(() => {
      switchView(viewForm);
    }, 500);
  }
}

// CEP Auto-fill
document.getElementById('lead-cep').addEventListener('blur', async (e) => {
  let cep = e.target.value.replace(/\D/g, '');
  if (cep.length === 8) {
    try {
      const res = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data = await res.json();
      if (!data.erro) {
        document.getElementById('lead-bairro').value = `${data.bairro}, ${data.localidade} - ${data.uf}`;
      }
    } catch(err) { console.error('Erro no CEP', err); }
  }
});

// Form Submission
const btnShareWpp = document.getElementById('btn-share-wpp');
if (btnShareWpp) {
  btnShareWpp.addEventListener('click', (e) => {
    e.preventDefault();
    const url = window.location.href;
    const text = `Dá uma olhada no diagnóstico da minha oficina: ${url}`;
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`, '_blank');
  });
}

// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const headerLinks = document.getElementById('header-links');

if (mobileMenuBtn && headerLinks) {
  mobileMenuBtn.addEventListener('click', () => {
    headerLinks.classList.toggle('menu-open');
    if (headerLinks.classList.contains('menu-open')) {
      mobileMenuBtn.innerHTML = '<i data-lucide="x"></i>';
    } else {
      mobileMenuBtn.innerHTML = '<i data-lucide="menu"></i>';
    }
    lucide.createIcons();
  });
  
  // Close menu when clicking a link
  headerLinks.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      headerLinks.classList.remove('menu-open');
      mobileMenuBtn.innerHTML = '<i data-lucide="menu"></i>';
      lucide.createIcons();
      lucide.createIcons();
    });
  });
}

document.getElementById('lead-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  
  // Here we would normally save to Supabase. 
  // Simulated success for now.
  
  const bairroFull = document.getElementById('lead-bairro').value || 'Sua Região';
  const bairro = bairroFull.split(',')[0]; // Just the neighborhood
  
  switchView(viewLoading);
  
  // Loading animation sequence
  const loadingText = document.getElementById('loading-text');
  setTimeout(() => loadingText.innerText = `Cruzando informações com as oficinas de ${bairro}...`, 300);
  setTimeout(() => loadingText.innerText = `Relatório regional liberado!`, 700);
  
  setTimeout(() => {
    generateResults(bairro);
    switchView(viewResults);
  }, 1000);
});

function generateResults(bairro) {
  // Determine Persona
  let matchedPersona = personas[2]; // Default alta
  if (totalScore <= 16) matchedPersona = personas[0];
  else if (totalScore <= 24) matchedPersona = personas[1];

  document.getElementById('persona-title').innerText = matchedPersona.title;
  document.getElementById('persona-icon').innerHTML = matchedPersona.icon;
  document.getElementById('final-score').innerText = totalScore;
  document.getElementById('persona-desc').innerText = matchedPersona.desc;

  // Set Share Links (Recover Result)
  const recoverUrl = window.location.origin + window.location.pathname + '?ans=' + userAnswers.join('') + '&b=' + encodeURIComponent(bairro);
  const shareText = encodeURIComponent(`Aqui está o resultado do seu Diagnóstico de Gestão Oficinaz! Seu perfil é: ${matchedPersona.title}. Acesse o relatório completo aqui: ${recoverUrl}`);
  
  const leadWhatsappInput = document.getElementById('lead-whatsapp');
  const leadWhatsapp = leadWhatsappInput ? leadWhatsappInput.value.replace(/\D/g, '') : '';
  const leadEmailInput = document.getElementById('lead-email');
  const leadEmail = leadEmailInput ? leadEmailInput.value : '';

  const btnWhatsapp = document.getElementById('btn-share-whatsapp');
  if (btnWhatsapp) {
    btnWhatsapp.href = leadWhatsapp 
      ? `https://api.whatsapp.com/send/?phone=55${leadWhatsapp}&text=${shareText}`
      : `https://api.whatsapp.com/send/?text=${shareText}`;
  }
  
  const btnEmail = document.getElementById('btn-share-email');
  if (btnEmail) {
    btnEmail.href = leadEmail
      ? `mailto:${leadEmail}?subject=Seu diagnóstico Oficinaz&body=${shareText}`
      : `mailto:?subject=Seu diagnóstico Oficinaz&body=${shareText}`;
  }

  // Action Plan
  const actionList = document.getElementById('action-plan-list');
  actionList.innerHTML = '';
  matchedPersona.actions.forEach(act => {
    actionList.innerHTML += `
      <div class="action-item" style="margin-bottom:16px;">
        <h4 style="color:var(--dark-blue); font-weight:700; margin-bottom:4px;">${act.title}</h4>
        <p style="color:var(--text-gray); font-size:0.95rem;">${act.desc}</p>
      </div>
    `;
  });

  document.getElementById('chart-subtitle').innerHTML = `<i data-lucide="bar-chart-2"></i> Maturidade vs. Base de Mercado`;
  
  // Logic to make charts reflect user's answers realistically
  // We map the 10 answers (val 1, 2, 3) to 33, 67, 100 scale
  const radarScores = userAnswers.map(ans => Math.round((ans / 3) * 100)); 
  
  // Realistic Fixed Market Baseline based on general auto repair industry data (mostly levels 1 and 2)
  const baselineMarketRadar = [67, 67, 33, 67, 33, 33, 33, 67, 33, 33];

  // Radar Chart (benchmarkChart)
  const radarCtx = document.getElementById('benchmarkChart').getContext('2d');
  
  // Destroy previous instance if user clicked "Refazer"
  if (window.resultRadarChart) window.resultRadarChart.destroy();
  
  window.resultRadarChart = new Chart(radarCtx, {
    type: 'radar',
    data: {
      labels: ['OS', 'Orçamento', 'Kits', 'Peças/Margem', 'Fechamento', 'Comissão', 'Retorno', 'Cadastro', 'Estoque', 'Checklist'],
      datasets: [
        {
          label: '   Sua Oficina',
          data: radarScores,
          backgroundColor: 'rgba(0, 194, 169, 0.2)',
          borderColor: 'rgba(0, 194, 169, 1)',
          pointBackgroundColor: 'rgba(0, 194, 169, 1)',
          borderWidth: 2,
          pointRadius: 4
        },
        {
          label: `   Seus Concorrentes`,
          data: baselineMarketRadar,
          backgroundColor: 'rgba(226, 232, 240, 0.3)',
          borderColor: '#cbd5e1',
          pointBackgroundColor: '#cbd5e1',
          borderWidth: 2,
          pointRadius: 0
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        r: {
          min: 0, max: 100,
          ticks: { display: false },
          grid: { circular: true, color: 'rgba(0,0,0,0.05)' },
          angleLines: { display: false },
          pointLabels: { font: { family: 'Inter', size: 10, weight: 'bold' }, color: 'var(--dark-blue)' }
        }
      },
      plugins: {
        legend: { position: 'bottom', labels: { usePointStyle: true, boxWidth: 8, boxHeight: 8, padding: 24, font: { family: "'Inter', sans-serif" } } }
      }
    }
  });

  // Calculate Bar Chart based on exact categories of the 10 questions:
  // Atendimento/Serviço (q0, q1, q9), Fidelização/CRM (q6), Financeiro (q3, q4, q5), Controle/Pátio (q2, q7, q8)
  const calcAvg = (indices, source) => Math.round(indices.map(i => source[i]).reduce((a,b)=>a+b, 0) / indices.length);
  const userBarData = [
    calcAvg([0, 1, 9], radarScores), // Atendimento
    calcAvg([6], radarScores),       // Fidelização
    calcAvg([3, 4, 5], radarScores), // Financeiro
    calcAvg([2, 7, 8], radarScores)  // Controle
  ];
  
  const marketBarData = [
    calcAvg([0, 1, 9], baselineMarketRadar), 
    calcAvg([6], baselineMarketRadar),       
    calcAvg([3, 4, 5], baselineMarketRadar), 
    calcAvg([2, 7, 8], baselineMarketRadar)  
  ];

  const barCtx = document.getElementById('resultBarCanvas').getContext('2d');
  
  if (window.resultBarChart) window.resultBarChart.destroy();
  
  window.resultBarChart = new Chart(barCtx, {
    type: 'bar',
    data: {
      labels: ['Atendimento', 'Fidelização', 'Financeiro', 'Controle'],
      datasets: [{
        label: '   Sua Oficina',
        data: userBarData,
        backgroundColor: '#00c2a9',
        borderRadius: 4
      }, {
        label: `   Seus Concorrentes`,
        data: marketBarData,
        backgroundColor: '#cbd5e1',
        borderRadius: 4
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { position: 'bottom', labels: { usePointStyle: true, boxWidth: 8, boxHeight: 8, padding: 24, font: { family: "'Inter', sans-serif" } } }
      },
      scales: {
        y: { display: false, beginAtZero: true, max: 105 },
        x: { grid: { display: false }, ticks: { font: { family: "'Inter', sans-serif" } } }
      }
    }
  });

  // Insight Text Logic (tied strictly to collected data)
  // Identify the weakest category based on collected data
  const categories = ['Atendimento', 'Fidelização', 'Financeiro', 'Controle'];
  const lowestScoreValue = Math.min(...userBarData);
  const lowestCategoryIndex = userBarData.indexOf(lowestScoreValue);
  const weakestCategory = categories[lowestCategoryIndex];
  
  const insightBox = document.getElementById('insight-text');
  
  if (lowestScoreValue <= 33) {
    insightBox.innerHTML = `Identificamos que a área de <strong>${weakestCategory}</strong> é o grande ponto fraco da sua oficina hoje. Oficinas da região de ${bairro} que organizam essa parte conseguem atender mais carros no mesmo dia e ter uma margem de lucro muito melhor.`;
    insightBox.style.borderColor = 'var(--critical)';
    insightBox.style.backgroundColor = 'rgba(255, 59, 48, 0.05)';
    insightBox.style.color = 'var(--critical)';
  } else if (lowestScoreValue <= 67) {
    insightBox.innerHTML = `Sua oficina está no caminho certo em ${bairro}, mas a parte de <strong>${weakestCategory}</strong> ainda pode melhorar. É organizando essa área que estão os seus lucros escondidos.`;
    insightBox.style.borderColor = 'var(--attention)';
    insightBox.style.backgroundColor = 'rgba(255, 204, 0, 0.05)';
    insightBox.style.color = '#b45309';
  } else {
    insightBox.innerHTML = `Excelente! Sua gestão é destaque em ${bairro}. Seus processos em <strong>${weakestCategory}</strong> e demais áreas estão alinhados, deixando sua oficina pronta para atender mais carros sem dor de cabeça e sem perder a qualidade.`;
    insightBox.style.borderColor = 'var(--teal)';
    insightBox.style.backgroundColor = 'rgba(0, 194, 169, 0.05)';
    insightBox.style.color = 'var(--teal)';
  }
  
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

// Share
const btnShare = document.getElementById('btn-share');
if (btnShare) {
  btnShare.addEventListener('click', async () => {
    try {
      await navigator.share({
        title: 'Diagnóstico Oficinaz 2026',
        text: 'Acabei de fazer o Raio-X de Gestão da minha oficina. Descubra o seu perfil!',
        url: window.location.href
      });
    } catch(e) {
      alert('Copie o link no seu navegador para compartilhar!');
    }
  });
}
