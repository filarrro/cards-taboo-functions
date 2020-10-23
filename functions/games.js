const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE'
};

let id = 1;

const GAMES = [
  { id: 0, name: 'Zaczęta już', status: 'playing' },
  { id: 1, name: 'Fajna Nowa Giera', status: 'new' },
];

exports.handler = async (event, context) => {
  switch (event.httpMethod) {
    case 'GET':
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify(GAMES.filter(game => game.status === 'new'))
      };

    case 'OPTIONS':
      return {
        statusCode: 200, // <-- Must be 200 otherwise pre-flight call fails
        headers,
        body: 'This was a preflight call!'
      };

    default:
      return { statusCode: 405, headers, body: "Method Not Allowed" };
  }
};
