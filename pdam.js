// Regular expression from W3C HTML5.2 input specification:
// https://www.w3.org/TR/html/sec-forms.html#email-state-typeemail

new Vue({
  // root node
  el: "#app",
  // the instance state
  data: function() {
    return {
      jenis:"0",
      jumlah:0,         
    };
  },

  methods: {

    m3(jenis,jumlah) {
        var beban = [20000, 25000, 25000, 30000];
        var b1 = [3500, 3500, 3600, 3700];
        var b2 = [5000, 5200, 5400, 5500];
        var b3 = [5000, 5400, 5600, 5700];
        var b4 = [5300, 5600, 5900, 6000];
        var admin = 2500;
        var pajak=0.1;
        var bersih;

        bersih = (this.jumlah - admin)/(1+pajak) - beban[jenis];

        if (bersih < 10*b1[jenis]) {
          return (bersih/b1[jenis]).toFixed(0)
        }
        else if (bersih < (10*b1[jenis]+10*b2[jenis])) {
          return (10 + (bersih-10*b1[jenis])/b2[jenis]).toFixed(0)
        }
        else if (bersih < (10*b1[jenis]+10*b2[jenis]+10*b3[jenis])) {
          return (20 + (bersih - 10*b1[jenis]-10*b2[jenis])/b3[jenis]).toFixed(0)
        }
        else return (30+(bersih - 10*b1[jenis]-10*b2[jenis]-10*b3[jenis])/b4[jenis]).toFixed(0)
    },

  },

  computed: {

      kubik: function() {
        if (this.m3(this.jenis,this.jumlah)>0) {
          return this.m3(this.jenis,this.jumlah)
      } else {
        return 0
      }
    }
  },
    
});
