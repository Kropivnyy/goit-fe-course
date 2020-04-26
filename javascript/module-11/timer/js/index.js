function getTimeRemaining(endtime) {
  const time = endtime - new Date();
  const days = Math.floor(time / (1000 * 60 * 60 * 24));
  const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  const secs = Math.floor((time % (1000 * 60)) / 1000);
  return {
    total: time,
    days: days,
    hours: hours,
    mins: mins,
    secs: secs,
  };
}
function createClock(clock, endtime) {
  const idRef = document.querySelector(clock);
  const daysRef = idRef.querySelector('[data-value="days"]');
  const hoursRef = idRef.querySelector('[data-value="hours"]');
  const minsRef = idRef.querySelector('[data-value="mins"]');
  const secsRef = idRef.querySelector('[data-value="secs"]');

  function updateTime() {
    const t = getTimeRemaining(endtime);
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
  const timerId = setInterval(updateTime, 1000);
}

class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
  }
}

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date(2020, 4, 11, 23, 59, 59),
});
createClock(timer.selector, timer.targetDate);
