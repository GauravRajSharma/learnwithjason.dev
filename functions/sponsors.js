const { hasuraRequest } = require('./util/hasura');

exports.handler = async () => {
  const data = await hasuraRequest({
    query: `
      query GetSponsors {
        sponsors(where: {active: {_eq: true}}) {
          name
          image
          url
        }
      }    
    `,
  });

  return {
    statusCode: 200,
    body: JSON.stringify(data.sponsors),
  };
};