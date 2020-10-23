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
  switch (event.httpMethod) {
    case 'POST':
      const body = JSON.parse(event.body);
      const name = body.name;
      console.log('name', name)
      const user = USERS[name];
      console.log('user', user);

      return {
        statusCode: 200,
        headers,
        body: JSON.stringify(user)
      };

    case 'GET':
    case 'PUT':
    case 'DELETE':
      return { statusCode: 405, headers, body: "Method Not Allowed" };

    case 'OPTIONS':
      return {
        statusCode: 200, // <-- Must be 200 otherwise pre-flight call fails
        headers,
        body: 'This was a preflight call!'
      };

    default:
      return {
        statusCode: 500,
        body: 'unrecognized HTTP Method, must be one of GET/POST/PUT/DELETE/OPTIONS'
      };
  }
};
