
var getUrl = () => {

  var urlArray = []
  var count = 0;
  for (var i = 0; i < 99; i +=) {
    setTimeOut(fetch(https://loremflickr.com/api/1/?token=286.dlOQAePbVJpTJDhRmhmwoJEXbnudpLsG&width=320&height=160/tag=home)
    .then(response => response.json())
      .then(data => {
        urlArray.push(data)
        count += 50
      }), count)
  }
  return urlArray
}