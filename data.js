// ==========================================================================
// PERFORMANCE LAB — Master Data Engine & Formulation Dossier
// ==========================================================================

const PERFORMANCE_LAB_DATA = {
  // Brand Configuration
  brand: {
    name: "PERFORMANCE LAB",
    headline: "TRAIN WITH PURPOSE. FUEL WITH PURPOSE.",
    subheadline: "Your training isn't generic. Your nutrition shouldn't feel generic either.",
    mission: "Remove confusion from sports nutrition through radical ingredient transparency, educational empowerment, and disciplined routine design.",
    pillars: ["Consistency", "Performance", "Progress", "Knowledge", "Discipline", "Longevity", "Recovery", "Intelligent Training"]
  },

  // 5 Core Launch Product Formulations
  products: [
    {
      id: "prod_preworkout",
      sku: "PL-PRE-01",
      name: "Clean Focus Pre-Workout",
      category: "PERFORMANCE",
      categoryBadge: "badge-performance",
      tier: "HERO PRODUCT",
      servingCount: 30,
      servingSize: "16.5g",
      price: 44.99,
      subPrice: 38.24, // 15% off
      cogs: 8.80,
      marginPct: 80.4,
      rating: 4.9,
      reviewCount: 342,
      flavorOptions: ["Sour Green Apple", "Yuzu Citrus Rush", "Unflavored Focus"],
      summary: "Clean, jitter-free nitric oxide amplification, cellular energy regeneration, and neuro-focus without proprietary blends or artificial dyes.",
      whoItsFor: "Athletes, lifters, runners, and hybrid trainees needing sharp sustained mental focus, improved blood flow, and high power output without a post-workout caffeine crash.",
      whoNotFor: "Late-night trainers (within 4 hours of sleep), stimulant-sensitive individuals, or low-intensity recovery days.",
      whyWeMadeThis: "Legacy pre-workouts rely on cheap 400mg caffeine bombs, synthetic food dyes, and proprietary blends that cause jitters and mid-session crashes. We engineered Clean Focus with clinical L-Citrulline, Alpha-GPC, and organic caffeine paired with L-Theanine for smooth, sustained flow states.",
      whatWeLeftOut: [
        "Zero Proprietary Blends (100% disclosed milligrams)",
        "Zero Artificial Dyes (No Red 40, Yellow 5, or Blue 1)",
        "Zero Beta-Alanine Tingles (Formulated without face itching)",
        "Zero High-Dose Maltodextrin Fillers",
        "Zero Synthetic Harsh Chemical Stimulants"
      ],
      ingredients: [
        { name: "Pure Fermented L-Citrulline", dose: "6,000 mg", purpose: "Direct nitric oxide precursor for maximal vasodilation and muscle oxygenation" },
        { name: "BetaPower® Betaine Anhydrous", dose: "2,500 mg", purpose: "Cellular osmolyte supporting cellular hydration and muscular power output" },
        { name: "Alpha-GPC (50% Active)", dose: "600 mg", purpose: "Bioavailable choline source crossing blood-brain barrier for mind-muscle connection" },
        { name: "Natural PurCaf® Organic Caffeine", dose: "175 mg", purpose: "Standardized organic green coffee bean extract for clean, steady alertness" },
        { name: "Suntheanine® L-Theanine", dose: "175 mg", purpose: "1:1 ratio with caffeine to smooth out vasoconstriction and eliminate jitters" },
        { name: "Pink Himalayan Sea Salt (Sodium)", dose: "300 mg", purpose: "Essential intra-cellular electrolyte for rapid muscular nerve firing" }
      ],
      howToUse: "Mix 1 level scoop (16.5g) with 350–450ml cold water. Consume 20–30 minutes prior to training session.",
      batchNumber: "PL-2026-0814-PW",
      informedSportTested: true
    },
    {
      id: "prod_hydration",
      sku: "PL-HYD-01",
      name: "Cellular Hydration Electrolytes",
      category: "HYDRATION",
      categoryBadge: "badge-hydration",
      tier: "ENTRY PRODUCT",
      servingCount: 30,
      servingSize: "7.2g stick pack",
      price: 24.99,
      subPrice: 21.24,
      cogs: 4.50,
      marginPct: 82.0,
      rating: 4.95,
      reviewCount: 512,
      flavorOptions: ["Lemon Lime Electrolyte", "Wild Raspberry", "Raw Unsweetened"],
      summary: "Clinical bioavailable electrolyte ratio designed to match human sweat composition for rapid fluid retention and cramp elimination.",
      whoItsFor: "Endurance runners, Hyrox athletes, heavy sweaters, hot yoga practitioners, and daily desk workers fighting afternoon fatigue.",
      whoNotFor: "Sedentary individuals consuming very high-sodium diets with zero daily perspiration.",
      whyWeMadeThis: "Most sports drinks are 90% sugar with negligible potassium and magnesium. Cellular Hydration delivers genuine physiological mineral ratios with bioavailable chelated forms that hydrate your cells rather than just passing through.",
      whatWeLeftOut: [
        "Zero Added Sugars or High-Fructose Corn Syrup",
        "Zero Artificial Sweeteners (Naturally sweetened with fermented stevia)",
        "Zero Ineffective Magnesium Oxide (Only Chelated Bisglycinate)",
        "Zero Artificial Food Coloring"
      ],
      ingredients: [
        { name: "Sodium (from Pink Himalayan Salt)", dose: "500 mg", purpose: "Primary extracellular cation lost in sweat; drives fluid volume retention" },
        { name: "Potassium (as Potassium Citrate)", dose: "200 mg", purpose: "Intracellular fluid balance and prevention of muscular cramping" },
        { name: "Magnesium (as Magnesium Bisglycinate)", dose: "60 mg", purpose: "Bioavailable chelate supporting muscular relaxation and ATP enzymatic reactions" },
        { name: "Aquamin® Marine Calcium & Trace Minerals", dose: "100 mg", purpose: "Bio-active multi-mineral complex derived from Icelandic red algae" },
        { name: "Organic Coconut Water Powder", dose: "1,000 mg", purpose: "Natural micronutrient source and electrolyte absorption enhancer" },
        { name: "Vitamin C (as Ascorbic Acid)", dose: "100 mg", purpose: "Antioxidant cellular defense against exercise-induced oxidative stress" }
      ],
      howToUse: "Mix 1 stick pack with 500–750ml cold water. Drink during training sessions exceeding 45 minutes or throughout the morning routine.",
      batchNumber: "PL-2026-0814-HY",
      informedSportTested: true
    },
    {
      id: "prod_creatine",
      sku: "PL-CRE-01",
      name: "Creapure® Micronized Creatine",
      category: "FOUNDATIONS",
      categoryBadge: "badge-foundation",
      tier: "REPEAT PRODUCT",
      servingCount: 60,
      servingSize: "5.0g",
      price: 29.99,
      subPrice: 25.49,
      cogs: 5.20,
      marginPct: 82.7,
      rating: 4.98,
      reviewCount: 680,
      flavorOptions: ["100% Pure Unflavored"],
      summary: "The global gold standard 99.99% pure German Creapure® monohydrate for cellular ATP replenishment, muscular power, and cognitive longevity.",
      whoItsFor: "Anyone serious about strength, sprinting, high-intensity intervals, muscle preservation, or cognitive resilience.",
      whoNotFor: "Individuals seeking instant stimulatory energy (creatine works via chronic saturation over 14–21 days).",
      whyWeMadeThis: "Cheap generic creatines are often sourced with dicyandiamide impurities and poor solubility. We exclusively bottle genuine German-manufactured Creapure®, micronized to mesh 200 for instant cold-water dissolution without gritty residue.",
      whatWeLeftOut: [
        "Zero Gimmick Forms (No overpriced HCL, Nitrate, or Ethyl Ester)",
        "Zero Dicyandiamide or Dihydrotriazine Impurities",
        "Zero Sweeteners, Gums, or Flavorings (Pure 100% Powder)",
        "Zero Unnecessary Loading Phase Marketing Gimmicks"
      ],
      ingredients: [
        { name: "Creapure® Micronized Creatine Monohydrate", dose: "5,000 mg", purpose: "Replenishes intramuscular phosphocreatine stores to regenerate ATP during maximal effort contractions" }
      ],
      howToUse: "Take 1 scoop (5g) daily, mixed into your post-workout shake, hydration water, or morning beverage. Consistency matters more than timing.",
      batchNumber: "PL-2026-0814-CR",
      informedSportTested: true
    },
    {
      id: "prod_protein",
      sku: "PL-PRO-01",
      name: "Native Whey Isolate Protein",
      category: "PROTEIN / NUTRITION",
      categoryBadge: "badge-protein",
      tier: "FOUNDATION",
      servingCount: 30,
      servingSize: "31.5g",
      price: 49.99,
      subPrice: 42.49,
      cogs: 12.50,
      marginPct: 75.0,
      rating: 4.92,
      reviewCount: 428,
      flavorOptions: ["Bourbon Vanilla Bean", "Cold-Pressed Dutch Cocoa", "Unflavored Pure Isolate"],
      summary: "Cold-microfiltered native whey protein isolate from pasture-raised milk with 26g protein, 5.8g naturally occurring BCAAs, and zero bloating.",
      whoItsFor: "Athletes aiming to hit daily protein targets, maximize muscle protein synthesis (MPS), and accelerate recovery without lactose distress.",
      whoNotFor: "Strict vegans or those with severe dairy protein allergies.",
      whyWeMadeThis: "Most commercial whey is a byproduct of high-heat cheese manufacturing, which denatures fragile protein fractions. Our Native Whey is cold-microfiltered directly from fresh pasture-fed milk, preserving native immunoglobulins and delivering highest bioavailability.",
      whatWeLeftOut: [
        "Zero Amino Spiking (True 26g complete milk protein)",
        "Zero High-Heat Denatured Whey Concentrates",
        "Zero Added Sugar, Thickening Gums, or Palm Oils",
        "Zero Lactose (<0.2g per serving, virtually 100% lactose-free)"
      ],
      ingredients: [
        { name: "Cold-Microfiltered Native Whey Isolate", dose: "28,500 mg (Yields 26g Protein)", purpose: "High-leucine complete amino acid profile for maximal muscle protein synthesis" },
        { name: "DigeZyme® Multi-Enzyme Complex", dose: "50 mg", purpose: "Protease, amylase, lactase, and lipase blend for rapid, bloat-free digestive breakdown" },
        { name: "Natural Vanilla / Cocoa Extract", dose: "2,000 mg", purpose: "Authentic whole-bean aroma without synthetic flavorings" },
        { name: "Organic Stevia Leaf Extract", dose: "95 mg", purpose: "Pure glycoside Reb-M sweetness with zero lingering aftertaste" }
      ],
      howToUse: "Mix 1 scoop with 250–300ml cold water, milk, or blend into your post-workout smoothie. Ideal within 1–2 hours post-workout or as a protein-rich morning snack.",
      batchNumber: "PL-2026-0814-PR",
      informedSportTested: true
    },
    {
      id: "prod_recovery",
      sku: "PL-REC-01",
      name: "Deep Recovery Magnesium & Tart Cherry",
      category: "RECOVERY",
      categoryBadge: "badge-recovery",
      tier: "RECOVERY",
      servingCount: 30,
      servingSize: "8.5g",
      price: 39.99,
      subPrice: 33.99,
      cogs: 7.40,
      marginPct: 81.5,
      rating: 4.88,
      reviewCount: 290,
      flavorOptions: ["Midnight Montmorency Cherry", "Soothing Chamomile Honey"],
      summary: "Nighttime parasympathetic down-regulation matrix combining Montmorency tart cherry, chelated magnesium, L-Glycine, and Sensoril® Ashwagandha.",
      whoItsFor: "Athletes with elevated evening cortisol, restless legs, delayed recovery, or high training load disrupting deep REM sleep.",
      whoNotFor: "Daytime pre-training use or individuals seeking a heavy pharmaceutical sedative.",
      whyWeMadeThis: "Melatonin pills cause grogginess and downregulate natural hormone production. We formulated Deep Recovery with natural phytochemicals that enhance your brain's endogenous sleep architecture and accelerate cellular repair overnight.",
      whatWeLeftOut: [
        "Zero Synthetic Melatonin (No morning brain fog or hormone disruption)",
        "Zero Sedative Antihistamines",
        "Zero Artificial Sweeteners or Food Dyes",
        "Zero Ineffective Magnesium Oxide"
      ],
      ingredients: [
        { name: "Montmorency Tart Cherry Extract (50:1)", dose: "1,200 mg", purpose: "Natural source of procyanidins supporting endogenous melatonin synthesis and reducing DOMS" },
        { name: "Magnesium Bisglycinate Chelate", dose: "300 mg (Yields 60mg Elemental Mg)", purpose: "High-bioavailability neuro-relaxing mineral supporting GABA neurotransmission" },
        { name: "Pure L-Glycine", dose: "3,000 mg", purpose: "Inhibitory neurotransmitter shown in clinical trials to lower core body temperature for deeper REM sleep" },
        { name: "Sensoril® Organic Ashwagandha Extract", dose: "125 mg", purpose: "Clinically proven to reduce serum cortisol by up to 27.9% and mitigate exercise stress" },
        { name: "L-Theanine", dose: "200 mg", purpose: "Alpha brain wave promoter inducing calm mental quietude without drowsiness" }
      ],
      howToUse: "Mix 1 scoop with 200ml warm or cold water 30–45 minutes before bedtime. Drink as a calming evening ritual.",
      batchNumber: "PL-2026-0814-RC",
      informedSportTested: true
    }
  ],

  // Goal-Based Pre-Configured Bundles
  bundles: [
    {
      id: "bundle_hybrid",
      name: "The Hybrid Performance Stack",
      tagline: "Complete system for strength, stamina & intra-cellular hydration",
      targetGoal: "Hybrid Athlete / Hyrox / High-Volume Training",
      productsIncluded: ["prod_preworkout", "prod_hydration", "prod_creatine"],
      productNames: ["Clean Focus Pre-Workout", "Cellular Hydration", "Creapure® Creatine"],
      individualTotal: 99.97,
      bundlePrice: 84.99, // ~15% savings
      monthlySubPrice: 72.24, // extra 15% sub savings
      whyItWorks: "Synergistic 3-step routine: Nitric oxide + focus before training, clinical electrolytes during training, and ATP cellular saturation daily.",
      badge: "MOST POPULAR"
    },
    {
      id: "bundle_strength_recovery",
      name: "Strength & Deep Recovery Stack",
      tagline: "Maximum muscle protein synthesis and nervous system reset",
      targetGoal: "Hypertrophy, Strength & Heavy Resistance",
      productsIncluded: ["prod_protein", "prod_creatine", "prod_recovery"],
      productNames: ["Native Whey Isolate", "Creapure® Creatine", "Deep Recovery Matrix"],
      individualTotal: 119.97,
      bundlePrice: 99.99,
      monthlySubPrice: 84.99,
      whyItWorks: "Fuels muscle protein synthesis post-training while actively down-regulating evening cortisol for deep restorative sleep.",
      badge: "BEST VALUE"
    },
    {
      id: "bundle_daily_essentials",
      name: "The Daily Performance Essentials",
      tagline: "The foundational 2-product baseline for every human body in motion",
      targetGoal: "General Fitness, Runners & Active Lifestyle",
      productsIncluded: ["prod_hydration", "prod_creatine"],
      productNames: ["Cellular Hydration", "Creapure® Creatine"],
      individualTotal: 54.98,
      bundlePrice: 46.99,
      monthlySubPrice: 39.94,
      whyItWorks: "The two most clinically validated supplements on earth for cellular hydration and continuous ATP muscular endurance.",
      badge: "FOUNDATION"
    }
  ],

  // 9-Step Performance Profile Diagnostic Questionnaire
  quizQuestions: [
    {
      id: "q_goal",
      num: 1,
      title: "What is your primary training objective right now?",
      subtitle: "Select the primary focus guiding your physical efforts.",
      options: [
        { value: "hybrid_endurance", label: "Hybrid Stamina & Hyrox Racing", icon: "zap", desc: "Combining heavy lifting with high-volume running and rowing" },
        { value: "hypertrophy_strength", label: "Muscle Hypertrophy & Raw Strength", icon: "dumbbell", desc: "Building lean mass, progressive overload, and power output" },
        { value: "endurance_running", label: "Endurance Running & Cycling", icon: "timer", desc: "Marathon, 10k, trail running, or sustained cardiovascular output" },
        { value: "general_longevity", label: "Active Longevity & Daily Energy", icon: "heart-pulse", desc: "Staying resilient, mobile, sharp, and energised all day" }
      ]
    },
    {
      id: "q_style",
      num: 2,
      title: "What style of training makes up most of your week?",
      subtitle: "Helps us calibrate nutrient timing and cellular demands.",
      options: [
        { value: "functional_crossfit", label: "CrossFit / Functional Fitness", icon: "flame" },
        { value: "traditional_lifting", label: "Traditional Weightlifting / Powerlifting", icon: "activity" },
        { value: "road_trail_running", label: "Road & Trail Running", icon: "compass" },
        { value: "mixed_hiit_calisthenics", label: "HIIT, Bodyweight & Circuit Training", icon: "target" }
      ]
    },
    {
      id: "q_frequency",
      num: 3,
      title: "How many days per week do you train intensely?",
      subtitle: "Directly calculates your replenishment cycle and depletion rate.",
      options: [
        { value: "freq_2_3", label: "2 to 3 days / week", desc: "Moderate volume & steady recovery" },
        { value: "freq_4_5", label: "4 to 5 days / week", desc: "High consistency; structured splits" },
        { value: "freq_6_plus", label: "6+ days / week", desc: "Elite athletic volume; high recovery demand" }
      ]
    },
    {
      id: "q_duration",
      num: 4,
      title: "What is your typical session duration?",
      subtitle: "Determines intra-workout hydration and fuel necessity.",
      options: [
        { value: "dur_short", label: "Under 45 minutes", desc: "Fast intense sessions" },
        { value: "dur_standard", label: "45 to 75 minutes", desc: "Standard strength / training block" },
        { value: "dur_long", label: "75+ minutes", desc: "Extended endurance or heavy volume" }
      ]
    },
    {
      id: "q_caffeine",
      num: 5,
      title: "What is your caffeine and stimulant preference?",
      subtitle: "We prioritize clean neuro-focus and respect sleep architecture.",
      options: [
        { value: "caff_moderate", label: "I like moderate clean caffeine (150-200mg)", desc: "Clean pre-workout boost" },
        { value: "caff_stim_free", label: "Strictly Stimulant-Free / Train at Night", desc: "Zero caffeine; natural focus only" },
        { value: "caff_coffee_only", label: "I get my caffeine from morning coffee only", desc: "Prefer non-caffeinated supplements" }
      ]
    },
    {
      id: "q_diet",
      num: 6,
      title: "Do you follow any specific dietary framework?",
      subtitle: "Ensures all recommended ingredients match your preferences.",
      options: [
        { value: "diet_omnivore", label: "Omnivore / No strict restrictions" },
        { value: "diet_plant", label: "Plant-Based / Vegan" },
        { value: "diet_keto_lowcarb", label: "Low Carb / Ketogenic" },
        { value: "diet_dairy_free", label: "Lactose / Dairy Sensitive" }
      ]
    },
    {
      id: "q_sleep_recovery",
      num: 7,
      title: "How would you rate your sleep quality and morning recovery?",
      subtitle: "Recovery is where physical adaptations actually occur.",
      options: [
        { value: "sleep_poor", label: "Restless sleep, high evening stress, sluggish mornings", desc: "High recovery intervention needed" },
        { value: "sleep_average", label: "Average sleep (6-7 hrs), occasional soreness", desc: "Moderate recovery support" },
        { value: "sleep_great", label: "Great deep sleep (8+ hrs), wake up refreshed", desc: "Low recovery intervention needed" }
      ]
    }
  ],

  // Rules-Based Recommendation Engine Matrix
  recommendationLogic: {
    evaluate: function(answers) {
      const goal = answers.q_goal || "hybrid_endurance";
      const freq = answers.q_frequency || "freq_4_5";
      const dur = answers.q_duration || "dur_standard";
      const caff = answers.q_caffeine || "caff_moderate";
      const sleep = answers.q_sleep_recovery || "sleep_average";

      const result = {
        goalTitle: goal === "hybrid_endurance" ? "Hybrid Stamina & Racing" :
                   goal === "hypertrophy_strength" ? "Muscle Hypertrophy & Raw Strength" :
                   goal === "endurance_running" ? "Endurance Running & Stamina" : "Active Longevity & Daily Vitality",
        foundation: [],
        training: [],
        recovery: [],
        optional: [],
        notNecessary: [],
        rationale: {}
      };

      // 1. Creapure Creatine logic
      if (goal === "hypertrophy_strength" || goal === "hybrid_endurance" || freq === "freq_4_5" || freq === "freq_6_plus") {
        result.foundation.push("prod_creatine");
        result.rationale["prod_creatine"] = {
          tier: "FOUNDATION (CORE)",
          why: "Daily ATP cellular regeneration is the single most validated adaptation for your training volume.",
          when: "5g taken once daily with your post-workout shake or hydration water.",
          evidence: "Over 500 peer-reviewed trials demonstrate 10-15% increase in power output and enhanced muscular recovery."
        };
      } else {
        result.optional.push("prod_creatine");
        result.rationale["prod_creatine"] = {
          tier: "OPTIONAL",
          why: "Beneficial for cellular energy, but not strictly mandatory for your current lower-frequency routine.",
          when: "5g daily.",
          evidence: "Supports cellular phosphocreatine saturation."
        };
      }

      // 2. Cellular Hydration logic
      if (dur === "dur_long" || goal === "hybrid_endurance" || goal === "endurance_running" || freq === "freq_6_plus") {
        result.foundation.push("prod_hydration");
        result.rationale["prod_hydration"] = {
          tier: "FOUNDATION (CORE)",
          why: "Your high sweat rate and long sessions deplete sodium and magnesium, causing late-session power drop.",
          when: "Mix 1 stick in 500-750ml water and sip throughout training or early morning.",
          evidence: "Maintains plasma volume and prevents muscular cramping during extended exertion."
        };
      } else {
        result.training.push("prod_hydration");
        result.rationale["prod_hydration"] = {
          tier: "TRAINING ESSENTIAL",
          why: "Restores electrolyte balance and optimizes muscle contraction speeds.",
          when: "During your workouts.",
          evidence: "Bioavailable chelated minerals match human sweat losses."
        };
      }

      // 3. Clean Focus Pre-Workout logic
      if (caff === "caff_stim_free") {
        result.notNecessary.push("prod_preworkout");
        result.rationale["prod_preworkout"] = {
          tier: "NOT RECOMMENDED (STIMULANT)",
          why: "You indicated you prefer to avoid stimulants or train near bedtime. Do NOT buy our caffeinated pre-workout.",
          when: "Not applicable.",
          evidence: "Late caffeine consumption disrupts slow-wave delta sleep architecture."
        };
      } else if (goal === "general_longevity" && dur === "dur_short") {
        result.notNecessary.push("prod_preworkout");
        result.rationale["prod_preworkout"] = {
          tier: "NOT NECESSARY",
          why: "For short moderate wellness sessions, high pre-workout stimulant intake is unnecessary overhead.",
          when: "Save your money—plain water and natural food energy are sufficient.",
          evidence: "High stimulation is not required for sub-maximal health routines."
        };
      } else {
        result.training.push("prod_preworkout");
        result.rationale["prod_preworkout"] = {
          tier: "PERFORMANCE HERO",
          why: "6,000mg L-Citrulline + Alpha GPC deliver clean nitric oxide vasodilation and neuro-focus without jitters.",
          when: "20–30 minutes before intense training sessions.",
          evidence: "Pure L-Citrulline significantly increases muscle oxygenation and time-to-exhaustion."
        };
      }

      // 4. Native Whey Isolate logic
      if (goal === "hypertrophy_strength" || goal === "hybrid_endurance") {
        result.recovery.push("prod_protein");
        result.rationale["prod_protein"] = {
          tier: "RECOVERY ESSENTIAL",
          why: "Cold-microfiltered native whey delivers 26g complete protein and 5.8g BCAAs to hit your daily recovery targets.",
          when: "Within 60 minutes post-training or as a high-protein morning snack.",
          evidence: "Delivers rapid leucine surge triggering mTOR muscle protein synthesis."
        };
      } else {
        result.optional.push("prod_protein");
        result.rationale["prod_protein"] = {
          tier: "OPTIONAL CONVENIENCE",
          why: "If you already hit 1.6g/kg protein from whole foods, protein powder is a convenience tool rather than a necessity.",
          when: "When whole-food meals are unavailable.",
          evidence: "Supports daily macronutrient targets."
        };
      }

      // 5. Deep Recovery Tart Cherry logic
      if (sleep === "sleep_poor" || freq === "freq_6_plus") {
        result.recovery.push("prod_recovery");
        result.rationale["prod_recovery"] = {
          tier: "RECOVERY HERO",
          why: "Montmorency tart cherry + chelated magnesium down-regulate evening cortisol for restorative REM sleep.",
          when: "Mix 1 scoop with warm or cold water 30–45 minutes before sleep.",
          evidence: "Proven to reduce muscle soreness (DOMS) and naturally increase circulating sleep phytocompounds."
        };
      } else {
        result.optional.push("prod_recovery");
        result.rationale["prod_recovery"] = {
          tier: "OPTIONAL SLEEP RITUAL",
          why: "Helpful for deep relaxation on heavy training days, but your current sleep baseline is already solid.",
          when: "Before bed on intense training days.",
          evidence: "Supports nervous system calming via GABA pathways."
        };
      }

      return result;
    }
  },

  // Performance Lab Academy Articles
  academyArticles: [
    {
      id: "acad_01",
      category: "Supplement Science",
      title: "What Does Creatine Actually Do In The Human Body?",
      readTime: "4 min read",
      author: "Dr. Ethan Cole, Exercise Biochemist",
      summary: "Understanding the phosphocreatine shuttle: how a simple amino compound regenerates cellular ATP during maximal muscular contractions.",
      content: `
<h3>The Molecular Engine of High-Intensity Output</h3>
<p>Creatine is not a hormone, a stimulant, or a shortcut. It is a naturally occurring compound synthesized in the liver and stored primarily inside skeletal muscle tissue as <strong>phosphocreatine (PCr)</strong>.</p>

<p>When you sprint, lift a heavy barbell, or perform explosive physical work, your muscle cells burn through their primary energy currency: <strong>Adenosine Triphosphate (ATP)</strong>. In doing so, ATP loses a phosphate molecule and converts into low-energy <em>Adenosine Diphosphate (ADP)</em>.</p>

<div class="callout-box">
  <strong>The Phosphagen Rapid Energy Reaction:</strong><br>
  <code>ADP + Phosphocreatine &xrarr; ATP + Free Creatine</code>
</div>

<p>Under normal whole-food dietary conditions (eating beef or salmon), your muscle stores are only about 60%–70% saturated with phosphocreatine. By supplementing with <strong>5 grams of pure Creapure® Creatine Monohydrate daily</strong> for 14–21 days, you achieve 100% cellular saturation.</p>

<h3>What You Actually Experience:</h3>
<ul>
  <li><strong>+10% to +15% Power Endurance:</strong> Squeeze out 2–3 additional repetitions at maximal loads.</li>
  <li><strong>Intracellular Hydration:</strong> Draws water <em>inside</em> muscle cells (not subcutaneous bloating), stimulating cellular protein synthesis.</li>
  <li><strong>Cognitive Protection:</strong> The brain consumes 20% of resting ATP; creatine supplementation enhances working memory under mental fatigue.</li>
</ul>
      `
    },
    {
      id: "acad_02",
      category: "Hydration & Endurance",
      title: "Why Drinking 4 Liters of Plain Water Can Dehydrate Your Cells",
      readTime: "5 min read",
      author: "Sarah Lindqvist, Ultra-Endurance Coach",
      summary: "The osmolarity paradox: how sweating out sodium and chugging plain water triggers cellular hyponatremia and muscle fatigue.",
      content: `
<h3>The Osmotic Concentration Gradient</h3>
<p>Your cells do not absorb water through simple mechanical drinking. Water movement across cell membranes is governed by <strong>osmotic pressure</strong>—dictated by the concentration of electrolytes, primarily <strong>Sodium (Na+)</strong> and <strong>Potassium (K+)</strong>.</p>

<p>When you train in the heat or sustain elevated heart rates for over 45 minutes, a typical athlete sweats out between <strong>500mg to 1,500mg of sodium per hour</strong>.</p>

<div class="callout-box danger">
  <strong>The Dilution Trap:</strong><br>
  If you sweat out sodium and replace it exclusively with <em>pure demineralized tap water</em>, you dilute your extracellular sodium concentration. Your kidneys receive the biological signal to excrete excess water, leaving you paradoxically dehydrated at a cellular level.
</div>

<h3>The Performance Lab Ratio:</h3>
<p>To achieve rapid fluid uptake without gastrointestinal distress, your intra-workout beverage should provide:</p>
<ul>
  <li><strong>500mg Sodium</strong> (Pink Himalayan Sea Salt)</li>
  <li><strong>200mg Potassium</strong> (Citrate for smooth vascular tone)</li>
  <li><strong>60mg Bioavailable Magnesium Bisglycinate</strong> (to prevent neuro-muscular cramping)</li>
</ul>
      `
    },
    {
      id: "acad_03",
      category: "Recovery & Sleep",
      title: "Why We Deliberately Left Out Synthetic Melatonin From Our Recovery Matrix",
      readTime: "3 min read",
      author: "Dr. Ethan Cole, Exercise Biochemist",
      summary: "Exogenous melatonin megadosing downregulates natural pineal gland hormone secretion and causes severe morning grogginess.",
      content: `
<h3>The Problem with Commercial Sleep Aids</h3>
<p>Most commercial 'sleep' supplements pack 5mg to 10mg of synthetic melatonin into their gummies and powders. In human physiology, the pineal gland naturally secretes roughly <strong>0.3mg</strong> per night.</p>

<p>Flooding the brain with 30x the physiological dose leads to:</p>
<ol>
  <li><strong>Morning Hangover / Brain Fog:</strong> Elevated melatonin circulating hours after waking.</li>
  <li><strong>Downregulation:</strong> Decreased sensitivity of MT1 and MT2 brain receptors.</li>
  <li><strong>Nightmares & Fragmented REM:</strong> Disruption of natural sleep staging.</li>
</ol>

<h3>The Performance Lab Botanical Approach:</h3>
<p>Instead of forcing synthetic hormones into your bloodstream, <em>Deep Recovery</em> utilizes <strong>Montmorency Tart Cherry Extract</strong> (natural source of procyanidins and phytocompounds), <strong>L-Glycine</strong> (lowers core body temperature), and <strong>Magnesium Bisglycinate</strong> (activates calming GABA pathways) to naturally unlock your body's own deep restorative sleep architecture.</p>
      `
    },
    {
      id: "acad_04",
      category: "Performance Myths",
      title: "The Truth About Proprietary Blends: What Supplement Brands Hide",
      readTime: "4 min read",
      author: "Marcus Rivera, Performance Lab Formulation Lead",
      summary: "How legacy brands use 'Energy Matrix (6,500mg)' labels to hide 10¢ of caffeine and 1¢ of fairy-dusted active ingredients.",
      content: `
<h3>How Proprietary Blends Deceive Athletes</h3>
<p>Look at the back of standard supplement tubs. You will frequently see labels like:</p>
<pre>
Proprietary Pump & Focus Blend: 7,500 mg
(L-Citrulline, Beta-Alanine, Taurine, Caffeine, Alpha-GPC, Tyrosine)
</pre>

<p>Federal labeling laws allow manufacturers to hide individual ingredient quantities inside a 'blend' as long as ingredients are listed in descending order by weight.</p>

<h3>The Cheap Manufacturer Playbook:</h3>
<ul>
  <li><strong>Ingredient 1 (90% of blend):</strong> Inexpensive Beta-Alanine or Taurine ($4/kg).</li>
  <li><strong>Ingredient 2:</strong> High-dose cheap anhydrous caffeine ($8/kg).</li>
  <li><strong>Ingredients 3, 4, 5 (<1% of blend):</strong> Expensive L-Citrulline and Alpha-GPC ($40–$80/kg), 'fairy-dusted' at 50mg so the brand can claim it on the front of the box.</li>
</ul>

<div class="callout-box success">
  <strong>The Performance Lab 100% Transparent Guarantee:</strong><br>
  Every single active compound in our line is listed with its exact milligram dose and active botanical form. Zero proprietary blends. Forever.
</div>
      `
    }
  ],

  // Third-Party Testing Batch Quality Database
  batchQualityDatabase: [
    {
      batchId: "PL-2026-0814-PW",
      productName: "Clean Focus Pre-Workout (Sour Apple)",
      mfgDate: "August 14, 2026",
      expiryDate: "August 2028",
      facility: "cGMP & NSF-Certified Facility (Salt Lake City, UT)",
      testingLab: "Eurofins Scientific & Informed-Sport Laboratories",
      status: "VERIFIED 100% PURE",
      testResults: [
        { parameter: "L-Citrulline Assay (Purity)", specification: ">= 6,000 mg / serving", result: "6,140 mg (102.3%)", status: "PASS" },
        { parameter: "Alpha-GPC 50% Assay", specification: ">= 600 mg / serving", result: "608 mg (101.3%)", status: "PASS" },
        { parameter: "Organic PurCaf® Caffeine", specification: "175 mg +/- 5%", result: "176.4 mg", status: "PASS" },
        { parameter: "Lead (Heavy Metals)", specification: "< 0.05 ppm", result: "< 0.008 ppm", status: "PASS" },
        { parameter: "Cadmium / Arsenic / Mercury", specification: "< 0.02 ppm", result: "Not Detected (< 0.001 ppm)", status: "PASS" },
        { parameter: "WADA Banned Substances (280+ Screen)", specification: "Zero Detection", result: "100% Clean / Negative", status: "PASS" }
      ]
    },
    {
      batchId: "PL-2026-0814-CR",
      productName: "Creapure® Micronized Creatine",
      mfgDate: "August 10, 2026",
      expiryDate: "August 2029",
      facility: "Alzchem Trostberg GmbH (Germany) & cGMP Bottling (USA)",
      testingLab: "Informed-Sport & LGC Testing Group",
      status: "VERIFIED 100% PURE",
      testResults: [
        { parameter: "Creatine Monohydrate Purity", specification: ">= 99.90%", result: "99.98% Pure", status: "PASS" },
        { parameter: "Dicyandiamide (DCD) Impurity", specification: "< 50 ppm", result: "< 10 ppm (Undetectable)", status: "PASS" },
        { parameter: "Dihydrotriazine (DHT) Impurity", specification: "Zero Permitted", result: "Not Detected", status: "PASS" },
        { parameter: "Mesh Size (Micronization)", specification: "200 Mesh", result: "Conforms (Instant Solution)", status: "PASS" },
        { parameter: "Heavy Metals Total", specification: "< 0.1 ppm", result: "< 0.005 ppm", status: "PASS" }
      ]
    },
    {
      batchId: "PL-2026-0814-HY",
      productName: "Cellular Hydration Electrolytes (Lemon Lime)",
      mfgDate: "August 18, 2026",
      expiryDate: "August 2028",
      facility: "cGMP Certified Facility (Austin, TX)",
      testingLab: "Covance Laboratories",
      status: "VERIFIED 100% PURE",
      testResults: [
        { parameter: "Sodium Elemental Content", specification: "500 mg +/- 5%", result: "504 mg", status: "PASS" },
        { parameter: "Potassium Elemental Content", specification: "200 mg +/- 5%", result: "202 mg", status: "PASS" },
        { parameter: "Magnesium Bisglycinate Chelate", specification: "60 mg +/- 5%", result: "61.2 mg", status: "PASS" },
        { parameter: "Microbiological (Total Plate Count)", specification: "< 1000 CFU/g", result: "< 10 CFU/g", status: "PASS" },
        { parameter: "Pathogens (Salmonella/E. Coli)", specification: "Negative in 25g", result: "Negative", status: "PASS" }
      ]
    }
  ],

  // Athlete & Creator CRM Roster
  creators: [
    {
      id: "cr_01",
      name: "Marcus Vance",
      category: "Hyrox Elite & Strength Coach",
      handle: "@marcus_hybrid_training",
      platform: "Instagram & TikTok",
      followers: "68,000",
      tier: "Tier 3: Lab Athlete Elite",
      commissionRate: "25%",
      discountCode: "MARCUS15",
      ordersGenerated: 384,
      revenueGMV: 24680,
      cvr: 4.3,
      approvedClaims: ["Clean Focus Pre-Workout for 90-min pacing", "Electrolyte cellular replenishment during sled pushes"],
      status: "ACTIVE_SCALING"
    },
    {
      id: "cr_02",
      name: "Elena Rostova",
      category: "Ultra-Trail Runner & Sports Dietitian",
      handle: "@elena_endurance_lab",
      platform: "YouTube & TikTok",
      followers: "42,000",
      tier: "Tier 2: Core Ambassador",
      commissionRate: "20%",
      discountCode: "ELENA15",
      ordersGenerated: 215,
      revenueGMV: 12450,
      cvr: 3.9,
      approvedClaims: ["Cellular Hydration prevents cramping on 20-mile trail runs", "Native Whey Isolate for rapid leucine synthesis"],
      status: "ACTIVE_SCALING"
    },
    {
      id: "cr_03",
      name: "David K.",
      category: "CrossFit Coach & Mobility Specialist",
      handle: "@david_functional_strength",
      platform: "Instagram",
      followers: "28,500",
      tier: "Tier 2: Core Ambassador",
      commissionRate: "20%",
      discountCode: "DAVID15",
      ordersGenerated: 142,
      revenueGMV: 8920,
      cvr: 3.6,
      approvedClaims: ["Creapure Creatine ATP regeneration between heavy thrusters", "Deep Recovery Magnesium for sleep score"],
      status: "ACTIVE"
    }
  ],

  // 9-Category Voice of Customer (VOC) Feedback Ledger
  vocFeedback: [
    {
      id: "fb_01",
      category: "Taste / Flavor",
      sentiment: "Positive",
      product: "Clean Focus Pre-Workout",
      rating: 5,
      text: "Finally a pre-workout that doesn't taste like nuclear chemical cough syrup. Sour Apple is genuinely crisp and refreshing.",
      actionTaken: "Approved flavor standard for next 5,000-unit production run."
    },
    {
      id: "fb_02",
      category: "Mixability",
      sentiment: "Positive",
      product: "Creapure® Creatine",
      rating: 5,
      text: "Zero grit. Dissolved in cold water in 5 seconds with a spoon. Best creatine I have used in 10 years of lifting.",
      actionTaken: "Standardized 200-mesh micronization specification in supplier contract."
    },
    {
      id: "fb_03",
      category: "Packaging",
      sentiment: "Neutral",
      product: "Cellular Hydration",
      rating: 4,
      text: "The stick packs are great for my gym bag, but the cardboard box tear-strip tore unevenly on first opening.",
      actionTaken: "Upgraded outer carton perforation line and reinforced tear-notch on box."
    },
    {
      id: "fb_04",
      category: "Product Understanding",
      sentiment: "Constructive",
      product: "Deep Recovery",
      rating: 5,
      text: "Was confused if I should take this every night or only on training days. The email on Day 3 cleared it up.",
      actionTaken: "Added explicit 'Daily Evening Protocol' callout directly on front canister label."
    }
  ]
};
