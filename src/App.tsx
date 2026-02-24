import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <div>

      {/* HEADER */}
      <header>
        <nav aria-label="Ana navigasyon">
          <ul>
            <li><a href="#hakkimda">Hakkımda</a></li>
            <li><a href="#projeler">Projeler</a></li>
            <li><a href="#iletisim">İletişim</a></li>
          </ul>
        </nav>
      </header>

      <a href="#main-content" className="skip-link">
        Ana icerige atla
      </a>

      <main id="main-content">
        <section id="hakkimda">
          <h2>Hakkımda</h2>
          <figure>
            <img src="src/assets/profil.jpg"
              alt="Sude Düz'ün vesikalık fotoğrafı"
              width={120} height={120} style={{objectFit: 'cover', borderRadius: '50%'}} />
            <figcaption>Sude Düz</figcaption> 
          </figure>
            <p>Merhaba! Ben Sude Düz. Frontend geliştirme ve UI/UX tasarım konularında çalışıyorum. Web teknolojileriyle projeler üretmeyi seviyorum.</p>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>Vite</li>
            </ul>
        </section>

        <section id="projeler">
            <h2>Projelerim</h2>
            <div className="proje-kartlari">
              <article className="proje-karti">
                <h3>Todo App</h3>
                <p>Basit ve hızlı yapılacaklar uygulaması. Kullanıcı dostu arayüz ve localStorage desteği.</p>
                <ul>
                  <li>JavaScript</li>
                  <li>HTML</li>
                  <li>CSS</li>
                </ul>
                <img src="src/assets/proje2.jpg" alt="Todo App ekran görüntüsü"
                  width={300} height={180} style={{objectFit: 'cover', borderRadius: '8px'}} />
              </article>
            </div>
        </section>

        <section id="iletisim">
          <h2>İletişim</h2>
          <form action="#" method="POST" noValidate>
      <fieldset>
        <legend>Iletisim Formu</legend>

        <div className="form-group">
          <label htmlFor="name">Ad Soyad:</label>
          <input type="text" id="name" name="name" required minLength={2} aria-describedby="name-error" />
          <small id="name-error" className="error-msg" role="alert"></small>
        </div>

        <div className="form-group">
          <label htmlFor="email">E-posta:</label>
          <input type="email" id="email" name="email" required aria-describedby="email-error" />
          <small id="email-error" className="error-msg" role="alert"></small>
        </div>

        <div className="form-group">
          <label htmlFor="subject">Konu:</label>
          <select id="subject" name="subject" required aria-describedby="subject-error" >
            <option value="">-- Seciniz--</option>
            <option value="is">Is Teklifi</option>
            <option value="soru">Soru</option>
            <option value="oneri">Oneri</option>
          </select>
          <small id="subject-error" className="error-msg" role="alert"></small>
        </div>

        <div className="form-group">
          <label htmlFor="message">Mesajiniz:</label>
          <textarea id="message" name="message" rows={5} required minLength={10} aria-describedby="message-error" ></textarea>
          <small id="message-error" className="error-msg" role="alert"></small>
        </div>

        <button type="submit">Gonder</button>
      </fieldset>
    </form>
        </section>

      </main>

      {/* FOOTER */}
      <footer>
        <p>© 2025 Sude Düz. Tüm hakları saklıdır.</p>
        <ul className="social-links">
          <li><a href="https://github.com/sudeduz" target="_blank" rel="noopener noreferrer">GitHub</a></li>
          <li><a href="https://linkedin.com/in/sudeduz" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          <li><a href="mailto:sude@example.com">E-posta</a></li>
        </ul>
      </footer>

    </div>
  );
}

export default App;

