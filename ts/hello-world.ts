{
    let hw = "Hello Typescript world!";
    let name = "Matt"
    console.log(name, hw);
    
    const loaded = (): void => { // Good practice to mark voids void
        let hww = document.getElementById("hww");
        if(hww !== null){
            hww.innerText = `${name} ${hw}`
        }
    }

}