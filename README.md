# dadjoke
This projects implements a solution to:
https://www.rithmschool.com/courses/node-express-fundamentals/node-exercises

## Usage
`node dad_joke.js`
Enter search term in the prompt
The joke will be appended to the text file `jokes.txt`

## Internals
This command line tool  makes a request to an API and stores the data in a text file. It makes use of the following modules:
* `fs`
* `process`
* `request`
* `prompt`

This tool accepts a command line argument using module `prompt`. It makes an API request to "dad joke API" (https://icanhazdadjoke.com/api) using module `request` and saves the joke to a text file using module `fs`.

## Notes
* module `request` is deprecated. Maybe it is better to use fetch?
* icanhazdadjoke.com requires headers to specify json output
