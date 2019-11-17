const AWS = require("aws-sdk"); // eslint-disable-line import/no-extraneous-dependencies

let options = {};

// connect to local DB if running offline
if (process.env.IS_OFFLINE) {
  options = {
    region: "localhost",
    accessKeyId: "xxxx",
    secretAccessKey: "xxxx",
    endpoint: "http://localhost:8000"
  };
}

const dynamoDB = new AWS.DynamoDB.DocumentClient(options);
export default dynamoDB;
