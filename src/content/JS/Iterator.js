class Iterator extends mosyrejs2.RClay {
    constructor(agr){
        super(agr)        
        this.agreement.sensorPoints = ["SPEC"]
    }

    onResponse(){
        let center = this.center;
        let {seed,n,fx} = center.SPEC;        
        let data =[seed];        
        for(let i = 0;i<n;i++){
            seed = fx(seed)
            data.push(seed)
        }

        center.OUT = data;
    }
}