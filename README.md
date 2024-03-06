# Modern Family API

![Modern Family PNG](https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Modern_Family_Title.svg/1200px-Modern_Family_Title.svg.png)

# 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://github.com/zackcinal)

# About

Welcome to the Modern Family API!

Ever wanted to know who said that iconic line, "Fizbo is judging you!" or relive the Pritchett-Dunphy-Tucker clan's hilarious moments through code? Well, look no further! This API is your one-stop shop for everything Modern Family, for now focusing on the characters and seasons that make this show so beloved.

Think of it as Phil Dunphy's magic closet, but instead of questionable attire, you'll find:

A comprehensive list of characters, including the Pritchetts, the Dunphys, the Tuckers, and even the extended family (because let's face it, Gloria's Colombian relatives are just too good to miss).
Details about each season, including the number of episodes, air dates and etc.

This API is still under construction, just like Haley's fashion sense, but we're excited to see what you build with it! Whether you're creating a family quiz app, a Modern Family quote generator, or just want to bring some laughter to your code, this API is here to help.

Stay tuned for more functionalities in the future, like iconic quotes, episode details, and maybe even some closet-inspired magic tricks (but we can't promise Phil will approve).

# Data Model
The database for this project is built using MongoDB and Mongoose, and contains three collections: "characters", "quotes" and "seasons". Here are the schemas for each collection:


## Character Schema
| Field          | Type    | Description                                   |
| -------------- | ------- | --------------------------------------------- |
| fullName       | String  | The full name of the character                |
| aliases        | String  | Character's aliases                           |
| occupation     | Array   | Occupations of the character                  |
| family         | Array   | Family members                                |
| dateOfBirth    | String  | Birth date of the character                   |
| actor          | String  | Actor's name                                  |
| picture        | String  | A URL pointing to an image of the character   |

## Seasons Schema
| Field          | Type    | Description                                   |
| -------------- | ------- | --------------------------------------------- |
| season         | Number  | Season                                        |
| startDate      | String  | Date of the first episode of the season       |
| endDate        | String  | Date of the last episode of the season        |
| episodes       | Number  | Number of episodes in the season              |
| overview       | String  | Explanation of the season                     |

## Quotes Schema
| Field          | Type    | Description                                   |
| -------------- | ------- | --------------------------------------------- |
| quote          | String  | Quote                                         |
| saidBy         | String  | Name of the character who said the quote      |

# API Routes

### /chracters
<ul>
<li>GET /characters/ Returns all the characters.</li>
<li>GET /characters/id/ Returns the character by it's ID.</li>
<li>POST /characters/ Creates a new character.</li>
<li>PUT /characters/:id Updates an existing character.</li>
<li>DELETE /character/id/ Deletes a character by characterId.</li>
</ul>

### /seasons
<ul>
<li>GET /seasons/ Returns all the seasons.</li>
<li>GET /seasons/id Returns the season by it's ID.</li>
<li>PUT /seasons/id Updates an existing season.</li>
</ul>

### /quotes
<ul>
<li>GET /quotes/ Returns all the quotes.</li>
<li>POST /quotes/ Creates a new quote.</li>
<li>PUT /quotes/id Updates an existing quote.</li>
<li>DELETE /quote/id/ Deletes a quote by quotesId.</li>
</ul>