import type { SiteConfig } from '@/lib/config';

interface Props {
  config: SiteConfig;
}

export function Footer({ config }: Props) {
  const year = new Date().getFullYear();

  return (
    <footer>
      <p className="footer-logo">{config.name}</p>
      {config.nameEn && (
        <p className="footer-logo-sub">{config.nameEn} · {config.footerTagline ?? 'Specialty Coffee'}</p>
      )}
      {(config.address || config.phone || config.businessNumber) && (
        <p className="footer-info">
          {config.address && <>{config.address}<br /></>}
          {config.phone && <>📞 {config.phone}</>}
          {config.phone && config.businessNumber && ' · '}
          {config.businessNumber && <>사업자등록번호 {config.businessNumber}</>}
          {(config.phone || config.businessNumber) && config.hoursNote && <><br />{config.hoursNote}</>}
        </p>
      )}
      <div className="footer-divider" />
      <p className="footer-powered">
        이 페이지는{' '}
        <a
          href="https://linkmap.biz/sites/new"
          target="_blank"
          rel="noopener noreferrer"
        >
          Linkmap
        </a>
        으로 만들었습니다
      </p>
      <p className="footer-copy">&copy; {year} {config.name}. All rights reserved.</p>
    </footer>
  );
}
