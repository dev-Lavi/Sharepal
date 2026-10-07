import React from 'react';

/**
 * Chatbot floating widget — replicates the exact Lottie SVG from SharePal's production site.
 * Two overlapping speech bubbles (lime green + electric blue) with three animated typing dots.
 * CSS animations simulate the Lottie morph / bounce.
 */
export default function ChatbotWidget() {
  return (
    <a 
      title="Open chatbot" 
      aria-label="Open chatbot" 
      className="sp-chatbot-floating-link"
      href="/chatbot"
      onClick={(e) => {
        e.preventDefault();
        /* no-op — real site opens WA / chatbot page */
      }}
    >
      <div className="sp-chatbot-container">
        {/*
          Original viewBox 500×500.
          Two bubbles (lime + blue) overlapping at ~225,225 centre-left and ~271,276 centre-right.
          Six white dot-circles for typing animation.
        */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 500 500"
          width="500"
          height="500"
          preserveAspectRatio="xMidYMid meet"
          className="sp-chatbot-svg"
        >
          <defs>
            <clipPath id="__lottie_element_2">
              <rect width="500" height="500" x="0" y="0" />
            </clipPath>
          </defs>

          <g clipPath="url(#__lottie_element_2)">

            {/* ── Lime-green bubble (behind / top-left) ── */}
            <g transform="matrix(1,0,0,1,228.483,224.219)">
              <path
                fill="rgb(157,255,0)"
                fillOpacity="1"
                d="M-64.811,87.93 C-61.463,86.698 -57.744,86.993 -54.632,88.737
                   C-37.995,98.235 -19.155,103.196 0.002,103.123
                   C59.238,103.123 107.285,56.976 107.285,0
                   C107.285,-56.976 59.238,-103.124 0.002,-103.124
                   C-59.234,-103.124 -107.285,-56.98 -107.285,0
                   C-107.303,16.958 -102.987,33.638 -94.747,48.459
                   C-93.016,51.487 -92.592,55.089 -93.574,58.436
                   L-104.771,94.929
                   C-105.468,97.198 -104.194,99.601 -101.925,100.298
                   C-101.039,100.57 -100.088,100.548 -99.215,100.236
                   L-64.811,87.93Z"
              />
            </g>

            {/* ── Three white dots for the green bubble (positions from original) ── */}
            <g>
              <circle cx="177.056" cy="224.219" r="17.187" fill="rgb(255,255,255)" className="sp-chat-dot sp-chat-dot-green-1" />
              <circle cx="228.618" cy="224.219" r="17.187" fill="rgb(255,255,255)" className="sp-chat-dot sp-chat-dot-green-2" />
              <circle cx="280.18"  cy="224.219" r="17.187" fill="rgb(255,255,255)" className="sp-chat-dot sp-chat-dot-green-3" />
            </g>

            {/* ── Electric-blue bubble (in front / bottom-right) ── */}
            <g transform="matrix(1,0,0,1,271.453,275.959)">
              <path
                fill="rgb(24,69,231)"
                fillOpacity="1"
                d="M64.8,87.773 C61.457,86.548 57.746,86.843 54.638,88.581
                   C37.995,98.066 19.156,103.018 0,102.945
                   C-59.24,102.945 -107.287,56.879 -107.287,0.002
                   C-107.287,-56.875 -59.24,-102.946 0,-102.946
                   C59.24,-102.946 107.287,-56.896 107.287,0.002
                   C107.303,16.932 102.988,33.583 94.753,48.375
                   C93.017,51.404 92.592,55.011 93.576,58.361
                   L104.748,94.764
                   C105.444,97.033 104.168,99.435 101.899,100.131
                   C101.015,100.402 100.067,100.381 99.196,100.07
                   L64.8,87.773Z"
              />
            </g>

            {/* ── Three white typing dots inside blue bubble ── */}
            <g>
              <circle cx="219.891" cy="268.094" r="17.187" fill="rgb(255,255,255)" className="sp-chat-dot sp-chat-dot-1" />
              <circle cx="271.453" cy="262.196" r="17.187" fill="rgb(255,255,255)" className="sp-chat-dot sp-chat-dot-2" />
              <circle cx="323.015" cy="257.527" r="17.187" fill="rgb(255,255,255)" className="sp-chat-dot sp-chat-dot-3" />
            </g>

          </g>
        </svg>
      </div>
    </a>
  );
}
