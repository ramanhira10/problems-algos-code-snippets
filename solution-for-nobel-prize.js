const awards = [
    {
      name: 'James Peebles',
      category: 'Physics',
      research: 'Theoretical discoveries in physical cosmology',
      year: 2019,
    },
    {
      name: 'Michel Mayor',
      category: 'Physics',
      research: 'Discovery of an exoplanet orbiting a solar-type star',
      year: 2019,
    },
    {
      name: 'Didier Queloz',
      category: 'Physics',
      research: 'Discovery of an exoplanet orbiting a solar-type star',
      year: 2019,
    },
    {
      name: 'John B. Goodenough',
      category: 'Chemistry',
      research: 'Development of lithium-ion batteries',
      year: 2019,
    },
    {
      name: 'M. Stanley Whittingham',
      category: 'Chemistry',
      research: 'Development of lithium-ion batteries',
      year: 2019,
    },
    {
      name: 'Akira Yoshino',
      category: 'Chemistry',
      research: 'Development of lithium-ion batteries',
      year: 2019,
    },
    {
      name: 'Arthur Ashkin',
      category: 'Physics',
      research: 'Optical tweezers and their application to biological systems',
      year: 2018,
    },
    {
      name: 'Gerard Mourou',
      category: 'Physics',
      research: 'Method of generating high-intensity, ultra-short optical pulses',
      year: 2018,
    },
    {
      name: 'Donna Strickland',
      category: 'Physics',
      research: 'Method of generating high-intensity, ultra-short optical pulses',
      year: 2018,
    },
    {
      name: 'Frances H. Arnold',
      category: 'Chemistry',
      research: 'Directed evolution of enzymes',
      year: 2018,
    },
    {
      name: 'George P. Smith',
      category: 'Chemistry',
      research: 'Phage display of peptides and antibodies.',
      year: 2018,
    },
    {
      name: 'Sir Gregory P. Winter',
      category: 'Chemistry',
      research: 'Phage display of peptides and antibodies.',
      year: 2018,
    },
];

const getPrizes = awards => {

    const prizes = [];

    const awardYears = awards.map(award => award.year);

    awardYears.forEach(year => {
        // get year wise awards
        const yearWiseAwards = awards.filter(award => award.year === year);

        // get year wise categroes from year wise awards
        const yearWiseCategories = yearWiseAwards.map(award => award.category);

        const winner = yearWiseCategories.filter(award => {
        
            
            // prepare the object and push here
            //prizes.push();
        });

        

        
    });
    
};



const prizes = getPrizes(awards);

console.log(prizes);

