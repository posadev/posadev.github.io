import React from 'react';
import { cn } from '@/lib/utils';

interface WinProps {
  title: string;
  footer?: React.ReactNode;
  dark?: boolean;
  showScrollbar?: boolean;
  className?: string;
  bodyClassName?: string;
  children: React.ReactNode;
}

const Win: React.FC<WinProps> = ({
  title, footer, dark, showScrollbar, className, bodyClassName, children
}) => (
  <div className={cn('win', dark && 'dark', className)}>
    <div className="win-title">
      <span className="win-close" aria-hidden="true" />
      <span className="win-name">{title}</span>
      <span className="win-zoom" aria-hidden="true" />
    </div>
    <div className={cn('win-body', bodyClassName)}>
      {children}
    </div>
    {footer && <div className="win-foot">{footer}</div>}
    {showScrollbar && (
      <div className="win-scrollbar" aria-hidden="true">
        <div className="win-arr">▲</div>
        <div className="win-thumb" />
        <div className="win-arr dn">▼</div>
      </div>
    )}
  </div>
);

export default Win;