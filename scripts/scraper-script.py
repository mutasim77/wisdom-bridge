#!/usr/bin/env python3
"""
Video-Tutor.net Course Data Scraper

This script scrapes the video-tutor.net website to extract:
1. All courses from the homepage
2. All chapters for each course
3. All lessons for each chapter, including YouTube links

The data is saved as a structured JSON file for use in a web application.
"""

import requests
from bs4 import BeautifulSoup
import json
import re
import time
import random
import os
from urllib.parse import urljoin, urlparse
from typing import Dict, List, Any

# Constants
BASE_URL = "https://www.video-tutor.net"
OUTPUT_FILE = "video_tutor_data.json"

# List of user agents to rotate through
USER_AGENTS = [
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:89.0) Gecko/20100101 Firefox/89.0",
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.1.1 Safari/605.1.15",
    "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Safari/537.36"
]

def get_random_headers():
    """Generate random headers with a rotating user agent."""
    return {
        "User-Agent": random.choice(USER_AGENTS),
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
        "Accept-Language": "en-US,en;q=0.5",
        "Referer": "https://www.google.com/",
        "DNT": "1",
        "Connection": "keep-alive",
        "Upgrade-Insecure-Requests": "1"
    }

def fetch_page(url: str) -> BeautifulSoup:
    """Fetch a webpage and return a BeautifulSoup object."""
    try:
        response = requests.get(url, headers=get_random_headers(), timeout=10)
        response.raise_for_status()
        return BeautifulSoup(response.text, 'html.parser')
    except requests.exceptions.RequestException as e:
        print(f"Error fetching {url}: {e}")
        return None

def normalize_url(url: str) -> str:
    """Normalize a URL to ensure it's absolute and properly formatted."""
    if not url.startswith(('http://', 'https://')):
        return urljoin(BASE_URL, url)
    return url

def extract_id_from_url(url: str) -> str:
    """Extract an ID from a URL (remove file extension and path)."""
    parsed = urlparse(url)
    path = parsed.path
    filename = os.path.basename(path)
    return os.path.splitext(filename)[0]

def get_courses() -> List[Dict[str, Any]]:
    """Get all courses from the homepage."""
    print("Fetching courses from homepage...")
    soup = fetch_page(BASE_URL)
    if not soup:
        return []
    
    courses = []
    paragraphs = soup.select('div.paragraph')
    
    for paragraph in paragraphs:
        # Look for font tags with size=4
        font_tags = paragraph.select('font[size="4"]')
        if not font_tags:
            continue
            
        # Find all links within the paragraph
        links = paragraph.select('a')
        for link in links:
            href = link.get('href')
            title = link.get_text().strip()
            
            if href and href.endswith('.html') and title:
                url = normalize_url(href)
                course_id = extract_id_from_url(url)
                
                course = {
                    "id": course_id,
                    "title": title,
                    "url": url,
                    "chapters": []
                }
                courses.append(course)
                print(f"Found course: {title} ({url})")
    
    return courses

def get_chapters(course: Dict[str, Any]) -> List[Dict[str, Any]]:
    """Get all chapters for a course."""
    print(f"Fetching chapters for {course['title']}...")
    soup = fetch_page(course['url'])
    if not soup:
        return []
    
    chapters = []
    paragraphs = soup.select('div.paragraph')
    
    for paragraph in paragraphs:
        links = paragraph.select('a')
        for link in links:
            href = link.get('href')
            title = link.get_text().strip()
            
            if href and href.endswith('.html') and title:
                url = normalize_url(href)
                chapter_id = extract_id_from_url(url)
                
                chapter = {
                    "id": chapter_id,
                    "title": title,
                    "url": url,
                    "lessons": []
                }
                chapters.append(chapter)
                print(f"  Found chapter: {title} ({url})")
    
    return chapters

def get_lessons(chapter: Dict[str, Any]) -> List[Dict[str, Any]]:
    """Get all lessons for a chapter, including YouTube links."""
    print(f"  Fetching lessons for {chapter['title']}...")
    soup = fetch_page(chapter['url'])
    if not soup:
        return []
    
    lessons = []
    paragraphs = soup.select('div.paragraph')
    
    for paragraph in paragraphs:
        # Look for links that might be YouTube videos
        links = paragraph.select('a')
        for i, link in enumerate(links):
            href = link.get('href')
            title = link.get_text().strip()
            
            # Check if it's a YouTube link
            if href and ('youtube.com' in href or 'youtu.be' in href) and title:
                lesson = {
                    "id": f"{chapter['id']}-lesson-{i+1}",
                    "title": title,
                    "url": href,
                    "youtube_id": extract_youtube_id(href)
                }
                lessons.append(lesson)
                print(f"    Found lesson: {title} ({href})")
    
    return lessons

def extract_youtube_id(url: str) -> str:
    """Extract YouTube video ID from a URL."""
    # Match both youtu.be/VIDEO_ID and youtube.com/watch?v=VIDEO_ID formats
    youtube_regex = r'(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\?\/]+)'
    match = re.search(youtube_regex, url)
    if match:
        return match.group(1)
    return ""

def main():
    """Main function to scrape all data and save to JSON."""
    print("Starting to scrape video-tutor.net...")
    
    # Get all courses
    courses = get_courses()
    
    # For each course, get its chapters
    for course in courses:
        course['chapters'] = get_chapters(course)
        
        # Add a random delay to avoid getting blocked
        time.sleep(random.uniform(1, 3))
        
        # For each chapter, get its lessons
        for chapter in course['chapters']:
            chapter['lessons'] = get_lessons(chapter)
            
            # Add a random delay to avoid getting blocked
            time.sleep(random.uniform(1, 3))
    
    # Save the data to a JSON file
    with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
        json.dump(courses, f, ensure_ascii=False, indent=2)
    
    print(f"Scraping complete! Data saved to {OUTPUT_FILE}")
    
    # Print some statistics
    total_courses = len(courses)
    total_chapters = sum(len(course['chapters']) for course in courses)
    total_lessons = sum(sum(len(chapter['lessons']) for chapter in course['chapters']) for course in courses)
    
    print(f"Found {total_courses} courses, {total_chapters} chapters, and {total_lessons} lessons.")

if __name__ == "__main__":
    main()