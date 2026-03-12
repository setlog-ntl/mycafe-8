'use client';

import { useEffect, useRef } from 'react';
import type { SiteConfig } from '@/lib/config';

interface Props {
  config: SiteConfig;
}

export function AboutSection({ config }: Props) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const revealEls = sectionRef.current?.querySelectorAll<HTMLElement>('.reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    revealEls?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const stories = config.aboutStories ?? [
    '온기 로스터리는 2019년 연남동에서 시작한 스페셜티 커피 로스터리입니다. 직접 생두를 산지에서 선별·수입하고, 매일 아침 소량씩 로스팅해 그날 가장 신선한 커피를 제공합니다.',
    '에티오피아, 콜롬비아, 과테말라 등 다양한 산지의 원두를 직거래로 들여와 각 원두가 가진 고유한 풍미를 최대한 살린 로스팅 프로파일을 연구합니다.',
  ];

  const tags = config.aboutTags ?? ['#스페셜티', '#직접로스팅', '#연남동', '#산지직거래', '#싱글오리진'];

  const values = config.aboutValues ?? [
    { icon: '🌱', title: '산지 직거래', desc: '에티오피아·콜롬비아·과테말라 농장과 직접 계약, 공정한 거래를 지향합니다.' },
    { icon: '🔥', title: '매일 직접 로스팅', desc: '소량 배치 로스팅으로 항상 최고 신선도의 원두를 제공합니다.' },
    { icon: '☕', title: '커피 교육', desc: '주말 원두 테이스팅 클래스와 홈브루잉 워크숍을 정기 운영합니다.' },
  ];

  return (
    <section className="section about-section" id="about" ref={sectionRef}>
      <div className="section-inner">
        <p className="section-label reveal">우리 가게</p>
        <h2 className="section-title reveal">커피 한 잔에 담긴 철학</h2>

        <div className="about-grid">
          <div className="reveal">
            {stories.map((story, i) => (
              <p key={i} className="about-story">{story}</p>
            ))}
            <div className="about-tags">
              {tags.map((tag, i) => (
                <span key={i} className="about-tag">{tag}</span>
              ))}
            </div>
          </div>
          <div className="about-values reveal">
            {values.map((v, i) => (
              <div key={i} className="about-value-card">
                <span className="about-value-icon">{v.icon}</span>
                <div>
                  <p className="about-value-title">{v.title}</p>
                  <p className="about-value-desc">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
