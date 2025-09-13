import json
import re
from collections import Counter

# Read the thematic_hell.json file
with open('data/thematic_hell.json', 'r') as f:
    content = f.read()

# Simple approach: find all JSON objects
# Count occurrences of similar titles and quotes
titles = re.findall(r'"title":\s*"([^"]+)"', content)
quotes = re.findall(r'"quote":\s*"([^"]+)"', content)

# Count title occurrences
title_count = Counter(titles)

# Count quote occurrences
quote_count = Counter(quotes)

# Find repetitive titles
print("=== REPETITIVE TITLES FOUND ===")
repetitive_titles = []
for title, count in title_count.items():
    if count > 1:
        repetitive_titles.append((title, count))
        print(f"'{title}' appears {count} times")

print(f"\nTotal repetitive titles: {len(repetitive_titles)}")

# Find repetitive quotes
print("\n=== REPETITIVE QUOTES FOUND ===")
repetitive_quotes = []
for quote, count in quote_count.items():
    if count > 1:
        repetitive_quotes.append((quote, count))
        print(f"'{quote}' appears {count} times")

print(f"\nTotal repetitive quotes: {len(repetitive_quotes)}")

# Show some examples of repetitive content
print("\n=== EXAMPLES OF REPETITIVE CONTENT ===")
for title, count in title_count.most_common(10):
    if count > 1:
        print(f"Title: '{title}' ({count} occurrences)")

print("\n=== COMMON THEMES ===")
# Look for common themes in titles
themes = [
    "Fire burns", "Zaqqum", "Boiling water", "Chains", "Skin renewed",
    "Faces burned", "Hell gates", "Angels", "Regret", "Cursing"
]

for theme in themes:
    matches = [title for title in titles if theme.lower() in title.lower()]
    if len(matches) > 1:
        print(f"'{theme}' theme appears {len(matches)} times")

print(f"\n=== FILE STRUCTURE ANALYSIS ===")
print(f"Total titles found: {len(titles)}")
print(f"Total unique titles: {len(set(titles))}")
print(f"Total quotes found: {len(quotes)}")
print(f"Total unique quotes: {len(set(quotes))}")