//STANDARD FORMAT FOR EVERY INDEX.JS IN EXPRESS!!!!
const express = require("express");
const mc = require("./controllers/messages_controller");
//ALWAYS
const app = express();
//ALWAYS
app.use(express.json());
app.use(express.static(__dirname + "/../public/build"));
//ALWAYS
const messagesBaseUrl = "/api/messages";
app.post(messagesBaseUrl, mc.create);
app.get(messagesBaseUrl, mc.read);
app.put(`${messagesBaseUrl}/:id`, mc.update);
app.delete(`${messagesBaseUrl}/:id`, mc.delete);

const port = 3001;
//ALWAYS
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
