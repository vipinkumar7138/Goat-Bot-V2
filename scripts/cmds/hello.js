module.exports = {
  config: {
    name: "hello",
    version: "1.0.0",
    role: 0,
    author: "vipin",
    shortDescription: {
      en: "A simple hello command"
    },
    longDescription: {
      en: "Sends a hello message to the user"
    },
    category: "general",
    guide: {
      en: "{pn} [name]"
    },
    countDown: 5
  },

  onStart: async function ({ api, event, args }) {
    try {
      const name = args.join(" ") || "User";
      await api.sendMessage(`Hello, ${name}! This is a custom command.`, event.threadID, event.messageID);
    } catch (error) {
      console.error(error);
      await api.sendMessage("An error occurred while executing the command!", event.threadID);
    }
  }
};
