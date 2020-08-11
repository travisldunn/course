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

# 002 - Availability

### Notes before you begin

This problem can potentially take a variety of directions. That is the nature of
system design questions. Even if the interviewee's path doesn't match the
prescribed solution precisely, it can still be a possible solution.

Listen!! Does it work towards achieving the overall goal? Have a conversation
whenever new ideas are put forth.

### Prompt

Database is getting a lot of requests, how do you replicate the database server
without any downtime? Assume that you can't simply use built-in commands (such
as pg_dump on Postgres) or dynamic scaling servers on AWS.

### Details - Understanding User Constraints and Rough Estimations  

- Availability - Every request returns a response. Response may be success or
failure.
  - A system with poor availability with have requests that do not receive
    a response.
- There are 18,000 requests coming in per second.
- The throughput of the database server is 20,000 requests per second.
- Average request data overhead is 1 KB.
- The requests coming in consist of 90% reads with 10% writes
- There is a viral nature to the data. Some data is requested to be read more
  often than others
  - For the solution later, this should point towards a cache being potentially
    used.
- The database server is a solid state drive with 500 GB. There is 25% of this
space currently being used.
  - Interviewee should not be considering space as an issue.
- Main goal should be availability.
  - If interviewee is not aligned with this goal, redirect as necessary.
  - Go ahead and pause your interviewee if they're not on the path towards
    availability. Ask "What do you see as the goal of this system?"
- Type of data, number of users, potential growth of system, and data model is
  irrelevant.

### Discussion 

#### Industry Examples

- Offer this only if asked:
  - Video or image cloud storage (such as Youtube; which may actually be more like
    99% reads 1% writes).
  - Reddit

#### How could it fail?

- Consult diagram below
- Database server is receiving 21,000 requests per second, which is exceeding
  the limit of 20,000 requests per second.
  - Could be coming from a single application server or multiple application
    servers
- Why it's failing:
  - On a single-threaded system, the queue is not able to store all of the
    requests. It exceeds memory limit. And there is not even enough memory to
    process sending an error code.
  - On a multi-threaded system, each thread available on memory is already tied
    to a request. There are not even threads available to handle the task of
    sending back an error.

![Diagram of availability failure](http://res.cloudinary.com/outco-io/image/upload/b_rgb:ffffff/v1524092125/system_design_not_available.png)

### Diagram Out Prevailing Option 

#### Solution 
There is a single application server. It will accept both read and write
requests. There could be multiple application servers that accept these
requests, but this is not relevant to the solution.

There is an additional server which will be used as a cache interface. This
server will sit between the application server and database layer. We shall use
an LRU cache

On the database layer, there exists two databases. Database 1 is the original
which currently houses all of the data for this system. Database 2 is the
destination to which we want to replicate the data.

Additionally, there is a copy server. It's sole purpose is to read the contents
of database 1 and copy it over to database 2. It will be monitoring the load on
database 1.

Write operation:
1. Write request comes in from application server to cache interface.
2. Data to be written is stored in cache.
3. Data is then sent to both database 1 and 2 to be stored.

Read operation:
1. Read request comes in from application server to cache interface.
2. If data exists in cache, return it back to application server.
  - We are done with this request.
3. Otherwise, go over to database 1 to read the data; which is sent back to the
   cache interface.
4. Send a write of this data to database 2.
5. Store this data in the cache, and then send it back to the application server.
   - This will handle data that has a viral nature (is read often).

Copy operation:
1. The copy server will monitor the requests per second being sent to database 1.
2. As it decreases, the copy server will dedicate more threads to reading the
   contents of database 1, and subsequently writing that data to database 2.
3. However, as the requests per second to database 1 increases, the copy server
   will throttle back the number of threads in operation.
4. The copy server will only copy the information from when this operation starts
   - Any new writes that occur will have the information written to both
     databases, so copying of this data does not need to occur.

#### Diagram of Design

![Diagram of Available System](http://res.cloudinary.com/outco-io/image/upload/b_rgb:ffffff/v1524096249/system_design_available.png)
