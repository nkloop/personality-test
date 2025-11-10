// 全局变量
let currentQuestionIndex = 0;
let userAnswers = [];
let testScores = { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0 };
let testCompleted = false;

// 开始测试
function startTest() {
  document.getElementById('welcome-page').classList.add('hidden');
  document.getElementById('test-page').classList.remove('hidden');
  currentQuestionIndex = 0; userAnswers = []; testScores = { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0 };
  showQuestion();
}

// 显示当前题目
function showQuestion() {
  const q = questionsData[currentQuestionIndex];
  document.getElementById('current-question').textContent = currentQuestionIndex + 1;
  const progress = ((currentQuestionIndex + 1) / questionsData.length) * 100;
  document.getElementById('progress-percent').textContent = Math.round(progress);
  document.getElementById('progress-bar').style.width = progress + '%';
  document.getElementById('question-text').textContent = q.question;
  const container = document.getElementById('options-container');
  container.innerHTML = '';
  q.options.forEach((opt, idx) => {
    const btn = document.createElement('button');
    btn.className = 'option-button glass-effect rounded-xl p-4 text-left text-white hover:bg-white/20 transition-all duration-300 w-full';
    btn.innerHTML = `<span class="mr-3">${String.fromCharCode(65 + idx)}</span>${opt.text}`;
    btn.onclick = () => selectOption(idx);
    container.appendChild(btn);
  });
  document.getElementById('next-btn').disabled = true;
  document.getElementById('next-btn').classList.add('opacity-50', 'cursor-not-allowed');
  document.getElementById('back-btn').style.visibility = currentQuestionIndex === 0 ? 'hidden' : 'visible';
}

// 选择选项
function selectOption(idx) {
  const q = questionsData[currentQuestionIndex];
  userAnswers[currentQuestionIndex] = idx;
  testScores[q.options[idx].type] += q.options[idx].points;
  document.querySelectorAll('.option-button').forEach(b => b.classList.remove('selected'));
  document.querySelectorAll('.option-button')[idx].classList.add('selected');
  document.getElementById('next-btn').disabled = false;
  document.getElementById('next-btn').classList.remove('opacity-50', 'cursor-not-allowed');
}

// 下一题
function nextQuestion() {
  if (currentQuestionIndex < questionsData.length - 1) {
    currentQuestionIndex++;
    showQuestion();
  } else {
    completeTest();
  }
}

// 返回上一题
function goBack() {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    showQuestion();
  }
}

// 完成测试
function completeTest() {
  testCompleted = true;
  const resultType = Object.keys(testScores).reduce((a, b) => testScores[a] > testScores[b] ? a : b);
  const resultData = personalityTypes[resultType];
  document.getElementById('test-page').classList.add('hidden');
  document.getElementById('result-page').classList.remove('hidden');
  showResult(resultData);
}

// 显示结果
function showResult(data) {
  document.getElementById('result-title').textContent = `你是「${data.name}」`;
  document.getElementById('result-subtitle').textContent = data.title + '型';
  document.getElementById('result-description').textContent = data.description;
  document.getElementById('result-stats').textContent = `已有${data.count.toLocaleString()}人测出同类性格`;
  // 角色轮播
  const carousel = document.getElementById('characters-carousel');
  carousel.innerHTML = '';
  data.characters.forEach(c => {
    const card = document.createElement('div');
    card.className = 'character-card glass-effect rounded-xl p-4 min-w-[200px] flex-shrink-0 text-center';
    card.innerHTML = `<img src="${c.image}" onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCI+PGNpcmNsZSBjeD0iNDAiIGN5PSI0MCIgcj0iNDAiIGZpbGw9IiNmZmZmZmYxNSIvPjx0ZXh0IHg9IjQwIiB5PSI0NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iI2ZmZiIgZm9udC1zaXplPSIxNCI+${c.name}</dGV4dD48L3N2Zz4='" class="w-20 h-20 mx-auto mb-3 rounded-full object-cover"><h4 class="text-white font-bold mb-1">${c.name}</h4><p class="text-white/60 text-sm">${c.source}</p>`;
    carousel.appendChild(card);
  });
  // 特征卡片
  const traits = document.getElementById('traits-container');
  traits.innerHTML = '';
  data.traits.forEach(t => {
    const div = document.createElement('div');
    div.className = 'trait-card glass-effect rounded-xl p-6 text-center';
    div.innerHTML = `<div class="text-4xl mb-3">${t.icon}</div><h4 class="text-white font-bold mb-2">${t.title}</h4><p class="text-white/70 text-sm">${t.description}</p>`;
    traits.appendChild(div);
  });
}

// 生成海报
function generatePoster() {
  const resultType = Object.keys(testScores).reduce((a, b) => testScores[a] > testScores[b] ? a : b);
  const data = personalityTypes[resultType];
  document.getElementById('poster-title').textContent = data.name;
  document.getElementById('poster-subtitle').textContent = data.title + '型';
  const pt = document.getElementById('poster-traits');
  pt.innerHTML = '';
  data.traits.forEach(t => {
    const block = document.createElement('div');
    block.className = 'text-center';
    block.innerHTML = `<div class="text-6xl mb-4">${t.icon}</div><h3 class="text-3xl font-bold text-white mb-2">${t.title}</h3><p class="text-2xl text-white/80">${t.description}</p>`;
    pt.appendChild(block);
  });
  const pc = document.getElementById('poster-container');
  pc.style.display = 'block';
  html2canvas(pc, { width: 1080, height: 1920, scale: 1, backgroundColor: null, useCORS: true }).then(canvas => {
    pc.style.display = 'none';
    const link = document.createElement('a');
    link.download = `我的隐藏人格-${data.name}.png`;
    link.href = canvas.toDataURL();
    link.click();
  });
}

// 模态框控制
function showPaymentModal() {
  document.getElementById('payment-modal').classList.add('active');
}
function closePaymentModal() {
  document.getElementById('payment-modal').classList.remove('active');
}
function simulatePayment() {
  closePaymentModal();
  alert('支付成功！PDF 下载已开始（模拟）');
}
function restartTest() {
  currentQuestionIndex = 0; userAnswers = []; testScores = { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0 };
  document.getElementById('result-page').classList.add('hidden');
  document.getElementById('welcome-page').classList.remove('hidden');
}