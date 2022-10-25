
window.onload = function() {
 
    // 実行したい処理を書く
 

fetch("https://accounts.spotify.com/authorize?client_id=7abf6edbf6a9478dbd3ae9afaed92dea&response_type=code&redirect_uri=http://localhost:8888")
  .then(response => {
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.log("失敗");
    console.log(error);
});


}
