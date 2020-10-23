const querystring = require("querystring");

const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE'
};

const USERS = {
  'mateo!123': { id: 'mateo!123', name: 'Mateo' },
  'asiulek!123': { id: 'asiulek!123', name: 'Asiulek' },
  'gosiak!123': { id: 'gosiak!123', name: 'Gosiak' },
  'raffi!123': { id: 'raffi!123', name: 'Raffi' },
  'robus!123': { id: 'robercik!123', name: 'Robuś' },
  'wiesiula!123': { id: 'wiesiula!123', name: 'Wiesiula' },
}

exports.handler = async (event, context) => {
  // Only allow POST
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, headers, body: "Method Not Allowed" };
  }

  // When the method is POST, the name will no longer be in the event’s
  // queryStringParameters – it’ll be in the event body encoded as a query string
  const params = querystring.parse(event.body);
  const user = USERS[params.name];

  return {
    statusCode: !user ? 401 : 200,
    headers,
    body: user
  };
};
