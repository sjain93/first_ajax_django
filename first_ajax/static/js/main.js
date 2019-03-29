document.addEventListener("DOMContentLoaded", function() {

  const button1 = document.querySelector('.button1');

  button1.addEventListener('click', function(){
    axios.get('http://intro-ajax-api.herokuapp.com/');
  });


  const button2 = document.querySelector('.button2');
  const section2 = document.querySelector('.second_part');

  button2.addEventListener('click', function(){
    axios.get('http://intro-ajax-api.herokuapp.com/pong')
          .then(function(r){
            console.log(r.data);
            let para = document.createElement('p');
            para.innerText= r.data;
            section2.appendChild(para);
          })
          .catch(function (err){
            console.log("Error", err);
            let para = document.createElement('p');
            para.innerText = "Sorry, will try better";
            section2.appendChild(para);
          })
          .then(function (r){
            console.log("Hey the request finsihed");
          });

        });
  const button3 = document.querySelector('.button3');
  const section3 = document.querySelector('.step_seven');

  button3.addEventListener('click', function(){
    console.log("Button was clicked");
    axios.get('http://intro-ajax-api.herokuapp.com/count', {
        params: {amount: 3}}) //Adds 3 requests instead of 1
          .then(function (response){
            console.log("Total visits", response);
            let para2 = document.createElement('p');
            para2.innerText = response.data;
            section3.appendChild(para2);
          });
  });

  const timeButton = document.querySelector('.timeBut');
  const section4 = document.querySelector('.step_eight');

  timeButton.addEventListener('click', function(){
    console.log("Button was clicked!");
    axios.get('http://intro-ajax-api.herokuapp.com/time', {
        params: {timezone: 'Asia/Kolkata'}})
          .then(function (response){
            console.log("Time retrieved", response);
            let para3 = document.createElement('p');
            para3.innerText = response.data;
            section4.appendChild(para3);
          });
  });

  const carButton = document.querySelector('.aCar');
  const section5 = document.querySelector('.step_nine');

  carButton.addEventListener('click', function(){
    axios.get('http://intro-ajax-api.herokuapp.com/a_car')
          .then(function (response){
            console.log(response.data);
            let list1 = document.createElement('ul');
            list1.setAttribute("id", "random_car");
            list1.innerHTML = response.data;
            document.body.appendChild(list1); //required for html append
          });
  });
});
