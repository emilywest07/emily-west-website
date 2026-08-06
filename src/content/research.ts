import type { ResearchClaim } from "./types";

export const highlightedProjectLinks = {
  recursiveReflectionManuscript: "https://www.dropbox.com/scl/fi/rl4c4xy3in1d5f49dtw1c/West_Belief_Change.pdf?rlkey=7knd3ixmkyjgcmlq1su4xjue3&dl=0",
  recursiveReflectionOsf: "https://osf.io/pnu2t/overview",
  revealingFrameworksMethod: "https://experiment2-app.onrender.com/static/index.html?",
  revealingFrameworksGithub: "https://github.com/emilywest07/experiment2-app",
} as const;

// Replace these URLs only after authoritative project destinations are supplied.
export const revealingFrameworksPendingLinks = {
  manuscript: "#revealing-frameworks-manuscript-url-to-be-supplied",
  appendix: "#revealing-frameworks-appendix-url-to-be-supplied",
  osfPreRegistration: "#revealing-frameworks-osf-url-to-be-supplied",
} as const;

// These compact-work links are deliberately stored but not rendered until replaced.
export const claimTwoPendingWorkLinks = {
  tensionsPaper: "#tensions-paper-url-to-be-supplied",
  tensionsAppendix: "#tensions-appendix-url-to-be-supplied",
  tensionsOsf: "#tensions-osf-url-to-be-supplied",
  surveySpeechPaper: "#survey-speech-paper-url-to-be-supplied",
  surveySpeechAppendix: "#survey-speech-appendix-url-to-be-supplied",
  surveySpeechMaterials: "#survey-speech-materials-url-to-be-supplied",
} as const;

export const researchClaims: ResearchClaim[] = [
  {
    id: "claim-01-framework-construction",
    title: "Humans Construct and Reorganize Explanatory Frameworks",
    mapTitle: "Humans construct and reorganize explanatory frameworks.",
    shortTitle: "Framework Construction and Reorganization",
    question: "How are explanatory frameworks constructed, maintained, and reorganized—and what makes a person judge that an existing explanation is no longer adequate?",
    summary: "Develops explanatory frameworks as cognitive structures and investigates the mechanisms through which they change.",
    contribution: "This research develops explanatory frameworks as a theoretical object: organized structures of beliefs, values, identities, causal interpretations, and decision rules through which people make sense of experience. It asks how these frameworks become more encompassing, how people evaluate their adequacy, and how reflection on explanatory gaps can produce structural revision rather than the simple addition or subtraction of individual beliefs.",
    evidence: "The work combines conceptual development with experimental studies of political reasoning and direct observation of explanatory processes in conversation. It uses longitudinal belief measures, structured conversational interventions, and transcript-based coding to distinguish framework construction, testing, inadequacy recognition, and revision as they unfold.",
    nextQuestions: "How do explanatory frameworks develop over time? When does explanatory pressure produce revision rather than defense or disengagement? Can more encompassing frameworks be deliberately cultivated? How do social interaction, education, and AI-mediated communication affect the capacity to reorganize one’s understanding?",
    relatedClaimIds: ["claim-02-direct-observation", "claim-03-recursive-learning"],
    order: 1,
    isPlaceholder: false,
    projects: [
      {
        id: "recursive-reflection-theory",
        title: "Recursive Reflection Theory",
        subtitle: "A new theory of how people revise political beliefs by evaluating their own explanatory frameworks.",
        summary: undefined,
        detail: undefined,
        descriptionParagraphs: [
          "Recursive Reflection Theory proposes that political belief revision occurs not because people simply encounter new information, but because they recursively evaluate the explanations supporting their own beliefs. Belief change begins when individuals conclude that their existing explanatory framework is no longer an acceptable account of why they hold the position they do.",
          "To investigate this process, I combine experimental political discussion, AI-mediated conversations, and transcript-based measurement to observe explanatory frameworks as they reorganize in real time. Together, these studies suggest that interventions traditionally understood as persuasion may instead work by prompting citizens to re-evaluate the adequacy of their own explanations rather than by simply transmitting new political beliefs.",
        ],
        status: "Under Review",
        links: [
          { label: "Read Manuscript", href: highlightedProjectLinks.recursiveReflectionManuscript, isPrimary: true, isExternal: true },
          { label: "OSF Pre-Registration", href: highlightedProjectLinks.recursiveReflectionOsf, isExternal: true },
        ],
        publicationIds: [],
        isFlagship: true,
      },
    ],
    works: [
      {
        id: "beyond-belief",
        title: "Beyond Belief: Explanatory Frameworks as a Cognitive Architecture",
        status: "Theory Paper",
        description: "Develops a general theory of explanatory frameworks as higher-order cognitive architectures that organize beliefs, values, identities, and experience into coherent understandings of the world.",
        abstract: "Human beings do not merely accumulate beliefs. They organize beliefs, values, identities, and experiences into explanatory structures that allow them to make sense of themselves and the world. Although existing research has developed powerful theories of belief formation, schema, narrative identity, cognitive dissonance, and predictive processing, these approaches generally treat beliefs, narratives, or representations as the primary cognitive objects of interest. I argue that these phenomena are more fruitfully understood as components of higher-order explanatory frameworks: cognitive architectures that integrate diverse forms of information into coherent understandings and that are periodically reorganized as new experiences accumulate. The article develops a general theory of explanatory frameworks, identifies their defining properties, distinguishes them from related concepts, and advances a set of theoretical propositions concerning their organization, growth, and revision. Finally, I argue that recent advances in conversational elicitation make explanatory frameworks empirically observable, opening the possibility of studying them directly rather than inferring them indirectly from isolated beliefs or attitudes. Reconceptualizing human reasoning around explanatory frameworks offers a new foundation for research on learning, judgment, belief revision, and political reasoning.",
      },
      {
        id: "architecture-of-understanding",
        title: "The Architecture of Understanding",
        status: "Book Project",
        description: "Develops a general theory of explanatory frameworks and argues that learning is best understood as the growth and reorganization of increasingly encompassing explanations.",
        abstract: "Human beings do not simply accumulate beliefs. They organize beliefs, values, experiences, and identities into increasingly encompassing explanations capable of making sense of themselves and the world. This book develops a general theory of these explanatory frameworks. It argues that explanatory frameworks constitute a higher-order cognitive architecture through which people organize experience, generate beliefs, and reorganize their understanding over time. Rather than treating learning as the acquisition of isolated facts or attitudes, the theory reconceptualizes learning as the growth of increasingly encompassing explanatory frameworks. Drawing together evidence from political reasoning, cognitive science, philosophy, education, and artificial intelligence, the book proposes explanatory frameworks as a fundamental object of study for understanding human judgment, learning, and belief revision across domains.",
      },
      {
        id: "partisan-social-norms-racial-attitudes",
        title: "Partisan Social Norms, Racial Attitudes and Civic Discourse",
        status: "Journal Article",
        venue: "Political Behavior (2026)",
        description: "Shows how partisan social context shapes racial attitudes and racially resentful political discourse, particularly among white Republicans.",
        abstract: "How do social norms surrounding racial attitudes differ among white Democrats and Republicans? Do these norms differ from the prevailing ‘norm of equality,’ and how do they affect civic discourse? Using a novel video-based discussion experiment, I show how co-partisan discussion among white Republicans (versus talking to a white Democrat) increases their racial resentment, as measured both in post-treatment surveys and the rhetoric subjects use during discussion. White Democrats do not significantly change their racial attitudes or rhetoric according to the partisan identity of their discussion partner. Among white Republicans, racially resentful language increases by more than 10% when discussing politics with a co-partisan compared to conversing with a white Democrat. This result is driven by the partisan identity of the discussion partner rather than the content of their speech. Even when a co-partisan takes a position on race-related policy that is counter-typical to their party (such as a Republican supporting affirmative action), white Republicans still use significantly more racially resentful language than when they talk to a Democrat, even one who ‘sounds like’ a Republican on race-policy. Findings highlight polarization as a democratic social ill, suggesting consequences for American civic discourse around race.",
        links: [
          {
            label: "View Article",
            href: "https://link.springer.com/article/10.1007/s11109-026-10164-5",
            isExternal: true,
          },
        ],
      },
      {
        id: "partisanship-social-identity",
        title: "Partisanship as a Social Identity: Implications for Polarization",
        status: "Journal Article",
        venue: "Political Behavior (2021)",
        description: "Shows how partisan identity structures political judgment and polarization, providing an earlier foundation for understanding how political identities become embedded within broader explanatory frameworks.",
        abstract: "The claim that partisanship has developed into a social identity is one of the dominant explanations for the current rising levels of affective polarization among the U.S. electorate. We provide evidence that partisanship functions as a social identity, but that the salience of partisan identity—in and of itself—does not account for increased affective polarization. Using a two-wave panel survey capturing natural variation in the salience of politics, we find that partisanship contributes more to individuals’ self-concept in times of heightened political salience. We also show that partisans can be detached from their Democratic or Republican identity by having them focus on individuating characteristics through a self-affirmation treatment. However, we find only limited evidence that when partisan social identity is made less salient, either by way of natural variation in political context or through a self-affirmation treatment, partisans are any less inclined to express in-party favoritism and out-party hostility. Taken together, our evidence shows that partisanship does operate as an important social identity, but that affective polarization is likely attributable to more than the classic in-group versus out-group distinction.",
        links: [
          {
            label: "View Article",
            href: "https://link.springer.com/article/10.1007/s11109-020-09637-y",
            isExternal: true,
          },
        ],
      },
    ],
  },
  {
    id: "claim-02-direct-observation",
    title: "Explanatory Frameworks Can Be Directly Observed",
    mapTitle: "Explanatory frameworks can be directly observed.",
    shortTitle: "Direct Observation of Explanatory Frameworks",
    question: "How can explanatory frameworks be observed directly rather than inferred indirectly from isolated beliefs or attitudes?",
    summary: "Develops conversational methods for observing explanatory frameworks as they emerge and reorganize in real time.",
    contribution: "This research develops conversational and computational methods for eliciting explanatory frameworks and observing how they emerge, change, and reorganize in real time.",
    evidence: "This research combines AI-mediated conversation, transcript coding, experimental design, and computational analysis to transform explanatory frameworks from latent theoretical constructs into directly observable objects of study.",
    nextQuestions: "Can conversational methods measure explanatory frameworks outside politics? How can AI improve the reliability and validity of explanatory-framework measurement? What new forms of scientific observation become possible when reasoning is studied dynamically rather than through static survey responses?",
    relatedClaimIds: ["claim-01-framework-construction", "claim-03-recursive-learning"],
    projects: [
      {
        id: "revealing-explanatory-frameworks",
        title: "Revealing Explanatory Frameworks",
        subtitle: "A structured conversational method for eliciting and measuring political reasoning.",
        descriptionParagraphs: [
          "Political beliefs are typically studied as individual attitudes or ideological positions. I argue that they are better understood as parts of broader explanatory frameworks that organize values, principles, empirical assumptions, and experiences into coherent understandings of the world. Using transcripts from a large-scale conversational study, I develop a framework for identifying commitments, tensions, reconciliation strategies, and explanatory gaps as they emerge during political discussion. The paper provides the first descriptive account of how people maintain coherence among competing commitments, establishing a new foundation for studying political reasoning through explanatory frameworks.",
        ],
        status: "Experimental Paper",
        links: [
          { label: "Try the Method", href: highlightedProjectLinks.revealingFrameworksMethod, isPrimary: true, isExternal: true },
          { label: "GitHub Repository", href: highlightedProjectLinks.revealingFrameworksGithub, isExternal: true },
        ],
        publicationIds: [],
      },
    ],
    works: [
      {
        id: "political-reasoning-tensions",
        title: "How People Hold Political Beliefs Together: The Structure of Tensions in Political Reasoning",
        status: "Working Paper",
        description: "Describes recurring organizational patterns through which explanatory frameworks maintain coherence, accommodate competing commitments, and reorganize political reasoning.",
        abstract: "How do people maintain coherence among political beliefs that do not naturally fit together? Existing research has devoted considerable attention to why individuals hold particular political attitudes and when those attitudes change, yet we know remarkably little about the organization of the explanatory frameworks that hold those attitudes together. Using transcripts from a large-scale conversational study, this paper describes recurring patterns in the structure of political reasoning by examining how participants connect principles, values, empirical assumptions, identities, and lived experience into coherent explanations. Rather than revealing a single form of coherence, the analyses identify multiple organizational patterns through which explanatory frameworks accommodate competing commitments, absorb new information, or leave tensions unresolved. These findings suggest that political disagreement is often rooted not in isolated differences over individual beliefs, but in differences in how explanatory frameworks organize and prioritize those beliefs. By providing the first descriptive account of the internal organization of explanatory frameworks, the paper establishes a foundation for studying political reasoning as a dynamic process of explanatory integration rather than a collection of independent attitudes.",
        pendingLinks: [
          { label: "Read Paper", placeholderHref: claimTwoPendingWorkLinks.tensionsPaper },
          { label: "View Appendix", placeholderHref: claimTwoPendingWorkLinks.tensionsAppendix },
          { label: "OSF", placeholderHref: claimTwoPendingWorkLinks.tensionsOsf },
        ],
      },
      {
        id: "survey-to-speech",
        title: "From Survey to Speech: When Do Attitude Measures Capture Political Expression?",
        status: "Working Paper",
        authors: [
          { givenName: "Emily", familyName: "West", displayName: "Emily A. West", isEmilyWest: true },
          { givenName: "Ecem", familyName: "Ersozlu", displayName: "Ecem Ersozlu" },
        ],
        description: "Investigates when conventional survey responses accurately capture the reasoning people express during conversation and examines the relationship between static attitude measures and the explanatory frameworks revealed through dialogue.",
        abstract: "This project investigates when conventional survey responses accurately capture the reasoning people express during conversation. It contributes to the broader research agenda by examining the relationship between static attitude measures and the explanatory frameworks revealed through dialogue.",
        pendingLinks: [
          { label: "Read Paper", placeholderHref: claimTwoPendingWorkLinks.surveySpeechPaper },
          { label: "View Appendix", placeholderHref: claimTwoPendingWorkLinks.surveySpeechAppendix },
          { label: "Project Materials", placeholderHref: claimTwoPendingWorkLinks.surveySpeechMaterials },
        ],
      },
    ],
    order: 2,
    isPlaceholder: false,
  },
  {
    id: "claim-03-recursive-learning",
    title: "Recursive Explanatory Organization Improves Human Learning",
    mapTitle: "Recursive explanatory organization improves human learning.",
    shortTitle: "Recursive Explanatory Organization Improves Human Learning",
    question: "Does recursive explanatory organization improve how people understand, remember, transfer, and communicate new knowledge?",
    summary: "Tests whether recursively structured explanations confer a cognitive advantage beyond coherence alone.",
    contribution: "This research tests whether recursively structured explanations confer a cognitive advantage beyond coherence alone. It examines whether organizing information hierarchically, with broad principles generating increasingly specific rules, improves learning and produces more transferable explanatory frameworks.",
    evidence: "The initial study randomly assigns participants to learn a novel strategy game from materials containing identical information but different explanatory structures. Outcomes include comprehension, memory, transfer, game performance, and participants’ ability to teach the game to someone else.",
    nextQuestions: "Do recursive explanations improve learning across domains? Which outcomes benefit most: memory, transfer, performance, or explanation? Does recursive organization become especially valuable when learners must generalize, teach, or revise what they understand?",
    relatedClaimIds: ["claim-01-framework-construction", "claim-02-direct-observation"],
    projects: [
      {
        id: "architecture-of-understanding-learning",
        title: "The Architecture of Understanding",
        subtitle: "Why recursive explanations facilitate learning.",
        status: "Study in Development",
        descriptionParagraphs: [
          "Research in cognitive psychology has long shown that people prefer coherent explanations and more readily understand and remember information that is meaningfully organized. This project tests whether coherence is only part of the story. I argue that recursive explanations—those that organize information hierarchically, with broad principles generating increasingly specific rules—may be especially learnable because they better match the architecture through which humans organize understanding.",
          "Participants will learn a novel strategy game from instructional materials containing identical content but different explanatory structures. One version presents the rules as a recursive hierarchy, while the other presents the same information in a non-recursive organization. Learning will be assessed through subjective understanding, comprehension, memory, transfer, game performance, and participants’ ability to teach the game to someone else.",
        ],
        publicationIds: [],
      },
    ],
    order: 3,
    isPlaceholder: false,
  },
];

export const getResearchClaim = (id: string) =>
  researchClaims.find((claim) => claim.id === id);
