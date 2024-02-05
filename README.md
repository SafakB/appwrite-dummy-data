# Welcome to StackEdit!

This package allows you to automatically add **millions** of data data to Appwrite. It is not ultra-fast, it inserts like real data.

## Important

> Don't forget to set _APP_OPTIONS_ABUSE=disabled for limitations such as reading and writing data. This setting is in the .env file

```
_APP_OPTIONS_ABUSE=disabled
  ```

> After editing the .env file, you need to recreate the containers.
  
```sh
docker-compose up -d
  ```


### Setup your client parameters
```js
client
    .setEndpoint('https://localhost/v1') // Appwrite server endpoint
    .setProject('XXXXXXXXXXXXXXX'); // Project ID
  ```


### You can specify how many records to add

```js
const  count  =  250000;
```

###  Remember to set your data schema inside the loop. You should set it according to your own collection
  
 
 ```js
 ...
let dummyData =
    {
        title: "Example Name " + i,
        description: "Example Description" + i,
        content: "Example Content" + i,
        enabled: i % 2 == 0 ? true : false,
    };
...
```
 
### And finally add your databaseId and collectionId information here


 ```js
 ...
database.createDocument('XXXXXXXXXXXXXXX', 'XXXXXXXXXXXXXXXX', 'unique()', dummyData)
...
```




### Now you can run the script

 ```ssh
npm install appwrite
npm run start
```
