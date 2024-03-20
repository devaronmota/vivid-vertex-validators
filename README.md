# Vivid Vertex Validators

A lightweight library for complex data validation in JavaScript applications. Vivid Vertex Validators utilizes popular validation libraries to provide a unified and easy-to-use interface for validating data structures against defined schemas.

## Features

- Leverages powerful validation libraries like AJV, Joi, and Yup.
- Provides simple and intuitive API for data validation.
- Lightweight and flexible, easy to integrate into any project.
- Supports custom validation rules and messages.

## Installation

```bash
npm install vivid-vertex-validators
```

## Quick Start

Import Vivid Vertex Validators and use it to validate your data against a schema:

```javascript
const { validateData } = require('vivid-vertex-validators');

const schema = {
type: 'object',
properties: {
name: {type: 'string'},
age: {type: 'number', minimum: 0}
},
required: ['name', 'age'],
additionalProperties: false
};

const data = {
name: 'John Doe',
age: 30
};

const isValid = validateData(schema, data);
if (isValid) {
console.log('Validation passed!');
} else {
console.log('Validation failed.');
}
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.
