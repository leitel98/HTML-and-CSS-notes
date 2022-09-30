function iterate (arg1) {
    for (i = 0; i < arg1.length; i++) {
        console.log(arg1[i]);
    }
}

const nums = [1, 2, 3, 4, 5]//tiene un .length de 5
console.log(nums[0]);//length-1 para acceder al ultimo elemento, parten desde el 0
const names = ['pedro', 'juan', 'felipe']
iterate(nums)
iterate(names)