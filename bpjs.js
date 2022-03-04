// Regular expression from W3C HTML5.2 input specification:
// https://www.w3.org/TR/html/sec-forms.html#email-state-typeemail

new Vue({
  // root node
  el: "#app",
  // the instance state
  data: function() {
    return {
      pbi: 0,
      k1:0,
      k2: 0,
      k3: 0,
      jenis:0,
      upah:0
         
    };
  },
  methods: {

    thousandSeprator(amount) {
    	if (amount !== '' || amount !== undefined || amount !== 0 || amount !== '0' || amount !== null) {
        return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    } else {
        return amount;
    }
    },
    clear() {
      this.pbi=0
      this.k1=0
      this.k2=0
      this.k3=0
      this.upah=0
    }
  },
  computed: {

      jumlah: function() {
        if (this.jenis=='0')
        return ' Rp. '+this.thousandSeprator(
          this.pbi * (42000*12) +
          this.k3 * (42000*12)  +
          this.k2 * (12*100000) +
          this.k1 * (12*150000)
          )  
        if (this.jenis=='1')
          return ' Rp. '+this.thousandSeprator(
            (0.05 * 12 * this.upah).toFixed(0)
            )  
      },
      transfer: function() {
        if (this.jenis=='0')
        return ' Rp. '+this.thousandSeprator(
          this.pbi * (42000*12) + 
          this.k3 * (3*16500 + 9*7000)
          )  
      },
      gaji: function() {
        if (this.jenis=='1')
        return ' Rp. '+this.thousandSeprator(
          (0.04 * 12 * this.upah).toFixed(0)
          )  
      },

     


  }

});
