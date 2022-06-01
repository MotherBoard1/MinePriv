var randien = function(n)
{

const names = "micheal ryan, augusta nichole, opemipo anu, shika anjush, david jones, paul risquah, nada namin, morbius firestarter"
const fer = names.split(',')
let stuff = []
stuff = stuff.concat(fer)

var n = 7

var randomar = []
randomar.length = stuff.length
var namarray = []
namarray.length = stuff.length

for(var x = 0; x <randomar.length; x++)
{
    randomar[x] = x //stores actual value
    var avg //declaration - later inst
}
for(var x = 0; x <randomar.length; x++)
   {
    avg = Math.floor(Math.random() * stuff.length)
    while(randomar[avg] == -1)
    {
        avg = Math.floor(Math.random() * stuff.length) //forces to pick another value if random[rand] is occupied
    }
    if(randomar[avg] != -1)
    {
        namarray[x] = randomar[avg] //storing it if not occupied
        randomar[avg] = -1 //reset so no other value can acces this
    }
}

var final = []
for(var x = 0; x < n; x++)
{
    //array1[x] = array1[x] + 1
   // console.log(" ")
    
    for(var x = 0; x < namarray.length; x++)
    {
        //console.log(namarray[x]) //prints it ou accordingly
        var y = namarray[x];
        final.push(stuff[y])
        var modd = stuff.length%n

        if(final.length == n)
        {
            console.log("group : " + final)
            final = []
        }
        else if(final.length == modd && (x >= ((namarray.length) - modd )))
        {
            console.log("group : " + final)
            final = []
        }
        
        
        
        
    }
}
}

var d = 3
console.log(randien(d))