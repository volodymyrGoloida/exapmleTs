import { Server } from './server/interface'
import {createServer} from "./server";

require('dotenv').config()

const PORT = process.env.PORT || 4555;

const app: Server = createServer()

app.server && app.server.listen(PORT, () => {
    app.logger?.info(`App is running on port ${PORT}`);
})
