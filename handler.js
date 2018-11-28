'use strict';

const createProcessor = require("./processors/create-processor");
const updateProcessor = require("./processors/update-processor");

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

    const body = JSON.parse(message);
    switch (body.operation) {
        case 'create':
            console.log('create requested');
            createProcessor.process(input);
            break;
        case 'update':
            console.log('update requested');
            updateProcessor.process(input);
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
