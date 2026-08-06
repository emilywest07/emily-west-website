"use client";

import { useFigureVisibility } from "@/hooks/use-figure-visibility";

const figureTitleId = "claim-framework-figure-title";
const figureDescriptionId = "claim-framework-figure-description";
const figureCaptionId = "claim-framework-figure-caption";

function FrameworkPanel() {
  return <svg viewBox="0 0 380 260" role="img" aria-label="A stable framework in which identity and value connect to a principle that supports a policy position">
    <path className="claim-figure-boundary" d="M42 28C103 9 283 12 329 44 358 66 353 210 315 231 256 254 91 249 43 218 14 194 13 55 42 28Z"/>
    <g className="claim-figure-edges stable-edges">
      <line x1="86" y1="67" x2="177" y2="130"/><line x1="284" y1="67" x2="193" y2="130"/><line x1="185" y1="144" x2="185" y2="199"/>
    </g>
    <g className="claim-figure-node node-identity"><circle cx="78" cy="62" r="5"/><text x="78" y="38" textAnchor="middle">Identity</text></g>
    <g className="claim-figure-node node-value"><circle cx="292" cy="62" r="5"/><text x="292" y="38" textAnchor="middle">Value</text></g>
    <g className="claim-figure-node node-principle"><circle cx="185" cy="136" r="5"/><text x="203" y="141">Principle</text></g>
    <g className="claim-figure-node node-policy"><circle cx="185" cy="207" r="5"/><text x="185" y="238" textAnchor="middle">Policy Position</text></g>
  </svg>;
}

function ChallengePanel() {
  return <svg viewBox="0 0 380 260" role="img" aria-label="A challenge tests the existing principle, strains its relationship to the policy position, and reveals that the existing account no longer fits">
    <path className="claim-figure-boundary challenge-boundary" d="M27 29C80 10 235 13 276 44 301 67 299 209 265 230 213 253 71 247 30 218 5 193 4 56 27 29Z"/>
    <g className="claim-figure-edges challenge-stable-edges">
      <line x1="67" y1="68" x2="147" y2="126"/><line x1="240" y1="68" x2="163" y2="126"/>
    </g>
    <g className="strain-relationship" aria-hidden="true">
      <path d="M155 141C149 151 149 159 158 166"/><path d="M166 181C176 189 166 198 158 203"/>
    </g>
    <g className="provisional-relation" aria-hidden="true"><path d="M325 130C275 126 220 127 170 134"/><text x="245" y="110" textAnchor="middle">tests the principle</text></g>
    <g className="inadequacy-warning" aria-hidden="true"><circle cx="164" cy="173" r="8"/><text className="warning-mark" x="164" y="177" textAnchor="middle">!</text><text className="warning-copy" x="182" y="179">existing account no longer fits</text></g>
    <g className="claim-figure-node"><circle cx="59" cy="63" r="5"/><text x="59" y="39" textAnchor="middle">Identity</text></g>
    <g className="claim-figure-node"><circle cx="248" cy="63" r="5"/><text x="248" y="39" textAnchor="middle">Value</text></g>
    <g className="claim-figure-node"><circle cx="155" cy="134" r="5"/><text x="136" y="139" textAnchor="end">Principle</text></g>
    <g className="claim-figure-node"><circle cx="155" cy="211" r="5"/><text x="155" y="241" textAnchor="middle">Policy Position</text></g>
    <g className="claim-figure-challenge"><circle cx="337" cy="130" r="6"/><text x="337" y="99" textAnchor="middle">Challenge</text></g>
  </svg>;
}

function ReorganizationPanel() {
  return <svg viewBox="0 0 380 260" role="img" aria-label="The original identity and value remain while the principle and policy position move, an old relationship fades, and new relationships are drawn">
    <path className="claim-figure-boundary" d="M42 28C103 9 283 12 329 44 358 66 353 210 315 231 256 254 91 249 43 218 14 194 13 55 42 28Z"/>
    <g className="claim-figure-edges reorganization-edges">
      <line className="old-principle-policy" x1="155" y1="142" x2="155" y2="201"/>
      <line className="new-value-principle" x1="281" y1="69" x2="202" y2="140"/>
      <line className="new-principle-policy" x1="197" y1="151" x2="226" y2="202"/>
    </g>
    <text className="relationship-note reinterpret-note" x="80" y="112" textAnchor="middle">reinterprets</text>
    <text className="relationship-note support-note" x="125" y="198" textAnchor="middle">now supports</text>
    <g className="claim-figure-node"><circle cx="76" cy="62" r="5"/><text x="76" y="38" textAnchor="middle">Identity</text></g>
    <g className="claim-figure-node"><circle cx="290" cy="62" r="5"/><text x="290" y="38" textAnchor="middle">Value</text></g>
    <g className="claim-figure-node moving-principle"><circle cx="194" cy="145" r="5"/><text className="old-principle-label" x="212" y="150">Principle</text><text className="revised-principle-label" x="212" y="150">Revised Principle</text></g>
    <g className="claim-figure-node shifted-policy"><circle cx="230" cy="210" r="5"/><text x="230" y="241" textAnchor="middle">Policy Position</text></g>
  </svg>;
}

export function ClaimFrameworkFigure() {
  const { ref, isActive } = useFigureVisibility<HTMLElement>();
  const panels = [
    { number: "01", title: "Framework", content: <FrameworkPanel/> },
    { number: "02", title: "Challenge", content: <ChallengePanel/> },
    { number: "03", title: "Reorganization", content: <ReorganizationPanel/> },
  ];

  return <figure ref={ref} className={`claim-framework-figure ${isActive ? "is-animating" : ""}`} aria-labelledby={figureTitleId} aria-describedby={`${figureDescriptionId} ${figureCaptionId}`}>
    <h3 id={figureTitleId}>Framework Construction, Challenge, and Reorganization</h3>
    <p className="sr-only" id={figureDescriptionId}>A stable explanatory framework tests an external challenge, recognizes that its existing account no longer fits, and reorganizes relationships among continuing identity, value, principle, and policy commitments.</p>
    <div className="claim-framework-panels">
      {panels.map((panel, index) => <div className={`claim-framework-panel panel-${index + 1}`} key={panel.number}>
        <p><span>{panel.number}</span>{panel.title}</p>
        {panel.content}
        {index < panels.length - 1 && <span className="claim-framework-arrow" aria-hidden="true"/>}
      </div>)}
    </div>
    <figcaption id={figureCaptionId}>Explanatory framework change can occur through the reorganization of relationships among existing commitments rather than the simple replacement of individual beliefs.</figcaption>
  </figure>;
}
