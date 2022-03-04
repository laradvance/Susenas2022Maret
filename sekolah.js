// Regular expression from W3C HTML5.2 input specification:
// https://www.w3.org/TR/html/sec-forms.html#email-state-typeemail

new Vue({
  // root node
  el: "#app",
  // the instance state
  data: function() {
    return {
      sd1: 0,
      smp1:0,
      sma1: 0,
      sd2: 0,
      smp2:0,
      sma2: 0,
         
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

    r265() {
      return 0;

    },
  },
  computed: {

      jumlah265: function() {
        return ' Rp. '+this.thousandSeprator(
          (0 * this.sd1 + 100000 * this.sd2) +
          (0 * this.smp1 + 100000 * this.smp2) +
          (0 * this.sma1 + 200000 * this.sma2) 
          )  
      },
      jumlah266: function() {
        return ' Rp. '+this.thousandSeprator(
          (100000 * this.sd1 + 100000 * this.sd2) +
          (200000 * this.smp1 + 200000 * this.smp2) +
          (200000 * this.sma1 + 200000 * this.sma2) 
          )  
      },
      jumlah268: function() {
        return ' Rp. '+this.thousandSeprator(
          (25000 * this.sd1 + 25000 * this.sd2) +
          (75000 * this.smp1 + 75000 * this.smp2) +
          (100000 * this.sma1 + 100000 * this.sma2) 
          )  
      },

  }

});
