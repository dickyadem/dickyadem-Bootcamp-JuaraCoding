function hitungPBB() {
    var luasTanah = document.getElementById("luas-tanah").value;
    var luasBangunan = document.getElementById("luas-bangunan").value;
    var njopTanah = document.getElementById("njop-tanah").value;
    var njopBangunan = document.getElementById("njop-bangunan").value;

    var hargaTanah = luasTanah * njopTanah;
    var hargaBangunan = luasBangunan * njopBangunan;
    var njkp = (hargaTanah + hargaBangunan - 12000000) * 0.2;
    var pbb = (njkp * 0.005) - 15000;

    document.getElementById("hasil").value = pbb.toLocaleString("id-ID", {
        style: "currency",
        currency: "IDR"
    });
}