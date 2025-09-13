#!/usr/bin/env python3
import json
import os
import re

# Load translation map
def load_translation_map():
    with open('translation_map.json', 'r', encoding='utf-8') as f:
        return json.load(f)

# Simple translation function
def translate_text(text, translation_map):
    if not text or not isinstance(text, str):
        return text
    
    # Store original text for debugging
    original_text = text
    
    # Translate common terms - use word boundaries to avoid partial matches
    # Sort terms by length (longest first) to avoid partial replacements
    sorted_terms = sorted(translation_map['common_terms'].items(), 
                         key=lambda x: len(x[0]), reverse=True)
    
    for term, translation in sorted_terms:
        # Use word boundaries to avoid partial matches
        # Handle special characters in terms
        escaped_term = re.escape(term)
        pattern = r'\b' + escaped_term + r'\b'
        text = re.sub(pattern, translation, text, flags=re.IGNORECASE)
    
    # Translate phrases - sort by length (longest first)
    sorted_phrases = sorted(translation_map['phrases'].items(), 
                           key=lambda x: len(x[0]), reverse=True)
    
    for phrase, translation in sorted_phrases:
        text = text.replace(phrase, translation)
    
    return text

# Translate a JSON object recursively
def translate_json_object(obj, translation_map):
    if isinstance(obj, dict):
        return {key: translate_json_object(value, translation_map) for key, value in obj.items()}
    elif isinstance(obj, list):
        return [translate_json_object(item, translation_map) for item in obj]
    elif isinstance(obj, str):
        return translate_text(obj, translation_map)
    else:
        return obj

# Main translation function
def translate_json_file(input_file, output_file):
    # Load translation map
    translation_map = load_translation_map()
    
    # Load input JSON
    with open(input_file, 'r', encoding='utf-8') as f:
        data = json.load(f)
    
    # Translate data
    translated_data = translate_json_object(data, translation_map)
    
    # Save translated JSON
    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(translated_data, f, ensure_ascii=False, indent=2)

if __name__ == "__main__":
    # Translate all JSON files
    input_dir = "../../data"
    output_dir = "."
    
    files_to_translate = [
        "thematic_heaven.json",
        "thematic_hell_fixed.json",
        "huur_ain.json",
        "hell_detail.json",
        "heaven_1.json",
        "doubt.json"
    ]
    
    for filename in files_to_translate:
        input_file = os.path.join(input_dir, filename)
        output_file = os.path.join(output_dir, filename)
        
        if os.path.exists(input_file):
            print(f"Translating {filename}...")
            translate_json_file(input_file, output_file)
            print(f"Translated {filename} saved to {output_file}")
        else:
            print(f"File {input_file} not found")