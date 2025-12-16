function startTime() {
  const today = new Date();
  
  // Convert to GMT-6
  const offset = -6;
  const utc = today.getTime() + (today.getTimezoneOffset() * 60000);
  const gmt6Time = new Date(utc + (3600000 * offset));
  
  let h = gmt6Time.getHours();
  let m = gmt6Time.getMinutes();
  let s = gmt6Time.getSeconds();
  
  // Convert to 12-hour format
  const ampm = h >= 12 ? 'pm' : 'am';
  h = h % 12;
  h = h ? h : 12; // 0 should be 12
  
  m = checkTime(m);
  s = checkTime(s);
  
  document.getElementById('txt').innerHTML = h + ":" + m + ":" + s + " " + ampm + " gmt-6";
  setTimeout(startTime, 1000);
}

function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}