# Interview Answers

Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. Add your answers to the questions within `interview_answers.md` file. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. Explain what a token is used for.

- A token in used for Authentication. A token is a unique identifier that is held by the server and given to the client when a user has been authenticated. Once the client has a valid token, it can be sent to the server through the request headers so the server can authorize the user. The token is used so the user doesn't have to keep logging in and authenticating themselves.

2. What steps can you take in your web apps to keep your data secure?

- We can require a token to access protected Routes. We can also sanitize out inputs so only valid data makes it to our backend. On top of that we can use https to encrypt traffic going back and forth to/from the client and server. And when we are handling user passwords we can be sure to hash/salt the passwords and not store them in plain text.

3. Describe how web servers work.

- Web servers sit around listening for a request. When they get a request they make sure its a valid request and if it is it will send the appropriate response.

4. Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.

- C: Create - POST
- R: READ - GET
- U: UPDATE - PUT
- D: DELETE - DELETE
