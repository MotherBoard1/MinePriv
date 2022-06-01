var twoSum = function(nums, target) 
{
    //let nums = []
    //let target
    //
    for(let a = 0; a < nums.length; a++)
        {
            for(let b = 0; b < nums.length; b++)
                {
                    if(a == b)
                        {
                            continue;
                        }
                    
                    else
                        {
                            if(nums[a] + nums[b] == target)
                                {
                                    dead = `[${a, b}]`
                                    return dead
                                }
                        }
                }
            
        }
    
};

twoSum([1,2,3,4], 7)