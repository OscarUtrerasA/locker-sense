# LockerFront

This is a simple kiosk that is shown in the screen of the lockers, cueing the user during the proceess (ie. "Welcome", "Validating code", etc).

This connects to the [Locker.Service](https://dev.azure.com/totalpackltda/Lockers/_git/Locker.Service) via SignalR to receive `changeCurrentView` instructions. Use the `http://localhost:<Locker.Service>/frontRpc` hub to handle this connection. Currently, its CORS do not allow external hosts. 

## Installation

> [!INFO] Why is Docker not used here  
> This project interacts with an application that connects to the COM ports and requieres weird drivers, thus, it is bare metal. Adding an additional container layer would be more hassle than it is worth. Yet. 

1. Install dependencies with `npm i` (or use something like `bun install` instead[^1])
2. Run the developement server with `npm run dev` (the route functions still depends on Node.js, thus we can't use _bun_ here)
3. Open the server at [http://localhost:3000](http://localhost:3000)

You can build and serve the project with 

1. `npm run build`
2. `npm run start`

## SignalR and view changes 

Note you need a SignalR hub running at `/frontRpc` to control the views, but you can mock it without the actual _Locker.Service_ by using Postman instead (you still need the SignalR hub, you can copy the [demo project](https://learn.microsoft.com/en-us/aspnet/core/tutorials/signalr)  and change the hub name). 

In Postman: 

1. Connect WebSocket to `wss://localhost:<Locker.Service>/frontRpc`  
2. Protocol initialization sending `{"protocol":"json","version":1}` (do include the weird terminator ``). 
3. Change a view: `{"arguments":["success"],"invocationId":"0","target":"ChangeView","type":1}`. Valid values are the routes, like `success`, `validation`, `failure`, `bye`. 

[^1]: Unlike NPM, [Bun](https://bun.sh) uses a global package store, thus the common packages may already be installed and the `node_modules` is a reference folder instead of a space hog. 
