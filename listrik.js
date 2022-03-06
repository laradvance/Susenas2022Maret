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
      daya:"0",
      jenis:"0",
      jumlah:0,

         
    };
  },

  computed: {

      kwh: function() {
        if (this.jenis==="0") {
          switch(this.daya) {
            case "0":
              return (0.91*this.jumlah/415).toFixed(1)
            case "1":
              return (0.91*this.jumlah/605).toFixed(1)
            case "2":
              return (0.91*this.jumlah/1352).toFixed(1)
            default:
              return (0.91*this.jumlah/1444.7).toFixed(1)
          } 
        } else
        switch(this.daya) {
          case "0":
            if (100*this.jumlah/110-4950 < 5070) {
              return ((100*this.jumlah/110-4950)/169).toFixed(1)
            }
            else if (100*this.jumlah/110-4950 < 15870) {
              return (30+(100*this.jumlah/110-4950-5070)/360).toFixed(1)
            }
            else return (60+(100*this.jumlah/110-4950-15870)/495).toFixed(1)
          case "1":
            if (100*this.jumlah/110-18000 < 5500) {
              return ((100*this.jumlah/110-18000)/275).toFixed(1)
            }
            else if (100*this.jumlah/110-18000 < 23300) {
              return (20+(100*this.jumlah/110-18000-5500)/445).toFixed(1)
            }
            else return (60+(100*this.jumlah/110-18000-23300)/495).toFixed(1)
          case "2":
            return (0.91*this.jumlah/1352).toFixed(1)
          default:
            return (0.91*this.jumlah/1444.7).toFixed(1)
            
        } 
        }
      },  
    
    });
