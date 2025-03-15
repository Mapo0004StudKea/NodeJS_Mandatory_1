import { readPage, constructPage } from "./templatingEngine.js";

const frontpage = readPage('./public/pages/frontpage/frontpage.html');
export const frontpagePage = constructPage(frontpage);

const week1 = readPage('./public/pages/weeks/week1/index.html');
export const week1Page = constructPage(week1,
    {
        title: "Week 1",
        cssLinks: '<link rel="stylesheet" href="/assets/css/code.css">',
        cssLinks: '<link rel="stylesheet" href="/assets/css/tables.css">'
    }
);

const week1GitTerminal = readPage('./public/pages/weeks/week1/git-terminal.html');
export const week1GitTerminalPage = constructPage(week1GitTerminal,
    {
        title: "Week 1 - Git Terminal",
        cssLinks: '<link rel="stylesheet" href="/assets/css/code.css">'
    }
);

const week1DataTypes = readPage('./public/pages/weeks/week1/javascript-datatypes.html');
export const week1DataTypesPage = constructPage(week1DataTypes,
    {
        title: "Week 1 - JavaScript Data Types",
        cssLinks: '<link rel="stylesheet" href="/assets/css/code.css">'
        
    }
);

const week1Nodejs = readPage('./public/pages/weeks/week1/node-js.html');
export const week1NodejsPage = constructPage(week1Nodejs,
    {
        title: "Week 1 - Node.js",
        cssLinks: '<link rel="stylesheet" href="/assets/css/code.css">'
    }
);

const week1DataTypes2 = readPage('./public/pages/weeks/week1/javascript-datatypes-2.html');
export const week1DataTypes2Page = constructPage(week1DataTypes2,
    {
        title: "Week 1 - JavaScript Data Types 2",
        cssLinks: '<link rel="stylesheet" href="/assets/css/code.css">'
    }
);

const week1TypeCoercion = readPage('./public/pages/weeks/week1/type-coercion.html');
export const week1TypeCoercionPage = constructPage(week1TypeCoercion,
    {
        title: "Week 1 - Type Coercion",
        cssLinks: '<link rel="stylesheet" href="/assets/css/code.css">'
    }
);

const week1RestApi = readPage('./public/pages/weeks/week1/rest-api.html');
export const week1RestApiPage = constructPage(week1RestApi,
    {
        title: "Week 1 - REST API",
        cssLinks: '<link rel="stylesheet" href="/assets/css/code.css">'
    }
);

const week1RestConvention = readPage('./public/pages/weeks/week1/rest-convention.html');
export const week1RestConventionPage = constructPage(week1RestConvention,
    {
        title: "Week 1 - REST Convention",
        cssLinks: '<link rel="stylesheet" href="/assets/css/code.css">'
    }
);

const week2 = readPage('./public/pages/weeks/week2/index.html');
export const week2Page = constructPage(week2,
    {
        title: "Week 2",
        cssLinks: '<link rel="stylesheet" href="/assets/css/code.css">',
        cssLinks: '<link rel="stylesheet" href="/assets/css/tables.css">',
    }
);

const week3 = readPage('./public/pages/weeks/week3/index.html');
export const week3Page = constructPage(week3,
    {
        title: "Week 3",
        cssLinks: '<link rel="stylesheet" href="/assets/css/code.css">',
        cssLinks: '<link rel="stylesheet" href="/assets/css/tables.css">',
    }
);

const week4 = readPage('./public/pages/weeks/week4/index.html');
export const week4Page = constructPage(week4,
    {
        title: "Week 4",
        cssLinks: '<link rel="stylesheet" href="/assets/css/code.css">',
        cssLinks: '<link rel="stylesheet" href="/assets/css/tables.css">',
    }
);

const week5 = readPage('./public/pages/weeks/week5/index.html');
export const week5Page = constructPage(week5,
    {
        title: "Week 5",
        cssLinks: '<link rel="stylesheet" href="/assets/css/code.css">',
        cssLinks: '<link rel="stylesheet" href="/assets/css/tables.css">',
    }
);

const week6 = readPage('./public/pages/weeks/week6/index.html');
export const week6Page = constructPage(week6,
    {
        title: "Week 6",
        cssLinks: '<link rel="stylesheet" href="/assets/css/code.css">',
        cssLinks: '<link rel="stylesheet" href="/assets/css/tables.css">',
    }
);