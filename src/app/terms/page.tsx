'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, FileText, ShoppingBag, CreditCard, Package, AlertTriangle } from 'lucide-react';
import Link from 'next/link';

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50">
      {/* Navigation */}
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <img src="/logo.png" alt="FITRIYANTI STORE" className="h-10 w-auto mr-3" />
                <span className="text-xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                  FITRIYANTI STORE
                </span>
              </Link>
            </div>
            <Link href="/">
              <Button variant="outline" className="mt-4">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Kembali ke Beranda
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <FileText className="h-10 w-10 text-purple-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Terms and Conditions
          </h1>
          <p className="text-xl text-gray-600">
            Syarat dan Ketentuan FITRIYANTI STORE
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Terakhir diperbarui: {new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        <div className="space-y-8">
          <Card className="p-8">
            <CardContent className="p-0">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <ShoppingBag className="h-6 w-6 text-purple-600 mr-3" />
                Pendahuluan
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Selamat datang di FITRIYANTI STORE. Syarat dan Ketentuan ini mengatur penggunaan layanan kami, 
                termasuk pembelian produk melalui website atau platform lain yang kami kelola.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Dengan menggunakan layanan FITRIYANTI STORE, Anda setuju untuk mematuhi syarat dan ketentuan yang berlaku. 
                Jika Anda tidak setuju dengan bagian mana pun dari syarat ini, harap jangan menggunakan layanan kami.
              </p>
            </CardContent>
          </Card>

          <Card className="p-8">
            <CardContent className="p-0">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Definisi</h2>
              <div className="space-y-3">
                <div>
                  <span className="font-semibold text-gray-800">"FITRIYANTI STORE"</span>
                  <span className="text-gray-600 ml-2">- Merupakan toko pakaian eceran yang berlokasi di Depok, Jawa Barat.</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-800">"Pelanggan"</span>
                  <span className="text-gray-600 ml-2">- Individu atau entitas yang membeli produk dari FITRIYANTI STORE.</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-800">"Produk"</span>
                  <span className="text-gray-600 ml-2">- Semua barang pakaian yang ditawarkan untuk dijual oleh FITRIYANTI STORE.</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-800">"Layanan"</span>
                  <span className="text-gray-600 ml-2">- Semua layanan yang disediakan oleh FITRIYANTI STORE termasuk penjualan dan pengiriman produk.</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="p-8">
            <CardContent className="p-0">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Package className="h-6 w-6 text-purple-600 mr-3" />
                Produk dan Harga
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Ketersediaan Produk</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Kami berusaha untuk memastikan ketersediaan produk yang ditampilkan. Namun, 
                    stok dapat berubah sewaktu-waktu dan kami berhak membatalkan pesanan jika produk tidak tersedia.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Harga</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Semua harga yang ditampilkan dalam Rupiah dan sudah termasuk PPN (jika berlaku). 
                    Kami berhak mengubah harga tanpa pemberitahuan sebelumnya. Harga yang berlaku adalah 
                    harga pada saat transaksi.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Deskripsi Produk</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Kami berusaha menyajikan deskripsi produk yang akurat. Namun, warna dan tampilan 
                    aktual mungkin sedikit berbeda karena faktor monitor dan pencahayaan.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="p-8">
            <CardContent className="p-0">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <CreditCard className="h-6 w-6 text-purple-600 mr-3" />
                Proses Pembelian
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Pemesanan</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Pelanggan harus memberikan informasi yang akurat dan lengkap saat melakukan pemesanan. 
                    Kami berhak menolak atau membatalkan pesanan jika informasi yang diberikan tidak valid.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Pembayaran</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Pembayaran harus dilakukan sebelum atau pada saat pemesanan. Kami menerima berbagai 
                    metode pembayaran yang tersedia. Transaksi akan diproses setelah pembayaran dikonfirmasi.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Konfirmasi Pesanan</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Setelah pembayaran berhasil, pelanggan akan menerima konfirmasi pesanan melalui email atau WhatsApp. 
                    Konfirmasi ini berfungsi sebagai bukti transaksi yang sah.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="p-8">
            <CardContent className="p-0">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Pengiriman</h2>
              <div className="space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  Kami menyediakan layanan pengiriman ke seluruh Indonesia. Waktu pengiriman bervariasi 
                  tergantung lokasi dan metode pengiriman yang dipilih.
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Estimasi pengiriman: 1-7 hari kerja</li>
                  <li>Biaya pengiriman ditanggung oleh pembeli</li>
                  <li>Resi pengiriman akan diberikan setelah barang dikirim</li>
                  <li>Kami tidak bertanggung jawab atas keterlambatan pengiriman oleh pihak ekspedisi</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="p-8">
            <CardContent className="p-0">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Kebijakan Pengembalian</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Syarat Pengembalian</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Produk dapat dikembalikan dalam 7 hari setelah diterima</li>
                    <li>Produk harus dalam kondisi asli, belum dipakai, dan label masih terpasang</li>
                    <li>Segel dan kemasan produk harus utuh</li>
                    <li>Disertai dengan bukti pembelian yang sah</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Alasan Pengembalian yang Diterima</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Produk cacat atau rusak saat diterima</li>
                    <li>Ukuran tidak sesuai (dengan syarat dan ketentuan berlaku)</li>
                    <li>Produk yang dikirim berbeda dengan pesanan</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Proses Pengembalian</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Hubungi customer service kami untuk memulai proses pengembalian. 
                    Pengembalian dana akan diproses dalam 3-5 hari kerja setelah produk diterima dan diverifikasi.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="p-8">
            <CardContent className="p-0">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <AlertTriangle className="h-6 w-6 text-purple-600 mr-3" />
                Batasan Tanggung Jawab
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                FITRIYANTI STORE tidak bertanggung jawab atas:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Kerugian tidak langsung, insidental, atau konsekuensial</li>
                <li>Keterlambatan pengiriman oleh pihak ketiga</li>
                <li>Kerusakan yang disebabkan oleh penggunaan produk yang tidak sesuai</li>
                <li>Kesalahan informasi yang disediakan oleh pelanggan</li>
                <li>Gangguan teknis atau server maintenance</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="p-8">
            <CardContent className="p-0">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Hak Kekayaan Intelektual</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Semua konten di website FITRIYANTI STORE termasuk namun tidak terbatas pada:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Logo dan merek dagang</li>
                <li>Foto produk</li>
                <li>Deskripsi dan teks</li>
                <li>Desain dan tata letak website</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-4">
                Dilindungi oleh hukum hak cipta dan tidak boleh digunakan tanpa izin tertulis dari FITRIYANTI STORE.
              </p>
            </CardContent>
          </Card>

          <Card className="p-8">
            <CardContent className="p-0">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Privasi Data</h2>
              <p className="text-gray-600 leading-relaxed">
                Kami melindungi data pribadi pelanggan sesuai dengan Kebijakan Privasi yang berlaku. 
                Dengan menggunakan layanan kami, Anda setuju dengan pengumpulan, penggunaan, dan 
                perlindungan data sesuai kebijakan tersebut.
              </p>
            </CardContent>
          </Card>

          <Card className="p-8">
            <CardContent className="p-0">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Perubahan Syarat dan Ketentuan</h2>
              <p className="text-gray-600 leading-relaxed">
                Kami berhak mengubah syarat dan ketentuan ini sewaktu-waktu. Perubahan akan 
                diberitahukan melalui website atau media komunikasi lainnya. Penggunaan 
                layanan setelah perubahan berarti Anda menerima syarat yang telah diperbarui.
              </p>
            </CardContent>
          </Card>

          <Card className="p-8">
            <CardContent className="p-0">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Kontak dan Informasi</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Untuk pertanyaan atau informasi lebih lanjut mengenai syarat dan ketentuan ini, 
                silakan hubungi kami:
              </p>
              <div className="bg-purple-50 p-6 rounded-lg">
                <div className="space-y-2">
                  <p className="font-semibold text-gray-800">FITRIYANTI STORE</p>
                  <p className="text-gray-600">📧 Email: info@fitriyantistore.com</p>
                  <p className="text-gray-600">📞 Telepon: 085285703526</p>
                  <p className="text-gray-600">📍 Alamat: PONCOL ATAS, Depok, Pancoran Mas, Kota Depok, Jawa Barat</p>
                  <p className="text-gray-600">🕐 Jam Operasional: Senin - Minggu, 08:00 - 21:00</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="p-8 bg-gradient-to-r from-pink-50 to-purple-50">
            <CardContent className="p-0">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Persetujuan</h2>
              <p className="text-gray-600 leading-relaxed">
                Dengan menggunakan layanan FITRIYANTI STORE, Anda menyatakan bahwa telah membaca, 
                memahami, dan menyetujui untuk terikat oleh Syarat dan Ketentuan ini.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                Syarat dan ketentuan ini berlaku efektif sejak tanggal terakhir diperbarui dan 
                akan terus berlaku hingga diubah atau dihentikan.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <Link href="/">
            <Button className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700">
              Kembali ke Beranda
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}