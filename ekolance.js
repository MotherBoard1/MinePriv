

/*const fruits = ['apple', 'green', 'carrot', 'tomato', 'banana']
const size = 3
const items = fruits.slice(0, size)

console.log(items);*/

const S = "micheal ryan, augusta nichole, opemipo anu, shika anjush, david jones, paul risquah, nada namin, morbius firestarter"
const fer = S.split(',')
let stuff = []

stuff = stuff.concat(fer)

var n = 3

/*for (var i = 0; i < n; i++)
{ 
    
    //stuff = stuff.concat(fer)
    var man = stuff.slice(i*n, (i+1)*n)
    console.log(man);

}

//console.log(stuff);
//stuff.slice(3, 6)

//console.log(stuff.slice(3, 6));

var a = parseInt(Math.random()) * 10
var b = parseInt(Math.random()) * 10

console.log(a, b);

const random = Math.floor(Math.random() * stuff.length)

console.log(random);


for (var i = 0; i < Math.round(stuff.length/n); i++)
{var man = []
    for (var j = 0; j < n; j++)
    {
        
        const random = Math.floor(Math.random() * stuff.length)
        man.push(stuff[random])

        if(man.length == n)
        {
            for(var d = 0; d < man.length; d++)
            {
                if(man[d] == man[d+1])
                {
                    man.pop(d, d+1)
                }
                else
                { 
                   console.log("group " + i + " = " + man)
                   man = []
                }
            }             
        }
    }
    //stuff = stuff.concat(fer)
    //var man = stuff.slice(i*n, (i+1)*n)
    //console.log(man);

}
*/

var random = [] //1 to 10 exclusive
random.length = 10
var array1 = [] //other array numbbers will be translated to
array1.length = 10

for(var x = 0; x <random.length; x++)
{
    random[x] = x //stores actual value
    var rand //declaration - later inst
}
for(var x = 0; x <random.length; x++)
   {
    rand = Math.floor(Math.random() * 10)
    while(random[rand] == -1)
    {
        rand = Math.floor(Math.random() * 10) //forces to pick another value if random[rand] is occupied
    }
    if(random[rand] != -1)
    {
        array1[x] = random[rand] //storing it if not occupied
        random[rand] = -1 //reset so no other value can acces this
    }
}

for(var x = 0; x < 3; x++)
{
    //array1[x] = array1[x] + 1
    console.log(" ")
    
    for(var x = 0; x < array1.length; x++)
    {
        console.log(array1[x]) //prints it ou accordingly
    }
}



