class Iterator extends RClay {
    constructor(agr){
        super(agr)        
        this.agreement.sensorPoints = ["SPEC"]
    }

    onResponse(){
        let agr = this.agreement;
        let center = this.center;
        let {seed,n,fx} = center.SPEC;        
        let data =[s];        
        for(let i = 0;i<n;i++){
            s = fx(s)
            data.push(s)
        }

        center.OUT = data;
    }
}