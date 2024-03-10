// const redirects =
//   [
//     {from: '/test/detail', to: '/paper'},
//   ]

// module.exports = function (req, res, next) {
//   const host = req.headers.host;
//   const fullUrl = req.url;
//   var url = `/${req.url.split('/')[1]}/${req.url.split('/')[2]}`;

//   console.log("url"+url);

//   //tmp
//   var first_param=url;
//   console.warn("hi"+url);

//   if (url == 'test/detial')
//     url = `/${req.url.split('/')[1]}/${req.url.split('/')[2]}`


//   var param = "";

//   const redirect = redirects.find(r => r.from === url)
//   console.log("Redirect: "+redirect);
//   if (redirect) {
//     param = `/${req.url.split('/')[2].split('-')[1]}`;
//     var newLocation;
//     if (param) {
//       newLocation = redirect.to + param;
//     } else {
//       newLocation = redirect.to;
//     }
//     res.writeHead(301, {
//       Location: newLocation
//     });
//     res.end()
//   } else {
//     next()
//   }


// }
