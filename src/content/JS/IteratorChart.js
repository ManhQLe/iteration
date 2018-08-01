class IterChart extends RClay {
    constructor(agr) {
        super(agr)
        this.agreement.sensorPoints = ["IN", "RESET"]
        this.agreement.staged = true;
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
            center.RESET = null;
        }
        if (s) {
            let idx = chart.data.datasets.findIdex(ds => ds.label === s.iname);

            idx >= 0 ? (chart.data.datasets[idx].data = s.data) :
                chart.data.datasets.push({
                    label: s.iname,
                    data: s.data
                })

            chart.update();
        }
    }
}