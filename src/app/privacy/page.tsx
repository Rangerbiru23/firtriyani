'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, Shield, Eye, Lock, Database } from 'lucide-react';
import Link from 'next/link';

export default function PrivacyPolicy() {
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
          <div className="w-20 h-20 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Shield className="h-10 w-10 text-pink-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-600">
            Kebijakan Privasi FITRIYANTI STORE
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Terakhir diperbarui: {new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        <div className="space-y-8">
          <Card className="p-8">
            <CardContent className="p-0">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Eye className="h-6 w-6 text-pink-600 mr-3" />
                Pendahuluan
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Selamat datang di FITRIYANTI STORE. Kami sangat menghargai privasi Anda dan berkomitmen untuk melindungi data pribadi Anda. 
                Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi pribadi Anda 
                saat menggunakan layanan kami.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Dengan menggunakan layanan FITRIYANTI STORE, Anda menyetujui praktik-praktik yang dijelaskan dalam kebijakan ini.
              </p>
            </CardContent>
          </Card>

          <Card className="p-8">
            <CardContent className="p-0">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Database className="h-6 w-6 text-pink-600 mr-3" />
                Informasi yang Kami Kumpulkan
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Informasi Pribadi</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Nama lengkap</li>
                    <li>Alamat email</li>
                    <li>Nomor telepon</li>
                    <li>Alamat pengiriman</li>
                    <li>Tanggal lahir</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Informasi Transaksi</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Riwayat pembelian</li>
                    <li>Metode pembayaran</li>
                    <li>Alamat penagihan</li>
                    <li>Informasi pengiriman</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Informasi Teknis</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Alamat IP</li>
                    <li>Jenis browser</li>
                    <li>Perangkat yang digunakan</li>
                    <li>Cookie dan data penelusuran</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="p-8">
            <CardContent className="p-0">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Lock className="h-6 w-6 text-pink-600 mr-3" />
                Penggunaan Informasi
              </h2>
              <div className="space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  Kami menggunakan informasi yang kami kumpulkan untuk:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Memproses dan menyelesaikan transaksi pembelian</li>
                  <li>Menyediakan layanan pelanggan yang lebih baik</li>
                  <li>Mengirimkan informasi produk dan promosi</li>
                  <li>Mempersonalisasi pengalaman berbelanja Anda</li>
                  <li>Meningkatkan kualitas produk dan layanan kami</li>
                  <li>Mencegah aktivitas penipuan dan keamanan</li>
                  <li>Mematuhi kewajiban hukum dan peraturan</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="p-8">
            <CardContent className="p-0">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Berbagi Informasi</h2>
              <div className="space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  Kami tidak menjual, memperdagangkan, atau menyewakan informasi pribadi Anda kepada pihak ketiga. 
                  Kami hanya akan berbagi informasi Anda dalam kondisi berikut:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Dengan persetujuan Anda yang eksplisit</li>
                  <li>Untuk memproses pembayaran dengan mitra pembayaran</li>
                  <li>Untuk pengiriman produk dengan jasa ekspedisi</li>
                  <li>Jika diwajibkan oleh hukum atau peraturan yang berlaku</li>
                  <li>Untuk melindungi hak, properti, atau keselamatan kami atau pelanggan lainnya</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="p-8">
            <CardContent className="p-0">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Keamanan Data</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Kami mengimplementasikan berbagai langkah keamanan untuk melindungi informasi pribadi Anda:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Enkripsi data sensitif</li>
                <li>Akses terbatas ke informasi pribadi</li>
                <li>Monitor keamanan berkelanjutan</li>
                <li>Update sistem keamanan secara berkala</li>
                <li>Training staf tentang keamanan data</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="p-8">
            <CardContent className="p-0">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Hak Anda</h2>
              <div className="space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  Sebagai pengguna, Anda memiliki hak untuk:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Mengakses informasi pribadi yang kami simpan</li>
                  <li>Memperbarui informasi yang tidak akurat</li>
                  <li>Menghapus informasi pribadi Anda</li>
                  <li>Menolak pemasaran langsung</li>
                  <li>Meminta salinan data pribadi Anda</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="p-8">
            <CardContent className="p-0">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Cookie</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Kami menggunakan cookie untuk meningkatkan pengalaman berbelanja Anda:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Cookie esensial untuk fungsi dasar website</li>
                <li>Cookie analitik untuk memahami penggunaan website</li>
                <li>Cookie pemasaran untuk penawaran yang relevan</li>
                <li>Cookie media sosial untuk integrasi platform</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-4">
                Anda dapat mengatur preferensi cookie melalui pengaturan browser Anda.
              </p>
            </CardContent>
          </Card>

          <Card className="p-8">
            <CardContent className="p-0">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Perubahan Kebijakan</h2>
              <p className="text-gray-600 leading-relaxed">
                Kami dapat memperbarui kebijakan privasi ini dari waktu ke waktu. Perubahan akan 
                diberitahukan melalui website atau email Anda. Kami menyarankan Anda untuk 
                secara berkala meninjau kebijakan ini untuk tetap informasikan tentang praktik privasi kami.
              </p>
            </CardContent>
          </Card>

          <Card className="p-8">
            <CardContent className="p-0">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Kontak Kami</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Jika Anda memiliki pertanyaan tentang kebijakan privasi kami atau ingin 
                melaksanakan hak Anda, silakan hubungi kami:
              </p>
              <div className="bg-pink-50 p-6 rounded-lg">
                <div className="space-y-2">
                  <p className="font-semibold text-gray-800">FITRIYANTI STORE</p>
                  <p className="text-gray-600">📧 Email: privacy@fitriyantistore.com</p>
                  <p className="text-gray-600">📞 Telepon: 085285703526</p>
                  <p className="text-gray-600">📍 Alamat: PONCOL ATAS, Depok, Pancoran Mas, Kota Depok, Jawa Barat</p>
                </div>
              </div>
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