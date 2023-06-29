### IAM - Identity Access Management
Identity management, also known as identity and access management, is a framework of policies and technologies to ensure that the right users have the appropriate access to technology resources.

Here I use a simple system with 2 clients (written in [React](https://react.dev/)), a server with [Spring](https://spring.io/) and [Keycloak](https://www.keycloak.org/) on top of it to provide authentication & authorization service. 

#### How to run:
1. Start the keycloak server:

    Run this command on Linux
        
        bin/kc.sh start-dev

    Or if you're on Window:

        bin/kc.bat start-dev

    Login to the server on port ***:8080*** and create a new Realm. Sign up two clients 1 & 2 with their corresponds url (in this case is ***:5173*** & ***:5174***). Create some users and put them into the client with client roles

    For information on how to create Realms, Clients, Roles, ..., please have a look at [Keycloak official documentation](https://www.keycloak.org/documentation)

2. Run the backend server:

    You can modify the property as in ***application.yaml***.
    Start the server either with maven or just use Intelij or and Java IDE.

3. Start the clients:

    Navigate to folder client-1 & client-2. Simply run this command: 

        npm run dev

    Or if you like yarn:

        yarn dev

    Go check the ***:5173*** & ***:5174*** port and enjoy.