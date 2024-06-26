import { winstonLogger } from '@k0msak007/jobber-shared';
import { config } from '@notifications/config';
import { Logger } from 'winston';
import express, { Express } from 'express';
import { start } from '@notifications/server';

const log: Logger = winstonLogger(`${config.ELASTIC_SEARCH_URL}`, 'notificationApp', 'debug');

function initialize(): void {
  const app: Express = express();
  start(app);
  log.info('Notification Service Initialized');
}

initialize();
