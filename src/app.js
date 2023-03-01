const { express, UsersRouter, TasksRouter } = require('./index')

const app = express();

app.use(express.json());
app.use(UsersRouter);
app.use(TasksRouter);

app.listen(3000, () => {
    console.log("Server is listening on 3000 port")
})


