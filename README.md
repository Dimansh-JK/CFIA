#  CFIA 

## Description

Automation of the data export process regarding dog importation into Canada from the Canadian Food Inspection Agency system. The following topics were covered:

- Extracting text of import criteria for dogs of three ages (adults, juniors, and puppies) into Canada
- Exporting the import criteria to a text file and opening it after the test completion
- Verifying the presence of text after selecting dropdown lists.

## Table of Contents

- [Installation](#installation)
- [Run](#run)
- [Features](#features)
- [Credits](#credits)
- [License](#license)

## Installation

To ensure the functionality of the project, it is necessary to install or use:

- VS Code (https://code.visualstudio.com/)
- Git (https://git-scm.com/downloads)
- Node.js (https://nodejs.org/en/)
- CodeceptJS Playwright (https://codecept.io)
    - npx create-codeceptjs .
    - npm install codeceptjs playwright --save
    - npm install -g npm@10.8.1 (update if required)
    - npx codeceptjs init
- Mochawesome Custom Reporter
    - npm i mochawesome
- OPEN package
    - npm install open
- CHAI library
    npm i codeceptjs-chai
    
## Run

- npx codeceptjs def // Refresh of Definitions
- npx codeceptjs run // Start of Tests


## Features

Key test automation features in this project:

- Selection of all three dog ages using Data-Driven methods
- Writing dog import criteria to a text file
- Opening the file after the test completion
- Custom helpers

## Credits

All your base are belong to me

## License

MIT License

Copyright (c) 2024

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

## Badges

TBD

