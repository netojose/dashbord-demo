# Dashboard admin Test

## Used techonogies

| Technology                                        | Used for                                                                                                                                                                                                          |
| ------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [ React ](https://react.dev/)                     | Build reactive interfaces                                                                                                                                                                                         |
| [ Vite ](https://vitejs.dev/)                     | Vite is a frontend tool that is used for building fast and optimized web applications. It uses a modern build system and a fast development server to provide a streamlined and efficient development experience. |
| [ dayjs ](https://day.js.org/)                    | A minimalist JavaScript library that parses, validates, manipulates, and displays dates and times                                                                                                                 |
| [ panda 🐼 ](https://panda-css.com/)              | CSS-in-JS with build time generated styles, RSC compatible, multi-variant support, and best-in-class developer experience                                                                                         |
| [ testing-library ](https://testing-library.com/) | Simple and complete testing utilities library for testing without all the implementation details                                                                                                                  |
| [ vitest ](https://vitest.dev/)                   | A Vite-native testing framework. Reuse Vite's config and plugins. Out-of-box ESM, TypeScript and JSX support powered by esbuild                                                                                   |
| [ eslint ](https://eslint.org/)                   | code static analyzes tool to quickly find problems                                                                                                                                                                |

## Technical decisions

For this project, I focused on code quality and performance.

Given the requirements, it's just a dashboard, so I didn't include any route mechanism in it (because it doesn't make sense, since it's not necessary to navigate anywhere). The folders/files structure was also designed for this assessment purpose. Later, in a second stage, if the system needs to have other pages, the folders/files structure will be reorganized to scale to the new use case requirements, and some library for route management (like [react router](https://reactrouter.com/) or [tanstack router](https://tanstack.com/router/)) can be installed.

I decided not to use NextJs in this project, because since it doesn't use routes, I would stop using what Next has most to offer, which are routes, in addition to requiring the application to run on a node server, and not just serve it statically (although NextJs supports SSG). Also I didn't use Create React App, because your usage is not recomendend by react official docs anymore, and it still uses webpack. Instead, I used Vite, which is a great alternative.

Regarding the chart, I was given the freedom to use any type of chart, and a pie chart was suggested. I personally don't like this type of chart, [there is an excellent article](https://www.ataccama.com/blog/why-pie-charts-are-evil) talking about this. So, I decided to use a bar graph.

This chart component is also loaded differently from the rest of the other components, I used lazy/Suspense, because it uses a relatively large library (recharts), I did this to split the code and optimize the final build size.

Inside the table, in the Risk Score column, I placed the values ​​(HIGH, MEDIUM and LOW) within colored badges, because the color of the text proposed by challenge was not having a good contrast with the table background, and from an accessibility point of view this could be a problem.

The components in general were created to solve the proposed problem (some do a little more than that, such as the button, which accepts a click, and the Table component, which already presents a robust way of configuring columns and rendering content). But as the project grows, the components were made in a way that they can receive more functionality over time.

For styling, I'm using [Panda CSS](https://panda-css.com/). Instead of use some UI framework (Material UI, Ant.design, etc.), or some library with ready-to-use components, like bootstrap. I decided write the styles by myself, to demonstrate some knowlege about CSS. And I used Panda because it's an CSS-in-js solution (I love this approach ❤️), and different from others (like styled-components), this library it's Zero runtime, Type safe, and others features, providing and excellent DX, and the blundle output is like Taiwind CSS, generating atomic classes. The total css output for all project, is 1.95Kb (including reset styles provided by panda).

## Code quality

## TypeScript

This project was built using TypeScript instead of JavaScript, making use of the power of type-safe to make a more predictive code, improved developer experience and advanced tooling support.

### ESLint

While the application was made, ESLint was making the static code analysis, looking for code for common problems, such as syntax errors, formatting issues, code style violations, and potential bugs. This make sure more quality on the the final code. On this project, I also using [Airbnb ESLint pressets](https://www.npmjs.com/package/eslint-config-airbnb-typescript).

## Performance, accessibility, best practices and CEO

The project was built with these 4 pilars in mind. So, this are the results:

> You can see the reults on [PageSpeed Insights](https://pagespeed.web.dev/analysis/https-greatgood-joseneto-dev/tsocu8qqvn?form_factor=mobile) report.

### For desktop

![Desktop results](https://iili.io/dFsj0il.png)

### For mobile

![Mobile results](https://iili.io/dFsOKH7.png)

## Application tests

The project has built using TDD, and has 100% of code corevage in unit tests
![Unit tests results image 1](https://iili.io/dFsv5RS.png)
![Unit tests results image 2](https://iili.io/dFsUMgf.png)
![Unit tests results image 3](https://iili.io/dFsSMAB.png)

> You can run this tests, running test npm scripts described below in testing section

## Preview app

You can see the project running at https://greatgood.joseneto.dev

## Application screenshots

### Desktop

![Desktop](https://iili.io/dFi6MxI.png)

### iPad Mini

![iPad Mini](https://iili.io/dFiZ1OG.png)

### iPhone 14 Pro Max

![iPhone 14 Pro Max](https://iili.io/dFisqKX.png)

\* In this case, it's possible to see the entire table content scrolling horizontally

## Production build

The project has an a good final bundle size (thanks to used technologies), resulting in a perfect user experience.
![Application production bundle size](https://iili.io/dFLwMP4.png)

## Running the app

### Prerequisites

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)

### Instaling

```bash
# Clone this repository
git clone git@github.com:netojose/dashbord-demo.git dashboard-demo

# Go into folder
cd dashboard-demo

# Install dependences
npm install
```

### Testing

```bash
# Run unit tests
npm run test

# Run unit tests and show code coverage report
npm run test:coverage

# Lint the code
npm run lint
```

### Running in dev mode

```bash
npm run dev

# open http://localhost:5173/
```

### Building for production

```bash
npm run buid

# The builded source will be available at /dist folder

# You also can run
npm run preview

# and open http://localhost:4173/ to see the production build running
```
