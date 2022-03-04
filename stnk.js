// Regular expression from W3C HTML5.2 input specification:
// https://www.w3.org/TR/html/sec-forms.html#email-state-typeemail

new Vue({
  // root node
  el: "#app",
  // the instance state
  data: function() {
    return {
      pajak:"1",
      jenis:"0",
      harga:0,

         
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
      this.harga="0"
    }
  },

  computed: {

      pkb: function() {
        if (this.jenis =="0") return this.thousandSeprator((1.08 * this.harga /100).toFixed(0))
        if (this.jenis =="1") return this.thousandSeprator((1.25 * this.harga /100).toFixed(0))
        },
      swdkllj: function() {
        if (this.jenis =="0" && this.pajak=="1") return this.thousandSeprator(35000)
        if (this.jenis =="1" && this.pajak=="1") return this.thousandSeprator(143000)
        },
      },  
    
    });
