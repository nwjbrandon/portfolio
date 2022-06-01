// Fuzzy Approach For Text Classification https://www.researchgate.net/publication/3845652_A_fuzzy_similarity_approach_in_text_classification_task
import axios from 'axios';
import { hotTextsList, MAX_HOT_TEXTS } from 'utils/Dataset';
import { trainingTexts, responsesList, stopWordsList } from './Dataset';

const stopWordsSet = new Set(stopWordsList);

// curl https://api.telegram.org/bot{apiToken}/getUpdates -> get the chatId
const baseUrl = 'https://api.telegram.org/bot';
const apiToken = process.env.REACT_APP_TELEGRAM_BOT_TOKEN;
const chatId = process.env.REACT_APP_TELEGRAM_CHAT_ID;
const requestUrl = `${baseUrl}${apiToken}/sendMessage`;

const computerMembershipTable = (texts: [string, number][]) => {
  let uniqueTerms: { [id: string]: number } = {};
  let terms: string[] = [];
  let membershipTable: { [id: number]: number[] } = {};

  let n_terms = 0;

  // get unique terms
  for (let i = 0; i < texts.length; i++) {
    // ensure text is lower case
    const text: string = texts[i][0].toLowerCase();
    const tokens = text.split(' ');
    for (const token of tokens) {
      if (stopWordsSet.has(token)) {
        continue;
      }
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
    // ensure text is lowercase
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
      if (stopWordsSet.has(token)) {
        continue;
      }
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

// const fuzzyTable = computerMembershipTable(trainingTexts);
// console.log(fuzzyTable);
// const fuzzyRelationship = computeFuzzyRelationship(fuzzyTable, testingText);
// console.log(fuzzyRelationship)

const fuzzyTable = computerMembershipTable(trainingTexts);

const preprocessText = (message: string) => {
  const regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
  const messageNoPunctuation = message.replace(regex, '');
  const messageTrim = messageNoPunctuation.replace(/\s+/g, ' ').trim();
  const messageLowerCase = messageTrim.toLowerCase();
  return messageLowerCase;
};

const topK = (inp: number[], count: number) => {
  let outp = [];
  for (let i = 0; i < inp.length; i++) {
    outp.push(i); // add index to output array
    if (outp.length > count) {
      outp.sort(function (a, b) {
        return inp[b] - inp[a];
      }); // descending sort the output array
      outp.pop(); // remove the last index (index of smallest element in output array)
    }
  }
  return outp;
};

const GetResponse = async (message: string, hotTextResponseId: number) => {
  const messageCleaned = preprocessText(message);
  const { labels, relationship } = computeFuzzyRelationship(
    fuzzyTable,
    messageCleaned
  );

  const responseIndex = labels[relationship.indexOf(Math.max(...relationship))];
  let response = '';
  if (hotTextResponseId >= 0) {
    response = responsesList[hotTextResponseId.toString()];
  } else {
    response = responsesList[responseIndex];
  }

  let nextHotTexts: [string, number][] = [];
  if (Math.max(...relationship) < 0.001) {
    nextHotTexts = hotTextsList
      .sort(() => Math.round(Math.random()))
      .slice(0, MAX_HOT_TEXTS);
  } else {
    const indices = topK(relationship, MAX_HOT_TEXTS);
    for (const index of indices) {
      nextHotTexts.push(hotTextsList[index]);
    }
  }

  try {
    const res = await axios.post(requestUrl, {
      chat_id: chatId,
      text: `utterance: ${message} | response: ${response}`,
    });
    console.log(res);
  } catch (e) {
    console.log(e);
  }

  const botUtterance = {
    message: response,
    user: 'bot',
    date: new Date(),
  };
  return { botUtterance, nextHotTexts };
};

export default GetResponse;
