"use client";

import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from "react";

const nodes = ["Observation", "Assumption", "Cause", "Interpretation", "Expectation"];
const reducedMotionQuery = "(prefers-reduced-motion: reduce)";

function subscribeToReducedMotion(callback: () => void) {
  const media = window.matchMedia(reducedMotionQuery);
  media.addEventListener("change", callback);
  return () => media.removeEventListener("change", callback);
}

function getReducedMotionPreference() {
  return window.matchMedia(reducedMotionQuery).matches;
}

function Framework({ stage }: { stage: 1 | 2 | 3 }) {
  const coordinates = stage === 3
    ? [[24, 42], [55, 22], [71, 53], [43, 69], [19, 73]]
    : [[25, 27], [60, 22], [72, 55], [44, 69], [17, 61]];
  const lines = stage === 3 ? [[0,1],[1,2],[2,3],[3,4],[4,0],[1,3],[0,3]] : [[0,1],[1,2],[2,3],[3,4],[4,0],[0,3]];
  return <svg className="framework-svg" viewBox="0 0 100 92" role="img" aria-label={stage === 1 ? "An established explanatory framework" : stage === 2 ? "A framework encountering a challenging observation" : "A framework reorganized to integrate the challenge"}>
    <path className="framework-boundary" d={stage === 2 ? "M14 13C39 5 77 7 87 28 94 44 88 74 66 82 42 90 12 83 7 58 3 39 6 21 14 13Z" : "M15 12C35 5 77 7 88 29 97 48 85 77 64 84 39 91 10 81 7 56 4 36 7 20 15 12Z"} />
    {lines.map(([a,b]) => <line key={`${a}-${b}`} className={stage === 2 && (a === 1 || b === 1) ? "framework-line strained" : "framework-line"} x1={coordinates[a][0]} y1={coordinates[a][1]} x2={coordinates[b][0]} y2={coordinates[b][1]} />)}
    {coordinates.map(([x,y], index) => <g key={nodes[index]} className={index === 0 && stage === 1 ? "node central" : "node"}><circle cx={x} cy={y} r="4"/><title>{nodes[index]}</title></g>)}
    {stage >= 2 && <g className={stage === 3 ? "challenge integrated" : "challenge"}><circle cx={stage === 3 ? 55 : 91} cy={stage === 3 ? 46 : 18} r="4.5"/><title>New observation</title>{stage === 3 && <line className="framework-line accent-line" x1="55" y1="46" x2="71" y2="53" />}</g>}
  </svg>;
}

export function HeroVisual() {
  const figureRef = useRef<HTMLElement>(null);
  const pauseReasons = useRef(new Set<string>());
  const [active, setActive] = useState<1 | 2 | 3>(1);
  const [paused, setPaused] = useState(false);
  const prefersReducedMotion = useSyncExternalStore(
    subscribeToReducedMotion,
    getReducedMotionPreference,
    () => true,
  );

  const setPauseReason = useCallback((reason: string, shouldPause: boolean) => {
    if (shouldPause) pauseReasons.current.add(reason);
    else pauseReasons.current.delete(reason);
    setPaused(pauseReasons.current.size > 0);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const onVisibilityChange = () =>
      setPauseReason("document-hidden", document.hidden);
    document.addEventListener("visibilitychange", onVisibilityChange);
    onVisibilityChange();

    const observer = new IntersectionObserver(
      ([entry]) => setPauseReason("outside-viewport", entry.intersectionRatio < 0.2),
      { threshold: [0, 0.2, 0.5] },
    );
    if (figureRef.current) observer.observe(figureRef.current);

    return () => {
      document.removeEventListener("visibilitychange", onVisibilityChange);
      observer.disconnect();
    };
  }, [prefersReducedMotion, setPauseReason]);

  useEffect(() => {
    if (paused || prefersReducedMotion) return;
    const delay = 1800;
    const next = active === 1 ? 2 : active === 2 ? 3 : 1;
    const timer = window.setTimeout(() => setActive(next), delay);
    return () => window.clearTimeout(timer);
  }, [active, paused, prefersReducedMotion]);

  return <figure
    ref={figureRef}
    className="hero-figure"
    aria-labelledby="framework-caption"
  >
    <div className="visual-stages" aria-label="Three stages of explanatory change">
      {([1,2,3] as const).map((stage) => <div className={`visual-stage ${active === stage ? "is-active" : ""}`} key={stage}>
        <p><span>0{stage}</span>{stage === 1 ? "Framework" : stage === 2 ? "Challenge" : "Reorganization"}</p>
        <Framework stage={stage}/>
        {stage < 3 && <span className={`stage-arrow ${active === stage ? "is-active" : ""}`} aria-hidden="true"/>}
      </div>)}
    </div>
    <figcaption id="framework-caption">An explanatory framework encounters a challenge it cannot readily contain. Its elements can then be defended, discarded, reinterpreted, or reorganized.</figcaption>
  </figure>;
}
