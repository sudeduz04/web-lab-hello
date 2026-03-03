# CSS Kararları

## 1. Breakpoint Seçimi
640px ve 1024px breakpoint'lerini kullandım çünkü 640px altı mobil, 640-1024px arası tablet ve 1024px üzeri masaüstü için en yaygın aralıkları temsil ediyor. İçerik bu noktalarda düzen değiştiriyor: navigasyon ve kartlar mobilde dikey, masaüstünde yatay veya grid oluyor.

## 2. Layout Tercihleri
Header ve navigasyon için Flexbox kullandım çünkü yatayda ve mobilde dikeyde kolay hizalama sağlıyor. Proje kartları için CSS Grid tercih ettim; çünkü grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)) ile kartlar ekrana göre otomatik ve esnek diziliyor. auto-fit kullandım, çünkü boş alanları da doldurmasını istedim.

## 3. Design Tokens
Renk paletinde modern ve erişilebilir tonlar seçtim; açık ve koyu tema desteği için hem light hem dark değişkenler tanımladım. Spacing skalasını 4px katlarıyla belirledim, böylece tutarlı boşluklar sağladım. Fluid typography için clamp() ile min, ideal ve max değerler belirleyerek yazı boyutlarının ekrana göre akıcı değişmesini sağladım.

## 4. Responsive Stratejiler
Mobile-first yaklaşımıyla önce mobil tasarladım, sonra media query ile tablet ve masaüstüne geçiş yaptım. Navigasyon, grid ve kartlar breakpoint'lerde yön ve dizilim değiştiriyor. Görsel boyutlarını max-width: 100% ve object-fit ile yöneterek her ekranda uyumlu olmasını sağladım.
