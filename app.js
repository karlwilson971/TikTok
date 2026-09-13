// ==========================================================================
// TikTok Commerce Command Center — Application Controller
// ==========================================================================

let activeAgent = "hookmaster";
let activeFlywheelStep = 1;
let currentEmotionFilter = "all";
let currentTierFilter = "all";
let activePillarId = "p1";
let activeDayNumber = 1;
let activeHookVariant = "A";
let currentPipelinePillarFilter = "all";
let activeFunnelStageId = "s1_views";
let activeDiagnosticKey = "high_views_low_clicks";
let currentCreatorTypeFilter = "all";
let currentCreatorStatusFilter = "all";
let revenueMixChart = null;
let marginWaterfallChart = null;

// DOM Ready initialization
document.addEventListener("DOMContentLoaded", () => {
  initNavigation();
  initFlywheel();
  initProductIntelligence();
  initBrandStrategy();
  initCreativeProduction();
  initShopGrowth();
  initAgent5();
  initAgentWorkbench();
  initHookLab();
  initMarginCalculator();
  initCreatorCRM();
  initCharts();
  initModals();
});

// ==========================================================================
// 1. Navigation & Tab Controller
// ==========================================================================
function initNavigation() {
  const navButtons = document.querySelectorAll(".nav-item");
  navButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const tabId = btn.getAttribute("data-tab");
      switchTab(tabId);
    });
  });

  const quickGenBtn = document.getElementById("btn-quick-generate");
  if (quickGenBtn) {
    quickGenBtn.addEventListener("click", () => {
      switchTab("agent-workbench");
      runActiveAgentSimulation();
    });
  }
}

function switchTab(tabId) {
  // Update nav state
  document.querySelectorAll(".nav-item").forEach(btn => {
    btn.classList.toggle("active", btn.getAttribute("data-tab") === tabId);
  });

  // Update tab pane state
  document.querySelectorAll(".tab-pane").forEach(pane => {
    pane.classList.toggle("active", pane.id === `tab-${tabId}`);
  });

  // Update breadcrumb title
  const titles = {
    "dashboard": "Team Command & Flywheel",
    "product-intelligence": "Product & Market Intelligence (Agent 1)",
    "brand-strategy": "Brand & Content Strategy (Agent 2)",
    "creative-production": "Creative Production Engine (Agent 3)",
    "shop-growth": "Shop Growth & Creator Commercial Engine (Agent 4)",
    "performance-qa": "Performance, QA & Compliance Engine (Agent 5)",
    "agent-workbench": "Specialist Agent Workbench",
    "hook-lab": "Viral Hook & Script Lab",
    "margin-calculator": "Shop Economics & Margins",
    "creator-crm": "Creator & Affiliate CRM",
    "retention-unboxing": "Comments & Unboxing Studio",
    "vault-docs": "Playbooks & SOP Vault"
  };
  const titleElem = document.getElementById("current-section-title");
  if (titleElem && titles[tabId]) {
    titleElem.textContent = titles[tabId];
  }

  // Trigger charts resize if needed
  if (tabId === "dashboard" && revenueMixChart) {
    revenueMixChart.resize();
  }
  if (tabId === "margin-calculator" && marginWaterfallChart) {
    marginWaterfallChart.resize();
  }

  window.scrollTo({ top: 0, behavior: "smooth" });
}

// ==========================================================================
// 2. Interactive Commercial Flywheel Controller
// ==========================================================================
function initFlywheel() {
  const steps = document.querySelectorAll(".flywheel-step");
  steps.forEach(step => {
    step.addEventListener("click", () => {
      const stepNum = parseInt(step.getAttribute("data-step"));
      renderFlywheelStep(stepNum);
    });
  });
  renderFlywheelStep(1);
}

function renderFlywheelStep(stepNum) {
  activeFlywheelStep = stepNum;
  document.querySelectorAll(".flywheel-step").forEach(s => {
    s.classList.toggle("active", parseInt(s.getAttribute("data-step")) === stepNum);
  });

  const stepData = TIKTOK_COMMERCE_DATA.flywheelSteps[stepNum];
  if (!stepData) return;

  document.getElementById("insp-badge").textContent = stepData.num;
  document.getElementById("insp-title").textContent = stepData.title;
  document.getElementById("insp-agents").innerHTML = `<span class="agent-pill">Lead: ${stepData.leadAgent}</span>`;
  
  const objList = document.getElementById("insp-objectives");
  objList.innerHTML = stepData.objectives.map(obj => `<li>${obj}</li>`).join("");

  document.getElementById("insp-handoff").textContent = stepData.handoff;

  const metricsGrid = document.getElementById("insp-metrics");
  metricsGrid.innerHTML = Object.entries(stepData.metrics).map(([key, val]) => `
    <div class="metric-mini">
      <span>${key}</span>
      <strong>${val}</strong>
    </div>
  `).join("");
}

// ==========================================================================
// 3. Product & Market Intelligence Engine (Agent 1)
// ==========================================================================
function initProductIntelligence() {
  renderScorecardSliders();
  renderProductDossierGrid("all");

  const presetSelect = document.getElementById("scorecard-preset-select");
  if (presetSelect) {
    presetSelect.addEventListener("change", () => {
      loadScorecardPreset(presetSelect.value);
    });
  }

  const tierFilterPills = document.querySelectorAll("#tier-filter-pills .filter-pill");
  tierFilterPills.forEach(pill => {
    pill.addEventListener("click", () => {
      tierFilterPills.forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      const tier = pill.getAttribute("data-tier");
      currentTierFilter = tier;
      renderProductDossierGrid(tier);
    });
  });

  const exportBtn = document.getElementById("btn-export-dossier");
  if (exportBtn) {
    exportBtn.addEventListener("click", exportScorecardDossier);
  }

  loadScorecardPreset("hero_apex_tray");
}

function renderScorecardSliders() {
  const container = document.getElementById("scorecard-sliders-container");
  if (!container) return;

  container.innerHTML = TIKTOK_COMMERCE_DATA.scorecardDimensions.map(dim => `
    <div class="scorecard-slider-item">
      <div class="scorecard-item-header">
        <span class="scorecard-item-title">${dim.label}</span>
        <span class="scorecard-weight-pill">
          <span id="score-val-${dim.key}">0</span> / ${dim.weight} pts
        </span>
      </div>
      <p class="scorecard-item-desc">${dim.desc}</p>
      <div class="score-slider-row">
        <input type="range" 
               id="slider-${dim.key}" 
               min="0" 
               max="${dim.weight}" 
               step="1" 
               value="${dim.weight}" 
               class="range-slider"
               oninput="recalculateProductScore()">
      </div>
    </div>
  `).join("");
}

function loadScorecardPreset(presetId) {
  const product = TIKTOK_COMMERCE_DATA.shortlistedProducts.find(p => p.id === presetId);
  if (!product) return;

  TIKTOK_COMMERCE_DATA.scorecardDimensions.forEach(dim => {
    const slider = document.getElementById(`slider-${dim.key}`);
    const scoreVal = product.scores[dim.key] !== undefined ? product.scores[dim.key] : dim.weight;
    if (slider) slider.value = scoreVal;
  });

  recalculateProductScore();
}

function recalculateProductScore() {
  let totalScore = 0;
  TIKTOK_COMMERCE_DATA.scorecardDimensions.forEach(dim => {
    const slider = document.getElementById(`slider-${dim.key}`);
    const valElem = document.getElementById(`score-val-${dim.key}`);
    const val = parseInt(slider?.value || 0);
    if (valElem) valElem.textContent = val;
    totalScore += val;
  });

  const totalNumElem = document.getElementById("scorecard-total-num");
  const tierBadgeElem = document.getElementById("scorecard-tier-badge");
  const verdictElem = document.getElementById("scorecard-verdict-text");

  if (totalNumElem) totalNumElem.textContent = totalScore;

  if (totalScore >= 90) {
    tierBadgeElem.className = "score-tier-badge score-tier-s";
    tierBadgeElem.innerHTML = `<i data-lucide="check-circle-2"></i> S-Tier (Greenlight — Immediate Scale)`;
    if (totalNumElem) totalNumElem.className = "text-green";
    verdictElem.innerHTML = `<strong>Role: HERO PRODUCT.</strong> Outstanding 2-second visual hook potential with high gross margin (&gt;75%) and zero sizing/return risk. Endless demonstration runway for ASMR and stress-tests. Primary customer acquisition engine.`;
  } else if (totalScore >= 80) {
    tierBadgeElem.className = "score-tier-badge score-tier-a";
    tierBadgeElem.innerHTML = `<i data-lucide="award"></i> A-Tier (Strong Supporting / Repeat Anchor)`;
    if (totalNumElem) totalNumElem.className = "text-cyan";
    verdictElem.innerHTML = `<strong>Role: SUPPORTING / REPEAT PRODUCT.</strong> High conversion leverage. Ideal as a bundle basket-builder or consumable subscription to expand Customer Lifetime Value (LTV).`;
  } else if (totalScore >= 70) {
    tierBadgeElem.className = "score-tier-badge score-tier-b";
    tierBadgeElem.innerHTML = `<i data-lucide="clock"></i> B-Tier (Viable Trend Sprint / Add-on)`;
    if (totalNumElem) totalNumElem.className = "text-yellow";
    verdictElem.innerHTML = `<strong>Role: TREND PRODUCT.</strong> Viable for short-term seasonal or viral demand surges. Must harvest cash flow rapidly without heavy long-term inventory exposure.`;
  } else {
    tierBadgeElem.className = "score-tier-badge score-tier-reject";
    tierBadgeElem.innerHTML = `<i data-lucide="alert-triangle"></i> Reject / High Friction Candidate`;
    if (totalNumElem) totalNumElem.className = "text-red";
    verdictElem.innerHTML = `<strong>High Friction Warning:</strong> Score falls below sustainable threshold. Excessive return risk, poor video demonstration clarity, or low margins. Discard or redesign.`;
  }

  lucide.createIcons();
}

function renderProductDossierGrid(tierFilter) {
  const container = document.getElementById("product-dossier-container");
  if (!container) return;

  const filtered = tierFilter === "all"
    ? TIKTOK_COMMERCE_DATA.shortlistedProducts
    : TIKTOK_COMMERCE_DATA.shortlistedProducts.filter(p => p.tier.toUpperCase() === tierFilter.toUpperCase());

  container.innerHTML = filtered.map(p => {
    const tierClass = `tier-${p.tier.toLowerCase()}`;
    return `
      <div class="dossier-card">
        <div class="dossier-card-top">
          <span class="dossier-tier-pill ${tierClass}">${p.tier} PRODUCT</span>
          <span class="dossier-score-badge">${p.score} / 100</span>
        </div>
        <h4>${p.name}</h4>
        <div class="dossier-target"><i data-lucide="user-check" style="width:12px;height:12px;display:inline;"></i> ${p.targetCustomer}</div>

        <div class="dossier-financials">
          <div><span>Selling Price</span><strong>$${p.sellingPrice.toFixed(2)}</strong></div>
          <div><span>Landed Cost</span><strong>$${p.landedCost.toFixed(2)}</strong></div>
          <div><span>Gross Margin</span><strong class="text-green">${p.grossMarginPct}%</strong></div>
        </div>

        <div class="dossier-section">
          <strong>Problem Solved:</strong>
          <p>${p.problemSolved}</p>
        </div>

        <div class="dossier-section">
          <strong>Why Stop Scrolling (3s Hook):</strong>
          <p class="text-cyan">"${p.whyStopScrolling}"</p>
        </div>

        <div class="dossier-section">
          <strong>TikTok Demand:</strong>
          <p class="text-secondary" style="font-family: var(--font-mono); font-size: 11px;">${p.tiktokDemand}</p>
        </div>

        <div class="dossier-section">
          <strong>Potential Risks:</strong>
          <p class="text-muted">${p.potentialRisks}</p>
        </div>

        <div style="margin-top: auto; padding-top: 12px; border-top: 1px solid var(--border-subtle); display: flex; justify-content: space-between; align-items: center;">
          <button class="btn-sm btn-outline" onclick="loadProductIntoScorecard('${p.id}')">
            <i data-lucide="sliders"></i> Load in Scorecard
          </button>
          <button class="btn-sm btn-outline text-pink" onclick="sendProductToHookMaster('${escapeHtml(p.name)}', '${escapeHtml(p.problemSolved)}')">
            <i data-lucide="sparkles"></i> Script in HookLab &rarr;
          </button>
        </div>
      </div>
    `;
  }).join("");

  lucide.createIcons();
}

function loadProductIntoScorecard(productId) {
  const presetSelect = document.getElementById("scorecard-preset-select");
  if (presetSelect) presetSelect.value = productId;
  loadScorecardPreset(productId);
  showToast("Loaded product into 100-Point Scorecard!");
}

function sendProductToHookMaster(prodName, painPoint) {
  switchTab("hook-lab");
  const prodInput = document.getElementById("hook-product-input");
  const painInput = document.getElementById("hook-pain-input");
  if (prodInput) prodInput.value = prodName;
  if (painInput) painInput.value = painPoint;
  updateCustomHookPreview();
  showToast(`Sent ${prodName} to Viral Hook Lab!`);
}

function exportScorecardDossier() {
  const totalScore = document.getElementById("scorecard-total-num")?.textContent || "93";
  const presetKey = document.getElementById("scorecard-preset-select")?.value || "custom";
  const product = TIKTOK_COMMERCE_DATA.shortlistedProducts.find(p => p.id === presetKey);

  const dossierExport = {
    agent: "Agent 1: Product & Market Intelligence Specialist",
    timestamp: new Date().toISOString(),
    evaluationScore: `${totalScore} / 100`,
    productDetails: product || "Custom Candidate Product",
    scorecardBreakdown: {}
  };

  TIKTOK_COMMERCE_DATA.scorecardDimensions.forEach(dim => {
    const slider = document.getElementById(`slider-${dim.key}`);
    dossierExport.scorecardBreakdown[dim.label] = `${slider?.value || 0} / ${dim.weight} pts`;
  });

  const blob = new Blob([JSON.stringify(dossierExport, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `market-intel-scorecard-${Date.now()}.json`;
  a.click();
  showToast("Exported Product Intelligence Dossier!");
}

// ==========================================================================
// 4. Brand & Content Strategy Studio (Agent 2)
// ==========================================================================
function initBrandStrategy() {
  renderPillarsSelector();
  renderFivePartScript("p1");

  const copyScriptBtn = document.getElementById("btn-copy-5part-script");
  if (copyScriptBtn) {
    copyScriptBtn.addEventListener("click", () => {
      const text = document.getElementById("five-part-timeline")?.innerText || "";
      navigator.clipboard.writeText(text).then(() => {
        showToast("5-Part Script copied to clipboard!");
      });
    });
  }
}

function renderPillarsSelector() {
  const container = document.getElementById("pillars-container");
  if (!container) return;

  container.innerHTML = TIKTOK_COMMERCE_DATA.contentPillars.map(p => `
    <div class="pillar-select-card ${p.id === activePillarId ? 'active' : ''}" onclick="selectPillar('${p.id}')">
      <span class="ratio-tag ${p.ratioClass}">${p.ratioType}</span>
      <h5>${p.name}</h5>
      <p>${p.desc}</p>
    </div>
  `).join("");
}

function selectPillar(pillarId) {
  activePillarId = pillarId;
  renderPillarsSelector();
  renderFivePartScript(pillarId);
  showToast(`Loaded ${TIKTOK_COMMERCE_DATA.contentPillars.find(p => p.id === pillarId)?.name}!`);
}

function renderFivePartScript(pillarId) {
  const pillar = TIKTOK_COMMERCE_DATA.contentPillars.find(p => p.id === pillarId) || TIKTOK_COMMERCE_DATA.contentPillars[0];
  const container = document.getElementById("five-part-timeline");
  if (!container) return;

  document.getElementById("active-pillar-badge").textContent = `PILLAR ${pillar.id.toUpperCase()}`;
  document.getElementById("active-pillar-title").textContent = `${pillar.name} — (${pillar.ratioType})`;

  const scriptTemplates = {
    p1: [
      { part: "1. HOOK (0-3s)", badgeClass: "part-1", title: "Pattern Interrupt & Agitation", visual: "Top-down camera view. Messy backpack violently dumped across desk in reverse motion.", audio: "\"If your Monday morning feels like a warzone, do this tonight.\"", text: "The 60-Second Sunday Night Reset 🎒⚡" },
      { part: "2. VALUE (3-18s)", badgeClass: "part-2", title: "Core Transformation Delivery", visual: "Fast-paced 3-step organization system: 1. Discard trash, 2. Group cables into magnetic channels, 3. Lock keys.", audio: "\"Stop packing in the morning when you're half asleep. Group your daily essentials by weight.\"" },
      { part: "3. EMOTION (18-28s)", badgeClass: "part-3", title: "Dopamine & Resonance Trigger", visual: "Macro ASMR clicks as magnetic modules lock into place with binaural audio foley.", audio: "\"Nothing beats the peace of mind knowing you aren't going to forget your keys or charger.\"" },
      { part: "4. PAYOFF (28-38s)", badgeClass: "part-4", title: "The Clean Climax", visual: "Clean aesthetic backpack zipped shut in one smooth fluid motion. Desk is 100% spotless.", audio: "\"Bag packed, desk cleared, ready for the week.\"" },
      { part: "5. OPTIONAL COMMERCIAL ACTION (38-43s)", badgeClass: "part-5", title: "Soft Native Cart Anchor", visual: "Creator casually slides the organizer into bag and gestures to the bottom left screen.", audio: "\"Using the ApexGrip tray—left the direct link below in the yellow cart for anyone doing a weekly reset!\"", pinned: "Pinned Comment: \"What time do you usually pack your bag: the night before or 5 minutes before leaving?\"" }
    ],
    p2: [
      { part: "1. HOOK (0-3s)", badgeClass: "part-1", title: "Pattern Interrupt", visual: "Holding a frayed, bent charging cable emitting simulated digital sparks.", audio: "\"Stop bending your cables like this.\"", text: "3 Cable Mistakes Ruining Your Gear ⚡" },
      { part: "2. VALUE (3-18s)", badgeClass: "part-2", title: "Free Educational Masterclass", visual: "Demonstrating how wrapping cables around chargers breaks internal copper wiring and ruins battery health.", audio: "\"Mistake 1: Tight coils. Mistake 2: Letting heavy charging bricks dangle off table edges.\"" },
      { part: "3. EMOTION (18-28s)", badgeClass: "part-3", title: "Relatability & Relief", visual: "Showing how zero-bend magnetic channels preserve cable lifespan by 500%.", audio: "\"You don't need to buy new cables every 3 months—you just need proper strain relief.\"" },
      { part: "4. PAYOFF (28-38s)", badgeClass: "part-4", title: "System Solved", visual: "All 5 charging cables neatly aligned in parallel channels with instant access.", audio: "\"Now your setup stays pristine forever.\"" },
      { part: "5. OPTIONAL COMMERCIAL ACTION (38-43s)", badgeClass: "part-5", title: "Zero Pitch Discussion Prompt", visual: "Creator points to screen text.", audio: "\"Drop in the comments: what's the oldest cable you own that miraculously still works?\"", pinned: "Pinned Comment: \"Cable clips featured are in the yellow basket if you need them!\"" }
    ],
    p3: [
      { part: "1. HOOK (0-3s)", badgeClass: "part-1", title: "Extreme Shock Hook", visual: "Camera at ground level. A 4,500lb SUV tire rolling directly toward the organizer on pavement.", audio: "\"Will this survive a 4,000lb car?\"", text: "Car Tire vs Neodymium Magnet 🚗💥" },
      { part: "2. VALUE (3-18s)", badgeClass: "part-2", title: "Live Stress-Test", visual: "SUV rolls directly over the tray. Heavy tire crunch sound. Creator approaches with camera.", audio: "\"Let's inspect the damage live on camera.\"" },
      { part: "3. EMOTION (18-28s)", badgeClass: "part-3", title: "Surprise & Amazement", visual: "Close-up inspection: zero dents in CNC aluminum, magnets snap with 100% force.", audio: "\"No way... okay wait. Look at the frame!\"" },
      { part: "4. PAYOFF (28-38s)", badgeClass: "part-4", title: "Proof of Indestructibility", visual: "Re-attaching 4 heavy metal tools and shaking vigorously upside down.", audio: "\"Everything is 100% locked in place.\"" },
      { part: "5. OPTIONAL COMMERCIAL ACTION (38-43s)", badgeClass: "part-5", title: "Native Cart Anchor", visual: "Creator gives thumbs up.", audio: "\"Safe to say your cables won't break it. Direct link is in the orange cart below!\"" }
    ],
    p4: [
      { part: "1. HOOK (0-3s)", badgeClass: "part-1", title: "POV Relatability", visual: "Creator staring at alarm clock at 8:55 AM in panic.", audio: "\"POV: Your Zoom meeting starts in 5 minutes and your charger has vanished.\"", text: "The 8:55 AM Panic 🤦‍♂️" },
      { part: "2. VALUE (3-18s)", badgeClass: "part-2", title: "Humorous Empathy", visual: "Fast comedic montage tearing room apart looking under couches and pillows.", audio: "\"Why do charging cables always evaporate when you need them most?\"" },
      { part: "3. EMOTION (18-28s)", badgeClass: "part-3", title: "Understood / Validation", visual: "Creator drops into chair exhausted, then snaps magnetic tray to desk in 1 second.", audio: "\"I swear this used to steal 15 minutes of my morning every single day.\"" },
      { part: "4. PAYOFF (28-38s)", badgeClass: "part-4", title: "Instant Relief", visual: "Laptop plugged in, coffee in hand at 8:59 AM with serene smile.", audio: "\"Crisis averted forever.\"" },
      { part: "5. OPTIONAL COMMERCIAL ACTION (38-43s)", badgeClass: "part-5", title: "Discussion Trigger", visual: "Creator smiles at camera.", audio: "\"Tell me in the comments: are you the organized friend or the chaotic friend?\"" }
    ],
    p5: [
      { part: "1. HOOK (0-3s)", badgeClass: "part-1", title: "Comment Objection Sticker", visual: "Sticker on screen: \"Replying to @Dan: Looks weak, bet it can't hold a full tablet.\"", audio: "\"Dan said this magnetic lock is weak... let's find out.\"", text: "Replying to @Dan 🥊" },
      { part: "2. VALUE (3-18s)", badgeClass: "part-2", title: "Live Skeptic Challenge", visual: "Creator mounts heavy 12.9-inch iPad Pro to the magnetic base in one touch.", audio: "\"Mounting a 1.5lb iPad Pro and shaking it upside down.\"" },
      { part: "3. EMOTION (18-28s)", badgeClass: "part-3", title: "Triumph & Community", visual: "Violently shaking the setup like a cocktail shaker, then swinging it like a tennis racket.", audio: "\"Dan... you officially owe me an apology in the comments.\"" },
      { part: "4. PAYOFF (28-38s)", badgeClass: "part-4", title: "Skeptic Silenced", visual: "iPad Pro remains 100% attached without budging a millimeter.", audio: "\"Neodymium magnetic lock does not play around.\"" },
      { part: "5. OPTIONAL COMMERCIAL ACTION (38-43s)", badgeClass: "part-5", title: "Soft Yellow Cart Anchor", visual: "Pointing to yellow cart.", audio: "\"For anyone with heavy tablets or laptops, linked in the yellow basket below!\"" }
    ],
    p6: [
      { part: "1. HOOK (0-3s)", badgeClass: "part-1", title: "Founder Curiosity", visual: "Throwing 10 plastic defective mold prototypes into a recycling bin.", audio: "\"Why we threw away 14 prototypes before launching this.\"", text: "14 Failed Prototypes 🛠️" },
      { part: "2. VALUE (3-18s)", badgeClass: "part-2", title: "Behind The Scenes Craftsmanship", visual: "Close-up CNC machining footage and magnet calibration testing.", audio: "\"Prototype 4 was too weak. Prototype 9 was too heavy. Prototype 12 scratched cables.\"" },
      { part: "3. EMOTION (18-28s)", badgeClass: "part-3", title: "Appreciation of Quality", visual: "Macro extreme zoom of final obsidian anodized finish and perfect magnetic snap.", audio: "\"We spent 8 months obsessing over getting the click sound exactly right.\"" },
      { part: "4. PAYOFF (28-38s)", badgeClass: "part-4", title: "Final Masterpiece", visual: "First production batch rolling off packaging line with VIP warranty card.", audio: "\"And the final version is finally ready.\"" },
      { part: "5. OPTIONAL COMMERCIAL ACTION (38-43s)", badgeClass: "part-5", title: "Restock Drop Announcement", visual: "Holding packaged unit.", audio: "\"First batch just restocked on TikTok Shop—grab yours in the yellow cart below!\"" }
    ]
  };

  const steps = scriptTemplates[pillarId] || scriptTemplates.p1;
  container.innerHTML = steps.map(s => `
    <div class="timeline-part">
      <div class="timeline-part-header">
        <span class="part-badge ${s.badgeClass}">${s.part}</span>
        <span class="timeline-part-time">${s.title}</span>
      </div>
      <div class="timeline-part-content">
        <strong>Visual:</strong>
        <p>${s.visual} ${s.text ? `<span class="text-cyan">[Text Overlay: "${s.text}"]</span>` : ''}</p>
        <strong style="margin-top: 8px;">Audio / Voiceover:</strong>
        <p class="text-secondary">${s.audio}</p>
        ${s.pinned ? `<strong style="margin-top: 8px; color: #25F4EE;">${s.pinned}</strong>` : ''}
      </div>
    </div>
  `).join("");
}

// ==========================================================================
// 4B. Creative Production Engine (Agent 3)
// ==========================================================================
function initCreativeProduction() {
  renderArchetypes();
  renderPipelineList("all");
  renderConceptInspector(1);

  // Toggle Archetypes button
  const toggleBtn = document.getElementById("btn-toggle-archetypes");
  const drawer = document.getElementById("archetypes-drawer");
  if (toggleBtn && drawer) {
    toggleBtn.addEventListener("click", () => {
      const isHidden = drawer.style.display === "none";
      drawer.style.display = isHidden ? "block" : "none";
      toggleBtn.innerHTML = isHidden 
        ? `<i data-lucide="chevron-up"></i> Hide 10 Curiosity Archetypes`
        : `<i data-lucide="sparkles"></i> Toggle 10 Curiosity Archetypes`;
      lucide.createIcons();
    });
  }

  // Pipeline filter pills
  const filterPills = document.querySelectorAll("#pipeline-filter-pills .filter-pill");
  filterPills.forEach(pill => {
    pill.addEventListener("click", () => {
      filterPills.forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      const pillar = pill.getAttribute("data-pillar");
      currentPipelinePillarFilter = pillar;
      renderPipelineList(pillar);
    });
  });
}

function renderArchetypes() {
  const container = document.getElementById("archetypes-grid-container");
  if (!container || !TIKTOK_COMMERCE_DATA.hookArchetypes) return;

  container.innerHTML = TIKTOK_COMMERCE_DATA.hookArchetypes.map(arc => `
    <div class="archetype-card">
      <h5><i data-lucide="zap" style="width:14px;height:14px;color:var(--tt-pink);"></i> ${arc.title}</h5>
      <span class="archetype-structure">${arc.structure}</span>
      <div class="archetype-example">
        <div style="color: #ff4d6d; margin-bottom: 3px;"><strong>Forbidden:</strong> ${arc.forbidden}</div>
        <div style="color: #00f090;"><strong>Native:</strong> ${arc.native}</div>
      </div>
      <div style="margin-top: 6px; font-size: 10.5px; color: var(--text-muted); font-style: italic;">
        🧠 ${arc.psychology}
      </div>
    </div>
  `).join("");
}

function renderPipelineList(pillarFilter) {
  const container = document.getElementById("pipeline-list-container");
  if (!container || !TIKTOK_COMMERCE_DATA.creativePipeline) return;

  const filtered = pillarFilter === "all"
    ? TIKTOK_COMMERCE_DATA.creativePipeline
    : TIKTOK_COMMERCE_DATA.creativePipeline.filter(item => item.pillarCode === pillarFilter);

  container.innerHTML = filtered.map(item => `
    <div class="pipeline-card ${item.day === activeDayNumber ? 'active' : ''}" onclick="selectPipelineDay(${item.day})">
      <div class="pipeline-card-top">
        <span class="day-badge">DAY ${item.day < 10 ? '0' + item.day : item.day}</span>
        <span class="ratio-tag ${item.ratioClass}">${item.ratio}</span>
      </div>
      <h4>${item.conceptTitle}</h4>
      <div style="font-size: 11px; color: var(--text-secondary); display: flex; align-items: center; gap: 4px;">
        <i data-lucide="layers" style="width:11px;height:11px;color:var(--tt-cyan);"></i> ${item.pillar}
      </div>
      <div class="pipeline-card-footer">
        <span>⏱️ ${item.duration}</span>
        <span class="text-pink" style="font-weight: 600;">Inspect 15-Pt &rarr;</span>
      </div>
    </div>
  `).join("");

  lucide.createIcons();
}

function selectPipelineDay(dayNum) {
  activeDayNumber = dayNum;
  activeHookVariant = "A";
  renderPipelineList(currentPipelinePillarFilter);
  renderConceptInspector(dayNum);
  showToast(`Loaded Day ${dayNum} 15-Point Concept!`);
}

function renderConceptInspector(dayNum) {
  const container = document.getElementById("concept-inspector-col");
  if (!container || !TIKTOK_COMMERCE_DATA.creativePipeline) return;

  const concept = TIKTOK_COMMERCE_DATA.creativePipeline.find(c => c.day === dayNum) || TIKTOK_COMMERCE_DATA.creativePipeline[0];
  const variants = concept.hookVariants || {
    A: {
      variantName: "Variant A: Standard Problem Hook",
      openingHook: `"${concept.conceptTitle}"`,
      first3sVisual: "Fast pattern interrupt demonstration matching target audience friction.",
      audioFoley: "Chaotic noise &rarr; Crisp satisfying snap &rarr; Lo-fi beat.",
      onScreenText: `${concept.conceptTitle} ⚡`,
      voiceoverScript: `Stop struggling with your setup. Here is the 1-touch solution engineered for daily carry.`,
      cta: `\"Left the link below in the yellow cart for anyone looking to upgrade!\"`,
      caption: `Game changer for your setup ✨ #edc #desksetup #${concept.pillarCode}`,
      sceneSequence: [
        { time: "0:00 - 0:03", action: "3-second hook pattern interrupt.", text: `${concept.conceptTitle}` },
        { time: "0:03 - 0:15", action: "Core value delivery and transformation.", text: "Step 1: Alignment" },
        { time: "0:15 - 0:25", action: "Tactile demonstration and stress test.", text: "High Durability" },
        { time: "0:25 - 0:32", action: "Aesthetic resolution and payoff.", text: "Pristine Flow" },
        { time: "0:32 - 0:38", action: "Yellow cart CTA gesture.", text: "Yellow Cart Below 👇" }
      ]
    }
  };

  const currentVar = variants[activeHookVariant] || variants.A || Object.values(variants)[0];

  container.innerHTML = `
    <div class="concept-overview-card">
      <div class="concept-header-top">
        <div style="display: flex; align-items: center; gap: 8px;">
          <span class="day-badge" style="background: var(--tt-pink); font-size: 11px;">DAY ${concept.day < 10 ? '0' + concept.day : concept.day}</span>
          <span class="ratio-tag ${concept.ratioClass}">${concept.ratio}</span>
          <span class="pillar-badge" style="background: rgba(37,244,238,0.15); color: var(--tt-cyan); border: 1px solid rgba(37,244,238,0.3); font-size: 10px;">${concept.pillar}</span>
        </div>
        <div style="font-size: 11px; color: var(--text-muted); font-family: var(--font-mono);">
          Duration: <strong class="text-white">${concept.duration}</strong>
        </div>
      </div>

      <div class="concept-title-row">
        <h3>${concept.conceptTitle}</h3>
      </div>

      <!-- 15-Point Concept Meta Parameters -->
      <div class="concept-meta-grid">
        <div class="concept-meta-item">
          <span>Target Viewer</span>
          <strong>${concept.targetViewer}</strong>
        </div>
        <div class="concept-meta-item">
          <span>Curiosity Archetype</span>
          <strong class="text-cyan">${concept.archetype}</strong>
        </div>
        <div class="concept-meta-item">
          <span>TikTok Shop SKU Anchor</span>
          <strong class="text-pink">${concept.shopPlacement}</strong>
        </div>
        <div class="concept-meta-item">
          <span>Why Concept Works</span>
          <p style="font-size: 11.5px; color: var(--text-secondary); margin-top: 2px;">${concept.reasonItWorks}</p>
        </div>
      </div>

      <!-- SEO Keywords -->
      <div>
        <span style="font-size: 10px; font-weight: 700; color: var(--text-muted); text-transform: uppercase;">
          <i data-lucide="search" style="width:10px;height:10px;display:inline;"></i> Target SEO Keywords & Hashtags:
        </span>
        <div class="keywords-wrap">
          ${(concept.keywords || []).map(kw => `<span class="keyword-tag">#${kw}</span>`).join("")}
        </div>
      </div>

      <!-- Multi-Variant Hook Switcher (Hook A / B / C) -->
      <div class="variant-tabs-row">
        <button class="variant-tab-btn ${activeHookVariant === 'A' ? 'active' : ''}" onclick="switchHookVariant('A')">
          <span>HOOK A (PROBLEM / AGITATION)</span>
          ${variants.A ? (variants.A.variantName.split(':')[1] || 'Agitation Focus') : 'Variant A'}
        </button>
        <button class="variant-tab-btn ${activeHookVariant === 'B' ? 'active' : ''}" onclick="switchHookVariant('B')">
          <span>HOOK B (CURIOSITY / STRESS-TEST)</span>
          ${variants.B ? (variants.B.variantName.split(':')[1] || 'Challenge Focus') : 'Variant B'}
        </button>
        <button class="variant-tab-btn ${activeHookVariant === 'C' ? 'active' : ''}" onclick="switchHookVariant('C')">
          <span>HOOK C (AESTHETIC / ASMR)</span>
          ${variants.C ? (variants.C.variantName.split(':')[1] || 'Sensory Reset') : 'Variant C'}
        </button>
      </div>

      <!-- Active Variant Detail & Opening Hook Banner -->
      <div class="opening-hook-banner">
        <div style="display: flex; align-items: center; justify-content: space-between;">
          <span class="badge badge-glow" style="background: rgba(254,44,85,0.25); color: #FE2C55; font-size: 10px;">
            <i data-lucide="zap"></i> FIRST 3 SECONDS: OPENING HOOK
          </span>
          <button class="btn-sm btn-outline" onclick="copyText('${escapeHtml(currentVar.openingHook)}')">
            <i data-lucide="copy" style="width:12px;height:12px;"></i> Copy Hook
          </button>
        </div>
        <h4>${currentVar.openingHook}</h4>
        
        <div class="hook-cue-row">
          <div>
            <span>First 3-Second Visual Action</span>
            <p style="color: white;">${currentVar.first3sVisual}</p>
          </div>
          <div>
            <span>Audio Foley & Music Cue</span>
            <p style="color: var(--tt-cyan); font-family: var(--font-mono);">${currentVar.audioFoley}</p>
          </div>
        </div>
      </div>

      <!-- Full Scene Sequence Timeline -->
      <h4 style="font-size: 14px; margin-bottom: 12px; color: white; display: flex; align-items: center; gap: 8px;">
        <i data-lucide="film" class="text-pink"></i> Scene Sequence & Visual Direction (5-Scene Structure)
      </h4>
      <div class="scene-sequence-list">
        ${(currentVar.sceneSequence || []).map(sc => `
          <div class="scene-card">
            <div class="scene-time-col">
              <span class="scene-time-pill">${sc.time}</span>
            </div>
            <div class="scene-body">
              <p>${sc.action}</p>
              ${sc.text ? `<span class="scene-text-overlay">[On-Screen Text: "${sc.text}"]</span>` : ''}
            </div>
          </div>
        `).join("")}
      </div>

      <!-- Script & Voiceover / Caption Grid -->
      <div class="script-boxes-row">
        <div class="script-box">
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 6px;">
            <h5><i data-lucide="mic" class="text-cyan"></i> Voiceover Script</h5>
            <button class="btn-sm btn-outline" onclick="copyText('${escapeHtml(currentVar.voiceoverScript)}')">
              <i data-lucide="copy" style="width:10px;height:10px;"></i>
            </button>
          </div>
          <p style="font-style: italic; color: #f0f3f8;">"${currentVar.voiceoverScript}"</p>
        </div>

        <div class="script-box">
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 6px;">
            <h5><i data-lucide="message-circle" class="text-yellow"></i> CTA & Suggested Caption</h5>
            <button class="btn-sm btn-outline" onclick="copyText('${escapeHtml(currentVar.caption)}')">
              <i data-lucide="copy" style="width:10px;height:10px;"></i>
            </button>
          </div>
          <div style="margin-bottom: 8px;">
            <strong style="color: var(--neon-yellow); font-size: 11px;">Call To Action:</strong>
            <p style="font-size: 11.5px;">${currentVar.cta}</p>
          </div>
          <div>
            <strong style="color: var(--tt-cyan); font-size: 11px;">Caption:</strong>
            <p style="font-size: 11.5px; color: var(--text-secondary);">${currentVar.caption}</p>
          </div>
        </div>
      </div>

      <!-- Concept Actions Bar -->
      <div class="concept-actions-bar">
        <button class="btn-outline" onclick="exportSingleConceptJSON(${concept.day})">
          <i data-lucide="download"></i> Export 15-Pt Concept (JSON)
        </button>
        <button class="btn-primary" onclick="copyCompleteConceptScript(${concept.day})">
          <i data-lucide="clipboard-check"></i> Copy Complete Production Script
        </button>
      </div>
    </div>
  `;

  lucide.createIcons();
}

function switchHookVariant(variantKey) {
  activeHookVariant = variantKey;
  renderConceptInspector(activeDayNumber);
  showToast(`Switched to Hook Variant ${variantKey}!`);
}

function copyText(str) {
  navigator.clipboard.writeText(str).then(() => {
    showToast("Copied to clipboard!");
  });
}

function copyCompleteConceptScript(dayNum) {
  const concept = TIKTOK_COMMERCE_DATA.creativePipeline.find(c => c.day === dayNum) || TIKTOK_COMMERCE_DATA.creativePipeline[0];
  const variants = concept.hookVariants || {};
  const currentVar = variants[activeHookVariant] || variants.A || Object.values(variants)[0];

  const fullScript = `
================================================================================
TIKTOK COMMERCE — PRODUCTION SCRIPT (DAY ${concept.day}: ${concept.conceptTitle})
================================================================================
Pillar: ${concept.pillar} (${concept.ratio})
Target Viewer: ${concept.targetViewer}
Duration: ${concept.duration}
Shop SKU Placement: ${concept.shopPlacement}
Active Variant: ${currentVar.variantName}

1. OPENING HOOK (0-3s):
${currentVar.openingHook}

2. VISUAL & AUDIO CUES:
Visual: ${currentVar.first3sVisual}
Audio Foley: ${currentVar.audioFoley}

3. SCENE BREAKDOWN:
${(currentVar.sceneSequence || []).map(s => `[${s.time}] ${s.action} | Overlay: "${s.text || ''}"`).join("\n")}

4. VOICEOVER SCRIPT:
"${currentVar.voiceoverScript}"

5. CALL TO ACTION & CAPTION:
CTA: ${currentVar.cta}
Caption: ${currentVar.caption}
SEO Keywords: ${(concept.keywords || []).map(k => '#' + k).join(" ")}
================================================================================
`;

  navigator.clipboard.writeText(fullScript.trim()).then(() => {
    showToast(`Complete Day ${concept.day} Script copied to clipboard!`);
  });
}

function exportSingleConceptJSON(dayNum) {
  const concept = TIKTOK_COMMERCE_DATA.creativePipeline.find(c => c.day === dayNum) || TIKTOK_COMMERCE_DATA.creativePipeline[0];
  const blob = new Blob([JSON.stringify(concept, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `concept-day-${concept.day}-${Date.now()}.json`;
  a.click();
  showToast(`Exported Day ${concept.day} Concept Brief!`);
}

// ==========================================================================
// 4C. TikTok Shop Growth & Commercial Engine (Agent 4)
// ==========================================================================
function initShopGrowth() {
  renderFunnelStages();
  renderFunnelStageInspector("s1_views");
  renderDiagnosticOutput("high_views_low_clicks");
  renderCreatorPerformanceLedger("all", "all");

  // Creator Type filter pills
  const typePills = document.querySelectorAll("#creator-type-filter-pills .filter-pill");
  typePills.forEach(pill => {
    pill.addEventListener("click", () => {
      typePills.forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      currentCreatorTypeFilter = pill.getAttribute("data-type");
      renderCreatorPerformanceLedger(currentCreatorTypeFilter, currentCreatorStatusFilter);
    });
  });

  // Creator Status filter pills
  const statusPills = document.querySelectorAll("#creator-status-filter-pills .filter-pill");
  statusPills.forEach(pill => {
    pill.addEventListener("click", () => {
      statusPills.forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      currentCreatorStatusFilter = pill.getAttribute("data-status");
      renderCreatorPerformanceLedger(currentCreatorTypeFilter, currentCreatorStatusFilter);
    });
  });
}

function renderFunnelStages() {
  const container = document.getElementById("funnel-stages-container");
  if (!container || !TIKTOK_COMMERCE_DATA.commercialFunnelData) return;

  container.innerHTML = TIKTOK_COMMERCE_DATA.commercialFunnelData.stages.map(st => `
    <div class="funnel-stage-card ${st.id === activeFunnelStageId ? 'active' : ''}" onclick="selectFunnelStage('${st.id}')">
      <div class="stage-card-top">
        <span class="stage-num-badge">STAGE ${st.num}</span>
        <span class="${st.statusClass}" style="font-size: 10px; font-weight: 700;">${st.status}</span>
      </div>
      <h5>${st.name}</h5>
      <div class="stage-metric-val">${st.metric.split(' ')[0]} <span style="font-size: 11px; font-weight: 500; color: var(--text-muted);">${st.metric.split(' ').slice(1).join(' ')}</span></div>
      <div class="stage-submetric">${st.subMetric}</div>
      <div class="stage-dropoff-tag">
        <span>Drop: ${st.dropOff.split(' ')[0]}</span>
      </div>
    </div>
  `).join("");
}

function selectFunnelStage(stageId) {
  activeFunnelStageId = stageId;
  renderFunnelStages();
  renderFunnelStageInspector(stageId);
}

function renderFunnelStageInspector(stageId) {
  const container = document.getElementById("funnel-stage-inspector");
  if (!container || !TIKTOK_COMMERCE_DATA.commercialFunnelData) return;

  const stage = TIKTOK_COMMERCE_DATA.commercialFunnelData.stages.find(s => s.id === stageId) || TIKTOK_COMMERCE_DATA.commercialFunnelData.stages[0];

  const optimizationLevers = {
    s1_views: { lever: "Deploy 10 Curiosity Archetypes + Macro Foley pattern interrupts in first 0.4s to exceed 70% retention.", downstream: "CreativeCraft generates Hook A/B/C variations." },
    s2_profile: { lever: "Pin 3-part 'Reset Club' playlist and highlight limited TikTok Shop launch vouchers on profile header.", downstream: "BrandCraft optimizes profile narrative." },
    s3_clicks: { lever: "Anchor in-video yellow cart with animated pointer and kinetic text overlay in seconds 30-38.", downstream: "ShopGrowth audits creator tagging compliance." },
    s4_atc: { lever: "Design 7-slide mobile carousel highlighting Neodymium hold proof, sizing blueprints, and bundle savings.", downstream: "ShopGrowth tests 2-pack bundle discounts." },
    s5_checkout: { lever: "Offer free domestic shipping threshold and highlight 100% money-back guarantee.", downstream: "ShopEngine tracks cart abandonment triggers." },
    s6_purchase: { lever: "Automate immediate 24h domestic warehouse dispatch notification to maintain 100% Seller SLA.", downstream: "RetentionLoop triggers order confirmation." },
    s7_repeat: { lever: "Include tactile VIP warranty pass with $10 repurchase voucher and monthly $500 community draw.", downstream: "RetentionLoop activates Day 14 repurchase flow." }
  };

  const lev = optimizationLevers[stage.id] || optimizationLevers.s1_views;

  container.innerHTML = `
    <div class="stage-inspector-grid">
      <div class="stage-inspector-item">
        <h6>STAGE ${stage.num}: ${stage.name}</h6>
        <p>${stage.desc}</p>
        <div style="margin-top: 8px; font-family: var(--font-mono); font-size: 11px; color: var(--tt-cyan);">
          Target Benchmark: <strong>${stage.benchmark}</strong> • Drop-off: <strong>${stage.dropOff}</strong>
        </div>
      </div>
      <div class="stage-inspector-item">
        <h6><i data-lucide="zap" class="text-pink" style="width:12px;height:12px;display:inline;"></i> Primary Conversion Lever</h6>
        <p class="text-white">${lev.lever}</p>
      </div>
      <div class="stage-inspector-item">
        <h6><i data-lucide="workflow" class="text-green" style="width:12px;height:12px;display:inline;"></i> Downstream Agent Action</h6>
        <p class="text-secondary">${lev.downstream}</p>
      </div>
    </div>
  `;

  lucide.createIcons();
}

function selectDiagnosticScenario(diagKey) {
  activeDiagnosticKey = diagKey;
  document.querySelectorAll(".diag-btn").forEach(btn => {
    btn.classList.toggle("active", btn.getAttribute("data-diag") === diagKey);
  });
  renderDiagnosticOutput(diagKey);
  showToast("Diagnostic Triage Protocol executed!");
}

function renderDiagnosticOutput(diagKey) {
  const container = document.getElementById("diagnostic-output-box");
  if (!container || !TIKTOK_COMMERCE_DATA.funnelDiagnostics) return;

  const diag = TIKTOK_COMMERCE_DATA.funnelDiagnostics[diagKey] || TIKTOK_COMMERCE_DATA.funnelDiagnostics.high_views_low_clicks;

  container.innerHTML = `
    <div class="diagnostic-detail-card">
      <div class="diag-header-row">
        <div>
          <h4>${diag.title} — ${diag.subtitle}</h4>
          <span style="font-size: 11.5px; color: var(--text-secondary);">${diag.symptom}</span>
        </div>
        <span class="badge ${diag.badgeClass}">${diag.severity}</span>
      </div>

      <div class="diag-root-cause-box">
        <strong><i data-lucide="alert-circle" style="width:13px;height:13px;display:inline;"></i> Root Cause Analysis:</strong><br>
        ${diag.rootCause}
      </div>

      <h5 style="font-size: 13px; margin-bottom: 10px; color: white; display: flex; align-items: center; gap: 6px;">
        <i data-lucide="check-square" class="text-green"></i> 4-Step Immediate Remediation Protocol:
      </h5>
      <ul class="remediation-steps-list">
        ${diag.remediationPlan.map(step => `
          <li><i data-lucide="arrow-right-circle"></i> <span>${step}</span></li>
        `).join("")}
      </ul>

      <div class="diag-handoff-banner">
        <i data-lucide="bot"></i>
        <span><strong>Autonomous Multi-Agent Directive:</strong> ${diag.agentAction}</span>
      </div>
    </div>
  `;

  lucide.createIcons();
}

function renderCreatorPerformanceLedger(typeFilter, statusFilter) {
  const container = document.getElementById("creator-performance-container");
  if (!container || !TIKTOK_COMMERCE_DATA.creatorPerformanceLedger) return;

  let filtered = TIKTOK_COMMERCE_DATA.creatorPerformanceLedger;

  if (typeFilter !== "all") {
    filtered = filtered.filter(c => c.typeCode === typeFilter);
  }

  if (statusFilter !== "all") {
    if (statusFilter === "scale") {
      filtered = filtered.filter(c => c.status.toLowerCase().includes("scale"));
    } else if (statusFilter === "coach") {
      filtered = filtered.filter(c => c.status.toLowerCase().includes("coach") || c.status.toLowerCase().includes("maintain"));
    } else if (statusFilter === "trim") {
      filtered = filtered.filter(c => c.status.toLowerCase().includes("trim") || c.status.toLowerCase().includes("follow-up"));
    }
  }

  container.innerHTML = filtered.map(c => `
    <div class="creator-perf-card">
      <div class="creator-perf-top">
        <div class="creator-perf-avatar">${c.avatar}</div>
        <div class="creator-perf-meta">
          <h4>${c.name} <span style="font-size: 11px; font-weight: 500; color: var(--text-muted);">${c.handle}</span></h4>
          <span>${c.niche} • ${c.followers} followers</span>
        </div>
      </div>

      <div class="creator-perf-pills">
        <span class="badge" style="font-size: 9.5px;">${c.type}</span>
        <span class="badge" style="background: rgba(255,184,0,0.15); color: var(--neon-yellow); font-size: 9.5px;">${c.tier}</span>
        ${c.sparkCode !== 'N/A' ? `<span class="badge" style="background: rgba(37,244,238,0.15); color: var(--tt-cyan); font-size: 9.5px;">${c.sparkCode}</span>` : ''}
      </div>

      <div class="creator-perf-metrics-grid">
        <div class="perf-metric-cell">
          <span>Posts & Views</span>
          <strong>${c.videosProduced} vids • ${(c.views / 1000).toFixed(1)}K</strong>
        </div>
        <div class="perf-metric-cell">
          <span>In-Video Clicks</span>
          <strong>${c.clicks.toLocaleString()} (${c.ctr})</strong>
        </div>
        <div class="perf-metric-cell">
          <span>Orders & CVR</span>
          <strong>${c.orders} (${c.cvr})</strong>
        </div>
        <div class="perf-metric-cell">
          <span>Total GMV</span>
          <strong class="text-yellow">$${c.gmv.toFixed(2)}</strong>
        </div>
        <div class="perf-metric-cell">
          <span>Commission Paid</span>
          <strong>$${c.commissionPaid.toFixed(2)}</strong>
        </div>
        <div class="perf-metric-cell">
          <span>Net Profit</span>
          <strong class="${c.netProfit >= 0 ? 'text-green' : 'text-red'}">$${c.netProfit.toFixed(2)}</strong>
        </div>
      </div>

      <div class="creator-verdict-banner ${c.statusClass}">
        <strong>Action Verdict: ${c.status.toUpperCase()}</strong>
        <p style="margin-top: 2px;">${c.verdict}</p>
      </div>

      <div class="creator-actions-row">
        <button class="btn-sm btn-outline" style="flex: 1;" onclick="openCreatorPitchModal('${escapeHtml(c.name)}', '${escapeHtml(c.handle)}', '${c.pitchTemplate}')">
          <i data-lucide="send" style="width:11px;height:11px;"></i> Copy Pitch DM
        </button>
        ${c.status.toLowerCase().includes('scale') ? `
          <button class="btn-sm btn-primary" onclick="showToast('Spark Ad scaled for ${c.handle}!')">
            <i data-lucide="rocket" style="width:11px;height:11px;"></i> Boost Spark
          </button>
        ` : ''}
      </div>
    </div>
  `).join("");

  lucide.createIcons();
}

function openCreatorPitchModal(name, handle, templateKey) {
  const templates = TIKTOK_COMMERCE_DATA.creatorOutreachTemplates;
  const tpl = templates[templateKey] || templates.initial_dm;
  const personalizedText = tpl.body.replace(/\[Name\]/g, name).replace(/\[Creator Name\]/g, name);

  navigator.clipboard.writeText(personalizedText).then(() => {
    showToast(`Copied personalized pitch for ${handle}!`);
  });
}

// ==========================================================================
// 5. Specialist Agent Workbench
// ==========================================================================
function initAgentWorkbench() {
  const agentItems = document.querySelectorAll(".agent-select-item");
  agentItems.forEach(item => {
    item.addEventListener("click", () => {
      const agentKey = item.getAttribute("data-agent");
      openAgent(agentKey);
    });
  });

  const presetSelect = document.getElementById("preset-product-select");
  if (presetSelect) {
    presetSelect.addEventListener("change", () => {
      loadPresetProduct(presetSelect.value);
    });
  }

  const runBtn = document.getElementById("btn-run-agent");
  if (runBtn) {
    runBtn.addEventListener("click", runActiveAgentSimulation);
  }

  const copyBtn = document.getElementById("btn-copy-output");
  if (copyBtn) {
    copyBtn.addEventListener("click", copyAgentOutput);
  }

  const exportBtn = document.getElementById("btn-export-json");
  if (exportBtn) {
    exportBtn.addEventListener("click", exportAgentJSON);
  }

  renderAgentInputs(activeAgent);
  runActiveAgentSimulation();
}

function openAgent(agentKey) {
  activeAgent = agentKey;
  switchTab("agent-workbench");

  document.querySelectorAll(".agent-select-item").forEach(item => {
    item.classList.toggle("active", item.getAttribute("data-agent") === agentKey);
  });

  const agentHeaders = {
    marketintel: { name: "MarketIntel", role: "Product & Market Intelligence — 100-Point Scorecard & 4-Tier Strategy", icon: "search-check", color: "cyan" },
    hookmaster: { name: "BrandCraft", role: "Brand & Content Strategy — 70/20/10 Ratio & 5-Part Scripts", icon: "sparkles", color: "pink" },
    shopengine: { name: "ShopEngine", role: "Shop Merchandiser & Strategist — Unit Margins & Bundles", icon: "shopping-cart", color: "yellow" },
    creatorscale: { name: "CreatorScale", role: "Creator & Affiliate Scaler — Seeding & DM Pitches", icon: "users", color: "purple" },
    growthpulse: { name: "GrowthPulse", role: "Spark Ads & Growth Optimizer — ROAS Triage & Pacing", icon: "activity", color: "green" },
    retentionloop: { name: "RetentionLoop", role: "Retention & Community Lead — Comment-to-Video & Reviews", icon: "message-square-heart", color: "blue" },
    orchestrator: { name: "Team Orchestrator", role: "Team Lead — Daily Synchronization & Flywheel Health", icon: "shield-check", color: "pink" }
  };

  const meta = agentHeaders[agentKey] || agentHeaders.hookmaster;
  document.getElementById("agent-header-name").textContent = meta.name;
  document.getElementById("agent-header-role").textContent = meta.role;
  document.getElementById("btn-run-text").textContent = `Run ${meta.name} Engine`;

  const iconContainer = document.getElementById("agent-header-icon");
  iconContainer.className = `icon-avatar ${meta.color}`;
  iconContainer.innerHTML = `<i data-lucide="${meta.icon}"></i>`;
  lucide.createIcons();

  renderAgentInputs(agentKey);
  runActiveAgentSimulation();
}

function getSelectedProductData() {
  const presetKey = document.getElementById("preset-product-select")?.value || "magnetic_tray";
  if (presetKey !== "custom" && TIKTOK_COMMERCE_DATA.products[presetKey]) {
    return TIKTOK_COMMERCE_DATA.products[presetKey];
  }
  return {
    name: "ApexGrip Magnetic Tray",
    painPoint: "Messy bag cables & lost gear",
    retailPrice: 34.99,
    cogs: 7.50,
    heroBenefit: "Instant magnetic cable organization in 1 second",
    avatar: "Everyday carry enthusiasts & commuters",
    trendingAudio: "Lo-fi Chill Hop + ASMR snap",
    objection: "Does the magnetic hold loosen over time?"
  };
}

function loadPresetProduct(presetKey) {
  renderAgentInputs(activeAgent);
  runActiveAgentSimulation();
}

function renderAgentInputs(agentKey) {
  const container = document.getElementById("agent-inputs-container");
  const prod = getSelectedProductData();

  if (agentKey === "marketintel") {
    container.innerHTML = `
      <div class="form-grid-3">
        <div class="form-group">
          <label>Candidate Product</label>
          <input type="text" id="mi-prod-name" class="form-input" value="${prod.name}">
        </div>
        <div class="form-group">
          <label>Catalog Tier Classification</label>
          <select id="mi-tier" class="form-select">
            <option value="HERO">HERO PRODUCT (Customer Acquisition)</option>
            <option value="SUPPORTING">SUPPORTING PRODUCT (AOV / Basket Builder)</option>
            <option value="REPEAT">REPEAT PRODUCT (Recurring Consumable LTV)</option>
            <option value="TREND">TREND PRODUCT (Rapid Revenue Sprint)</option>
          </select>
        </div>
        <div class="form-group">
          <label>Estimated Landed Cost ($)</label>
          <input type="number" id="mi-cogs" class="form-input" value="${prod.cogs}">
        </div>
      </div>
    `;
  } else if (agentKey === "hookmaster") {
    container.innerHTML = `
      <div class="form-grid-3">
        <div class="form-group">
          <label>Content Pillar</label>
          <select id="hm-pillar-select" class="form-select">
            <option value="p1">Pillar 1: Transformation & Resets (70% Value)</option>
            <option value="p2">Pillar 2: Education & Hacks (70% Value)</option>
            <option value="p3">Pillar 3: Extreme Stress-Tests (20% Integrated)</option>
            <option value="p4">Pillar 4: Lifestyle & POV Relatability (70% Value)</option>
            <option value="p5">Pillar 5: Community Comment Lab (20% Integrated)</option>
            <option value="p6">Pillar 6: Design BTS & Prototyping (10% Commercial)</option>
          </select>
        </div>
        <div class="form-group">
          <label>Target Audience Avatar</label>
          <input type="text" id="hm-avatar" class="form-input" value="${prod.avatar}">
        </div>
        <div class="form-group">
          <label>Commercial Intensity</label>
          <select id="hm-ratio-select" class="form-select">
            <option value="70">70% Value (Zero Sales Pitch)</option>
            <option value="20">20% Product-Integrated Story</option>
            <option value="10">10% Direct Commercial CTA</option>
          </select>
        </div>
      </div>
    `;
  } else if (agentKey === "shopengine") {
    container.innerHTML = `
      <div class="form-grid-3">
        <div class="form-group">
          <label>Retail Selling Price ($)</label>
          <input type="number" id="se-price" class="form-input" value="${prod.retailPrice}">
        </div>
        <div class="form-group">
          <label>Product COGS ($)</label>
          <input type="number" id="se-cogs" class="form-input" value="${prod.cogs}">
        </div>
        <div class="form-group">
          <label>Affiliate Commission (%)</label>
          <input type="number" id="se-comm" class="form-input" value="20">
        </div>
      </div>
    `;
  } else if (agentKey === "creatorscale") {
    container.innerHTML = `
      <div class="form-grid-3">
        <div class="form-group">
          <label>Target Creator Niche</label>
          <input type="text" id="cs-niche" class="form-input" value="EDC / Tech Setup / Lifestyle Vloggers">
        </div>
        <div class="form-group">
          <label>Creator Follower Bracket</label>
          <select id="cs-bracket" class="form-select">
            <option value="micro">Micro-Creators (10K - 100K Followers) [Recommended]</option>
            <option value="mid">Mid-Tier (100K - 500K Followers)</option>
            <option value="open">Open Affiliate (1K+ Followers)</option>
          </select>
        </div>
        <div class="form-group">
          <label>Sample Seeding Offer</label>
          <input type="text" id="cs-offer" class="form-input" value="Free VIP Gift Box + 20% Yellow Basket Bounty">
        </div>
      </div>
    `;
  } else if (agentKey === "growthpulse") {
    container.innerHTML = `
      <div class="form-grid-3">
        <div class="form-group">
          <label>Organic Video View Velocity</label>
          <select id="gp-velocity" class="form-select">
            <option value="3.5x">3.5x Baseline Velocity (High Intent - Boost)</option>
            <option value="5.0x">5.0x Mega Breakout (Aggressive Scale)</option>
            <option value="1.2x">1.2x Baseline (Keep Organic Only)</option>
          </select>
        </div>
        <div class="form-group">
          <label>Yellow Cart In-Video CTR</label>
          <input type="text" id="gp-ctr" class="form-input" value="2.8%">
        </div>
        <div class="form-group">
          <label>Daily Test Spark Budget</label>
          <input type="text" id="gp-budget" class="form-input" value="$50.00 / day">
        </div>
      </div>
    `;
  } else if (agentKey === "retentionloop") {
    container.innerHTML = `
      <div class="form-grid-2">
        <div class="form-group">
          <label>Top In-Feed Customer Objection / Question</label>
          <input type="text" id="rl-objection" class="form-input" value="${prod.objection}">
        </div>
        <div class="form-group">
          <label>Review Incentive Offer</label>
          <input type="text" id="rl-incentive" class="form-input" value="$10 TikTok Shop Coupon + Monthly $500 Giveaway">
        </div>
      </div>
    `;
  } else if (agentKey === "orchestrator") {
    container.innerHTML = `
      <div class="form-grid-3">
        <div class="form-group">
          <label>Target 30-Day GMV Goal</label>
          <input type="text" id="orch-gmv" class="form-input" value="$50,000 / month">
        </div>
        <div class="form-group">
          <label>Daily Organic Post Target</label>
          <input type="text" id="orch-posts" class="form-input" value="3 - 5 Videos / Day">
        </div>
        <div class="form-group">
          <label>Weekly Creator Seed Target</label>
          <input type="text" id="orch-seeds" class="form-input" value="25 Free Samples / Week">
        </div>
      </div>
    `;
  }
}

function runActiveAgentSimulation() {
  const outputBox = document.getElementById("agent-output-box");
  const statusBadge = document.getElementById("output-status-badge");
  const prod = getSelectedProductData();

  statusBadge.className = "badge badge-glow";
  statusBadge.textContent = "Processing Engine...";

  setTimeout(() => {
    statusBadge.className = "badge badge-success";
    statusBadge.textContent = "Completed (Ready)";

    if (activeAgent === "marketintel") {
      outputBox.innerHTML = `
<div style="color: #25F4EE; font-weight: 700; font-size: 14px; margin-bottom: 8px;">
  🔍 AGENT 1: PRODUCT & MARKET INTELLIGENCE EVALUATION (100-PT SCORECARD)
</div>
<div style="background: rgba(37, 244, 238, 0.08); border-left: 3px solid #25F4EE; padding: 12px; margin-bottom: 14px; border-radius: 4px;">
  <strong>Product:</strong> ${prod.name}<br>
  <strong>Classification:</strong> HERO PRODUCT (Customer Acquisition Engine)<br>
  <strong>Total Score:</strong> <span style="color: #00F090; font-weight: 800; font-size: 15px;">93 / 100 (S-Tier Greenlight)</span>
</div>

<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; font-size: 12px; margin-bottom: 12px;">
  <div style="background: rgba(255,255,255,0.03); padding: 8px 12px; border-radius: 6px;">• TikTok Visual Potential: <strong>15/15 pts</strong></div>
  <div style="background: rgba(255,255,255,0.03); padding: 8px 12px; border-radius: 6px;">• Problem/Benefit Clarity: <strong>14/15 pts</strong></div>
  <div style="background: rgba(255,255,255,0.03); padding: 8px 12px; border-radius: 6px;">• Demonstration & ASMR: <strong>10/10 pts</strong></div>
  <div style="background: rgba(255,255,255,0.03); padding: 8px 12px; border-radius: 6px;">• Gross Margin Potential: <strong>9/10 pts (78.6%)</strong></div>
</div>
      `;
    } else if (activeAgent === "hookmaster") {
      outputBox.innerHTML = `
<div style="color: #FE2C55; font-weight: 700; font-size: 14px; margin-bottom: 8px;">
  🎬 BRANDCRAFT 5-PART SCRIPT ENGINE — [70% VALUE / P1: RESETS]
</div>
<div style="background: rgba(254, 44, 85, 0.08); border-left: 3px solid #FE2C55; padding: 12px; margin-bottom: 14px; border-radius: 4px;">
  <strong>🎯 Concept Title:</strong> The 60-Second Sunday Night Reset<br>
  <strong>⚡ 70/20/10 Ratio:</strong> 70% Pure Value / Entertainment (Zero Sales Friction)<br>
  <strong>🎧 Foley:</strong> Chaotic rummaging &rarr; Crisp magnetic snap &rarr; Lo-fi ambient beat.
</div>

<div style="display: flex; flex-direction: column; gap: 10px; font-size: 12.5px;">
  <div style="background: rgba(255,255,255,0.03); padding: 10px; border-radius: 6px;">
    <strong style="color: #FE2C55;">1. HOOK (0:00 - 0:02.5):</strong> "If your Monday morning feels like a warzone, do this tonight."<br>
    <em>Visual: Messy bag dumped violently in reverse motion. Text: "The 60s Sunday Reset 🎒⚡"</em>
  </div>

  <div style="background: rgba(255,255,255,0.03); padding: 10px; border-radius: 6px;">
    <strong style="color: #25F4EE;">2. VALUE (0:02.5 - 0:18):</strong> "Stop packing in the morning when you're half asleep. Group your essentials by weight."<br>
    <em>Visual: Fast 3-step cable sorting & EDC tray organization.</em>
  </div>

  <div style="background: rgba(255,255,255,0.03); padding: 10px; border-radius: 6px;">
    <strong style="color: #9D4EDD;">3. EMOTION (0:18 - 0:28):</strong> "Nothing beats the peace of mind knowing you aren't going to forget your keys or charger."<br>
    <em>Visual: Macro close-up of satisfying magnetic ASMR clicks.</em>
  </div>

  <div style="background: rgba(255,255,255,0.03); padding: 10px; border-radius: 6px;">
    <strong style="color: #00F090;">4. PAYOFF (0:28 - 0:38):</strong> "Bag packed, desk cleared, ready for the week."<br>
    <em>Visual: Clean aesthetic desk, smooth zip closure.</em>
  </div>

  <div style="background: rgba(255,255,255,0.03); padding: 10px; border-radius: 6px;">
    <strong style="color: #FFB800;">5. OPTIONAL COMMERCIAL ACTION (0:38 - 0:43):</strong> "Used the ApexGrip tray—left the link in the yellow cart for anyone doing a weekly reset!"<br>
    <em>Pinned Comment: "What time do you usually pack your bag: night before or 5 mins before leaving?"</em>
  </div>
</div>
      `;
    } else if (activeAgent === "shopengine") {
      outputBox.innerHTML = `
<div style="color: #FFB800; font-weight: 700; font-size: 14px; margin-bottom: 8px;">
  📊 SHOPENGINE MERCHANDISING & MARGIN BLUEPRINT
</div>
<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 14px; margin-bottom: 14px;">
  <div style="background: rgba(255, 184, 0, 0.08); border: 1px solid rgba(255, 184, 0, 0.3); padding: 12px; border-radius: 8px;">
    <strong style="color: #FFB800;">HERO SKU UNIT ECONOMICS</strong><br>
    • Retail Price: <strong>$34.99</strong><br>
    • COGS + Packaging: <strong>$7.50 (21.4%)</strong><br>
    • Domestic Shipping: <strong>$4.20 (12.0%)</strong><br>
    • TikTok Shop Fee (6%): <strong>$2.10</strong><br>
    • Creator Commission (20%): <strong>$7.00</strong><br>
    • Net Retained Profit: <strong style="color: #00F090;">$14.19 (40.5% Net Margin)</strong>
  </div>

  <div style="background: rgba(37, 244, 238, 0.08); border: 1px solid rgba(37, 244, 238, 0.3); padding: 12px; border-radius: 8px;">
    <strong style="color: #25F4EE;">HIGH-AOV BUNDLE ARCHITECTURE</strong><br>
    • <strong>Tier 1:</strong> 1-Pack Starter ($34.99 - Single SKU)<br>
    • <strong>Tier 2 (Hero Bundle):</strong> 2-Pack Duo + Travel Case ($54.99 - Save 21%)<br>
    • <strong>Tier 3:</strong> 3-Pack Family Ecosystem ($79.99)<br>
    • <em>Projected AOV Increase: +42%</em>
  </div>
</div>
      `;
    } else if (activeAgent === "creatorscale") {
      outputBox.innerHTML = `
<div style="color: #9D4EDD; font-weight: 700; font-size: 14px; margin-bottom: 8px;">
  🤝 CREATORSCALE OUTREACH SPRINT & SEEDING SCRIPT
</div>
<div style="background: #090c13; border: 1px solid rgba(255,255,255,0.1); padding: 14px; border-radius: 8px; font-family: var(--font-mono); font-size: 12px; color: #a5d8ff; line-height: 1.5;">
  Hey [Creator Name]! ✨ Love your desk setup and EDC clips.<br><br>
  We just launched the ${prod.name} on TikTok Shop (it fixes cable mess in 2 seconds with magnetic ASMR snaps).<br><br>
  We’d love to send you a complimentary VIP box—zero posting obligations! We also set up a 20% affiliate commission on the yellow cart if your community loves it.<br><br>
  Drop your shipping address or tap 1-click sample request here: [TikTok Shop Affiliate Link] 📦🚀
</div>
      `;
    } else if (activeAgent === "growthpulse") {
      outputBox.innerHTML = `
<div style="color: #00F090; font-weight: 700; font-size: 14px; margin-bottom: 8px;">
  🚀 GROWTHPULSE SPARK ADS SCALING ENGINE
</div>
<div style="background: rgba(0, 240, 144, 0.1); border: 1px solid rgba(0, 240, 144, 0.3); padding: 12px; border-radius: 8px;">
  <strong style="color: #00F090;">ORGANIC-TO-PAID TRIAGE: GREEN LIGHT</strong><br>
  • Organic Velocity: <strong>3.5x Baseline</strong><br>
  • In-Video CTR: <strong>2.8% (Target &gt; 2.0%)</strong><br>
  • 2-Second Retention: <strong>72.4%</strong><br>
  • Deploy $50/day test Spark Ad on winner. Scale 20% daily when ROAS &gt; 2.8x.
</div>
      `;
    } else if (activeAgent === "retentionloop") {
      outputBox.innerHTML = `
<div style="color: #3A86FF; font-weight: 700; font-size: 14px; margin-bottom: 8px;">
  💬 RETENTIONLOOP COMMENT CONVERSION & REVIEW FLYWHEEL
</div>
<div style="background: #090c13; padding: 12px; border-radius: 8px; font-size: 12px; line-height: 1.6;">
  <strong>🎬 REPLY-WITH-VIDEO SCRIPT:</strong><br>
  • <strong>Hook (0-3s):</strong> Display comment &rarr; "Replying to @viewer: Will it drop everything if you shake it? Let's test..."<br>
  • <strong>Demonstration (3-12s):</strong> Creator holds full tray upside down and shakes violently. Zero movement.<br>
  • <strong>CTA (12-18s):</strong> "The magnets aren't going anywhere. Yellow cart link is live below!"
</div>
      `;
    } else if (activeAgent === "orchestrator") {
      outputBox.innerHTML = `
<div style="color: #FE2C55; font-weight: 700; font-size: 14px; margin-bottom: 8px;">
  🛡️ TEAM ORCHESTRATOR — MASTER PERFORMANCE BRIEFING
</div>
<div style="background: #090c13; padding: 12px; border-radius: 8px; font-size: 12px; line-height: 1.6;">
  <strong>📋 TODAY'S SYNCHRONIZED DIRECTIVES:</strong><br>
  1. <strong>BrandCraft:</strong> Execute 70/20/10 ratio: 3 'Transformation' posts + 1 'Comment Lab' demo + 1 restock drop.<br>
  2. <strong>ShopEngine:</strong> Restock Tier 2 Duo-pack inventory buffer and monitor 24h dispatch SLA.<br>
  3. <strong>CreatorScale:</strong> Approve 20 pending sample requests and deploy delivery follow-up DMs.<br>
  4. <strong>GrowthPulse:</strong> Scale winning UGC video (#c1 Alex Rivera) to $150/day at current 3.84x ROAS.
</div>
      `;
    }
  }, 400);
}

function copyAgentOutput() {
  const outputElem = document.getElementById("agent-output-box");
  if (!outputElem) return;
  const text = outputElem.innerText;
  navigator.clipboard.writeText(text).then(() => {
    showToast("Specialist intelligence copied to clipboard!");
  }).catch(() => {
    showToast("Copied to clipboard!");
  });
}

function exportAgentJSON() {
  const prod = getSelectedProductData();
  const exportData = {
    agent: activeAgent,
    timestamp: new Date().toISOString(),
    product: prod,
    outputSummary: document.getElementById("agent-output-box")?.innerText || ""
  };
  const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `tiktok-commerce-${activeAgent}-${Date.now()}.json`;
  a.click();
  showToast("Exported JSON report!");
}

// ==========================================================================
// 6. Viral Hook Lab & 9 Emotion Pillars
// ==========================================================================
function initHookLab() {
  renderHookCards("all");

  const filterPills = document.querySelectorAll("#emotion-filter-pills .filter-pill");
  filterPills.forEach(pill => {
    pill.addEventListener("click", () => {
      filterPills.forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      const pillar = pill.getAttribute("data-pillar");
      currentEmotionFilter = pillar;
      renderHookCards(pillar);
    });
  });

  const hookProdInput = document.getElementById("hook-product-input");
  const hookPainInput = document.getElementById("hook-pain-input");
  const hookEmotionSelect = document.getElementById("hook-emotion-select");

  [hookProdInput, hookPainInput, hookEmotionSelect].forEach(elem => {
    if (elem) {
      elem.addEventListener("input", updateCustomHookPreview);
    }
  });

  updateCustomHookPreview();
}

function renderHookCards(pillarFilter) {
  const container = document.getElementById("hooks-cards-container");
  if (!container) return;

  const filtered = pillarFilter === "all" 
    ? TIKTOK_COMMERCE_DATA.hooksVault 
    : TIKTOK_COMMERCE_DATA.hooksVault.filter(h => h.pillar.toLowerCase() === pillarFilter.toLowerCase());

  container.innerHTML = filtered.map((hook, idx) => {
    const pillarClass = `pillar-${hook.pillar.toLowerCase().replace(/\s+/g, '-')}`;
    return `
      <div class="hook-card" onclick="selectHookForCustomizer('${escapeHtml(hook.text)}', '${hook.pillar}')">
        <div class="hook-card-top">
          <span class="pillar-badge ${pillarClass}">${hook.pillar}</span>
          <span class="text-muted" style="font-size: 11px;">#${idx + 1}</span>
        </div>
        <p>"${hook.text}"</p>
        <div class="hook-card-footer">
          <span><i data-lucide="video" style="width:12px;height:12px;"></i> Visual Hook Ready</span>
          <span class="text-cyan" style="font-weight: 600;">Load in Lab &rarr;</span>
        </div>
      </div>
    `;
  }).join("");

  lucide.createIcons();
}

function selectHookForCustomizer(hookText, pillar) {
  const emotionSelect = document.getElementById("hook-emotion-select");
  if (emotionSelect) {
    for (let opt of emotionSelect.options) {
      if (opt.value.toLowerCase().includes(pillar.toLowerCase())) {
        emotionSelect.value = opt.value;
        break;
      }
    }
  }
  document.getElementById("custom-hook-display").textContent = `"${hookText}"`;
  showToast("Loaded hook into Customizer!");
}

function updateCustomHookPreview() {
  const prodName = document.getElementById("hook-product-input")?.value || "ApexGrip Magnetic Tray";
  const pain = document.getElementById("hook-pain-input")?.value || "messy backpack cables";
  const emotion = document.getElementById("hook-emotion-select")?.value || "Understood";

  const hookTemplates = {
    Understood: `"POV: You spend 10 minutes every morning searching for your ${pain}..."`,
    Curious: `"Why is nobody talking about this TikTok Shop find that fixes ${pain} in 2 seconds?"`,
    "Excited to Improve": `"This 30-second ${prodName} upgrade completely reset my daily routine."`,
    Surprised: `"We stress-tested the ${prodName} to see if it actually fixes ${pain}..."`,
    Inspired: `"The one aesthetic upgrade that made my setup look 10x more premium."`,
    Entertained: `"POV: You bought the ${prodName} to fix your life and now you can't stop using it."`
  };

  const hookText = hookTemplates[emotion] || hookTemplates.Understood;
  document.getElementById("custom-hook-display").textContent = hookText;
  document.getElementById("custom-hook-visual").textContent = `Fast pattern interrupt demonstrating the exact friction of ${pain}.`;
  document.getElementById("custom-hook-audio").textContent = `Chaotic foley sounds &rarr; Sudden ultra-satisfying tactile click.`;
  document.getElementById("custom-hook-text").textContent = `"Never dealing with ${pain} again ✨"`;
}

function escapeHtml(str) {
  return str.replace(/'/g, "\\'").replace(/"/g, '&quot;');
}

// ==========================================================================
// 7. Shop Economics & Margin Calculator
// ==========================================================================
function initMarginCalculator() {
  const sliders = ["input-price", "input-cogs", "input-shipping", "input-platform-fee", "input-commission", "input-roas"];
  sliders.forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener("input", calculateMargins);
    }
  });
  calculateMargins();
}

function calculateMargins() {
  const price = parseFloat(document.getElementById("input-price")?.value || 35);
  const cogs = parseFloat(document.getElementById("input-cogs")?.value || 7.5);
  const shipping = parseFloat(document.getElementById("input-shipping")?.value || 4.2);
  const platformFeePct = parseFloat(document.getElementById("input-platform-fee")?.value || 6);
  const commissionPct = parseFloat(document.getElementById("input-commission")?.value || 20);
  const roas = parseFloat(document.getElementById("input-roas")?.value || 3.0);

  // Update slider badges
  document.getElementById("val-price").textContent = `$${price.toFixed(2)}`;
  document.getElementById("val-cogs").textContent = `$${cogs.toFixed(2)}`;
  document.getElementById("val-shipping").textContent = `$${shipping.toFixed(2)}`;
  document.getElementById("val-platform-fee").textContent = `${platformFeePct.toFixed(1)}%`;
  document.getElementById("val-commission").textContent = `${commissionPct.toFixed(1)}%`;
  document.getElementById("val-roas").textContent = `${roas.toFixed(1)}x`;

  const feeDollars = (price * platformFeePct) / 100;
  const commDollars = (price * commissionPct) / 100;
  const adsAcqCost = price / roas;

  const totalCost = cogs + shipping + feeDollars + commDollars + adsAcqCost;
  const netProfitDollars = price - totalCost;
  const netMarginPct = (netProfitDollars / price) * 100;
  const breakevenROAS = price / (price - (cogs + shipping + feeDollars + commDollars));

  // Update summary metrics
  const netDollarsElem = document.getElementById("out-net-dollars");
  const netPctElem = document.getElementById("out-net-pct");
  const beRoasElem = document.getElementById("out-be-roas");
  const badgeElem = document.getElementById("margin-health-badge");

  netDollarsElem.textContent = `$${netProfitDollars.toFixed(2)}`;
  netDollarsElem.className = netProfitDollars >= 0 ? "text-green" : "text-red";

  netPctElem.textContent = `${netMarginPct.toFixed(1)}%`;
  netPctElem.className = netMarginPct >= 20 ? "text-green" : (netMarginPct > 5 ? "text-yellow" : "text-red");

  beRoasElem.textContent = breakevenROAS > 0 ? `${breakevenROAS.toFixed(2)}x` : "N/A";

  if (netMarginPct >= 25) {
    badgeElem.className = "badge badge-success";
    badgeElem.textContent = "High Profit Margin (Scale Ready)";
  } else if (netMarginPct >= 10) {
    badgeElem.className = "badge";
    badgeElem.textContent = "Moderate Margin (Healthy)";
  } else {
    badgeElem.className = "badge badge-glow";
    badgeElem.textContent = "Low / Negative Margin (Adjust Price)";
  }

  // Update Waterfall Rows
  document.getElementById("wf-rev").textContent = `$${price.toFixed(2)}`;
  document.getElementById("wf-cogs").textContent = `-$${cogs.toFixed(2)}`;
  document.getElementById("wf-shipping").textContent = `-$${shipping.toFixed(2)}`;
  document.getElementById("wf-fee").textContent = `-$${feeDollars.toFixed(2)}`;
  document.getElementById("wf-comm").textContent = `-$${commDollars.toFixed(2)}`;
  document.getElementById("wf-ads").textContent = `-$${adsAcqCost.toFixed(2)}`;
  
  const wfProfit = document.getElementById("wf-profit");
  wfProfit.textContent = `${netProfitDollars >= 0 ? '+' : ''}$${netProfitDollars.toFixed(2)}`;
  wfProfit.parentElement.className = `waterfall-row total-row ${netProfitDollars >= 0 ? 'text-green' : 'text-red'}`;

  // Update Margin Chart
  updateMarginChart([cogs, shipping, feeDollars, commDollars, adsAcqCost, Math.max(0, netProfitDollars)]);
}

// ==========================================================================
// 8. Creator & Affiliate CRM
// ==========================================================================
function initCreatorCRM() {
  renderCreatorCRM();

  const addBtn = document.getElementById("btn-add-creator-modal");
  if (addBtn) {
    addBtn.addEventListener("click", () => {
      showToast("Creator Pitch Generator triggered!");
      openAgent("creatorscale");
    });
  }
}

function renderCreatorCRM() {
  const cols = {
    pitched: document.getElementById("col-pitched"),
    shipped: document.getElementById("col-shipped"),
    live: document.getElementById("col-live"),
    spark: document.getElementById("col-spark")
  };

  Object.values(cols).forEach(col => {
    if (col) col.innerHTML = "";
  });

  TIKTOK_COMMERCE_DATA.creators.forEach(c => {
    const col = cols[c.status];
    if (!col) return;

    const card = document.createElement("div");
    card.className = "creator-card";
    card.innerHTML = `
      <div class="creator-card-header">
        <div class="creator-avatar">${c.avatar}</div>
        <div class="creator-info">
          <strong>${c.handle}</strong>
          <span>${c.name} • ${c.followers} followers</span>
        </div>
      </div>
      <div class="creator-metrics">
        <span>Avg Views: <strong>${c.avgViews}</strong></span>
        <span>GMV: <strong class="text-green">${c.gmv}</strong></span>
      </div>
      <div style="font-size: 10px; color: #94a1b8; margin-bottom: 6px;">
        ${c.tier} ${c.roas !== '--' ? `• <span class="text-cyan">ROAS: ${c.roas}</span>` : ''}
      </div>
      <div class="creator-actions">
        <button class="btn-sm btn-outline" style="flex:1;" onclick="copyPitchForCreator('${c.name}', '${c.handle}')">
          <i data-lucide="send" style="width:10px;height:10px;"></i> DM Pitch
        </button>
      </div>
    `;
    col.appendChild(card);
  });

  lucide.createIcons();
}

function copyPitchForCreator(name, handle) {
  const pitch = `Hey ${name}! Loved your recent content on ${handle}. We'd love to send you a complimentary ApexGrip VIP kit and set you up with 20% affiliate commission on TikTok Shop. Drop your address or request here: [Link]! 📦`;
  navigator.clipboard.writeText(pitch).then(() => {
    showToast(`Copied personalized pitch for ${handle}!`);
  });
}

// ==========================================================================
// 9. Charts Integration
// ==========================================================================
function initCharts() {
  // Revenue Mix Donut Chart
  const revCtx = document.getElementById("revenueMixChart")?.getContext("2d");
  if (revCtx) {
    revenueMixChart = new Chart(revCtx, {
      type: "doughnut",
      data: {
        labels: ["Organic Content", "Affiliate Creators", "Spark Ads Boost"],
        datasets: [{
          data: [42, 38, 20],
          backgroundColor: ["#FE2C55", "#FFB800", "#9D4EDD"],
          borderColor: "#0c0f18",
          borderWidth: 3,
          hoverOffset: 6
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: "72%",
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              label: (context) => ` ${context.label}: ${context.raw}% of GMV`
            }
          }
        }
      }
    });
  }

  // Margin Waterfall Bar Chart
  const marginCtx = document.getElementById("marginWaterfallChart")?.getContext("2d");
  if (marginCtx) {
    marginWaterfallChart = new Chart(marginCtx, {
      type: "bar",
      data: {
        labels: ["COGS", "Shipping", "Platform Fee", "Affiliate", "Spark Ads", "Net Profit"],
        datasets: [{
          label: "Unit Cost / Profit ($)",
          data: [7.50, 4.20, 2.10, 7.00, 4.30, 9.89],
          backgroundColor: [
            "rgba(255, 77, 109, 0.7)",
            "rgba(255, 77, 109, 0.7)",
            "rgba(255, 77, 109, 0.7)",
            "rgba(255, 184, 0, 0.7)",
            "rgba(157, 78, 221, 0.7)",
            "rgba(0, 240, 144, 0.85)"
          ],
          borderColor: [
            "#ff4d6d",
            "#ff4d6d",
            "#ff4d6d",
            "#ffb800",
            "#9d4edd",
            "#00f090"
          ],
          borderWidth: 1,
          borderRadius: 4
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false }
        },
        scales: {
          x: {
            grid: { color: "rgba(255, 255, 255, 0.05)" },
            ticks: { color: "#94a1b8", font: { size: 10 } }
          },
          y: {
            grid: { color: "rgba(255, 255, 255, 0.05)" },
            ticks: {
              color: "#94a1b8",
              font: { size: 10 },
              callback: (value) => `$${value}`
            }
          }
        }
      }
    });
  }
}

function updateMarginChart(dataArray) {
  if (marginWaterfallChart) {
    marginWaterfallChart.data.datasets[0].data = dataArray;
    marginWaterfallChart.update();
  }
}

// ==========================================================================
// 10. Modals & Toast Controller
// ==========================================================================
function initModals() {
  const modal = document.getElementById("doc-modal");
  const closeBtn = document.getElementById("btn-close-modal");

  if (closeBtn && modal) {
    closeBtn.addEventListener("click", () => {
      modal.classList.remove("show");
    });
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.classList.remove("show");
      }
    });
  }
}

function openDocModal(docKey) {
  const modal = document.getElementById("doc-modal");
  const titleElem = document.getElementById("modal-doc-title");
  const contentElem = document.getElementById("modal-doc-content");

  const docData = {
    marketintel: {
      title: "agent_1_product_intelligence.md — Product & Market Intelligence",
      content: `
<h3>System Persona & Mandate</h3>
<p><strong>Agent Name:</strong> MarketIntel / Product Scout<br>
<strong>Directive:</strong> Continuously research and score physical products from 0–100 across 11 weighted dimensions. Build a resilient 4-tier catalog (Hero, Supporting, Repeat, Trend).</p>

<h3>The 100-Point Rubric Breakdown</h3>
<pre>
1. TikTok Visual Potential           — 15 pts
2. Problem / Benefit Clarity         — 15 pts
3. Emotional Appeal (9 Pillars)      — 10 pts
4. Demonstration Potential & ASMR    — 10 pts
5. Content Possibilities & Runway    — 10 pts
6. Gross Margin Potential (>= 75%)   — 10 pts
7. Impulse Purchase ($15 - $45)      — 10 pts
8. Competitive Intensity             —  5 pts
9. Shipping Simplicity (< 400g)      —  5 pts
10. Return Risk (Low defects)        —  5 pts
11. Repeat Purchase Potential        —  5 pts
─────────────────────────────────────────────
TOTAL SCORE                         — 100 pts
</pre>
      `
    },
    brandcraft: {
      title: "agent_2_brand_content_strategy.md — Brand & Content Strategy",
      content: `
<h3>The Follower Magnet Directive</h3>
<p><strong>Agent Name:</strong> BrandCraft<br>
<strong>Mission:</strong> Make people WANT to follow the account even if they aren't buying today.</p>

<h3>The 70 / 20 / 10 Content Formula</h3>
<pre>
• 70% Pure Value / Entertainment / Inspiration (Zero sales pitch)
• 20% Product-Integrated Storytelling (Incidental tool inside routine)
• 10% Direct Commercial Content (Flash drops, yellow basket CTAs)
</pre>

<h3>5-Part Post Anatomy</h3>
<pre>
1. HOOK (0-3s)           — Pattern interrupt & text overlay
2. VALUE (3-18s)         — Core utility or story tension
3. EMOTION (18-30s)      — Resonance trigger (Understood, Shock, ASMR)
4. PAYOFF (30-40s)       — Climax / clean resolution
5. OPTIONAL CTA (40-45s) — Soft natural cart anchor
</pre>
      `
    },
    creative_prod: {
      title: "agent_3_creative_production.md — Creative Production Director",
      content: `
<h3>Rolling 30-Day Pipeline & 15-Point Concept Engine</h3>
<p><strong>Agent Name:</strong> CreativeCraft / Creative Production Director<br>
<strong>Directive:</strong> Generate TikTok-native content concepts that stop scrolls within 3 seconds using the 10 Curiosity Archetypes and multi-variant Hook A/B/C testing.</p>

<h3>The 15-Point Concept Specification</h3>
<pre>
1. Content Pillar           9. Product Integration
2. Video Concept Title      10. Call to Action (CTA)
3. Target Viewer            11. Suggested Caption & Copy
4. Opening Hook             12. Search Keywords & Hashtags
5. First 3s Visual Action   13. TikTok Shop Placement
6. Scene Sequence (5 Parts) 14. Estimated Duration
7. On-Screen Text Overlays  15. Reason Concept Will Work
8. Voiceover / Audio Script
</pre>
      `
    },
    creative_vault: {
      title: "vault_creative_production.md — 30-Day Pipeline Playbook",
      content: `
<h3>30-Day Content Production Pipeline Matrix</h3>
<p>Complete 30-day scheduled content matrix with daily pillar assignments, ratio classifications (70/20/10), and deep multi-variant blueprints for Days 1 through 6.</p>
<pre>
• Day 01: The 60-Second Sunday Night Reset (P1: 70% Value)
• Day 02: 3 Cable Mistakes Destroying Your Gear (P2: 70% Value)
• Day 03: Car Tire vs Neodymium Magnetic Tray (P3: 20% Integrated)
• Day 04: POV: The 8:55 AM Workplace Panic (P4: 70% Value)
• Day 05: Replying to @Dan: The iPad Shake Test (P5: 20% Integrated)
• Day 06: Why We Threw Away 14 Prototypes (P6: 10% Commercial)
... Days 07 through 30 complete production schedules
</pre>
      `
    },
    shopgrowth: {
      title: "agent_4_tiktok_shop_growth_commercial.md — Shop Growth & Commercial",
      content: `
<h3>7-Stage Commercial Funnel & Creator Engine</h3>
<p><strong>Agent Name:</strong> ShopGrowth / Commercial Director<br>
<strong>Core Directive:</strong> Turn attention into profitable revenue across the 7-stage commercial funnel, diagnose conversion bottlenecks, and manage the Affiliate & Creator Acquisition Engine.</p>

<h3>The 5 Diagnostic Funnel Triage Protocols</h3>
<pre>
1. HIGH VIEWS + LOW CLICKS       &rarr; Product Positioning / CTA Failure
2. HIGH CLICKS + LOW SALES       &rarr; Offer, Pricing, Trust, or Showcase Friction
3. LOW RETENTION SPIKE           &rarr; Creative Opening & 3s Hook Drag
4. HIGH SALES + HIGH RETURNS     &rarr; Expectation Mismatch or Quality Defect
5. HIGH ENGAGEMENT + LOW FOLLOWS &rarr; Brand & Channel Positioning Gap
</pre>
      `
    },
    growth_vault: {
      title: "vault_tiktok_shop_growth_commercial.md — Commercial Playbook",
      content: `
<h3>Commercial Funnel Telemetry & Creator Acquisition Vault</h3>
<pre>
• 7-Stage Conversion Benchmarks: Views &rarr; Profile &rarr; Clicks &rarr; ATC &rarr; Checkout &rarr; Purchase &rarr; Repeat
• Real-World Diagnostic Case Studies with Step-by-Step Remediation Action Plans
• Multi-Tier Creator Outreach DM Vault & 3-Hook Sample Briefs
• Creator Unit Economics Ledger (Alex Rivera, Sarah Chen, Dan Miller, Marcus Vance)
</pre>
      `
    },
    brand_vault: {
      title: "vault_brand_content_strategy.md — Brand Strategy Playbook",
      content: `
<h3>ApexGrip Brand Book & 30-Day Content Calendar</h3>
<pre>
Brand Name:        ApexGrip (Tactile tools for intentional living)
Target Persona:    Marcus, 26 (The Aspiring Minimalist)
6 Content Pillars: Resets, Education, Experiments, Relatability, Comment Lab, BTS
Content Ratio:     70% Value / 20% Integrated / 10% Commercial
</pre>
      `
    },
    qaperformance: {
      title: "agent_5_performance_qa_compliance.md — QA, Compliance & Intelligence",
      content: `
<h3>Performance, QA & Compliance Engine (Agent 5)</h3>
<p><strong>Agent Identifier:</strong> QAPerformance<br>
<strong>Core Mission:</strong> Protect brand equity, enforce zero-policy strikes across TikTok Shop, run weekly WIN/LEARN/KILL reviews, and convert customer voice into high-converting video concepts.</p>

<h3>The 9-Point Pre-Publishing QA Checklist</h3>
<pre>
1. Supportable Product Claims      (Lab test & empirical documentation verified)
2. TikTok Policy & Ad Compliance   (Zero copyright audio / no prohibited stunts)
3. Zero Misleading Pricing         (On-screen price matches checkout promotion)
4. Zero Misleading Before/After    (Continuous, unfiltered demonstration frames)
5. Zero Prohibited Claims          (No medical, cure, or financial guarantees)
6. Accurate Product Specs          (Box contents match 1:1 with video assets)
7. Stock Availability Threshold    (Warehouse safety stock >= 100 units)
8. Active Links & Geo-Targeting    (Showcase anchor responds 200 OK)
9. Correct Product Card Attachment (Yellow basket mapped to exact SKU variant)
</pre>
      `
    },
    qa_vault: {
      title: "vault_performance_qa_compliance.md — Compliance & Telemetry Vault",
      content: `
<h3>Policy Compliance, Telemetry Database & VOC Translation Vault</h3>
<pre>
• Policy Guardrail Dictionary: Medical, Absolute, Financial & Pricing trigger list with safe rewrites.
• 30-Video Historical Telemetry Ledger ($450k+ GMV aggregate patterns).
• Multivariate Intelligence Insights (Top Hooks, Duration Buckets, CTA Conversion Multipliers).
• Voice-of-Customer (VOC) Transformation Dossier (Real comments & returns mapped to video scripts).
• 5-Factor Root Cause Diagnostic Case Studies (Bad Product vs Bad Creative vs Bad Offer vs Bad Audience vs Bad Execution).
</pre>
      `
    }
  };

  const doc = docData[docKey] || docData.brandcraft;
  titleElem.textContent = doc.title;
  contentElem.innerHTML = doc.content;
  modal.classList.add("show");
  lucide.createIcons();
}

// ==========================================================================
// AGENT 5: Performance, QA & Compliance Controller
// ==========================================================================
let activeWLKFilter = "all";
let activeRootCauseKey = "bad_product";

function initAgent5() {
  renderQACheckpoints();
  initPolicyScanner();
  renderWinLearnKill("all");
  initWLKFilterTabs();
  initRootCauseTriage();
  renderContentTelemetryTable("");
  initTelemetrySearch();
  renderVOCPipeline();
}

// 1. Render 9 Pre-Publishing Checkpoints
function renderQACheckpoints() {
  const container = document.getElementById("qa-checkpoints-list");
  if (!container) return;

  const checkpoints = TIKTOK_COMMERCE_DATA.agent5Data.qaCheckpoints;
  container.innerHTML = checkpoints.map(cp => `
    <div class="qa-checkpoint-card verified" id="card-${cp.id}" onclick="toggleQACheckpoint('${cp.id}')">
      <div class="qa-card-top">
        <span class="qa-num-badge">${cp.num}</span>
        <span class="pill-chip pill-green" id="badge-${cp.id}"><i data-lucide="check-circle-2"></i> PASSED</span>
      </div>
      <div>
        <div class="qa-card-category">${cp.category}</div>
        <div class="qa-checkpoint-title">${cp.title}</div>
      </div>
      <div class="qa-card-body">${cp.standard}</div>
      <div class="qa-card-danger">
        <strong>Red Flag:</strong> ${cp.redFlag}
      </div>
    </div>
  `).join("");
  lucide.createIcons();
}

function toggleQACheckpoint(cpId) {
  const card = document.getElementById(`card-${cpId}`);
  const badge = document.getElementById(`badge-${cpId}`);
  if (!card || !badge) return;

  const isVerified = card.classList.contains("verified");
  if (isVerified) {
    card.classList.remove("verified");
    badge.className = "pill-chip pill-pink";
    badge.innerHTML = `<i data-lucide="alert-triangle"></i> ACTION REQ`;
  } else {
    card.classList.add("verified");
    badge.className = "pill-chip pill-green";
    badge.innerHTML = `<i data-lucide="check-circle-2"></i> PASSED`;
  }

  // Update Pass Rate
  const totalVerified = document.querySelectorAll(".qa-checkpoint-card.verified").length;
  const rateElem = document.getElementById("qa-pass-rate");
  const masterStatus = document.getElementById("qa-master-status");
  if (rateElem) {
    rateElem.textContent = `${Math.round((totalVerified / 9) * 100)}%`;
  }
  if (masterStatus) {
    if (totalVerified === 9) {
      masterStatus.innerHTML = `<i data-lucide="check-circle" class="text-green"></i> <span class="text-green font-semibold">ALL 9 CHECKPOINTS VERIFIED</span>`;
    } else {
      masterStatus.innerHTML = `<i data-lucide="alert-circle" class="text-pink"></i> <span class="text-pink font-semibold">${9 - totalVerified} CHECKPOINTS PENDING</span>`;
    }
  }
  lucide.createIcons();
}

// 2. Policy & Claim Scanner
function initPolicyScanner() {
  const btnScan = document.getElementById("btn-run-policy-scan");
  const btnSample = document.getElementById("btn-load-sample-claim");
  const input = document.getElementById("qa-claim-input");
  const resultsContainer = document.getElementById("qa-scanner-results");

  if (!btnScan || !input || !resultsContainer) return;

  if (btnSample) {
    btnSample.addEventListener("click", () => {
      input.value = "This magnetic mount completely cures carpal tunnel and eliminates back pain! It is 100% unbreakable and never drops your phone. Only 2 left in the world! Go check my bio link to buy now!";
      runPolicyScan();
    });
  }

  btnScan.addEventListener("click", runPolicyScan);
}

function runPolicyScan() {
  const input = document.getElementById("qa-claim-input");
  const resultsContainer = document.getElementById("qa-scanner-results");
  if (!input || !resultsContainer) return;

  const text = input.value.trim();
  if (!text) {
    resultsContainer.classList.add("hidden");
    return;
  }

  const rules = TIKTOK_COMMERCE_DATA.agent5Data.policyRules;
  const matches = [];

  rules.forEach(rule => {
    const regex = new RegExp(rule.pattern, "i");
    if (regex.test(text)) {
      matches.push(rule);
    }
  });

  resultsContainer.classList.remove("hidden");

  if (matches.length === 0) {
    resultsContainer.style.background = "rgba(0, 240, 144, 0.08)";
    resultsContainer.style.borderColor = "rgba(0, 240, 144, 0.3)";
    resultsContainer.innerHTML = `
      <div class="flex-between">
        <div class="flex-center gap-10">
          <i data-lucide="check-circle-2" class="text-green"></i>
          <span class="font-semibold text-green">100% COMPLIANT & APPROVED</span>
        </div>
        <span class="text-xs text-muted">Zero prohibited or misleading policy triggers detected.</span>
      </div>
    `;
  } else {
    resultsContainer.style.background = "rgba(254, 44, 85, 0.08)";
    resultsContainer.style.borderColor = "rgba(254, 44, 85, 0.35)";
    resultsContainer.innerHTML = `
      <div class="flex-between mb-10">
        <div class="flex-center gap-10">
          <i data-lucide="shield-alert" class="text-pink"></i>
          <span class="font-bold text-pink">${matches.length} POLICY RISK(S) DETECTED</span>
        </div>
        <span class="text-xs text-muted">Auto-generated compliant alternatives provided below:</span>
      </div>
      ${matches.map(m => `
        <div class="scanner-flag-item">
          <div class="flex-between">
            <span class="scanner-flag-badge"><i data-lucide="alert-octagon"></i> ${m.category} (${m.risk})</span>
            <span class="text-xs text-muted">${m.reason}</span>
          </div>
          <div class="scanner-rewrite-card">
            <div><strong>Recommended Compliant Rewrite:</strong> "${m.replacement}"</div>
            <button class="btn-xs btn-outline" onclick="copyText('${m.replacement.replace(/'/g, "\\'")}')"><i data-lucide="copy"></i> Copy</button>
          </div>
        </div>
      `).join("")}
    `;
  }
  lucide.createIcons();
}

// 3. Weekly WIN / LEARN / KILL Tabs & Cards
function initWLKFilterTabs() {
  const tabs = document.querySelectorAll(".wlk-tab-btn");
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      const filter = tab.getAttribute("data-filter");
      renderWinLearnKill(filter);
    });
  });
}

function renderWinLearnKill(filter) {
  const container = document.getElementById("wlk-cards-container");
  if (!container) return;

  const data = TIKTOK_COMMERCE_DATA.agent5Data.winLearnKill;
  let items = [];

  if (filter === "all" || filter === "wins") {
    items = items.concat(data.wins.map(w => ({ ...w, type: "WIN", badgeClass: "badge-win", cardClass: "card-win" })));
  }
  if (filter === "all" || filter === "learns") {
    items = items.concat(data.learns.map(l => ({ ...l, type: "LEARN", badgeClass: "badge-learn", cardClass: "card-learn" })));
  }
  if (filter === "all" || filter === "kills") {
    items = items.concat(data.kills.map(k => ({ ...k, type: "KILL", badgeClass: "badge-kill", cardClass: "card-kill" })));
  }

  container.innerHTML = items.map(item => `
    <div class="wlk-card ${item.cardClass}">
      <div class="wlk-card-header">
        <span class="wlk-badge-tag ${item.badgeClass}">${item.type} &bull; ${item.videoId}</span>
        <span class="text-xs text-muted font-mono">${item.product}</span>
      </div>
      <div>
        <div class="wlk-card-title">${item.title}</div>
        <div class="wlk-meta-row mt-4">
          <span><i data-lucide="layers" class="inline-icon"></i> ${item.pillar}</span>
        </div>
      </div>
      <div class="wlk-metrics-grid">
        <div class="wlk-metric-box">
          <span class="wlk-metric-lbl">Views</span>
          <span class="wlk-metric-val">${item.views}</span>
        </div>
        <div class="wlk-metric-box">
          <span class="wlk-metric-lbl">3s Ret</span>
          <span class="wlk-metric-val text-green">${item.retention3s}</span>
        </div>
        <div class="wlk-metric-box">
          <span class="wlk-metric-lbl">CTR %</span>
          <span class="wlk-metric-val text-cyan">${item.ctr}</span>
        </div>
        <div class="wlk-metric-box">
          <span class="wlk-metric-lbl">Revenue</span>
          <span class="wlk-metric-val text-pink">${item.revenue}</span>
        </div>
      </div>
      <div class="wlk-analysis-box">
        <strong>${item.type === "WIN" ? "Why It Won:" : item.type === "LEARN" ? "Hypothesis:" : "Post-Mortem:"}</strong>
        ${item.whyItWon || item.hypothesis || item.postMortem}
      </div>
      <div class="wlk-action-box">
        <strong>Action Directive:</strong> ${item.actionPlan}
      </div>
    </div>
  `).join("");
  lucide.createIcons();
}

// 4. Root Cause Diagnostic Decision Tree
function initRootCauseTriage() {
  const buttons = document.querySelectorAll(".rc-btn");
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      buttons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const causeKey = btn.getAttribute("data-cause");
      renderRootCauseDiagnostic(causeKey);
    });
  });
  renderRootCauseDiagnostic("bad_product");
}

function renderRootCauseDiagnostic(causeKey) {
  const container = document.getElementById("rc-diagnostic-display");
  if (!container) return;

  const data = TIKTOK_COMMERCE_DATA.agent5Data.rootCauseMatrix[causeKey];
  if (!data) return;

  container.innerHTML = `
    <div class="flex-between mb-10">
      <div class="flex-center gap-10">
        <span class="pill-chip pill-yellow font-mono font-bold">${data.name}</span>
        <span class="text-sm font-semibold text-white">Diagnostic Telemetry Footprint</span>
      </div>
      <span class="text-xs text-muted">Isolate & Fix Fast</span>
    </div>
    <div class="rc-diag-grid">
      <div class="rc-diag-card">
        <div class="text-xs text-muted uppercase font-bold mb-4"><i data-lucide="activity" class="inline-icon text-pink"></i> Key Telemetry Signals</div>
        <p class="text-white font-mono">${data.signals}</p>
        <div class="text-xs text-muted uppercase font-bold mt-10 mb-4"><i data-lucide="eye" class="inline-icon text-yellow"></i> Real-World Symptoms</div>
        <p class="text-secondary">${data.symptoms}</p>
      </div>
      <div class="rc-diag-card">
        <div class="text-xs text-muted uppercase font-bold mb-4"><i data-lucide="wrench" class="inline-icon text-cyan"></i> Immediate Operational Fix</div>
        <p class="text-cyan">${data.immediateFix}</p>
        <div class="text-xs text-muted uppercase font-bold mt-10 mb-4"><i data-lucide="shield" class="inline-icon text-green"></i> Strategic Prevention Protocol</div>
        <p class="text-green">${data.prevention}</p>
      </div>
    </div>
  `;
  lucide.createIcons();
}

// 5. Content Learning Database & Telemetry Table
function initTelemetrySearch() {
  const searchInput = document.getElementById("telemetry-search-input");
  if (!searchInput) return;

  searchInput.addEventListener("input", e => {
    const query = e.target.value.toLowerCase();
    renderContentTelemetryTable(query);
  });
}

function renderContentTelemetryTable(query) {
  const tbody = document.getElementById("telemetry-table-body");
  if (!tbody) return;

  let items = TIKTOK_COMMERCE_DATA.agent5Data.contentTelemetryDatabase;
  if (query) {
    items = items.filter(item => 
      item.product.toLowerCase().includes(query) ||
      item.pillar.toLowerCase().includes(query) ||
      item.hook.toLowerCase().includes(query) ||
      item.id.toLowerCase().includes(query)
    );
  }

  tbody.innerHTML = items.map(item => `
    <tr>
      <td class="font-mono font-bold text-white">${item.id}</td>
      <td class="text-muted font-mono">${item.date}</td>
      <td class="text-cyan font-semibold">${item.product}</td>
      <td>${item.pillar}</td>
      <td><span class="pill-chip pill-cyan">${item.hook}</span></td>
      <td class="font-mono">${item.duration}s</td>
      <td class="font-mono font-semibold">${item.views.toLocaleString()}</td>
      <td class="font-mono text-green font-bold">${item.retention3s}%</td>
      <td class="font-mono">${item.completion}%</td>
      <td class="font-mono text-yellow font-bold">${item.ctr}%</td>
      <td class="font-mono">${item.orders}</td>
      <td class="font-mono text-pink font-bold">$${item.revenue.toLocaleString()}</td>
      <td>
        <span class="wlk-badge-tag ${item.status === 'WIN' ? 'badge-win' : item.status === 'LEARN' ? 'badge-learn' : 'badge-kill'}">
          ${item.status}
        </span>
      </td>
    </tr>
  `).join("");
}

// 6. VOC Feedback Pipeline
function renderVOCPipeline() {
  const container = document.getElementById("voc-cards-container");
  if (!container) return;

  const vocItems = TIKTOK_COMMERCE_DATA.agent5Data.vocFeedbackEntries;
  container.innerHTML = vocItems.map(item => `
    <div class="voc-card">
      <div class="voc-header">
        <span class="voc-source-tag"><i data-lucide="message-circle"></i> ${item.source} &bull; ${item.author}</span>
        <span class="pill-chip ${item.typeBadge}">${item.type}</span>
      </div>
      <div class="voc-comment-bubble">
        "${item.text}"
      </div>
      <div class="voc-brief-drawer">
        <div class="flex-between">
          <strong class="text-pink"><i data-lucide="sparkles" class="inline-icon"></i> Agent 3 Concept Brief: ${item.generatedBrief.conceptTitle}</strong>
          <span class="pill-chip pill-cyan text-xs">${item.suggestedFormat}</span>
        </div>
        <p class="text-xs text-muted"><strong>Opening Hook:</strong> "${item.generatedBrief.hook}"</p>
        <p class="text-xs text-muted"><strong>Payoff / Proof:</strong> ${item.generatedBrief.payoff}</p>
        <p class="text-xs text-muted"><strong>Yellow Basket CTA:</strong> "${item.generatedBrief.cta}"</p>
      </div>
      <button class="btn-sm btn-outline mt-8" onclick="copyVOCBrief('${item.id}')">
        <i data-lucide="copy"></i> Copy Script Brief for Filming
      </button>
    </div>
  `).join("");
  lucide.createIcons();
}

function copyVOCBrief(vocId) {
  const item = TIKTOK_COMMERCE_DATA.agent5Data.vocFeedbackEntries.find(v => v.id === vocId);
  if (!item) return;

  const briefText = `
=== AGENT 3 SCRIPT BRIEF (TRANSFORMED FROM VOC FEEDBACK) ===
Concept Title:   ${item.generatedBrief.conceptTitle}
Target Pillar:   ${item.generatedBrief.pillar}
Source Feedback: "${item.text}" (${item.author})
Format:          ${item.suggestedFormat}

OPENING HOOK (0:00 - 0:03):
Visual: ${item.generatedBrief.visualOpening}
VO: "${item.generatedBrief.hook}"

CORE PAYOFF & DEMONSTRATION (0:03 - 0:18):
${item.generatedBrief.payoff}

TIKTOK SHOP COMMERCIAL CTA (0:18 - 0:24):
"${item.generatedBrief.cta}"
============================================================
  `.trim();

  copyText(briefText);
  showToast("Script brief copied to clipboard!");
}

function copyText(text) {
  navigator.clipboard.writeText(text).then(() => {
    showToast("Copied to clipboard!");
  }).catch(() => {
    showToast("Copied text!");
  });
}

function showToast(message) {
  const toast = document.getElementById("toast");
  const msgElem = document.getElementById("toast-msg");
  if (!toast || !msgElem) return;

  msgElem.textContent = message;
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
}

