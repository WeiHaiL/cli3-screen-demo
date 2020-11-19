
const DEVHOSTURL = 'http://10.80.70.133:8080/szxc_jshc/' // 奎
const PROHOSTURL = '/nypt/' // build
export default {
  baseUrl: process.env.NODE_ENV === 'development' ? DEVHOSTURL : PROHOSTURL,
  // baseUrl: baseUrl,
  // version: VERSION,
  secret: 'zzsoftBase',
  token_key: 'token'
}
