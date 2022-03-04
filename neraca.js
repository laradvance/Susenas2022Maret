// Regular expression from W3C HTML5.2 input specification:
// https://www.w3.org/TR/html/sec-forms.html#email-state-typeemail

new Vue({
  // root node
  el: "#app",
  // the instance state
  data: function() {
    return {
      jenis: "n",
      minggu:0,
      bulan: 0,
      tahun: 0,   
      konsumsi:0,
      gaji:0,
      usaha:0,
      kepemilikan:0,
      d1:0,
      d2b:0,
      d2c:0,
      d2e:0,
      d1k:0,
      d2bk:0,
      d2ck:0,
      d2ek:0,

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

    hitung(jenis) {
      if (jenis!='n') return this.minggu*360/7 + this.bulan*12 + 1*this.tahun
    },
    tabung(jenis) {
      if (jenis=='n') 
      return 1*this.gaji + 1*this.usaha + 1*this.kepemilikan + 1*this.d1 + 1*this.d2b + 1*this.d2c + 1* this.d2e
    },

    tarik(jenis) {
      if (jenis=='n') 
      return 12*this.konsumsi - (this.minggu*360/7 + this.bulan*12 + 1*this.tahun) +  1*this.d1k + 1*this.d2bk + 1*this.d2ck + 1* this.d2ek
    },

    clear(){
      this.minggu=0
      this.bulan= 0
      this.konsumsi=0
      this.tahun= 0   
      this.gaji=0
      this.usaha=0
      this.kepemilikan=0
      this.d1=0
      this.d2b=0
      this.d2c=0
      this.d2e=0
      this.d1k=0
      this.d2bk=0
      this.d2ck=0
      this.d2ek=0
    }
  },
  computed: {

      jumlah: function() {
        return ' Rp. '+this.thousandSeprator(
            (this.hitung(this.jenis)).toFixed(0)
          )  
      },
      menabung: function() {
        return ' Rp. '+this.thousandSeprator(
          (this.tabung(this.jenis)).toFixed(0)
          )  
      },
      ambil: function() {
        return ' Rp. '+this.thousandSeprator(
          (this.tarik(this.jenis)).toFixed(0)
          )  
      },

  }

});
