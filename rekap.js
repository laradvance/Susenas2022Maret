// Regular expression from W3C HTML5.2 input specification:
// https://www.w3.org/TR/html/sec-forms.html#email-state-typeemail

new Vue({
  // root node
  el: "#app",
  // the instance state
  data: function() {
    return {
      r1b:0,
      r8b:0,
      r16b:0,
      r52b:0,
      r62b:0,
      r72b:0,
      r98b:0,
      r106b:0,
      r120b:0,
      r125b:0,
      r133b:0,
      r146b:0,

      r1p:0,
      r8p:0,
      r16p:0,
      r52p:0,
      r62p:0,
      r72p:0,
      r98p:0,
      r106p:0,
      r120p:0,
      r125p:0,
      r133p:0,
      r146p:0,

      r431ab:0,
      r431bb:0,
      r431ap:0,
      r431bp:0,

      r189a:0,
      r189b:0,
      r231a:0,
      r231b:0,
      r270:0,
      r279:0,
      r297:0,
      r304:0,




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
    
    jumlahbl(){
      return 1*this.r1b+1*this.r8b+1*this.r16b+1*this.r52b+1*this.r62b+1*this.r72b+1*this.r98b+1*this.r106b+1*this.r120b+1*this.r125b+1*this.r133b+1*this.r146b+1*this.r431ab+1*this.r431bb
    },
    jumlahp(){
      return 1*this.r1p+1*this.r8p+1*this.r16p+1*this.r52p+1*this.r62p+1*this.r72p+1*this.r98p+1*this.r106p+1*this.r120p+1*this.r125p+1*this.r133p+1*this.r146p+1*this.r431ap+1*this.r431bp
    },

    ratamknb(){
      return (30 * this.jumlahbl() /7).toFixed(0)
    },

    ratamknp(){
      return (30 * this.jumlahp() /7).toFixed(0)
    },

    ratamkn(){
      return (30 * (this.jumlahp()+this.jumlahbl()) /7).toFixed(0)
    },

    jumlaha() {
      return 1*this.r189a + 1* this.r231a
    },

    jumlahb() {
      return 1*this.r189b + 1* this.r231b + 1*this.r270+1*this.r279+1*this.r297 + 1* this.r304
    },
    
    ratanon() {
      return (this.jumlaha()+this.jumlahb()/12).toFixed(0)
    },

    sebulan() {
      return 1 * this.ratamkn() + 1 * this.ratanon()
    },

    setahun() {
      return 12 * this.sebulan()
    }

  },

  computed: {

    r4315b: function() {
      return this.thousandSeprator(
         this.jumlahbl()
         )
    },
    r4316b: function() {
      return this.thousandSeprator(
        this.ratamknb())
    },

    r4315p: function() {
      return this.thousandSeprator(
         this.jumlahp()
         )
    },

    r4315: function() {
      return this.thousandSeprator(
         this.jumlahp()+this.jumlahbl()
         )
    },
    r4316p: function() {
      return this.thousandSeprator(
        this.ratamknp())
    },

    r4316: function() {
      return this.thousandSeprator(
        this.ratamkn())
    },

    r437a: function() {
      return this.thousandSeprator(
        this.jumlaha())
    },

    r437b: function() {
      return this.thousandSeprator(
        this.jumlahb())
    },
    r438: function() {
      return this.thousandSeprator(
        this.ratanon())
    },
    r439: function() {
      return this.thousandSeprator(
        this.sebulan())
    },
    total: function() {
      return this.thousandSeprator(
        this.setahun())
    },

}
 
});
