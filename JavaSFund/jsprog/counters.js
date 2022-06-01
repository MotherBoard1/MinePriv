(function()
{
    //define a counter class
    var counter = {}

    counter.__init__ = function(name)
    {
        this.name = name;
        this.count = 0;
    }

    counter.onclick = function(event)
    {
        this.count++

    }

    counter.html = function()
    {
        return this.name + ' ' + this.count;
    }

    Counter = SimpleClass(counter);

    
})