function panggilObjects() {
    var mobil = {
        type: "Sedan",
        harga: 200000000,
        warna: "Putih",
        tahun: [2019, 2020, 2021, 2022]
    }
    mobil.harga = 100000000;
    console.log(mobil);
    console.log(mobil.warna);
    console.log(mobil.tahun[0]);
}

panggilObjects()