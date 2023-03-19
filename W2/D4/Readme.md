Code pada kalku.js tersebut berfungsi untuk menambahkan event listener pada tombol sama dengan (=) pada kalkulator, sehingga ketika tombol tersebut ditekan, kalkulator akan mengevaluasi nilai yang ada di dalam inputText dan menampilkan hasilnya pada inputText.

Pertama-tama, code akan mendefinisikan variabel buttonEqual, buttonDelete, inputText, actions, clear, dan evals menggunakan method querySelectorAll untuk mencari elemen-elemen yang dibutuhkan dari HTML.

Kemudian, code menambahkan event listener pada buttonEqual. Ketika tombol tersebut ditekan, code akan mengambil nilai yang ada di dalam inputText dan mengevaluasi nilainya menggunakan method Function() yang berisi parameter return ${evaluate}, dimana evaluate adalah nilai yang ada di dalam inputText. Kemudian, hasil evaluasi akan ditampilkan pada inputText.

Setelah itu, code menambahkan event listener pada tombol Delete. Ketika tombol tersebut ditekan, nilai pada inputText akan di-set menjadi 0 dan array evals akan dihapus semua elemennya.

Kemudian, code menambahkan event listener pada tombol Clear. Ketika tombol tersebut ditekan, elemen terakhir dari array evals akan dihapus dan nilai pada inputText akan di-set menjadi elemen-elemen yang tersisa dalam array evals yang digabungkan dengan spasi.

Terakhir, code menambahkan event listener pada setiap tombol aksi (actions), yaitu tombol-tombol yang berisi operator dan angka. Ketika tombol-tombol tersebut ditekan, nilai yang terkandung di dalamnya akan dimasukkan ke dalam array evals. Jika tombol yang ditekan adalah tombol perkalian (X), maka kode akan memasukkan operator bintang (*) ke dalam array evals. Setelah itu, elemen-elemen dalam array evals akan digabungkan dan ditampilkan pada inputText.
