<?xml version = "1.0"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<!-- Solution11.16 -->
<!-- Airline Reservation System-->
<html xmlns = "http://www.w3.org/1999/xhtml">
<head>
<title>Airline Reservation System</title>
<script type = "text/javascript">
<!--
var input;
var secondInput;
var element;
var secondElement;
var firstCount = 0;
var economyCount = 0;
var seats = [ ,0,0,0,0,0,0,0,0,0,0]; //allocate 10-element Array
function startArray()
{
for(var i=0; i<11; i++)
{
input = window.prompt("Please type 1 for First Class and Please type 2 for Economy.","0");
if (input == 1 || input == 2)
{
element = linearSearch(seats);
if(element==-1&&input==1)
{
document.writeln("The First Class is already fully
booked<br/>");
secondQuestion(seats);
}
else if (element ==-1 && input == 2)
{
document.writeln("The Economy Class is already fully
booked<br/>");
secondQuestion(seats);
}
else
boarding Pass(input);
}
//to terminate the program
else
{
window.status="Bye-bye!";
System.exit(0);
}
}
}
function linear Search(the Array)
{
if (input == 1)
{
for (var n=0; n<6 ; n++)
if (the Array [n] == 0)
return n;
}
else if (input == 2)
{
for (var n=6; n<11 ; n++)
if (the Array [n] == 0)
return n;
}
return -1;
}
function boarding Pass(the Input)
{
if (input ==1)
{
document.writeln("----------BOARDING PASS----------<br/>");
document.writeln("You are allocated in the First Class<br/>");
document.writeln("Your seat number is "+ element+"<br/>");
document.writeln("-----------------------------------------<br/>");
seats[element]= 1;
firstCount++;
}
else if (input ==2)
{
document.writeln("----------BOARDING PASS----------<br/>");
document.writeln("You are allocated in the EconomyClass<br/>"); document.writeln("Your
seat
number is "+ element +"<br/>");
document.writeln("-----------------------------------------<br/>");
seats[element]= 1;
economyCount++;
}
}
functionsecondQuestion(theArray)
{
if (input == 1)
{
for (var n=6; n<11 ;n++)
{
if (theArray [n] == 0)
{
second Input = window.prompt("Do you want to move to Economy Class?
(If YES, please press 1. If NO, please press 2)","0");
if ( second Input == 1)
{
input = 2;
element=linear Search(seats);
document.writeln("You have been allocated to Economy
Class<br/>");
boardingPass(input);
break;
}
else if (secondInput == 2)
{
document.writeln("Next flight leaves in 3 hours<br/>"); break;
}
}
}
}
else if (input == 2)
{
for (var n=0; n<6 ;n++)
{
if (theArray [n] == 0)
{
secondInput = window.prompt("Do you want to move to First Class? (If YES,
please press 1. If NO, please press 2)","0");
for (var n=0; n<6 ;n++)
{
if (theArray [n] == 0)
{
secondInput = window.prompt("Do you want to move to First Class? (If YES, please press 1. If
NO, please press 2)","0");
boarding Pass(input); break;
}
else if (secondInput == 2)
{
document.writeln("Next flight leaves in 3 hours<br/>");
break;
}
} }
}
}
//-->
</script>
</head>
<body onload = "startArray()"></body>
</html>