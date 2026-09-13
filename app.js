// ==========================================================================
// PERFORMANCE LAB — Application Controller & Interactive Engines
// ==========================================================================

let currentQuizStep = 0;
let quizAnswers = {};
let cartItems = [];
let activeBatchId = "PL-2026-0814-PW";
let simulatedSupplyDays = 18;

document.addEventListener("DOMContentLoaded", () => {
  renderStorefrontProducts();
  renderStorefrontBundles();
  renderAcademyArticles();
  renderCreators();
  renderVOCFeedback();
  lookupBatch();
  lucide.createIcons();
});

// 1. Navigation & View Switcher
function switchView(viewId) {
  document.querySelectorAll(".view-pane").forEach(pane => {
    pane.classList.remove("active");
  });
  
  const targetPane = document.getElementById(`view-${viewId}`);
  if (targetPane) {
    targetPane.classList.add("active");
  }

  document.querySelectorAll(".nav-btn").forEach(btn => {
    btn.classList.toggle("active", btn.getAttribute("data-view") === viewId);
  });

  window.scrollTo({ top: 0, behavior: "smooth" });
  lucide.createIcons();
}

function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}

// 2. Render Storefront Products & Bundles
function renderStorefrontProducts() {
  const container = document.getElementById("homepage-products-grid");
  if (!container) return;

  container.innerHTML = PERFORMANCE_LAB_DATA.products.map(prod => `
    <div class="product-card">
      <div class="prod-card-badge-row">
        <span class="category-tag ${prod.categoryBadge}">${prod.category}</span>
        <span class="text-xs text-muted font-mono"><i data-lucide="star" class="inline-icon text-yellow"></i> ${prod.rating} (${prod.reviewCount})</span>
      </div>
      <div class="prod-card-title">${prod.name}</div>
      <p class="prod-card-summary">${prod.summary}</p>
      
      <div class="prod-card-ingredients-preview">
        <div class="ing-preview-title">100% Disclosed Active Dosages:</div>
        <div class="ing-tag-list">
          ${prod.ingredients.slice(0, 3).map(ing => `<span class="ing-tag">${ing.name.split(' (')[0]}: ${ing.dose}</span>`).join("")}
        </div>
      </div>

      <div class="prod-card-footer">
        <div class="prod-pricing">
          <span class="price-sub">$${prod.subPrice.toFixed(2)} <small class="text-xs text-mint">(-15% Sub)</small></span>
          <span class="price-one-time">$${prod.price.toFixed(2)} one-time</span>
        </div>
        <button class="btn-view-pdp" onclick="openPDPModal('${prod.id}')">
          <i data-lucide="eye"></i> Inspect Formula
        </button>
      </div>
    </div>
  `).join("");
}

function renderStorefrontBundles() {
  const container = document.getElementById("homepage-bundles-grid");
  if (!container) return;

  container.innerHTML = PERFORMANCE_LAB_DATA.bundles.map(b => `
    <div class="product-card" style="border-color: rgba(0, 240, 144, 0.3);">
      <div class="prod-card-badge-row">
        <span class="category-tag badge-foundation">${b.badge}</span>
        <span class="text-xs text-mint font-bold"><i data-lucide="sparkles" class="inline-icon"></i> System Savings</span>
      </div>
      <div class="prod-card-title">${b.name}</div>
      <p class="prod-card-summary">${b.tagline}</p>

      <div class="prod-card-ingredients-preview">
        <div class="ing-preview-title">System Products Included:</div>
        <div class="ing-tag-list">
          ${b.productNames.map(pName => `<span class="ing-tag">${pName}</span>`).join("")}
        </div>
      </div>

      <div class="prod-card-footer">
        <div class="prod-pricing">
          <span class="price-sub">$${b.bundlePrice.toFixed(2)} <small class="text-xs text-muted" style="text-decoration: line-through;">$${b.individualTotal.toFixed(2)}</small></span>
          <span class="price-one-time">Or $${b.monthlySubPrice.toFixed(2)}/mo on replenishment</span>
        </div>
        <button class="btn-hero-primary" style="padding: 8px 16px; font-size: 12px;" onclick="addBundleToCart('${b.id}')">
          <i data-lucide="plus"></i> Add Stack
        </button>
      </div>
    </div>
  `).join("");
}

// 3. Performance Profile Onboarding Questionnaire Controller
function startProfileQuiz() {
  currentQuizStep = 0;
  quizAnswers = {};
  switchView("quiz");
  renderQuizQuestion();
}

function renderQuizQuestion() {
  const questions = PERFORMANCE_LAB_DATA.quizQuestions;
  const q = questions[currentQuizStep];
  if (!q) return;

  // Update progress bar & indicators
  const progressPct = Math.round(((currentQuizStep + 1) / questions.length) * 100);
  document.getElementById("quiz-progress-bar").style.width = `${progressPct}%`;
  document.getElementById("quiz-step-indicator").textContent = `Question ${currentQuizStep + 1} of ${questions.length}`;
  document.getElementById("quiz-question-text").textContent = q.title;
  document.getElementById("quiz-question-sub").textContent = q.subtitle;

  // Render options
  const container = document.getElementById("quiz-options-container");
  container.innerHTML = q.options.map(opt => {
    const isSelected = quizAnswers[q.id] === opt.value;
    return `
      <div class="quiz-option-card ${isSelected ? 'selected' : ''}" onclick="selectQuizOption('${q.id}', '${opt.value}')">
        <div class="opt-left">
          <div class="opt-icon"><i data-lucide="${opt.icon || 'check'}"></i></div>
          <div>
            <div class="opt-label">${opt.label}</div>
            ${opt.desc ? `<div class="opt-desc">${opt.desc}</div>` : ''}
          </div>
        </div>
        <div class="opt-radio"></div>
      </div>
    `;
  }).join("");

  // Update Back button state
  document.getElementById("btn-quiz-prev").style.visibility = currentQuizStep === 0 ? "hidden" : "visible";
  
  // Update Next button text on last step
  const nextBtn = document.getElementById("btn-quiz-next");
  if (currentQuizStep === questions.length - 1) {
    nextBtn.innerHTML = `Generate My Stack &rarr;`;
  } else {
    nextBtn.innerHTML = `Next Step &rarr;`;
  }

  lucide.createIcons();
}

function selectQuizOption(questionId, value) {
  quizAnswers[questionId] = value;
  renderQuizQuestion();
}

function handleQuizNext() {
  const questions = PERFORMANCE_LAB_DATA.quizQuestions;
  const currentQ = questions[currentQuizStep];

  // Require selection
  if (!quizAnswers[currentQ.id]) {
    // Default to first option if none clicked
    quizAnswers[currentQ.id] = currentQ.options[0].value;
  }

  if (currentQuizStep < questions.length - 1) {
    currentQuizStep++;
    renderQuizQuestion();
  } else {
    generateRecommendation();
  }
}

function handleQuizPrev() {
  if (currentQuizStep > 0) {
    currentQuizStep--;
    renderQuizQuestion();
  }
}

// 4. AI Stack Recommendation Generator
function generateRecommendation() {
  const result = PERFORMANCE_LAB_DATA.recommendationLogic.evaluate(quizAnswers);
  
  document.getElementById("rec-profile-title").textContent = `YOUR PERFORMANCE SYSTEM: ${result.goalTitle.toUpperCase()}`;

  // Render Foundation
  renderTierContainer("rec-foundation-container", result.foundation, result.rationale, "tier-foundation");

  // Render Training
  renderTierContainer("rec-training-container", result.training, result.rationale, "tier-training");

  // Render Recovery
  renderTierContainer("rec-recovery-container", result.recovery, result.rationale, "tier-recovery");

  // Render Not Necessary (Trust pillar)
  renderNotNecessaryContainer("rec-not-necessary-container", result.notNecessary, result.rationale);

  // Calculate pricing
  calculateStackPricing(result);

  switchView("stack-result");
}

function renderTierContainer(containerId, prodIds, rationaleMap, tierClass) {
  const container = document.getElementById(containerId);
  if (!container) return;

  if (prodIds.length === 0) {
    container.innerHTML = `<p class="text-xs text-muted">No primary products required in this specific window based on your training parameters.</p>`;
    return;
  }

  container.innerHTML = prodIds.map(pId => {
    const prod = PERFORMANCE_LAB_DATA.products.find(p => p.id === pId);
    const rat = rationaleMap[pId] || {};
    if (!prod) return '';

    return `
      <div class="recommended-card">
        <div class="rec-left-info">
          <div class="flex-between">
            <span class="category-tag ${prod.categoryBadge}">${prod.category}</span>
            <span class="text-xs text-mint font-mono font-bold">$${prod.subPrice.toFixed(2)}/mo</span>
          </div>
          <div class="rec-prod-name">${prod.name}</div>
          <p class="text-xs text-secondary">${prod.summary}</p>
          <div class="flex-center gap-10 mt-auto">
            <button class="btn-xs btn-outline" onclick="openPDPModal('${prod.id}')"><i data-lucide="info"></i> Inspect Label</button>
            <button class="btn-xs btn-primary" onclick="addProductToCart('${prod.id}')"><i data-lucide="plus"></i> Keep In Stack</button>
          </div>
        </div>
        <div class="rec-rationale-box">
          <div class="rec-rationale-item">
            <strong>Why This Fits Your Goal:</strong>
            <p>${rat.why || 'Directly supports cellular energy output.'}</p>
          </div>
          <div class="rec-rationale-item">
            <strong>When To Use:</strong>
            <p>${rat.when || 'Follow on-pack timing guidelines.'}</p>
          </div>
          <div class="rec-rationale-item">
            <strong>Clinical Evidence:</strong>
            <p class="text-mint">${rat.evidence || 'Validated in peer-reviewed trials.'}</p>
          </div>
        </div>
      </div>
    `;
  }).join("");
}

function renderNotNecessaryContainer(containerId, prodIds, rationaleMap) {
  const container = document.getElementById(containerId);
  if (!container) return;

  if (prodIds.length === 0) {
    container.innerHTML = `<p class="text-xs text-muted">All evaluated categories are relevant for your current high-intensity training routine.</p>`;
    return;
  }

  container.innerHTML = prodIds.map(pId => {
    const prod = PERFORMANCE_LAB_DATA.products.find(p => p.id === pId);
    const rat = rationaleMap[pId] || {};
    if (!prod) return '';

    return `
      <div class="not-necessary-card">
        <div class="not-nec-left">
          <div class="not-nec-icon"><i data-lucide="shield-ban"></i></div>
          <div>
            <div class="font-bold text-white">${prod.name} &bull; <span class="text-xs text-muted" style="text-decoration: line-through;">$${prod.price.toFixed(2)}</span></div>
            <p class="text-xs text-secondary mt-2">${rat.why || 'Not necessary for your stated goals.'}</p>
          </div>
        </div>
        <span class="pill-chip" style="background: rgba(255, 85, 85, 0.15); color: #ff5555; border: 1px solid rgba(255, 85, 85, 0.3);">
          SAVED $${prod.price.toFixed(2)}
        </span>
      </div>
    `;
  }).join("");
}

function calculateStackPricing(result) {
  const allRecommendedIds = [...result.foundation, ...result.training, ...result.recovery];
  let subTotal = 0;

  allRecommendedIds.forEach(id => {
    const prod = PERFORMANCE_LAB_DATA.products.find(p => p.id === id);
    if (prod) subTotal += prod.subPrice;
  });

  const priceElem = document.getElementById("stack-total-price");
  if (priceElem) {
    priceElem.textContent = `$${subTotal.toFixed(2)} / mo`;
  }
}

function applyStackToDashboard() {
  showToast("Your personalized routine is now active in your dashboard!");
  switchView("dashboard");
}

function checkoutStack() {
  showToast("Stack Bundle added to checkout with 15% Subscribe & Save discount!");
}

// 5. Product Display Page (PDP) Modal
function openPDPModal(productId) {
  const prod = PERFORMANCE_LAB_DATA.products.find(p => p.id === productId);
  if (!prod) return;

  const modal = document.getElementById("pdp-modal");
  const title = document.getElementById("pdp-modal-title");
  const content = document.getElementById("pdp-modal-content");

  title.textContent = prod.name;
  content.innerHTML = `
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 24px;">
      <div>
        <span class="category-tag ${prod.categoryBadge}">${prod.category} &bull; ${prod.tier}</span>
        <h2 style="font-size: 24px; font-weight: 800; color: #fff; margin: 10px 0;">${prod.name}</h2>
        <p style="font-size: 13px; color: var(--text-secondary); line-height: 1.6; margin-bottom: 16px;">${prod.summary}</p>
        
        <div style="background: rgba(0, 240, 144, 0.05); border: 1px solid rgba(0, 240, 144, 0.2); border-radius: var(--radius-sm); padding: 14px; margin-bottom: 16px;">
          <strong style="color: var(--neon-mint); font-size: 12px; text-transform: uppercase;">Why We Made This:</strong>
          <p style="font-size: 12px; color: var(--text-primary); margin-top: 4px; line-height: 1.5;">${prod.whyWeMadeThis}</p>
        </div>

        <div style="background: rgba(255, 85, 85, 0.05); border: 1px dashed rgba(255, 85, 85, 0.3); border-radius: var(--radius-sm); padding: 14px; margin-bottom: 16px;">
          <strong style="color: #ff5555; font-size: 12px; text-transform: uppercase;">What We Deliberately Left Out:</strong>
          <ul style="font-size: 12px; color: var(--text-secondary); margin: 6px 0 0 16px; line-height: 1.5;">
            ${prod.whatWeLeftOut.map(item => `<li>${item}</li>`).join("")}
          </ul>
        </div>
      </div>

      <div>
        <div style="background: rgba(10, 15, 26, 0.9); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 16px; margin-bottom: 16px;">
          <div class="flex-between" style="border-bottom: 2px solid #fff; padding-bottom: 6px; margin-bottom: 10px;">
            <strong style="font-size: 16px; font-family: var(--font-heading); color: #fff;">SUPPLEMENT FACTS</strong>
            <span style="font-size: 11px; font-mono; color: var(--text-muted);">${prod.servingCount} Servings &bull; ${prod.servingSize}</span>
          </div>

          <table style="width: 100%; font-size: 12px; border-collapse: collapse;">
            <thead>
              <tr style="border-bottom: 1px solid var(--border-subtle); color: var(--text-muted); text-align: left;">
                <th style="padding: 6px 0;">Active Compound</th>
                <th style="padding: 6px 0; text-align: right;">Clinical Dose</th>
              </tr>
            </thead>
            <tbody>
              ${prod.ingredients.map(ing => `
                <tr style="border-bottom: 1px solid rgba(255, 255, 255, 0.04);">
                  <td style="padding: 8px 0; color: #fff;">
                    <strong>${ing.name}</strong>
                    <div style="font-size: 10px; color: var(--text-muted);">${ing.purpose}</div>
                  </td>
                  <td style="padding: 8px 0; text-align: right; color: var(--neon-mint); font-family: var(--font-mono); font-weight: 700;">${ing.dose}</td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>

        <div class="flex-between" style="background: rgba(255, 255, 255, 0.03); padding: 14px; border-radius: var(--radius-sm); border: 1px solid var(--border-subtle);">
          <div>
            <span class="price-sub">$${prod.subPrice.toFixed(2)}/mo</span>
            <div class="text-xs text-muted">Subscribe & Save 15%</div>
          </div>
          <button class="btn-hero-primary" onclick="addProductToCart('${prod.id}'); closeModal('pdp-modal');">
            <i data-lucide="shopping-bag"></i> Add To Routine
          </button>
        </div>
      </div>
    </div>
  `;

  modal.classList.add("show");
  lucide.createIcons();
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) modal.classList.remove("show");
}

// 6. Customer Dashboard & Depletion Simulator
function simulateUsageStep(dayDelta) {
  simulatedSupplyDays = Math.max(1, Math.min(30, simulatedSupplyDays + dayDelta));
  const pct = Math.round((simulatedSupplyDays / 30) * 100);
  
  const fill = document.getElementById("depletion-progress-bar");
  const tag = document.getElementById("depletion-status-tag");

  if (fill) fill.style.width = `${pct}%`;
  if (tag) {
    tag.textContent = `${simulatedSupplyDays} DAYS OF SUPPLY REMAINING`;
    if (simulatedSupplyDays <= 5) {
      tag.className = "pill-chip pill-pink";
      tag.textContent = `⚠️ ONLY ${simulatedSupplyDays} DAYS LEFT - REFILL DUE`;
    } else {
      tag.className = "pill-chip pill-green";
    }
  }
}

// 7. Performance Lab Academy Renderer
function renderAcademyArticles() {
  const container = document.getElementById("academy-articles-grid");
  if (!container) return;

  container.innerHTML = PERFORMANCE_LAB_DATA.academyArticles.map(art => `
    <div class="product-card" onclick="openArticleModal('${art.id}')" style="cursor: pointer;">
      <div class="prod-card-badge-row">
        <span class="category-tag badge-hydration">${art.category}</span>
        <span class="text-xs text-muted font-mono"><i data-lucide="clock" class="inline-icon"></i> ${art.readTime}</span>
      </div>
      <div class="prod-card-title">${art.title}</div>
      <p class="prod-card-summary">${art.summary}</p>
      <div class="prod-card-footer">
        <span class="text-xs text-muted">${art.author}</span>
        <span class="text-xs text-mint font-bold">Read Full Guide &rarr;</span>
      </div>
    </div>
  `).join("");
}

function openArticleModal(articleId) {
  const art = PERFORMANCE_LAB_DATA.academyArticles.find(a => a.id === articleId);
  if (!art) return;

  const modal = document.getElementById("article-modal");
  const title = document.getElementById("article-modal-title");
  const content = document.getElementById("article-modal-content");

  title.textContent = art.title;
  content.innerHTML = `
    <div class="flex-between mb-16">
      <span class="category-tag badge-hydration">${art.category}</span>
      <span class="text-xs text-muted font-mono">${art.author} &bull; ${art.readTime}</span>
    </div>
    <div style="font-size: 14px; line-height: 1.7; color: var(--text-primary);">
      ${art.content}
    </div>
  `;

  modal.classList.add("show");
  lucide.createIcons();
}

// 8. Batch CoA Verification
function setBatchSearch(batchId) {
  const input = document.getElementById("batch-search-input");
  if (input) input.value = batchId;
  lookupBatch();
}

function lookupBatch() {
  const input = document.getElementById("batch-search-input");
  const batchId = (input ? input.value.trim() : "PL-2026-0814-PW");
  const container = document.getElementById("coa-display-box");
  if (!container) return;

  const record = PERFORMANCE_LAB_DATA.batchQualityDatabase.find(b => b.batchId.toLowerCase() === batchId.toLowerCase()) 
                 || PERFORMANCE_LAB_DATA.batchQualityDatabase[0];

  container.innerHTML = `
    <div class="flex-between" style="border-bottom: 1px solid var(--border-subtle); padding-bottom: 16px;">
      <div>
        <span class="pill-chip pill-green mb-6"><i data-lucide="shield-check"></i> ${record.status}</span>
        <h3 style="font-size: 20px; font-weight: 800; color: #fff;">${record.productName}</h3>
        <p class="text-xs text-muted font-mono">Lot ID: <strong>${record.batchId}</strong> &bull; Mfg: ${record.mfgDate} &bull; Exp: ${record.expiryDate}</p>
      </div>
      <div style="text-align: right;">
        <span class="text-xs text-muted">Audited By:</span>
        <div class="text-xs font-bold text-cyan">${record.testingLab}</div>
      </div>
    </div>

    <table class="coa-table">
      <thead>
        <tr>
          <th>Test Parameter</th>
          <th>Release Specification</th>
          <th>Certified Lab Result</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        ${record.testResults.map(tr => `
          <tr>
            <td style="color: #fff; font-weight: 600;">${tr.parameter}</td>
            <td style="font-family: var(--font-mono); font-size: 12px;">${tr.specification}</td>
            <td style="font-family: var(--font-mono); color: var(--neon-mint); font-weight: 700;">${tr.result}</td>
            <td><span class="pill-chip pill-green" style="font-size: 10px; padding: 2px 8px;">${tr.status}</span></td>
          </tr>
        `).join("")}
      </tbody>
    </table>
  `;

  lucide.createIcons();
}

// 9. Creator Portal
function renderCreators() {
  const container = document.getElementById("creators-grid");
  if (!container) return;

  container.innerHTML = PERFORMANCE_LAB_DATA.creators.map(cr => `
    <div class="product-card">
      <div class="prod-card-badge-row">
        <span class="category-tag badge-performance">${cr.tier}</span>
        <span class="pill-chip pill-green">${cr.commissionRate} Bounty</span>
      </div>
      <div class="prod-card-title">${cr.name}</div>
      <p class="text-xs text-muted font-mono">${cr.handle} &bull; ${cr.category}</p>
      
      <div class="prod-card-ingredients-preview mt-10">
        <div class="ing-preview-title">Approved Clinical Angles:</div>
        <ul style="font-size: 11px; color: var(--text-secondary); margin: 4px 0 0 14px; line-height: 1.4;">
          ${cr.approvedClaims.map(c => `<li>${c}</li>`).join("")}
        </ul>
      </div>

      <div class="prod-card-footer">
        <div>
          <span class="text-xs text-muted">GMV Driven:</span>
          <div class="font-mono text-mint font-bold">$${cr.revenueGMV.toLocaleString()} (${cr.ordersGenerated} Orders)</div>
        </div>
        <button class="btn-xs btn-outline" onclick="showToast('Affiliate code ${cr.discountCode} copied!')">
          <i data-lucide="copy"></i> Code: ${cr.discountCode}
        </button>
      </div>
    </div>
  `).join("");
}

// 10. VOC Feedback Renderer
function renderVOCFeedback() {
  const container = document.getElementById("voc-feedback-list");
  if (!container) return;

  container.innerHTML = PERFORMANCE_LAB_DATA.vocFeedback.map(fb => `
    <div style="background: rgba(10, 14, 24, 0.7); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 14px; margin-bottom: 10px;">
      <div class="flex-between">
        <span class="pill-chip pill-cyan font-bold">${fb.category} &bull; ${fb.product}</span>
        <span class="text-xs text-yellow">★★★★★ (${fb.rating}/5)</span>
      </div>
      <p style="font-size: 13px; color: #fff; font-style: italic; margin: 8px 0;">"${fb.text}"</p>
      <div style="font-size: 11px; color: var(--neon-mint);">
        <strong>Action Executed:</strong> ${fb.actionTaken}
      </div>
    </div>
  `).join("");
}

// 11. Cart State & Toast
function addProductToCart(productId) {
  const prod = PERFORMANCE_LAB_DATA.products.find(p => p.id === productId);
  if (prod) {
    cartItems.push(prod);
    updateCartUI();
    showToast(`${prod.name} added to routine!`);
  }
}

function addBundleToCart(bundleId) {
  const bundle = PERFORMANCE_LAB_DATA.bundles.find(b => b.id === bundleId);
  if (bundle) {
    showToast(`${bundle.name} added with 15% System Discount!`);
  }
}

function updateCartUI() {
  const counter = document.getElementById("cart-counter");
  if (counter) counter.textContent = cartItems.length;
}

function openCartModal() {
  const modal = document.getElementById("cart-modal");
  const content = document.getElementById("cart-modal-content");
  if (!modal || !content) return;

  if (cartItems.length === 0) {
    content.innerHTML = `
      <div style="text-align: center; padding: 40px 20px;">
        <i data-lucide="shopping-bag" style="width: 48px; height: 48px; color: var(--text-muted); margin-bottom: 12px;"></i>
        <h4 style="color: #fff; font-size: 16px;">Your Performance Cart is Empty</h4>
        <p class="text-xs text-muted mt-4">Complete your Performance Profile to discover your custom routine.</p>
        <button class="btn-hero-primary mt-16" onclick="closeModal('cart-modal'); startProfileQuiz();">
          <i data-lucide="sparkles"></i> Build My Profile
        </button>
      </div>
    `;
  } else {
    let total = 0;
    content.innerHTML = `
      <div style="display: flex; flex-direction: column; gap: 10px; margin-bottom: 20px;">
        ${cartItems.map((item, idx) => {
          total += item.subPrice;
          return `
            <div class="flex-between" style="background: rgba(10, 15, 26, 0.8); padding: 12px 14px; border-radius: var(--radius-sm); border: 1px solid var(--border-subtle);">
              <div>
                <strong style="color: #fff; font-size: 13px;">${item.name}</strong>
                <div class="text-xs text-mint">Monthly Subscription (-15%)</div>
              </div>
              <div class="font-mono text-mint font-bold">$${item.subPrice.toFixed(2)}</div>
            </div>
          `;
        }).join("")}
      </div>
      <div class="flex-between" style="border-top: 1px solid var(--border-subtle); padding-top: 14px; margin-bottom: 20px;">
        <strong style="color: #fff;">Monthly Total:</strong>
        <span style="font-size: 20px; font-weight: 900; color: var(--neon-mint); font-family: var(--font-mono);">$${total.toFixed(2)}</span>
      </div>
      <button class="btn-hero-primary" style="width: 100%; justify-content: center;" onclick="closeModal('cart-modal'); showToast('Redirecting to secure checkout...');">
        <i data-lucide="lock"></i> Proceed to Secure Checkout
      </button>
    `;
  }

  modal.classList.add("show");
  lucide.createIcons();
}

function showToast(message) {
  const toast = document.getElementById("toast-notice");
  const msg = document.getElementById("toast-message");
  if (!toast || !msg) return;

  msg.textContent = message;
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
}
