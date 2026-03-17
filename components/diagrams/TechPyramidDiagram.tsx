import React, { useContext } from 'react';
import { LanguageContext } from '../../App';

const TechPyramidDiagram: React.FC = () => {
	const { lang } = useContext(LanguageContext);
	return (
		<div className="w-full bg-[#0a0a0a] glass-card rounded-3xl p-8 md:p-12 shadow-[0_0_30px_rgba(139,92,246,0.15)] border border-slate-800 font-sans">
			<div className="text-3xl font-extrabold text-slate-100 mb-2">
				{lang === 'ko' ? 'AX 학과 기술 체계 피라미드 ' : 'AX Tech Pyramid '}— <span className="text-violet-400 text-gradient">Foundation AI</span> {lang === 'ko' ? '중심' : 'Focus'}
			</div>
			<div className="text-sm text-slate-400 mb-10 border-l-4 border-violet-500 pl-4 py-1">
				{lang === 'ko'
					? 'AX 학과는 차세대 AI 기술의 근간이 되는 파운데이션 및 프론티어 AI 모델 계층에 집중합니다.'
					: 'The Dept. of AX focuses on the core layers that form the foundation of next-generation Foundation AI.'}
			</div>

			<div className="relative overflow-hidden flex justify-center py-10">
				<svg width="100%" height="auto" viewBox="0 0 1080 740" className="max-w-4xl drop-shadow-[0_0_15px_rgba(139,92,246,0.3)]">
					<defs>
						<linearGradient id="ax-c1" x1="0%" y1="0%" x2="100%" y2="0%">
							<stop offset="0%" style={{ stopColor: '#0f172a' }} /><stop offset="100%" style={{ stopColor: '#1e1b4b' }} />
						</linearGradient>
						<linearGradient id="ax-c2" x1="0%" y1="0%" x2="100%" y2="0%">
							<stop offset="0%" style={{ stopColor: '#1e3a8a' }} /><stop offset="100%" style={{ stopColor: '#4c1d95' }} />
						</linearGradient>
						<linearGradient id="ax-c3" x1="0%" y1="0%" x2="100%" y2="0%">
							<stop offset="0%" style={{ stopColor: '#3b82f6' }} /><stop offset="100%" style={{ stopColor: '#8b5cf6' }} />
						</linearGradient>
						<linearGradient id="ax-c4" x1="0%" y1="0%" x2="100%" y2="0%">
							<stop offset="0%" style={{ stopColor: '#8b5cf6' }} /><stop offset="100%" style={{ stopColor: '#c084fc' }} />
						</linearGradient>
						<linearGradient id="ax-c5" x1="0%" y1="0%" x2="100%" y2="0%">
							<stop offset="0%" style={{ stopColor: '#c084fc' }} /><stop offset="100%" style={{ stopColor: '#e879f9' }} />
						</linearGradient>
						<linearGradient id="ax-a1" x1="0%" y1="0%" x2="100%" y2="0%">
							<stop offset="0%" style={{ stopColor: '#1e293b' }} /><stop offset="100%" style={{ stopColor: '#334155' }} />
						</linearGradient>
						<linearGradient id="ax-a2" x1="0%" y1="0%" x2="100%" y2="0%">
							<stop offset="0%" style={{ stopColor: '#0f172a' }} /><stop offset="100%" style={{ stopColor: '#1e293b' }} />
						</linearGradient>
						<filter id="ax-shadow">
							<feDropShadow dx="0" dy="4" stdDeviation="6" floodOpacity="0.4" floodColor="#000" />
						</filter>
						<filter id="ax-glow">
							<feGaussianBlur stdDeviation="3" result="blur" />
							<feMerge>
								<feMergeNode in="blur" />
								<feMergeNode in="SourceGraphic" />
							</feMerge>
						</filter>
					</defs>

					{/* FOCUS AREA bracket on the right */}
					<rect x="15" y="260" width="3" height="410" rx="1.5" fill="#8b5cf6" filter="url(#ax-glow)" />
					<text x="12" y="468" fill="#c4b5fd" fontSize="14" fontWeight="800" transform="rotate(-90, 12, 468)" letterSpacing="3">
						{lang === 'ko' ? '초거대 AI 핵심 파운데이션' : 'FOUNDATION AI CORE'}
					</text>

					{/* Focus area background highlight */}
					<rect x="100" y="255" width="580" height="420" rx="16" fill="rgba(139,92,246,0.05)" stroke="rgba(139,92,246,0.2)" strokeWidth="1" />

					{/* Application layers */}
					<polygon points="420,50 490,100 350,100" fill="url(#ax-a1)" stroke="#475569" strokeWidth="1.5" filter="url(#ax-shadow)" />
					<text x="420" y="88" textAnchor="middle" fill="#cbd5e1" fontSize="12" fontWeight="700">{lang === 'ko' ? '인간중심/UX' : 'Human-Centered/UX'}</text>

					<polygon points="420,105 530,190 310,190" fill="url(#ax-a2)" stroke="#334155" strokeWidth="1.5" filter="url(#ax-shadow)" />
					<text x="420" y="160" textAnchor="middle" fill="#94a3b8" fontSize="13" fontWeight="700">{lang === 'ko' ? 'AX 도메인 응용' : 'AX Domain App'}</text>

					{/* Divider */}
					<line x1="250" y1="230" x2="590" y2="230" stroke="#8b5cf6" strokeWidth="2" strokeDasharray="6,6" filter="url(#ax-glow)" opacity="0.8" />
					<rect x="350" y="218" width="140" height="24" rx="12" fill="#4c1d95" border="1px solid #8b5cf6" />
					<text x="420" y="235" textAnchor="middle" fill="#d8b4fe" fontSize="10" fontWeight="800" letterSpacing="2">CORE BEGINS ▼</text>

					{/* Core layers */}
					{[
						{
							p: "420,260 570,340 270,340", grad: "url(#ax-c5)",
							title: lang === 'ko' ? "차세대 프론티어 AI" : "Next-Gen Frontier AI",
							label1: lang === 'ko' ? "AGI, 뉴로심볼릭 AI, 월드 모델" : "AGI, Neurosymbolic, World Model",
							label2: lang === 'ko' ? "개인화 비서, 에이전틱 AI" : "Personal Assistants, Agentic AI",
							y: 312, ly: 305
						},
						{
							p: "420,345 610,425 230,425", grad: "url(#ax-c4)",
							title: lang === 'ko' ? "초거대 AI 파운데이션 모델" : "Foundation AI Models",
							label1: lang === 'ko' ? "LLM/LMM 설계, 멀티모달 학습" : "LLM/LMM Design, Multimodal",
							label2: lang === 'ko' ? "생성형 AI, 파라미터 최적화(PEFT)" : "Gen-AI, Parameter Optimization",
							y: 398, ly: 390
						},
						{
							p: "420,430 650,510 190,510", grad: "url(#ax-c3)",
							title: lang === 'ko' ? "초거대 시스템 및 분산 MLOps" : "Large-Scale Systems & MLOps",
							label1: lang === 'ko' ? "대규모 분산 학습 파이프라인" : "Large-Scale Dist Pipeline",
							label2: lang === 'ko' ? "AI 클러스터 운영, 초거대 서빙" : "AI Cluster Ops, LLM Serving",
							y: 483, ly: 475
						},
						{
							p: "420,515 690,595 150,595", grad: "url(#ax-c2)",
							title: lang === 'ko' ? "AI 원천 플랫폼 구축" : "AI Core Platform",
							label1: lang === 'ko' ? "데이터 파이프라인, AI 가속기(NPU)" : "Data Pipeline, AI Accel",
							label2: lang === 'ko' ? "분산 프레임워크 설계" : "Dist Framework Design",
							y: 568, ly: 560
						},
						{
							p: "420,600 720,680 120,680", grad: "url(#ax-c1)",
							title: lang === 'ko' ? "딥러닝 수학 및 통계" : "DL Math & Stat Found.",
							label1: lang === 'ko' ? "텐서 대수, 확률적 생성 모델" : "Tensor Algebra, Prob Gen Models",
							label2: lang === 'ko' ? "손실 함수 최적화 이론, 정보이론" : "Loss Optimization, Info Theory",
							y: 652, ly: 645
						}
					].map((layer, idx) => (
						<React.Fragment key={idx}>
							<polygon points={layer.p} fill={layer.grad} stroke="rgba(0,0,0,0.4)" strokeWidth="1.5" filter="url(#ax-shadow)" />
							<text x="420" y={layer.y} textAnchor="middle" fill={idx > 2 ? "white" : "#0f172a"} fontSize="14" fontWeight="800">{layer.title}</text>
							<line x1={layer.p.split(' ')[1].split(',')[0]} y1={layer.ly} x2="710" y2={layer.ly} stroke="#8b5cf6" strokeWidth="1.5" strokeDasharray="4,4" opacity="0.7" />
							<circle cx={layer.p.split(' ')[1].split(',')[0]} cy={layer.ly} r="3" fill="#c084fc" filter="url(#ax-glow)" />
							<circle cx="710" cy={layer.ly} r="3" fill="#c084fc" filter="url(#ax-glow)" />
							<text x="730" y={layer.ly - 7} fill="#c4b5fd" fontSize="14" fontWeight="700">{layer.label1}</text>
							<text x="730" y={layer.ly + 14} fill="#94a3b8" fontSize="13" fontWeight="500">{layer.label2}</text>
						</React.Fragment>
					))}

					{/* Legend */}
					<rect x="730" y="700" width="14" height="14" rx="3" fill="#8b5cf6" />
					<text x="750" y="712" fill="#cbd5e1" fontSize="12" fontWeight="600">{lang === 'ko' ? 'AX Core & Foundation (초거대 AI 인재 양성)' : 'AX Core & Foundation (Foundation AI Talent)'}</text>
					<rect x="1000" y="700" width="14" height="14" rx="3" fill="#334155" />
					<text x="1020" y="712" fill="#64748b" fontSize="12">
						{lang === 'ko' ? '응용 영역' : 'Application'}
					</text>
				</svg>
			</div>
		</div>
	);
};

export default TechPyramidDiagram;
