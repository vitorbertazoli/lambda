'use strict';

module.exports.process = async (input, context) => {

    let message = "";
    if (input.body) {
        message = input.body;
    } else {
        message = "Input doesn't have a body";
    }

    var temp = JSON.parse(message);

    return {
        statusCode: 200,
        body: JSON.stringify({
            message: temp.operation
        }),
    };

    // Use this code if you don't use the http event with the LAMBDA-PROXY integration
    // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
