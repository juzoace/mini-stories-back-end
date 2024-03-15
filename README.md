<div align="center">
<h1 align="center">
<img src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/ec559a9f6bfd399b82bb44393651661b08aaf7ba/icons/folder-markdown-open.svg" width="100" />
<br>
mini-stories
</h1>
<h3 align="center">📍 Make stories your mini-masterpiece with GitHub mini-stories!</h3>
<h3 align="center">🚀 Developed with the software and tools below.</h3>
<p align="center">

<img src="https://img.shields.io/badge/Express-000000.svg?style=for-the-badge&logo=Express&logoColor=white" alt="Express" />
<img src="https://img.shields.io/badge/JSON-000000.svg?style=for-the-badge&logo=JSON&logoColor=white" alt="JSON" />
<img src="https://img.shields.io/badge/Markdown-000000.svg?style=for-the-badge&logo=Markdown&logoColor=white" alt="Markdown" />
<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black" alt="JavaScript" />
<img src="https://img.shields.io/badge/Passport-34E27A.svg?style=for-the-badge&logo=Passport&logoColor=white" alt="Passport" />
</p>

</div>

---

## 📚 Table of Contents

- [📚 Table of Contents](#-table-of-contents)
- [📍Overview](#-introdcution)
- [🔮 Features](#-features)
- [⚙️ Project Structure](#project-structure)
- [🧩 Modules](#modules)
- [🏎💨 Getting Started](#-getting-started)
- [🗺 Roadmap](#-roadmap)
- [🤝 Contributing](#-contributing)
- [🪪 License](#-license)
- [📫 Contact](#-contact)
- [🙏 Acknowledgments](#-acknowledgments)

---

## 📍Overview

The mini-stories project is a platform designed to help users create, edit, and share short stories with the world. It helps users to easily create stories with a simple, intuitive user interface. The files included in the project give users the ability to customize their stories with HTML, CSS, and JavaScript. Additionally, the project also provides authentication and authorization capabilities to ensure users' stories remain private. It is a valuable asset for any user looking to expand their creative writing skills while connecting with other writers.

---

## 🔮 Feautres

### Distinctive Features

1. **User-Centered Design:** The mini-stories project is designed to provide a user-friendly platform for users to share stories and collaborate on projects. This is evident from the variety of views and templates available in the project's code. From the "welcome" page with its simple layout and login form, to the "dashboard" page with its more intricate design, the project includes different elements that cater to the user's experience.

2. **Authentication:** The project includes authentication scripts which allow users to securely log in and access their stories. Passport.js is used to authenticate the user, and secure session handling is enabled to ensure that all data is kept secure.

3. **Data Modeling:** The project includes models for both the User and Story entities. This allows users to create stories and keep track of them, while also providing a platform for collaboration. The models are linked to the database, allowing for easy retrieval of data.

4. **Flexible Layout:** The project includes multiple templates for displaying stories and other elements on the page. This allows for a more varied user experience, with the ability to customize the layout to fit the user's needs.

5. **Styling:** The project includes a style.css file which allows for custom styling of the user interface. This allows for further customization of the user experience, with the ability to adjust colors, font, and other elements to make the project more visually appealing.

---

<img src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/ec559a9f6bfd399b82bb44393651661b08aaf7ba/icons/folder-github-open.svg" width="80" />

## ⚙️ Project Structure

```bash
repo
├── README.md
├── app.js
├── config
│   ├── keys.js
│   ├── keys_prod.js
│   └── passport.js
├── helpers
│   ├── auth.js
│   └── hbs.js
├── models
│   ├── Story.js
│   └── User.js
├── package-lock.json
├── package.json
├── public
│   ├── css
│   │   └── style.css
│   └── favicon.png
├── routes
│   ├── auth.js
│   ├── index.js
│   └── stories.js
└── views
    ├── index
    │   ├── about.handlebars
    │   ├── dashboard.handlebars
    │   └── welcome.handlebars
    ├── layouts
    │   └── main.handlebars
    ├── partials
    │   ├── _add-btn.handlebars
    │   ├── _footer.handlebars
    │   └── _header.handlebars
    └── stories
        ├── add.handlebars
        ├── edit.handlebars
        ├── index.handlebars
        └── show.handlebars

12 directories, 27 files
```

---

<img src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/ec559a9f6bfd399b82bb44393651661b08aaf7ba/icons/folder-src-open.svg" width="80" />

## 💻 Modules

<details closed><summary>Config</summary>

| File         | Summary                        | Module              |
| :----------- | :----------------------------- | :------------------ |
| keys.js      | Error generating file summary. | config/keys.js      |
| passport.js  | Error generating file summary. | config/passport.js  |
| keys_prod.js | Error generating file summary. | config/keys_prod.js |

</details>

<details closed><summary>Css</summary>

| File      | Summary                        | Module               |
| :-------- | :----------------------------- | :------------------- |
| style.css | Error generating file summary. | public/css/style.css |

</details>

<details closed><summary>Helpers</summary>

| File    | Summary                        | Module          |
| :------ | :----------------------------- | :-------------- |
| auth.js | Error generating file summary. | helpers/auth.js |
| hbs.js  | Error generating file summary. | helpers/hbs.js  |

</details>

<details closed><summary>Index</summary>

| File                 | Summary                        | Module                           |
| :------------------- | :----------------------------- | :------------------------------- |
| about.handlebars     | Error generating file summary. | views/index/about.handlebars     |
| dashboard.handlebars | Error generating file summary. | views/index/dashboard.handlebars |
| welcome.handlebars   | Error generating file summary. | views/index/welcome.handlebars   |

</details>

<details closed><summary>Layouts</summary>

| File            | Summary                        | Module                        |
| :-------------- | :----------------------------- | :---------------------------- |
| main.handlebars | Error generating file summary. | views/layouts/main.handlebars |

</details>

<details closed><summary>Models</summary>

| File     | Summary                        | Module          |
| :------- | :----------------------------- | :-------------- |
| User.js  | Error generating file summary. | models/User.js  |
| Story.js | Error generating file summary. | models/Story.js |

</details>

<details closed><summary>Partials</summary>

| File                 | Summary                        | Module                              |
| :------------------- | :----------------------------- | :---------------------------------- |
| \_footer.handlebars  | Error generating file summary. | views/partials/\_footer.handlebars  |
| \_add-btn.handlebars | Error generating file summary. | views/partials/\_add-btn.handlebars |
| \_header.handlebars  | Error generating file summary. | views/partials/\_header.handlebars  |

</details>

<details closed><summary>Root</summary>

| File   | Summary                        | Module |
| :----- | :----------------------------- | :----- |
| app.js | Error generating file summary. | app.js |

</details>

<details closed><summary>Routes</summary>

| File       | Summary                        | Module            |
| :--------- | :----------------------------- | :---------------- |
| stories.js | Error generating file summary. | routes/stories.js |
| auth.js    | Error generating file summary. | routes/auth.js    |
| index.js   | Error generating file summary. | routes/index.js   |

</details>

<details closed><summary>Stories</summary>

| File             | Summary                        | Module                         |
| :--------------- | :----------------------------- | :----------------------------- |
| index.handlebars | Error generating file summary. | views/stories/index.handlebars |
| edit.handlebars  | Error generating file summary. | views/stories/edit.handlebars  |
| add.handlebars   | Error generating file summary. | views/stories/add.handlebars   |
| show.handlebars  | Error generating file summary. | views/stories/show.handlebars  |

</details>

<hr />

## 🚀 Getting Started

### ✅ Prerequisites

Before you begin, ensure that you have the following prerequisites installed:

> `[📌  NodeJS Installed on your system]`

### 💻 Installation

1. Clone the mini-stories repository:

```sh
git clone https://github.com/dzenis-h/mini-stories
```

2. Change to the project directory:

```sh
cd mini-stories
```

3. Install the dependencies:

```sh
npm install
```

### 🤖 Using mini-stories

```sh
node app.js
```

<hr />

## 🛠 Future Development

- [x] [📌 COMPLETED-BETA]
- [ ] [📌 ADD-MORE-FEATURES]
- [ ] [📌 IMPROVE THE DESIGN]

---

## 🤝 Contributing

Contributions are always welcome! Please follow these steps:

1. Fork the project repository. This creates a copy of the project on your account that you can modify without affecting the original project.
2. Clone the forked repository to your local machine using a Git client like Git or GitHub Desktop.
3. Create a new branch with a descriptive name (e.g., `new-feature-branch` or `bugfix-issue-123`).

```sh
git checkout -b new-feature-branch
```

4. Make changes to the project's codebase.
5. Commit your changes to your local branch with a clear commit message that explains the changes you've made.

```sh
git commit -m 'Implemented new feature.'
```

6. Push your changes to your forked repository on GitHub using the following command

```sh
git push origin new-feature-branch
```

7. Create a pull request to the original repository.
   Open a new pull request to the original project repository. In the pull request, describe the changes you've made and why they're necessary.
   The project maintainers will review your changes and provide feedback or merge them into the main branch.

---

## 🪪 License

This project is licensed under the `MIT` License. See the [LICENSE](https://docs.google.com/document/d/11WK7tVoTFRMcWCuGZQCRWxEsDUEJ_6ArtfV-NjWcBCU/edit?usp=sharing) file for additional info.

---
