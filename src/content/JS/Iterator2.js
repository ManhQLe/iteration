class Iterator2 extends mosyrejs2.RClay {
    constructor(agr){
        super(agr)        
        this.agreement.sensorPoints = ["SPEC"]
    }

    onResponse(){
        let center = this.center;
        let {seed,n,fxs} = center.SPEC;        
        let data =[seed];        
        for(let i = 0;i<n;i++){
            fxs.forEach(fx => {
                seed = fx(seed)    
            });            
            data.push(seed)
        }

        center.OUT = data;
    }
}