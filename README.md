# simple-password-manager
🔒 A simple password manager, built with React and TypeScript

## Installation
1. Clone this repository
    ```bash
    git clone git@github.com:kriskuiper/simple-password-manager.git
    ```
2. Install dependencies using your favourite package manager
    ```bash
    npm install
    ```
3. Start the development server
    ```bash
    npm run dev:netlify # Ensures you'll get the clients via a Netlify serverless function
    ```

## Development
### Commands
| Command                 | Description                                                                                                                                    |
|-------------------------|------------------------------------------------------------------------------------------------------------------------------------------------|
| `npm run dev`           | Start the development server on [http://localhost:5176](http://localhost:5176)                                                                 |
| `npm run dev:netlify`   | Runs the development server using Netlify configuration (redirects and serverless functions) on [http://localhost:8888](http://localhost:8888) |
| `npm run build`         | Create a production build                                                                                                                      |
| `npm run test:unit`     | Run unit tests in CI mode                                                                                                                      |
| `npm run test:unit:dev` | Run unit tests in dev mode                                                                                                                     |
| `npm run test:e2e`      | Run e2e tests in CI mode                                                                                                                       |
| `npm run test:e2e:dev`  | Run e2e tests in dev mode                                                                                                                      |
| `npm run preview`       | Run the production build in preview mode, doesn't include running the serverless functions                                                     |

### Testing
This project consists of two types of tests
1. e2e tests using [Cypress](https://www.cypress.io/app/)
2. Unit tests using [Vitest](https://vitest.dev/)
