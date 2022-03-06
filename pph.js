// Regular expression from W3C HTML5.2 input specification:
// https://www.w3.org/TR/html/sec-forms.html#email-state-typeemail
Vue.component('currency', {
  props: ["value"],
  template: `
      <input type="text" v-model="displayValue" @blur="isInputActive = false" @focus="isInputActive = true"/>
     `,
  data: function() {
      return {
          isInputActive: false
      }
  },
  computed: {
      displayValue: {
          get: function() {
              if (this.isInputActive) {
                  // Cursor is inside the input field. unformat display value for user
                  return this.value.toString()
              } else {
                  // User is not modifying now. Format display value for user interface
                  if (this.value !== '' || this.value !== undefined || this.value !== 0 || this.value !== '0' || this.value !== null) {
                    return this.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
                } else {
                    return this.value;
                }
              }
          },
          set: function(modifiedValue) {
              // Recalculate value after ignoring "$" and "," in user input
              let newValue = parseFloat(modifiedValue.replace(/[^\d\.]/g, ""))
              // Ensure that it is not NaN
              if (isNaN(newValue)) {
                  newValue = 0
              }
              // Note: we cannot set this.value as it is a "prop". It needs to be passed to parent component
              // $emit the event so that parent component gets it
              this.$emit('input', newValue)
          }
      }
  }
});
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
