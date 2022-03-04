// Regular expression from W3C HTML5.2 input specification:
// https://www.w3.org/TR/html/sec-forms.html#email-state-typeemail

new Vue({
  // root node
  el: "#app",
  // the instance state
  data: function() {
    return {
      kawin:"k",
      tanggungan:"0",
      penghasilan:0,
         
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
    ptkp(status,tanggung) {
      var ptkp = 54000000;
      if (status=="k") ptkp = ptkp + 4500000;
      ptkp = ptkp + tanggung * 4500000;
      return ptkp;
    },

    kenapajak(penghasilan,status,tanggung) {
      if (penghasilan - this.ptkp(status,tanggung)>0) {
        return penghasilan - this.ptkp(status,tanggung)
      } else {
        return 0
      }
    },
  
  },

  computed: {

    pph: function() {
      return this.thousandSeprator(
        0.05*this.kenapajak(this.penghasilan,this.kawin,this.tanggungan)
      )
      },
        },  

});
