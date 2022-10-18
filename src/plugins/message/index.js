import Message from "./message";

window['$message'] = Message

Message.install = (app) => {
  app.config.globalProperties.$message = Message;
};

export default Message;
