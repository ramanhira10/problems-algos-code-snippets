/**
 * Nobel prizes are awarded jointly to one or more research teams in each category.
For e.g. In 2019, The Nobel Prize in Physics 2019 was awarded "for contributions to our
understanding of the evolution of the universe and Earth's place in the cosmos" with one half
to James Peebles "for theoretical discoveries in physical cosmology", the other half jointly to
Michel Mayor and Didier Queloz "for the discovery of an exoplanet orbiting a solar-type star."
James Peebles’ prize share is 1/2 and Michel Mayor got 1/4 and Didier Queloz got 1/4.

Please share the solution for the same :


1. Come up with a data model which can represent input and output.
2. Write a function which can take a single parameter(input) and returns(output).
3. Write an optimised solution to reduce the number of iterations - avoid group by.
4. Sort the winners based on their share in the output.

https://jsbin.com/rusunateyo/edit?html,js,output
 */
//Sample Input
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

//Sample Output

const OUTPUT_PRIZES = [
    {
      category: 'Physics',
      year: 2019,
      winners: [
        { name: 'James Peebles', share: 0.5 },
        { name: 'Michel Mayor', share: 0.25 },
        { name: 'Didier Queloz', share: 0.25 },
      ],
    },
    {
      category: 'Chemistry',
      year: 2019,
      winners: [
        { name: 'John B. Goodenough', share: 0.3333 },
        { name: 'M. Stanley Whittingham', share: 0.3333 },
        { name: 'Akira Yoshino', share: 0.3333 },
      ],
    },
    {
      category: 'Physics',
      year: 2018,
      winners: [
        { name: 'Arthur Ashkin', share: 0.5 },
        { name: 'Gerard Mourou', share: 0.25 },
        { name: 'Donna Strickland', share: 0.25 },
      ],
    },
    {
      category: 'Chemistry',
      year: 2018,
      winners: [
        { name: 'Frances H. Arnold', share: 0.5 },
        { name: 'George P. Smith', share: 0.25 },
        { name: 'Sir Gregory P. Winter', share: 0.25 },
      ],
    },
];

const getPrizes = awards => {

    const prizes = [];

    const availableYears = awards.map(award => award.year);

    const availableCategories = awards.map(award => award.category);

    const uniqueYears = [...new Set([...availableYears])];

    const uniqueCategories = [...new Set([...availableCategories])];

    uniqueYears.forEach(eachYear => {

        uniqueCategories.forEach(eachCategory => {
            const allWinners = awards.filter(_award => _award.category === eachCategory && _award.year === eachYear);

            const allResearcTopics = allWinners.map(({research}) => research);

            const objResearchTopic = {};

            allResearcTopics.forEach(researchTopic => {
                if(!objResearchTopic[researchTopic]) {
                    objResearchTopic[researchTopic] = 1;
                } else {
                    objResearchTopic[researchTopic] = objResearchTopic[researchTopic] + 1;
                }
            });

            const numberOfResearchTopics = Object.keys(objResearchTopic).length;
            
            const winners = [];

            for (let prop in objResearchTopic) {
                
                const _winners = allWinners
                    .filter(({research}) => research === prop)
                    .map(_w => {
                        return {
                            name: _w.name,
                            share: (1 / numberOfResearchTopics) * (1 / objResearchTopic[prop])
                        };
                    });

                winners.push(..._winners);
            }

            prizes.push({
                category: eachCategory,
                year: eachYear,
                winners: winners
            });
        });
    });

    return prizes;
};

const prizes = getPrizes(awards);

// Printing all the prizes
prizes.forEach(prize => console.log(prize));
