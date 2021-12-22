let time = document.querySelector('p');

function Clock(e) {
  this.time = e;
  this.format = false;
  this.hours;
  this.min;
  this.sec;
}

function Wrapper(e) {
	Clock.call(this, e);

  this.changeForm = function() {
    this.format = !this.format;
  }
  
  this.showTime = function () {
    let date = new Date();

    this.hours = (date.getHours() < 10) ? '0' + date.getHours() : date.getHours(); 
    this.min = (date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes();  
    this.sec = (date.getSeconds() < 10) ? '0' + date.getSeconds() : date.getSeconds();

    let formDate = this.format ? this.hours + ':' + this.min + ':' + this.sec : this.hours + ':' + this.min;  

    this.time.innerHTML = `<p>${formDate}</p>`;
  };
}

Wrapper.prototype = Object.create(Clock.prototype);

let clock= new Wrapper(time);

time.addEventListener('click', (e) => {

  if(e.target.tagName === 'P') {
    clock.changeForm();
  }

});

setInterval(() => {
    
  clock.showTime() 
}, 500);