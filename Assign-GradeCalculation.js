function gradeCalculation(score)
    {
switch(true)
{
 case (score <=100 && score >=91):     //Return the corresponding grade.
        console.log("The Grade is A");
             
        break;

    case (score <=90 && score >=81):
        console.log("The Grade is B");
             
        break;

    case (score <=80 && score >=71):
        console.log("The Grade is c");
             
        break;

    case (score <=70 && score >=61):
        console.log("The Grade is D");
             
        break;

    default:
        console.log("The Grade is F");
        break;
}
}
gradeCalculation(70) //Call the function and print the result.
gradeCalculation(40)