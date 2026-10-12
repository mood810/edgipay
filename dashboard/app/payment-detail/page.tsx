import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Payment details · Edgipay',
};

export default function PaymentDetailPage() {
  return (
    <>
<div className="page-head"><div><div className="eyebrow">EDGIPAY / WORKSPACE</div><h1>Payment details</h1><p>Inspect the status, customer, and event history for a single payment.</p></div><div className="actions"><Link href="/payments" className="btn">← All payments</Link><button className="btn" data-toast="Receipt download is a demo action">↓ Receipt</button></div></div>
<div className="grid-2"><div className="panel"><div className="panel-head"><div><div className="panel-title">Payment overview</div><div className="panel-sub mono">pay_8f2a91c4</div></div><span className="status succeeded">Succeeded</span></div><div className="panel-body"><div className="eyebrow">AMOUNT PAID</div><div className="detail-amount">UGX 125,000</div><div className="detail-row"><span>Payment method</span><strong>MTN Mobile Money</strong></div><div className="detail-row"><span>Created</span><strong>Oct 12, 2026, 14:32:08 EAT</strong></div><div className="detail-row"><span>Completed</span><strong>Oct 12, 2026, 14:32:41 EAT</strong></div><div className="detail-row"><span>Reference</span><strong className="mono">ord_10082</strong></div><div className="detail-row"><span>Live / test</span><strong><span className="status test">Test mode</span></strong></div></div></div>
<div className="panel"><div className="panel-head"><div className="panel-title">Customer</div><Link href="/customers" style={{ fontSize: '12px', color: 'var(--green-dark)' }}>View customer →</Link></div><div className="panel-body"><div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '18px' }}><div className="avatar" style={{ width: '42px', height: '42px' }}>AN</div><div><strong>Amina Nakato</strong><span className="secondary">amina@example.com</span></div></div><div className="detail-row"><span>Phone</span><strong>+256 7•• ••• 821</strong></div><div className="detail-row"><span>Customer ID</span><strong className="mono">cus_29ad713e</strong></div><div className="detail-row"><span>Country</span><strong>Uganda</strong></div></div></div></div>
<div className="panel"><div className="panel-head"><div><div className="panel-title">Payment timeline</div><div className="panel-sub">Events recorded for this transaction</div></div></div><div className="panel-body"><div className="detail-row"><span>14:32:08</span><strong style={{ flex: '1', textAlign: 'left', marginLeft: '15px' }}>Payment created <span className="secondary">Request accepted by Edgipay API</span></strong><span className="status succeeded">Complete</span></div><div className="detail-row"><span>14:32:09</span><strong style={{ flex: '1', textAlign: 'left', marginLeft: '15px' }}>Customer authorization requested <span className="secondary">Mobile money prompt sent to customer</span></strong><span className="status succeeded">Complete</span></div><div className="detail-row"><span>14:32:41</span><strong style={{ flex: '1', textAlign: 'left', marginLeft: '15px' }}>Payment confirmed <span className="secondary">Provider callback verified</span></strong><span className="status succeeded">Complete</span></div></div></div>
    </>
  );
}
