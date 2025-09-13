import json
from collections import Counter
import re

# Read the thematic_heaven.json file
with open('data/thematic_heaven.json', 'r') as f:
    data = json.load(f)

# Extract all facts from all themes
all_facts = []
for theme in data['themes']:
    for fact in theme['facts']:
        all_facts.append(fact['fact'])

# Check for exact duplicate sentences
fact_count = Counter(all_facts)

# Find duplicates
duplicates = [fact for fact, count in fact_count.items() if count > 1]

print("Exact duplicate sentences found:")
if duplicates:
    for i, fact in enumerate(duplicates, 1):
        count = fact_count[fact]
        print(f"{i}. '{fact}' (appears {count} times)")
else:
    print("No exact duplicate sentences found.")

print(f"\nTotal facts: {len(all_facts)}")
print(f"Unique facts: {len(set(all_facts))}")

# Check for near-duplicates (sentences that are very similar)
print("\nChecking for near-duplicates...")

# Function to check if two sentences are similar
def are_similar(sent1, sent2, threshold=0.8):
    # Simple similarity check based on word overlap
    words1 = set(re.findall(r'\b\w+\b', sent1.lower()))
    words2 = set(re.findall(r'\b\w+\b', sent2.lower()))
    
    if len(words1) == 0 or len(words2) == 0:
        return False
        
    intersection = len(words1.intersection(words2))
    union = len(words1.union(words2))
    
    similarity = intersection / union
    return similarity >= threshold

# Check for near-duplicates
near_duplicates = []
checked_pairs = set()

for i in range(len(all_facts)):
    for j in range(i + 1, len(all_facts)):
        pair = (i, j)
        if pair in checked_pairs:
            continue
            
        if are_similar(all_facts[i], all_facts[j]):
            near_duplicates.append((all_facts[i], all_facts[j], i+1, j+1))
            checked_pairs.add(pair)

print("Near-duplicate sentences found:")
if near_duplicates:
    for i, (fact1, fact2, idx1, idx2) in enumerate(near_duplicates, 1):
        print(f"{i}. Fact {idx1}: '{fact1}'")
        print(f"   Fact {idx2}: '{fact2}'")
        print()
else:
    print("No near-duplicate sentences found.")