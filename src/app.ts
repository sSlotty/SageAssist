import { Application } from 'express';

import express = require('express');

export class App{
    public app: Application;

    constructor(
        middleware: Array<any>,
        routes: Array<express.Router>,
        private apiPath: string = '/api',
        private staticPath: string = '/static'

    ) {
        this.app = express();
        
        this.middleware(middleware);
        this.routes(routes);
        this.assets(this.staticPath);
    }
}