# Docs

## Users

### GET /users
List users
#### response body:
```
[{
  "_id": {
    "$oid": "5f9d85c70054627400bed253"
  },
  "name": "Kevin",
  "username": "kevin",
  "password": "123123",
  "email": "kbmelo@outlook.com"
}]
```
### POST /users
Create a new user
#### request body:
```json
{
  "name": "Kevin",
  "username": "kevin",
  "password": "123123",
  "email": "kbmelo@outlook.com"
}
```

### response body:
```
{
  "_id": {
    "$oid": "5f9d85c70054627400bed253"
  },
  "name": "Kevin",
  "username": "kevin",
  "password": "123123",
  "email": "kbmelo@outlook.com"
}
```
PS: **username**, **password** and **email** fields are required, but not sending them should **NOT** break the application, but return the error in the response.