myapp is the `Express` backend folder created by `Express application generator` 
```
npm i express
npm i express-generator
express --view=pug myapp
```

### branch `branch class-one/Design-your-API-twitter`
For the first part in-class practice  
| URL | HTTP Method | POST body | Result| 
| --- | ----------- | ----------| ----- |
|`/tweets` | GET | | Get a list of tweets |
| `/tweets/new` | POST | tweetContent | Post a new tweet |
| `/tweets/:id/delete` | DELETE | | Delete a tweet |
