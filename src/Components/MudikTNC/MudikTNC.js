import React, { Component } from 'react'
import ClassNames from 'classnames'
import PropTypes from 'prop-types'

import BottomSheetV2 from 'unify-react-mobile/build/BottomSheetV2'

class MudikTNC extends Component {
  static propTypes = {
    display: PropTypes.bool,
    toggleDisplay: PropTypes.func,
    active: PropTypes.number,
    handleDetail: PropTypes.func,
  }

  render() {
    const {
      display, toggleDisplay, active, handleDetail,
    } = this.props

    return (
      /* eslint-disable */
      <BottomSheetV2
        className="ft-recharge-unify__bottomsheet"
        full
        withClose
        title="Syarat dan Ketentuan"
        onClose={toggleDisplay}
        display={display}
      >
        {/* eslint-disable */}
        <div className="tnc__content--wrapper">
          <p className="desc">
            Syarat dan Ketentuan layanan Asuransi Perjalanan merupakan bagian dari Syarat dan Ketentuan Situs/Aplikasi
            Tokopedia. Penggunaan layanan Asuransi Perjalanan tunduk pada Syarat dan Ketentuan Situs/Aplikasi, Kebijakan
            Privasi, serta Syarat dan Ketentuan yang tertulis di bawah ini. Pengguna disarankan membaca dengan seksama
            karena dapat berdampak kepada hak dan kewajiban Pengguna secara hukum.
          </p>
          <p className="desc">
            Dengan mendaftar dan/atau menggunakan situs <a href="https://www.tokopedia.com/">www.tokopedia.com</a>, maka
            Pengguna dianggap telah membaca, mengerti, memahami dan menyetujui semua isi dalam Syarat dan Ketentuan.
            Syarat dan Ketentuan ini merupakan bentuk kesepakatan yang dituangkan dalam sebuah perjanjian yang sah
            antara Pengguna dengan PT Tokopedia. Jika Pengguna tidak menyetujui salah satu, sebagian, atau seluruh isi
            Syarat dan Ketentuan, maka Pengguna tidak diperkenankan menggunakan layanan di{" "}
            <a href="https://www.tokopedia.com/">www.tokopedia.com</a>.
          </p>

          <ol type="A" className="list">
            <li>
              <p className="content__title" onClick={() => handleDetail(1)}>
                Definisi
              </p>
              <ol
                type="1"
                className={ClassNames("content__desc", {
                  active: active === 1
                })}
              >
                <li>
                  <strong>Tokopedia</strong> adalah PT Tokopedia dan seluruh afiliasi atau anak perusahaannya, suatu
                  perseroan terbatas yang menjalankan kegiatan usaha jasa web portal www.tokopedia.com, yakni situs
                  pencarian toko dan Barang yang dijual oleh penjual terdaftar.
                </li>
                <li>
                  <strong>Situs/Aplikasi</strong> adalah situs{" "}
                  <a href="https://www.tokopedia.com/">www.tokopedia.com</a> milik Tokopedia yang dapat diakses melalui
                  desktop site dan/atau aplikasi yang berbasis Android atau IOS.
                </li>
                <li>
                  <strong>Premiro</strong> adalah PT Mitra Ibisnis Terapan, suatu perseroan terbatas yang telah disahkan
                  oleh Otoritas Jasa Keuangan Indonesia untuk menyediakan layanan pialang asuransi sesuai dengan hukum
                  dan peraturan yang berlaku.
                </li>
                <li>
                  <strong>Tokio Marine</strong> adalah PT Asuransi Tokio Marine, suatu perseroan terbatas yang bergerak
                  dalam jasa pertanggungan atau pengelolaan risiko, pertanggungan ulang risiko yang memberikan
                  penggantian pada tertanggung atau Pemegang Polis atas suatu risiko.
                </li>
                <li>
                  <strong>Mitra</strong> adalah Premiro dan Tokio Marine, pihak yang menyediakan layanan Asuransi
                  Perjalanan melalui Situs/Aplikasi.
                </li>
                <li>
                  <strong>Pengguna</strong> adalah pihak yang menggunakan layanan Tokopedia, termasuk namun tidak
                  terbatas pada Pembeli, Penjual maupun pihak lain yang sekedar berkunjung ke Situs/Aplikasi, dan dalam
                  hal ini adalah pihak yang telah membeli dan menggunakan Asuransi Perjalanan.
                </li>
                <li>
                  <strong>Asuransi Perjalanan</strong> adalah produk asuransi yang disediakan dan dipasarkan oleh Mitra
                  melalui Situs/Aplikasi.
                </li>
                <li>
                  <strong>Klaim</strong> adalah permintaan resmi dari Pengguna kepada Tokio Marine untuk melakukan
                  pembayaran atas kerugian dan/atau risiko yang dialami Pengguna sesuai dengan syarat dan ketentuan yang
                  dijamin dalam Polis Asuransi.
                </li>
                <li>
                  <strong>Premi</strong> adalah biaya yang harus dibayarkan Pengguna kepada Tokio Marine atas Asuransi
                  Perjalanan yang dibeli melalui Situs/Aplikasi sesuai dengan Syarat dan Ketentuan ini.
                </li>
                <li>
                  <strong>Polis Asuransi</strong> adalah perjanjian asuransi, termasuk perubahan-perubahannya, yang
                  berisikan syarat-syarat dan ketentuan-ketentuan dari Asuransi Perjalanan dan merupakan dasar hubungan
                  hukum antara Pengguna dengan Tokio Marine.
                </li>
                <li>
                  <strong>Periode Pertanggungan</strong> adalah masa berlaku pertanggungan atas Asuransi Perjalanan
                  sesuai dengan jangka waktu yang diberikan oleh Tokio Marine.
                </li>
                <li>
                  <strong>Ketentuan Polis</strong> adalah bagian dari Polis Asuransi yang berisi ketentuan, kondisi dan
                  persyaratan suatu pertanggungan/jaminan asuransi, yang dikeluarkan oleh Tokio Marine.
                </li>
                <li>
                  <strong>Ketentuan Situs</strong> adalah Syarat dan Ketentuan Situs/Aplikasi, Kebijakan Privasi, Syarat
                  dan Ketentuan ini dan setiap syarat dan ketentuan lain yang dapat berlaku untuk atau sehubungan dengan
                  penggunaan Situs/Aplikasi dan seluruh fitur yang terdapat di dalamnya.
                </li>
                <li>
                  <strong>Syarat dan Ketentuan</strong> adalah Syarat dan Ketentuan untuk menggunakan layanan Asuransi
                  Perjalanan.
                </li>
              </ol>
            </li>

            <li>
              <p className="content__title" onClick={() => handleDetail(2)}>
                Umum
              </p>

              <ol
                type="1"
                className={ClassNames("content__desc", {
                  active: active === 2
                })}
              >
                <li>
                  Tokopedia tidak melakukan pengelolaan terhadap Premi dan hanya berperan sebagai penyedia platform yang
                  menghubungkan antara Pengguna dengan Mitra melalui Situs/Aplikasi.
                </li>
                <li>
                  1 (satu) akun Pengguna hanya dapat membeli Asuransi Perjalanan dengan maksimal 5 (lima) kali pembelian
                  untuk 1 (satu) penerima perlindungan Asuransi Perjalanan.
                </li>
                <li>
                  Dengan menggunakan layanan Asuransi Perjalanan, Pengguna akan mendapatkan manfaat asuransi yang dapat
                  dilihat pada{" "}
                  <a href="https://www.tokopedia.com/help/article/a-1819?refid=t-0132">FAQ Asuransi Perjalanan</a>.
                </li>
                <li>
                  Dengan menggunakan layanan Asuransi Perjalanan, Pengguna memberikan wewenang kepada Tokopedia untuk
                  memberikan informasi yang tertera di formulir daring, atau informasi lainnya jika diminta, kepada
                  Mitra.
                </li>
                <li>
                  Tokopedia tidak memiliki kewajiban dan tanggung jawab apapun terkait dengan pembelian Asuransi
                  Perjalanan oleh Pengguna.
                </li>
                <li>
                  Tokopedia berhak, tanpa pemberitahuan sebelumnya, melakukan tindakan-tindakan yang diperlukan apabila
                  ditemukan tindakan kecurangan dari Pengguna.
                </li>
                <li>
                  Manfaat dari Asuransi Perjalanan akan berlaku efektif sejak tanggal yang ditentukan oleh Pengguna pada
                  saat pembelian Asuransi Perjalanan dan secara otomatis berakhir sesuai dengan Periode Pertanggungan.
                </li>
                <li>
                  Penentuan tanggal efektif dapat dilakukan paling lambat 3 (tiga) bulan sejak tanggal pembayaran atas
                  pembelian Asuransi Perjalanan telah terverifikasi.
                </li>
                <li>
                  Dengan menggunakan layanan Asuransi Perjalanan, Pengguna setuju dengan syarat dan ketentuan yang telah
                  ditetapkan oleh Mitra, termasuk namun tidak terbatas pada menghormati keputusan Mitra.
                </li>
                <li>
                  Pengguna disarankan untuk membaca dengan seksama semua penjelasan tentang jaminan dan pengecualian
                  yang terkandung dalam Ketentuan Polis.
                </li>
                <li>
                  Syarat dan Ketentuan ini dapat diubah dan/atau diperbaharui dari waktu ke waktu, Tokopedia menyarankan
                  agar Pengguna membaca secara seksama dan memeriksa Syarat dan Ketentuan ini dari waktu ke waktu untuk
                  mengetahui perubahan apapun, dengan mengakses Situs/Aplikasi, maka dianggap telah membaca dan
                  menyetujui Syarat dan Ketentuan ini.
                </li>
              </ol>
            </li>

            <li>
              <p className="content__title" onClick={() => handleDetail(3)}>
                Penggunaan Data
              </p>

              <ol
                type="1"
                className={ClassNames("content__desc", {
                  active: active === 3
                })}
              >
                <li>
                  Dengan menggunakan Asuransi Perjalanan, Pengguna memberi wewenang kepada Tokopedia untuk menyimpan
                  informasi miliknya dan/atau data terkait penggunaan Asuransi Perjalanan dalam sistem Tokopedia.
                </li>
                <li>
                  Tokopedia memiliki kewenangan untuk menolak atau menghapus secara sebagian maupun keseluruhan dari
                  profil Pengguna dan data yang relevan yang dianggap melanggar Ketentuan Situs dan/atau peraturan hukum
                  yang berlaku.
                </li>
                <li>
                  Penggunaan data Pengguna sehubungan dengan Asuransi Perjalanan akan tunduk pada Kebijakan Privasi
                  Tokopedia.
                </li>
              </ol>
            </li>

            <li>
              <p className="content__title" onClick={() => handleDetail(4)}>
                Premi dan Klaim
              </p>

              <ol
                type="1"
                className={ClassNames("content__desc", {
                  active: active === 4
                })}
              >
                <li>
                  Premi yang sudah dibayarkan dan diteruskan kepada Mitra tidak dapat dikembalikan oleh Tokopedia dan
                  Tokopedia tidak dapat memfasilitasi pengembalian Premi oleh Mitra.
                </li>
                <li>
                  Pengelolaan Premi, termasuk namun tidak terbatas pada penerimaan pengajuan permohonan Asuransi
                  Perjalanan, penerimaan Premi, dan hal-hal terkait lainnya, merupakan kewenangan dan dilakukan oleh
                  Mitra.
                </li>
                <li>
                  Tokopedia tidak melakukan pengelolaan terhadap Premi dan hanya berperan sebagai perantara antara
                  Pengguna dengan Mitra melalui Situs/Aplikasi.
                </li>
                <li>
                  Dengan menggunakan layanan Asuransi Perjalanan, Pengguna memahami dan menyetujui bahwa Tokopedia akan
                  meneruskan pembayaran Premi Pengguna kepada Tokio Marine melalui Premiro.
                </li>
                <li>
                  Jangka waktu Periode Pertanggungan yang diberikan oleh Tokio Marine adalah selama 20 (dua puluh) hari
                  kalender sejak tanggal yang dipilih oleh Pengguna.
                </li>
                <li>
                  Dengan menggunakan layanan Asuransi Perjalanan, Pengguna setuju untuk mengajukan Klaim kepada Mitra
                  melalui prosedur yang dapat dilihat{" "}
                  <a href="https://www.tokopedia.com/help/article/a-1819?refid=t-0132">disini</a>.
                </li>
                <li>
                  Pengajuan Klaim harus diajukan oleh Pengguna disertai dokumen dan/atau bukti lainnya (dapat dilihat{" "}
                  <a href="https://tokopedia-upload.s3.ap-southeast-1.amazonaws.com/insuretech/Premiro.pdf">disini</a>)
                  untuk mempermudah proses verifikasi Klaim. Segala biaya yang timbul untuk mendapatkan dokumen dan/atau
                  bukti tersebut merupakan tanggung jawab Pengguna.
                </li>
              </ol>
            </li>
          </ol>
        </div>
        {/* eslint-enable */}
      </BottomSheetV2>
      /* eslint-enable */
    )
  }
}

export default MudikTNC
