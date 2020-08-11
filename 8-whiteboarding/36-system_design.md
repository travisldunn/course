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

# 001 - Consistency

### Notes before you begin

This problem can potentially take a variety of directions. That is the nature of
system design questions. Even if the interviewee's path doesn't match the
prescribed solution precisely, it can still be a possible solution.

Listen!! Does it work towards achieving the overall goal? Have a conversation
whenever new ideas are put forth.

### Prompt

You have a sharded database across three servers with a replication factor of 2.
You have a lot of requests coming in -- some are reads and some are writes
(50/50) to different servers. How do you ensure that all the servers are going
to give you back the same information?

### Details - Understanding User Constraints and Rough Estimations  
- Consistency - Multiple reads for the same data should receive the same data.
- We're looking to create a system that ensures that all reads of the data will
be consistent. That is the goal of this session. If the interviewee is not
aligned with this goal, redirect as necessary.
- If the interviewee does not identify this as the goal of the system, ask the question "What do you see as the goal of this system?"
- System currently consists of 360 GB of data sharded across three servers.
(120 GB per server) With a replication factor of 2, this system takes up a total
of 3 servers. Data is organized as follows (asterisks refer to a replicated
database residing on the same server as another portion of the database):
  - Server 1 - Database 1 (120 GB) and Database 2* (120 GB)
  - Server 2 - Database 2 (120 GB) and Database 3* (120 GB)
  - Server 3 - Database 3 (120 GB) and Database 1* (120 GB)
- Data being read/written averages around 1 kb per request
- This system will receive about 10,000 requests per second
- Type of data, number of users, potential growth of system, and data model is
irrelevant.
- Don't mention it unless asked, but interviewee may assume that data being
written is valid.


### Discussion 

#### Industry Examples

- Offer this only if asked:
  - Facebook Messenger (messages being sent and received)
  - Snapchat (snaps being sent and received)

#### How could it fail?

- Consult diagram below
- The write operation and two read operations all involve the same set of data
- When a write occurs to the top application server, it will occur on primary
database 2 on server 2. Upon storage in primary database 2, the data will be
sent to secondary database 2.
- In the meantime though, two read requests can come in to the different
servers. The load balancer could potentially distribute one read request to
primary database 2 and the other read request to secondary database 2 (which
does not have same data).
- Two different sets of data (or lack of data) will be sent back to the
application servers. Inconsistency has occurred.

![Diagram of Inconsistency](http://res.cloudinary.com/outco-io/image/upload/b_rgb:ffffff/v1524087902/system_design_inconsistent.png)

### Diagram Out Prevailing Option  


#### Solution 
There are two application servers. They'll both be accepting read and write
operations. (You can imagine that there could be multiple instances of these
application servers) Each server will have queues that store these requests.

There is an additional server which caches the IDs and data of each write request
that comes in. These IDs will be deleted upon receiving notification that the
data has been stored across the primary sharded database. We shall refer to this
server as the "cache".

In order to handle the replication factor of 2, every write to the primary
sharded database will have the same data being sent to the secondary database as
well.

Write operation:
1. Write request comes in to application server.
2. Request is then stored in application server queue.
3. Upon reaching the front of the queue, data within request is sent over to be
stored in the cache. It will be identified in the cache by its ID.
4. Then, the data's ID is consistently hashed and data is stored initially in
the primary database server shard.
5. Upon successful storage in the primary database server shard, this database
server will then send the data in a write request to the secondary server shard.
6. Upon the application server receiving notification of successful storage from
the secondary server shard, the application server will send a request to the
cache; indicating that it is safe to delete the relevant data from its cache.

Read operation:
1. Read request comes in to application server.
2. Request is stored in application server queue.
3. Upon reaching the front of the queue, ID of request is sent over to the cache
to check if it exists. If it does, the relevant data is sent back to the
application server, and then the data is sent back to the client (or whatever
origin requested it), and no further action occurs.
4. Otherwise, data's ID is consistently hashed and the appropriate database
server shard is accessed for the data.
  - A load balancer will exist for the task of deciding which server (primary or
    secondary) to send the request to. It will send the request to the server
    encountering fewer requests.
5. Once the relevant data has been sent back to the application server, it is
sent back to the origin for the read request.

#### Diagram of Design

![Diagram of System Design](http://res.cloudinary.com/outco-io/image/upload/b_rgb:ffffff/v1524087568/system_design_consistency.png)
