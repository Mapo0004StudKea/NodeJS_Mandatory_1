import { Router } from 'express';
import * as pages from '../util/pages.js';

const router = Router();

// Array of page routes
const pageRoutes = [
    { path: '/', page: pages.frontpagePage },
    { path: '/weeks/1', page: pages.week1Page },
    { path: '/weeks/1/git-terminal', page: pages.week1GitTerminalPage },
    { path: '/weeks/1/javascript-datatypes', page: pages.week1DataTypesPage },
    { path: '/weeks/1/node-js', page: pages.week1NodejsPage },
    { path: '/weeks/1/javascript-datatypes-2', page: pages.week1DataTypes2Page },
    { path: '/weeks/1/type-coercion', page: pages.week1TypeCoercionPage },
    { path: '/weeks/1/rest-api', page: pages.week1RestApiPage },
    { path: '/weeks/1/rest-convention', page: pages.week1RestConventionPage },
    { path: '/weeks/2', page: pages.week2Page },
    { path: '/weeks/2/javascript-scoping', page: pages.week2JavascriptScopingPage },
    { path: '/weeks/2/advanced-functions', page: pages.week2AdvancedFunctionPage },
    { path: '/weeks/2/callback-syntax', page: pages.week2CallBackSyntaxPage },
    { path: '/weeks/2/npm-vs-other-managers', page: pages.week2NpmVsOtherManagersPage },
    { path: '/weeks/2/package-json', page: pages.week2PackageJsonPage },
    { path: '/weeks/2/express-server', page: pages.week2ExpressServerPage },
    { path: '/weeks/2/http-get-with-express', page: pages.week2HttpWithExpressPage },
    { path: '/weeks/2/node-modules', page: pages.week2NodeModulesPage },
    { path: '/weeks/3', page: pages.week3Page },
    { path: '/weeks/3/nodemon-usage', page: pages.week3NodemonUsagePage },
    { path: '/weeks/3/loop-methods', page: pages.week3LoopMethodsPage },
    { path: '/weeks/3/why-functional-loops', page: pages.week3FunctionalLoopsPage },
    { path: '/weeks/3/url-terminology', page: pages.week3UrlTerminologyPage },
    { path: '/weeks/3/post-request-express', page: pages.week3PostRequestExpressPage },
    { path: '/weeks/3/body-parsing-express', page: pages.week3BodyParsingExpressPage },
    { path: '/weeks/4', page: pages.week4Page },
    { path: '/weeks/4/crud-rest-api', page: pages.week4CRUDRestAPIPage },
    { path: '/weeks/4/get-date-js', page: pages.week4GetDatePage },
    { path: '/weeks/4/fetch-request', page: pages.week4FetchRequestPage },
    { path: '/weeks/5', page: pages.week5Page },
    { path: '/weeks/5/html-import-export', page: pages.week5HTMLImportExportPage },
    { path: '/weeks/5/node-import-export', page: pages.week5NodeImportExportPage },
    { path: '/weeks/5/serve-static-files', page: pages.week5ServerStaticFilesPage },
    { path: '/weeks/5/frontend-structure', page: pages.week5FrontendStructurePage },
    { path: '/weeks/5/redirection-methods', page: pages.week5RediectionMethodsPage },
    { path: '/weeks/5/client-vs-server-redirection', page: pages.week5ClientServerRedirectionPage },
    { path: '/weeks/6', page: pages.week6Page },
    { path: '/weeks/6/client-vs-backend-fetch', page: pages.week6ClientVsBackendFetchPage },
    { path: '/weeks/6/environment-variables', page: pages.week6EnvironmentVariablesPage },
    { path: '/weeks/6/npm-scripts', page: pages.week6NPMScriptsPage },
    { path: '/weeks/6/semantic-html', page: pages.week6SemanticHTMLPage },
    { path: '/weeks/6/client-vs-server-files', page: pages.week6ClientVsServerFilesPage },
    { path: '/weeks/6/sticky-footer', page: pages.week6StickyFooterPage }
];

// Add routes for each page
pageRoutes.forEach(route => {
    router.get(route.path, (req, res) => {
        res.send(route.page);
    });
});

// Catch-all route for 404 page
router.use((req, res) => {
    res.status(404).send(pages.notFoundPage);
});

export default router;
