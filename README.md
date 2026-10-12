# Edgipay Dashboard (Next.js)

A modern, production-grade Next.js application migrated from static HTML/CSS prototype to pure Next.js with App Router, TypeScript, and React components.

## Architecture & Structure

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Language**: TypeScript
- **Styling**: Native CSS system with responsive design and theme variables
- **State & Interactions**: Client-side interactive toasts, copy-to-clipboard, responsive mobile navigation

### Routes

- `/` – Overview dashboard metrics and recent payments
- `/payments` – Payments list with search and filtering
- `/payment-detail` & `/payments/:paymentId` – Detailed inspection of payment timeline and customer data
- `/customers` – Customer management and lifetime value
- `/payment-links` – Payment links creation and metrics
- `/refunds` – Refund management and status tracking
- `/payouts` – Bank & mobile money payout tracking
- `/balances` – Currency balances and reserve health
- `/settlements` – Batch settlement reconciliation
- `/developers` – Developer integration overview and quick start
- `/developer-logs` – Live API request logs and response inspect
- `/webhooks` – Webhook endpoint management and event delivery
- `/api-keys` – API key lifecycle management (live & test keys)
- `/settings` – Business profile and notification preferences

## Getting Started

```bash
# Install dependencies
npm install

# Run the development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```
