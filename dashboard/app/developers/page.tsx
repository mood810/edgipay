import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Developers · Edgipay',
};

export default function DevelopersPage() {
  return (
    <>
<div className="page-head"><div><div className="eyebrow">EDGIPAY / WORKSPACE</div><h1>Developers</h1><p>Everything you need to integrate Edgipay into your application.</p></div><div className="actions"><Link className="btn" href="/developer-logs">View logs</Link><Link className="btn primary" href="/api-keys">＋ Create API key</Link></div></div>
<div className="notice" style={{ marginBottom: '20px' }}><strong>You&apos;re in test mode.</strong> Test API keys and simulated transactions do not move real money. Switch to live mode only after your business and payment integrations are approved.</div>
<div className="grid-2"><div className="panel"><div className="panel-head"><div><div className="panel-title">Quick start</div><div className="panel-sub">Make your first API request</div></div><span className="status active">Ready</span></div><div className="panel-body"><div style={{ display: 'flex', gap: '12px', marginBottom: '20px' }}><div className="stat-icon">1</div><div><strong>Create an API key</strong><div className="panel-sub">Use a test key while developing.</div><Link href="/api-keys" style={{ display: 'inline-block', marginTop: '8px', color: 'var(--green-dark)', fontWeight: '700', fontSize: '12px' }}>Manage API keys →</Link></div></div><div style={{ display: 'flex', gap: '12px', marginBottom: '20px' }}><div className="stat-icon">2</div><div><strong>Create a payment</strong><div className="panel-sub">Send a request to the payments endpoint.</div><Link href="#" data-toast="API reference opened in demo mode" style={{ display: 'inline-block', marginTop: '8px', color: 'var(--green-dark)', fontWeight: '700', fontSize: '12px' }}>Read API reference →</Link></div></div><div style={{ display: 'flex', gap: '12px' }}><div className="stat-icon">3</div><div><strong>Listen for webhooks</strong><div className="panel-sub">Receive asynchronous payment status updates.</div><Link href="/webhooks" style={{ display: 'inline-block', marginTop: '8px', color: 'var(--green-dark)', fontWeight: '700', fontSize: '12px' }}>Configure webhooks →</Link></div></div></div></div>
<div className="panel"><div className="panel-head"><div><div className="panel-title">API health</div><div className="panel-sub">Last 24 hours · demo metrics</div></div><span className="status active">Operational</span></div><div className="panel-body"><div className="detail-row"><span>API availability</span><strong>99.98%</strong></div><div className="detail-row"><span>Average latency</span><strong>142 ms</strong></div><div className="detail-row"><span>Requests</span><strong>18,420</strong></div><div className="detail-row"><span>Error rate</span><strong>0.12%</strong></div><div style={{ marginTop: '18px' }}><Link href="/developer-logs" className="btn">View API logs</Link></div></div></div></div>
<div className="panel"><div className="panel-head"><div><div className="panel-title">API request example</div><div className="panel-sub">Create a payment using the Edgipay REST API</div></div><button className="btn small" data-copy="curl -X POST https://api.edgipay.com/v1/payments -H 'Authorization: Bearer $EDGIPAY_SECRET_KEY' -H 'Content-Type: application/json'">Copy cURL</button></div><div className="panel-body"><pre style={{ margin: '0', whiteSpace: 'pre-wrap', color: '#34443a', font: '12px/1.8 ui-monospace,monospace' }}>{`curl -X POST https://api.edgipay.com/v1/payments \\
  -H "Authorization: Bearer $EDGIPAY_SECRET_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{ "amount": 25000, "currency": "UGX", "method": "mobile_money" }'`}</pre></div></div>
    </>
  );
}
