import { Router } from "express";
import session from "express-session";

const sessionCookieRouter = Router();

sessionCookieRouter.use(
  session({
    secret: process.env.SESSION_SECRET || "SECRET_KEY",
    resave: false,
    saveUninitialized: false,
    name: "serverSessionID",
    cookie: { maxAge: 3600000 },
  })
);

sessionCookieRouter.get("/counter", (req: any, res) => {
  if (req.session.counter) {
    req.session.counter = req.session.counter + 1;
    res.send(
      "<h1>Counter: " +
        req.session.counter +
        "\nThis is your session id: " +
        req.sessionID +
        "</h1>"
    );
  } else {
    req.session.counter = 1;
    res.send(
      "<h1>Creating Counter: 1\nThis is your session id: " + req.sessionID + "</h1>"
    );
  }
});

export default sessionCookieRouter;
