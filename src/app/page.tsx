'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Menu, X, Phone, Mail, MapPin, ShoppingBag, Star, Truck, Shield, Heart } from 'lucide-react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50">
      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <img src="/logo.png" alt="FITRIYANTI STORE" className="h-10 w-auto mr-3" />
                <span className="text-xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                  FITRIYANTI STORE
                </span>
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-pink-600 transition-colors">Beranda</a>
              <a href="#products" className="text-gray-700 hover:text-pink-600 transition-colors">Produk</a>
              <a href="#about" className="text-gray-700 hover:text-pink-600 transition-colors">Tentang</a>
              <a href="#contact" className="text-gray-700 hover:text-pink-600 transition-colors">Kontak</a>
              <a href="/privacy" className="text-gray-700 hover:text-pink-600 transition-colors">Privacy</a>
              <a href="/terms" className="text-gray-700 hover:text-pink-600 transition-colors">Terms</a>
              <Button className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700">
                <ShoppingBag className="mr-2 h-4 w-4" />
                Belanja Sekarang
              </Button>
            </div>
            
            <div className="md:hidden flex items-center">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-pink-600">Beranda</a>
              <a href="#products" className="block px-3 py-2 text-gray-700 hover:text-pink-600">Produk</a>
              <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-pink-600">Tentang</a>
              <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-pink-600">Kontak</a>
              <a href="/privacy" className="block px-3 py-2 text-gray-700 hover:text-pink-600">Privacy Policy</a>
              <a href="/terms" className="block px-3 py-2 text-gray-700 hover:text-pink-600">Terms & Conditions</a>
              <Button className="w-full bg-gradient-to-r from-pink-600 to-purple-600">
                <ShoppingBag className="mr-2 h-4 w-4" />
                Belanja Sekarang
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge className="bg-pink-100 text-pink-800 hover:bg-pink-200 w-fit">
                🛍️ Toko Pakaian Terpercaya
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                Temukan Gaya
                <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent block">
                  Terbaik Anda
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                FITRIYANTI STORE - Pilihan tepat untuk kebutuhan fashion Anda. 
                Koleksi pakaian berkualitas dengan harga terjangkau yang 
                membuat Anda tampil percaya diri.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white">
                  <ShoppingBag className="mr-2 h-5 w-5" />
                  Lihat Koleksi
                </Button>
                <Button size="lg" variant="outline" className="border-pink-300 text-pink-600 hover:bg-pink-50">
                  Hubungi Kami
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-purple-400 rounded-3xl transform rotate-3 opacity-20"></div>
              <Card className="relative bg-white rounded-3xl shadow-2xl overflow-hidden">
                <img src="/storefront.png" alt="FITRIYANTI STORE" className="w-full h-full object-cover" />
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="h-8 w-8 text-pink-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Pengiriman Cepat</h3>
              <p className="text-gray-600">Pesanan dikirim dalam 1-2 hari kerja</p>
            </Card>
            
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Kualitas Terjamin</h3>
              <p className="text-gray-600">Produk berkualitas dengan garansi 100%</p>
            </Card>
            
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-pink-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Pelayanan Terbaik</h3>
              <p className="text-gray-600">Customer service ramah dan responsif</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Products Preview Section */}
      <section id="products" className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-200 w-fit mb-4">
              Koleksi Kami
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Produk Unggulan
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Berbagai pilihan pakaian trendy untuk segala usia dan acara
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Pakaian Wanita",
                description: "Gaun, blouse, dan berbagai pakaian wanita modern",
                price: "Mulai dari Rp 50.000",
                rating: 4.8,
                image: "/womens-collection.png"
              },
              {
                title: "Pakaian Pria",
                description: "Kemeja, kaos, dan pakaian kasual pria",
                price: "Mulai dari Rp 45.000",
                rating: 4.7,
                image: "/mens-collection.png"
              },
              {
                title: "Pakaian Anak",
                description: "Pakaian lucu dan nyaman untuk buah hati Anda",
                price: "Mulai dari Rp 35.000",
                rating: 4.9,
                image: "/kids-collection.png"
              }
            ].map((product, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="aspect-square overflow-hidden">
                  <img src={product.image} alt={product.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center mb-2">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600 ml-1">{product.rating}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-pink-600">{product.price}</span>
                    <Button size="sm" className="bg-gradient-to-r from-pink-600 to-purple-600">
                      Lihat Detail
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-pink-100 text-pink-800 hover:bg-pink-200 w-fit mb-4">
                Tentang Kami
              </Badge>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                FITRIYANTI STORE
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Kami adalah toko pakaian eceran yang berkomitmen untuk menyediakan 
                produk fashion berkualitas dengan harga terjangkau. Berlokasi di 
                Depok, kami telah melayani pelanggan dengan sepenuh hati.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Dengan pengalaman bertahun-tahun dalam industri fashion, kami 
                memahami kebutuhan pelanggan akan pakaian yang nyaman, trendy, 
                dan sesuai dengan budget.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-pink-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">100% Produk Original</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-pink-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">Harga Terjangkau</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-pink-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">Model Terkini</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-pink-100 to-purple-100 rounded-3xl flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-6xl mb-4">🛍️</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Kepuasan Pelanggan</h3>
                  <p className="text-gray-600">Adalah prioritas utama kami</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-200 w-fit mb-4">
              Kontak Kami
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Hubungi FITRIYANTI STORE
            </h2>
            <p className="text-xl text-gray-600">
              Siap melayani kebutuhan fashion Anda
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="p-8">
              <h3 className="text-2xl font-semibold mb-6">Informasi Kontak</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-pink-600 mr-3 mt-1" />
                  <div>
                    <p className="font-medium">Alamat</p>
                    <p className="text-gray-600">
                      PONCOL ATAS, Desa/Kelurahan Depok, Kec. Pancoran Mas, 
                      Kota Depok, Provinsi Jawa Barat
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-pink-600 mr-3" />
                  <div>
                    <p className="font-medium">Telepon</p>
                    <p className="text-gray-600">085285703526</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-pink-600 mr-3" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-gray-600">info@fitriyantistore.com</p>
                  </div>
                </div>
              </div>
            </Card>
            
            <Card className="p-8">
              <h3 className="text-2xl font-semibold mb-6">Jam Operasional</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Senin - Jumat</span>
                  <span className="font-medium">08:00 - 20:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Sabtu</span>
                  <span className="font-medium">08:00 - 21:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Minggu</span>
                  <span className="font-medium">09:00 - 19:00</span>
                </div>
              </div>
              <div className="mt-6 p-4 bg-pink-50 rounded-lg">
                <p className="text-sm text-pink-800">
                  📱 Pesan via WhatsApp juga tersedia!
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-pink-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Siap Tampil Lebih Percaya Diri?
          </h2>
          <p className="text-xl text-pink-100 mb-8">
            Temukan koleksi pakaian terbaik hanya di FITRIYANTI STORE
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-pink-600 hover:bg-gray-100">
              <ShoppingBag className="mr-2 h-5 w-5" />
              Belanja Sekarang
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-pink-600">
              <Phone className="mr-2 h-5 w-5" />
              Hubungi Kami
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <img src="/logo.png" alt="FITRIYANTI STORE" className="h-8 w-auto mr-2" />
                <span className="text-lg font-bold">FITRIYANTI STORE</span>
              </div>
              <p className="text-gray-400">
                Toko pakaian terpercaya dengan koleksi terkini dan harga terjangkau.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#home" className="hover:text-white transition-colors">Beranda</a></li>
                <li><a href="#products" className="hover:text-white transition-colors">Produk</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">Tentang</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Kontak</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Layanan</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="/terms" className="hover:text-white transition-colors">Terms & Conditions</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pengiriman</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pengembalian</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Hubungi Kami</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  085285703526
                </li>
                <li className="flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  info@fitriyantistore.com
                </li>
                <li className="flex items-start">
                  <MapPin className="h-4 w-4 mr-2 mt-1" />
                  Depok, Jawa Barat
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 FITRIYANTI STORE. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}