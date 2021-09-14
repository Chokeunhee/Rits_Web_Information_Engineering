//set the starting number as 0
let counter_count = 0;

//set a function counter_update as displaying the current counter_count number
const counter_update = () => {
    document.getElementById('counter_out').innerText = counter_count;
    };

//Up button
document.getElementById('counter_up').addEventListener('click',() => {
    counter_count++;//when up button is click add 1 to the variable counter_count
    counter_update();//update the current counter_count
    });// Up button

//Down button
document.getElementById('counter_down').addEventListener('click',() => {
    counter_count--;//when down button is click minus 1 to the variable counter_count
    counter_update()//update the current counter_count
    });// Down button

//Reset button
document.getElementById('counter_reset').addEventListener('click',() => {
    counter_count = 0; //when the reset button is click set the variable counter_count as 0
    counter_update();//update the current counter_count
    });

counter_update();