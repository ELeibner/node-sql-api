## REST API TypeScript, NodeJS, TypeORM & Postgres

This is an example of browser-based file system where user is able to create and delete folders, subfolders and files. Furthermore, user is also able to search files using search queries.

### Install

```
npm install
```

### Setup database

setup database settings inside `data-source.ts` file

### Run the app

```
npm start
```

## REST API

#### Create New Folders, Subfolders and Files

`POST /folder`

**Request Body**

```
{
    "name": "root",
    "parent" : {
        "id": null
    },
    "files": [{
        "name": "file1"
    },{
        "name": "file2"
    }]
}

```

### Create New Files in Folders

`POST /file`

**Request Body**

```
{
    "name": "file",
    "folder" : {
        "id": "1"
    }
}
```

### Search Files in Folders

`GET /file`

**Request**

```
http://localhost:3000/file?search_query=fileName&folderId=id&limit=searchLimit
```

### Delete File in Folder

`DELETE /file`

**Request**

```
http://localhost:3000/file/:id
```

### Delete Folder

`DELETE /folder`

**Request**

```
http://localhost:3000/folder/:id
```
