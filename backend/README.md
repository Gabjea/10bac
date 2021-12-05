<h1 align="center">Welcome to 10bac-backend 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="#" target="_blank">
    <img alt="License: ISC" src="https://img.shields.io/badge/License-ISC-yellow.svg" />
  </a>
</p>

## Install

```sh
npm install
```
## Run

```sh
npm run dev
```

## API ROUTES



-  Auth
   - `Resgister` 📗`POST` `http://127.0.0.1:5000/api/v1/user/register`
   - `Login` 📗`POST` `http://127.0.0.1:5000/api/v1/user/login`
-  Profile
   - `User Profile Update` 💛`PATCH` `http://127.0.0.1:5000/api/v1/user/profile`
   - `User Profile From Id` 💜`GET` `http://127.0.0.1:5000/api/v1/user/profile/:id`
-  Sub Bac
   - `Admin Get SubBac` 💜`GET` `http://127.0.0.1:5000/api/v1/user/subs_bac`
   - `Admin Add SubBac` 📗`POST` `http://127.0.0.1:5000/api/v1/admin/sub_bac`
   - `Admin Delete SubBac` 🔴`DELETE` `http://127.0.0.1:5000/api/v1/admin/sub_bac/:id`
   - `User Upload SubBac` 📗`POST` `http://127.0.0.1:5000/api/v1/user/sub_bac/:id`
   - `Admin Get Pending SubsBac` 💜`GET` `http://127.0.0.1:5000/api/v1/admin/sub_bac/`
   - `Admin Grade Pending SubBac` 📗`POST` `http://127.0.0.1:5000/api/v1/admin/sub_bac/:id`
-  Quiz
   - `User Get Quizzes` 💜`GET` `http://127.0.0.1:5000/api/v1/user/quizzes`
   - `User Submit Quiz` 📗`POST` `http://127.0.0.1:5000/api/v1/user/quiz/:quiz_id`
   - `Admin Add Quiz` 📗`POST` `http://127.0.0.1:5000/api/v1/admin/quiz`
   - `Admin Update Quiz` 💛`PATCH` `http://127.0.0.1:5000/api/v1/admin/quiz`
   - `Admin Delete Quiz` 🔴`DELETE` `http://127.0.0.1:5000/api/v1/admin/quiz`
-  Grade
   - `Get User Grades` 💜`GET` `http://127.0.0.1:5000/api/v1/user/note`
-  Events
   - `User Get Events` 💜`GET` `http://127.0.0.1:5000/api/v1/user/events`
   - `Admin Create Event` 📗`POST` `http://127.0.0.1:5000/api/v1/admin/event`
-  Comments
   - `User Add Comment` 📗`POST` `http://127.0.0.1:5000/api/v1/comment/`
   - `Get All Comments From Lesson` 💜`GET` `http://127.0.0.1:5000/api/v1/comment/:lectie`
   - `User Delete Comment` 🔴`DELETE` `http://127.0.0.1:5000/api/v1/comment/:id`
   - `User Add Reply To Comment` 📗`POST` `http://127.0.0.1:5000/api/v1/comment/reply/:comment_id`
   - `User Delete Reply From Comment` 🔴`DELETE` `http://127.0.0.1:5000/api/v1/comment/reply/:comment_id/:reply_id`





## Show your support

Give a ⭐️ if this project helped you!
