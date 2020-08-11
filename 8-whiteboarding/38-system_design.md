# Tell Me About Yourself

Should take one minute; minute and a half at most

##### Prompt

Say: "Tell me about yourself"

##### Do you hear these things?

1. Who the interviewee is (interviewee's one liner)

2. How the interviewee became who they are (short statement about why they became a software engineer with a specific story)

3. Their Pitch (why this company). This has 2 sub-parts and includes:

  - Why they are qualified - Did they share a couple
  **specific** highlights about their applicable expertise

  - Why this company - Did they share **specific** reasons
  why they are interested in the company/position
  (showcasing aligned values/mission) and how they plan to
  add value to the team, product, service, mission, etc

# 003 - Speed

### Notes before you begin

This problem can potentially take a variety of directions. That is the nature of
system design questions. Even if the interviewee's path doesn't match the
prescribed solution precisely, it can still be a possible solution.

Listen!! Does it work towards achieving the overall goal? Have a conversation
whenever new ideas are put forth.

### Prompt:

You have an application with an API server and a database. You have a current
user base of 10,000 people. You can expect a large increase in the number of
requests to your API in the coming months. You want to maintain an API server
response latency of 50 ms or less. How do you handle an increase in the number
of requests to your server while maintaining quick server speed?

### Details - Understanding User Constraints and Rough Estimations  

- Read/write ratio to database is irrelevant.
- Expect an increase of 1 million+ users to application  
- The API currently receives about 1,000 requests per second. The throughput for
  the API is 20,000 requests per second.
- Database has 500 GiB of space.
- We're not looking to horizontally/vertically scale the database. Assume there
  is enough space to handle the increase in user base size.
- We don't care too much about viral data, but there will be information/views
  that all users have access to.
- We are optimizing for availability and speed.
- Assume that the user base is spread throughout the North American continent.
  Headquarters are in SF.

### Discussion 

#### Industry Examples

- Offer this only if asked
  - Online game where a user must sign in to re-trace game history.
  - Online bank account, where user is accessing private information.

#### How could it fail?

- With a single server handling an increased number of requests, we can expect
  the server speed to slow down. We can even expect the server to crash and
  requests to return server errors due to server overload.
  - Since we are optimizing for availability and speed, we can add additional
  servers, and additional replications of the database located in geographic
  hotspots.
  - To handle frequently loaded web pages/web content we can utilize a CDN to
    load that data.

### Diagram out Prevailing Solution 

### Solution

- With information provided, we can expect to have at least 3 additional servers
  to balance the load of API requests.
- The servers should be distributed based on popular geographical locations, and
  so should database server replications.
- There will be load balancers that decide which server should handle a
  particular request based on availability.
- There are web pages/web content frequently accessed by users. We can use a CDN
  (Content Delivery Network) to load web pages quickly on the client.   

### Diagram of Design  

![Diagram of System Design](http://res.cloudinary.com/outco-io/image/upload/b_rgb:ffffff/v1524090984/Paper.System_design.5.png)
