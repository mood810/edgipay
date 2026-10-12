Edgipay Dashboard HTML Prototype

Pages:
- index.html                 Overview (/)
- payments.html              Payments (/payments)
- payment-detail.html        Payment detail (/payments/:paymentId)
- customers.html             Customers (/customers)
- payment-links.html         Payment links (/payment-links)
- refunds.html               Refunds (/refunds)
- payouts.html               Payouts (/payouts)
- developers.html            Developer overview (/developers)
- developer-logs.html        API logs (/developers/logs)
- webhooks.html              Webhooks (/developers/webhooks)
- api-keys.html              API keys (/developers/api-keys)
- balances.html              Balances (/balances)
- settlements.html           Settlements (/settlements)
- settings.html              Settings (/settings)

Open index.html in a browser. Navigation uses relative links, so the prototype works
directly from the extracted folder. For clean URLs on a web server, configure route
rewrites to map each route to its corresponding HTML file.

This is a static UI prototype. Data is illustrative; there is no live payment processing,
authentication, API connectivity, or persistent storage. The supplied logo is in assets/.
