'use strict';

const processor = require('processors/create-processor');

module.exports.process = async (input, context) => {

    let message = "";
    if (input.body) {
        message = input.body;
    } else {
        return {
            statusCode: 400,
            body: JSON.stringify({
                message: "Bad request"
            })
        }
    }

    processor.createProcessor(input);

    const body = JSON.parse(message);
    switch (body.operation) {
        case 'create':
            console.log('create requested');
            break;
        case 'update':
            console.log('update requested');
            break;
    }

    return {
        statusCode: 200,
        body: JSON.stringify({
            message: body.operation
        })
    };

    // Use this code if you don't use the http event with the LAMBDA-PROXY integration
    // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
