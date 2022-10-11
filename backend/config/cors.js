const whitelist = ['https://music-tau-kohl.vercel.app', 'http://localhost:3001'] 
// ['https://schedule.alzhik.site', 'https://api.alzhik.site'] - lighsail
// ['http://schedule_decode.alzhik.site', 'http://apischedule.alzhik.site']  - digitalocean
// ['http://localhost:3000', 'http://localhost:3001'] local 
const corsOptionsDelegate = function (req, callback) {
  let corsOptions;
  if (whitelist.indexOf(req.header('Origin')) !== -1) {
    corsOptions = { origin: true } // reflect (enable) the requested origin in the CORS response
  } else {
    corsOptions = { origin: false } // disable CORS for this request
  }
  callback(null, corsOptions) // callback expects two parameters: error and options
}
 
module.exports = {
    corsOptionsDelegate
}