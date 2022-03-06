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
