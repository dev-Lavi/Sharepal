import React from 'react';
import { ShieldCheck, Sparkles, Truck, CreditCard } from 'lucide-react';

export default function WhySharePal() {
  const pillars = [
    {
      icon: ShieldCheck,
      title: "Zero Security Deposit",
      desc: "Enjoy hassle-free gaming rentals with 100% Zero Deposit after a rapid 2-minute digital KYC verification. No frozen bank limits."
    },
    {
      icon: Sparkles,
      title: "Mint Condition & Sanitized",
      desc: "Every PS5, Xbox console and DualSense controller undergoes a rigorous 14-point testing checklist and UV-C sanitization prior to delivery."
    },
    {
      icon: Truck,
      title: "Free Doorstep Delivery & Return",
      desc: "We bring the gear right to your flat, PG, or office anywhere across Bangalore and pick it back up at your convenience without charge."
    },
    {
      icon: CreditCard,
      title: "Pay On Delivery Available",
      desc: "Total peace of mind. Verify your gaming equipment on arrival and pay comfortably via UPI, Credit Card, or Net Banking on delivery."
    }
  ];

  return (
    <section className="sp-why-section">
      <div className="sp-container">
        <div className="sp-why-header">
          <h2>Why Bangalore Gamers Choose SharePal</h2>
          <p>India’s most dependable lifestyle gear and gaming console rental platform</p>
        </div>

        <div className="sp-why-grid">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="sp-why-card">
                <div className="sp-why-icon-box">
                  <Icon size={24} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
