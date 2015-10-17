function getCurrentDate() {
  var currentdate = new Date();
  var datetime = "Last Sync: " + currentdate.getDate() + "/"
    + (currentdate.getMonth() + 1) + "/"
    + currentdate.getFullYear() + " @ "
    + currentdate.getHours() + ":"
    + currentdate.getMinutes() + ":"
    + currentdate.getSeconds();

  return datetime;
}

function done() {}

function updateLastSync(value) {
  document.getElementById("last_sync").innerText = value;
}

function updateBalance(value) {
  document.getElementById("balance").innerText = "R$ " + value.replace(/[^0-9.,]/gm, "");
}

function updateInfo(balance) {
  lastSync = getCurrentDate();
  updateBalance(balance);
  updateLastSync(lastSync);
}

function outputError(error) {
  updateLastSync(error);
}

var path = "$PATH:/usr/local/bin:~/.rbenv/shims";
var cmd = "bundle exec ruby bin/crawler.rb";
var lastSync = null;

function lastSyncToday() {
  var today = new Date();
  if(lastSync == null) {
    return false;
  }
  if(lastSync.setHours(0, 0, 0) == today.setHours(0, 0, 0)) {
    return true;
  }
  return false;
}

function sync() {
  if(lastSyncToday()) {
    return;
  }

  if(cmdEx) {
    cmdEx.cancel();
  }
  updateLastSync("syncing");
  cmdEx = widget.system('PATH="' + path + '" ' + cmd, function() {});
  cmdEx.onreadoutput = updateInfo;
  cmdEx.onreaderror = outputError;
}

var cmdEx = null;

function start() {
  if(window.widget) {
    setInterval(function() {
      sync();
    }, 1000 * 60 * 60);
    sync();
  }
}
