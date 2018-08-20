class IteratorChart extends mosyrejs2.RClay {
    constructor(agr) {
        super(agr)
        this.agreement.sensorPoints = ["IN", "RESET"]
        let ctx = document.getElementById(this.agreement.canvas).getContext("2d");
        this.defineAgreement("chart", new Chart(ctx, {
            type: 'scatter',
            options: {
                scales: {
                    xAxes: [{
                        type: 'linear',
                        position: 'bottom'
                    }]
                },
                animation: {
                    duration: 100
                }
            },
            data: {
                datasets: []
            }
        }))
    }
    /*
        iname:""
        data:[]        
    */

    onResponse() {
        let agr = this.agreement;
        let chart = agr.chart;
        let center = this.center;
        let s = center.IN;
        let reset = center.RESET;

        if (reset) {
            chart.data.datasets = [];
            this.setSensorPoint("RESET",false);
            this.setSensorPoint("IN",undefined);
            chart.update();
            return;
        }
        if (s) {

            let idx = chart.data.datasets.findIndex(ds => ds.label === s.iname);
            let f = null;
            idx >= 0 ? (f = chart.data.datasets[idx], f.data = s.data,f.backgroundColor = s.backgroundColor) :
                chart.data.datasets.push({
                    label: s.iname,
                    data: s.data,
                    backgroundColor:s.backgroundColor
                })

            chart.update();
        }
    }
}