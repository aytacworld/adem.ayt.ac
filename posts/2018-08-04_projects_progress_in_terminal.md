---
{
  "title": "Projects progress in terminal",
  "tags": ["terminal", "progress", "projects"],
  "publishdate": "2018-08-04"
}
---

For a couple of days, I was searching the web for an app to track my projects, but __ALL__ of my projects, personal, work, family, friends, adventures, ...

At work, we are using Jira, so I can use that too, but it's a massive application to use, and to set up. So, I searched a little further, and most of the applications I found, are the same, bloathed with features, I don't need, and the setup procedure that takes lots of time.

Then, I decided to use my own programming skill to create one myself, it is very basic, I just need to sum my projects, and the application will show a progressbar next to that project.

The main purpose of the project is, that I will only create a projects lists(nested lists also). And the program will show me the list, I don't need to configure anything(maybe in the future), but the main goal is: you add your lists file, you pass it to the application, and you will get an output. This is the only requirement for my application. _Configuring the layout, symbols, blablabla, ... is maybe for the next version._

- I created a new project in github and added a default MIT LICENSE and README.md file.

- Then I cloned this repo

`git clone git@github.com:aytacworld/projects-progress.git`

- Create my index.js file.

`touch index.js`

- I added this in my index.js file

```js
const projects = require('./my-projects');
const app = require('./app');

app.print(projects);
```

This is basically it for index.js file.

- Now, I need to declare how I will write down my projects. I like to keep it simple, so I came up with this structure, to declare my projects.

`touch my-projects.js`

```js
module.exports = {
  'first project': {
    'add todo': 54,
    'do some stuff': 43
    'do some crazy stuff': {
      'some craziness': 100,
      'another craziness': 0
    }
  },
  'second project': {
    ...
  }
};
```

Like I mentioned, just focus on the project and nothing to configure.

- Then I created the application file itself.

`touch app.js`

The application will take the projects list, go through every project, and the subprojects. A recursive function will do the job for us.

```js
class Project {
  constructor(name, level, value) {
    this.name = name;
    this.level = level;
    this.projects = [];
    this.percentage = typeof (value) === 'number' ? value : this.getValueFromSubProjects(value);
  }

  getValueFromSubProjects(projects) {
    let all = 0;
    const keys = Object.keys(projects);
    for (let i = 0; i < keys.length; i += 1) {
      const name = keys[i];
      const value = projects[name];
      const subProject = new Project(name, this.level + 1, value);
      all += subProject.percentage;
      this.projects.push(subProject);
    }
    return (all / (this.projects.length || 1));
  }

  print() {
    let countBars = Math.round(this.percentage / 10);
    countBars = countBars > 0 ? countBars : 1;
    const dash = '--'.repeat(this.level) + '>';
    const bars = '='.repeat(countBars - 1) + '>' + ' '.repeat(10 - countBars);
    const perc = '(' + this.percentage.toFixed(0) + ')'
    console.log(`[${bars}] ${dash} ${this.name} ${perc}`)
    this.projects.forEach(p => p.print());
  }
}

module.exports = {
  print: (projects) => {
    const root = new Project('All Projects', 0, projects);
    root.print();
  }
};
```

Basically, this is all the code needed.

- now run our app.

`node .`

The output will be like this.

```sh
[====>     ] > All Projects (50%)
[===>      ] --> project 1 (43%)
...
```

So this is all we need, we don't configure anything, but our projects and it will be displayed in terminal.

I already updated the project, and committed it. I changed the code, so I don't have an app.js, but project.js which will export the `Project` class.

After reading this [post](https://ourcodeworld.com/articles/read/298/how-to-show-colorful-messages-in-the-console-in-node-js), I also added colors to my application, if a projects percentage is below 35, it will be displayed in red, if it's more than 80, then it will be in green. And if you don't add your own `my-projects.js` file, you will get a red banner.

You can find the latest version [here](https://github.com/aytacworld/projects-progress).

I was thinking to add some extra functionalities, I'll some them up:
- add/delete/edit a project
    - add: `node -a "first project/do some crazy stuff/third craziness=45"
    - delete: `node -d "first project/do some crazy stuff/third craziness"`
    - edit: `node -e "first project/do some crazy stuff/third craziness=78"`
    - add autocompletion for the project navigations
- show only the sub projects of a selected project
    - show: `node -s "first project/do some crazy stuff"`
- customizations:
    - toggle colors
    - select the colors and the percentages to show them
    - update the bar characters
    - show/hide percentage or bar
    - ...

Ofcourse, I will add them in the future, when I wanted to invest some time in it.
And those customizations don't have to change the main goal of this project. "you clone it, write down your projects file and start using it", those have to be nice to have features only.
If you want, you can create a PR, and I will review it.

Thank and take care.