import { useState } from 'react';
import Grainient from './components/Grainient';

const WA = '6287755867747'; // ganti dengan nomor WhatsApp Pentjoki

const products = [
  { t: 'Makalah & Esai', d: 'Membuat dan menyempurnakan makalah dengan format dan penulisan yang ditentukan.', p: 'Mulai Rp49rb' },
  { t: 'Laporan PKL', d: 'Menyusun dan merapikan laporan berdasarkan data, serta format yang tertata rapi.', p: 'Mulai Rp69rb' },
  { t: 'Coding & Website', d: 'Tugas pemrograman, basis data, hingga aplikasi web sederhana.', p: 'Mulai Rp99rb' },
  { t: 'PPT & Desain', d: 'Slide presentasi bersih dan konsisten, siap dibawakan.', p: 'Mulai Rp29rb' },
  { t: 'Tugas Tertulis', d: 'Menyelesaikan tugas tertulis dengan berbentuk fisik.', p: 'Mulai Rp7rb' },
  { t: 'Joki Game??', d: 'Mencapai target rank game dengan cepat dengan menJoki kan ke layanan kami.', p: 'Mulai Rp2rb' },
];

const plans = [
  { n: 'Reguler', pr: '9rb', u: '/Lembar', f: ['Pengerjaan 3–5 hari', '1x revisi gratis', 'Cek kemiripan dasar', 'Chat via WhatsApp'] },
  { n: 'Ekspres', pr: '15rb', u: '/Lembar', f: ['Pengerjaan 24 jam', '3x revisi gratis', 'Prioritas antrean', 'Update progres berkala'], hot: true },
  { n: 'Premium', pr: '250rb', u: '/proyek', f: ['Proyek besar & berkelanjutan', 'Revisi tanpa batas', 'Tim khusus per proyek', 'Konsultasi langsung'] },
];

const values = [
  ['Rahasia terjaga', 'Data dan identitas kamu hanya kami yang tahu.'],
  ['Tepat waktu', 'Deadline dicatat di awal dan kami kejar sampai selesai.'],
  ['Dikerjakan ahli', 'Setiap tugas dipegang kontributor yang paham bidangnya.'],
];

export default function App() {
  const [f, setF] = useState({ nama: '', jenis: products[0].t, pesan: '' });
  const set = k => e => setF({ ...f, [k]: e.target.value });
  const send = e => {
    e.preventDefault();
    const text = `Halo PentJoki, saya ${f.nama}. Saya butuh: ${f.jenis}. ${f.pesan}`;
    window.open(`https://wa.me/${WA}?text=${encodeURIComponent(text)}`, '_blank', 'noopener');
  };

  return (
    <>
      <div className="bg" aria-hidden="true">
        <Grainient
          color1="#000000" color2="#3B82F6" color3="#f2e4ff"
          timeSpeed={0.85} colorBalance={0.0} warpStrength={1.0} warpFrequency={5.0}
          warpSpeed={2.0} warpAmplitude={50.0} blendAngle={0.0} blendSoftness={0.05}
          rotationAmount={500.0} noiseScale={2.0} grainAmount={0.1} grainScale={2.0}
          grainAnimated={false} contrast={1.5} gamma={1.0} saturation={1.0}
          centerX={0.0} centerY={0.0} zoom={0.9}
        />
      </div>

      <header className="nav">
        <a href="#top" className="logo">
          <img src="/logo.PNG" alt="pentjoki" />
          </a>
        <nav>
          <a href="#about">Tentang</a>
          <a href="#etalase">Etalase</a>
          <a href="#pricing">Harga</a>
          <a href="#contact" className="btn sm">Hubungi kami</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <p className="pill">Jasa pengerjaan tugas • Respon &lt; 10 menit</p>
          <h1>Introduce, PentJoki</h1>
          <p className="lead">Kami mengerjakan makalah, laporan, olah data, hingga coding dengan rapi, tepat waktu, dan sepenuhnya rahasia.</p>
          <div className="row">
            <a href="#contact" className="btn">Pesan sekarang</a>
            <a href="#etalase" className="btn ghost">Lihat layanan</a>
          </div>
        </section>

        <section id="about" className="sec">
          <div className="glass about">
            <div>
              <h2>Mengapa harus PentJoki?</h2>
              <p>PentJoki menyediakan layanan pengerjaan berbagai macam departemen tugas tanpa harus memikirkan dan stres akan tugas. Kami dengan senang hati untuk melayani dan memberikan hasil yang maksimal demi kepuasan pelanggan. Dan juga dengan menggunakan layanan PentJoki sama halnya mendukung hasil karya Anak Bangsa Indonesia dan bangga menggunakan Produk Lokal. Dan juga ada beberapa alasan mengapa harus menggunakan layanan PentJoki seperti berikut:</p>
            </div>
            <ul>
              {values.map(([a, b]) => (
                <li key={a}><strong>{a}</strong><span>{b}</span></li>
              ))}
            </ul>
          </div>
        </section>

        <section id="etalase" className="sec">
          <h2>Etalase layanan</h2>
          <p className="sub">Pilih jenis tugas, kami urus sisanya.</p>
          <div className="grid">
            {products.map(p => (
              <article className="glass card" key={p.t}>
                <h3>{p.t}</h3>
                <p>{p.d}</p>
                <span className="price">{p.p}</span>
              </article>
            ))}
          </div>
        </section>

        <section id="pricing" className="sec">
          <h2>Harga transparan</h2>
          <p className="sub">Tanpa biaya tersembunyi. Harga final disepakati sebelum dikerjakan.</p>
          <div className="grid three">
            {plans.map(p => (
              <article className={`glass plan ${p.hot ? 'hot' : ''}`} key={p.n}>
                {p.hot && <span className="badge">Paling dipilih</span>}
                <h3>{p.n}</h3>
                <div className="amt">Rp{p.pr}<small>{p.u}</small></div>
                <ul>{p.f.map(x => <li key={x}>{x}</li>)}</ul>
                <a href="#contact" className={`btn ${p.hot ? '' : 'ghost'}`}>Pilih {p.n}</a>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="sec">
          <div className="glass contact">
            <div>
              <h2>Hubungi kami</h2>
              <p>Ceritakan tugasmu. Kami balas dengan estimasi harga dan waktu pengerjaan.</p>
              <ul className="info">
                <li>WhatsApp: +62 877-5586-7747</li>
                <li>Email: iwakbale123098@gmail.com</li>
                <li>Instagram: @pentJoki</li>
                <li>Online setiap hari, 08.00–23.00 WIB</li>
              </ul>
            </div>
            <form onSubmit={send}>
              <label>Nama
                <input required value={f.nama} onChange={set('nama')} placeholder="Nama kamu" />
              </label>
              <label>Jenis tugas
                <select value={f.jenis} onChange={set('jenis')}>
                  {products.map(p => <option key={p.t}>{p.t}</option>)}
                </select>
              </label>
              <label>Detail & deadline
                <textarea rows="4" required value={f.pesan} onChange={set('pesan')} placeholder="Mata kuliah, jumlah halaman, deadline…, [Reguler/Express/Premium]" />
              </label>
              <button className="btn" type="submit">Kirim lewat WhatsApp</button>
            </form>
          </div>
        </section>
      </main>

      <footer className="foot">
        <div>
          <a href="#top" className="logo">
          <img src="/logo.PNG" alt="pentjoki" />
          </a>
        </div>
        <nav>
          <a href="#about">Tentang</a>
          <a href="#etalase">Etalase</a>
          <a href="#pricing">Harga</a>
          <a href="#contact">Kontak</a>
        </nav>
        <small>© {new Date().getFullYear()} PentJoki. Seluruh hak cipta dilindungi.</small>
      </footer>
    </>
  );
}
