// rest API untuk aplikasi dilink berikut = http://notesapp-v1.dicodingacademy.com/
console.log("Hello Kanzaki, let' play RESTful API! :)")
// membuat server http dengan fw hapi
const Hapi = require('@hapi/hapi')
const routes = require('./routes')

const init = async () => {
  const server = Hapi.server({
    port: 5000,
    host: 'localhost',
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  })
  server.route(routes)
  await server.start()
  console.log(`Your Server = ${server.info.uri}`)
}
init()
