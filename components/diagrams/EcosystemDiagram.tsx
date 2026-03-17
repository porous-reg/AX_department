import React, { useContext } from 'react';
import { LanguageContext } from '../../App';

const EcosystemDiagram: React.FC = () => {
  const { lang } = useContext(LanguageContext);
  return (
    <div className="w-full bg-[#0a0a0a] glass-card rounded-2xl p-6 md:p-12 shadow-xl border border-slate-800 flex justify-center items-center overflow-hidden">
      <svg width="100%" height="auto" viewBox="0 0 1080 740" className="max-w-full">
        <defs>
          <linearGradient id="ax-grad-center" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#0f172a' }} />
            <stop offset="100%" style={{ stopColor: '#1e1b4b' }} />
          </linearGradient>
          <linearGradient id="ax-grad-top" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#4c1d95' }} />
            <stop offset="100%" style={{ stopColor: '#8b5cf6' }} />
          </linearGradient>
          <linearGradient id="ax-grad-left" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#1e3a8a' }} />
            <stop offset="100%" style={{ stopColor: '#3b82f6' }} />
          </linearGradient>
          <linearGradient id="ax-grad-right" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#0891b2' }} />
            <stop offset="100%" style={{ stopColor: '#06b6d4' }} />
          </linearGradient>
          <radialGradient id="ax-core-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" style={{ stopColor: '#8b5cf6', stopOpacity: 0.25 }} />
            <stop offset="60%" style={{ stopColor: '#8b5cf6', stopOpacity: 0.1 }} />
            <stop offset="100%" style={{ stopColor: '#8b5cf6', stopOpacity: 0 }} />
          </radialGradient>
          <filter id="ax-shadow">
            <feDropShadow dx="0" dy="8" stdDeviation="12" floodOpacity="0.3" floodColor="#000" />
          </filter>
          <filter id="ax-glow-ring">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Background glow centered on KAIST */}
        <ellipse cx="540" cy="380" rx="400" ry="350" fill="url(#ax-core-glow)" />

        {/* Connecting lines - glowing */}
        <line x1="540" y1="220" x2="290" y2="555" stroke="#3b82f6" strokeWidth="2" strokeDasharray="6,6" filter="url(#ax-glow-ring)" opacity="0.6" />
        <line x1="540" y1="220" x2="790" y2="555" stroke="#8b5cf6" strokeWidth="2" strokeDasharray="6,6" filter="url(#ax-glow-ring)" opacity="0.6" />
        <line x1="290" y1="590" x2="790" y2="590" stroke="#06b6d4" strokeWidth="2" strokeDasharray="6,6" filter="url(#ax-glow-ring)" opacity="0.6" />

        {/* Center: KAIST AX Core & Foundation */}
        <circle cx="540" cy="380" r="105" fill="none" stroke="#8b5cf6" strokeWidth="2" strokeDasharray="4,6" opacity="0.8" filter="url(#ax-glow-ring)" />
        <circle cx="540" cy="380" r="120" fill="none" stroke="#3b82f6" strokeWidth="1" opacity="0.3" />
        <rect x="430" y="330" width="220" height="100" rx="16" fill="url(#ax-grad-center)" filter="url(#ax-shadow)" stroke="#4c1d95" strokeWidth="1.5" />
        <rect x="470" y="330" width="140" height="3" rx="1.5" fill="#8b5cf6" filter="url(#ax-glow-ring)" />
        <text x="540" y="362" textAnchor="middle" fill="white" fontSize="24" fontWeight="900" letterSpacing="1">
          {lang === 'ko' ? '카이스트' : 'KAIST'}
        </text>
        <text x="540" y="388" textAnchor="middle" fill="#c4b5fd" fontSize="14" fontWeight="700" letterSpacing="3">
          {lang === 'ko' ? 'AX 학과' : 'AX DEPARTMENT'}
        </text>
        <text x="540" y="415" textAnchor="middle" fill="#93c5fd" fontSize="11" fontWeight="500" letterSpacing="1.5">
          {lang === 'ko' ? 'AI 전환 핵심 리더 양성' : 'AI eXperience Core'}
        </text>

        {/* Top node: AI Transformation Models */}
        <circle cx="540" cy="150" r="80" fill="url(#ax-grad-top)" filter="url(#ax-shadow)" />
        <g transform="translate(540,128)">
          <path d="M-15 10 L0 -15 L15 10 Z" fill="none" stroke="rgba(255,255,255,0.9)" strokeWidth="2" />
          <circle cx="0" cy="-15" r="3" fill="#e9d5ff" filter="url(#ax-glow-ring)" />
          <circle cx="-15" cy="10" r="3" fill="#e9d5ff" />
          <circle cx="15" cy="10" r="3" fill="#e9d5ff" />
          <line x1="-7.5" y1="-2.5" x2="7.5" y2="-2.5" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />
        </g>
        <text x="540" y="162" textAnchor="middle" fill="white" fontSize="14" fontWeight="700">{lang === 'ko' ? '초거대 AI' : 'Foundation AI'}</text>
        <text x="540" y="180" textAnchor="middle" fill="#ddd6fe" fontSize="12" fontWeight="500">{lang === 'ko' ? '모델 설계자' : 'Model Designers'}</text>

        <text x="700" y="128" fill="#c4b5fd" fontSize="18" fontWeight="800">{lang === 'ko' ? '차세대 AI 시대를 이끌' : 'Leading the Next-Gen'}</text>
        <text x="700" y="152" fill="#a78bfa" fontSize="18" fontWeight="800">{lang === 'ko' ? '초거대 AI 핵심 인재' : 'Foundation AI Talent'}</text>
        <text x="700" y="174" fill="#94a3b8" fontSize="13" fontWeight="400">
          {lang === 'ko' ? 'LLM, 멀티모달, 에이전틱 AI 연구' : 'LLM, Multimodal, Agentic AI Research'}
        </text>

        {/* Bottom-left node: Industry Impact */}
        <circle cx="280" cy="580" r="80" fill="url(#ax-grad-left)" filter="url(#ax-shadow)" />
        <g transform="translate(280,555)">
          <rect x="-14" y="-12" width="12" height="24" rx="2" fill="none" stroke="rgba(255,255,255,0.8)" strokeWidth="1.5" />
          <rect x="2" y="-4" width="12" height="16" rx="2" fill="none" stroke="rgba(255,255,255,0.8)" strokeWidth="1.5" />
          <circle cx="-8" cy="-5" r="1.5" fill="#bfdbfe" />
          <circle cx="-8" cy="2" r="1.5" fill="#bfdbfe" />
          <circle cx="8" cy="3" r="1.5" fill="#bfdbfe" />
        </g>
        <text x="280" y="600" textAnchor="middle" fill="white" fontSize="14" fontWeight="700">{lang === 'ko' ? '산업/사회 AX' : 'Industry AX'}</text>
        <text x="280" y="618" textAnchor="middle" fill="#bfdbfe" fontSize="12" fontWeight="500">{lang === 'ko' ? '혁신 리더' : 'Innovation Leaders'}</text>

        <text x="30" y="508" fill="#60a5fa" fontSize="17" fontWeight="700">{lang === 'ko' ? 'AI 시대의 한계 돌파' : 'Breaking the Limits'}</text>
        <text x="30" y="532" fill="#3b82f6" fontSize="17" fontWeight="700">{lang === 'ko' ? '산업 혁신을 주도할 엔지니어' : 'Leading Industry Engineers'}</text>
        <text x="30" y="556" fill="#94a3b8" fontSize="13" fontWeight="400">{lang === 'ko' ? 'AI 시스템 활용 및 사회적 융합' : 'AI Systems App & Social Integration'}</text>

        {/* Bottom-right node: Infrastructure/Systems */}
        <circle cx="800" cy="580" r="80" fill="url(#ax-grad-right)" filter="url(#ax-shadow)" />
        <g transform="translate(800,555)">
          <path d="M-15 0 Q 0 -15 15 0 T -15 0" fill="none" stroke="rgba(255,255,255,0.8)" strokeWidth="2" />
          <rect x="-10" y="0" width="20" height="12" rx="1" fill="none" stroke="rgba(255,255,255,0.8)" strokeWidth="1.5" />
          <line x1="-4" y1="6" x2="4" y2="6" stroke="#a5f3fc" strokeWidth="2" strokeLinecap="round" />
        </g>
        <text x="800" y="600" textAnchor="middle" fill="white" fontSize="14" fontWeight="700">{lang === 'ko' ? 'AI 서비스/시스템' : 'AI Services/Systems'}</text>
        <text x="800" y="618" textAnchor="middle" fill="#a5f3fc" fontSize="12" fontWeight="500">{lang === 'ko' ? '개발자' : 'Developers'}</text>

        <text x="890" y="520" fill="#22d3ee" fontSize="17" fontWeight="700">{lang === 'ko' ? '지속 가능한 AI MLOps' : 'Sustainable AI MLOps'}</text>
        <text x="890" y="544" fill="#06b6d4" fontSize="17" fontWeight="700">{lang === 'ko' ? '인프라 구축과 소프트웨어 역량' : 'Infra & Software Ops'}</text>
        <text x="890" y="568" fill="#94a3b8" fontSize="13">
          {lang === 'ko' ? '초거대 AI 인프라 최적화' : 'Foundation AI Infra Optimization'}
        </text>

        {/* Bottom tagline */}
        <rect x="340" y="695" width="400" height="36" rx="18" fill="rgba(15,23,42,0.8)" stroke="#3b82f6" strokeWidth="1" filter="url(#ax-shadow)" />
        <text x="540" y="719" textAnchor="middle" fill="#93c5fd" fontSize="14" fontWeight="700" letterSpacing="0.5">
          {lang === 'ko' ? '세상을 바꾸는 AI 혁신, 그 중심에 AX가 있습니다' : 'AI Innovation that Changes the World, Centered at AX'}
        </text>
      </svg>
    </div>
  );
};

export default EcosystemDiagram;
