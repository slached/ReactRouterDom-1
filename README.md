**post** `/user/create` creates user and body must contain **email and password**.

<img alt="img" src="./githubImages/Screenshot_1.png">

---

if you try to create an user with same email api doesn't accept this request.

<img alt="img" src="./githubImages/Screenshot_2.png">

---

**patch** `/token/create` creates token for user and body must contain **email and password**.

<img alt="img" src="./githubImages/Screenshot_3.png">

---

if you use an account that don't created you'll see a response like this.

<img alt="img" src="./githubImages/Screenshot_4.png">

---
**get** `/user/getAll` fetch all user data from databases but requires bearer token which we already created earlier.

<img alt="img" src="./githubImages/Screenshot_5.png">

---
if you enter your token wrong or don't enter any you are not able to see all user data.

<img alt="img" src="./githubImages/Screenshot_6.png">
