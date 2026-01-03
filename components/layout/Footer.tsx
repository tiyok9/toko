import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t bg-white text-sm text-gray-700 md:mt-32 mt-24">
      {/* TOP */}
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-10 sm:grid-cols-3">
          {/* BANTUAN */}
          <div>
            <h4 className="mb-4 font-semibold text-black">Bantuan</h4>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="hover:underline">
                  Pertanyaan yang sering diajukan
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Memproses pengembalian
                </Link>
              </li>
            </ul>
          </div>

          {/* PERUSAHAAN */}
          <div>
            <h4 className="mb-4 font-semibold text-black">Perusahaan</h4>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="hover:underline">
                  Tentang kami
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Karier
                </Link>
              </li>
            </ul>
          </div>

          {/* MEDIA SOSIAL */}
          <div>
            <h4 className="mb-4 font-semibold text-black">Media sosial</h4>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="hover:underline">
                  Tiktok
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Instagram
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Facebook
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  X
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Youtube
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Pinterest
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* MIDDLE */}
      <div className="border-t">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-4 text-xs">
          <div className="flex flex-wrap gap-4">
            <Link href="#" className="hover:underline">
              Preferensi cookie
            </Link>
            <Link href="#" className="hover:underline">
              Kebijakan privasi
            </Link>
            <Link href="#" className="hover:underline">
              Syarat pembelian
            </Link>
            <Link href="#" className="hover:underline">
              Kebijakan cookie
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">🌐 Indonesia</span>
            <span>Indonesia</span>
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="border-t">
        <div className="mx-auto max-w-7xl px-6 py-6 text-center text-xs leading-relaxed text-gray-600">
          <p>
            Layanan Pengaduan Konsumen, Direktorat Jenderal Perlindungan
            Konsumen dan Tertib Niaga, Kementerian Perdagangan Republik
            Indonesia,
          </p>
          <p>0853-1111-1010 (WhatsApp)</p>
        </div>
      </div>
    </footer>
  );
}
