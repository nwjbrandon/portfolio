// Fuzzy Approach For Text Classification https://www.researchgate.net/publication/3845652_A_fuzzy_similarity_approach_in_text_classification_task

const computerMembershipTable = (texts: [string, number][]) => {
  let uniqueTerms: { [id: string]: number } = {};
  let terms: string[] = [];
  let membershipTable: { [id: number]: number[] } = {};

  let n_terms = 0;

  // get unique terms
  for (let i = 0; i < texts.length; i++) {
    const text: string = texts[i][0].toLowerCase();
    const tokens = text.split(' ');
    for (const token of tokens) {
      if (!(token in uniqueTerms)) {
        terms.push(token);
        uniqueTerms[token] = n_terms;
        n_terms += 1;
      }
    }
    const label: number = texts[i][1];
    membershipTable[label] = [];
  }

  // prepare membership table
  for (const label in membershipTable) {
    membershipTable[label] = Array(n_terms).fill(0);
  }

  // compute degree of relationship
  for (let i = 0; i < texts.length; i++) {
    const text: string = texts[i][0].toLowerCase();
    const label: number = texts[i][1];

    const tokens = text.split(' ');
    for (const token of tokens) {
      const tokenId = uniqueTerms[token];
      membershipTable[label][tokenId] += 1;
    }
  }

  // normalize membership table
  for (let i = 0; i < n_terms; i++) {
    let total = 0;
    for (const label in membershipTable) {
      total += membershipTable[label][i];
    }
    for (const label in membershipTable) {
      membershipTable[label][i] /= total;
    }
  }

  return {
    uniqueTerms,
    membershipTable,
  };
};

const computeFuzzyRelationship = (fuzzyTable: any, text: string) => {
  const { uniqueTerms, membershipTable } = fuzzyTable;
  const tokens = text.split(' ');
  const counter: { [token: string]: number } = {};

  for (const token of tokens) {
    if (token in counter) {
      counter[token] += 1;
    } else {
      counter[token] = 1;
    }
  }

  // compute the fuzzy relation using hamacher fuzzy rule
  let labels: string[] = [];
  let relationship: number[] = [];
  for (const label in membershipTable) {
    labels.push(label);
    let conjunction = 0;
    let disjunction = 0;
    for (const token in counter) {
      let uD = counter[token] / tokens.length;
      let uR = 0;
      if (token in uniqueTerms) {
        const termId = uniqueTerms[token];
        uR = membershipTable[label][termId];
      }
      const product = (uR * uD) / (uR + uD - uR * uD);
      const sum = (uR + uD - 2 * uR * uD) / (1 - uR * uD + 1e-3);
      conjunction += product;
      disjunction += sum;
    }
    relationship.push(conjunction / disjunction);
  }
  return {
    labels,
    relationship,
  };
};

// const trainingTexts: [string, number][] = [
//     ['t1 t1 t2 t2', 0],
//     ['t1 t1 t3', 0],
//     ['t1 t2 t3 t6', 0],
//     ['t4 t4 t5', 1],
//     ['t4 t4 t4 t5', 1],
//     ['t3 t5 t5 t6', 1],
// ]

// const testingText: string = "t1 t1 t2 t2 t3 t6 t7"

// const fuzzyTable = computerMembershipTable(trainingTexts);
// console.log(fuzzyTable);
// const fuzzyRelationship = computeFuzzyRelationship(fuzzyTable, testingText);
// console.log(fuzzyRelationship)

const trainingTexts: [string, number][] = [
  ['what is his strengths', 0],
  ['how can I contact him', 1],
];

const responsesList: { [label: string]: string } = {
  '0': 'He is very determined and passionate',
  '1': 'You can contact him using his email nwjbrandon@gmail.com.',
};

const fuzzyTable = computerMembershipTable(trainingTexts);

const sleep = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const GetResponse = async (message: string) => {
  const { labels, relationship } = computeFuzzyRelationship(
    fuzzyTable,
    message.toLowerCase()
  );
  const responseIndex = labels[relationship.indexOf(Math.max(...relationship))];
  const response = responsesList[responseIndex];

  await sleep(500);
  const botUtterance = {
    message: response,
    user: 'bot',
    date: new Date(),
  };
  return botUtterance;
};

export default GetResponse;
