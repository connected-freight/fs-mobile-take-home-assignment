# Connected Freight FS Mobile Take-home Assignment

Hello there 👋! Thank you for taking this interview 🙏 and congratulations on making it this far 🎉.

---

There are 2 questions in total for this assignment, and should take no more than 90 mins to complete. They are organized in 2 folders:
- [Question 1](https://github.com/connected-freight/fs-mobile-take-home-assignment/tree/main/question-1)
- [Question 2](https://github.com/connected-freight/fs-mobile-take-home-assignment/tree/main/question-2)

Each question folder has instructions and expectations. Please try to follow them and let us know, if you have any issues/concerns. You are only expected to spend 30 mins on Question 1, 60 mins on Question 2, and submit what you have done so far, to not take up too much of your time. You may take longer if you like 😊

---

Key things we are focusing on are:

- [x] Follow best practices.
- [x] Code readability.
- [x] Code structure.
- [x] Naming of parameters, functions, types, classes, and fields.
- [x] OOP/FP concepts.
- [x] Appropriate use of comments.

---

## Getting started
As GitHub does not allow the forking of public repos to private repos, what you need to do instead is to clone this repo into a new personal private repo.

### 1. Create a new private repo
When creating a new private repo in GitHub, name the repo any way you like (but preferably `cf-fs-mobile-take-home-assignment` if you want to follow the instructions below as it is), set it to private, and **do not initialize the repository with anything**.

### 2. Clone this repo to your local filesystem
```
git clone https://github.com/connected-freight/fs-mobile-take-home-assignment.git cf-fs-mobile-take-home-assignment
```

### 3. Add your remote and push
Assuming that you are using `cf-fs-mobile-take-home-assignment` as your repo name:
```
cd cf-fs-mobile-take-home-assignment
git remote rename origin upstream
git remote add origin https://github.com/<your-username>/cf-fs-mobile-take-home-assignment.git
git push origin main
```
Now you can work with it just like any other GitHub repo.

### 4. Setup development environment

#### Install development tools
The following tools are required:
1. [Node.js](https://nodejs.org/en/)
2. [Yarn 1](https://classic.yarnpkg.com/en/docs/install)
3. A TypeScript-compatible IDE (We suggest [Visual Studio Code](https://code.visualstudio.com/))

#### Install project dependencies
```
yarn install
```

#### Run web for question 1
```
yarn web
```

#### Run tests for question 2
```
yarn test
```

---

## Submission
When you are ready to submit, push all of your changes, and add `calvin@connectedfreight.com` as a collaborator to your repo for grading 😊

---

Best of luck 👍!
