---
layout: home
---

<style>
:root{
  --bg:#0f1115; --card:#171a21; --text:#e6e8ef; --muted:#a1a8b3; --accent:#5dd6ff;
}
.site-header, .site-footer { border: none; }
.main-content { max-width: 1100px; }
.ai-hero { margin: 18px 0 24px; padding: 18px 20px; background: #11131a; border-radius: 14px; color: var(--text); }
.ai-tabs { display:flex; gap:10px; margin:18px 0; }
.ai-tab-btn { padding:9px 16px; border:1px solid #2a2f3a; border-radius:999px; background:#12151c; color:#cfd6e4; cursor:pointer; font-weight:600; }
.ai-tab-btn.active { background: var(--accent); color:#0b0f14; border-color: var(--accent); }
.ai-tab-panel { display:none; }
.ai-tab-panel.active { display:block; }
.ai-grid { display:grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap:16px; }
@media (max-width: 860px){ .ai-grid { grid-template-columns: 1fr; } }
.ai-card { background: var(--card); border:1px solid #232836; border-radius:16px; padding:16px; color:var(--text); box-shadow: 0 6px 20px rgba(0,0,0,.15); }
.ai-card a { color: var(--text); text-decoration: none; }
.ai-card a:hover { color: var(--accent); }
.ai-meta { color: var(--muted); font-size:0.9em; margin-top:6px; }
.ai-highlight { margin-top:10px; padding:10px 12px; background:#0f131b; border-left:3px solid var(--accent); border-radius:10px; font-weight:600; }
.ai-tag { display:inline-block; padding:2px 8px; border-radius:999px; background:#0d2230; color:#7fe0ff; font-size:0.8em; margin-right:6px; }
</style>

<div class="ai-hero">
  <h2>本周 AI 热点（中文摘要）</h2>
  <div style="color:#9aa4b2">点击标题进入站内详情页，页面底部提供原文链接。</div>
</div>

<div class="ai-tabs">
  <button class="ai-tab-btn active" data-tab="news">AI新闻</button>
  <button class="ai-tab-btn" data-tab="tech">AI技术</button>
</div>

<div id="news" class="ai-tab-panel active">
  <div class="ai-grid">
    <div class="ai-card">
      <a href="/ai/news-01-openai-retire-models.html"><h3>OpenAI 将在 2 月 13 日下线 GPT‑4o/4.1 系列与 o4‑mini</h3></a>
      <div class="ai-meta"><span class="ai-tag">OpenAI</span>2026-01-29</div>
      <div class="ai-highlight">重点：ChatGPT 侧模型大规模退役，API 暂无变化。</div>
    </div>
    <div class="ai-card">
      <a href="/ai/news-02-openai-prism.html"><h3>OpenAI 发布 Prism：面向科研的 LaTeX 原生工作区</h3></a>
      <div class="ai-meta"><span class="ai-tag">OpenAI</span>2026-01-27</div>
      <div class="ai-highlight">重点：内置 GPT‑5.2，支持协作与推理写作。</div>
    </div>
    <div class="ai-card">
      <a href="/ai/news-03-deepmind-genie.html"><h3>DeepMind 开放 Project Genie：生成可交互世界</h3></a>
      <div class="ai-meta"><span class="ai-tag">DeepMind</span>2026-01-29</div>
      <div class="ai-highlight">重点：面向创作者的交互世界生成实验原型。</div>
    </div>
    <div class="ai-card">
      <a href="/ai/news-04-mittr-dhs-ai-video.html"><h3>美国 DHS 使用 Google/Adobe 生成式视频工具</h3></a>
      <div class="ai-meta"><span class="ai-tag">MIT Tech Review</span>2026-01-29</div>
      <div class="ai-highlight">重点：政府传播内容加速 AI 化，引发透明度与伦理讨论。</div>
    </div>
    <div class="ai-card">
      <a href="/ai/news-05-mittr-ai-hype-index.html"><h3>AI Hype Index：现实与夸张之间的落差</h3></a>
      <div class="ai-meta"><span class="ai-tag">MIT Tech Review</span>2026-01-29</div>
      <div class="ai-highlight">重点：盘点热门能力与风险边界。</div>
    </div>
    <div class="ai-card">
      <a href="/ai/news-06-mittr-ai-nuclear.html"><h3>AI 公司押注下一代核能基础设施</h3></a>
      <div class="ai-meta"><span class="ai-tag">MIT Tech Review</span>2026-01-28</div>
      <div class="ai-highlight">重点：算力扩张推动能源结构变化。</div>
    </div>
    <div class="ai-card">
      <a href="/ai/news-07-openai-grant.html"><h3>OpenAI 发起 EMEA 青年与福祉资助计划</h3></a>
      <div class="ai-meta"><span class="ai-tag">OpenAI</span>2026-01-28</div>
      <div class="ai-highlight">重点：面向 NGO 与研究者的 50 万欧元资助。</div>
    </div>
    <div class="ai-card">
      <a href="/ai/news-08-openai-eu-blueprint.html"><h3>OpenAI 发布 EU Economic Blueprint 2.0</h3></a>
      <div class="ai-meta"><span class="ai-tag">OpenAI</span>2026-01-28</div>
      <div class="ai-highlight">重点：推动欧洲 AI 采用、技能与增长。</div>
    </div>
    <div class="ai-card">
      <a href="/ai/news-09-openai-taisei.html"><h3>Taisei 在全球建筑业务引入 ChatGPT Enterprise</h3></a>
      <div class="ai-meta"><span class="ai-tag">OpenAI</span>2026-01-29</div>
      <div class="ai-highlight">重点：用于人才培养与规模化落地。</div>
    </div>
    <div class="ai-card">
      <a href="/ai/news-10-openai-pvh.html"><h3>PVH 将 AI 引入时尚设计与供应链</h3></a>
      <div class="ai-meta"><span class="ai-tag">OpenAI</span>2026-01-27</div>
      <div class="ai-highlight">重点：设计/供应链/消费者体验三线并进。</div>
    </div>
  </div>
</div>

<div id="tech" class="ai-tab-panel">
  <div class="ai-grid">
    <div class="ai-card">
      <a href="/ai/tech-01-openai-data-agent.html"><h3>OpenAI 内部数据智能体：用 GPT‑5/Codex 做数据推理</h3></a>
      <div class="ai-meta"><span class="ai-tag">OpenAI</span>2026-01-29</div>
      <div class="ai-highlight">重点：在大规模数据上实现高可靠洞察。</div>
    </div>
    <div class="ai-card">
      <a href="/ai/tech-02-openai-link-safety.html"><h3>当 AI 代理点击链接：数据安全防护方案</h3></a>
      <div class="ai-meta"><span class="ai-tag">OpenAI</span>2026-01-28</div>
      <div class="ai-highlight">重点：防 URL 外泄与提示注入的安全设计。</div>
    </div>
    <div class="ai-card">
      <a href="/ai/tech-03-openai-codex-loop.html"><h3>拆解 Codex Agent Loop：工具编排与性能机制</h3></a>
      <div class="ai-meta"><span class="ai-tag">OpenAI</span>2026-01-23</div>
      <div class="ai-highlight">重点：系统性解释 agent 运行闭环。</div>
    </div>
    <div class="ai-card">
      <a href="/ai/tech-04-google-agent-scaling.html"><h3>规模化智能体系统的科学：何时有效、为何有效</h3></a>
      <div class="ai-meta"><span class="ai-tag">Google Research</span>2026-01-28</div>
      <div class="ai-highlight">重点：系统性能随规模变化的规律研究。</div>
    </div>
    <div class="ai-card">
      <a href="/ai/tech-05-google-atlas.html"><h3>ATLAS：多语言模型的实用缩放规律</h3></a>
      <div class="ai-meta"><span class="ai-tag">Google Research</span>2026-01-27</div>
      <div class="ai-highlight">重点：多语场景下的训练配比与效率。</div>
    </div>
    <div class="ai-card">
      <a href="/ai/tech-06-google-gist.html"><h3>GIST：智能采样的下一阶段</h3></a>
      <div class="ai-meta"><span class="ai-tag">Google Research</span>2026-01-23</div>
      <div class="ai-highlight">重点：提升采样效率与训练稳定性。</div>
    </div>
    <div class="ai-card">
      <a href="/ai/tech-07-deepmind-genie-tech.html"><h3>Project Genie：生成可交互世界的技术路径</h3></a>
      <div class="ai-meta"><span class="ai-tag">DeepMind</span>2026-01-29</div>
      <div class="ai-highlight">重点：文本/图像到可探索世界的生成链路。</div>
    </div>
    <div class="ai-card">
      <a href="/ai/tech-08-mittr-rules-boundary.html"><h3>提示层面失效、边界层面有效：AI 规则治理新思路</h3></a>
      <div class="ai-meta"><span class="ai-tag">MIT Tech Review</span>2026-01-28</div>
      <div class="ai-highlight">重点：安全与合规应从系统边界切入。</div>
    </div>
    <div class="ai-card">
      <a href="/ai/tech-09-mittr-ai-memory.html"><h3>AI“记忆”与隐私：下一道技术边界</h3></a>
      <div class="ai-meta"><span class="ai-tag">MIT Tech Review</span>2026-01-28</div>
      <div class="ai-highlight">重点：长期记忆带来的新型数据风险。</div>
    </div>
    <div class="ai-card">
      <a href="/ai/tech-10-mittr-ai-hype-index.html"><h3>AI Hype Index：能力、风险与真实进展的对齐</h3></a>
      <div class="ai-meta"><span class="ai-tag">MIT Tech Review</span>2026-01-29</div>
      <div class="ai-highlight">重点：识别“高热度/低兑现”的技术点。</div>
    </div>
  </div>
</div>

<script>
(function(){
  const btns = document.querySelectorAll('.ai-tab-btn');
  const panels = document.querySelectorAll('.ai-tab-panel');
  btns.forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const tab = btn.getAttribute('data-tab');
      btns.forEach(b=>b.classList.remove('active'));
      panels.forEach(p=>p.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById(tab).classList.add('active');
    });
  });
})();
</script>
