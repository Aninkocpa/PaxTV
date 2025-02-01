show_8870098().then(() => {
    // You need to add your user reward function here, which will be executed after the user watches the ad.
    // For more details, please refer to the detailed instructions.
    alert('You have seen ad ad!');
})

window.addEventListener("DOMContentLoaded", 
function countdown() {
  if (window.location.hash){
function countdown() {
if ( typeof countdown.counter == 'undefined' ) {
countdown.counter = 10; // change to required time
}
if(countdown.counter >= 0) {
document.getElementById('time').style.display = 'block';
document.getElementById('count').innerHTML = countdown.counter--;
setTimeout(countdown, 1000);
}
else {
document.getElementById('button').style.display = 'block';
document.getElementById('Tcount').style.display = 'none';
}
}
countdown();
  }
  else {
    document.getElementById('time').style.display = 'none';
  }
});

function myStart() {
  if (window.location.hash){
      var sites = [
        './jan_2024/most_anticipated_new_returning_k-drama_2024_2.html',
        './jan_2024/most_anticipated_new_returning_k-drama_2024.html',
        './jan_2024/clickbait_ltns_long_time_no_sex.html'
    ];
        var site = sites[Math.floor(Math.random()*sites.length)];
        var next = site;    
    var start = window.location.hash
    let link = next+start
  window.open(link,'_self');
};
}

