import type { Publication, PublicationStatus, ResearchWork } from "./types";
import { researchClaims } from "./research";

// This array is intentionally empty. Add only verified publication records.
// See CONTENT-GUIDE.md for a complete, copyable example and validation checklist.
export const publications: Publication[] = [];

export const statusLabels: Record<PublicationStatus, string> = {
  published: "Published",
  forthcoming: "Forthcoming",
  "under-review": "Under Review",
  "working-paper": "Working Papers",
};

export const visiblePublications = publications.filter(
  (publication) => publication.visible,
);

export const featuredPublications = visiblePublications
  .filter((publication) => publication.featured)
  .sort((a, b) => (a.featuredOrder ?? 99) - (b.featuredOrder ?? 99));

export function getPublicationsForClaim(claimId: string) {
  return visiblePublications.filter((publication) =>
    publication.researchClaimIds.includes(claimId),
  );
}

const researchWorks = researchClaims.flatMap((claim) => claim.works ?? []);
const workById = new Map(researchWorks.map((work) => [work.id, work]));
const projectById = new Map(
  researchClaims.flatMap((claim) => claim.projects).map((project) => [project.id, project]),
);

function verifiedWork(id: string): ResearchWork {
  const work = workById.get(id);
  if (!work) throw new Error(`Missing verified research work: ${id}`);
  return work;
}

function verifiedProject(id: string): ResearchWork {
  const project = projectById.get(id);
  if (!project || !project.status || !project.subtitle || !project.descriptionParagraphs) {
    throw new Error(`Incomplete verified research project: ${id}`);
  }
  return {
    id: project.id,
    title: project.title,
    status: project.status,
    description: project.subtitle,
    abstract: project.descriptionParagraphs.join(" "),
    links: project.links?.map(({ label, href, isExternal }) => ({ label, href, isExternal })),
  };
}

const authoritativeArchiveAdditions: ResearchWork[] = [
  {
    id: "couples-therapy-divided-america",
    title: "Couples Therapy for a Divided America: Assessing the Effects of Reciprocal Group Reflection on Partisan Polarization",
    status: "Journal Article",
    venue: "Political Behavior (2025)",
    authors: [
      { givenName: "Hannah", familyName: "Baron", displayName: "Hannah Baron" },
      { givenName: "Robert", familyName: "Blair", displayName: "Robert A. Blair" },
      { givenName: "Donghyun Danny", familyName: "Choi", displayName: "Donghyun Danny Choi" },
      { givenName: "Laura", familyName: "Gamboa", displayName: "Laura Gamboa" },
      { givenName: "Jessica", familyName: "Gottlieb", displayName: "Jessica Gottlieb" },
      { givenName: "Amanda Lea", familyName: "Robinson", displayName: "Amanda Lea Robinson" },
      { givenName: "Steven C.", familyName: "Rosenzweig", displayName: "Steven C. Rosenzweig" },
      { givenName: "Megan M.", familyName: "Turnbull", displayName: "Megan M. Turnbull" },
      { givenName: "Emily", familyName: "West", displayName: "Emily A. West", isEmilyWest: true },
    ],
    description: "Evaluates reciprocal group reflection as a depolarization intervention and shows that combining informational and emotional engagement can reduce partisan polarization.",
    abstract: "Overcoming America’s deep partisan polarization poses a unique challenge: Americans must be able to sharply disagree on who should govern while agreeing on more fundamental democratic principles. We study one model of depolarization—reciprocal group reflection—inspired by marital counseling and implemented by a non-governmental organization, Braver Angels. We randomly assigned undergraduates at four universities either to participate in a Braver Angels workshop or simply to complete three rounds of surveys. The workshops substantially reduced polarization according to explicit and implicit measures. They also increased participants’ willingness to donate to programs aimed at depolarizing political conversations. These effects are consistent across partisan groups, though some dissipate over time. Using qualitative data, and building on contact and deliberative theories, we argue that depolarization is especially effective when it includes both informational and emotional components, such that citizens who are moved to empathize with outgroup members become more likely to internalize new information about them.",
    links: [{ label: "View Article", href: "https://link.springer.com/article/10.1007/s11109-024-09993-z", isExternal: true }],
  },
  {
    id: "reversion-to-mean-latino-voting",
    title: "Reversion to the Mean, or Their Version of the Dream? An Analysis of Latino Voting in 2020",
    status: "Journal Article",
    venue: "American Political Science Review (2025)",
    authors: [
      { givenName: "Bernard", familyName: "Fraga", displayName: "Bernard Fraga" },
      { givenName: "Yamil", familyName: "Velez", displayName: "Yamil Velez" },
      { givenName: "Emily", familyName: "West", displayName: "Emily A. West", isEmilyWest: true },
    ],
    description: "Examines the demographic and ideological foundations of the shift toward Donald Trump among Latino voters in 2020.",
    abstract: "In 2020, support for Joe Biden among Latina/o/x voters was 8 percentage points lower than support for Hillary Clinton in 2016, the largest drop of any racial/ethnic group. While much media and academic attention has focused on understanding the impact of misinformation, COVID-19 concerns, and racial animus on Latino voters in 2020, we take a step back and clarify the demographic and core ideological characteristics of Latino voters who voted for Donald Trump in 2020. Using a mix of national survey data, precinct returns, and voter file records, we disaggregate components of electoral change. We find evidence of an increasing alignment between Latinos’ ideology, issue positions, and vote choice. Correspondingly, we observe significant pro-Trump shifts among working-class Latinos and modest evidence of a pro-Trump shift among Latinos closer to the immigration experience. These findings, coupled with an analysis of the 2022 CES, point to a more durable Republican shift than currently assumed.",
    links: [{ label: "Read Paper", href: "https://www.dropbox.com/scl/fi/w50jxr57h4cpeawwd5vdv/reversion-to-the-mean-or-their-version-of-the-dream-latino-voting-in-an-age-of-populism.pdf?rlkey=2iqwgsgzapwcf5igbhgasx2vg&e=1&dl=0", isExternal: true }],
  },
  {
    id: "descriptive-representation-labor-market",
    title: "How Descriptive Representation Increases Women’s Labor Market Participation",
    status: "Journal Article",
    venue: "Political Behavior (2024)",
    authors: [
      { givenName: "Emily", familyName: "West", displayName: "Emily A. West", isEmilyWest: true },
      { givenName: "Dominik", familyName: "Duell", displayName: "Dominik Duell" },
    ],
    description: "Shows that presenting women’s representation in Congress as an achievement increases women’s willingness to consider a wider range of job opportunities.",
    abstract: "Addressing the question of how to tackle gender inequalities, we test whether women who perceive women’s representation in politics as achievement are empowered. We embed an experiment in an online survey conducted on a sample of 4,545 U.S. women, varying whether the number of women in Congress is presented as achievement or reason for concern. We find that women who are presented with the ‘achievement’ frame are more likely to consider job opportunities for a range of jobs. Heterogeneity based on pre-treatment moderators, particularly political partisanship, which correlates with a host of gender attitudes like feelings of marginalization, helps explain variation in treatment effects. The study broadens our understanding of how descriptive representation matters for non-political outcomes, showing that it empowers women to consider applying to more jobs.",
    links: [{ label: "View Article", href: "https://link.springer.com/article/10.1007/s11109-024-09948-4", isExternal: true }],
  },
  {
    id: "ingroup-bias-gendered-voting",
    title: "Ingroup Bias, Partisanship, and Gendered Voting",
    status: "Journal Article",
    venue: "Political Psychology (2022)",
    authors: [{ givenName: "Emily", familyName: "West", displayName: "Emily A. West", isEmilyWest: true }],
    description: "Uses experimental evidence to isolate expressive gender-based voting and identifies a distinctive preference among Republican men for male candidates.",
    abstract: "This study uses a novel experimental approach to isolate ‘expressive’ or ‘noninstrumental’ payoffs to voting along identity lines, separating them from ‘substantive’ motivations. Applying social identity theory to the case of gender in U.S. elections, the study answers the question: Do some men and women receive a purely expressive payoff from preferring same-gender candidates? A series of experiments test whether a purely expressive payoff from voting along gender lines is stronger among certain voters. Employing a self-affirmation treatment and measures of group-identity attachment, as well as a voting vignette, the evidence shows that Republican men receive a purely expressive payoff from voting for male over female candidates. That is, Republican men’s preference for a male over a female candidate can be reduced by a self-affirmation treatment that has subjects focus on their individuating characteristics, thereby temporarily ‘detaching’ them from their group attachments. Women and Democratic men are not affected by the self-affirmation treatment. This study deepens our understanding of voter gender bias in the United States, with a particular focus on the implications of ingroup bias among certain partisan voters for the supply of female candidates within party primary elections.",
    links: [{ label: "View Article", href: "https://onlinelibrary.wiley.com/doi/abs/10.1111/pops.12807", isExternal: true }],
  },
  {
    id: "women-congress-deliberation",
    title: "How Does the Rising Number of Women in the U.S. Congress Change Deliberation? Evidence from House Committee Hearings",
    status: "Journal Article",
    venue: "Quarterly Journal of Political Science (2022)",
    authors: [
      { givenName: "Pamela", familyName: "Ban", displayName: "Pamela Ban" },
      { givenName: "Justin", familyName: "Grimmer", displayName: "Justin Grimmer" },
      { givenName: "Jaclyn", familyName: "Kaslovsky", displayName: "Jaclyn Kaslovsky" },
      { givenName: "Emily", familyName: "West", displayName: "Emily A. West", isEmilyWest: true },
    ],
    description: "Shows that increasing women’s representation in congressional committees changes deliberative norms by reducing interruptions and encouraging more sustained topical engagement.",
    abstract: "The rising number of women in Congress changes deliberation. Using committee hearing transcripts from 1995 to 2017, we analyze how the gender composition of committees affects group dynamics in committee hearings. While we find limited evidence that increasing proportions of women affects women’s participation, we find that discussion norms within committees change significantly in the presence of more women. Namely, interruptions decrease when there are more women on the committee; with higher proportions of women, men are less likely to interrupt others. Furthermore, committee members are more likely to engage and stay on the same topics in the presence of more women, suggesting a shift in norms toward more in-depth exchange. Overall, our results show that increasing the proportion of women changes discussion dynamics within Congress by shifting norms away from interruptions and one-sided talk in committees, thereby shifting group norms that govern decision-making during an important policy-making stage.",
    links: [{ label: "View Article", href: "https://www.emerald.com/qjps/article-abstract/17/3/355/1330309/How-Does-the-Rising-Number-of-Women-in-the-U-S?redirectedFrom=fulltext", isExternal: true }],
  },
  {
    id: "discrimination-public-accommodations",
    title: "Discrimination in Public Accommodations",
    status: "Journal Article",
    venue: "Political Science Research and Methods (2020)",
    authors: [
      { givenName: "Anna", familyName: "Harvey", displayName: "Anna Harvey" },
      { givenName: "Emily", familyName: "West", displayName: "Emily A. West", isEmilyWest: true },
    ],
    description: "Uses historical legal variation to estimate how protections against discrimination in public accommodations affected the physical well-being of black Union Army veterans.",
    abstract: "Despite widespread belief in the efficacy of statutes prohibiting discrimination in public accommodations, including protections for the use of privately provided yet publicly available services such as transportation, hotels, and restaurants, we lack causal estimates of the impacts of these statutes on the well-being of those they are designed to protect. We leverage the U.S. Supreme Court’s 1883 strike of the public accommodations provisions in the Civil Rights Act of 1875, along with variation in state-level statutes, to identify the impact of the Act’s public accommodations provisions. Using a panel of repeated geo-located medical exams of U.S. Colored Troops and white Union Army veterans, and a series of difference-in-differences, geographic regression discontinuity, and placebo designs, estimates consistently suggest that the Court’s ruling led to meaningful weight losses for U.S. Colored Troops veterans in states without state-level public accommodations statutes. These findings suggest that statutes prohibiting discrimination in public accommodations can have significant positive impacts on the well-being of those they are designed to protect.",
    links: [{ label: "View Article", href: "https://www.cambridge.org/core/journals/political-science-research-and-methods/article/abs/discrimination-in-public-accommodations/4E4FB04679AB57F520B0554D727525F7", isExternal: true }],
  },
  {
    id: "repressed-productive-potential-revolt",
    title: "Repressed Productive Potential and Revolt: Insights from an Insurgency in Burundi",
    status: "Journal Article",
    venue: "Political Science Research and Methods (2019)",
    authors: [
      { givenName: "Cyrus", familyName: "Samii", displayName: "Cyrus Samii" },
      { givenName: "Emily", familyName: "West", displayName: "Emily A. West", isEmilyWest: true },
    ],
    description: "Develops and tests a glass-ceiling account of revolt in which members of a repressed group with greater productive potential may be especially motivated to join insurgency.",
    abstract: "The relationship between participation in revolt and individuals’ economic conditions is among the most debated in political science. While conventional economic theory suggests that those who face the poorest economic prospects are most inclined to fight, extant evidence is decidedly mixed. We address this puzzling variation by analyzing the interplay between macro-structural conditions and individuals’ micro-level circumstances. Under conditions of severe group repression, we show how a ‘glass-ceiling’ logic may operate: among the repressed group, those with relatively high productive potential may be most motivated to revolt. We test this with in-depth analysis of participation in the 1993–2003 Burundian insurgency. The data are consistent with numerous implications of the glass-ceiling logic and inconsistent with extant alternative explanations.",
    links: [{ label: "View Article", href: "https://www.cambridge.org/core/journals/political-science-research-and-methods/article/abs/repressed-productive-potential-and-revolt-insights-from-an-insurgency-in-burundi/89855703524643BC7D2084242E33059B", isExternal: true }],
  },
  {
    id: "descriptive-representation-political-efficacy",
    title: "Descriptive Representation and Political Efficacy: Evidence from Obama and Clinton",
    status: "Journal Article",
    venue: "Politics, Groups, and Identities (2017)",
    authors: [{ givenName: "Emily", familyName: "West", displayName: "Emily A. West", isEmilyWest: true }],
    description: "Examines whether the electoral success of candidates who share citizens’ racial or gender identities increases political efficacy.",
    abstract: "Existing theory suggests that individuals who share their identity with elected officials should have more positive attitudes toward government. However, the effect has not been well identified among African Americans, and the hypothesis is underexplored with respect to women. Thus, I examine the effects of Barack Obama and Hillary Clinton’s successes on African American and female political efficacy, using Iowa Electronic Markets contract prices during the 2008 primary to proxy daily shifts in perceptions of Obama and Clinton’s likelihood of winning. I combine this with daily political efficacy measures from the 2008 National Annenberg Election Study. African American efficacy increases with Obama’s perceived probability of success, while white Democrats who prefer Obama are unaffected, suggesting that the effect among African Americans is driven by race and not the success of a preferred candidate. Clinton’s price is not correlated with women’s efficacy, suggesting that descriptive representation’s effects are less pronounced among women.",
    links: [{ label: "View Article", href: "https://www.journals.uchicago.edu/doi/abs/10.1086/688888", isExternal: true }],
  },
];

// One deduplicated editorial archive. Exact-title duplicates are represented by
// their shared Research record rather than copied into this array twice.
const archiveAdditionById = new Map(authoritativeArchiveAdditions.map((work) => [work.id, work]));

function verifiedArchiveAddition(id: string): ResearchWork {
  const work = archiveAdditionById.get(id);
  if (!work) throw new Error(`Missing verified archive work: ${id}`);
  return work;
}

const scholarshipOnlyWorks: ResearchWork[] = [
  {
    id: "facing-what-we-believe",
    title: "Facing What We Believe",
    subtitle: "When Our Certainty Is Shaken and We Have to Say Why",
    status: "Book Project",
    description: "Develops Recursive Reflection Theory as an account of political belief revision through the evaluation of explanatory frameworks.",
    abstract: "Facing What We Believe argues that political beliefs change not simply because people encounter new information or persuasive arguments, but because they come to recognize that their existing explanations no longer adequately account for what they believe. These moments expose tensions within the explanatory frameworks through which people organize beliefs, values, identities, and experiences, making deeper revision possible. Drawing on original experiments, AI-mediated conversations, and transcript-based analyses of political discussion, the book develops Recursive Reflection Theory as an account of how people evaluate and reorganize their own explanations. It argues that meaningful belief revision depends less on persuasion than on the conditions that prompt people to reconsider the adequacy of the frameworks through which they understand the political world—and explains why those conditions are increasingly rare in contemporary politics.",
  },
];

const scholarshipOnlyWorkById = new Map(scholarshipOnlyWorks.map((work) => [work.id, work]));

function verifiedScholarshipOnlyWork(id: string): ResearchWork {
  const work = scholarshipOnlyWorkById.get(id);
  if (!work) throw new Error(`Missing verified Scholarship-only work: ${id}`);
  return work;
}

export const scholarshipSections: Array<{
  title: string;
  groups: Array<{ title?: string; works: ResearchWork[] }>;
}> = [
  {
    title: "Under Review / In Press / Working (2026)",
    groups: [{
      works: [
        verifiedProject("recursive-reflection-theory"),
        verifiedProject("revealing-explanatory-frameworks"),
        verifiedWork("ideological-constraint-interaction"),
        verifiedWork("survey-to-speech"),
      ],
    }],
  },
  {
    title: "Book Projects",
    groups: [{ works: [verifiedWork("architecture-of-understanding"), verifiedScholarshipOnlyWork("facing-what-we-believe")] }],
  },
  {
    title: "Theory & Working Papers",
    groups: [{
      works: [
        verifiedWork("beyond-belief"),
        verifiedWork("political-reasoning-tensions"),
      ],
    }],
  },
  {
    title: "Published",
    groups: [
      { title: "2026", works: [verifiedWork("partisan-social-norms-racial-attitudes")] },
      { title: "2025", works: [verifiedArchiveAddition("couples-therapy-divided-america"), verifiedArchiveAddition("reversion-to-mean-latino-voting")] },
      { title: "2024", works: [verifiedArchiveAddition("descriptive-representation-labor-market")] },
      { title: "2022", works: [verifiedArchiveAddition("ingroup-bias-gendered-voting"), verifiedArchiveAddition("women-congress-deliberation"), verifiedWork("partisanship-social-identity")] },
      { title: "2020", works: [verifiedArchiveAddition("discrimination-public-accommodations")] },
      { title: "2019", works: [verifiedArchiveAddition("repressed-productive-potential-revolt")] },
      { title: "2017", works: [verifiedArchiveAddition("descriptive-representation-political-efficacy")] },
    ],
  },
];

export const publicationArchiveWorks = scholarshipSections.flatMap((section) =>
  section.groups.flatMap((group) => group.works),
);
