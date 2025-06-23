# Blog Post Manager

A simple web application to manage blog posts. Users can view, add, edit, and delete posts. The app uses a mock backend powered by `json-server`.

## Features

- **View Posts:** See a list of all blog post titles.
- **View Details:** Click a post title to see its content and author.
- **Add Post:** Fill out a form to add a new blog post.
- **Edit Post:** Update the title or content of an existing post.
- **Delete Post:** Remove a post from the list.

## Project Structure

Week-3-Code-Challenge/
css/ style.css
src/ index.js
.gitignore
db.json
index.html
lICENCE
package-lock.json
package.json
README.md

## Getting Started

### Setup

1. **Clone the repository:**
    git clone <repository-url>
    cd Week-3-Code-Challenge

2. **Install `json-server` globally (if not already installed):**
    npm install -g json-server

3. **Start the mock backend:**
    json-server --watch db.json --port 3000

4. **Open `index.html` in your browser.**

## File Overview

- **index.html:** Main HTML structure for the app.
- **css/style.css:** Styles for layout and UI.
- **src/index.js:** JavaScript logic for fetching, displaying, adding, editing, and deleting posts.
- **db.json:** Mock database for posts.

## Usage

- **Add a Post:** Fill in the "Add New Post" form and submit.
- **Edit a Post:** Click a post title, then click "Edit", update the fields, and submit.
- **Delete a Post:** Click a post title, then click "Delete".

## Notes

- The app expects the backend to be running at `http://localhost:3000`.
- All data is stored in `db.json` and managed by `json-server`.

## AUTHOR

Jackson

## License

MIT License

Copyright (c) 2025 Jackson Mungai

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
