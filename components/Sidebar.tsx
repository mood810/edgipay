'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const pathname = usePathname();

  const isCurrent = (href: string) => {
    if (href === '/') {
      return pathname === '/' || pathname === '/dashboard';
    }
    if (href === '/payments') {
      return pathname === '/payments' || pathname.startsWith('/payments/') || pathname === '/payment-detail';
    }
    if (href === '/developer-logs') {
      return pathname === '/developer-logs' || pathname === '/developers/logs';
    }
    if (href === '/webhooks') {
      return pathname === '/webhooks' || pathname === '/developers/webhooks';
    }
    if (href === '/api-keys') {
      return pathname === '/api-keys' || pathname === '/developers/api-keys';
    }
    return pathname === href;
  };

  return (
    <>
      <div 
        className={`sidebar-overlay ${isOpen ? 'active' : ''}`} 
        onClick={onClose} 
      />
      <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
        <Link className="brand" href="/" onClick={onClose}>
          <div className="brand-text">
            <span className="brand-badge">E</span>
            <span>Edgipay</span>
          </div>
        </Link>
        <div className="workspace">Workspace</div>
        <nav className="nav">
          <Link href="/" className={isCurrent('/') ? 'active' : ''} onClick={onClose}>
            <span className="ico">⌂</span>Overview
          </Link>
          <Link href="/payments" className={isCurrent('/payments') ? 'active' : ''} onClick={onClose}>
            <span className="ico">↔</span>Payments
          </Link>
          <Link href="/customers" className={isCurrent('/customers') ? 'active' : ''} onClick={onClose}>
            <span className="ico">♙</span>Customers
          </Link>
          <Link href="/payment-links" className={isCurrent('/payment-links') ? 'active' : ''} onClick={onClose}>
            <span className="ico">↗</span>Payment links
          </Link>
          <Link href="/refunds" className={isCurrent('/refunds') ? 'active' : ''} onClick={onClose}>
            <span className="ico">↩</span>Refunds
          </Link>
          <Link href="/payouts" className={isCurrent('/payouts') ? 'active' : ''} onClick={onClose}>
            <span className="ico">⇢</span>Payouts
          </Link>
          
          <div className="nav-sep"></div>
          <div className="workspace">Finance</div>
          
          <Link href="/balances" className={isCurrent('/balances') ? 'active' : ''} onClick={onClose}>
            <span className="ico">◫</span>Balances
          </Link>
          <Link href="/settlements" className={isCurrent('/settlements') ? 'active' : ''} onClick={onClose}>
            <span className="ico">▤</span>Settlements
          </Link>
          
          <div className="nav-sep"></div>
          <div className="workspace">Developers</div>
          
          <Link href="/developers" className={isCurrent('/developers') ? 'active' : ''} onClick={onClose}>
            <span className="ico">⌘</span>Overview
          </Link>
          <Link href="/developer-logs" className={isCurrent('/developer-logs') ? 'active' : ''} onClick={onClose}>
            <span className="ico">≋</span>API logs
          </Link>
          <Link href="/webhooks" className={isCurrent('/webhooks') ? 'active' : ''} onClick={onClose}>
            <span className="ico">⚡</span>Webhooks
          </Link>
          <Link href="/api-keys" className={isCurrent('/api-keys') ? 'active' : ''} onClick={onClose}>
            <span className="ico">⚿</span>API keys
          </Link>
          
          <div className="nav-sep"></div>
          <Link href="/settings" className={isCurrent('/settings') ? 'active' : ''} onClick={onClose}>
            <span className="ico">⚙</span>Settings
          </Link>
        </nav>
        <div className="side-bottom">
          <div className="profile">
            <div className="avatar">ED</div>
            <div>
              <strong>Edgipay Demo</strong>
              <small>demo@edgipay.com</small>
            </div>
            <span style={{ marginLeft: 'auto', color: '#829087' }}>⌄</span>
          </div>
        </div>
      </aside>
    </>
  );
}
