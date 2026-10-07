import React, { useState } from 'react';
import { X, Sparkles, CheckCircle2, TrendingUp, Layers, Cpu, Award, Copy, Check } from 'lucide-react';
import { componentUpgrades } from '../data/upgrades';

export default function ArchitectUpgradeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState('all');

  const handleCopyReport = () => {
    const reportText = componentUpgrades.map((u, i) => 
      `${i+1}. ${u.componentName} [${u.category}]\n` +
      `   • Current Production Bottleneck: ${u.currentFlaw}\n` +
      `   • 18-Yr Architect Solution: ${u.architectSolution}\n` +
      `   • Recommended Tech Stack: ${u.techStackProposal}\n` +
      `   • Business & Conversion Impact: ${u.businessImpact}\n`
    ).join('\n');

    navigator.clipboard.writeText(
      `# SHAREPAL COMPONENT UPGRADE PROPOSALS (18-YEAR STAFF FRONTEND ARCHITECT REVIEW)\n\n` + reportText
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const categories = ['all', ...new Set(componentUpgrades.map(u => u.category))];
  const filteredUpgrades = activeTab === 'all' 
    ? componentUpgrades 
    : componentUpgrades.filter(u => u.category === activeTab);

  return (
    <div className="sp-modal-backdrop" onClick={onClose}>
      <div 
        className="sp-modal-dialog" 
        style={{ maxWidth: '860px', width: '95%' }} 
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header */}
        <div className="sp-modal-header" style={{ background: 'linear-gradient(135deg, #3b1163 0%, #4c187c 100%)', color: '#fff' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{
              width: '42px',
              height: '42px',
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#9eff00'
            }}>
              <Award size={24} />
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <h3 style={{ margin: 0, fontSize: '1.3rem', color: '#fff' }}>
                  Staff Frontend Architecture Review
                </h3>
                <span style={{
                  background: '#9eff00',
                  color: '#111827',
                  fontSize: '0.72rem',
                  fontWeight: 800,
                  padding: '2px 8px',
                  borderRadius: '9999px'
                }}>
                  18-Yr Veteran Blueprint
                </span>
              </div>
              <p style={{ margin: 0, fontSize: '0.82rem', color: '#d8b4fe' }}>
                Component Upgrade Proposals to Elevate SharePal's Performance & Conversion Funnel
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <button
              type="button"
              onClick={handleCopyReport}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                background: 'rgba(255, 255, 255, 0.2)',
                color: '#fff',
                fontSize: '0.78rem',
                fontWeight: 600,
                padding: '6px 12px',
                borderRadius: '9999px'
              }}
            >
              {copied ? <Check size={14} color="#9eff00" /> : <Copy size={14} />}
              <span>{copied ? 'Copied Full Report!' : 'Copy Assignment Brief'}</span>
            </button>

            <button type="button" className="sp-close-btn" style={{ background: 'rgba(255,255,255,0.2)', color: '#fff' }} onClick={onClose}>
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div style={{ padding: '24px', maxHeight: '78vh', overflowY: 'auto' }}>
          
          {/* Executive Overview Card */}
          <div style={{
            background: '#faf5ff',
            border: '1.5px solid #d8b4fe',
            borderRadius: '16px',
            padding: '18px 20px',
            marginBottom: '20px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#4c187c', fontWeight: 800, fontSize: '0.95rem', marginBottom: '6px' }}>
              <Sparkles size={18} />
              <span>Architectural Diagnostic & Innovation Strategy</span>
            </div>
            <p style={{ fontSize: '0.88rem', color: '#4b5563', lineHeight: 1.6 }}>
              While recreating the <strong>SharePal Gaming Gadgets</strong> portal pixel-by-pixel, we audited the user journey through the lens of modern enterprise frontend engineering. Below are the key components recommended for immediate replacement to drastically improve <strong>Core Web Vitals</strong>, <strong>mobile conversion velocity</strong>, and <strong>customer retention</strong>.
            </p>
          </div>

          {/* Filter Chips */}
          <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '12px', marginBottom: '16px' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveTab(cat)}
                style={{
                  padding: '6px 14px',
                  borderRadius: '9999px',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  whiteSpace: 'nowrap',
                  border: activeTab === cat ? '1.5px solid #4c187c' : '1px solid #e5e7eb',
                  background: activeTab === cat ? '#4c187c' : '#fff',
                  color: activeTab === cat ? '#fff' : '#4b5563',
                  cursor: 'pointer'
                }}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>

          {/* Component Upgrades Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {filteredUpgrades.map((upgrade, idx) => (
              <div 
                key={upgrade.id}
                style={{
                  background: '#fff',
                  border: '1px solid #e5e7eb',
                  borderRadius: '16px',
                  padding: '20px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px', flexWrap: 'wrap', gap: '8px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{
                      background: '#4c187c',
                      color: '#fff',
                      fontSize: '0.75rem',
                      fontWeight: 800,
                      width: '24px',
                      height: '24px',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      {idx + 1}
                    </span>
                    <h4 style={{ margin: 0, fontSize: '1.05rem', fontWeight: 700, color: '#111827' }}>
                      {upgrade.componentName}
                    </h4>
                  </div>
                  <span style={{
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    background: '#f3f4f6',
                    color: '#6b7280',
                    padding: '3px 10px',
                    borderRadius: '9999px'
                  }}>
                    {upgrade.category}
                  </span>
                </div>

                {/* Problem vs Solution Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '14px' }}>
                  <div style={{ background: '#fef2f2', border: '1px solid #fecaca', borderRadius: '12px', padding: '12px 14px' }}>
                    <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#991b1b', textTransform: 'uppercase', marginBottom: '4px' }}>
                      ⚠️ Current Production Bottleneck
                    </div>
                    <div style={{ fontSize: '0.82rem', color: '#7f1d1d', lineHeight: 1.5 }}>
                      {upgrade.currentFlaw}
                    </div>
                  </div>

                  <div style={{ background: '#ecfdf5', border: '1px solid #a7f3d0', borderRadius: '12px', padding: '12px 14px' }}>
                    <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#065f46', textTransform: 'uppercase', marginBottom: '4px' }}>
                      🚀 Architect's Component Solution
                    </div>
                    <div style={{ fontSize: '0.82rem', color: '#064e3b', lineHeight: 1.5 }}>
                      {upgrade.architectSolution}
                    </div>
                  </div>
                </div>

                {/* Tech Stack & Business ROI */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px', flexWrap: 'wrap', fontSize: '0.8rem', borderTop: '1px solid #f3f4f6', paddingTop: '12px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#4c187c' }}>
                    <Cpu size={15} />
                    <span><strong>Recommended Tech:</strong> {upgrade.techStackProposal}</span>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#ff7a00', fontWeight: 700 }}>
                    <TrendingUp size={15} />
                    <span>{upgrade.businessImpact}</span>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>

      </div>
    </div>
  );
}
