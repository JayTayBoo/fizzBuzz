// your code here
$(function main(){
$('#number-chooser').submit( event => {
  event.preventDefault();
  $(".js-results").empty();
  let num = $('#number-choice').val();
  let results = [];
  for(let i = 1; i <= num; i++){
    let defaultTemp = `<div class="fizz-buzz-item"> <span> ${i} </span> </div>`
    let fizz = `<div class="fizz-buzz-item fizz"> <span> fizz </span> </div>`
    let buzz = `<div class="fizz-buzz-item buzz"> <span> buzz </span> </div>`
    let fizzbuzz = `<div class="fizz-buzz-item fizzbuzz"> <span> fizzbuzz </span> </div>`

    if (i % 3 === 0 && i % 5 === 0){
      results.push($(fizzbuzz))
    }
    else if (i % 3 !== 0 && i % 5 === 0){
      results.push($(buzz))
    }
    else if (i % 3 === 0 && i % 5 !== 0){
      results.push($(fizz))
    }
    else if (i % 3 !== 0 || i % 5 !== 0){
      results.push($(defaultTemp))
    }
  } 
  $('.js-results').append(results)
})
})