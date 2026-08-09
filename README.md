# Advanced Web Development Projects

A collection of server-side web-development labs and supporting web assets for CMPS 3680.

## Overview

- `hello` — a minimal Node.js server project with `server.js` and `package.json`.
- `lab11` — an Express application with SQLite and bcrypt dependencies, plus `server.js` and `utils.js`.
- `www` — a static HTML and CSS site.
- `assets` — shared repository assets.

The projects cover web servers, client/server communication, data storage, and web application structure. Inspect each subproject before running it because setup and entry points differ.

## Tech stack

- JavaScript and Node.js
- Express
- SQLite3
- bcrypt
- HTML and CSS

## Usage

For `lab11`, install the dependencies described in `lab11/package.json` and run its verified start script from that directory:

```bash
npm start
```

The `hello` package declares no start script; its entry point is `hello/server.js`. The `www` project can be opened as a static site from `www/index.html`.

## Status

This repository contains teaching-assistant course projects and examples. The package manifests do not define an automated test suite.
