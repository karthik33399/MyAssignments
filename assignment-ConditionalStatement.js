function launchBrowser(browserName)
{

    if(browserName==="Chrome")
    {
        console.log("Chrome");
    }
    else{
        console.log("Edge");
    }
}

function runTests(testType)
{
switch(testType)
    {
        case "smoke":
            console.log("Smoke");
            break;
        case "sanity":
            console.log("Sanity");
            break;
         case "regression":
            console.log("Regression");
            break;
        default:
        console.log("Run Smoke");
        
            
    }

}
launchBrowser("");
runTests();