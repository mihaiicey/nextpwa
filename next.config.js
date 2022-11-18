/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')({
  dest: 'public',
  mode: 'production'
})

module.exports = withPWA({
  reactStrictMode: true,
  pwa:{
    dest:"public",
    register:true,
    skipWaiting:true,
    mode: 'production',
    //disable:process.env.NODE_ENV === 'development'
  }
});
