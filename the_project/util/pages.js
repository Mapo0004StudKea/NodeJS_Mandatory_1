import { readPage, constructPage } from "./templatingEngine.js";

// Helper function to create a page
const createPage = (path, title, cssLinks = '') => {
    const pageContent = readPage(path);
    return constructPage(pageContent, {
        title,
        cssLinks: `<link rel="stylesheet" href="/assets/css/code.css">${cssLinks}`
    });
};

// Frontpage
export const frontpagePage = createPage('./public/pages/frontpage/frontpage.html', 'Frontpage');

// Weeks 1
export const week1Page = createPage('./public/pages/weeks/week1/index.html', 'Week 1', '<link rel="stylesheet" href="/assets/css/tables.css">');
export const week1GitTerminalPage = createPage('./public/pages/weeks/week1/git-terminal.html', 'Week 1 - Git Terminal');
export const week1DataTypesPage = createPage('./public/pages/weeks/week1/javascript-datatypes.html', 'Week 1 - JavaScript Data Types');
export const week1NodejsPage = createPage('./public/pages/weeks/week1/node-js.html', 'Week 1 - Node.js');
export const week1DataTypes2Page = createPage('./public/pages/weeks/week1/javascript-datatypes-2.html', 'Week 1 - JavaScript Data Types 2');
export const week1TypeCoercionPage = createPage('./public/pages/weeks/week1/type-coercion.html', 'Week 1 - Type Coercion');
export const week1RestApiPage = createPage('./public/pages/weeks/week1/rest-api.html', 'Week 1 - REST API', '<link rel="stylesheet" href="/assets/css/tables.css">');
export const week1RestConventionPage = createPage('./public/pages/weeks/week1/rest-convention.html', 'Week 1 - REST Convention');

// Weeks 2
export const week2Page = createPage('./public/pages/weeks/week2/index.html', 'Week 2', '<link rel="stylesheet" href="/assets/css/tables.css">');
export const week2JavascriptScopingPage = createPage('./public/pages/weeks/week2/javascript-scoping.html', 'Week 2 - Javascript Scoping', '<link rel="stylesheet" href="/assets/css/tables.css">');
export const week2AdvancedFunctionPage = createPage('./public/pages/weeks/week2/advanced-functions.html', 'Week 2 - Advanced Functions', '<link rel="stylesheet" href="/assets/css/tables.css">');
export const week2CallBackSyntaxPage = createPage('./public/pages/weeks/week2/callback-syntax.html', 'Week 2 - Callback Syntax', '<link rel="stylesheet" href="/assets/css/tables.css">');
export const week2NpmVsOtherManagersPage = createPage('./public/pages/weeks/week2/npm-vs-other-managers.html', 'Week 2 - NPM vs other Managers', '<link rel="stylesheet" href="/assets/css/tables.css">');
export const week2PackageJsonPage = createPage('./public/pages/weeks/week2/package-json.html', 'Week 2 - Package.Json', '<link rel="stylesheet" href="/assets/css/tables.css">');
export const week2ExpressServerPage = createPage('./public/pages/weeks/week2/express-server.html', 'Week 2 - Express Server', '<link rel="stylesheet" href="/assets/css/tables.css">');
export const week2HttpWithExpressPage = createPage('./public/pages/weeks/week2/http-get-with-express.html', 'Week 2 - HTTP with Express', '<link rel="stylesheet" href="/assets/css/tables.css">');
export const week2NodeModulesPage = createPage('./public/pages/weeks/week2/node-modules.html', 'Week 2 - Node Modules', '<link rel="stylesheet" href="/assets/css/tables.css">');

// Weeks 3
export const week3Page = createPage('./public/pages/weeks/week3/index.html', 'Week 3', '<link rel="stylesheet" href="/assets/css/tables.css">');
export const week3NodemonUsagePage = createPage('./public/pages/weeks/week3/nodemon-usage.html', 'Week 3 - Nodemon Usage', '<link rel="stylesheet" href="/assets/css/tables.css">');
export const week3LoopMethodsPage = createPage('./public/pages/weeks/week3/loop-methods.html', 'Week 3 - Loop Methods', '<link rel="stylesheet" href="/assets/css/tables.css">');
export const week3FunctionalLoopsPage = createPage('./public/pages/weeks/week3/why-functional-loops.html', 'Week 3 - Functional Loops', '<link rel="stylesheet" href="/assets/css/tables.css">');
export const week3UrlTerminologyPage = createPage('./public/pages/weeks/week3/url-terminology.html', 'Week 3 - URL Terminology', '<link rel="stylesheet" href="/assets/css/tables.css">');
export const week3PostRequestExpressPage = createPage('./public/pages/weeks/week3/post-request-express.html', 'Week 3 - POST Request Express', '<link rel="stylesheet" href="/assets/css/tables.css">');
export const week3BodyParsingExpressPage = createPage('./public/pages/weeks/week3/body-parsing-express.html', 'Week 3 - Body Parsing Express', '<link rel="stylesheet" href="/assets/css/tables.css">');

// Weeks 4
export const week4Page = createPage('./public/pages/weeks/week4/index.html', 'Week 4', '<link rel="stylesheet" href="/assets/css/tables.css">');
export const week4CRUDRestAPIPage = createPage('./public/pages/weeks/week4/crud-rest-api.html', 'Week 4 - CRUD REST API', '<link rel="stylesheet" href="/assets/css/tables.css">');
export const week4GetDatePage = createPage('./public/pages/weeks/week4/get-date-js.html', 'Week 4 - Get Date', '<link rel="stylesheet" href="/assets/css/tables.css">');
export const week4FetchRequestPage = createPage('./public/pages/weeks/week4/fetch-request.html', 'Week 4 - Fetch Request', '<link rel="stylesheet" href="/assets/css/tables.css">');

// Weeks 5
export const week5Page = createPage('./public/pages/weeks/week5/index.html', 'Week 5', '<link rel="stylesheet" href="/assets/css/tables.css">');
export const week5HTMLImportExportPage = createPage('./public/pages/weeks/week5/html-import-export.html', 'Week 5 - HTML Import/Export', '<link rel="stylesheet" href="/assets/css/tables.css">');
export const week5NodeImportExportPage = createPage('./public/pages/weeks/week5/node-import-export.html', 'Week 5 - Node Import/Export', '<link rel="stylesheet" href="/assets/css/tables.css">');
export const week5ServerStaticFilesPage = createPage('./public/pages/weeks/week5/serve-static-files.html', 'Week 5 - Server Static Files', '<link rel="stylesheet" href="/assets/css/tables.css">');
export const week5FrontendStructurePage = createPage('./public/pages/weeks/week5/frontend-structure.html', 'Week 5 - Frontend Structure', '<link rel="stylesheet" href="/assets/css/tables.css">');
export const week5RediectionMethodsPage = createPage('./public/pages/weeks/week5/redirection-methods.html', 'Week 5 - Redirection Methods', '<link rel="stylesheet" href="/assets/css/tables.css">');
export const week5ClientServerRedirectionPage = createPage('./public/pages/weeks/week5/client-vs-server-redirection.html', 'Week 5 - Client/Server Redirection', '<link rel="stylesheet" href="/assets/css/tables.css">');

// Weeks 6
export const week6Page = createPage('./public/pages/weeks/week6/index.html', 'Week 6', '<link rel="stylesheet" href="/assets/css/tables.css">');
export const week6ClientVsBackendFetchPage = createPage('./public/pages/weeks/week6/client-vs-backend-fetch.html', 'Week 6 - Client vs Backend Fetch', '<link rel="stylesheet" href="/assets/css/tables.css">');
export const week6EnvironmentVariablesPage = createPage('./public/pages/weeks/week6/environment-variables.html', 'Week 6 - Environment Variables', '<link rel="stylesheet" href="/assets/css/tables.css">');
export const week6NPMScriptsPage = createPage('./public/pages/weeks/week6/npm-scripts.html', 'Week 6 - NPM Scripts', '<link rel="stylesheet" href="/assets/css/tables.css">');
export const week6SemanticHTMLPage = createPage('./public/pages/weeks/week6/semantic-html.html', 'Week 6 - Semantic HTML', '<link rel="stylesheet" href="/assets/css/tables.css">');
export const week6ClientVsServerFilesPage = createPage('./public/pages/weeks/week6/client-vs-server-files.html', 'Week 6 - Client vs Server Files', '<link rel="stylesheet" href="/assets/css/tables.css">');
export const week6StickyFooterPage = createPage('./public/pages/weeks/week6/sticky-footer.html', 'Week 6 - Sticky Footer', '<link rel="stylesheet" href="/assets/css/tables.css">');

// 404 Page
export const notFoundPage = createPage('./public/pages/404/404.html', '404 - Page Not Found');