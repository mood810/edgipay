import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'API keys · Edgipay',
};

export default function ApiKeysPage() {
  return (
    <>
<div className="page-head"><div><div className="eyebrow">EDGIPAY / WORKSPACE</div><h1>API keys</h1><p>Create and manage credentials used by your server-side integrations.</p></div><div className="actions"><button className="btn" data-toast="Key rotation flow opened in demo mode">Rotate key</button></div></div><div className="notice" style={{ marginBottom: '20px' }}><strong>Keep secret keys private.</strong> Never expose a secret key in browser code, public repositories, or mobile app bundles. Rotate keys immediately if you suspect they have been compromised.</div><div className="panel"><div className="panel-head"><div><div className="panel-title">API keys</div><div className="panel-sub">Only key prefixes and masked values are displayed after creation.</div></div><div className="right"><div className="search"><input placeholder="Search..." aria-label="Search table" /></div><button className="btn primary" data-toast="New test API key created in demo mode">＋ Create key</button></div></div><div className="table-wrap"><table><thead><tr><th>Name</th><th>Key</th><th>Environment</th><th>Last used</th><th></th></tr></thead><tbody><tr><td><div className="primary-cell">Development key</div><span className="secondary">Created Oct 02, 2026</span></td><td><span className="mono">eg_test_••••••••••••7K2Q</span></td><td>Test</td><td>Oct 12, 2026</td><td><button className="btn small" data-toast="Key details opened in demo mode">Details</button></td></tr><tr><td><div className="primary-cell">Server integration</div><span className="secondary">Created Sep 18, 2026</span></td><td><span className="mono">eg_test_••••••••••••P9W4</span></td><td>Test</td><td>Oct 11, 2026</td><td><button className="btn small" data-toast="Key details opened in demo mode">Details</button></td></tr></tbody></table></div><div className="table-foot"><span>Showing 1–2 of 2 records</span><div className="pagination"><button>‹</button><button className="current">1</button><button>›</button></div></div></div><div className="panel"><div className="panel-head"><div><div className="panel-title">Environment</div><div className="panel-sub">Use separate credentials for test and live traffic.</div></div></div><div className="panel-body"><div className="detail-row"><span>Test mode</span><strong>Enabled · eg_test_…</strong></div><div className="detail-row"><span>Live mode</span><strong>Not activated</strong></div><div className="help" style={{ marginTop: '12px' }}>Live keys should only be enabled after account verification, provider configuration, and production readiness checks.</div></div></div>
    </>
  );
}
