// const fetch = require('node-fetch')
// const axios = require('axios')


// const api_url = `https://loremflickr.com/api/1/?token=286.dlOQAePbVJpTJDhRmhmwoJEXbnudpLsG&width=320&height=160/tag=home`

// function getImgUrl() {
//   var timeToWaitBetweenRequests = 50;
//   var locationIDforTable = 0
//   for (let i = 0; i < 99; i++) {
//     var photo = "";
//     setTimeout(async function () {
//       try {
//         const response = await axios.get(api_url)
//         // console.log(response.request._redirectable._options.href, "current value: " + i)
//         if (i % 10 === 0 && locationIDforTable < 11) {
//           locationIDforTable++;
//           console.log(locationIDforTable)
//         }
//         photo = response.request._redirectable._options.href;
//       } catch (error) {
//         console.error(error)
//       }
//     }, timeToWaitBetweenRequests += 50)

//     // db.query(`INSERT blabla INTO ${photo}`) // implement working db insert for hrefs
//   }
// }







// module.exports = getImgUrl();

