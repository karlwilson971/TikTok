# UNIT ECONOMICS & INVENTORY ENGINE

**System Role:** Contribution Margin Waterfall, LTV:CAC Forecaster, Replenishment Inventory Coverage & Reorder Point Calculator.

---

## 1. Unit Economics Waterfall Breakdown

For every product sold, the system tracks real-time net contribution margin to ensure commercial health:

```
┌─────────────────────────────────────────────────────────────┬───────────┬────────┐
│ FINANCIAL WATERFALL COMPONENT                               │ AMOUNT    │ % MSRP │
├─────────────────────────────────────────────────────────────┼───────────┼────────┤
│ Retail Selling Price (MSRP)                                 │ $44.99    │ 100.0% │
│ - Sales Tax / VAT (Included or pass-through buffer)         │ ($0.00)   │   0.0% │
│ - Product Formulation & Raw Ingredients (COGS)              │ ($6.50)   │  14.4% │
│ - Packaging (Matte canister, scoop, induction seal)         │ ($1.80)   │   4.0% │
│ - Pick, Pack & Warehouse Fulfilment                         │ ($3.20)   │   7.1% │
│ - Merchant Payment Processing (Stripe / Shopify 2.9% + 30¢) │ ($1.60)   │   3.6% │
│ - Domestic Shipping Subsidy                                 │ ($3.50)   │   7.8% │
│ - Creator / Affiliate Commission (Average 15%)              │ ($6.75)   │  15.0% │
│ - Blended Customer Acquisition Ad Cost                      │ ($6.80)   │  15.1% │
│ - Estimated Returns / Damaged Goods Reserve (0.8%)          │ ($0.36)   │   0.8% │
├─────────────────────────────────────────────────────────────┼───────────┼────────┤
│ NET CONTRIBUTION MARGIN                                     │ $14.48    │  32.2% │
└─────────────────────────────────────────────────────────────┴───────────┴────────┘
```

---

## 2. Customer Lifetime Value (LTV) & Ratio Modeling

- **Blended CAC:** $\$22.40$
- **Month 1 GMV (Order 1):** $\$58.00$ ($32.2\%$ Contribution Margin = $\$18.68$)
- **Month 2 Renewal (68% Retention):** $\$42.50$ (No incremental ad spend = $\$24.80$ Margin)
- **Month 3 Renewal (58% Retention):** $\$42.50$ (No incremental ad spend = $\$24.80$ Margin)
- **6-Month Realized LTV:** $\$164.00$
- **6-Month Net Cumulative Contribution Margin:** $\$68.28$
- **LTV : CAC Ratio:** **$7.32 : 1$** (Healthy, sustainable business model).

---

## 3. Inventory Forecasting & Safety Stock Engine

The inventory engine calculates daily depletion velocity to trigger automated reorder alerts:

$$\text{Weeks of Cover} = \frac{\text{Current Warehouse Stock (Units)}}{\text{7-Day Moving Average Daily Sales} \times 7}$$

### Operational Status Triggers:
- 🟢 **HEALTHY (6 – 12 Weeks):** Normal inventory velocity.
- 🟡 **REORDER RECOMMENDED (4 – 6 Weeks):** Initiate supplier purchase order based on lead time.
- 🔴 **LOW STOCK WARNING (< 4 Weeks):** Expedite production; throttle non-essential ad spend.
- 🔵 **OVERSTOCK WARNING (> 16 Weeks):** Create seasonal stack bundle incentives to clear aging inventory before expiry risk.
