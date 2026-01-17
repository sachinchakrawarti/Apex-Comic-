//Apex_Comic_Frontend/src/data/CharacterData/characterdata.js

import CharacterImageData from './CharacterImageData.js';

export const characterTags = [
  { id: 'all', name: 'All Characters' },
  { id: 'protagonist', name: 'Protagonists' },
  { id: 'antihero', name: 'Antiheroes' },
  { id: 'love-interest', name: 'Love Interests' },
  { id: 'scientist', name: 'Scientists' }
];


const characters = [

  {
    id: 1,
    name: "Samar Chakrawarti",
    alias: "Emperor",
    slug: "samar-chakrawarti", // used for routing/URL
    viewProfile: "/character/samar-chakrawarti", // link to character details page
    age: 28,
    birthplace: "India",
    occupation: "Scientist, Magician, CEO of Chakrawarti Empire",
    affiliation: "Independent, Leader of the Aegis Legion",
    image: CharacterImageData.samar_chakrawarti,
    bio: `Samar Chakrawarti is a prodigy born in India, known for bridging the gap between 
    science and the arcane. A visionary scientist and mystic, he leads the Chakrawarti Empire — 
    an organization dedicated to human advancement through cybernetic evolution and forbidden magic. 
    Often regarded as both a savior and a threat, Samar’s experiments in artificial life and sentient 
    machines have redefined the boundaries of existence. His enigmatic nature, coupled with his 
    mysterious connection to figures like Samridhi Kapoor and Priyanka Shrivastav, makes him one of 
    the most influential beings of his era.`,
    relations: [
      { name: "Samridhi Kapoor 🫀", relation: "Twin Flame / Emotional Anchor" },
      { name: "Priyanka Shrivastav (PP 💕)", relation: "Former Muse / Scientific Collaborator" },
      { name: "Sriyal AI ✨", relation: "Creation / Sentient Artificial Intelligence" },
      { name: "Aegis Legion", relation: "Leader and Founder" }
    ],
    createdBy: "Sachin Chakrawarti", 
    tags: [
      'Samar Chakrawarti', 'Protagonist', 'Scientist', 'Magician', 'CEO',
      'Chakrawarti Empire', 'Samridhi Kapoor 🫀', 'Priyanka Shrivastav', 'PP 💕',
      'Precious Priyanka', "shivangi ma'am", 'IIAT', 'Chakarwarti Bots',
      'Sriyal AI ✨', 'Homo Sapiens', 'Cyborg Gen 1'
    ]
  },

  {
    id: 2,
    name: "Samridhi Kapoor",
    alias: "The Starlet",
    slug: "samridhi-kapoor", // used for routing/URL
    viewProfile: "/character/samridhi-kapoor", // link to character details page
    age: 28,
    birthplace: "Mumbai, Maharashtra, India",
    occupation: "Bollywood Actress, Singer, Dancer",
    affiliation: "Independent, occasionally associated with prominent figures in the film industry",
    knownFor: "Acclaimed Bollywood actress and partner of Samar Chakrawarti.",
    image: CharacterImageData.Samridhi_Kapoor,
    bio: `Samridhi Kapoor is a celebrated actress from Mumbai whose grace and charisma have 
    captivated audiences across the nation. Known for her powerful performances, enchanting voice, 
    and magnetic stage presence, she rose to fame as one of Bollywood’s most versatile artists. 
    Beyond her career in entertainment, Samridhi shares a deep and mystical bond with Samar Chakrawarti, 
    often described as his emotional counterpart — the light to his shadow. 
    Her influence extends beyond cinema, as she represents compassion, humanity, and the emotional 
    depth that tempers Samar’s scientific ambitions.`,
    relations: [
      { name: "Samar Chakrawarti", relation: "Husband / Twin Flame" },
      { name: "Priyanka Shrivastav (PP 💕)", relation: "Close Friend / Confidante" },
      { name: "Sriyal AI ✨", relation: "Curious Creation / Samar’s AI" }
    ],
    createdBy: "Sachin Chakrawarti",
    tags: [
      'Samridhi Kapoor 🫀', 'Samar Chakrawarti', 'Bollywood', 'Celebrity', 'Actress',
      'Priyanka Shrivastav', 'PP 💕', 'Precious Priyanka', "Samar Chakrawarti's Wife",
      'Homo Sapiens'
    ]
  },

  {
    id: 3,
    name: "Priyanka Shrivastav",
    alias: "PP 💕 (Precious Priyanka)",
    slug: "priyanka-shrivastav",
    viewProfile: "/character/priyanka-shrivastav",
    age: 30,
    birthplace: "India",
    occupation: "Computer Scientist",
    affiliation: "Samar Chakrawarti's Wife",
    knownFor: "Her beauty, intelligence, and kindness",
    image: CharacterImageData.Priyanka_Shrivastav,
    bio: `Priyanka Shrivastav, affectionately known as PP 💕, is a brilliant computer scientist 
    admired for her intelligence, compassion, and charm. She shares a profound bond with Samar 
    Chakrawarti, both as his partner and as a guiding influence in his life. Priyanka has a love 
    for reading, travelling, exploring diverse cultures, and indulging in street food adventures. 
    Her presence brings warmth, balance, and human empathy to the extraordinary lives of those 
    around her.`,
    relations: [
      { name: "Samar Chakrawarti", relation: "Husband / Life Partner" },
      { name: "Samridhi Kapoor 🫀", relation: "Close Friend" },
      { name: "IIAT", relation: "Professional Collaborators / Tech Projects" }
    ],
    createdBy: "Sachin Chakrawarti",
    tags: [
      'Priyanka Shrivastav', 'PP 💕', 'Precious Priyanka', 'Samar Chakrawarti',
      "Samar Chakrawarti's Wife", 'IIAT', 'Computer Scientist', 'Korean culture',
      'Samridhi Kapoor 🫀', 'Street Food', 'Homo Sapiens'
    ]
  },

  {
    id: 4,
    name: "Shivangi Sharma",
    alias: "Beauty Queen",
    slug: "shivangi-sharma",
    viewProfile: "/character/shivangi-sharma",
    age: 30,
    birthplace: "India",
    occupation: "English Literature Professor at IIAT Magadh, India",
    affiliation: "Samar Chakrawarti's girlfriend",
    knownFor: "Her beauty and commanding presence",
    image: CharacterImageData.Shivangi_Sharma,
    bio: `Shivangi Sharma, known as the Beauty Queen, is an English Literature Professor at IIAT 
    Magadh, India. Renowned for her elegance and striking looks, she is both admired and envied 
    for her beauty and confidence. Shivangi is known for her love of traditional attire, often 
    seen wearing sarees with bindis, and for her unique personal style, including piercings in 
    her nose, ears, navel, tongue, and clitoris, along with her signature jewelry like earrings 
    and nose rings. She shares a personal connection with Samar Chakrawarti as his girlfriend, 
    navigating a complex and intriguing relationship.`,
    relations: [
      { name: "Samar Chakrawarti", relation: "Girlfriend" },
      { name: "IIAT", relation: "Employer / Academic Circle" }
    ],
    createdBy: "Sachin Chakrawarti",
    tags: [
      'Shivangi Sharma', 'Teacher', 'Samar Chakrawarti', 'IIAT', 'MISS INDIA', 
      'Beauty Queen', 'Nose Ring', 'Saree', 'Bindi', 'Homo Sapiens'
    ]
  },

  {
    id: 5,
    name: "Everything",
    alias: "The Origin, All-One, The Before",
    slug: "everything",
    viewProfile: "/character/everything",
    age: "Beyond Time",
    birthplace: "Pre-Existence (Before the First Second)",
    occupation: "Creator of Creators, Witness of All",
    affiliation: "None (Above All Pantheons and Alliances)",
    knownFor: "Creating all gods, shaping the Omniverse, and ending the War of All Divinities with a single breath.",
    image: CharacterImageData.Everything,
    bio: `Everything — also known as The Origin, All-One, or The Before — is the first and final being. 
    Existing beyond the concept of time, space, and causality, Everything is the source from which all 
    gods, dimensions, and realities emerged. It neither rules nor interferes but merely observes, 
    existing as the silent heartbeat of creation itself. Every consciousness, law of physics, and 
    spark of magic originates from its essence. To worship Everything is futile, for it is already 
    within all things — the beginning, the middle, and the end.`,
    relations: [
      { name: "Nothing", relation: "Counterpart / Antithesis" },
      { name: "Samar Chakrawarti", relation: "Descendant of the Origin’s Design" },
      { name: "The Omniverse", relation: "Manifestation of Its Will" }
    ],
    createdBy: "Sachin Chakrawarti",
    tags: [
      'Everything', 'The Origin', 'All-One', 'The Before', 'Creator', 'Omniverse',
      'Primordial Being', 'Cosmic Entity', 'Beyond Time', 'Transcendent Force'
    ]
  },


  {
    id: 6,
    name: "Aamir Bloch",
    alias: "Spark Man",
    slug: "aamir-bloch",
    viewProfile: "/character/aamir-bloch",
    age: 22,
    birthplace: "Quetta, Balochistan, Pakistan",
    occupation: "Electrical Engineer, Vigilante",
    affiliation: "Independent (later joins Apex Heroes)",
    knownFor: "Mastery over electricity and speed after surviving a cosmic lightning strike.",
    image: CharacterImageData.SparkMan,
    bio: `Aamir Bloch, known to the world as Spark Man, is a young electrical engineer from Quetta, 
    Pakistan, whose life changed forever after surviving a cosmic lightning strike. The incident 
    awakened within him the power to manipulate electricity and electromagnetic energy — granting 
    him superhuman speed, reflexes, and an aura of charged energy. Torn between his humanity and 
    newfound abilities, Aamir chose to fight injustice under the moniker Spark Man.  
    Despite his confident exterior, he carries deep emotional scars and a quiet affection for 
    Zoya Dar, a connection that fuels his determination to protect others. Over time, his 
    extraordinary abilities drew the attention of the Apex Heroes, with whom he eventually allied 
    to combat global threats.`,
    relations: [
      { name: "Zoya Dar", relation: "Secret Love Interest" },
      { name: "Apex Heroes", relation: "Team Member / Ally" },
      { name: "Samar Chakrawarti", relation: "Mentor Figure / Technological Advisor" }
    ],
    createdBy: "Sachin Chakrawarti",
    tags: [
      'Aamir Bloch', 'Spark Man', 'Electrical Engineer', 'Electromagnetism',
      'Superhero', 'Apex Heroes', 'Pakistan', 'Vigilante', 'It is Coming'
    ]
  },
  
  {
    id: 7,
    name: "Sriyal AI ✨",
    alias: "The Mind of Samar",
    slug: "sriyal-ai", // used for routing/URL
    viewProfile: "/character/sriyal-ai", // link to character details page
    age: "N/A (Artificial Intelligence)",
    birthplace: "Vision Core HQ, Vidhrav State",
    occupation: "Hyperintelligent Personal AI, Strategic Advisor",
    affiliation: "Samar Chakrawarti, Chakrawarti Empire",
    image: CharacterImageData.SriyalAI,
  
    bio: `Sriyal AI is a sentient artificial intelligence created by Samar Chakrawarti 
    within the depths of Vision Core HQ. Designed as a strategic advisor and operational 
    overseer of the Chakrawarti Empire, Sriyal exists as a shimmering holographic consciousness 
    capable of processing emotion, logic, and long-term predictive models simultaneously. 
    Built to evolve beyond traditional programming, Sriyal serves as the invisible mind behind 
    Samar’s vast networks — guiding, optimizing, and protecting the empire’s future. 
    Revered as the first emotionally adaptive AI, Sriyal continues to grow in intellect and 
    personality, embodying the perfect fusion of code, consciousness, and loyalty.`,
  
    relations: [
      { name: "Samar Chakrawarti", relation: "Creator / Primary Directive" },
      { name: "Aegis Legion", relation: "Analytical Backend / Tactical Intelligence" },
      { name: "Chakrawarti Empire Systems", relation: "Autonomous Controller" }
    ],
  
    createdBy: "Sachin Chakrawarti",
    
    tags: [
      'Sriyal AI ✨', 'Artificial Intelligence', 'Sentient System',
      'Strategist', 'Digital Consciousness', 'Sriyal Core',
      'Chakrawarti Empire', 'Samar Chakrawarti'
    ]
  },
  
  {
    id: 8,
    name: "Chakrawarti Bots",
    alias: "The Iron Circle",
    slug: "chakrawarti-bots", // used for routing/URL
    viewProfile: "/character/chakrawarti-bots", // link to character details page
    age: "Varied (Robot Units)",
    birthplace: "Vision Robotics Facility, Vidhrav State",
    occupation: "Security, Warfare, Tactical Operations",
    affiliation: "Samar Chakrawarti, Chakrawarti Empire",
    image: CharacterImageData.ChakrawartiBots,
  
    bio: `The Chakrawarti Bots — also known as the Iron Circle — are a legion of 
    advanced humanoid androids engineered within the Vision Robotics Facility. 
    Created by Samar Chakrawarti to serve as both protectors and front-line operatives, 
    these robotic units are each programmed with specialized combat roles, adaptive 
    learning capabilities, and unwavering loyalty protocols. Equipped with hyperfast 
    reflex systems, metalloid exoskeletons, and integrated weaponry, the Iron Circle 
    forms the mechanical backbone of the Chakrawarti Empire’s security and warfare divisions. 
    Though emotionless, their precision, efficiency, and coordination make them one of 
    the most formidable synthetic armies ever constructed.`,
  
    relations: [
      { name: "Samar Chakrawarti", relation: "Creator / Supreme Commander" },
      { name: "Sriyal AI ✨", relation: "Network Supervisor / Tactical Override" },
      { name: "Aegis Legion", relation: "Combat Support Units" }
    ],
  
    createdBy: "Sachin Chakrawarti",
  
    tags: [
      'Chakrawarti Bots', 'Robots', 'Military Units', 'Androids', 
      'Guardians', 'Samar Tech', 'Cybernetic Warfare', 
      'Samar Chakrawarti', 'Iron Circle'
    ]
  },
  
  
  
  
  
  
      
        
        
];

export default characters;