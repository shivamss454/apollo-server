# What is GraphQL!
It is a Query Language for API that is created by Faceboof in 2012 which provides a common interface between client and Server for data fetching and manipulations. the client ask for various data from the server via queries. The response format is described in the Query and defined by the client instead of server they are called Client specific Queries. this makes retrieving data from the server more effecient for the Client.

# Difference Between GraphQL and REST!
the main difference is that a REST API service does not publish a “schema” of all supported operations like a GraphQL service does.

A REST API publishes “endpoints” instead. A client working with a REST API does not need a “language” to ask for resources. They just hit one of the endpoints the API supports.

On the other hand, a GraphQL service has only one endpoint. To ask for what you need from the service, you have to use the GraphQL language and structure specific queries and mutations. You can do that because of the “schema” that’s published by GraphQL services.

REST is architecture pattern and GraphQL is a query language. They are both communication interfaces, but GraphQL concept allows reducing the amount of requests to the server.

# Write down about schema and resolvers!
A GraphQL schema is at the core of any GraphQL server implementation. It describes the functionality available to the client applications that connect to it. We can use any programming language to create a GraphQL schema and build an interface around it.

The GraphQL runtime defines a generic graph-based schema to publish the capabilities of the data service it represents. Client applications can query the schema within its capabilities.

Resolver is a collection of functions that generate response for a GraphQL query. In simple terms, a resolver acts as a GraphQL query handler.

