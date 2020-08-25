//Set messages to empy array
let messages = [];
//Give id a value; id is the standard name when settting up a server 👌
let id = 0;

//Every node/express needs module.exports
module.exports = {
  //Create
  create: (req, res) => {
    const { text, time } = req.body;
    messages.push({ id, text, time });
    id++;
    res.status(200).send(messages);
  },
  //Read
  read: (req, res) => {
    res.status(200).send(messages);
  },
  //Update
  update: (req, res) => {
    const { text } = req.body;
    const updateID = req.params.id;
    //Use findIndex to were the message is
    const messageIndex = messages.findIndex(
      (message) => message.id == updateID
    );
    //Set the message to the messageIndex value
    let message = messages[messageIndex];

    messages[messageIndex] = {
      id: message.id,
      //Review || operator
      text: text || message.text,
      time: message.time,
    };

    res.status(200).send(messages);
  },
  //Delete
  delete: (req, res) => {
    //Review req.params
    const deleteID = req.params.id;
    messageIndex = messages.findIndex((message) => message.id == deleteID);
    //Splice to find WHERE to delete
    messages.splice(messageIndex, 1);
    res.status(200).send(messages);
  },
};
