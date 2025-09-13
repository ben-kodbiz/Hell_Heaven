import json
import re
from collections import Counter

# Read the thematic_hell.json file
with open('data/thematic_hell.json', 'r') as f:
    content = f.read()

# Split the content by curly braces to isolate JSON objects
objects = re.findall(r'\{(?:[^{}]|(?R))*\}', content)

# Parse each object and collect all facts
all_facts = []
fact_texts = []

for i, obj_str in enumerate(objects):
    try:
        obj = json.loads(obj_str)
        if 'Hell' in obj:
            for category, facts in obj['Hell'].items():
                for fact in facts:
                    if 'title' in fact and 'quote' in fact:
                        fact_text = f"{fact['title']} - {fact['quote']}"
                        all_facts.append({
                            'category': category,
                            'id': fact.get('id', len(all_facts) + 1),
                            'title': fact['title'],
                            'quote': fact['quote'],
                            'source': fact.get('source', []),
                            'explanation': fact.get('explanation', ''),
                            'full_text': fact_text
                        })
                        fact_texts.append(fact_text)
    except json.JSONDecodeError:
        print(f"Error parsing object {i}")
        continue

# Count occurrences of similar facts
fact_count = Counter(fact_texts)

# Find repetitive sentences
print("=== REPETITIVE FACTS FOUND ===")
repetitive_facts = []
for fact_text, count in fact_count.items():
    if count > 1:
        repetitive_facts.append((fact_text, count))
        print(f"'{fact_text}' appears {count} times")

print(f"\nTotal repetitive facts: {len(repetitive_facts)}")

# Group facts by category
categories = {}
for fact in all_facts:
    category = fact['category']
    if category not in categories:
        categories[category] = []
    categories[category].append(fact)

print("\n=== FACTS BY CATEGORY ===")
for category, facts in categories.items():
    print(f"\n{category}: {len(facts)} facts")
    # Show first few facts in each category
    for fact in facts[:3]:
        print(f"  - {fact['title']}")
    if len(facts) > 3:
        print(f"  ... and {len(facts) - 3} more")

# Create a fixed version of the file
fixed_data = {
    "Hell": {}
}

# Add facts to fixed data structure
for category, facts in categories.items():
    fixed_data["Hell"][category] = facts

# Write fixed version to a new file
with open('data/thematic_hell_fixed.json', 'w') as f:
    json.dump(fixed_data, f, indent=2, ensure_ascii=False)

print("\n=== SUMMARY ===")
print(f"Total unique facts parsed: {len(all_facts)}")
print(f"Categories found: {len(categories)}")
print("Fixed version saved as 'data/thematic_hell_fixed.json'")