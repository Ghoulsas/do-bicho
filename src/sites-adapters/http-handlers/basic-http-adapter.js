class BasicHttpHandler {
   _option = {
        timeout: 5000,
        noRetry :true,
        resolveBodyOnly: true,
        responseType: 'buffer'
   }

}

module.exports = BasicHttpHandler;