
# Restaurant Apps PWA + Testing and Optimized

## Description
This is a restaurant application created as part of an Expert Front-End submission. The app uses Webpack for bundling, Babel for transpiling, and Jest for testing.

## Prerequisites
Before you begin, ensure you have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed.

## Installation
Install the dependencies:
   ```bash
   npm install
   ```

## Running the Application

### Development Mode
To run the application in development mode with hot reloading, use the following command:
```bash
npm run start-dev
```
This will start the Webpack Dev Server with the configuration from `webpack.dev.js`. The application will be available at `http://localhost:9000`.

### Build
To build the application for production, use the following command:
```bash
npm run build
```
This will generate the production-ready bundle in the `dist` directory.

### Serve
To serve the built application from the `dist` directory, use the following command:
```bash
npm run serve
```
This will start an HTTP server to serve the built application.

## Testing

### Unit and Integration Tests
To run unit and integration tests, use the following command:
```bash
npm run test
```

### Watch Mode
To run tests in watch mode, use the following command:
```bash
npm run test:watch
```

### End-to-End Tests
To run end-to-end tests, use the following command:
```bash
npm run e2e
```

## Linting
To run the linter and ensure your code adheres to the specified standards, use the following command:
```bash
npm run lint
```

## Build Image
To build image assets, use the following command:
```bash
npm run build-image
```

## Deployment

### Deploy to GitHub Pages
To deploy your application to GitHub Pages, follow these steps:

1. **Build the Application:**
   Build the production-ready version of your application by running:
   ```bash
   npm run build
   ```

2. **Deploy to GitHub Pages:**
   Run the following command to deploy the contents of the `dist` directory to the `gh-pages` branch of your GitHub repository:
   ```bash
   npm run deploy
   ```

3. **Configure GitHub Pages:**
   - Go to your repository on GitHub.
   - Navigate to the **Settings** tab.
   - In the **Pages** section, set the source to the `gh-pages` branch and select `/` (root) as the folder.
   - Click **Save**.

4. **Access Your Deployed Site:**
   After deployment, your site will be available at:
   ```
   https://<username>.github.io/<repository>/
   ```

## Configuration

### Webpack
- **Development**: `webpack-dev-server` is configured using `webpack.dev.js`.
- **Production**: `webpack` is configured using `webpack.prod.js`.

### Babel
- **Transpiling**: Uses Babel preset `@babel/preset-env` for modern JavaScript transpiling.

## Author
Bagus Angkasawan Sumantri Putra - [bagusasp01@gmail.com](mailto:bagusasp01@gmail.com)

## License
This project is licensed under the [ISC License](LICENSE).

### Explanation:

- **Description**: Describes the application.
- **Prerequisites**: Details the necessary installations.
- **Installation**: Instructions for installing dependencies.
- **Running the Application**: Commands to run the application in different modes.
- **Linting**: Command to run code linting.
- **Deployment**: Instructions for deploying to GitHub Pages.
- **Configuration**: Details about Webpack and Babel configuration.
- **Author**: Author information.
- **License**: Licensing information.

Feel free to adjust any details according to your project specifics!
