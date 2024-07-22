const { default: mongoose } = require("mongoose");

const connectToDB = async () => {

  const connectionUrl =
    "mongodb+srv://sudarshanbhalbar:wy9mLknYLehiyO3e@jobportal-nextjs.8kroixj.mongodb.net/test?retryWrites=true&w=majority&appName=JobPortal-NextJs";

  mongoose
    .connect(connectionUrl)
    .then(() => console.log("Job Portal database Connection succesfull"))
    .catch((error) => console.log(error));
};


export default connectToDB;