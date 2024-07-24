
import { app } from "./app.js";
import connectDb from "./db/index.js";



// connect db
connectDb()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`server is running`)
    })
  })
  .catch((err) => {
    console.log(`db connecttion failed ${err}`)
  })