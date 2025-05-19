#!/usr/bin/env python3
"""
JSON to TypeScript Converter

This script converts the scraped JSON data into TypeScript compatible format 
for use in a React application.
"""

import json
import re
import os
from typing import Dict, Any

INPUT_FILE = "video_tutor_data.json"
OUTPUT_FILE = "courses_data.ts"

def camel_case(s: str) -> str:
    """Convert a string to camelCase."""
    # Replace non-alphanumeric characters with spaces
    s = re.sub(r'[^a-zA-Z0-9]', ' ', s)
    # Split the string into words
    words = s.split()
    # Capitalize the first letter of each word except the first one
    return words[0].lower() + ''.join(word.capitalize() for word in words[1:])

def convert_to_typescript():
    """Convert the JSON data to TypeScript format."""
    if not os.path.exists(INPUT_FILE):
        print(f"Error: {INPUT_FILE} not found!")
        return
    
    with open(INPUT_FILE, 'r', encoding='utf-8') as f:
        data = json.load(f)
    
    # Generate TypeScript interfaces
    ts_interfaces = """// Generated TypeScript interfaces
export interface Lesson {
  id: string;
  title: string;
  url: string;
  youtubeId: string;
}

export interface Chapter {
  id: string;
  title: string;
  url: string;
  lessons: Lesson[];
}

export interface Course {
  id: string;
  title: string;
  url: string;
  chapters: Chapter[];
}

"""
    
    # Convert the data to TypeScript format
    ts_data = []
    
    for course in data:
        ts_course = {
            "id": course["id"],
            "title": course["title"],
            "url": course["url"],
            "chapters": []
        }
        
        for chapter in course["chapters"]:
            ts_chapter = {
                "id": chapter["id"],
                "title": chapter["title"],
                "url": chapter["url"],
                "lessons": []
            }
            
            for lesson in chapter["lessons"]:
                ts_lesson = {
                    "id": lesson["id"],
                    "title": lesson["title"],
                    "url": lesson["url"],
                    "youtubeId": lesson.get("youtube_id", "")
                }
                
                ts_chapter["lessons"].append(ts_lesson)
            
            ts_course["chapters"].append(ts_chapter)
        
        ts_data.append(ts_course)
    
    # Generate TypeScript export
    ts_export = "export const coursesData: Course[] = " + json.dumps(ts_data, ensure_ascii=False, indent=2) + ";\n"
    
    # Replace snake_case with camelCase in the output
    ts_export = re.sub(r'"(\w+)_(\w+)":', lambda m: f'"{m.group(1)}{m.group(2).capitalize()}":', ts_export)
    
    # Combine interfaces and data export
    ts_content = ts_interfaces + ts_export
    
    # Write to TypeScript file
    with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
        f.write(ts_content)
    
    print(f"Conversion complete! TypeScript data saved to {OUTPUT_FILE}")

if __name__ == "__main__":
    convert_to_typescript()