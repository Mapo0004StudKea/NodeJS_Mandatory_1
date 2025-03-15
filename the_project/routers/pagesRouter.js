import { Router } from 'express';

const router = Router();

import { frontpagePage } from '../util/pages.js';
import { week1Page } from '../util/pages.js';
import { week1GitTerminalPage } from '../util/pages.js';
import { week1DataTypesPage } from '../util/pages.js';
import { week1NodejsPage } from '../util/pages.js';
import { week1DataTypes2Page } from '../util/pages.js';
import { week1TypeCoercionPage } from '../util/pages.js';
import { week1RestApiPage } from '../util/pages.js';
import { week1RestConventionPage } from '../util/pages.js';
import { week2Page } from '../util/pages.js';
import { week3Page } from '../util/pages.js';
import { week4Page } from '../util/pages.js';
import { week5Page } from '../util/pages.js';
import { week6Page } from '../util/pages.js';


router.get("/", (req, res) => {
    res.send(frontpagePage);
});

router.get("/week/1", (req, res) => {
    res.send(week1Page);
});

router.get("/week/1/git-terminal", (req, res) => {
    res.send(week1GitTerminalPage);
});

router.get("/week/1/javascript-datatypes", (req, res) => {
    res.send(week1DataTypesPage);
});

router.get("/week/1/node-js", (req, res) => {
    res.send(week1NodejsPage);
});

router.get("/week/1/javascript-datatypes-2", (req, res) => {
    res.send(week1DataTypes2Page);
});

router.get("/week/1/type-coercion", (req, res) => {
    res.send(week1TypeCoercionPage);
});

router.get("/week/1/rest-api", (req, res) => {
    res.send(week1RestApiPage);
});

router.get("/week/1/rest-convention", (req, res) => {
    res.send(week1RestConventionPage);
});

router.get("/week/2", (req, res) => {
    res.send(week2Page);
});

router.get("/week/3", (req, res) => {
    res.send(week3Page);
});

router.get("/week/4", (req, res) => {
    res.send(week4Page);
});

router.get("/week/5", (req, res) => {
    res.send(week5Page);
});

router.get("/week/6", (req, res) => {
    res.send(week6Page);
});

export default router;