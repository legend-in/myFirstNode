myapp is the `Express` backend folder created by `Express application generator` 
```
$ npm i express
$ npm i express-generator
$ express --view=pug myapp
```

#### branch `class-one/Design-your-API-twitter`
For the homework practice  
| URL | HTTP Method | POST body | Result| 
| --- | ----------- | ----------| ----- |
| /tweets | GET | | List all content from files under /data folder in a JSON array, error handler for no data found |
| /tweets/new | POST | {content: string} | Create a file under /data folder wtih a unique number (id) as file name and add content to the file |
| /tweets/:filename | PUT | {content: string} | Update the content for the given file, error handler for file not found |
| /tweets/:filename | DELETE | | Delete a file with given file name, error handler for file not found |

## How to run
```
# cd to myapp folder
$ cd myapp

# start the server
$ npm start
```
