/* COUNTER */

var localStorage = window.localStorage,
          startDate;
    
       if (localStorage.getItem('startDate')) {
          startDate = localStorage.getItem('startDate')
       } else {
          startDate = new Date();
          localStorage.setItem('startDate', startDate)
       }
       setTimer(startDate);
    
       function setTimer(startDate) {
          var deadline = new Date(Date.parse(startDate) + 01 * 24 * 60 * 60 * 1000);
          initializeClock('countdown', deadline);
       }
    
       // Countdown
       function getTimeRemaining(endtime) {
          var t = Date.parse(endtime) - Date.parse(new Date());
          var seconds = Math.floor((t / 1000) % 60);
          var minutes = Math.floor((t / 1000 / 60) % 60);
          var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
          return {
             'total': t,
             'hours': hours,
             'minutes': minutes,
             'seconds': seconds
          };
       }
    
       function initializeClock(id, endtime) {
          var clock = document.querySelector('.counter-wrapper');
          var hoursSpan = clock.querySelector('.hours');
          var minutesSpan = clock.querySelector('.minutes');
          var secondsSpan = clock.querySelector('.seconds');
    
          function updateClock() {
             var t = getTimeRemaining(endtime);
    
             hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
             minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
             secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
    
             if (t.total <= 0) {
                   startDate = new Date()
                   localStorage.setItem('startDate', startDate)
                   var deadline = new Date(Date.parse(startDate) + 24 * 60 * 60 * 1000);
                   initializeClock('countdown', deadline);
                   clearInterval(timeinterval);
             }
          }
    
          updateClock();
          var timeinterval = setInterval(updateClock, 1000);
       }