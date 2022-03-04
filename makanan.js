// Regular expression from W3C HTML5.2 input specification:
// https://www.w3.org/TR/html/sec-forms.html#email-state-typeemail

new Vue({
  // root node
  el: "#app",
  // the instance state
  data: function() {
    return {
      harga:0,
      konv:null,
      konvs : [
        {id:3, nama:'Beras ketan', satuan:'Kg', harga1:12000, harga2:12000, harga3:12000},
        {id:4, nama:'Jagung basah dengan kulit', satuan:'Kg', harga1:6000, harga2:6000, harga3:6000},
        {id:5, nama:'Jagung pipilan/beras jagung/jagung titi', satuan:'Kg', harga1:8000, harga2:8000, harga3:10000},
        {id:6, nama:'Tepung terigu', satuan:'Kg', harga1:8000, harga2:10000, harga3:15000},
        {id:9, nama:'Ketela pohon/singkong', satuan:'Kg', harga1:2000, harga2:4000, harga3:6000},
        {id:10, nama:'Ketela rambat/ubi jalar', satuan:'Kg', harga1:3000, harga2:5000, harga3:6000},
        {id:11, nama:'Sagu (bukan dari ketela pohon)', satuan:'Kg', harga1:5000, harga2:6000, harga3:8000},
        {id:12, nama:'Talas/keladi', satuan:'Kg', harga1:2000, harga2:4000, harga3:5000},
        {id:13, nama:'Kentang', satuan:'Kg', harga1:15000, harga2:20000, harga3:25000},
        {id:14, nama:'Gaplek', satuan:'Kg', harga1:4000, harga2:5000, harga3:6000},
        {id:17, nama:'Ekor kuning', satuan:'Kg', harga1:25000, harga2:40000, harga3:50000},
        {id:18, nama:'Tongkol', satuan:'Kg', harga1:30000, harga2:35000, harga3:50000},
        {id:19, nama:'Tuna', satuan:'Kg', harga1:75000, harga2:80000, harga3:120000},
        {id:20, nama:'Cakalang, dencis', satuan:'Kg', harga1:30000, harga2:35000, harga3:50000},
        {id:21, nama:'Tenggiri', satuan:'Kg', harga1:40000, harga2:50000, harga3:60000},
        {id:22, nama:'Selar', satuan:'Kg', harga1:25000, harga2:30000, harga3:40000},
        {id:23, nama:'Kembung, lema/tatare, banyar/banyara', satuan:'Kg', harga1:35000, harga2:40000, harga3:50000},
        {id:24, nama:'Teri Basah', satuan:'Kg', harga1:60000, harga2:75000, harga3:80000},
        {id:25, nama:'Bandeng', satuan:'Kg', harga1:20000, harga2:25000, harga3:40000},
        {id:26, nama:'Gabus', satuan:'Kg', harga1:38000, harga2:65000, harga3:75000},
        {id:27, nama:'Mujair', satuan:'Kg', harga1:35000, harga2:40000, harga3:45000},
        {id:28, nama:'Mas', satuan:'Kg', harga1:25000, harga2:30000, harga3:45000},
        {id:29, nama:'Nila', satuan:'Kg', harga1:30000, harga2:35000, harga3:50000},
        {id:30, nama:'Lele', satuan:'Kg', harga1:35000, harga2:40000, harga3:45000},
        {id:31, nama:'Kakap', satuan:'Kg', harga1:60000, harga2:75000, harga3:80000},
        {id:32, nama:'Baronang', satuan:'Kg', harga1:40000, harga2:45000, harga3:50000},
        {id:33, nama:'Patin', satuan:'Kg', harga1:20000, harga2:25000, harga3:45000},
        {id:34, nama:'Bawal', satuan:'Kg', harga1:45000, harga2:50000, harga3:60000},
        {id:35, nama:'Gurame', satuan:'Kg', harga1:45000, harga2:50000, harga3:60000},
        {id:37, nama:'Udang, lobster', satuan:'Kg', harga1:40000, harga2:45000, harga3:60000},
        {id:38, nama:'Cumi-cumi, sotong, gurita', satuan:'Kg', harga1:60000, harga2:70000, harga3:80000},
        {id:39, nama:'Ketam, kepiting, rajungan', satuan:'Kg', harga1:40000, harga2:45000, harga3:50000},
        {id:40, nama:'Kerang, siput, bekicot, remis', satuan:'Kg', harga1:20000, harga2:25000, harga3:30000},
        {id:42, nama:'Kembung diawetkan/peda', satuan:'Ons', harga1:5000, harga2:6000, harga3:8000},
        {id:43, nama:'Tenggiri diawetkan', satuan:'Ons', harga1:10000, harga2:12000, harga3:15000},
        {id:44, nama:'Tongkol/tuna/cakalang diawetkan', satuan:'Ons', harga1:8000, harga2:8500, harga3:10000},
        {id:45, nama:'Teri diawetkan', satuan:'Ons', harga1:7000, harga2:7500, harga3:8000},
        {id:46, nama:'Selar diawetkan', satuan:'Ons', harga1:3000, harga2:4000, harga3:5000},
        {id:47, nama:'Sepat diawetkan', satuan:'Ons', harga1:4000, harga2:5000, harga3:7000},
        {id:48, nama:'Bandeng diawetkan', satuan:'Ons', harga1:3000, harga2:4000, harga3:5000},
        {id:49, nama:'Gabus diawetkan', satuan:'Ons', harga1:7000, harga2:8500, harga3:13000},
        {id:50, nama:'Ikan dalam kaleng (sardencis, tuna dalam kaleng, dsb)', satuan:'Ons', harga1:5000, harga2:5100, harga3:5500},
        {id:52, nama:'Udang diawetkan (ebi, rebon)', satuan:'Ons', harga1:4500, harga2:5000, harga3:5500},
        {id:53, nama:'Cumi-cumi, sotong, gurita diawetkan', satuan:'Ons', harga1:8000, harga2:10000, harga3:10000},
        {id:56, nama:'Daging sapi', satuan:'Kg', harga1:110000, harga2:120000, harga3:130000},
        {id:57, nama:'Daging kambing, domba/biri-biri', satuan:'Kg', harga1:90000, harga2:90000, harga3:100000},
        {id:59, nama:'Daging ayam ras', satuan:'Kg', harga1:25000, harga2:30000, harga3:40000},
        {id:60, nama:'Daging ayam kampung', satuan:'Kg', harga1:40000, harga2:45000, harga3:50000},
        {id:63, nama:'Tetelan, sandung lamur', satuan:'Kg', harga1:45000, harga2:45000, harga3:50000},
        {id:64, nama:'Lainnya (hati, jeroan, iga, kaki, buntut, kepala, dsb)', satuan:'Kg', harga1:40000, harga2:45000, harga3:50000},
        {id:66, nama:'Telur ayam ras', satuan:'Butir', harga1:1200, harga2:1500, harga3:2000},
        {id:67, nama:'Telur ayam kampung', satuan:'Butir', harga1:2000, harga2:2500, harga3:3000},
        {id:68, nama:'Telur itik/telur itik manila', satuan:'Butir', harga1:2300, harga2:2500, harga3:3000},
        {id:70, nama:'Susu cair pabrik', satuan:'Kotak kecil (250ml)', harga1:3000, harga2:4000, harga3:5000},
        {id:71, nama:'Susu kental manis', satuan:'Kaleng (397gr)', harga1:9000, harga2:11000, harga3:12000},
        {id:72, nama:'Susu bubuk', satuan:'Kg', harga1:70000, harga2:80000, harga3:100000},
        {id:73, nama:'Susu bubuk bayi', satuan:'Kg', harga1:110000, harga2:130000, harga3:145000},
        {id:76, nama:'Bayam', satuan:'Kg', harga1:8000, harga2:10000, harga3:12000},
        {id:77, nama:'Kangkung', satuan:'Kg', harga1:3000, harga2:5000, harga3:7500},
        {id:78, nama:'Kol/kubis', satuan:'Kg', harga1:10000, harga2:12000, harga3:15000},
        {id:79, nama:'Sawi putih (petsai)', satuan:'Kg', harga1:10000, harga2:15000, harga3:17500},
        {id:80, nama:'Sawi hijau', satuan:'Kg', harga1:10000, harga2:15000, harga3:17500},
        {id:81, nama:'Buncis', satuan:'Kg', harga1:6000, harga2:10000, harga3:15000},
        {id:82, nama:'Kacang panjang', satuan:'Kg', harga1:6000, harga2:8000, harga3:10000},
        {id:83, nama:'Tomat sayur, tomat ceri', satuan:'Kg', harga1:10000, harga2:15000, harga3:17500},
        {id:84, nama:'Wortel', satuan:'Kg', harga1:15000, harga2:18000, harga3:25000},
        {id:85, nama:'Mentimun', satuan:'Kg', harga1:5000, harga2:10000, harga3:10000},
        {id:86, nama:'Daun ketela pohon/daun singkong', satuan:'Kg', harga1:2000, harga2:2500, harga3:5000},
        {id:87, nama:'Terong', satuan:'Kg', harga1:10000, harga2:15000, harga3:20000},
        {id:88, nama:'Tauge', satuan:'Kg', harga1:15000, harga2:20000, harga3:25000},
        {id:89, nama:'Labu, labu siam, labu parang', satuan:'Kg', harga1:10000, harga2:12000, harga3:15000},
        {id:90, nama:'Bahan sayur sop/capcay/ kimlo (paket)', satuan:'Bungkus', harga1:3000, harga2:4000, harga3:5000},
        {id:91, nama:'Bahan sayur asam/lodeh (paket)', satuan:'Bungkus', harga1:3000, harga2:4000, harga3:5000},
        {id:92, nama:'Nangka muda', satuan:'Kg', harga1:5000, harga2:5000, harga3:7000},
        {id:93, nama:'Pepaya muda', satuan:'Kg', harga1:3000, harga2:4000, harga3:5000},
        {id:94, nama:'Jengkol', satuan:'Kg', harga1:8000, harga2:10000, harga3:15000},
        {id:95, nama:'Bawang merah', satuan:'Ons', harga1:3000, harga2:3800, harga3:5000},
        {id:96, nama:'Bawang Bombay', satuan:'Ons', harga1:3000, harga2:4000, harga3:5000},
        {id:97, nama:'Bawang putih', satuan:'Ons', harga1:2000, harga2:2500, harga3:3500},
        {id:98, nama:'Cabe merah', satuan:'Kg', harga1:80000, harga2:120000, harga3:120000},
        {id:99, nama:'Cabe hijau', satuan:'Kg', harga1:45000, harga2:50000, harga3:50000},
        {id:100, nama:'Cabe rawit', satuan:'Kg', harga1:100000, harga2:110000, harga3:120000},
        {id:103, nama:'Kacang tanah tanpa kulit', satuan:'Kg', harga1:25000, harga2:32000, harga3:35000},
        {id:104, nama:'Kacang kedelai', satuan:'Kg', harga1:7500, harga2:8000, harga3:10000},
        {id:106, nama:'Tahu', satuan:'Kg', harga1:7500, harga2:8000, harga3:10000},
        {id:107, nama:'Tempe', satuan:'Kg', harga1:7500, harga2:8000, harga3:10000},
        {id:108, nama:'Oncom', satuan:'Ons', harga1:750, harga2:800, harga3:1000},
        {id:111, nama:'Jeruk, jeruk bali', satuan:'Kg', harga1:10000, harga2:18000, harga3:25000},
        {id:112, nama:'Mangga', satuan:'Kg', harga1:15000, harga2:25000, harga3:30000},
        {id:113, nama:'Apel', satuan:'Kg', harga1:25000, harga2:35000, harga3:40000},
        {id:114, nama:'Rambutan', satuan:'Kg', harga1:5000, harga2:10000, harga3:15000},
        {id:115, nama:'Duku, langsat', satuan:'Kg', harga1:25000, harga2:30000, harga3:40000},
        {id:116, nama:'Durian', satuan:'Kg', harga1:15000, harga2:20000, harga3:30000},
        {id:117, nama:'Salak', satuan:'Kg', harga1:7000, harga2:8000, harga3:12000},
        {id:118, nama:'Pisang ambon', satuan:'Kg', harga1:5000, harga2:5000, harga3:6000},
        {id:119, nama:'Pisang lainnya', satuan:'Kg', harga1:6000, harga2:8000, harga3:10000},
        {id:120, nama:'Pepaya', satuan:'Kg', harga1:5000, harga2:10000, harga3:10000},
        {id:121, nama:'Semangka', satuan:'Kg', harga1:8000, harga2:10000, harga3:15000},
        {id:122, nama:'Tomat Buah', satuan:'Kg', harga1:10000, harga2:15000, harga3:17500},
        {id:123, nama:'Alpukat', satuan:'Kg', harga1:25000, harga2:30000, harga3:35000},
        {id:124, nama:'Jambu Biji', satuan:'Kg', harga1:20000, harga2:25000, harga3:30000},
        {id:127, nama:'Minyak kelapa', satuan:'Liter', harga1:15000, harga2:25000, harga3:30000},
        {id:128, nama:'Minyak goreng (kelapa sawit, bunga matahari)', satuan:'Liter', harga1:15000, harga2:17000, harga3:20000},
        {id:129, nama:'Kelapa (tidak termasuk santan instan)', satuan:'Butir', harga1:3000, harga2:4000, harga3:6000},
        {id:132, nama:'Gula pasir', satuan:'Ons', harga1:1400, harga2:1500, harga3:1600},
        {id:133, nama:'Gula merah, gula air (pohon aren, kelapa, lontar)', satuan:'Ons', harga1:1600, harga2:1700, harga3:2000},
        {id:134, nama:'Teh bubuk', satuan:'Ons', harga1:4500, harga2:4500, harga3:6000},
        {id:135, nama:'Teh celup (sachet)', satuan:'2 gram', harga1:200, harga2:200, harga3:300},
        {id:136, nama:'Kopi (bubuk, biji)', satuan:'Ons', harga1:2000, harga2:2500, harga3:4000},
        {id:137, nama:'Kopi instan (sachet)', satuan:'20 gram', harga1:1500, harga2:1500, harga3:2500},
        {id:140, nama:'Garam', satuan:'Gram', harga1:8, harga2:12, harga3:15},
        {id:141, nama:'Kemiri', satuan:'Gram', harga1:40, harga2:50, harga3:60},
        {id:142, nama:'Ketumbar/jinten', satuan:'Gram', harga1:40, harga2:50, harga3:60},
        {id:143, nama:'Merica/lada', satuan:'Gram', harga1:140, harga2:150, harga3:200},
        {id:144, nama:'Jahe', satuan:'Gram', harga1:25, harga2:30, harga3:35},
        {id:145, nama:'Kunyit', satuan:'Gram', harga1:10, harga2:15, harga3:20},
        {id:146, nama:'Asam', satuan:'Gram', harga1:35, harga2:40, harga3:50},
        {id:147, nama:'Terasi/petis', satuan:'Gram', harga1:60, harga2:60, harga3:65},
        {id:148, nama:'Kecap', satuan:'100ml', harga1:4000, harga2:4000, harga3:5000},
        {id:149, nama:'Penyedap masakan/vetsin', satuan:'Gram', harga1:35, harga2:40, harga3:45},
        {id:150, nama:'Sambal jadi', satuan:'100ml', harga1:4500, harga2:4500, harga3:5000},
        {id:151, nama:'Saus tomat', satuan:'100ml', harga1:5000, harga2:6000, harga3:7500},
        {id:152, nama:'Bumbu maskan jadi/kemasan, bumbu racikan', satuan:'Gram', harga1:45, harga2:50, harga3:75},
        {id:153, nama:'Bumbu dapur lainnya (pala,  kencur, kapulaga, dsb.)', satuan:'Gram', harga1:50, harga2:50, harga3:50},
        {id:156, nama:'Kerupuk', satuan:'Ons', harga1:1500, harga2:1800, harga3:2000},
        {id:157, nama:'Bubur bayi kemasan', satuan:'Kotak kecil (150 gr)', harga1:2000, harga2:3000, harga3:4000},
        {id:160, nama:'Roti tawar', satuan:'Potong', harga1:1000, harga2:1500, harga3:4000},
        {id:161, nama:'Roti manis, roti lainnya', satuan:'Potong', harga1:1000, harga2:1500, harga3:4000},
        {id:162, nama:'Kue kering, biskuit, semprong', satuan:'Ons', harga1:8000, harga2:8000, harga3:8000},
        {id:177, nama:'Makanan ringan anak-anak, krupuk/kripik', satuan:'Ons', harga1:10000, harga2:10000, harga3:10000},
        {id:186, nama:'Air teh kemasan, minuman bersoda/mengandung CO2', satuan:'250ml', harga1:5000, harga2:5000, harga3:6000},        
      ],
    
    };
  },
  methods: {

    thousandSeprator(amount) {
    	if (amount !== '' || amount !== undefined || amount !== 0 || amount !== '0' || amount !== null) {
        return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    } else {
        return amount;
    }
    }
  },
  computed: {
      q1: function() {
        if (this.konv !=null)
        return (this.harga / this.konv.harga1).toFixed(2) +' ('+ this.konv.satuan+')';
        else this.harga = 0
      },
      q2: function() {
        if (this.konv !=null)
        return (this.harga / this.konv.harga2).toFixed(2) +' ('+ this.konv.satuan+')'
      },
      q3: function() {
        if (this.konv !=null)
        return (this.harga / this.konv.harga3).toFixed(2) +' ('+ this.konv.satuan+')'
      },
      komoditas: function() {
        if (this.konv !=null)
        return this.konv.nama
      },

      jumlah: function() {
        if ((this.konv !=null) && (this.harga!=''))
        return ' Rp. '+this.thousandSeprator(this.harga)  
      },

     


  }

});
