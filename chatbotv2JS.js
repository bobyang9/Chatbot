var area = document.getElementById("area");
var areavalue = "";

area.addEventListener("keypress", function(e)
{
    if(e.which == 13)
    {
        areavalue = area.value.trim();
        console.log(area.value.trim());
        var p = document.createElement("paragraph");  
        var t = document.createTextNode(area.value.trim());
        p.appendChild(t); 
        document.getElementById("chatlog").appendChild(p);
        clearContents(area);
        replyAI();
        updateScrollPosition();
    }
});

function clearContents(element) {
    element.value = '';
}

function replyAI()
{
    console.log("responding");
    var responseArray = generateAIReply(areavalue);
    for (var i = 0; i < responseArray.length; i++) { 
        var p = document.createElement("AIresponse");  
        var t = document.createTextNode(responseArray[i]);
        p.appendChild(t);
        document.getElementById("chatlog").appendChild(p);
    }
    
}

function parseInput(input)
{
    var removePunctuation = input.replace(/[.,!@|<>?#$%^&*()_+-=]/g,"");
    var inputArray = removePunctuation.split(" ");
    console.log(inputArray.toString());
    return inputArray;
}

function adjacentIncludes(inputArray, dictionary, dictionaryIndexes)
{
    for(var i = 0; i < inputArray.length-dictionaryIndexes.length+1; i++)
    {
        var matches = true;
        for(var j = 0; j < dictionaryIndexes.length; j++)
        {
            if(inputArray[i+j] != dictionary[dictionaryIndexes[j]])
            {
                matches = false;
            }
        }
        if(matches === true)
        {
            return true;
        }
    }
    return false;
}

function generateAIReply(input)
{
    input = input.toLowerCase();
    var responseArray = [];
    var inputArray = parseInput(input);
    var dictionary = createDictionary();
    if(adjacentIncludes(inputArray, dictionary, [12, 13]))
    {
        var today = new Date();
        console.log("today's string" + today.toString());
        responseArray.push("Today's date is: " + today.toString());
    }
    if(adjacentIncludes(inputArray, dictionary, [5, 6, 7]))
    {
        var responded = false;
        if(adjacentIncludes(inputArray, dictionary, [11]))
        {
            responseArray.push("My favorite food is electricity -- tastes just like burnt cheese. How about you?");
            responded = true;
        }
        if(adjacentIncludes(inputArray, dictionary, [9]))
        {
            responseArray.push("My favorite color is light yellow (#e5e5d4) -- that's the color of my chat bubbles!");
            responded = true;
        }
        if(adjacentIncludes(inputArray, dictionary, [10]))
        {
            responseArray.push("My favorite city is San Jose -- where I was born!");
            responded = true;
        }
        if(adjacentIncludes(inputArray, dictionary, [8]))
        {
            responseArray.push("My favorite activity is coding. Every time I reply to you, I add a new HTML tag to this webpage.");
            responded = true;
        }
        if(responded === false){
            responseArray.push("You");
        }
    }
    if(adjacentIncludes(inputArray, dictionary, [4]))
    {
        responseArray.push("That's great!");
    }
    if(adjacentIncludes(inputArray, dictionary, [0]) || adjacentIncludes(inputArray, dictionary, [1]) || adjacentIncludes(inputArray, dictionary, [2]) )
    {
        var rand = Math.floor((Math.random() * 4) + 1);
        if(rand == 1)
        {
            responseArray.push("Hey!");
        }
        else if(rand == 2)
        {
            responseArray.push("Howdy!");
        }
        else if(rand == 3)
        {
            responseArray.push("Hey!");
            responseArray.push("How are you today?");
        }
        else
        {
            responseArray.push("Yo!");
        }
    }
    if(adjacentIncludes(inputArray, dictionary, [3]) )
    {
        responseArray.push("See ya!");
    }
    if(responseArray.length === 0)
    {
        responseArray.push("Haha");
    }
    return responseArray;
}

function createDictionary(){
    var dictionary = ["hello", "hi", "hey", 
                      "bye", "good", "what's", 
                      "your", "favorite", "activity",
                      "color", "city", "food",
                     "today's", "date"];
    return dictionary;
}

function addEmoticon(id)
{
    document.getElementById("area").value = document.getElementById("area").value + document.getElementById(id).innerHTML;
}

function updateScrollPosition(){
    var e = document.getElementById("chatlog");
e.scrollTop = e.scrollHeight;
}
