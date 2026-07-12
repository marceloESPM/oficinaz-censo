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
    title: 'O Mecânico Apagador de Incêndios',
    icon: '<i data-lucide="flame" style="width:80px; height:80px; color:var(--critical)"></i>',
    desc: 'Você domina a parte técnica, mas perde dinheiro nas lacunas de controle. Sem processos bem amarrados, o esforço da sua equipe vaza pelo ralo financeiro. É hora de tapar esses buracos e blindar seu lucro.',
    actions: [
      { title: 'Agilidade no Balcão', desc: 'Esqueça os longos cadastros de papel. Digitando apenas a placa, o sistema preenche os dados do carro para você.' },
      { title: 'Margem Garantida', desc: 'Ao lançar uma peça na OS, o sistema já calcula o preço final, garantindo que você nunca mais repasse peças sem a margem de lucro correta.' },
      { title: 'Controle sem Complicação', desc: 'Fechamento de caixa simples e direto, para você saber exatamente o que entrou e saiu no dia, sem depender da memória.' }
    ]
  },
  {
    max: 24,
    title: 'O Polvo das Planilhas',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="80" height="80" fill="currentColor" style="color:var(--attention)"><path d="M12 2a6 6 0 0 0-6 6v3a2 2 0 0 0-1 1.73V18a1 1 0 0 0 2 0v-4h1v5a1 1 0 0 0 2 0v-5h1v6a1 1 0 0 0 2 0v-6h1v6a1 1 0 0 0 2 0v-6h1v5a1 1 0 0 0 2 0v-5h1v4a1 1 0 0 0 2 0v-5.27A2 2 0 0 0 19 11V8a6 6 0 0 0-6-6Zm-2 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"/></svg>',
    desc: 'Você controla tudo, mas à custa do seu próprio tempo. Planilhas soltas e retrabalho são freios invisíveis que impedem sua oficina de escalar. Você precisa centralizar a gestão para voltar a pensar no negócio.',
    actions: [
      { title: 'Fim do Retrabalho', desc: 'A mesma OS que você usa para orçar já alimenta o caixa e calcula a comissão do mecânico automaticamente. Tudo em um só lugar.' },
      { title: 'Emissão Inteligente', desc: 'Pare de redigitar dados em sites do governo. O sistema já separa a mão de obra (NFS-e) das peças (NF-e) e emite tudo a partir da OS.' },
      { title: 'Aprovação Expressa', desc: 'Envie orçamentos detalhados via link no WhatsApp. O cliente visualiza as peças e serviços de forma profissional e aprova com um único clique.' }
    ]
  },
  {
    max: 30,
    title: 'O Piloto de Alta Performance',
    icon: '<i data-lucide="rocket" style="width:80px; height:80px; color:var(--teal)"></i>',
    desc: 'Sua oficina já opera como uma verdadeira empresa. Com processos consolidados, o desafio agora é tracionar vendas previsíveis e fazer a tecnologia trabalhar para o seu crescimento contínuo.',
    actions: [
      { title: 'Retorno Preditivo', desc: 'Use nosso painel de histórico para identificar exatamente quais veículos estão próximos de atingir a quilometragem de revisão e chame-os antes de irem para a concorrência.' },
      { title: 'Kits Estratégicos', desc: 'Ganhe velocidade no pátio cadastrando seus próprios "Kits de Serviço". Monte orçamentos em segundos, padronizando o tempo técnico e as margens da sua equipe.' },
      { title: 'Visão de Diretor', desc: 'Acompanhe o crescimento da sua oficina através de um Demonstrativo de Resultados (DRE) automático e focado exclusivamente nas métricas do setor automotivo.' }
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
  switchView(document.getElementById('view-landing'));
  lucide.createIcons();
  initPreviewRadarChart();
  initPreviewBarChart();
});

// INIT PREVIEW RADAR CHART
function initPreviewRadarChart() {
  const ctx = document.getElementById('previewRadarCanvas');
  if (!ctx) return;
  
  new Chart(ctx, {
    type: 'radar',
    data: {
      labels: ['OS', 'Orçamento', 'Kits', 'Peças/Margem', 'Fechamento', 'Comissão', 'Retorno', 'Cadastro', 'Estoque', 'Checklist'],
      datasets: [{
        label: 'Maturidade (Exemplo)',
        data: [80, 70, 90, 60, 85, 95, 75, 80, 60, 90],
        backgroundColor: 'rgba(0, 194, 169, 0.2)',
        borderColor: 'rgba(0, 194, 169, 1)',
        borderWidth: 2,
        pointBackgroundColor: 'rgba(0, 194, 169, 1)',
        pointRadius: 4,
        pointHoverRadius: 6
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
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
        label: 'Sua Oficina',
        data: [85, 30, 55, 40],
        backgroundColor: '#00c2a9',
        borderRadius: 4
      }, {
        label: 'Mercado',
        data: [75, 60, 70, 65],
        backgroundColor: '#cbd5e1',
        borderRadius: 4
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { position: 'bottom', labels: { usePointStyle: true, boxWidth: 8, font: { family: "'Inter', sans-serif" } } }
      },
      scales: {
        y: { display: false, beginAtZero: true },
        x: { grid: { display: false }, ticks: { font: { family: "'Inter', sans-serif" } } }
      }
    }
  });
}

document.querySelectorAll('.btn-start-quiz').forEach(btn => {
  btn.addEventListener('click', () => {
    switchView(document.getElementById('view-quiz'));
    loadQuestion();
  });
});

const qTitle = document.getElementById('q-title');
const qText = document.getElementById('q-text');
const optionsContainer = document.getElementById('options-container');
const progressFill = document.getElementById('quiz-progress');
const currentQNum = document.getElementById('current-q-num');


function switchView(view) {
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  view.classList.add('active');
  window.scrollTo(0, 0);
}

function loadQuestion() {
  const q = questions[currentQuestion];
  qTitle.innerText = `${currentQuestion + 1}. ${q.title}`;
  qText.innerText = q.text;
  
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
document.getElementById('lead-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  
  // Here we would normally save to Supabase. 
  // Simulated success for now.
  
  const bairroFull = document.getElementById('lead-bairro').value || 'Sua Região';
  const bairro = bairroFull.split(',')[0]; // Just the neighborhood
  
  switchView(viewLoading);
  
  // Loading animation sequence
  const loadingText = document.getElementById('loading-text');
  setTimeout(() => loadingText.innerText = `Cruzando informações com as oficinas de ${bairro}...`, 1500);
  setTimeout(() => loadingText.innerText = `Relatório regional liberado!`, 3000);
  
  setTimeout(() => {
    generateResults(bairro);
    switchView(viewResults);
  }, 3500);
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

  // Raio X Bars
  const raioxList = document.getElementById('raiox-list');
  raioxList.innerHTML = '';
  userAnswers.forEach((ans, idx) => {
    let statusText = ans === 1 ? 'Crítico' : (ans === 2 ? 'Alerta' : 'Oficinaz');
    let cssClass = ans === 1 ? 'fill-critical' : (ans === 2 ? 'fill-attention' : 'fill-ok');
    
    raioxList.innerHTML += `
      <div class="raiox-item">
        <div class="raiox-label"><span>${questions[idx].title}</span> <span>${statusText}</span></div>
        <div class="raiox-bar-bg"><div class="raiox-bar-fill ${cssClass}"></div></div>
      </div>
    `;
  });

  // Atualizar contadores
  const actionList = document.getElementById('action-plan-list');
  actionList.innerHTML = '';
  matchedPersona.actions.forEach(act => {
    actionList.innerHTML += `
      <div class="action-item">
        <h4>${act.title}</h4>
        <p>${act.desc}</p>
      </div>
    `;
  });

  // Chart
  document.getElementById('chart-subtitle').innerText = `Comparativo com as oficinas em: ${bairro}`;
  
  // Cold Start Logic Mock
  const youData = userAnswers.map(ans => ans * 33.3); // Scale to 100
  // Market Mock (mostly profile 2)
  const marketData = youData.map(val => Math.min(100, Math.max(30, val + (Math.random() * 30 - 15)))); 

  const ctx = document.getElementById('benchmarkChart').getContext('2d');
  new Chart(ctx, {
    type: 'radar',
    data: {
      labels: ['OS', 'Orçamento', 'Kits', 'Peças/Margem', 'Fechamento', 'Comissão', 'Retorno', 'Cadastro', 'Estoque', 'Checklist'],
      datasets: [
        {
          label: 'Sua Oficina',
          data: youData,
          backgroundColor: 'rgba(0, 194, 169, 0.15)',
          borderColor: '#00C2A9',
          pointBackgroundColor: '#00C2A9',
          borderWidth: 3,
          pointRadius: 4,
          pointHoverRadius: 6
        },
        {
          label: `Média ${bairro}`,
          data: marketData,
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
          pointLabels: { font: { family: 'Inter', size: 12, weight: '600' }, color: '#334155' }
        }
      },
      plugins: {
        legend: { display: false }
      }
    }
  });

  // Insight Text
  const avgYou = youData.reduce((a,b)=>a+b)/10;
  const avgMarket = marketData.reduce((a,b)=>a+b)/10;
  const insightBox = document.getElementById('insight-text');
  
  if (avgYou < avgMarket) {
    insightBox.innerText = `Atenção: Sua oficina está ${(avgMarket - avgYou).toFixed(0)}% abaixo da média local. Os concorrentes em ${bairro} estão mais eficientes na gestão.`;
    insightBox.style.borderColor = 'var(--critical)';
    insightBox.style.backgroundColor = 'rgba(236, 90, 104, 0.1)';
  } else if (avgYou > 80) {
    insightBox.innerText = `Parabéns! Sua operação está no topo da região de ${bairro}. Seu próximo passo é escalar com mais inteligência.`;
    insightBox.style.borderColor = 'var(--teal)';
    insightBox.style.backgroundColor = 'var(--teal-soft)';
  } else {
    insightBox.innerText = `Sua oficina está na média de ${bairro}, mas você tem grandes oportunidades de lucro ocultas na operação.`;
  }
  
  // Re-render new injected Lucide icons
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
