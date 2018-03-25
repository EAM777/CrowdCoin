'use strict';

var routes = require('next-routes')(); //function invoked

routes.add('/campaigns/new', '/campaigns/new').add('/campaigns/:address', '/campaigns/show').add('/campaigns/:address/requests', '/campaigns/requests/index').add('/campaigns/:address/requests/new', '/campaigns/requests/new');

module.exports = routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy5qcyJdLCJuYW1lcyI6WyJyb3V0ZXMiLCJyZXF1aXJlIiwiYWRkIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNLFNBQVMsQUFBZixBLDBCQUF5Qzs7QUFFekMsT0FDRyxBQURILElBQ08sQUFEUCxrQkFDeUIsQUFEekIsa0JBRUcsQUFGSCxJQUVPLEFBRlAsdUJBRThCLEFBRjlCLG1CQUdHLEFBSEgsSUFHTyxBQUhQLGdDQUd1QyxBQUh2Qyw2QkFJRyxBQUpILElBSU8sQUFKUCxvQ0FJMkMsQUFKM0M7O0FBT0EsT0FBTyxBQUFQLFVBQWlCLEFBQWpCIiwiZmlsZSI6InJvdXRlcy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZWxsaW90L3dvcmtzcGFjZS9FdGhlcmV1bVdvcmtzcGFjZS9raWNrc3RhcnQifQ==