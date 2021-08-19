'use strict';

const { join } = require('path');

module.exports = function(plop) {
  // Service generator
  plop.setGenerator('service', {
    description: 'Generate a service for an API',
    prompts: [
      {
        type: 'input',
        name: 'id',
        message: 'Service name',
      },
    ],
    actions: [
      {
        type: 'add',
        path: join(process.cwd(), 'api/{{id}}/services/{{id}}.js'),
        templateFile: 'templates/service.js.hbs',
      },
    ],
  });

  // Controller generator
  plop.setGenerator('controller', {
    description: 'Generate a controller for an API',
    prompts: [
      {
        type: 'input',
        name: 'id',
        message: 'Controller name',
      },
    ],
    actions: [
      {
        type: 'add',
        path: join(process.cwd(), 'api/{{id}}/controllers/{{id}}.js'),
        templateFile: 'templates/controller.js.hbs',
      },
    ],
  });

  // Policy generator
  plop.setGenerator('policy', {
    description: 'Generate a policy',
    prompts: [
      {
        type: 'input',
        name: 'id',
        message: 'Policy name',
      },
    ],
    actions: [
      {
        type: 'add',
        path: join(process.cwd(), 'config/policies/{{id}}.js'),
        templateFile: 'templates/controller.js.hbs',
      },
    ],
  });
};
