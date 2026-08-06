"use client";

import { useState } from "react";

const titleId = "claim-measurement-figure-title";
const descriptionId = "claim-measurement-figure-description";
const captionId = "claim-measurement-figure-caption";

const highlightMap: Record<string, string[]> = {
  "t-opening": ["t-opening", "c-policy", "c-value", "n-policy", "n-value"],
  "t-rule": ["t-rule", "c-rule", "c-connect", "c-elaborate", "n-rule", "n-value"],
  "t-gap": ["t-gap", "c-gap", "n-rule"],
  "c-policy": ["c-policy", "t-opening", "n-policy"],
  "c-value": ["c-value", "t-opening", "n-value"],
  "c-rule": ["c-rule", "t-rule", "n-rule"],
  "c-connect": ["c-connect", "t-rule", "n-value", "n-rule"],
  "c-elaborate": ["c-elaborate", "t-rule", "n-rule"],
  "c-gap": ["c-gap", "t-gap", "n-rule"],
  "n-value": ["n-value", "t-opening", "c-value", "c-connect"],
  "n-rule": ["n-rule", "t-rule", "t-gap", "c-rule", "c-connect", "c-elaborate", "c-gap"],
  "n-policy": ["n-policy", "t-opening", "c-policy"],
};

type LinkedProps = {
  id: string;
  activeId: string | null;
  setActiveId: (id: string | null) => void;
  className?: string;
  children: React.ReactNode;
};

function LinkedButton({ id, activeId, setActiveId, className = "", children }: LinkedProps) {
  const linked = activeId ? highlightMap[activeId]?.includes(id) : false;
  return <button className={`${className} ${linked ? "is-linked" : ""}`} type="button" onMouseEnter={() => setActiveId(id)} onMouseLeave={() => setActiveId(null)} onFocus={() => setActiveId(id)} onBlur={() => setActiveId(null)}>{children}</button>;
}

export function ClaimMeasurementFigure() {
  const [activeId, setActiveId] = useState<string | null>(null);

  const linked = (id: string) => activeId ? highlightMap[activeId]?.includes(id) : false;

  return <figure className="claim-measurement-figure" aria-labelledby={titleId} aria-describedby={`${descriptionId} ${captionId}`}>
    <h3 id={titleId}>Conversation, Coding, and Observed Explanatory Framework</h3>
    <p className="sr-only" id={descriptionId}>A transcript feed becomes coded explanatory objects, revealing a framework in which a challenge produces recognition that the decision rule may be inadequate, without showing completed revision.</p>
    <div className="claim-measurement-panels">
      <section className="claim-measurement-panel conversation-panel" aria-labelledby="conversation-panel-title">
        <h4 id="conversation-panel-title"><span>01</span>Conversation</h4>
        <div className="transcript-window">
          <div className="transcript-feed">
            <LinkedButton id="t-opening" activeId={activeId} setActiveId={setActiveId} className="transcript-entry participant-entry"><span>Participant</span>“I think <mark className={linked("c-policy") ? "is-linked-phrase" : ""}>preferential hiring is wrong</mark> and <mark className={linked("c-value") ? "is-linked-phrase" : ""}>everyone should have a chance</mark>.”</LinkedButton>
            <p className="transcript-entry interlocutor-entry"><span>Interlocutor</span>“What does it mean, in practice, for a hiring process to consider all qualified candidates fairly?”</p>
            <LinkedButton id="t-rule" activeId={activeId} setActiveId={setActiveId} className="transcript-entry participant-entry"><span>Participant</span>“<mark className={linked("c-rule") ? "is-linked-phrase" : ""}>Take the time to actually go through all resumes and compare what the company needs and what the candidate can offer</mark>.”</LinkedButton>
            <p className="transcript-entry interlocutor-entry"><span>Interlocutor</span>“What feature would make your rule stop applying?”</p>
            <LinkedButton id="t-gap" activeId={activeId} setActiveId={setActiveId} className="transcript-entry participant-entry"><span>Participant</span>“<mark className={linked("c-gap") ? "is-linked-phrase" : ""}>I really don’t know</mark>.”</LinkedButton>
          </div>
        </div>
        <span className="claim-measurement-arrow" aria-hidden="true"/>
      </section>

      <section className="claim-measurement-panel coding-panel" aria-labelledby="coding-panel-title">
        <h4 id="coding-panel-title"><span>02</span>Coding</h4>
        <div className="coding-layers">
          <div><p><span>Layer A</span>Framework Representation</p><LinkedButton id="c-value" activeId={activeId} setActiveId={setActiveId} className="coding-label code-2">Value</LinkedButton><LinkedButton id="c-rule" activeId={activeId} setActiveId={setActiveId} className="coding-label code-3">Decision Rule</LinkedButton><LinkedButton id="c-policy" activeId={activeId} setActiveId={setActiveId} className="coding-label code-1">Policy Position</LinkedButton></div>
          <div><p><span>Layer B</span>Framework Construction / Elaboration</p><LinkedButton id="c-connect" activeId={activeId} setActiveId={setActiveId} className="coding-label code-3">Connects a value to a decision rule</LinkedButton><LinkedButton id="c-elaborate" activeId={activeId} setActiveId={setActiveId} className="coding-label code-3">Elaborates what fair consideration requires</LinkedButton></div>
          <div><p><span>Layer C</span>Framework Revision</p><LinkedButton id="c-gap" activeId={activeId} setActiveId={setActiveId} className="coding-label code-4">Recognition of Explanatory Inadequacy</LinkedButton><p className="coding-label code-5">Revision of Decision Rule</p></div>
        </div>
        <span className="claim-measurement-arrow" aria-hidden="true"/>
      </section>

      <section className="claim-measurement-panel observed-panel" aria-labelledby="observed-panel-title">
        <h4 id="observed-panel-title"><span>03</span>Observed Framework</h4>
        <div className="observed-framework">
          <svg viewBox="0 0 320 250" aria-hidden="true">
            <line className="observed-edge edge-value-rule" x1="76" y1="64" x2="135" y2="119"/>
            <line className="observed-edge uncertain-edge" x1="181" y1="154" x2="239" y2="205"/>
            <g className="measurement-challenge">
              <circle cx="244" cy="129" r="6"/>
              <text x="258" y="133">Challenge</text>
            </g>
          </svg>
          <LinkedButton id="n-value" activeId={activeId} setActiveId={setActiveId} className="observed-node value-node"><span>Value</span><strong>Everyone should have a chance</strong></LinkedButton>
          <LinkedButton id="n-rule" activeId={activeId} setActiveId={setActiveId} className={`observed-node rule-node ${linked("n-rule") ? "is-linked" : ""}`}><span>Decision Rule</span><strong className="initial-rule">Review every résumé carefully</strong><b className="rule-uncertainty-mark" aria-hidden="true">?</b></LinkedButton>
          <LinkedButton id="n-policy" activeId={activeId} setActiveId={setActiveId} className="observed-node policy-node"><span>Policy Position</span><strong>Preferential hiring is wrong</strong></LinkedButton>
          <p className="inadequacy-note">Recognition of inadequacy</p>
        </div>
      </section>
    </div>
    <p className="measurement-source-note">Illustrative excerpts from an anonymized study transcript.</p>
    <figcaption id={captionId}>Conversational data can reveal both the components of an explanatory framework and the recursive processes through which those components are connected, tested, and revised.<span>Transcript coding makes explanatory framework reorganization directly observable.</span></figcaption>
  </figure>;
}
