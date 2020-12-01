# Note Taker ![GitHub license](https://img.shields.io/badge/license-MIT%20License-blue.svg)

# Live Site

https://sleepy-crag-82469.herokuapp.com/

## Description

This application is designed to function as a note taker. The user can create notes, save notes, view notes, and even delete notes with ease. These notes get pushed to the server allowing for these notes to be stored and not lost. Notes get written to a db.json file. HTML and CSS are simple and minimalistic to make the application aesthetically appealing and user friendly.

## Table of Contents

-   [Installation](#installation)
-   [Usage](#usage)
-   [License](#license)
-   [Credits](#credits)
-   [Tests](#tests)
-   [Questions](#questions)

## Installation

In order to install this project, you must login to GitHub and go to github.com/iescandon/note-taker. Once there you will click on the green button that says clone or download. You will be given choices on how to download: using the ssh/html key or downloading the zip file.

Using SSH/HTML Key: You will copy the link shown and open up either terminal (mac: pre-installed) or gitbash (pc: must be installed). Once the application is open, you will type git clone _paste url here_. Once you have cloned the note-taker repo, cd into the repo and type "open ." to open the folder which contains all files used for the website. You can also type "code ." to open the repo in VS code.

Using Download ZIP: Click on Download Zip. Locate the file and double click it to unzip the file. Locate the unzipped folder and and open it. All the files for the website will be within this folder.

## Usage

There are two ways to use this application:

1. LIVE LINK DEPLOYED TO HEROKU:
   This is the simplest way is to use this application. Simply click on the live link listed above and use the website as normal. Fill in your note in the "new title"/"new note" fields and hit the save icon on the top right corner. All saved notes will be rendered on the left hand side and can either be viewed or deleted. To view a note, click on the title of the note and the entire note will be rendered on the right side. Notes being viewed will be readonly and cannot be edited. If while viewing a saved note, you decide to create a new note, click on the pencil icon on the top right corner to start a new note. To delete a note simply click the trash can button. To go back to the home page click on the Note Taker logo on the top left corner.

2. LOCAL HOST & CLI:
   In order to use this application. You must cd into the note-taker respository via your CLI. Once there, you will need to type in 'npm install' in order to install express. If 'npm install' did not properly download express, type in 'npm install express' to try and download it. If express does not get installed, the application will not work. After that is installed, you type in 'node app' to initialize the server. Go to your browser and type in localhost:3000, to view html files. Once here you can use the application in the same way as written above.

## License

Copyright (c) [2020][inezescandon]
The license is MIT License.
Read more about it at https://opensource.org/licenses/MIT.

## Credits

Used classroom activities for code inspiration.

## Tests

No tests available.

## Questions

If you have any additional questions please contact me at iescan4@gmail.com.
GitHub: https://github.com/iescandon
