function check()
{
var score=0;
var correct_answerQ1=document.getElementById("q1-a3");
if(correct_answerQ1.checked==true)
{
score++;
alert("Question 1 answer is true")
}
else
{
    alert("Question 1 answer is wrong")
}
var correct_answerQ2=document.getElementById("q2-a4");
if(correct_answerQ2.checked==true)
{
score++;
alert("Question 2 answer is true")
}
else
{
    alert("Question 2 answer is wrong")
}
var correct_answerQ3=document.getElementById("q3-a1");
if(correct_answerQ3.checked==true)
{
score++;
alert("Question 3 answer is true")
}
else
{
    alert("Question 3 answer is wrong")
}
var correct_answerQ4=document.getElementById("q4-a2");
if(correct_answerQ4.checked==true)
{
score++;
alert("Question 4 answer is true")
}
else
{
    alert("Question 4 answer is wrong")
}
var correct_answerQ5=document.getElementById("q5-a3");
if(correct_answerQ5.checked==true)
{
score++;
alert("Question 5 answer is true")
}
else
{
    alert("Question 5 answer is wrong")
}
alert("Your score is "+score + " out of 5. Your percentage is " +((score/5)*100) +"%")
}