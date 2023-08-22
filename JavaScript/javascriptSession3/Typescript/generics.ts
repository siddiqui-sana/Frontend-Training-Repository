//Type will decide on runtime
function computeLength<T>(arr: T[]) {
    console.log("Logic Here")
}

computeLength<number>([1,2,3])
computeLength<string>(["test","demo"]);
computeLength<boolean>([true]);