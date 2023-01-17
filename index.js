let mas = [6,1,7,3,5,8,0,-1,3,2,4,5];

function binSearch(mas, item)
{
    let start = 0;
    let finish = mas.lenght;
    let middle;
    let found = false;
    let position = -1;

    while (found === false && start <= finish)
    {
        middle = Math.floor(start + finish)/2;
        if (mas[middle] === item)
        {
            found = true;
            position = middle;
            return position;
        }
        if (item < mas[middle])
        {
             finish = middle - 1;
        }
        else
        {
            start = middle + 1;
        }
    }
    return position;   
}

console.log(binSearch(mas, 0));