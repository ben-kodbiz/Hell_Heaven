const fs = require('fs');

// Read the huur_ain.json file
const data = JSON.parse(fs.readFileSync('data/huur_ain.json', 'utf8'));

// Extract all facts
const facts = data.map(item => item.fact);

// Combine all facts into one text
const allText = facts.join(' ');

// Split into words and clean them
const words = allText.toLowerCase()
  .replace(/[^\w\s]/g, '') // Remove punctuation
  .split(/\s+/) // Split by whitespace
  .filter(word => word.length > 3); // Only words longer than 3 characters

// Count word frequencies
const wordCount = {};
words.forEach(word => {
  wordCount[word] = (wordCount[word] || 0) + 1;
});

// Sort by frequency
const sortedWords = Object.entries(wordCount)
  .sort((a, b) => b[1] - a[1]);

// Show top 20 most frequent words
console.log('Top 20 most frequent words:');
sortedWords.slice(0, 20).forEach(([word, count]) => {
  console.log(`${word}: ${count}`);
});

// Find facts with repetitive content
console.log('\nFacts with high word repetition:');
facts.forEach((fact, index) => {
  const factWords = fact.toLowerCase()
    .replace(/[^\w\s]/g, '')
    .split(/\s+/)
    .filter(word => word.length > 3);
  
  const factWordCount = {};
  factWords.forEach(word => {
    factWordCount[word] = (factWordCount[word] || 0) + 1;
  });
  
  // Find words that appear more than once in a single fact
  const repeatedWords = Object.entries(factWordCount)
    .filter(([word, count]) => count > 1)
    .map(([word]) => word);
  
  if (repeatedWords.length > 0) {
    console.log(`Fact ${index + 1}: "${fact}"`);
    console.log(`Repeated words: ${repeatedWords.join(', ')}\n`);
  }
});