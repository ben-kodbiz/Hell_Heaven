import json
from collections import Counter
import re

# Read the hell_detail.json file
with open('data/hell_detail.json', 'r') as f:
    data = json.load(f)

# Extract all facts
facts = [item['fact'] for item in data]

# Combine all facts into one text
all_text = ' '.join(facts)

# Split into words and clean them
words = re.findall(r'\b\w+\b', all_text.lower())
words = [word for word in words if len(word) > 3]  # Only words longer than 3 characters

# Count word frequencies
word_count = Counter(words)

# Show top 20 most frequent words
print('Top 20 most frequent words:')
for word, count in word_count.most_common(20):
    print(f'{word}: {count}')

print('\n' + '='*50 + '\n')

# Find facts with repetitive content
print('Facts with potentially repetitive content:')
for i, fact in enumerate(facts):
    fact_words = re.findall(r'\b\w+\b', fact.lower())
    fact_words = [word for word in fact_words if len(word) > 3]
    
    fact_word_count = Counter(fact_words)
    
    # Find words that appear more than once in a single fact
    repeated_words = [word for word, count in fact_word_count.items() if count > 1]
    
    if repeated_words:
        print(f'Fact {i + 1}: "{fact}"')
        print(f'Repeated words: {", ".join(repeated_words)}\n')