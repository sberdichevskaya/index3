
let mas = [6,1,7,3,5,8,0,-1,3,2,4,5];
let item = 0;

function selectionSort(mas)
{
    for (let i = 0; i < mas.length; i++)
    {
        let indexMin = i;
        for (let j = i+1; j < mas.length; j++)
        {
            if(mas[j] < mas[indexMin])
            {
                indexMin = j;
            }
            //console.log('цикл 2')
        }
        let temp = mas[i];
        mas[i] = mas[indexMin];
        mas[indexMin] = temp;
        //console.log('цикл 1')
        console.log(mas)
    }
    //console.log('вывод 1')
    return mas;
}

let masSort = selectionSort(mas);
console.log(selectionSort(masSort));

function binSearch(masSort, item)
{
    let start = 0;
    let finish = mas.length;
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
    //console.log('вывод 2')
    return position;   
}

console.log(binSearch(masSort, item));