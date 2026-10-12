'use client';

import { usePathname } from 'next/navigation';
import { useToast } from './ToastProvider';

interface TopbarProps {
  onToggleMenu: () => void;
}

export default function Topbar({ onToggleMenu }: TopbarProps) {
  const pathname = usePathname();
  const { showToast } = useToast();

  const getBreadcrumb = () => {
    if (pathname === '/' || pathname === '/dashboard') return 'Overview';
    if (pathname === '/payments') return 'Payments';
    if (pathname === '/payment-detail' || pathname.startsWith('/payments/')) return 'Payments / pay_8f2a91c4';
    if (pathname === '/customers') return 'Customers';
    if (pathname === '/payment-links') return 'Payment links';
    if (pathname === '/refunds') return 'Refunds';
    if (pathname === '/payouts') return 'Payouts';
    if (pathname === '/balances') return 'Balances';
    if (pathname === '/settlements') return 'Settlements';
    if (pathname === '/developers') return 'Developers';
    if (pathname === '/developer-logs' || pathname === '/developers/logs') return 'API logs';
    if (pathname === '/webhooks' || pathname === '/developers/webhooks') return 'Webhooks';
    if (pathname === '/api-keys' || pathname === '/developers/api-keys') return 'API keys';
    if (pathname === '/settings') return 'Settings';
    return 'Overview';
  };

  return (
    <header className="topbar">
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <button 
          type="button"
          className="icon-btn mobile-menu" 
          aria-label="Open menu" 
          onClick={onToggleMenu}
        >
          ☰
        </button>
        <div className="crumb">
          Workspace <span style={{ margin: '0 7px', color: '#c1cac4' }}>/</span> <b>{getBreadcrumb()}</b>
        </div>
      </div>
      <div className="top-actions">
        <span className="env">TEST MODE</span>
        <button 
          type="button"
          className="icon-btn" 
          aria-label="Notifications"
          onClick={() => showToast('No new notifications')}
        >
          ♧
        </button>
        <div className="avatar" style={{ width: '30px', height: '30px' }}>ED</div>
      </div>
    </header>
  );
}
