// ==========================================================================
// TikTok Commerce Command Center — Data Engine & Specialist Presets
// ==========================================================================

const TIKTOK_COMMERCE_DATA = {
  // Brand Identity Blueprint
  brandIdentity: {
    name: "ApexGrip",
    tagline: "Tactile tools for intentional living.",
    category: "Everyday Carry & Magnetic Workflow Aesthetics",
    positioning: "Where high-utility engineering meets clean minimalist lifestyle aesthetics.",
    targetAudience: "Tech professionals, remote creatives, college students, EDC enthusiasts (18–38).",
    persona: {
      name: "Marcus (The Aspiring Minimalist)",
      age: 26,
      role: "Hybrid UX Designer & Tech Enthusiast",
      frustrations: "Tangled charging cables in bags, cluttered desk causing mental fatigue, cheap fragile gear.",
      aspiration: "Wants a clean, disciplined aesthetic workspace and frictionless morning routines.",
      tiktokHabits: "Consumes #desksetup, #edc, #cleantok, and satisfying ASMR resets."
    },
    visualIdentity: {
      palette: ["#0B0E14 (Obsidian)", "#25F4EE (Neon Cyan)", "#FE2C55 (Pink)", "#94A1B8 (Slate)"],
      lighting: "Cinematic side-lighting with soft warm key lamps and cool ambient background.",
      cameraStyle: "90° Top-Down Flat-lays + 45° Macro Close-ups with 1.5s fast cuts.",
      typography: "Bold high-contrast sans-serif overlays."
    },
    toneOfVoice: "Relatable, witty, empathetic, confident, zero corporate fluff.",
    brandPromise: "Transform chaotic daily routines into effortless, satisfying flow states.",
    communityIdentity: "The Reset Club / Apex Collective (Sunday Night Resets & Comment Labs)"
  },

  // The 6 Strategic Content Pillars
  contentPillars: [
    {
      id: "p1",
      name: "Transformation & Resets",
      desc: "Before vs After 3s time-lapses of chaotic bags and cluttered desks snapping into pristine order.",
      emotion: "Excited to Improve + Inspired",
      ratioType: "70% Value/Entertainment",
      ratioClass: "ratio-value",
      hooks: ["The 60-Second Sunday Night Reset", "Transforming a messy junk drawer in 3 seconds"]
    },
    {
      id: "p2",
      name: "Education & Productivity Hacks",
      desc: "Practical masterclasses on cable management, luggage packing hacks, and posture setups.",
      emotion: "Educated + Motivated",
      ratioType: "70% Value/Entertainment",
      ratioClass: "ratio-value",
      hooks: ["3 Charging Cable Mistakes You're Making", "The 3-second desk organization rule"]
    },
    {
      id: "p3",
      name: "Extreme Experiments & Stress-Tests",
      desc: "Testing limits: 4,000lb car tire roll-over, 15ft balcony drops, violent cocktail shaking.",
      emotion: "Surprised + Curious",
      ratioType: "20% Product-Integrated",
      ratioClass: "ratio-integrated",
      hooks: ["Will it survive a 4,500lb SUV tire?", "Dropping the tray from a second-story balcony"]
    },
    {
      id: "p4",
      name: "Lifestyle & POV Relatability",
      desc: "Humorous, hyper-relatable workplace struggles and package delivery unboxing reactions.",
      emotion: "Understood + Entertained",
      ratioType: "70% Value/Entertainment",
      ratioClass: "ratio-value",
      hooks: ["POV: You spend 10 mins looking for your charger at 8:55 AM", "When your package lands and you drop everything"]
    },
    {
      id: "p5",
      name: "Community Participation & Comment Lab",
      desc: "Direct video replies to follower comments, skeptic challenges, and colorway voting battles.",
      emotion: "Part of a Community",
      ratioType: "20% Product-Integrated",
      ratioClass: "ratio-integrated",
      hooks: ["Replying to @Dan: Let's see if this can hold a heavy tablet...", "Comment section argued about this color for 3 days"]
    },
    {
      id: "p6",
      name: "Design BTS & Engineering Journey",
      desc: "Behind the scenes showing prototyping failures, mold testing, and founder craftsmanship.",
      emotion: "Curious + Inspired",
      ratioType: "10% Direct Commercial",
      ratioClass: "ratio-commercial",
      hooks: ["Why we threw away 14 prototypes before launch", "Packing order #8,419 for TikTok Shop restock"]
    }
  ],

  // 100-Point Scorecard Weights & Dimensions
  scorecardDimensions: [
    { key: "visual", label: "TikTok Visual Potential", weight: 15, desc: "Pattern interrupt, macro textures, visual magnetism in first 2s" },
    { key: "problem", label: "Problem / Benefit Clarity", weight: 15, desc: "Instant comprehension of pain point and solution without voiceover" },
    { key: "emotion", label: "Emotional Appeal (9 Pillars)", weight: 10, desc: "Triggers Curiosity, Relatability, Inspiration, or Satisfaction" },
    { key: "demo", label: "Demonstration Potential & ASMR", weight: 10, desc: "Visceral transformations, satisfying clicks, extreme stress tests" },
    { key: "content", label: "Content Possibilities & Longevity", weight: 10, desc: "50+ unique video angles without creative fatigue" },
    { key: "margin", label: "Gross Margin Potential (>= 75%)", weight: 10, desc: "Landed cost vs. retail price buffer to support affiliates and ads" },
    { key: "impulse", label: "Impulse Purchase Potential ($15-$45)", weight: 10, desc: "Frictionless 1-click in-app TikTok Shop checkout price band" },
    { key: "competition", label: "Competitive Intensity & Defensibility", weight: 5, desc: "White space or brandable differentiation vs generic Amazon commodities" },
    { key: "shipping", label: "Shipping Simplicity & Flat Packaging", weight: 5, desc: "Lightweight (<400g), non-fragile, low volumetric weight" },
    { key: "returns", label: "Return Risk & Low Sizing Defects", weight: 5, desc: "Zero sizing ambiguity, low mechanical breakdown risk" },
    { key: "repeat", label: "Repeat Purchase / LTV Potential", weight: 5, desc: "Modular expansions, refills, consumables, cross-sell bundles" }
  ],

  // 4-Tier Shortlisted Products Intelligence Dossier
  shortlistedProducts: [
    {
      id: "hero_apex_tray",
      tier: "HERO",
      tierLabel: "HERO PRODUCT (Customer Acquisition)",
      name: "ApexGrip Magnetic Modular EDC Tray",
      targetCustomer: "Remote professionals, tech creators, desk enthusiasts & college students (Ages 18–38)",
      problemSolved: "Daily desk and bag clutter; tangled cords, lost keys, and disorganized everyday items causing morning friction.",
      whyStopScrolling: "A violent dump of chaotic cables onto a table in reverse speed, immediately snapping into crisp, symmetrical order with a sharp magnetic ASMR click.",
      sellingPrice: 34.99,
      landedCost: 7.50,
      grossMarginPct: 78.6,
      competitorLandscape: "Cheap unbranded felt/leather trays on Amazon with zero magnetic modularity; no dominant TikTok-native brand owning the tactile EDC niche.",
      tiktokDemand: "#edc (2.9B views), #desksetup (4.2B views), #organizationhacks (2.1B views)",
      contentOpportunities: [
        "Stress test: Violent shake and drop tests from bicycles and tables",
        "ASMR Foley: Crisp magnetic latch sounds synced to upbeat lo-fi audio tracks",
        "Before/After Resets: 3-second time-lapse transformations of cluttered work desks",
        "Comment Response Videos: Replying to doubts about magnetic strength holding heavy EDC tools"
      ],
      potentialRisks: "Unbranded copycats entering 60–90 days post-launch (mitigated by proprietary colorways, custom branding & VIP warranty community).",
      score: 93,
      scores: {
        visual: 15,
        problem: 14,
        emotion: 9,
        demo: 10,
        content: 9,
        margin: 9,
        impulse: 9,
        competition: 4,
        shipping: 5,
        returns: 5,
        repeat: 4
      }
    },
    {
      id: "hero_pulse_tumbler",
      tier: "HERO",
      tierLabel: "HERO PRODUCT (Customer Acquisition)",
      name: "PulseFlow Sonic Nitro Cold Brew Tumbler",
      targetCustomer: "Daily coffee drinkers, fitness enthusiasts, corporate commuters (Ages 21–45)",
      problemSolved: "Spending $7+ every morning at coffee shops, waiting in drive-thru lines, and watery, poorly mixed homemade iced coffee.",
      whyStopScrolling: "Pouring milk into deep espresso and witnessing a hyper-satisfying creamy cascading micro-foam vortex in 5 seconds without heavy machines.",
      sellingPrice: 39.99,
      landedCost: 8.80,
      grossMarginPct: 78.0,
      competitorLandscape: "Standard Yeti/Stanley tumblers (no sonic mixing) vs expensive countertop cold brew machines ($150+).",
      tiktokDemand: "#coffee (45B views), #coldbrew (1.4B views), #morningroutine (32B views)",
      contentOpportunities: [
        "Morning Routine Vlogs: 'The $7 vs $0.40 iced latte test'",
        "ASMR Soundscapes: Crushed ice dropping, pouring cold brew, high-speed micro-foam vortex",
        "Life Upgrade Pillar: 'How I saved $180/month on coffee in 30 seconds a day'"
      ],
      potentialRisks: "Liquid leakage claims if silicone gasket not seated properly (addressed with explicit quick-start unboxing card).",
      score: 91,
      scores: {
        visual: 14,
        problem: 15,
        emotion: 10,
        demo: 10,
        content: 9,
        margin: 9,
        impulse: 8,
        competition: 4,
        shipping: 4,
        returns: 4,
        repeat: 4
      }
    },
    {
      id: "supp_apex_sleeve",
      tier: "SUPPORTING",
      tierLabel: "SUPPORTING PRODUCT (AOV & Basket Builder)",
      name: "ApexShield Silicone Impact Travel Sleeve",
      targetCustomer: "Existing ApexGrip buyers, travelers, backpack commuters",
      problemSolved: "Protecting premium EDC gear from bag scratches and moisture while in transit.",
      whyStopScrolling: "Dropping a phone and tray into the sleeve and submerging it in water/dust without any damage.",
      sellingPrice: 14.99,
      landedCost: 2.20,
      grossMarginPct: 85.3,
      competitorLandscape: "Generic neoprene sleeves; custom fit designed exclusively for ApexGrip ecosystem.",
      tiktokDemand: "#travelhacks (8.9B views), #packingasmr (1.2B views)",
      contentOpportunities: [
        "10-second slip-in demos attached as second slides in TikTok Shop showcase",
        "Bundle unboxing showing tray + sleeve seamless combo"
      ],
      potentialRisks: "Low standalone appeal (primarily sold as 1-click bundle add-on).",
      score: 87,
      scores: {
        visual: 12,
        problem: 13,
        emotion: 8,
        demo: 9,
        content: 8,
        margin: 10,
        impulse: 10,
        competition: 4,
        shipping: 5,
        returns: 5,
        repeat: 3
      }
    },
    {
      id: "supp_mag_clips",
      tier: "SUPPORTING",
      tierLabel: "SUPPORTING PRODUCT (AOV & Basket Builder)",
      name: "MagLock Dual Cable Anchor Clips (4-Pk)",
      targetCustomer: "Anyone with bedside or desk charger cables slipping behind tables",
      problemSolved: "Reaching behind nightstands and heavy desks for dropped charging cables.",
      whyStopScrolling: "Cable snapping magically to the side of a table when dropped.",
      sellingPrice: 12.99,
      landedCost: 1.80,
      grossMarginPct: 86.1,
      competitorLandscape: "Cheap plastic stick-on clips that peel off; magnetic dual-channel holds firmly.",
      tiktokDemand: "#cablemanagement (1.8B views), #deskgoals (3.4B views)",
      contentOpportunities: [
        "Fast 5-second 'Never lose your phone charger again' demonstrations"
      ],
      potentialRisks: "Low individual order value if purchased without bundle.",
      score: 86,
      scores: {
        visual: 13,
        problem: 14,
        emotion: 8,
        demo: 9,
        content: 7,
        margin: 10,
        impulse: 10,
        competition: 3,
        shipping: 5,
        returns: 5,
        repeat: 2
      }
    },
    {
      id: "repeat_barista_pods",
      tier: "REPEAT",
      tierLabel: "REPEAT PRODUCT (Recurring LTV Consumable)",
      name: "PulseFlow Barista Micro-Extract Flavor Pods (30-Pk)",
      targetCustomer: "PulseFlow Tumbler owners looking for fast cafe-grade morning flavors",
      problemSolved: "Messy coffee grounds and inconsistent flavor profiles when rushing in the morning.",
      whyStopScrolling: "Cracking a pod with satisfying ASMR pop, dropping into water, and watching instant rich swirl.",
      sellingPrice: 24.99,
      landedCost: 4.50,
      grossMarginPct: 82.0,
      competitorLandscape: "Nespresso pods (requires $200 machine) vs PulseFlow portable concentrate.",
      tiktokDemand: "#asmrcoffee (3.1B views), #coffeerecipe (8.4B views)",
      contentOpportunities: [
        "ASMR flavor tasting series",
        "Monthly seasonal flavor drops (Pumpkin Spice, Salted Caramel, Mocha Hazelnut)"
      ],
      potentialRisks: "Food & beverage expiry date management and import food regulations.",
      score: 89,
      scores: {
        visual: 13,
        problem: 13,
        emotion: 9,
        demo: 9,
        content: 9,
        margin: 9,
        impulse: 8,
        competition: 4,
        shipping: 5,
        returns: 5,
        repeat: 5
      }
    },
    {
      id: "trend_cyber_clock",
      tier: "TREND",
      tierLabel: "TREND PRODUCT (Rapid Revenue Sprint)",
      name: "AeroGlow Cyberpunk Floating Magnetic Desk Clock",
      targetCustomer: "Desk setup creators, gamers, tech gifters, Q4 holiday shoppers",
      problemSolved: "Boring, generic office clocks; desire for futuristic aesthetic eye-candy.",
      whyStopScrolling: "A glowing nixie-tube clock floating mid-air while spinning with RGB neon glow.",
      sellingPrice: 29.99,
      landedCost: 6.40,
      grossMarginPct: 78.7,
      competitorLandscape: "High-end $150 nixie tube clocks vs affordable impulse TikTok aesthetic.",
      tiktokDemand: "#gamingsetup (18B views), #deskaccessories (2.6B views)",
      contentOpportunities: [
        "Dark room RGB lighting reveal",
        "Cyberpunk aesthetic desk makeover transformation"
      ],
      potentialRisks: "Shorter lifecycle (3-6 month viral curve); must harvest cash quickly without over-ordering inventory.",
      score: 82,
      scores: {
        visual: 15,
        problem: 8,
        emotion: 9,
        demo: 10,
        content: 8,
        margin: 9,
        impulse: 9,
        competition: 3,
        shipping: 4,
        returns: 4,
        repeat: 3
      }
    }
  ],

  // Preset Product Scenarios
  products: {
    magnetic_tray: {
      name: "ApexGrip Magnetic EDC Desk Tray",
      category: "Workplace & Everyday Carry",
      retailPrice: 34.99,
      cogs: 7.50,
      shipping: 4.20,
      painPoint: "Messy backpack cables, tangled keys, lost EDC gear",
      heroBenefit: "Instant 1-touch magnetic snap locking all gear into neat rows",
      avatar: "Remote workers, tech creatives & busy students",
      trendingAudio: "Lo-fi Chill Hop + ASMR Foley snap",
      objection: "Does it hold heavy items if vigorously shaken upside down?"
    },
    cold_brew: {
      name: "PulseFlow Rapid Nitro Cold Brew Tumbler",
      category: "Kitchen & Daily Routine",
      retailPrice: 42.00,
      cogs: 9.80,
      shipping: 5.10,
      painPoint: "Spending $7 every day at coffee shops and waiting 15 minutes",
      heroBenefit: "Silky cafe-grade micro-foam nitro cold brew in 45 seconds at home",
      avatar: "Coffee enthusiasts, corporate commuters & gym goers",
      trendingAudio: "Upbeat Morning Routine Jazz & Pour ASMR",
      objection: "Is it difficult to wash and clean after use?"
    },
    lumibar: {
      name: "LumiGlow Portable Content Studio Light",
      category: "Creator Gear & Tech",
      retailPrice: 28.50,
      cogs: 5.60,
      shipping: 3.80,
      painPoint: "Grainy, dark, unflattering video lighting when filming on phone",
      heroBenefit: "Diffused golden-hour studio lighting that clips onto any phone in 1 sec",
      avatar: "TikTok creators, makeup vloggers & Zoom presenters",
      trendingAudio: "High Energy Pop & Before/After Sound Transition",
      objection: "Does the clip scratch the phone screen or lens?"
    }
  },

  // Flywheel Stages Data
  flywheelSteps: {
    1: {
      num: "STAGE 01",
      title: "TikTok Organic Content Engine",
      leadAgent: "BrandCraft (Agent 2)",
      objectives: [
        "Capture immediate viewer attention in the first 2.5 seconds using visual/verbal pattern interrupts.",
        "Trigger at least one of the 9 Emotion Pillars (Curiosity, Relatability, Inspiration, Education).",
        "Embed the product naturally as an indispensable tool in a story, never a dry catalog pitch.",
        "Seamlessly anchor the yellow cart link directly to the specific featured SKU."
      ],
      handoff: "BrandCraft releases 5 daily video concepts → RetentionLoop identifies top comment hooks → GrowthPulse audits 24h retention velocity for Spark Ads boost.",
      metrics: {
        "Avg Watch Time": "> 18.5s",
        "Hook 2s Retention": "> 68%",
        "Yellow Cart CTR": "> 2.4%"
      }
    },
    2: {
      num: "STAGE 02",
      title: "Audience & Community Cultivation",
      leadAgent: "RetentionLoop (Agent 5)",
      objectives: [
        "Turn high-intent viewer questions & doubts into immediate reply-with-video demonstrations.",
        "Cultivate an active, supportive comment section that defends the product value organically.",
        "Deploy pinned comments that guide viewers directly to limited flash discounts."
      ],
      handoff: "RetentionLoop passes recurring buyer questions to BrandCraft for next-day video production & feeds product feedback to ShopEngine.",
      metrics: {
        "Comment Response SLA": "< 2 Hours",
        "Video Reply Rate": "2/day",
        "Positive Sentiment": "> 94%"
      }
    },
    3: {
      num: "STAGE 03",
      title: "Product Discovery & TikTok Shop Conversion",
      leadAgent: "ShopEngine (Agent 3)",
      objectives: [
        "Maintain high-converting 7-slide mobile showcases with crystal-clear value propositions.",
        "Structure multi-pack bundle discounts (e.g. 2-pack duo saves 18%) to push AOV above $40.",
        "Maintain 100% compliance with TikTok Shop Seller SLAs (<48h dispatch, <1% defect rate)."
      ],
      handoff: "ShopEngine balances inventory velocity with CreatorScale sample allocations and informs GrowthPulse on max allowable CPA.",
      metrics: {
        "Showcase CVR": "3.42%",
        "Shop Health Score": "100% (Tier 1)",
        "Net Margin Target": "> 28%"
      }
    },
    4: {
      num: "STAGE 04",
      title: "Tactile Unboxing & 5-Star Reviews",
      leadAgent: "RetentionLoop (Agent 5)",
      objectives: [
        "Deliver premium tactile unboxing experience with branded VIP insert cards.",
        "Incentivize photo/video reviews using in-app TikTok Shop coupon vouchers.",
        "Trigger automated post-delivery review flows on Day 3 and Day 14."
      ],
      handoff: "RetentionLoop captures 5-star customer reviewers and passes top raving fans to CreatorScale to onboard as affiliate partners.",
      metrics: {
        "5-Star Rating %": "97.8%",
        "Customer UGC Rate": "8.4%",
        "Repeat 60d Rate": "22.5%"
      }
    },
    5: {
      num: "STAGE 05",
      title: "Creator & Affiliate Scaler Distribution",
      leadAgent: "CreatorScale (Agent 4)",
      objectives: [
        "Reach out to 50+ targeted niche creators daily across DMs and TikTok Affiliate Center.",
        "Seed 15-25 free samples weekly to verified creators with active engagement.",
        "Provide 1-page high-converting hook briefs to ensure creators post high-retention videos."
      ],
      handoff: "CreatorScale tracks top-performing affiliate videos and passes Spark Ad authorization codes to GrowthPulse for paid amplification.",
      metrics: {
        "Active Affiliates": "64 creators",
        "Monthly Creator GMV": "$42,800",
        "Sample Post Rate": "76%"
      }
    },
    6: {
      num: "STAGE 06",
      title: "Spark Ads & Paid Amplification",
      leadAgent: "GrowthPulse (Agent 5)",
      objectives: [
        "Filter top organic and creator UGC posts exceeding 3x baseline velocity & 2% CTR.",
        "Launch $20-$50/day test Spark Ad campaigns with lowest cost bidding.",
        "Scale winning creatives by 20% daily while maintaining direct ROAS >2.8x."
      ],
      handoff: "GrowthPulse detects creative fatigue and requests new hook variations from BrandCraft and fresh UGC from CreatorScale.",
      metrics: {
        "Spark Ads ROAS": "3.18x",
        "Blended MER": "4.3x",
        "Ad Spend Share": "20% of GMV"
      }
    }
  },

  // 50+ Viral Hooks Database
  hooksVault: [
    {
      pillar: "Inspired",
      text: "If you want your daily routine to feel like a high-budget movie, watch this.",
      visual: "Crisp slow-motion cinematic lighting of product snapping into place with morning sun.",
      foley: "Warm acoustic guitar swell into satisfying tactile click.",
      cta: "Linked in the yellow cart for the morning aesthetic crowd."
    },
    {
      pillar: "Inspired",
      text: "The one small upgrade that made my desk look like a Pinterest board.",
      visual: "Clean aesthetic panning shot across a minimalist wooden desk setup.",
      foley: "Lo-fi synth beat with soft atmospheric ambiance.",
      cta: "Grabbed mine from the yellow basket below."
    },
    {
      pillar: "Inspired",
      text: "How I transformed my chaotic morning into the most peaceful part of my day.",
      visual: "Before/after transition showing calm organized flow vs messy rush.",
      foley: "Coffee pouring sound into smooth chillhop beat.",
      cta: "Available in the orange cart below while restocked."
    },
    {
      pillar: "Motivated",
      text: "Stop letting disorganization steal 30 minutes of your morning.",
      visual: "Creator passionately pointing at camera, holding the sleek solution.",
      foley: "Fast upbeat drill beat with crisp vocal punch.",
      cta: "Check the yellow basket for the launch discount."
    },
    {
      pillar: "Motivated",
      text: "The easiest way to build momentum when you have zero energy.",
      visual: "One single satisfying action that instantly resets the entire room.",
      foley: "Single deep snap sound followed by high-energy music.",
      cta: "Tap the cart icon below to get started."
    },
    {
      pillar: "Curious",
      text: "Why is nobody talking about this hidden TikTok Shop gem?",
      visual: "Opening an unmarked minimalist matte black box under spotlight.",
      foley: "Suspenseful riser transitioning into sudden satisfying reveal chime.",
      cta: "Found it in the yellow basket below before it goes viral."
    },
    {
      pillar: "Curious",
      text: "I bought the weirdest viral product so you don’t have to...",
      visual: "Demonstrating an unusual mechanism that looks confusing at first glance.",
      foley: "Playful mystery sound effect into sudden mechanical latch.",
      cta: "Judge for yourself in the orange cart below."
    },
    {
      pillar: "Curious",
      text: "Wait until you see what happens when you press this magnetic latch.",
      visual: "Finger slowly pressing the latch in macro 4K close-up.",
      foley: "Ultra-crisp ASMR mechanical click with reverberation.",
      cta: "Yellow basket is linked right above the caption."
    },
    {
      pillar: "Entertained",
      text: "POV: You bought one thing to fix your life and now you're obsessed.",
      visual: "Fast comedic montage of using the product in absurd, hyper-dramatic situations.",
      foley: "Trending comedic audio soundtrack / fast tempo saxophone.",
      cta: "Don't blame me if you get addicted—yellow cart below."
    },
    {
      pillar: "Understood",
      text: "POV: You spend 10 minutes every morning looking for your cables and keys.",
      visual: "Frustrated hands rummaging through bottom of a dark chaotic backpack.",
      foley: "Jangling keys, rustling fabric, frustrated sigh.",
      cta: "Fix your bag chaos in the yellow basket below."
    },
    {
      pillar: "Educated",
      text: "3 things you’re doing wrong with your everyday carry setup.",
      visual: "Numbered graphics 1, 2, 3 popping on screen with rapid visual demos.",
      foley: "Quick digital whoosh on each numbered point.",
      cta: "Step 3 tool is linked in the yellow cart."
    },
    {
      pillar: "Surprised",
      text: "We ran over this with a 4,000lb car to see if the magnetic lock holds...",
      visual: "Car tire rolling directly over the organizer on asphalt, followed by inspection.",
      foley: "Tire rumble on gravel into creator shouting in amazement.",
      cta: "Indestructible link in the yellow cart."
    },
    {
      pillar: "Community",
      text: "Replying to @TechLover99: Let's see if this can hold an iPad Pro...",
      visual: "Showing user's comment sticker on top left, mounting iPad and shaking.",
      foley: "Voiceover reading comment out loud into live demonstration.",
      cta: "Replying to top comments all week! Yellow basket below."
    },
    {
      pillar: "Excited to Improve",
      text: "This 30-second fix cured my workspace anxiety forever.",
      visual: "Fast satisfying time-lapse of chaotic desk snapping into pristine order.",
      foley: "Calming lo-fi beats with satisfying snap sound effects.",
      cta: "Start your reset in the yellow basket below."
    }
  ],

  // Sample Creators in CRM
  creators: [
    {
      id: "c1",
      handle: "@alex_tech_setups",
      name: "Alex Rivera",
      avatar: "AR",
      followers: "148.5K",
      avgViews: "42.0K",
      status: "spark",
      gmv: "$12,450",
      tier: "Tier 3 (25% VIP)",
      sparkCode: "SPARK-8829-OK",
      roas: "3.84x"
    },
    {
      id: "c2",
      handle: "@minimalist_sarah",
      name: "Sarah Chen",
      avatar: "SC",
      followers: "89.2K",
      avgViews: "28.5K",
      status: "live",
      gmv: "$6,120",
      tier: "Tier 2 (20%)",
      sparkCode: "SPARK-4412-PENDING",
      roas: "3.10x"
    },
    {
      id: "c3",
      handle: "@everyday_carry_dan",
      name: "Dan Miller",
      avatar: "DM",
      followers: "54.1K",
      avgViews: "19.8K",
      status: "shipped",
      gmv: "$0",
      tier: "Tier 2 (20%)",
      sparkCode: "N/A",
      roas: "--"
    },
    {
      id: "c4",
      handle: "@desk_culture",
      name: "Marcus Vance",
      avatar: "MV",
      followers: "31.4K",
      avgViews: "12.2K",
      status: "pitched",
      gmv: "$0",
      tier: "Tier 1 (15%)",
      sparkCode: "N/A",
      roas: "--"
    }
  ],

  // 10 Curiosity Archetypes (Anti-Generic Hook Guardrails)
  hookArchetypes: [
    {
      id: "unexpected_results",
      title: "1. Unexpected Results",
      structure: "\"I didn't expect this to actually work...\"",
      forbidden: "\"Hi guys, today I am reviewing this new organizer...\"",
      native: "\"I honestly thought this magnetic lock was pure marketing hype until I did this...\"",
      psychology: "Creates instant cognitive dissonance; forces viewer to watch payoff."
    },
    {
      id: "relatable_frustrations",
      title: "2. Relatable Frustrations",
      structure: "\"POV: You spend 10 minutes every morning searching for your...\"",
      forbidden: "\"Do you need better cable management?\"",
      native: "\"POV: Your 9 AM Zoom call starts in 3 minutes and your charger has completely vanished.\"",
      psychology: "Validates universal shared irritation; high comment resonance."
    },
    {
      id: "contrarian_statements",
      title: "3. Contrarian Statements",
      structure: "\"Stop buying expensive desk setups until you fix this one thing.\"",
      forbidden: "\"Check out our amazing desk products...\"",
      native: "\"Spending $500 on a new desk is a waste of money if you make this 1 cable mistake.\"",
      psychology: "Challenges status quo assumptions; triggers curiosity and debate."
    },
    {
      id: "extreme_stress_test",
      title: "4. Extreme Stress-Test",
      structure: "\"Will this survive a 4,500lb SUV tire?\"",
      forbidden: "\"Our tray is very durable and high quality...\"",
      native: "\"We put this magnetic tray directly under a moving car tire to see when the magnets snap.\"",
      psychology: "High stakes, visual suspense, undeniable physical proof."
    },
    {
      id: "seven_day_challenge",
      title: "5. 7-Day Transformation Challenge",
      structure: "\"I tested the 60-second Sunday reset for 7 days...\"",
      forbidden: "\"Here are my weekly organization tips...\"",
      native: "\"I forced myself to reset my bag every night for 7 days—here's what happened to my mornings.\"",
      psychology: "Personal experiment narrative; builds anticipation for day-by-day results."
    },
    {
      id: "three_things_i_wish",
      title: "6. Three Things I Wish I Knew",
      structure: "\"3 cable mistakes that are secretly destroying your tech gear.\"",
      forbidden: "\"Three good ways to organize cables...\"",
      native: "\"3 everyday carry mistakes that are costing you 20 minutes every morning.\"",
      psychology: "High perceived educational value with numbered structure aiding retention."
    },
    {
      id: "behind_closed_doors",
      title: "7. Behind The Closed Doors (BTS)",
      structure: "\"Why we threw away 14 prototypes before launching this.\"",
      forbidden: "\"Here is how our factory makes this item...\"",
      native: "\"The manufacturer told us this magnetic click sound was impossible to mass-produce.\"",
      psychology: "Authentic vulnerability, founder craftsmanship, anti-corporate storytelling."
    },
    {
      id: "skeptic_debunk",
      title: "8. Skeptic Comment Debunk",
      structure: "\"Replying to @skeptic: Let's see if this can hold a heavy iPad Pro...\"",
      forbidden: "\"Replying to a customer question today...\"",
      native: "\"Dan said this magnet drops when you run—let's do a violent sprint test.\"",
      psychology: "Community combat, social proof, high organic engagement loop."
    },
    {
      id: "sensory_asmr_reset",
      title: "9. Satisfying Sensory ASMR Reset",
      structure: "\"The 30-second Sunday night reset ritual.\"",
      forbidden: "\"Watch me clean my messy room today...\"",
      native: "\"Zero speaking. Just 30 seconds of pure satisfying magnetic organization foley.\"",
      psychology: "Sensory dopamine, stress relief, high re-watch rate and saves."
    },
    {
      id: "secret_tiktok_shop",
      title: "10. Secret TikTok Shop Find",
      structure: "\"Why is nobody talking about this hidden TikTok Shop gem?\"",
      forbidden: "\"We are running a special sale on TikTok Shop...\"",
      native: "\"The algorithm brought you here for a reason. This hidden $34 tool changed my bag forever.\"",
      psychology: "Insider discovery feeling; triggers FOMO and impulse clicks."
    }
  ],

  // 30-Day Content Production Pipeline with 15-Point Concept Schemas
  creativePipeline: [
    {
      day: 1,
      pillar: "Transformation & Resets",
      pillarCode: "p1",
      ratio: "70% Value",
      ratioClass: "ratio-value",
      conceptTitle: "The 60-Second Sunday Night Reset",
      targetViewer: "Hybrid workers, remote creators, busy college students (Ages 18–35)",
      archetype: "Satisfying Sensory ASMR Reset",
      duration: "38 seconds",
      shopPlacement: "ApexGrip Magnetic Tray (Primary Yellow Basket Anchor)",
      keywords: ["sunday reset", "desk organization", "edc tray", "clean desk setup", "satisfying asmr"],
      reasonItWorks: "Strong visual pattern interrupt (reverse chaotic dump) + visceral audio dopamine + universal relatable ritual (Sunday night dread prep). Zero sales friction in first 35 seconds.",
      
      // Multi-Variant Hook Engine (Hook A/B/C)
      hookVariants: {
        A: {
          variantName: "Variant A: Problem / Agitation Hook (Default)",
          openingHook: "\"If your Monday morning feels like a warzone, do this tonight.\"",
          first3sVisual: "Top-down 90° angle. A messy backpack is dumped violently onto a desk in reverse motion (rewind effect) as items snap into pristine order.",
          audioFoley: "Chaotic fabric rummaging &rarr; sudden crisp magnetic ASMR click &rarr; smooth lo-fi chillhop beat.",
          onScreenText: "The 60-Second Sunday Night Reset 🎒⚡",
          voiceoverScript: "Stop packing your bag in the morning when you're half asleep and running late. Every Sunday night, take 60 seconds to group your daily essentials. Phone, cables, keys, AirPods—everything has an exact magnetic channel. When you wake up, your bag is packed in 2 seconds flat.",
          cta: "\"Using the ApexGrip tray—left the direct link below in the yellow cart for anyone doing a weekly reset!\"",
          caption: "Your future self on Monday at 8:55 AM will thank you. 🎒✨ What's one thing you always forget? #sundayreset #desksetup #organizationhacks #edc",
          sceneSequence: [
            { time: "0:00 - 0:03", action: "Hook: Reverse chaotic bag dump snapping into magnetic tray with crisp mechanical ASMR sound.", text: "The 60-Second Sunday Night Reset 🎒⚡" },
            { time: "0:03 - 0:15", action: "Fast 3-step cable sorting into parallel neodymium magnetic channels. Fast macro cuts (1.2s each).", text: "Step 1: Group Cables & Keys" },
            { time: "0:15 - 0:26", action: "Sliding phone, AirPods, wallet into custom molded silicone contours. Top-down aesthetic perfection.", text: "Step 2: Lock Daily Essentials" },
            { time: "0:26 - 0:34", action: "One fluid zip closure of backpack. Desk is left 100% spotless under warm amber lamp.", text: "Ready for Monday Morning ✨" },
            { time: "0:34 - 0:38", action: "Creator taps yellow cart icon casually while sliding tray into backpack.", text: "ApexGrip in Yellow Basket 👇" }
          ]
        },
        B: {
          variantName: "Variant B: Extreme Curiosity / Speed Challenge Hook",
          openingHook: "\"I timed how long it takes to pack a bag with and without this tray...\"",
          first3sVisual: "Split screen: Left side shows creator frantically digging through drawers at 8:58 AM (Timer: 7m 42s). Right side shows 1-touch magnetic snap (Timer: 18s).",
          audioFoley: "Fast ticking stopwatch foley &rarr; dramatic buzzer &rarr; upbeat energetic trap beat.",
          onScreenText: "7 Minutes vs 18 Seconds ⏱️⚡",
          voiceoverScript: "Without a system: 7 minutes looking for charging cables and car keys under pillows. With magnetic modular channels: 18 seconds total. You don't need more time in the morning, you just need better friction design.",
          cta: "\"Grab yours from the orange basket below before the Monday morning rush!\"",
          caption: "7 minutes vs 18 seconds. Which one are you? 😅👇 #morningroutine #productivityhack #edctray #tiktokshop",
          sceneSequence: [
            { time: "0:00 - 0:03", action: "Split screen frantic timer comparison with alarm ringing sound.", text: "7 Minutes vs 18 Seconds ⏱️⚡" },
            { time: "0:03 - 0:16", action: "Side-by-side demonstration of messy bag vs structured magnetic tray.", text: "Friction Design > Willpower" },
            { time: "0:16 - 0:28", action: "Close-up macro of magnetic modular latch holding heavy multitool and cables.", text: "Neodymium Magnetic Lock" },
            { time: "0:28 - 0:35", action: "Winner side zips backpack and walks out door with iced coffee.", text: "Mornings on Easy Mode ☕" },
            { time: "0:35 - 0:40", action: "Quick gesture to yellow cart discount voucher.", text: "Available in Yellow Cart 👇" }
          ]
        },
        C: {
          variantName: "Variant C: Pure ASMR / Aesthetic Sensory Reset Hook",
          openingHook: "\"No talking. Just 30 seconds of pure organizational dopamine.\"",
          first3sVisual: "Extreme 4K macro lens focusing on obsidian anodized aluminum finish. A sleek charging cable snaps into magnetic lock with resonant metallic ping.",
          audioFoley: "Binaural high-definition foley: metallic snaps, smooth matte silicone glide, heavy solid thud on solid oak desk.",
          onScreenText: "Satisfying EDC Reset (Headphones On) 🎧✨",
          voiceoverScript: "(No spoken voiceover — pure rhythmic foley mixed with subtle binaural ambient synthesizer chords).",
          cta: "\"Tagged the tactile tray below in the yellow cart for the aesthetic crowd.\"",
          caption: "Headphones recommended 🎧 Drop a ✨ if this scratched your brain in the best way. #asmr #satisfying #edc #cleantok",
          sceneSequence: [
            { time: "0:00 - 0:03", action: "Macro 4K magnetic snap with resonant metallic ping (binaural audio).", text: "Satisfying EDC Reset 🎧✨" },
            { time: "0:03 - 0:14", action: "Rhythmic sequential placement of AirPods case, mechanical pen, and braided cable.", text: "Pure Tactile Order" },
            { time: "0:14 - 0:25", action: "Slow 90-degree table tilt showing zero slippage under neodymium magnetic lock.", text: "Zero Slip Grip" },
            { time: "0:25 - 0:32", action: "Cinematic golden hour lighting sweep across finished setup.", text: "Intentional Living ✨" },
            { time: "0:32 - 0:36", action: "Soft subtle yellow basket icon animation in corner.", text: "ApexGrip in Yellow Cart" }
          ]
        }
      }
    },
    {
      day: 2,
      pillar: "Education & Productivity Hacks",
      pillarCode: "p2",
      ratio: "70% Value",
      ratioClass: "ratio-value",
      conceptTitle: "3 Cable Mistakes Destroying Your Gear",
      targetViewer: "Tech lovers, desk setup enthusiasts, gadget owners",
      archetype: "Three Things I Wish I Knew",
      duration: "42 seconds",
      shopPlacement: "MagLock Dual Cable Anchor Clips (Supporting SKU)",
      keywords: ["cable management", "tech tips", "desk setup tips", "charging cable hack"],
      reasonItWorks: "Fear of damaging expensive electronics ($1,200 phones) drives high retention and saves. Numbered list format ensures viewers watch to point 3.",
      hookVariants: {
        A: {
          variantName: "Variant A: Problem / Agitation Hook",
          openingHook: "\"Stop bending your charging cables at 90-degree angles.\"",
          first3sVisual: "Close-up of frayed, bent phone cable sparking (simulated VFX) followed by dead battery icon.",
          audioFoley: "Electric spark sound effect &rarr; ominous low bass drop &rarr; educational speaking cadence.",
          onScreenText: "3 Cable Mistakes Ruining Your Battery ⚡❌",
          voiceoverScript: "Mistake 1: Tight winding breaks the internal copper strands. Mistake 2: Letting heavy charging bricks dangle off desks puts strain on your ports. Mistake 3: Storing cables loose in your bag causes connector bends. Instead, use magnetic anchor channels for zero-strain alignment.",
          cta: "\"Cable anchors featured are linked in the yellow cart if your cables keep breaking!\"",
          caption: "How many frayed cables do you have right now? Be honest 💀 #techhacks #cablemanagement #productivity #lifehacks",
          sceneSequence: [
            { time: "0:00 - 0:03", action: "Frayed cable spark macro close up with dramatic warning.", text: "Stop Doing This ❌" },
            { time: "0:03 - 0:15", action: "Demonstration of copper fatigue inside tightly wound cords.", text: "Mistake 1: Tight Coiling" },
            { time: "0:15 - 0:28", action: "Demonstrating dangling weight strain on wall outlets and desk edges.", text: "Mistake 2: Gravity Strain" },
            { time: "0:28 - 0:36", action: "Solution: Snapping magnetic clips to desk edge for perfectly straight strain relief.", text: "The Fix: Magnetic Alignment" },
            { time: "0:36 - 0:42", action: "Creator points to bottom left yellow basket.", text: "Clips in Yellow Basket 👇" }
          ]
        },
        B: {
          variantName: "Variant B: Contrarian Statement Hook",
          openingHook: "\"Your phone charger isn't cheap—you're just treating it wrong.\"",
          first3sVisual: "Creator holding 5 ruined cables like a dead bouquet, throwing them into trash.",
          audioFoley: "Trash can slam &rarr; high energy vocal punch.",
          onScreenText: "Why Your Cables Keep Breaking 🗑️⚡",
          voiceoverScript: "People spend $30 on new cables every 4 months when a $12 magnetic clip prevents strain forever. Here is the engineering science behind cable fatigue.",
          cta: "\"Check the yellow basket for the magnetic clips that saved my sanity.\"",
          caption: "Save your cables before they fry your charging port. ⚡ #techtips #lifehack #gadgets",
          sceneSequence: [
            { time: "0:00 - 0:03", action: "Bouquet of dead cables thrown into trash can.", text: "Stop Wasting Money 🗑️" },
            { time: "0:03 - 0:18", action: "Strain physics explanation on cable neck.", text: "Why Cables Fail" },
            { time: "0:18 - 0:32", action: "Magnetic cable dock install in 2 seconds.", text: "Instant Strain Relief" },
            { time: "0:32 - 0:40", action: "Yellow cart CTA.", text: "Yellow Cart Below 👇" }
          ]
        },
        C: {
          variantName: "Variant C: Quick Diagnostic Checklist Hook",
          openingHook: "\"Check your phone charger right now. If it looks like this, unplug it.\"",
          first3sVisual: "Macro zoom on yellowing, twisted cable neck with exposed shielding.",
          audioFoley: "Loud buzzer alert &rarr; fast diagnostic explanation.",
          onScreenText: "Unplug If You See This ⚠️⚡",
          voiceoverScript: "If you see micro-cracks near the neck, it's losing 40% charging efficiency and heating up. Here is how to lock your cables straight forever.",
          cta: "\"Magnetic cable docks linked below in the yellow cart!\"",
          caption: "Check your bedside charger right now. ⚠️ #techsafety #gadgethacks #deskgoals",
          sceneSequence: [
            { time: "0:00 - 0:03", action: "Macro shot of hazardous frayed cable.", text: "Warning: Unplug This ⚠️" },
            { time: "0:03 - 0:18", action: "Thermal efficiency demonstration.", text: "Resistance & Heat" },
            { time: "0:18 - 0:32", action: "Clean magnetic anchor demo.", text: "Magnetic Fix" },
            { time: "0:32 - 0:40", action: "Yellow basket tag.", text: "Yellow Cart 👇" }
          ]
        }
      }
    },
    {
      day: 3,
      pillar: "Extreme Experiments & Stress-Tests",
      pillarCode: "p3",
      ratio: "20% Product-Integrated",
      ratioClass: "ratio-integrated",
      conceptTitle: "Car Tire vs Neodymium Magnetic Tray",
      targetViewer: "Skeptics, EDC gearheads, durability test fans",
      archetype: "Extreme Stress-Test",
      duration: "35 seconds",
      shopPlacement: "ApexGrip Magnetic Tray (Hero SKU)",
      keywords: ["durability test", "hydraulic press style", "stress test", "indestructible edc"],
      reasonItWorks: "Extreme spectacle and suspense. Proves durability claims beyond doubt and creates organic comment debate about neodymium magnet strength.",
      hookVariants: {
        A: {
          variantName: "Variant A: High Stakes Shock Hook",
          openingHook: "\"Will this magnetic organizer survive a 4,500lb SUV tire?\"",
          first3sVisual: "Camera at asphalt level. A massive SUV tire rolls directly toward the organizer loaded with metal tools.",
          audioFoley: "Deep engine rumble &rarr; asphalt gravel crunch &rarr; loud tire compression sound &rarr; creator gasping.",
          onScreenText: "4,500lb SUV vs Neodymium Magnet 🚗💥",
          voiceoverScript: "We put our CNC aerospace aluminum tray directly under the front wheel of an SUV to see if the magnetic lock shatters. Let's roll over it live on camera.",
          cta: "\"If it survived a 4,000lb car, your backpack is safe. Yellow basket below!\"",
          caption: "We really risked a $35k car for this test 💀 Did you think it would break? #stresstest #durability #edcgear #experiment",
          sceneSequence: [
            { time: "0:00 - 0:03", action: "SUV tire rolling within 2 inches of organizer.", text: "4,500lb SUV vs EDC Tray 🚗💥" },
            { time: "0:03 - 0:14", action: "Full tire compression directly over tray on asphalt.", text: "Full Vehicle Weight" },
            { time: "0:14 - 0:24", action: "Car reverses. Creator picks up tray: zero frame distortion, all magnets intact.", text: "Zero Dents. 100% Locked." },
            { time: "0:24 - 0:30", action: "Violently shaking tray upside down to prove magnetic bond.", text: "Neodymium Magnetic Bond" },
            { time: "0:30 - 0:35", action: "Yellow basket link gesture.", text: "Indestructible Link 👇" }
          ]
        },
        B: {
          variantName: "Variant B: Skeptic Bet Hook",
          openingHook: "\"My friend bet me $100 this tray would crack under his truck...\"",
          first3sVisual: "Friend standing by pickup truck holding a $100 bill, pointing at tray on gravel.",
          audioFoley: "Truck horn &rarr; tire crunch &rarr; cheering laughter.",
          onScreenText: "$100 Durability Bet 💵🚗",
          voiceoverScript: "He thought the magnetic joints were cheap plastic. Time to collect my $100.",
          cta: "\"Grab the indestructible EDC tray in the orange cart below!\"",
          caption: "Easiest $100 I ever made. 💵😂 #bet #stresstest #trucktest #edc",
          sceneSequence: [
            { time: "0:00 - 0:03", action: "Cash bet and truck tire rolling forward.", text: "$100 Bet 💵" },
            { time: "0:03 - 0:15", action: "Truck drives over tray.", text: "Rolling Over It..." },
            { time: "0:15 - 0:26", action: "Inspecting unscathed aerospace aluminum.", text: "Unbroken ✨" },
            { time: "0:26 - 0:32", action: "Taking the $100 bill.", text: "Pay Up!" },
            { time: "0:32 - 0:35", action: "Yellow basket tag.", text: "Yellow Cart 👇" }
          ]
        },
        C: {
          variantName: "Variant C: 15ft Balcony Drop Test Hook",
          openingHook: "\"Dropping my entire EDC setup from a 2nd-story balcony...\"",
          first3sVisual: "Creator holding loaded tray over balcony railing, dropping it onto concrete patio below.",
          audioFoley: "Wind rush &rarr; loud concrete smack &rarr; dramatic silence &rarr; close-up inspection.",
          onScreenText: "15-Foot Concrete Drop Test 🏢💥",
          voiceoverScript: "Most plastic desk organizers shatter into 20 pieces. Let's see what happens to aerospace aluminum with neodymium latching.",
          cta: "\"Drop-tested for real life. Available in the yellow basket!\"",
          caption: "Don't try this with cheap Amazon plastic organizers 💀 #droptest #satisfying #edctray",
          sceneSequence: [
            { time: "0:00 - 0:03", action: "Balcony drop in slow motion.", text: "15ft Concrete Drop 🏢💥" },
            { time: "0:03 - 0:14", action: "High impact landing on concrete.", text: "Impact Moment" },
            { time: "0:14 - 0:25", action: "Creator runs down stairs and inspects: zero scratches.", text: "Aerospace Durability" },
            { time: "0:25 - 0:32", action: "Items still magnetically attached.", text: "Magnetic Lock Held" },
            { time: "0:32 - 0:35", action: "Yellow cart anchor.", text: "Yellow Basket 👇" }
          ]
        }
      }
    },
    {
      day: 4,
      pillar: "Lifestyle & POV Relatability",
      pillarCode: "p4",
      ratio: "70% Value",
      ratioClass: "ratio-value",
      conceptTitle: "POV: The 8:55 AM Workplace Panic",
      targetViewer: "Office workers, students, remote employees",
      archetype: "Relatable Frustrations",
      duration: "30 seconds",
      shopPlacement: "ApexGrip Magnetic Tray (Incidental Tool)",
      keywords: ["relatable workplace", "work from home humor", "morning panic", "funny tiktok"],
      reasonItWorks: "Pure empathy and comedic resonance. Relatable morning scramble drives massive shares to friends and group chats.",
      hookVariants: {
        A: {
          variantName: "Variant A: Relatable Morning Chaos Hook",
          openingHook: "\"POV: Your 9:00 AM meeting starts in 5 minutes and your charger evaporated.\"",
          first3sVisual: "Creator staring wide-eyed at clock at 8:55 AM, frantically flipping couch cushions.",
          audioFoley: "Ticking alarm clock &rarr; comedic sitcom tension music &rarr; sudden peaceful sigh.",
          onScreenText: "The 8:55 AM Panic 🏃💨",
          voiceoverScript: "Why is it that whenever you have 3 minutes to leave the house, your essentials suddenly enter another dimension? Here is how to break the curse forever.",
          cta: "\"Tell me in the comments: are you the organized friend or the chaotic friend?\"",
          caption: "Every. Single. Morning. 💀 Tag a friend who is always looking for their keys. #relatable #workfromhome #morningroutine #pov",
          sceneSequence: [
            { time: "0:00 - 0:03", action: "Panic face at 8:55 AM clock.", text: "8:55 AM Meeting 💀" },
            { time: "0:03 - 0:14", action: "Comedic fast-forward montage of tearing apartment apart.", text: "Where Is The Charger?!" },
            { time: "0:14 - 0:22", action: "Snapping tray into bag in 1 second flat.", text: "1-Second Grab & Go" },
            { time: "0:22 - 0:27", action: "Sitting down at desk with coffee at 8:59 AM with calm smile.", text: "8:59 AM Serenity ☕" },
            { time: "0:27 - 0:30", action: "Pinned comment discussion prompt.", text: "Are you organized or chaotic? 👇" }
          ]
        },
        B: {
          variantName: "Variant B: Couple / Roommate Conflict Hook",
          openingHook: "\"My roommate stole my charger again... so I did this.\"",
          first3sVisual: "Roommate caught red-handed unplugging cable, looking shocked at camera.",
          audioFoley: "Caught sound effect &rarr; playful dramatic music.",
          onScreenText: "The Roommate Charger Thief 🔌🕵️",
          voiceoverScript: "When your charging cables have magnetic personalized docks, nobody can 'accidentally' borrow your cord again.",
          cta: "\"Protect your cables in the yellow basket below!\"",
          caption: "Roommates beware 😤 #roommatelife #relatablehumor #techproblems",
          sceneSequence: [
            { time: "0:00 - 0:03", action: "Roommate freezing with hand on charger.", text: "Caught Red Handed 📸" },
            { time: "0:03 - 0:12", action: "Magnetic dock locking cables into place.", text: "Personalized Magnetic Dock" },
            { time: "0:12 - 0:22", action: "Roommate unable to pull cable without unlocking.", text: "Anti-Theft Alignment" },
            { time: "0:22 - 0:30", action: "Yellow basket tag.", text: "Yellow Cart Below 👇" }
          ]
        },
        C: {
          variantName: "Variant C: Packing For A Flight In 60 Seconds Hook",
          openingHook: "\"My Uber to the airport is 4 minutes away and my bag is empty.\"",
          first3sVisual: "Uber app notification 'Driver arriving in 4 min' flashing on phone screen.",
          audioFoley: "Uber ping chime &rarr; fast energetic sprint soundtrack.",
          onScreenText: "4 Minutes to Airport ✈️🏃",
          voiceoverScript: "When your tech gear is already grouped in an ApexGrip tray, packing takes 10 seconds. Drop tray in bag, laptop in sleeve, out the door.",
          cta: "\"Travelers grab yours in the yellow cart before your next flight!\"",
          caption: "Airport stress cured forever ✈️✨ #travelhack #edcpack #minimalisttravel",
          sceneSequence: [
            { time: "0:00 - 0:03", action: "Uber arriving banner and empty backpack.", text: "Uber Arriving in 4 Min 🚗" },
            { time: "0:03 - 0:14", action: "1-second drop of tray + passport into bag.", text: "10-Second Pack" },
            { time: "0:14 - 0:24", action: "Zipping bag and walking out front door.", text: "Zero Items Forgotten" },
            { time: "0:24 - 0:30", action: "Yellow cart CTA.", text: "Yellow Cart Link 👇" }
          ]
        }
      }
    },
    {
      day: 5,
      pillar: "Community Participation & Comment Lab",
      pillarCode: "p5",
      ratio: "20% Product-Integrated",
      ratioClass: "ratio-integrated",
      conceptTitle: "Replying to @Dan: The iPad Shake Test",
      targetViewer: "Skeptics, active commenters, tech buyers",
      archetype: "Skeptic Comment Debunk",
      duration: "26 seconds",
      shopPlacement: "ApexGrip Magnetic Tray (Hero SKU)",
      keywords: ["reply to comment", "dan comment", "magnet test", "tiktok shop review"],
      reasonItWorks: "Direct video replies to skeptic comments build immense authenticity and community engagement, proving real responsiveness.",
      hookVariants: {
        A: {
          variantName: "Variant A: Direct Skeptic Challenge Hook",
          openingHook: "\"Dan said this magnet is too weak to hold a heavy iPad...\"",
          first3sVisual: "Sticker of user comment on top left screen: \"Looks weak, bet it drops a tablet immediately.\" Creator stares at camera, holds iPad Pro.",
          audioFoley: "Text-to-speech comment audio &rarr; crisp snap &rarr; energetic bass drop.",
          onScreenText: "Replying to @Dan 🥊⚡",
          voiceoverScript: "Dan... let's find out. Here is a 1.5lb iPad Pro mounted directly to the magnetic base. Shaking it upside down like a cocktail shaker. Dan, you owe me an apology in the comments.",
          cta: "\"For anyone with heavy tablets, yellow cart link is live below!\"",
          caption: "Replying to @dan_official You owe me a coffee Dan 😂☕ #replytocomments #debunk #magnettest #ipadpro",
          sceneSequence: [
            { time: "0:00 - 0:03", action: "Comment sticker pop-up and creator holding tablet.", text: "Replying to @Dan 🥊" },
            { time: "0:03 - 0:12", action: "Snapping iPad Pro to magnetic base.", text: "1.5lb iPad Pro Test" },
            { time: "0:12 - 0:20", action: "Violently shaking setup upside down and swinging like racket.", text: "Violent Shake Test" },
            { time: "0:20 - 0:26", action: "iPad stays locked 100%. Yellow cart link.", text: "Yellow Basket Below 👇" }
          ]
        },
        B: {
          variantName: "Variant B: Comment Color Battle Hook",
          openingHook: "\"The comment section argued about this color for 3 days...\"",
          first3sVisual: "Side-by-side comparison of Obsidian Black vs Titanium Silver trays under studio lights.",
          audioFoley: "Comment whoosh sounds &rarr; upbeat voting track.",
          onScreenText: "Obsidian Black or Titanium Silver? 🖤🤍",
          voiceoverScript: "5,000 of you voted for Obsidian Black and 4,800 wanted Titanium Silver. Let's see them in a real desk setup.",
          cta: "\"Vote your favorite in the comments! Both restocked in yellow cart.\"",
          caption: "Which team are you: Team Black or Team Silver? 👇 #desksetup #colorway #edc #tech",
          sceneSequence: [
            { time: "0:00 - 0:03", action: "Side by side color battle under studio light.", text: "Black vs Silver Battle ⚔️" },
            { time: "0:03 - 0:12", action: "Black tray on dark walnut desk setup.", text: "Obsidian Stealth Mode" },
            { time: "0:12 - 0:20", action: "Silver tray on clean minimalist birch setup.", text: "Titanium Studio Clean" },
            { time: "0:20 - 0:26", action: "Yellow cart restock CTA.", text: "Yellow Cart Below 👇" }
          ]
        },
        C: {
          variantName: "Variant C: What Can You Fit In 1 Tray Hook",
          openingHook: "\"Replying to @TechLover: How much gear can actually fit in one tray?\"",
          first3sVisual: "Massive pile of 15 tech items: phone, watch, 3 cables, knife, keys, pen, SSD, earbuds.",
          audioFoley: "Fast sequential loading foley.",
          onScreenText: "Fitting 15 Items In 1 Tray 🤯",
          voiceoverScript: "Let's load 15 items in real-time. Everything snaps into parallel magnetic rows without spilling over.",
          cta: "\"Max capacity test passed! Yellow basket below.\"",
          caption: "Can your desk tray hold 15 items? 🤯 #organization #edcgear #tiktokshop",
          sceneSequence: [
            { time: "0:00 - 0:03", action: "Giant pile of 15 items beside empty tray.", text: "15 Items Challenge 🎒" },
            { time: "0:03 - 0:15", action: "Rapid 1-by-1 magnetic snapping of all 15 items.", text: "Modular Magnetic Fit" },
            { time: "0:15 - 0:22", action: "Lifting tray with 1 finger: everything solid.", text: "100% Solid Hold" },
            { time: "0:22 - 0:26", action: "Yellow cart tag.", text: "Yellow Basket 👇" }
          ]
        }
      }
    },
    {
      day: 6,
      pillar: "Design BTS & Engineering Journey",
      pillarCode: "p6",
      ratio: "10% Direct Commercial",
      ratioClass: "ratio-commercial",
      conceptTitle: "Why We Threw Away 14 Prototypes",
      targetViewer: "Founders, design geeks, quality-conscious buyers",
      archetype: "Behind The Closed Doors (BTS)",
      duration: "40 seconds",
      shopPlacement: "ApexGrip Magnetic Tray (TikTok Shop Launch Batch)",
      keywords: ["founder story", "product design", "cnc machining", "manufacturing bts"],
      reasonItWorks: "Honest transparency about failure builds immense trust and perceived craftsmanship, justifying the $34.99 premium price tag.",
      hookVariants: {
        A: {
          variantName: "Variant A: Prototype Failure Dump Hook",
          openingHook: "\"Why we threw away 14 prototypes before launching this.\"",
          first3sVisual: "Throwing 10 defective 3D-printed and plastic molded prototype trays into a recycling bin.",
          audioFoley: "Plastic clattering into bin &rarr; cinematic inspiring orchestral riser.",
          onScreenText: "14 Failed Prototypes 🛠️🗑️",
          voiceoverScript: "Prototype 4 was too weak. Prototype 9 was too heavy. Prototype 12 scratched cables. We spent 8 months testing different neodymium magnet ratings until we got the exact satisfying click sound. The final production batch just landed on TikTok Shop.",
          cta: "\"First batch of 500 units just went live in the yellow cart!\"",
          caption: "8 months of failures to get 1 click sound exactly right. 🛠️✨ #bts #founder #productdesign #tiktokshop",
          sceneSequence: [
            { time: "0:00 - 0:03", action: "Prototypes dumped into recycling bin.", text: "14 Failed Prototypes 🗑️" },
            { time: "0:03 - 0:15", action: "Macro CNC machining and magnet calibration footage.", text: "CNC Aerospace Aluminum" },
            { time: "0:15 - 0:28", action: "Extreme close up of final anodized surface and magnetic latch.", text: "The Perfect Click Sound 🎧" },
            { time: "0:28 - 0:35", action: "First production units boxed with VIP warranty card.", text: "Batch #1 Live" },
            { time: "0:35 - 0:40", action: "Yellow basket restock CTA.", text: "Yellow Cart Below 👇" }
          ]
        },
        B: {
          variantName: "Variant B: Manufacturer Secret Hook",
          openingHook: "\"The manufacturer said this magnetic latch was impossible to machine...\"",
          first3sVisual: "Close-up of laser precision CNC cutting metal sparks flying in factory.",
          audioFoley: "Factory sparks foley &rarr; dramatic reveal chords.",
          onScreenText: "\"It Can't Be Made\" 🏭⚡",
          voiceoverScript: "They told us to use cheap plastic glue like everyone else. We refused and engineered CNC aluminum with hidden magnetic channels.",
          cta: "\"Experience the precision in the yellow basket below!\"",
          caption: "Never settle for cheap plastic. 🛠️ #engineering #machining #quality #edc",
          sceneSequence: [
            { time: "0:00 - 0:03", action: "Factory sparks and blueprint overlay.", text: "Engineering Impossible 🏭" },
            { time: "0:03 - 0:16", action: "Precision milling of internal magnetic channels.", text: "Hidden Neodymium Rails" },
            { time: "0:16 - 0:28", action: "Final obsidian finish inspection.", text: "Zero Tolerances" },
            { time: "0:28 - 0:40", action: "Yellow basket tag.", text: "Yellow Basket 👇" }
          ]
        },
        C: {
          variantName: "Variant C: Packing Order #1 Milestone Hook",
          openingHook: "\"Packing our very first TikTok Shop order...\"",
          first3sVisual: "Creator placing serial #001 unit into sleek matte black box, placing handwritten thank you note.",
          audioFoley: "Tape dispenser sound &rarr; warm emotional lo-fi beat.",
          onScreenText: "Packing Order #001 📦✨",
          voiceoverScript: "From a sketch on a napkin to shipping our first unit to Marcus in Austin. Thank you for supporting an independent brand.",
          cta: "\"Join the Apex Club in the yellow basket below!\"",
          caption: "Still can't believe this is real. Thank you for the support! 📦❤️ #smallbusiness #tiktokshop #packaging #edc",
          sceneSequence: [
            { time: "0:00 - 0:03", action: "Serial #001 laser engraving reveal.", text: "Serial #001 📦✨" },
            { time: "0:03 - 0:15", action: "Placing VIP card and unboxing experience.", text: "VIP Pass Included" },
            { time: "0:15 - 0:28", action: "Applying shipping label with care.", text: "Shipping to Austin, TX" },
            { time: "0:28 - 0:40", action: "Yellow cart anchor.", text: "Yellow Cart Below 👇" }
          ]
        }
      }
    },
    // Days 7 to 30 Pipeline Summaries
    { day: 7, pillar: "Transformation & Resets", pillarCode: "p1", ratio: "70% Value", ratioClass: "ratio-value", conceptTitle: "The 3-Second Junk Drawer Rescue", targetViewer: "Home organizers, minimalists", archetype: "Unexpected Results", duration: "28s", shopPlacement: "ApexGrip Tray", keywords: ["junk drawer", "drawer reset", "edc tray"], reasonItWorks: "High gratification transformation of universal messy drawer." },
    { day: 8, pillar: "Education & Hacks", pillarCode: "p2", ratio: "70% Value", ratioClass: "ratio-value", conceptTitle: "The 80/20 Desk Setup Rule", targetViewer: "Desk setup creators, hybrid workers", archetype: "Three Things I Wish I Knew", duration: "36s", shopPlacement: "MagLock Clips", keywords: ["desk ergonomics", "8020 rule", "minimalist desk"], reasonItWorks: "Framework-based productivity education." },
    { day: 9, pillar: "Experiments & Tests", pillarCode: "p3", ratio: "20% Integrated", ratioClass: "ratio-integrated", conceptTitle: "Cocktail Shaker Magnetic G-Force Test", targetViewer: "Skeptics, EDC enthusiasts", archetype: "Extreme Stress-Test", duration: "25s", shopPlacement: "ApexGrip Tray", keywords: ["gforce test", "magnet power", "shake test"], reasonItWorks: "Visceral physical demonstration of magnetic strength." },
    { day: 10, pillar: "Lifestyle & Relatability", pillarCode: "p4", ratio: "70% Value", ratioClass: "ratio-value", conceptTitle: "When You Drop Your Bag In Front Of Everyone", targetViewer: "Students, commuters", archetype: "Relatable Frustrations", duration: "28s", shopPlacement: "ApexGrip Tray", keywords: ["bag drop", "relatable comedy", "college humor"], reasonItWorks: "Humorous embarrassment cured by locked EDC gear." },
    { day: 11, pillar: "Community & Comment Lab", pillarCode: "p5", ratio: "20% Integrated", ratioClass: "ratio-integrated", conceptTitle: "Replying to @Sarah: Does It Scratch Leather Bags?", targetViewer: "Leather bag owners, luxury EDC buyers", archetype: "Skeptic Debunk", duration: "32s", shopPlacement: "ApexShield Sleeve", keywords: ["leather bag test", "apexshield", "scratch test"], reasonItWorks: "Directly overcomes purchase objection for premium buyers." },
    { day: 12, pillar: "Design & BTS", pillarCode: "p6", ratio: "10% Commercial", ratioClass: "ratio-commercial", conceptTitle: "How We Achieve The Anodized Matte Black Finish", targetViewer: "Aesthetic geeks, tech collectors", archetype: "Behind The Closed Doors", duration: "35s", shopPlacement: "ApexGrip Tray", keywords: ["anodizing", "matte black", "edc bts"], reasonItWorks: "High tactile appeal and perceived luxury value." },
    { day: 13, pillar: "Transformation & Resets", pillarCode: "p1", ratio: "70% Value", ratioClass: "ratio-value", conceptTitle: "The Mobile Workstation: Coffee Shop in 10s", targetViewer: "Digital nomads, laptop workers", archetype: "Satisfying Sensory ASMR", duration: "30s", shopPlacement: "ApexGrip + Sleeve Bundle", keywords: ["digital nomad", "coffeeshop work", "portable desk"], reasonItWorks: "Aspirational remote lifestyle fantasy." },
    { day: 14, pillar: "Education & Hacks", pillarCode: "p2", ratio: "70% Value", ratioClass: "ratio-value", conceptTitle: "Stop Packing Keys With Your Phone Screen", targetViewer: "Smartphone owners, commuters", archetype: "Contrarian Statements", duration: "29s", shopPlacement: "ApexGrip Tray", keywords: ["screen protector", "key scratches", "phone safety"], reasonItWorks: "Prevents immediate $200 screen replacement fear." },
    { day: 15, pillar: "Experiments & Tests", pillarCode: "p3", ratio: "20% Integrated", ratioClass: "ratio-integrated", conceptTitle: "Can Neodymium Magnets Hold Through a Winter Coat?", targetViewer: "Winter commuters, travelers", archetype: "Extreme Stress-Test", duration: "24s", shopPlacement: "ApexGrip Tray", keywords: ["magnet thickness", "winter coat", "edc test"], reasonItWorks: "Surprising magnetic physics demonstration." },
    { day: 16, pillar: "Lifestyle & Relatability", pillarCode: "p4", ratio: "70% Value", ratioClass: "ratio-value", conceptTitle: "The Scent of a New Tech Delivery", targetViewer: "Unboxing lovers, tech gifters", archetype: "Satisfying Sensory ASMR", duration: "32s", shopPlacement: "ApexGrip Tray", keywords: ["unboxing asmr", "new tech smell", "edc unboxing"], reasonItWorks: "Sensory dopamine trigger for impulsive shoppers." },
    { day: 17, pillar: "Community & Comment Lab", pillarCode: "p5", ratio: "20% Integrated", ratioClass: "ratio-integrated", conceptTitle: "Replying to @TechBro: Airport Security TSA Test", targetViewer: "Frequent flyers, business travelers", archetype: "Skeptic Debunk", duration: "34s", shopPlacement: "ApexGrip Tray", keywords: ["tsa approved", "airport security", "travel edc"], reasonItWorks: "Validates travel compliance for commuters." },
    { day: 18, pillar: "Design & BTS", pillarCode: "p6", ratio: "10% Commercial", ratioClass: "ratio-commercial", conceptTitle: "Restock Alert: 400 Units Packaged for TikTok Shop", targetViewer: "High-intent buyers waiting on restock", archetype: "Secret TikTok Shop", duration: "26s", shopPlacement: "ApexGrip Tray", keywords: ["restock alert", "tiktok shop find", "edc restock"], reasonItWorks: "Urgency and proof of high demand." },
    { day: 19, pillar: "Transformation & Resets", pillarCode: "p1", ratio: "70% Value", ratioClass: "ratio-value", conceptTitle: "Nightstand Reset: From Nightmare to Zen", targetViewer: "Night owls, bedside clutter owners", archetype: "Satisfying Sensory ASMR", duration: "31s", shopPlacement: "ApexGrip + MagLock Bundle", keywords: ["nightstand reset", "bedside organization", "zen desk"], reasonItWorks: "Relieves bedside chaos and sleep anxiety." },
    { day: 20, pillar: "Education & Hacks", pillarCode: "p2", ratio: "70% Value", ratioClass: "ratio-value", conceptTitle: "How to Keep Heavy Laptop Chargers from Falling", targetViewer: "MacBook & Dell laptop owners", archetype: "Three Things I Wish I Knew", duration: "33s", shopPlacement: "MagLock Clips", keywords: ["macbook charger", "heavy brick", "cable drop"], reasonItWorks: "Solves annoying gravity drop off table edge." },
    { day: 21, pillar: "Experiments & Tests", pillarCode: "p3", ratio: "20% Integrated", ratioClass: "ratio-integrated", conceptTitle: "Bicycle Handlebar Vibration Shake Test", targetViewer: "Cyclists, active commuters", archetype: "Extreme Stress-Test", duration: "27s", shopPlacement: "ApexGrip Tray", keywords: ["bike vibration", "cycling edc", "magnet hold"], reasonItWorks: "High vibration testing demonstrates stability." },
    { day: 22, pillar: "Lifestyle & Relatability", pillarCode: "p4", ratio: "70% Value", ratioClass: "ratio-value", conceptTitle: "When You Finally Find a Product That Doesn't Suck", targetViewer: "Jaded consumers tired of dropshipping junk", archetype: "Unexpected Results", duration: "30s", shopPlacement: "ApexGrip Tray", keywords: ["honest review", "anti dropship", "real quality"], reasonItWorks: "Positions brand against cheap Amazon dropshipping." },
    { day: 23, pillar: "Community & Comment Lab", pillarCode: "p5", ratio: "20% Integrated", ratioClass: "ratio-integrated", conceptTitle: "Community Vote: What Accessory Should We Build Next?", targetViewer: "Brand advocates, loyal followers", archetype: "Behind The Closed Doors", duration: "35s", shopPlacement: "ApexGrip Ecosystem", keywords: ["community vote", "product design", "what next"], reasonItWorks: "High algorithmic engagement and co-creation." },
    { day: 24, pillar: "Design & BTS", pillarCode: "p6", ratio: "10% Commercial", ratioClass: "ratio-commercial", conceptTitle: "Inside Our VIP Warranty Card Activation", targetViewer: "New buyers, warranty seekers", archetype: "Behind The Closed Doors", duration: "29s", shopPlacement: "ApexGrip Tray", keywords: ["lifetime warranty", "vip card", "unboxing"], reasonItWorks: "De-risks purchase with lifetime warranty promise." },
    { day: 25, pillar: "Transformation & Resets", pillarCode: "p1", ratio: "70% Value", ratioClass: "ratio-value", conceptTitle: "The Car Center Console 60s Transformation", targetViewer: "Drivers, road trippers", archetype: "Unexpected Results", duration: "30s", shopPlacement: "ApexGrip Tray", keywords: ["car console", "car organization", "clean car"], reasonItWorks: "Solves messy glovebox and center console clutter." },
    { day: 26, pillar: "Education & Hacks", pillarCode: "p2", ratio: "70% Value", ratioClass: "ratio-value", conceptTitle: "The One Mistake That Drains Your Tech Bag", targetViewer: "Tech commuters, students", archetype: "Contrarian Statements", duration: "34s", shopPlacement: "ApexGrip Tray", keywords: ["tech bag tips", "bag weight", "commuter hack"], reasonItWorks: "Weight distribution science for daily backpack." },
    { day: 27, pillar: "Experiments & Tests", pillarCode: "p3", ratio: "20% Integrated", ratioClass: "ratio-integrated", conceptTitle: "Submerging ApexShield Sleeve in Water: Dry Test", targetViewer: "Outdoor travelers, rainy day commuters", archetype: "Extreme Stress-Test", duration: "28s", shopPlacement: "ApexShield Sleeve", keywords: ["waterproof test", "submersion", "sleeve test"], reasonItWorks: "Visual proof of weatherproofing." },
    { day: 28, pillar: "Lifestyle & Relatability", pillarCode: "p4", ratio: "70% Value", ratioClass: "ratio-value", conceptTitle: "Sunday 9 PM vs Monday 8 AM Mood", targetViewer: "Working millennials and Gen Z", archetype: "Relatable Frustrations", duration: "25s", shopPlacement: "ApexGrip Tray", keywords: ["sunday scaries", "monday mood", "relatable"], reasonItWorks: "Taps into 'Sunday scaries' cultural sentiment." },
    { day: 29, pillar: "Community & Comment Lab", pillarCode: "p5", ratio: "20% Integrated", ratioClass: "ratio-integrated", conceptTitle: "Giving Away 5 Free Trays to the Funniest Messy Desk", targetViewer: "Followers, active commenters", archetype: "Community Participation", duration: "38s", shopPlacement: "ApexGrip Tray", keywords: ["giveaway", "messy desk", "contest"], reasonItWorks: "Massive UGC comment flood and profile shares." },
    { day: 30, pillar: "Design & BTS", pillarCode: "p6", ratio: "10% Commercial", ratioClass: "ratio-commercial", conceptTitle: "Month 1 Milestone: 5,000 Everyday Carries Upgraded", targetViewer: "Social proof seekers, brand believers", archetype: "Behind The Closed Doors", duration: "36s", shopPlacement: "ApexGrip Tray (Celebration Drop)", keywords: ["milestone", "thank you", "community celebration"], reasonItWorks: "Bandwagon social proof and community celebration voucher." }
  ],

  // ========================================================================
  // AGENT 4: Commercial Funnel Telemetry & Optimization Data
  // ========================================================================
  commercialFunnelData: {
    summary: {
      totalViews: "850,000",
      productClicks: "28,500",
      inVideoCTR: "3.35%",
      orders: "1,140",
      blendedCVR: "4.00%",
      totalGMV: "$39,888.60",
      aov: "$34.99",
      rpm: "$46.92", // Revenue per 1,000 views
      netProfit: "$11,248.50",
      netMarginPct: "28.2%",
      refundRate: "0.88%"
    },
    stages: [
      {
        id: "s1_views",
        num: "01",
        name: "Video Views",
        metric: "850,000 Views",
        subMetric: "68.4% 2s Retention Rate",
        benchmark: "> 65% Retention",
        dropOff: "0% (Base Top of Funnel)",
        status: "Healthy",
        statusClass: "text-green",
        desc: "Total organic and creator impressions stopping scrolls within 3 seconds."
      },
      {
        id: "s2_profile",
        num: "02",
        name: "Profile Visits",
        metric: "21,250 Visits",
        subMetric: "2.50% Profile Visit Rate",
        benchmark: "1.5% - 3.0%",
        dropOff: "97.5% Drop-off (Normal in-feed consumption)",
        status: "Healthy",
        statusClass: "text-green",
        desc: "Shoppers exploring account bio, pinned unboxings, and 'Reset Club' playlists."
      },
      {
        id: "s3_clicks",
        num: "03",
        name: "Product Clicks (Yellow Cart)",
        metric: "28,500 Clicks",
        subMetric: "3.35% In-Video CTR",
        benchmark: "2.0% - 4.5%",
        dropOff: "96.65% (In-video non-clickers)",
        status: "Healthy",
        statusClass: "text-green",
        desc: "High-intent taps on in-video yellow cart anchors and profile showcase listings."
      },
      {
        id: "s4_atc",
        num: "04",
        name: "Add to Cart (ATC)",
        metric: "6,840 Adds",
        subMetric: "24.0% ATC Rate from Click",
        benchmark: "18% - 28%",
        dropOff: "76.0% Product Page Bounces",
        status: "Healthy",
        statusClass: "text-green",
        desc: "Shoppers selecting SKU colorway or 2-pack duo bundle on product showcase page."
      },
      {
        id: "s5_checkout",
        num: "05",
        name: "Initiated Checkout",
        metric: "5,130 Checkouts",
        subMetric: "75.0% Cart-to-Checkout",
        benchmark: "65% - 80%",
        dropOff: "25.0% Abandoned Carts",
        status: "Healthy",
        statusClass: "text-green",
        desc: "Shoppers entering TikTok Shop 1-click in-app payment and address verification."
      },
      {
        id: "s6_purchase",
        num: "06",
        name: "Completed Purchase",
        metric: "1,140 Orders ($39.9K GMV)",
        subMetric: "4.00% Click-to-Purchase CVR",
        benchmark: "3.0% - 5.5%",
        dropOff: "77.8% Checkout drop (Payment hesitation)",
        status: "Strong CVR",
        statusClass: "text-green",
        desc: "Confirmed orders with immediate automated 24h domestic warehouse dispatch."
      },
      {
        id: "s7_repeat",
        num: "07",
        name: "Repeat Purchase (60 Days)",
        metric: "256 Repeat Orders",
        subMetric: "22.5% 60-Day Repeat LTV",
        benchmark: "20% - 35%",
        dropOff: "77.5% Single-purchase customers",
        status: "Compounding LTV",
        statusClass: "text-cyan",
        desc: "Customers purchasing travel sleeves, cable anchor add-ons, or gift bundles via VIP unboxing pass."
      }
    ]
  },

  // 5 Interactive Bottleneck Diagnostic Protocols
  funnelDiagnostics: {
    high_views_low_clicks: {
      id: "high_views_low_clicks",
      title: "1. HIGH VIEWS + LOW CLICKS",
      subtitle: "Product Positioning or CTA Failure",
      severity: "Warning (Wasted Attention)",
      badgeClass: "badge-glow",
      symptom: "Views > 100,000, but Product CTR < 0.8% and Yellow Cart clicks are near zero.",
      rootCause: "Content succeeds as a meme or entertainment, but fails to connect the story tension to the physical product solution. Viewers are unaware the item is available in the bottom-left yellow basket.",
      remediationPlan: [
        "Deploy 2-second visual CTA: Show creator picking up the exact item and tapping the yellow cart icon on screen.",
        "Add high-contrast on-screen kinetic text overlay in second 32-38: 'Available in yellow basket 👇'.",
        "Pin high-urgency comment with flash launch discount: 'Everyone asking where this tray is from—it is linked in the yellow cart with a 15% voucher!'",
        "Task BrandCraft with creating a 15s Reply-with-Video demonstrating exactly where to click."
      ],
      agentAction: "ShopGrowth triggers immediate CTA redesign directive to BrandCraft and creator brief update."
    },
    high_clicks_low_sales: {
      id: "high_clicks_low_sales",
      title: "2. HIGH CLICKS + LOW SALES",
      subtitle: "Offer, Pricing, Trust, or Showcase Friction",
      severity: "High Commercial Risk",
      badgeClass: "score-tier-b",
      symptom: "In-video CTR is strong (>3.5%), but conversion rate is depressed (<1.2%) with high product page bounce rate.",
      rootCause: "Shoppers click with high intent, but encounter purchase friction: single-image listing without infographics, perceived high price without bundle savings, slow shipping estimates, or lack of verified customer reviews.",
      remediationPlan: [
        "Revamp product page into 7-slide conversion carousel with dimension blueprints, durability badges, and unboxing shots.",
        "Introduce 1-click bundle discount (e.g. 'Buy 2-Pack Save 21%') to lower price-per-unit barrier.",
        "Display bold trust badges: 'Dispatches in <24h from US Warehouse' and 'Lifetime Warranty Included'.",
        "Pin 3 top photo/video customer reviews at the top of the TikTok Shop showcase."
      ],
      agentAction: "ShopGrowth executes showcase merchandising update and launches 2-pack bundle promotion."
    },
    low_retention: {
      id: "low_retention",
      title: "3. LOW RETENTION SPIKE",
      subtitle: "Creative Opening & Hook Drag",
      severity: "Creative Failure",
      badgeClass: "score-tier-reject",
      symptom: "Over 60% of viewers swipe away before second 2.5; Average Watch Time < 6 seconds.",
      rootCause: "Generic, slow opening violating the Anti-Generic Hook Rule ('Hi guys...', 'Today we are looking at...'). Lack of visual movement or audio hook in frame 0.",
      remediationPlan: [
        "Eliminate talking head intro; replace with immediate visual pattern interrupt (reverse bag dump, car tire test).",
        "Deploy Hook Variant B (Speed Challenge) or Hook Variant C (Pure ASMR Foley).",
        "Tighten editing pace with 1.2-second rapid macro cuts synchronized to crisp foley snaps.",
        "Add urgent kinetic text hook in upper-third screen position."
      ],
      agentAction: "ShopGrowth rejects slow creatives and assigns Hook Variant re-cuts to CreativeCraft."
    },
    high_returns: {
      id: "high_returns",
      title: "4. HIGH SALES + HIGH RETURNS",
      subtitle: "Expectation Mismatch or Quality Defect",
      severity: "Shop Health Risk (ODR SLA)",
      badgeClass: "score-tier-reject",
      symptom: "Strong volume of sales, but refund/return rate spikes above 3.5%, endangering TikTok Shop Seller SLA.",
      rootCause: "Video demonstration exaggerated product specs (e.g. holding incompatible cable sizes) or unboxing lacked clear tactile quick-start instructions.",
      remediationPlan: [
        "Update product page Slide 3 with explicit cable diameter sizing chart (2.5mm to 6.5mm).",
        "Insert a bold quick-start troubleshooting card inside every VIP unboxing box.",
        "Audit factory QC tolerances for Neodymium magnet seating and anodized finish.",
        "Produce an immediate 20s educational video reply: 'How to fit thin cables perfectly in 1 second'."
      ],
      agentAction: "ShopGrowth alerts RetentionLoop to update unboxing inserts and instructs factory QC audit."
    },
    low_followers: {
      id: "low_followers",
      title: "5. HIGH ENGAGEMENT + LOW FOLLOWS",
      subtitle: "Brand & Channel Positioning Disconnect",
      severity: "Audience Stagnation",
      badgeClass: "score-tier-a",
      symptom: "Videos generate hundreds of thousands of views and saves, but profile follow conversion remains under 0.2%.",
      rootCause: "Content is consumed as an anonymous one-off hack rather than an episode inside an authoritative, aspirational lifestyle community.",
      remediationPlan: [
        "Brand all future reset videos as official parts of 'The Sunday Night Reset Club' series.",
        "Create profile playlists: 'Desk Transformations ⚡', 'Cable Care 101', 'Stress Tests'.",
        "Add consistent outro audio audio/visual sonic logo.",
        "End with value-seeking follow CTA: 'Follow for weekly 30-second workspace resets'."
      ],
      agentAction: "ShopGrowth collaborates with BrandCraft to anchor episodic series playlists."
    }
  },

  // Full Creator & Affiliate Performance Ledger
  creatorPerformanceLedger: [
    {
      id: "cr_alex",
      name: "Alex Rivera",
      handle: "@alex_tech_setups",
      avatar: "AR",
      type: "Micro Creator (10K–100K)",
      typeCode: "micro",
      tier: "Tier 3 (VIP 25%)",
      tierCode: "vip",
      followers: "148.5K",
      niche: "Desk Setups & Minimalist Tech",
      videosProduced: 4,
      views: 320500,
      clicks: 12820,
      ctr: "4.00%",
      orders: 482,
      cvr: "3.76%",
      gmv: 16865.18,
      commissionPaid: 4216.30,
      netProfit: 5420.45,
      rpc: "$4,216.30 GMV/Post",
      sparkCode: "SPARK-8829-ACTIVE",
      status: "Scale Investment",
      statusClass: "status-scale",
      verdict: "Top revenue driver. Scale $150/day Spark Ad budget on best UGC post. Send prototype supporting SKUs.",
      pitchTemplate: "vip_booster"
    },
    {
      id: "cr_sarah",
      name: "Sarah Chen",
      handle: "@minimalist_sarah",
      avatar: "SC",
      type: "UGC Creator Pro",
      typeCode: "ugc",
      tier: "Tier 2 (Standard 20%)",
      tierCode: "standard",
      followers: "89.2K",
      niche: "CleanTok & Aesthetic Living",
      videosProduced: 3,
      views: 184200,
      clicks: 7368,
      ctr: "4.00%",
      orders: 268,
      cvr: "3.64%",
      gmv: 9377.32,
      commissionPaid: 1875.46,
      netProfit: 3140.12,
      rpc: "$3,125.77 GMV/Post",
      sparkCode: "SPARK-4412-APPROVED",
      status: "Scale Investment",
      statusClass: "status-scale",
      verdict: "High aesthetic production value. High conversion on ASMR resets. Promote to Tier 3 VIP.",
      pitchTemplate: "vip_booster"
    },
    {
      id: "cr_dan",
      name: "Dan Miller",
      handle: "@edc_dan_daily",
      avatar: "DM",
      type: "Niche Authority",
      typeCode: "authority",
      tier: "Tier 2 (Standard 20%)",
      tierCode: "standard",
      followers: "54.1K",
      niche: "Everyday Carry & Tactical Gear",
      videosProduced: 2,
      views: 95000,
      clicks: 4085,
      ctr: "4.30%",
      orders: 162,
      cvr: "3.97%",
      gmv: 5668.38,
      commissionPaid: 1133.68,
      netProfit: 1920.80,
      rpc: "$2,834.19 GMV/Post",
      sparkCode: "SPARK-1192-PENDING",
      status: "Maintain & Nurture",
      statusClass: "status-maintain",
      verdict: "Exceptional audience trust. Skeptic challenge test drove high CVR. Send ApexShield sleeve sample.",
      pitchTemplate: "sample_followup"
    },
    {
      id: "cr_marcus",
      name: "Marcus Vance",
      handle: "@desk_culture_mv",
      avatar: "MV",
      type: "Micro Creator (10K–100K)",
      typeCode: "micro",
      tier: "Tier 2 (Standard 20%)",
      tierCode: "standard",
      followers: "31.4K",
      niche: "Hybrid Work & Organization",
      videosProduced: 2,
      views: 52400,
      clicks: 1834,
      ctr: "3.50%",
      orders: 58,
      cvr: "3.16%",
      gmv: 2029.42,
      commissionPaid: 405.88,
      netProfit: 680.15,
      rpc: "$1,014.71 GMV/Post",
      sparkCode: "N/A",
      status: "Coach on Hooks",
      statusClass: "status-coach",
      verdict: "Good creator fit. Provide Hook Variant A (Sunday Reset) to push views past 50K per video.",
      pitchTemplate: "sample_followup"
    },
    {
      id: "cr_clara",
      name: "Clara Kim",
      handle: "@routine_clara",
      avatar: "CK",
      type: "Lifestyle Vlogger",
      typeCode: "lifestyle",
      tier: "Tier 1 (Open 15%)",
      tierCode: "open",
      followers: "76.0K",
      niche: "Morning Routines & Coffee",
      videosProduced: 1,
      views: 112000,
      clicks: 980,
      ctr: "0.88%",
      orders: 24,
      cvr: "2.45%",
      gmv: 839.76,
      commissionPaid: 125.96,
      netProfit: 240.20,
      rpc: "$839.76 GMV/Post",
      sparkCode: "N/A",
      status: "Coach on Yellow Cart",
      statusClass: "status-coach",
      verdict: "High views but low CTR (0.88%). Coach creator to add on-screen yellow cart text overlay.",
      pitchTemplate: "initial_dm"
    },
    {
      id: "cr_sam",
      name: "Sam Brody",
      handle: "@viral_gadget_sam",
      avatar: "SB",
      type: "TikTok Shop Affiliate",
      typeCode: "affiliate",
      tier: "Tier 1 (Open 15%)",
      tierCode: "open",
      followers: "210.0K",
      niche: "Viral Gadgets & Memes",
      videosProduced: 2,
      views: 240000,
      clicks: 420,
      ctr: "0.18%",
      orders: 8,
      cvr: "1.90%",
      gmv: 279.92,
      commissionPaid: 41.98,
      netProfit: -45.20,
      rpc: "$139.96 GMV/Post",
      sparkCode: "N/A",
      status: "Trim & Discontinue",
      statusClass: "status-trim",
      verdict: "Vanity engagement without commercial intent. Negative ROI after sample cost. Cease sample seeding.",
      pitchTemplate: "initial_dm"
    },
    {
      id: "cr_inactive",
      name: "Liam O'Connor",
      handle: "@tech_unboxing_pro",
      avatar: "LO",
      type: "UGC Creator Pro",
      typeCode: "ugc",
      tier: "Tier 1 (Open 15%)",
      tierCode: "open",
      followers: "42.0K",
      niche: "Tech Unboxings",
      videosProduced: 0,
      views: 0,
      clicks: 0,
      ctr: "0.00%",
      orders: 0,
      cvr: "0.00%",
      gmv: 0.00,
      commissionPaid: 0.00,
      netProfit: -25.00,
      rpc: "$0.00",
      sparkCode: "N/A",
      status: "Sample Follow-Up Due",
      statusClass: "status-trim",
      verdict: "Sample delivered 12 days ago with zero posts. Send automated polite follow-up or flag account.",
      pitchTemplate: "sample_followup"
    }
  ],

  // Creator Outreach Pitch Scripts
  creatorOutreachTemplates: {
    initial_dm: {
      name: "1. High-Converting Micro-Creator Initial DM",
      subject: "Hey [Name]! Love your [Niche] setups ✨",
      body: `Hey [Name]! 👋

Saw your recent video about [mention recent video detail]—the lighting and setup aesthetic was super clean!

We just launched the ApexGrip Magnetic EDC Tray on TikTok Shop (it organizes bag cables and daily gear in 2 seconds with satisfying magnetic ASMR snaps).

We'd love to send you a complimentary VIP box with zero posting obligations. If you genuinely like it and want to share it with your community, we also set up an exclusive 20% affiliate bounty on the in-video yellow cart.

Drop your shipping address below or tap 1-click sample request here: [Direct TikTok Shop Affiliate Link] 📦🚀

Best,
The ApexGrip Partnerships Team`
    },
    sample_followup: {
      name: "2. Sample Delivery & 3-Hook Creative Brief Follow-Up",
      subject: "Your ApexGrip VIP kit just landed! 📦✨",
      body: `Hey [Name]! 🎉

Tracking shows your ApexGrip VIP kit just landed at your door!

Inside you'll find your anodized magnetic tray, the silicone travel sleeve, and your VIP lifetime warranty card.

We put together 3 quick 1-page hook ideas that are converting crazy well on TikTok right now if you decide to film:
• Hook 1 (Relatable): "POV: You spend 10 minutes every morning searching for your cables..."
• Hook 2 (Stress-Test): Shaking the tray vigorously upside down to show the neodymium lock holding tools.
• Hook 3 (ASMR): Clean top-down 30-second Sunday reset with macro clicks.

Whenever you post, make sure to tag the product in the yellow basket so your 20% commission tracks automatically! Let us know if you need anything! ✨📦`
    },
    vip_booster: {
      name: "3. Top-Performer VIP Booster (25% Commission + Spark Ad Boost)",
      subject: "Upgraded to Tier 3 VIP Partner! 🏆 + Spark Ad Boost",
      body: `Hey [Name]! 🚀

Huge congratulations—your recent ApexGrip video just passed 85,000 views and generated over 140 orders! Your commission check is going to be massive.

Because you crushed it, we just upgraded your account to our **Tier 3 VIP Partner (25% Commission)**! 🏆

We'd love to put $500–$1,000 of our own ad budget behind your video via TikTok Spark Ads to boost your views into the millions (you earn 25% on every single ad sale too!).

Could you grab a quick 30-day Spark Ad Code from your TikTok video settings?
(Settings &rarr; Creator Tools &rarr; Ad Authorization &rarr; Generate Code)

Drop the code here and we’ll turn on the boost today! 💥📈`
    }
  },

  // ==========================================================================
  // AGENT 5: Performance, QA & Compliance Intelligence Engine Data
  // ==========================================================================
  agent5Data: {
    // 9 Pre-Publishing QA Checkpoints
    qaCheckpoints: [
      {
        id: "qa1",
        num: "01",
        title: "Supportable Product Claims",
        category: "Claims & Evidence",
        status: "pass",
        standard: "All performance, material, and durability claims must have verifiable testing or lab documentation.",
        redFlag: "Claiming 'indestructible', '100% waterproof' without IPX certification, or 'charges 10x faster'.",
        remediation: "Rephrase to demonstrable relative language: 'engineered with drop-resistant zinc alloy' or 'charges up to 2x faster than 5W bricks'.",
        passRule: "Lab stress test or empirical video proof documented in knowledge vault."
      },
      {
        id: "qa2",
        num: "02",
        title: "TikTok Policy & Ad Compliance",
        category: "Platform Safety",
        status: "pass",
        standard: "100% adherence to TikTok Community Guidelines and TikTok Shop Merchant Commerce Policies.",
        redFlag: "Dangerous acts, weapon-like objects, copyright music on commercial videos, or unauthorized trademarks.",
        remediation: "Strip non-commercial audio; switch to TikTok Commercial Audio Library (CAL); remove risky stunt visuals.",
        passRule: "Zero copyright audio triggers, zero prohibited adult or dangerous stunt content."
      },
      {
        id: "qa3",
        num: "03",
        title: "Zero Misleading Pricing",
        category: "Commercial Ethics",
        status: "pass",
        standard: "Strikethrough anchor pricing must reflect genuine MSRP; advertised discounts must match checkout total.",
        redFlag: "Displaying '$9.99' on video text when actual checkout price is '$29.99' or hiding mandatory shipping fees.",
        remediation: "Sync on-screen text price with active TikTok Shop promotion discount tag in real time.",
        passRule: "On-screen price exactly matches yellow basket SKU variant price."
      },
      {
        id: "qa4",
        num: "04",
        title: "Zero Misleading Before/After",
        category: "Visual Authenticity",
        status: "pass",
        standard: "Demonstrations must be continuous, unedited in key transformation frames, and free of deceptive filters.",
        redFlag: "Using beauty filters, artificial lighting shifts, or temporal distortion claiming instant results.",
        remediation: "Use split-screen time-lapses with continuous timecode or raw, un-retouched before/after footage.",
        passRule: "Uncut physical demonstration with constant ambient lighting."
      },
      {
        id: "qa5",
        num: "05",
        title: "Zero Prohibited / Medical Claims",
        category: "Regulatory Shield",
        status: "pass",
        standard: "Strictly zero medical, therapeutic, financial, or guaranteed psychological claims.",
        redFlag: "Words like 'cures arthritis', 'eliminates back pain', 'guaranteed passive income', or disease treatment.",
        remediation: "Immediate rejection. Reframe around ergonomic posture comfort, habit organization, or tactile satisfaction.",
        passRule: "Clean script scan containing zero FDA/FTC medical or financial buzzwords."
      },
      {
        id: "qa6",
        num: "06",
        title: "Accurate Product Specs & Accessories",
        category: "Product Truth",
        status: "pass",
        standard: "Colorways, dimensions, weights, and included accessories must exactly match what the customer receives in box.",
        redFlag: "Showing premium accessories in video that are sold separately without clear on-screen disclaimers.",
        remediation: "Add on-screen disclaimer 'Accessories shown sold separately' or show only exact retail SKU contents.",
        passRule: "Retail box unboxing matches 1:1 with video featured items."
      },
      {
        id: "qa7",
        num: "07",
        title: "Live Stock Availability Threshold",
        category: "Inventory Health",
        status: "pass",
        standard: "Live warehouse or FBT inventory must exceed minimum safety threshold (>= 100 units) before traffic push.",
        redFlag: "Promoting an SKU with <50 units in stock, causing immediate stockouts and late-dispatch penalties.",
        remediation: "Verify warehouse inventory balance >= 100 units (>= 500 if scheduled for Spark Ads boost).",
        passRule: "Warehouse WMS confirms 850 units allocated to TikTok Shop US/UK."
      },
      {
        id: "qa8",
        num: "08",
        title: "Active Links & Geo-Targeting",
        category: "Technical Anchor",
        status: "pass",
        standard: "Product URL and TikTok Shop showcase link must be live, active, and accessible in target regions.",
        redFlag: "Broken anchor link, region-restricted SKU, or 404 landing page.",
        remediation: "Test anchor link directly in TikTok App staging environment before post release.",
        passRule: "Product showcase anchor responds 200 OK across target zip codes."
      },
      {
        id: "qa9",
        num: "09",
        title: "Correct Yellow Basket Card Attachment",
        category: "Shop Tagging",
        status: "pass",
        standard: "Correct SKU card, current discount badge, and thumbnail must be attached to the video upload.",
        redFlag: "Attaching wrong colorway, wrong bundle tier, or forgetting to attach the yellow shopping basket.",
        remediation: "Re-verify TikTok Shop Product ID and ensure yellow shopping basket displays with correct title and price.",
        passRule: "Yellow basket tag verified attached to ApexGrip Space Gray Edition."
      }
    ],

    // Policy Compliance Scanner Dictionary (Keywords & Replacements)
    policyRules: [
      {
        pattern: "cures?|treats?|eliminates? pain|arthritis|carpal tunnel",
        category: "Medical Claim",
        risk: "CRITICAL",
        reason: "TikTok and FTC strictly prohibit unapproved medical/therapeutic claims.",
        replacement: "Engineered with ergonomic contours to support natural wrist alignment during long work sessions."
      },
      {
        pattern: "100% unbreakable|completely scratch-proof|never drops|military-grade|indestructible",
        category: "Absolute / Indestructible Claim",
        risk: "HIGH",
        reason: "Absolute superlatives without lab accreditation trigger false advertising penalties.",
        replacement: "Engineered with drop-resistant zinc alloy and high-grade neodymium magnets for secure daily grip."
      },
      {
        pattern: "make money passively|earn \\$\\d+|guaranteed (roi|income|revenue)",
        category: "Financial Guarantee",
        risk: "CRITICAL",
        reason: "Prohibited business opportunity / financial guarantee policy violation.",
        replacement: "Helps streamline desk workflows so you can focus on deep work and productive output."
      },
      {
        pattern: "only \\d+ left in the world|selling out in 5 minutes",
        category: "Fake Scarcity / Deceptive Urgency",
        risk: "MODERATE",
        reason: "Algorithmic penalty for deceptive countdown / fake stock timers.",
        replacement: "Batch 1 sold out quickly; Batch 2 is now shipping while current inventory lasts."
      },
      {
        pattern: "link in bio|check my bio link|go to my website",
        category: "Off-Platform Redirection",
        risk: "HIGH",
        reason: "TikTok suppresses videos redirecting away from native TikTok Shop yellow basket checkout.",
        replacement: "Tap the yellow basket in the bottom left corner to grab yours before restock ends."
      }
    ],

    // WIN / LEARN / KILL Dataset
    winLearnKill: {
      wins: [
        {
          id: "W01",
          videoId: "VID-001",
          title: "Sunday Night Desk Detox (Relatable Frustration)",
          product: "ApexGrip Magnetic EDC Tray",
          pillar: "Transformation & Resets",
          views: "485,000",
          retention3s: "69.4%",
          watchTime: "16.8s",
          ctr: "3.4%",
          orders: 520,
          revenue: "$15,594",
          rpm: "$32.15",
          whyItWon: "Visceral opening 1.5s visual dump of tangled wires followed by crisp magnetic ASMR snap. Solves acute desk chaos.",
          actionPlan: "1. Authorize $200/day Spark Ads scale. 2. Produce 3 spinoff variations for different desk styles. 3. Seed to 25 tech creators."
        },
        {
          id: "W02",
          videoId: "VID-003",
          title: "Cold Brew Vortex Stress-Test (Sonic Foam)",
          product: "PulseFlow Tumbler",
          pillar: "Experiments & ASMR",
          views: "890,000",
          retention3s: "64.2%",
          watchTime: "18.5s",
          ctr: "2.9%",
          orders: 740,
          revenue: "$25,892",
          rpm: "$29.09",
          whyItWon: "Mesmerizing cascading micro-foam visual in first 2 seconds; contrasts high-priced cafe coffee with instant home convenience.",
          actionPlan: "1. Scale Spark Ads to $350/day. 2. Launch 'Nitro Milk Battle' video series. 3. Introduce 2-pack bundle with 20% commission."
        },
        {
          id: "W03",
          videoId: "VID-004",
          title: "Will It Survive a 15ft Balcony Drop?",
          product: "ApexShield Armor Case",
          pillar: "Extreme Experiments",
          views: "640,000",
          retention3s: "74.5%",
          watchTime: "15.1s",
          ctr: "4.1%",
          orders: 615,
          revenue: "$15,368",
          rpm: "$24.01",
          whyItWon: "High tension hook with physical gravity test; unedited slow-mo impact frame proves real-world product durability.",
          actionPlan: "1. Whitelist video for creator Spark Ads. 2. Film secondary test dropping from moving skateboard. 3. Add bundle offer."
        }
      ],
      learns: [
        {
          id: "L01",
          videoId: "VID-006",
          title: "Cyberpunk Desk Setup Aesthetic Tour",
          product: "Cyber Clock Nixie Display",
          pillar: "Aesthetic Desk Setup",
          views: "145,000",
          retention3s: "48.2%",
          watchTime: "12.0s",
          ctr: "1.1%",
          orders: 32,
          revenue: "$2,559",
          rpm: "$17.65",
          hypothesis: "Strong visual interest but weak commercial CTA; viewers admired the vibe without realizing it was for sale on TikTok Shop.",
          actionPlan: "Re-edit video with yellow basket pointer overlay at 0:08 and add pinned comment: 'The glowing tube clock is linked in the cart!'"
        },
        {
          id: "L02",
          videoId: "VID-007",
          title: "3 Cable Management Mistakes You're Making",
          product: "ApexGrip Magnetic EDC Tray",
          pillar: "Education & Productivity",
          views: "195,000",
          retention3s: "58.4%",
          watchTime: "16.2s",
          ctr: "1.8%",
          orders: 110,
          revenue: "$3,298",
          rpm: "$16.91",
          hypothesis: "High educational value but slow transition into product showcase. Viewers dropped off before seeing the magnetic modular fix.",
          actionPlan: "Shave 6 seconds off Mistake #2, introduce the tray demonstration at second 8 instead of second 18."
        }
      ],
      kills: [
        {
          id: "K01",
          videoId: "VID-008",
          title: "Day in the Life of a Remote Founder",
          product: "PulseFlow Tumbler",
          pillar: "Lifestyle & Vlogs",
          views: "98,000",
          retention3s: "42.1%",
          watchTime: "13.4s",
          ctr: "0.8%",
          orders: 18,
          revenue: "$629",
          rpm: "$6.41",
          postMortem: "Vlog format lacked a rapid pattern interrupt; felt self-indulgent and slow-paced. Failed to communicate product value in first 5s.",
          actionPlan: "Retire generic 'Day in the Life' formats; replace with problem-first micro-stories centered on coffee friction."
        },
        {
          id: "K02",
          videoId: "VID-010",
          title: "Do You Want a Cleaner Desk Setup?",
          product: "Cyber Clock Nixie Display",
          pillar: "Direct Product Pitch",
          views: "82,000",
          retention3s: "36.5%",
          watchTime: "8.2s",
          ctr: "0.6%",
          orders: 8,
          revenue: "$639",
          rpm: "$7.79",
          postMortem: "Opening with a generic closed question ('Do you want...') caused instant scroll past. Violated Agent 3 Anti-Generic Hook Rule.",
          actionPlan: "Permanently ban direct question hooks. Enforce Contrarian or Curiosity Archetypes."
        }
      ]
    },

    // 5-Factor Root Cause Diagnostic Decision Matrix
    rootCauseMatrix: {
      bad_product: {
        name: "BAD PRODUCT",
        signals: "High Clicks (>3.5%) + Low CVR (<1.0%) + High Returns (>8%) + Negative 1-2 Star Reviews",
        symptoms: "Viewers are intrigued by video promise, but actual product fails in hand; complaints about build quality or flimsy materials.",
        immediateFix: "Halt all paid promotion immediately. Audit supplier manufacturing specs and initiate batch quality teardown.",
        prevention: "Enforce Agent 1 100-Point Scorecard: Require physical stress-testing sample before authorizing catalog entry."
      },
      bad_creative: {
        name: "BAD CREATIVE",
        signals: "Low 3s Retention (<40%) + Low Completion (<8%) + Steep Drop in First 2 Seconds",
        symptoms: "Viewers scroll past instantly. Opening hook is boring, audio is generic, or thumbnail lacks visual pattern interrupt.",
        immediateFix: "Do NOT kill the product. Re-shoot opening 3-second hook using Contrarian or Drop-Test archetype; accelerate VO pacing.",
        prevention: "Enforce Agent 3 Anti-Generic Hook Rules: Mandate 3 distinct opening hook variants (A/B/C) on every filming shoot."
      },
      bad_offer: {
        name: "BAD OFFER",
        signals: "High Product Clicks (>3%) + High Add-to-Cart (>12%) + Severe Checkout Abandonment (>80%)",
        symptoms: "Viewers want the product but balk at unexpected shipping charges, high standalone MSRP, or lack of bundle incentive.",
        immediateFix: "Implement Free Shipping threshold, introduce 'Buy 2 Save 20%' bundle, or attach TikTok Shop flash coupon.",
        prevention: "Recalibrate Agent 4 margin waterfall: Build shipping buffer into MSRP so frontend offer is frictionless Free Shipping."
      },
      bad_audience: {
        name: "BAD AUDIENCE",
        signals: "High Viral Views (>500k) + High Comments/Shares + Zero Product Clicks (<0.3%) & Zero GMV",
        symptoms: "Content went viral in a non-buying demographic (e.g. young teenagers, international viewers outside shipping zone).",
        immediateFix: "Refine hashtags and on-screen text to speak directly to working professionals/tech enthusiasts (ages 21-45).",
        prevention: "Use Spark Ads demographic targeting strictly scoped to US/UK purchasing age brackets."
      },
      bad_execution: {
        name: "BAD EXECUTION",
        signals: "Strong concept script on paper, but low completion and comments like 'can't hear audio' or 'what is this?'",
        symptoms: "Muffled audio, muddy/dark lighting, text obscured by TikTok UI buttons, or missing yellow shopping basket tag.",
        immediateFix: "Re-edit video with TikTok Safe Zone overlay template, re-record audio at -14 LUFS, and re-tag yellow shopping basket.",
        prevention: "Mandate Agent 5 9-Point Pre-Flight QA Verification before any video is cleared to publish."
      }
    },

    // Content Learning Engine — 12-Video Telemetry Ledger
    contentTelemetryDatabase: [
      {
        id: "VID-001",
        date: "2026-08-01",
        product: "ApexGrip Mount",
        pillar: "Transformation & Resets",
        hook: "Relatable Frustration",
        format: "POV Reset + ASMR",
        duration: 22,
        views: 485000,
        retention3s: 69.4,
        watchTime: 16.8,
        completion: 26.2,
        ctr: 3.4,
        orders: 520,
        revenue: 15594,
        rpm: 32.15,
        status: "WIN"
      },
      {
        id: "VID-002",
        date: "2026-08-02",
        product: "ApexGrip Mount",
        pillar: "Product Discovery",
        hook: "Contrarian Observation",
        format: "Talking Head + Cutaways",
        duration: 19,
        views: 312000,
        retention3s: 72.1,
        watchTime: 15.2,
        completion: 31.0,
        ctr: 3.8,
        orders: 398,
        revenue: 11936,
        rpm: 38.25,
        status: "WIN"
      },
      {
        id: "VID-003",
        date: "2026-08-03",
        product: "PulseFlow Tumbler",
        pillar: "Experiments & Stress-Tests",
        hook: "Unexpected Experiment",
        format: "Macro Vortex ASMR",
        duration: 28,
        views: 890000,
        retention3s: 64.2,
        watchTime: 18.5,
        completion: 21.5,
        ctr: 2.9,
        orders: 740,
        revenue: 25892,
        rpm: 29.09,
        status: "WIN"
      },
      {
        id: "VID-004",
        date: "2026-08-04",
        product: "ApexShield Armor",
        pillar: "Product Discovery",
        hook: "Torture / Drop Test",
        format: "Slow-Mo Balcony Drop",
        duration: 18,
        views: 640000,
        retention3s: 74.5,
        watchTime: 15.1,
        completion: 33.4,
        ctr: 4.1,
        orders: 615,
        revenue: 15368,
        rpm: 24.01,
        status: "WIN"
      },
      {
        id: "VID-005",
        date: "2026-08-05",
        product: "Barista Nitro Pods",
        pillar: "Sensory Rituals",
        hook: "Satisfying ASMR",
        format: "Pure Sound Foley",
        duration: 24,
        views: 210000,
        retention3s: 61.0,
        watchTime: 14.8,
        completion: 20.1,
        ctr: 2.6,
        orders: 185,
        revenue: 6473,
        rpm: 30.82,
        status: "WIN"
      },
      {
        id: "VID-006",
        date: "2026-08-06",
        product: "Cyber Clock Nixie",
        pillar: "Aesthetic Desk Setup",
        hook: "Aspirational Lifestyle",
        format: "Ambient B-Roll Montage",
        duration: 38,
        views: 145000,
        retention3s: 48.2,
        watchTime: 12.0,
        completion: 9.5,
        ctr: 1.1,
        orders: 32,
        revenue: 2559,
        rpm: 17.65,
        status: "LEARN"
      },
      {
        id: "VID-007",
        date: "2026-08-07",
        product: "ApexGrip Mount",
        pillar: "Education & Productivity",
        hook: "3 Things I Wish I Knew",
        format: "Talking Head Masterclass",
        duration: 32,
        views: 195000,
        retention3s: 58.4,
        watchTime: 16.2,
        completion: 14.2,
        ctr: 1.8,
        orders: 110,
        revenue: 3298,
        rpm: 16.91,
        status: "LEARN"
      },
      {
        id: "VID-008",
        date: "2026-08-08",
        product: "PulseFlow Tumbler",
        pillar: "Lifestyle & POV",
        hook: "Day in the Life",
        format: "Vlog Style",
        duration: 44,
        views: 98000,
        retention3s: 42.1,
        watchTime: 13.4,
        completion: 7.8,
        ctr: 0.8,
        orders: 18,
        revenue: 629,
        rpm: 6.41,
        status: "KILL"
      },
      {
        id: "VID-009",
        date: "2026-08-09",
        product: "ApexShield Armor",
        pillar: "Community Comment Lab",
        hook: "Customer Objection Reply",
        format: "Stitch / Green Screen Reply",
        duration: 21,
        views: 420000,
        retention3s: 67.8,
        watchTime: 16.0,
        completion: 24.8,
        ctr: 3.2,
        orders: 410,
        revenue: 10245,
        rpm: 24.39,
        status: "WIN"
      },
      {
        id: "VID-010",
        date: "2026-08-10",
        product: "Cyber Clock Nixie",
        pillar: "Product Discovery",
        hook: "Direct Question Hook",
        format: "Basic Product Pitch",
        duration: 25,
        views: 82000,
        retention3s: 36.5,
        watchTime: 8.2,
        completion: 5.4,
        ctr: 0.6,
        orders: 8,
        revenue: 639,
        rpm: 7.79,
        status: "KILL"
      },
      {
        id: "VID-011",
        date: "2026-08-11",
        product: "Barista Nitro Pods",
        pillar: "Education & Hacks",
        hook: "Myth Busting",
        format: "Side-by-Side Comparison",
        duration: 26,
        views: 280000,
        retention3s: 63.5,
        watchTime: 17.1,
        completion: 22.0,
        ctr: 2.4,
        orders: 245,
        revenue: 8572,
        rpm: 30.61,
        status: "WIN"
      },
      {
        id: "VID-012",
        date: "2026-08-12",
        product: "ApexGrip Mount",
        pillar: "Transformation & Resets",
        hook: "Before & After Clean Desk",
        format: "Fast Split Time-lapse",
        duration: 20,
        views: 530000,
        retention3s: 71.0,
        watchTime: 16.4,
        completion: 29.5,
        ctr: 3.6,
        orders: 620,
        revenue: 18593,
        rpm: 35.08,
        status: "WIN"
      }
    ],

    // Customer Feedback Engine (Voice-of-Customer Data & Mappings)
    vocFeedbackEntries: [
      {
        id: "voc_01",
        source: "TikTok Comment (240 Likes)",
        author: "@tech_enthusiast_99",
        text: "There is literally no way this magnet holds an iPhone 16 Pro Max through a thick OtterBox Defender case.",
        type: "Skeptical Objection",
        typeBadge: "badge-objection",
        suggestedFormat: "Extreme Magnet Stress-Test / Reply-with-Video",
        generatedBrief: {
          conceptTitle: "The OtterBox Defender Heavyweight Magnet Bet",
          pillar: "Community Comment Lab & Stress Tests",
          hook: "Someone commented there's zero chance our magnet holds through a thick OtterBox Defender. Let's test it with a 10lb pull gauge.",
          visualOpening: "Host displays the TikTok comment bubble on screen, picks up a thick OtterBox Defender case, and snaps it onto the ApexGrip mount with an acoustic thud.",
          payoff: "Host hooks a calibrated fish scale pull gauge to the case and pulls upwards until the gauge passes 14.5 lbs before releasing.",
          cta: "Tap the yellow basket to grab the MagSafe adapter ring if you have an extra thick non-magnetic case!"
        }
      },
      {
        id: "voc_02",
        source: "TikTok Shop 5-Star Review",
        author: "Marcus D. (Verified Buyer)",
        text: "I work 12-hour shifts as a delivery courier. Every other vent mount melted in the Arizona sun or fell off on bumps. This anodized alloy mount hasn't budged once.",
        type: "5-Star Social Proof",
        typeBadge: "badge-review",
        suggestedFormat: "Real-World Proof & Customer Quote Showcase",
        generatedBrief: {
          conceptTitle: "12-Hour Arizona Courier Torture Test",
          pillar: "Customer Stories & Transformation",
          hook: "A delivery courier in Arizona sent us this review after a 12-hour shift in 110-degree heat...",
          visualOpening: "Screenshot of Marcus's 5-star review floating over high-speed POV driving footage through desert highways.",
          payoff: "Host demonstrates the CNC aluminum heat-sink fins keeping the phone battery cool under direct windshield heat.",
          cta: "We restocked 400 units on TikTok Shop today—get free delivery when you order the courier bundle in the yellow basket."
        }
      },
      {
        id: "voc_03",
        source: "Return Reason & Support Ticket",
        author: "Order #8410 Return Note",
        text: "Product didn't fit my car's circular round turbine air vents.",
        type: "Return / Compatibility Friction",
        typeBadge: "badge-return",
        suggestedFormat: "Radical Transparency Compatibility Guide",
        generatedBrief: {
          conceptTitle: "Which Car Vents Work (And Which DO NOT)",
          pillar: "Education & Transparency",
          hook: "Please DO NOT buy our car mount if your air vents look like this...",
          visualOpening: "Host holds up a big red 'X' over circular turbine vents, then a green checkmark over standard horizontal and vertical slats.",
          payoff: "Shows the exact 3-point steel hook latching securely to standard horizontal blades in 2 seconds.",
          cta: "Check your car vent style before clicking the yellow basket! Horizontal & vertical slats guaranteed 100% fit."
        }
      },
      {
        id: "voc_04",
        source: "TikTok Comment (115 Likes)",
        author: "@sarah_designs",
        text: "My workspace looked like a chaotic bird's nest of cables before I found this. Can you make a matte white version?",
        type: "Customer Vernacular / Product Suggestion",
        typeBadge: "badge-vernacular",
        suggestedFormat: "Colorway Reveal & Before/After Reset",
        generatedBrief: {
          conceptTitle: "From 'Bird's Nest' Chaos to Matte White Aesthetic",
          pillar: "Transformation & Product Discovery",
          hook: "A follower said her desk looked like a 'chaotic bird's nest'... so we built the Matte Arctic White edition.",
          visualOpening: "Side-by-side: left side messy tangled cords tagged 'Bird's Nest', right side ultra-clean minimal white setup.",
          payoff: "Macro ASMR clicks as white braided cables snap into the magnetic channels seamlessly.",
          cta: "The Arctic White batch just went live on TikTok Shop in limited quantities—tap the yellow cart below!"
        }
      }
    ]
  }
};



