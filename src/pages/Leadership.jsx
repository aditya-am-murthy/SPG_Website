import { Link } from 'react-router-dom';
import './Leadership.css';

const CDN = 'https://images.squarespace-cdn.com/content/v1/5f5679c017299d539905d4a6/';

const officers = [
  {
    name: 'Aditya Murthy',
    role: 'President',
    img: CDN + 'f13e9643-ade9-4dc8-ad61-8932ad9909a7/Aditya+Murthy+headshot.png',
    href: 'https://aditya-am-murthy.github.io',
    bio: 'Aditya is a fourth-year undergraduate studying Computer Science and Engineering with a minor in Public Affairs. He bridges technical research — machine learning research, high-performance computing, and tech policy — with work on AI safety, data privacy, digital equity, and the environmental costs of AI infrastructure.',
  },
  {
    name: 'Stephanie Wert',
    role: 'Chair, External Relations',
    img: CDN + '751e60c2-8bfc-42bb-ad39-fb23ea5be76f/StephanieWertHeadshot.png',
    bio: 'Steph Wert is a UCLA Cognitive Neuroscience PhD candidate whose work focuses on how people learn, make decisions, and adapt to uncertainty. She believes that science should serve the public good, so she is passionate about connecting research, policy, and collective action. As co-chair of external relations, she aims to strengthen partnerships with decision-makers and help create a network of researchers prepared to engage with policy when their expertise is needed.',
  },
  {
    name: 'Joan Chimezie',
    role: 'Chair, External Relations',
    img: CDN + '2ba8ac0e-967f-4d44-9a7c-a72462019e2d/IMG_2695+2.JPG',
    bio: 'Joan is a Ph.D. candidate in the Department of Geography at UCLA, where her research focuses on wildfires, ecosystem dynamics, and climate. Joan is passionate about bridging science and policy to create more equitable, sustainable outcomes for communities.',
  },
  {
    name: 'Mariam Baghdasarian',
    role: 'Chair, External Relations',
    img: CDN + '63f51cd4-d1a6-4163-81c8-b6e865801fc5/F241D319-6CDB-4608-9809-97DD859D756B_1_201_a.jpg',
    href: 'https://www.linkedin.com/in/mariam-baghdasarian',
    bio: 'Mariam is a fourth-year undergraduate at UCLA majoring in Psychobiology. She is interested in biomedical research, primarily in the development of neuromuscular pharmaceutical therapies. She is also exploring the integration of ethics into University Chemistry courses.',
  },
  {
    name: 'Abhinanda Dash',
    role: 'Project Chair',
    img: CDN + '16e58d25-e4c5-4c94-8444-9a808254ad9c/Dash.jpg',
    bio: 'Abhinanda is a fourth-year doctoral candidate in the Department of Communication. She examines biases in split-second social perception and the consequences of biased visual perception in the real world. She aims to improve the incorporation of behavioral science principles into policymaking to nudge people to make better choices. She likes to play pickleball and visit national parks in her free time.',
  },
  {
    name: 'Ava Francis',
    role: 'Chair, Media & Communications',
    img: CDN + '45c5154e-3443-4339-968d-ebb8c6e70cc7/AF_PFP.jpg',
    bio: 'Ava Francis is a third-year Cognitive Science undergraduate. She is interested in how the intersection of cognition, information studies, and digital media can be used to inform educational practices and access. She believes expanding engagement in science policy can create a more proactive and considerate electorate.',
  },
  {
    name: 'Robert "Bobby" del Carlo',
    role: 'Chair, Science Communication & Policy Writing',
    img: CDN + '03efd23f-97fd-49a8-81ed-d8dd04789acc/headshot_robert_del_carlo_2026.jpg',
    bio: 'Robert "Bobby" del Carlo, Ph.D. is a biophysicist and neuropharmacologist now training as a physician at the UCLA David Geffen School of Medicine. He hails from Reno, Nevada, where the rural landscape and starry night skies inspired an appreciation for admiring nature, speaking plainly, and learning deeply. As an award-winning educator, science communicator, and published scientist, his mission is to help you tell the story of the science that matters to you and your community.',
  },
  {
    name: 'Soham Ray',
    role: 'Chair, Finance & Funding Opportunities',
    img: CDN + '1fb659ee-47e3-49ff-ab30-7a7836046ac0/SohamRay.jpg',
    bio: 'Soham is a Ph.D. candidate in Environmental Engineering researching how environmental contaminants can be removed using bioremediation, and how antibiotic resistance spreads and persists in the environment. Before graduate school, Soham worked in seaweed aquaculture, air quality monitoring, and restoration ecology. Outside of school, Soham loves to cook, hike in LA and national parks, read, and play basketball!',
  },
];

const pastLeadership = [
  {
    era: '2025–2026',
    members: [
      { name: 'Erin Morrow',        dept: 'PhD Candidate, Cognitive Neuroscience',                          role: 'President' },
      { name: 'Jade Fachin',         dept: 'PhD Candidate, Molecular, Cellular, & Integrative Physiology',   role: 'President' },
      { name: 'Danny Nguyen',        dept: 'Undergraduate, Psychology & Asian American Studies',              role: 'Chair, External Relations' },
      { name: 'Arhan Surapaneni',    dept: 'Undergraduate, Public Affairs',                                  role: 'Chair, Internal Relations' },
      { name: 'Tanya Ivanov',        dept: 'PhD Candidate, Immunology, Microbes, & Molecular Pathogenesis',  role: 'Chair, Internal Relations' },
      { name: 'Clare McCann',        dept: 'PhD Candidate, Psychology',                                      role: 'Chair, Science Communication & Policy Writing' },
    ],
  },
  {
    era: '2022–2025',
    members: [
      { name: 'Natalie Gehred',      dept: 'PhD Candidate, Molecular Biology',                               role: 'President' },
      { name: 'Kayla Lim',           dept: 'PhD Candidate, Molecular, Cellular, & Integrative Physiology',   role: 'President' },
      { name: 'Yuki Hebner',         dept: 'PhD Candidate, Molecular Biology',                               role: 'President' },
      { name: 'Bineh Ndefru',        dept: 'PhD Candidate, Materials Science & Engineering',                 role: 'President' },
      { name: 'Taniya Matthew',      dept: 'Undergraduate, MIMG',                                            role: 'Chair, Media & Communications' },
      { name: 'Caitlin Goodpaster',  dept: 'PhD Candidate, Neuroscience',                                    role: 'Chair, Community Outreach' },
      { name: 'Zoe Dobler',          dept: 'PhD Candidate, Neuroscience',                                    role: 'VP of Science Communication' },
      { name: 'Ashna Aggarwal',      dept: 'PhD Candidate, Physics',                                         role: 'VP of Government Relations' },
      { name: 'Carolyn Amir',        dept: 'PhD Candidate, Neuroscience',                                    role: 'Deputy, Government Relations' },
      { name: 'Katherine Espinoza',  dept: 'PhD Candidate, Neuroscience',                                    role: 'VP of Outreach & Community Relations' },
      { name: 'Lauren Wagner',       dept: 'PhD Candidate, Neuroscience',                                    role: 'VP of Science Diplomacy' },
      { name: 'Juri Kimura',         dept: 'Undergraduate, Cognitive Science & Public Affairs',               role: 'Deputy, Media & Membership' },
      { name: 'Madison Pfau',        dept: 'Undergraduate, Ecology & Evolutionary Biology',                  role: 'Deputy, Media & Membership' },
      { name: 'Lexie Baughman',      dept: 'Undergraduate, MIMG',                                            role: 'Deputy, Media & Communication' },
    ],
  },
  {
    era: '2017–2021',
    members: [
      { name: 'Jennifer Tribble',         dept: 'PhD Candidate, Neuroscience',                              role: 'President' },
      { name: 'Zoe Guttman',             dept: 'PhD Candidate, Neuroscience',                              role: 'President' },
      { name: 'Maria Lazaro',            dept: 'Postdoctoral Scholar, Neuroscience',                       role: 'Co-Vice President' },
      { name: 'Conner Philson',          dept: 'PhD, Ecology & Evolutionary Biology',                      role: 'VP of External Affairs' },
      { name: 'Sammy Mensah',            dept: 'PhD, Chemistry & Biochemistry',                            role: 'Government Engagement Officer' },
      { name: 'Kaiser Atai',             dept: 'PhD, Molecular Biology',                                   role: 'Academic Engagement Officer' },
      { name: 'Angela Yu',               dept: 'Undergraduate, Psychobiology & Global Health',             role: 'Academic Engagement Officer' },
      { name: 'Anna Goldberg',           dept: 'Undergraduate, MCDB',                                      role: 'Community Engagement Officer' },
      { name: 'Emily Ryznar',            dept: 'PhD, Ecology & Evolutionary Biology',                      role: 'Community Engagement Officer' },
      { name: 'Mary Flaim',              dept: 'PhD Candidate, Psychology',                                role: 'Community Engagement Officer' },
      { name: 'Jonathan Balk',           dept: 'Undergraduate, MCDB',                                      role: 'Government Engagement Officer' },
      { name: 'Clincy Cheung',           dept: 'PhD Candidate, Materials Science & Engineering',           role: 'Government Engagement Officer' },
      { name: 'William Zou',             dept: 'Undergraduate, Environmental Science & Engineering',       role: 'Government Engagement Officer' },
      { name: 'Elizabeth Reid-Wainscoat',dept: 'PhD Candidate, Ecology & Evolutionary Biology',           role: 'Government Engagement Officer' },
      { name: 'Dominik Stemer',          dept: 'PhD Candidate, Materials Science & Engineering',           role: 'Academic Engagement Officer' },
      { name: 'Catharine Krebs',         dept: 'PhD Candidate, Human Genetics',                           role: 'Academic Engagement Officer' },
      { name: 'Alejandra Rios',          dept: 'PhD Candidate, Physics & Biology in Medicine',            role: 'Community Engagement Officer' },
      { name: 'Ariella Machness',        dept: 'PhD Candidate, Materials Science & Engineering',           role: 'Treasurer' },
      { name: 'Dane Stanfield',          dept: 'PhD Candidate, Chemistry & Biochemistry',                  role: 'Secretary' },
      { name: 'Jacqueline Qu',           dept: 'Undergraduate, Philosophy & Mathematics',                  role: 'Academic Engagement Officer' },
      { name: 'Brandon Tornero',         dept: 'Undergraduate, Architectural Studies',                     role: 'Social Media & Website' },
    ],
  },
];

export default function Leadership() {
  return (
    <div className="leadership-page">
      <div className="page-hero">
        <div className="container">
          <span className="eyebrow" style={{ color: 'rgba(255,255,255,.65)' }}>About · Leadership</span>
          <h1 className="serif page-hero-title">Leadership Team</h1>
          <p className="page-hero-sub">
            The students and researchers running SPG — and those who built what it is today.
          </p>
        </div>
      </div>

      <div className="ldr-body">
        <div className="container">

        </div>{/* end container — grid goes full width */}
        <div className="officers-grid-wrap">
            <div className="officers-grid">
              {officers.map(o => (
                <div key={o.name} className="officer-card">
                  {/* Photo */}
                  <div className="officer-photo-wrap">
                    <img src={o.img} alt={o.name} className="officer-photo" loading="lazy" />
                  </div>
                  {/* Name/title strip — visible by default */}
                  <div className="officer-nameplate">
                    <div className="officer-name">{o.name}</div>
                    <div className="officer-role">{o.role}</div>
                  </div>
                  {/* Bio overlay — visible on hover */}
                  <div className="officer-bio-overlay">
                    <div className="officer-name">{o.name}</div>
                    <div className="officer-role">{o.role}</div>
                    <p className="officer-bio">{o.bio}</p>
                    {o.href && (
                      <a
                        href={o.href}
                        className="officer-connect-btn"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Connect with {o.name.split(' ')[0]} <span aria-hidden="true">↗</span>
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
        </div>{/* end officers-grid-wrap */}
        <div className="container">

          {/* Past leadership */}
          <section className="ldr-section past-section">
            <span className="eyebrow">Former Leadership</span>
            <h2 className="serif ldr-section-h">Past Officers</h2>
            {pastLeadership.map(era => (
              <div key={era.era} className="past-era">
                <div className="past-era-label serif">{era.era}</div>
                <div className="past-era-list">
                  {era.members.map(m => (
                    <div key={m.name + m.role} className="past-member">
                      <span className="past-member-name">{m.name}</span>
                      <span className="past-member-sep">·</span>
                      <span className="past-member-dept">{m.dept}</span>
                      <span className="past-member-sep">|</span>
                      <span className="past-member-role">{m.role}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </section>

        </div>
      </div>
    </div>
  );
}
