const arr=[1,2,3,"Niket",1879,"PW","Sigma2.0"];

for (let i=arr[0];i<=arr.length;i++){
    if(typeof arr[i]==="string"){
        console.log("Found The First String:"+arr[i]);
        break
    }
}