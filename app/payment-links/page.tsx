import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Payment links · Edgipay',
};

export default function PaymentLinksPage() {
  return (
    <>
<div className="page-head"><div><div className="eyebrow">EDGIPAY / WORKSPACE</div><h1>Payment links</h1><p>Create hosted checkout links and collect payments without building a checkout flow.</p></div><div className="actions"><button className="btn" data-toast="Payment link export prepared">↓ Export</button></div></div><div className="panel"><div className="panel-head"><div><div className="panel-title">Payment links</div><div className="panel-sub">Share a secure payment page with customers</div></div><div className="right"><div className="search"><input placeholder="Search..." aria-label="Search table" /></div><button className="btn primary" data-toast="New payment link form opened in demo mode">＋ Create link</button></div></div><div className="table-wrap"><table><thead><tr><th>Link</th><th>Amount</th><th>URL</th><th>Visits</th><th>Expires</th><th>Status</th></tr></thead><tbody><tr><td><div className="primary-cell">October subscription</div><span className="secondary">plink_2c8f19 · Created Oct 12</span></td><td>UGX 45,000</td><td><span className="mono">edgipay.com/pay/8xQ2m</span></td><td>124</td><td>Oct 31, 2026</td><td><span className="status active">Active</span></td></tr><tr><td><div className="primary-cell">Product launch deposit</div><span className="secondary">plink_19b3e2 · Created Oct 10</span></td><td>UGX 150,000</td><td><span className="mono">edgipay.com/pay/2mA7p</span></td><td>38</td><td>No expiry</td><td><span className="status active">Active</span></td></tr><tr><td><div className="primary-cell">Consultation fee</div><span className="secondary">plink_71d2c8 · Created Oct 08</span></td><td>Customer chooses</td><td><span className="mono">edgipay.com/pay/4vN9k</span></td><td>16</td><td>Oct 20, 2026</td><td><span className="status active">Active</span></td></tr><tr><td><div className="primary-cell">Event ticket</div><span className="secondary">plink_93a0f4 · Created Sep 22</span></td><td>UGX 25,000</td><td><span className="mono">edgipay.com/pay/7kL1d</span></td><td>204</td><td>Sep 30, 2026</td><td><span className="status disabled">Disabled</span></td></tr></tbody></table></div><div className="table-foot"><span>Showing 1–4 of 4 records</span><div className="pagination"><button>‹</button><button className="current">1</button><button>›</button></div></div></div>
    </>
  );
}
