const uuid = require("uuid");

import dynamoDB from "../lib/dynamoDB";
import { response200 } from "../lib/response";

export const post = async (event, context, callback) => {
  const { name, team } = JSON.parse(event.body);

  const itemToCreate = {
    TableName: process.env.DRIVERS_TABLE,
    Item: {
      id: uuid.v4(),
      name,
      team
    }
  };
  await dynamoDB.put(itemToCreate).promise();
  return response200({ body: itemToCreate.Item.id });
};

export const get = async (event, context, callback) => {
  const params = {
    TableName: process.env.DRIVERS_TABLE
  };
  const data = await dynamoDB.scan(params).promise();
  return response200({ body: data });
};

export const deleteItem = async (event, context, callback) => {
  const { id } = event.pathParameters;
  const itemToDelete = {
    TableName: process.env.DRIVERS_TABLE,
    Key: {
      id: id
    }
  };
  await dynamoDB
    .delete(itemToDelete)
    .promise()
    .then(resp => resp);
  return response200({ body: id });
};
