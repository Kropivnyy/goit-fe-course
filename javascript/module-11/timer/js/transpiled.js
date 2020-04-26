"use strict";

function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return !!right[Symbol.hasInstance](left); } else { return left instanceof right; } }

function _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function getTimeRemaining(endtime) {
  var time = endtime - new Date();
  var days = Math.floor(time / (1000 * 60 * 60 * 24));
  var hours = Math.floor(time % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
  var mins = Math.floor(time % (1000 * 60 * 60) / (1000 * 60));
  var secs = Math.floor(time % (1000 * 60) / 1000);
  return {
    total: time,
    days: days,
    hours: hours,
    mins: mins,
    secs: secs
  };
}

function createClock(clock, endtime) {
  var idRef = document.querySelector(clock);
  var daysRef = idRef.querySelector('[data-value="days"]');
  var hoursRef = idRef.querySelector('[data-value="hours"]');
  var minsRef = idRef.querySelector('[data-value="mins"]');
  var secsRef = idRef.querySelector('[data-value="secs"]');

  function updateTime() {
    var t = getTimeRemaining(endtime);

    if (/\S\S+/.test(t.days.toString())) {
      daysRef.textContent = t.days;
    } else {
      daysRef.textContent = '0' + t.days;
    }

    hoursRef.textContent = ('0' + t.hours).slice(-2);
    minsRef.textContent = ('0' + t.mins).slice(-2);
    secsRef.textContent = ('0' + t.secs).slice(-2);

    if (t.total <= 0) {
      clearInterval(timerId);
      daysRef.textContent = '00';
      hoursRef.textContent = '00';
      minsRef.textContent = '00';
      secsRef.textContent = '00';
    }
  }

  updateTime();
  var timerId = setInterval(updateTime, 1000);
}

var CountdownTimer = function CountdownTimer(_ref) {
  var selector = _ref.selector,
      targetDate = _ref.targetDate;

  _classCallCheck(this, CountdownTimer);

  this.selector = selector;
  this.targetDate = targetDate;
};

var timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date(2020, 4, 11, 23, 59, 59)
});
createClock(timer.selector, timer.targetDate);