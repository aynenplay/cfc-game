/* ═══════════════════════════════════════════════════════════════════
   CITY SOCCER CLUB — İNGİLİZCE SÖZLÜK  (en)
   
   Anahtar = oyunda geçen Türkçe metnin BİREBİR kendisi.
   Burada olmayan her şey (oyuncu adı, takım adı, sohbet) olduğu gibi kalır.

   Bu dosya index.html tarafından, YALNIZCA dil İngilizce ise indirilir.
   Türkçe oynayan oyuncu bu dosyayı hiç indirmez.

   Güncelleme yaparken: index.html içindeki _i18nSozlukSurum değerini de
   artır, yoksa tarayıcı eski kopyayı kullanmaya devam eder.
   ═══════════════════════════════════════════════════════════════════ */
window.I18N = window.I18N || {};
window.I18N.en = window.I18N.en || {};

/* ── 1. dalga ─────────────────────────────────────────── */
Object.assign(window.I18N.en, {
// ── Gezinme / genel eylemler ──
'Kapat':'Close','Geri':'Back','Geri dön':'Go back','Ana sayfaya dön':'Back to home',
'Ana menü':'Main menu','Ana Menü':'Main Menu','🏠 Ana Menüye Dön':'🏠 Back to Main Menu',
'İptal':'Cancel','Vazgeç':'Cancel','Tamam':'OK','Evet':'Yes','Hayır':'No','Sil':'Delete','SİL':'DELETE',
'Kaydet':'Save','Kaydet ✓':'Save ✓','Gönder':'Send','Seç':'Select','Seçin...':'Select...','Seçim':'Selection',
'Kaldır':'Remove','Devam Et →':'Continue →','Başlat':'Start','Çıkış':'Log out','Çıkış Yap':'Log out',
'Giriş Yap':'Log in','Kayıt Ol':'Sign up','Menü':'Menu','Ayarlar':'Settings','Paylaş':'Share',
'Beğen':'Like','Beğenme':'Unlike','Yanıtla...':'Reply...','Tümü':'All','Tümü ›':'All ›',
'Listeye Geri Dön':'Back to list','Evet, Geri Al':'Yes, undo','Değiştir ✓':'Change ✓',
'Geliştir ✓':'Upgrade ✓','Satın Al':'Buy','Satın Al ✓':'Buy ✓','💎 Satın Al':'💎 Buy',
'Yükleniyor…':'Loading…','Yükleniyor...':'Loading...','⏳ Yükleniyor…':'⏳ Loading…','⏳ Yükleniyor...':'⏳ Loading...',
'Aranıyor…':'Searching…','Bağlantı yok':'No connection','Sunucu hatası:':'Server error:',
'Veri okunamadı':'Could not read data','Veri yüklenemedi.':'Could not load data.',
'Boş':'Empty','Yeni':'New','Detay':'Details','Toplam':'Total','Süre':'Duration','Saat':'Time',
'Sıra':'Rank','Sıralama':'Standings','Sıralama modları':'Ranking modes','Sıralama yükleniyor…':'Loading rankings…',

// ── Ana menü sekmeleri ──
'ETKİNLİK':'EVENTS','SONUÇLAR':'RESULTS','LİGLER':'LEAGUES','ARŞİV':'ARCHIVE','SAHNESİ':'STAGE',
'HIZLI ERİŞİM':'QUICK ACCESS','Eğlence':'Entertainment','Mağaza':'Shop','Cüzdan':'Wallet',
'Etkinlik Akışı':'Activity Feed','Avrupa Sahnesi':'European Stage','AVRUPA SAHNESİ':'EUROPEAN STAGE',
'Takımım':'My Team','Oyuncum':'My Player','Kariyer':'Career','Gelen Kutusu':'Inbox','Bildirim':'Notification',

// ── Maç ──
'Maç':'Match','MAÇ':'MATCH','Maçlar':'Matches','Maç Bitti':'Match Over','MAÇ BİTTİ':'MATCH OVER',
'BİTTİ':'ENDED','Maçı İzle':'Watch Match','Maça Git':'Go to Match','▶️ Maça Git':'▶️ Go to Match',
'Maçı tam ekranda izle':'Watch match fullscreen','Maç henüz başlamadı…':'Match has not started yet…',
'Maçta gol atılmadı':'No goals scored','Maç eşitlikle bitti':'Match ended in a draw',
'Henüz maç oynanmadı':'No matches played yet','Bekleyen maç yok':'No pending matches',
'Maçın Adamı':'Man of the Match','Sahanın Adamı':'Man of the Match',
'MAÇ İÇİ DEĞİŞİKLİKLER':'IN-MATCH SUBSTITUTIONS','Maç Kadrosundan Çıkar':'Remove from matchday squad',
'Maç kadrosundan çıkar':'Remove from matchday squad','Canlı izleyici sayısı':'Live viewers',
'⏳ DEVAM EDİYOR':'⏳ IN PROGRESS','Henüz önemli olay yok...':'No key events yet...',
'PENALTI KAÇTI!':'PENALTY MISSED!','Penaltı Kurtarma':'Penalty Save','Penaltılar':'Penalties',
'UZATMA':'EXTRA TIME','PENALTILAR':'PENALTIES','turu geçti':'advanced',
'Maç tamamlandı':'Match completed','Devam ediyor':'In progress','Goller':'Goals',

// ── Lig / turnuva ──
'Lig':'League','Ligi':'League','Lig Maçı':'League Match','⚽ Lig':'⚽ League',
'Süper Lig':'Premier League','Türkiye Süper Ligi':'Turkish Premier League',
'1. Lig':'2nd Division','2. Lig':'3rd Division','3. Lig':'4th Division',
'4. Lig':'5th Division','5. Lig':'6th Division','6. Lig':'7th Division',
'Turnuva':'Tournament','🏆 Turnuva':'🏆 Tournament','Kupa':'Cup','Tüm kupalar':'All trophies',
'Henüz kupa kazanılmadı':'No trophies won yet','ŞAMPİYON':'CHAMPION','Şampiyon':'Champion',
'Grup Aşaması':'Group Stage','Gruplar hazırlanıyor':'Preparing groups',
'Eşleşmeler hazırlanıyor':'Preparing fixtures','Bracket hazırlanıyor':'Preparing bracket',
'Çeyrek Final':'Quarter-Final','Yarı Final':'Semi-Final','Final':'Final',
'Çeyrek Final - 1':'Quarter-Final - 1','Çeyrek Final - 2':'Quarter-Final - 2',
'Yarı Final - 1':'Semi-Final - 1','Yarı Final - 2':'Semi-Final - 2',
'Son 16':'Round of 16','Son 32':'Round of 32',
'Son 16 - 1. Maç':'Round of 16 - Leg 1','Son 16 - 2. Maç':'Round of 16 - Leg 2',
'Son 32 - 1. Maç':'Round of 32 - Leg 1','Son 32 - 2. Maç':'Round of 32 - Leg 2',
'Grup 1. Maç':'Group Matchday 1','Grup 2. Maç':'Group Matchday 2','Grup 3. Maç':'Group Matchday 3',
'Grup 4. Maç':'Group Matchday 4','Grup 5. Maç':'Group Matchday 5',
'Hazırlık':'Friendly','Hazırlık Maçı':'Friendly Match','⚽ Hazırlık Maçı':'⚽ Friendly Match',
'Hazırlık Maçları':'Friendly Matches','Fikstür':'Fixtures','Fikstür ›':'Fixtures ›',
'Puan':'Points','Takım Puanı':'Team Points','Klasman':'Standings',
'1-4 ⬆️ Üst Lige Yükselme':'1-4 ⬆️ Promotion','13-16 ⬇️ Alt Lige Düşme':'13-16 ⬇️ Relegation',
'13-16 ⬇️ Küme Düşme':'13-16 ⬇️ Relegation','5-6. Sıra: Elenir':'5th-6th: Eliminated',
'Lig geçmişi':'League history','Avrupa geçmişi':'European history','Avrupa kupası':'European cup',
'Sezon Liderleri':'Season Leaders','Haftanın Yıldızı':'Player of the Week',
'HAFTALIK YARIŞ':'WEEKLY RACE','Antrenman Yıldızı':'Training Star',

// ── Takım ──
'Takım':'Team','Takımlar':'Teams','takım':'team','Takıma Katıl':'Join Team','Takım Bul ›':'Find Team ›',
'Takımdan Ayrıl':'Leave Team','Takımı Sat':'Sell Team','Takımı Satışa Çıkar':'List Team for Sale',
'Takım Satın Al?':'Buy Team?','Takım bulunamadı.':'Team not found.','Takımsız':'No team',
'Takım menüsü':'Team menu','Takım Gücü':'Team Strength','Ort. Güç':'Avg. Rating',
'Takım Kasası':'Team Treasury','Takım Kasası\'nı aç':'Open Team Treasury','Kasa':'Treasury',
'Kasa Yetersiz':'Insufficient funds','Bütçe':'Budget','Bağış':'Donation','Kazanç':'Earnings',
'Takım Devralma Sermayesi':'Team Takeover Capital','Senin takımın':'Your team',
'⚠️ Bu başkasının takımı.':'⚠️ This is someone else\'s team.','Takıma mesaj yaz...':'Message the team...',
'Tesis':'Facilities','Tesis Gelişimi':'Facility Development','Tesis gelişim bilgisi':'Facility development info',

// ── Kadro / mevkiler ──
'Kadro':'Squad','Kadro Dolu':'Squad Full','Kadro Dışı':'Not in squad','Kadrodan Çıkar':'Remove from squad',
'Kadrodan çıkar':'Remove from squad','Kadro yükleniyor…':'Loading squad…','İlk 11':'Starting XI',
'Yedek':'Substitute','Yedekler':'Substitutes','Diziliş':'Formation','Dizilişi kaydet':'Save formation',
'📋 Formasyon Seç':'📋 Choose Formation','Oyuncu':'Player','Oyuncular':'Players',
'Oyuncu bulunamadı.':'No players found.','Oyuncu işlemleri':'Player actions',
'Oyuncu veya mevki ara...':'Search player or position...','Kullanıcı ara':'Search user',
'Kaleci':'Goalkeeper','Defans':'Defence','Orta Saha':'Midfield','Forvet':'Forward',
'Sağ Bek':'Right Back','Sol Bek':'Left Back','Stoper':'Centre Back',
'Sağ Kanat':'Right Wing','Sol Kanat':'Left Wing','Sağ Forvet':'Right Forward','Sol Forvet':'Left Forward',
'Forvet Arkası':'Attacking Midfielder','Ön Libero':'Defensive Midfielder',
'Kaptan':'Captain','👑 Kaptan':'👑 Captain','⭐ Yrd. Kaptan':'⭐ Vice-Captain','Kaptanı':'Captain of',
'Kaptan Yap':'Make Captain','Kaptan Yetkileri':'Captain Powers','Kaptan kovulamaz.':'The captain cannot be removed.',
'Kendini kovamazsın.':'You cannot remove yourself.','Senin Rolün':'Your Role','Üye':'Member',
'Başkan':'President','Koç':'Coach','Kullanıcı':'User','Kullanıcı Adı':'Username',

// ── Oyuncu durumu ──
'Sakat':'Injured','Sakatlık iyileşme süresi':'Injury recovery time','Cezalı':'Suspended',
'Sarı Kart':'Yellow Card','Sarı kart':'Yellow card','Sarı':'Yellow',
'Kırmızı Kart':'Red Card','Kırmızı kart':'Red card','Kırmızı':'Red',
'Kırmızı kart — atıldı':'Red card — sent off','4 sarı':'4 yellows',
'Sezon sarı kart sayacı':'Season yellow card count','Piyasa Değeri':'Market Value',
'Sözleşmeli':'Under contract','Sözleşmesiz':'No contract','Sözleşme Süresi':'Contract Length',
'📋 Sözleşme Yönetimi':'📋 Contract Management','Sezon Maaşı':'Season Salary','Mevcut Maaş':'Current Salary',
'Milli Takım':'National Team','A Milli Takım':'Senior National Team','Milli takım menüsü':'National team menu',
'Milli Takımdan Çıkart':'Remove from National Team','✕ Milli Takımdan Çıkart':'✕ Remove from National Team',
'Milli takımdan çıkar':'Remove from national team','Milli Takım Oyuncusu':'International',
'Çevrimiçi':'Online','Doğrulanmış':'Verified','Satışta':'For sale','Ücretsiz':'Free',

// ── Yetenekler ──
'Kaleci Gücü':'Goalkeeping','Bire Bir Kurtarış':'One-on-One Save','Müdahale':'Tackling',
'Top Çalma':'Interception','Kısa Pas':'Short Passing','Oyun Görüşü':'Vision',
'Tempo Yönetimi':'Tempo Control','Soğukkanlılık':'Composure','Dayanıklılık':'Stamina',
'Patlayıcı Hız':'Acceleration','Geri Koşu Hızı':'Recovery Speed','Topsuz Koşu':'Off-the-ball Running',
'Fiziksel Mücadele':'Physical Duels','Denge Kontrolü':'Balance','İlk Dokunuş':'First Touch',
'Hücum Kafa Vuruşu':'Attacking Header','Savunma Kafa Vuruşu':'Defensive Header',
'Gol Pozisyonu Alma':'Positioning','Baskı Altında Bitirme':'Finishing Under Pressure',
'Şut':'Shooting','İsabetli Şut':'Shots on Target','İsabet':'Accuracy','Pas İsabeti':'Pass Accuracy',
'Gol':'Goal','Goller':'Goals','Asist':'Assist','Reyting':'Rating',

// ── Taktik ──
'Hücum':'Attack','🏃 Hücum Yönü':'🏃 Attacking Side','🛡️ Defans Hattı':'🛡️ Defensive Line',
'🎯 Şut Tercihi':'🎯 Shooting Preference','Agresif Baskı':'Aggressive Press',
'Geç Kalan Baskı':'Delayed Press','Yüksek Hat':'High Line','Çok Derin':'Very Deep',
'Hızlı & Direk':'Fast & Direct','Yavaş Yapılandırma':'Slow Build-up','Yavaş':'Slow',
'Çok Hızlı':'Very Fast','Çok Sık':'Very Often','Sık':'Often','Çok Az':'Very Rarely',
'Çok Yüksek':'Very High','Yüksek':'High',

// ── Ekonomi / transfer ──
'Transfer':'Transfer','Transfer Dönemi':'Transfer Window','⛔ Transfer dönemi kapalı':'⛔ Transfer window closed',
'🔄 Ara Transfer Dönemi':'🔄 Mid-Season Transfer Window','Satışa Çıkar':'List for Sale',
'Toplam Maliyet':'Total Cost','Alıcı':'Buyer','Satıcı':'Seller','SENİN İLANIN':'YOUR LISTING',
'Geçerli bir fiyat gir!':'Enter a valid price!','Hesap hareketlerini gör':'View transactions',
'Henüz işlem yok.':'No transactions yet.','Kişisel Cüzdanım — Euro':'My Wallet — Euro',
'Kişisel Cüzdanım — Elmas':'My Wallet — Diamonds','Altın':'Gold','Ödül Sistemi':'Reward System',
'Bu ödül zaten alınmış':'This reward has already been claimed','✓ Alındı':'✓ Claimed',
'Dolabın Boş':'Your locker is empty','Tişört':'Shirt',

// ── Antrenman / enerji ──
'Antrenman':'Training','Enerji':'Energy','Günlük Enerji':'Daily Energy','Harcanan Enerji':'Energy Spent',
'Gelişim':'Progress','Seviye':'Level','Yıldız':'Star',

// ── Zaman ──
'Bugün':'Today','BUGÜN':'TODAY','Bugün ·':'Today ·','Dün':'Yesterday','Dün ·':'Yesterday ·','Yarın':'Tomorrow',
'Gün':'Day','Hafta':'Week','Sezon':'Season','Sezon 1':'Season 1',
'Pazartesi':'Monday','Salı':'Tuesday','Çarşamba':'Wednesday','Perşembe':'Thursday',
'Cuma':'Friday','Cumartesi':'Saturday','Pazar':'Sunday',
'Pzt':'Mon','Sal':'Tue','Çar':'Wed','Per':'Thu','Cum':'Fri','Cmt':'Sat','Paz':'Sun',
'Ocak':'January','Şubat':'February','Mart':'March','Nisan':'April','Mayıs':'May','Haziran':'June',
'Temmuz':'July','Ağustos':'August','Eylül':'September','Ekim':'October','Kasım':'November','Aralık':'December',
'Oca':'Jan','Şub':'Feb','Mar':'Mar','Nis':'Apr','May':'May','Haz':'Jun',
'Tem':'Jul','Ağu':'Aug','Eyl':'Sep','Eki':'Oct','Kas':'Nov','Ara':'Dec',
'OCA':'JAN','ŞUB':'FEB','MAR':'MAR','NİS':'APR','MAY':'MAY','HAZ':'JUN',
'TEM':'JUL','AĞU':'AUG','EYL':'SEP','EKİ':'OCT','KAS':'NOV','ARA':'DEC',
'Bitişe kalan:':'Time remaining:','Senin sıran':'Your turn',

// ── Durum metinleri ──
'Henüz belirlenmedi':'Not decided yet','Henüz belli değil':'Not determined yet',
'Henüz gönderi yok.':'No posts yet.','Eşleşen sonuç yok':'No matching results',
'Sezon Henüz Başlamadı':'Season Has Not Started','Sezon henüz başlamadı':'Season has not started',
'Sezon verisi bulunamadı.':'No season data found.','Sezon 1 başlangıcına':'Until Season 1 starts',
'Henüz Aktif Havuz Yok':'No Active Pool Yet','Seri başlamadı':'Streak not started',
'İstek Gönderildi':'Request Sent','Katılım Şartları':'Entry Requirements',
'0 = şart yok · max 99':'0 = no requirement · max 99','1 💎 (katılım)':'1 💎 (entry)',
'Sadece Başkan:':'President only:','Seçim Günü 🗳️':'Election Day 🗳️',
'Mağlubiyet':'Defeat','Galibiyet':'Win','Beraberlik':'Draw',
'Gönderiyi sil':'Delete post','Konuşmayı Sil':'Delete conversation','Anketi kaldır':'Remove poll',
'Yeni Mesaj':'New Message','Mesajını yaz...':'Write your message...',
'@kullanıcı adı veya isim':'@username or name','Şehir veya takım ara...':'Search city or team...',
'Futbolcu Arıyorum':'Looking for a Club','Avatar seçin.':'Choose an avatar.',
'Hoşgeldin':'Welcome','Ayrıl':'Leave','Ülke':'Country','Şehir':'City',
'Hesabımı Sil':'Delete My Account','Gizlilik Politikası':'Privacy Policy',
'⚽ Önce klasman seç':'⚽ Select a division first','6 takım · 15 maç':'6 teams · 15 matches',
'Bu yarışmada her hafta':'Every week in this competition',
'Gün 10 (1/4)':'Day 10 (1/4)','Gün 20 (2/4)':'Day 20 (2/4)','Gün 30 (3/4)':'Day 30 (3/4)','Gün 40 (4/4)':'Day 40 (4/4)',

// ── Başarım adları ──
'Çalışkan':'Hard Worker','Sadık Oyuncu':'Loyal Player','Takım Oyuncusu':'Team Player',
'Seviye Avcısı':'Level Hunter','Sohbetçi':'Chatterbox',

// ── Ülkeler (sık görünenler) ──
'Türkiye':'Turkey','Almanya':'Germany','İngiltere':'England','Fransa':'France','İspanya':'Spain',
'İtalya':'Italy','Portekiz':'Portugal','Hollanda':'Netherlands','Belçika':'Belgium',
'Norveç':'Norway','İsveç':'Sweden','Danimarka':'Denmark','Hırvatistan':'Croatia',
'Sırbistan':'Serbia','Yunanistan':'Greece','Avusturya':'Austria','İsviçre':'Switzerland',
'Polonya':'Poland','Ukrayna':'Ukraine','Rusya':'Russia','İskoçya':'Scotland','İrlanda':'Ireland',
'Çekya':'Czechia','Macaristan':'Hungary','Romanya':'Romania','Bulgaristan':'Bulgaria',
'Türkçe':'Turkish','İngilizce':'English'
});

/* ── 2. dalga ─────────────────────────────────────────── */
Object.assign(window.I18N.en, {
// ── Giriş / kayıt ekranı ──
'Team Manager':'Team Manager','Apple ile Giriş Yap':'Sign in with Apple',
'Google ile Giriş Yap':'Sign in with Google','Apple ile Kayıt Ol':'Sign up with Apple',
'Google ile Kayıt Ol':'Sign up with Google','veya e-posta ile':'or with email',
'E-posta Adresi':'Email Address','Şifre':'Password','Şifre Tekrar':'Confirm Password',
'Şifremi Unuttum?':'Forgot password?','Hesabın yok mu?':'Don\'t have an account?',
'Zaten hesabın var mı?':'Already have an account?','Ad Soyad':'Full Name','Uyruk':'Nationality',
'Yaş Aralığı':'Age Range','45 ve üzeri':'45 and over','Avatarını':'Your Avatar',
'Mevkini':'Your Position','Alt mevkini seç:':'Choose your sub-position:','Kayıt Ol 🎉':'Sign Up 🎉',
'Devam ederek':'By continuing you accept the','Kullanım Şartları':'Terms of Use',
'\'nı ve':'and the','\'nı kabul etmiş olursunuz.':'.',
'Profilinde görünecek avatarı seç. Daha sonra Oyuncu sayfandan değiştirebilirsin.':
  'Choose the avatar shown on your profile. You can change it later from your Player page.',
'Tercih ettiğin pozisyon yeteneklerini etkiler. Antrenmanlarla tüm mevkileri geliştirebilirsin.':
  'Your preferred position affects your attributes. You can develop every position through training.',
'Kaleci (GK)':'Goalkeeper (GK)','Defans (DEF)':'Defender (DEF)',
'Orta Saha (MID)':'Midfielder (MID)','Forvet (FWD)':'Forward (FWD)',
'Reflexler, Top Tutma, Çıkış':'Reflexes, Handling, Command of Area',
'Müdahale, Hava Topu, Konumlanma':'Tackling, Aerial Duels, Positioning',
'Pas, Vizyon, Dayanıklılık':'Passing, Vision, Stamina',
'Şut, Hız, Çeviklik, Bitiricilik':'Shooting, Pace, Agility, Finishing',
'Oturumu kapatmak istediğine emin misin?':'Are you sure you want to log out?',
'🌍 Dil / Language':'🌍 Language','ℹ️ Şu an sadece':'ℹ️ Currently only',
'tam destekleniyor. Diğer diller için çeviri yakında.':'is fully supported. Other languages coming soon.',
'ornek@mail.com':'example@mail.com','Şifrenizi girin':'Enter your password',
'En az 8 karakter':'At least 8 characters','Şifrenizi tekrar girin':'Re-enter your password',
'@kullaniciadi':'@username','İsim ara…':'Search name…','İsim veya @kullanıcı adı...':'Name or @username...',

// ── Maç ekranı ──
'Ev Sahibi':'Home','Deplasman':'Away','⚽ MAÇ':'⚽ MATCH','BAŞLIYOR':'KICKING OFF',
'UZATMA BAŞLIYOR':'EXTRA TIME BEGINS','VAR İPTALİ!':'RULED OUT BY VAR!',
'Uzatmada karara bağlandı':'Decided in extra time','⏱️ BİTTİ':'⏱️ ENDED',
'⏱️ ZAMAN ÇİZELGESİ':'⏱️ TIMELINE','⏳ Başlamadı':'⏳ Not started',
'⏳ Henüz oynanmadı':'⏳ Not played yet','henüz oynanmadı':'not played yet',
'Maç tamamlandı — olay kaydı yok':'Match completed — no event log',
'Maç tamamlandı — özel olay kaydı yok':'Match completed — no key events logged',
'Bu maçta taktik kontrolü yok!':'You have no tactical control in this match!',
'❌ Değişiklik hakkın bitti':'❌ No substitutions left','İzleyici':'Spectator',
'🏁 Maç Sonu':'🏁 Full Time','⚽ Gol':'⚽ Goal','⚽ Lig Maçı':'⚽ League Match',
'İLK 11 ORT.':'STARTING XI AVG.','yaklaşan maç':'upcoming match','tek maç':'single leg',
'çift maçlı':'two legs','· 2. maç':'· Leg 2','maç ·':'matches ·',
'🔥 Yüksek Moral':'🔥 High Morale','😞 Düşük Moral':'😞 Low Morale',

// ── Kadro yönetimi ──
'Yardımcı':'Vice-Captain','Yardımcı Ata':'Assign Vice-Captain','yardımcı kaptan':'vice-captain',
'👑 Kaptan Yap':'👑 Make Captain','👥 Üye':'👥 Member','Çıkar':'Remove',
'+ Maç Kadrosu':'+ Matchday Squad','+ Maç Kadrosuna Al':'+ Add to Matchday Squad',
'Yedek dolu':'Bench is full','Yedek dolu! Önce birini kadrodan çıkar':'Bench is full! Remove someone first',
'Yedek dolu! Önce birini maç kadrosundan çıkar':'Bench is full! Remove someone from the matchday squad first',
'Yedeğe alındı:':'Moved to bench:','kadro dışı':'not in squad','Yedek oyuncuları gör':'View substitutes',
'İlk 11 oyuncuları gör':'View starting XI','Kadro dışı oyuncuları gör':'View players out of the squad',
'Kadro dolu (18/18) — önce bir oyuncuyu çıkar':'Squad full (18/18) — remove a player first',
'Minimum 12 oyuncu olmalı — daha fazla çıkaramazsın':'Minimum 12 players required — you cannot remove more',
'Sadece başkan/yardımcı maç kadrosu değiştirebilir':'Only the captain or vice-captain can change the matchday squad',
'Sadece kaptan veya yardımcı kadro değiştirebilir':'Only the captain or vice-captain can change the squad',
'✅ Diziliş kaydedildi!':'✅ Formation saved!','💾 Kaydet':'💾 Save',
'Forma numarasını düzenle (kaptan)':'Edit shirt number (captain)',
'Forma numarasını düzenle (T.D.)':'Edit shirt number (manager)',
'Yeni Numara (1-99)':'New Number (1-99)','Bir sayı gir (1-99 arası).':'Enter a number (1-99).',
'⛔ Numara 1-99 arasında olmalı.':'⛔ Number must be between 1 and 99.',
'Mevcut numarayla aynı — değişiklik yapılmayacak.':'Same as the current number — no change made.',
'Bu oyuncu milli takım kadrosundan çıkarılacak':'This player will be removed from the national squad',
'Takımda gerçek oyuncu varken bot kaptan yapılamaz.':'A bot cannot be made captain while a real player is in the team.',
'Zaten bir takımdasın. Önce takımdan ayrıl.':'You are already in a team. Leave it first.',
'Şu anda ayrılamazsın.':'You cannot leave right now.',

// ── Yetenek adları (ek) ──
'Şut Gücü':'Shot Power','Uzaktan Vuruş':'Long Shots','Çalım Yeteneği':'Dribbling',
'Yön Değiştirme':'Agility','Zıplama Erişimi':'Jumping Reach',
'Uzaktan Şut Kurtarma':'Long-Range Save','Yakın Mesafe Kurtarma':'Close-Range Save',
'♟️ Taktikçi':'♟️ Tactician','Yönetimi':'Management',

// ── Transfer / ekonomi ──
'Transfer dönemi kapalı.':'The transfer window is closed.',
'Sezon Arası Transfer Dönemi':'Off-Season Transfer Window',
'Transfer listesinde':'On the transfer list','satıcı':'seller','satıcı kulüp':'selling club',
'Oyuncu artık serbest değil.':'This player is no longer a free agent.',
'Oyuncu havuzda bulunamadı':'Player not found in the pool',
'İlanı Geri Al?':'Withdraw listing?','İlanı Kaldır':'Remove listing',
'✓ Satışa Çıkar':'✓ List for Sale','Ürün Satıldı':'Item Sold',
'İlk İmza Maaşı':'Signing Salary','Taksit (4× gün 10/20/30/40)':'Instalment (4× on days 10/20/30/40)',
'Sistem tarafından belirlenen sezon maaşı':'Season salary set by the system',
'Piyasa değeri — oyun tarafından belirlenir':'Market value — determined by the game',
'🔒 Sözleşmen aktif':'🔒 Your contract is active','(maaşsız)':'(unpaid)',
'💎 Takım Satın Al':'💎 Buy Team','💸 Takımı Satışa Çıkar':'💸 List Team for Sale',
'takım satın al':'buy team','takıma katıl':'join team','katıl':'join',
'❌ Bakiye düşülemedi (cüzdan hatası).':'❌ Could not deduct balance (wallet error).',
'❌ Dolap dolu! Önce bir item çıkar.':'❌ Locker full! Remove an item first.',

// ── Turnuva / arşiv ──
'Turnuva Henüz Başlamadı':'Tournament Has Not Started','Tüm Turnuvalar':'All Tournaments',
'Turnuva sayfasına git':'Go to tournament page','Tüm Zamanlar':'All Time','Şampiyonu':'Champion of',
'TÜM PUAN DURUMU ▾':'FULL STANDINGS ▾','🌐 Tüm Ligler':'🌐 All Leagues',
'En alt lig — küme düşme yok':'Lowest division — no relegation',
'Turnuva istatistikleri sezon ilerledikçe burada görünecek':'Tournament statistics will appear here as the season progresses',
'İstatistikler':'Statistics','ye düşer':'relegated to','· Sezon':'· Season',

// ── Yarış / ödül ──
'Ödülü Al':'Claim Reward','Ödülü Topla':'Collect Reward','Ödül yok':'No reward',
'Ödül bilgisi':'Reward info','Ödül alınamadı:':'Could not claim reward:',
'✅ Ödül alındı ·':'✅ Reward claimed ·','✓ Toplandı':'✓ Collected','✓ Tamamlandı':'✓ Completed',
'🎁 Ödül Toplama:':'🎁 Reward Collection:','🏁 Yarış Başlangıcı:':'🏁 Race Start:',
'🏆 Yarış Bitişi:':'🏆 Race End:','🔄 Yeni Yarış:':'🔄 New Race:','Yarış bilgisi':'Race info',
'Antrenman Yıldızı tam listesi':'Training Star full list','Haftanın Yıldızı tam listesi':'Player of the Week full list',
'Tam liste — Antrenman Yıldızı':'Full list — Training Star','Tam liste — Haftanın Yıldızı':'Full list — Player of the Week',
'🏆 En İyi 50 Oyuncu — yetenek puanına göre':'🏆 Top 50 Players — by attribute rating',
'Antrenman & enerji kuralları':'Training & energy rules','Antrenman ve enerji bilgileri':'Training and energy info',
'Günlük 25 bilet sınırına ulaştın':'You have reached the daily limit of 25 tickets',
'Önce mevcut bileti bitir':'Finish your current ticket first',
'Bilet almak için aşağıdaki düğmeye bas':'Press the button below to buy a ticket',
'1. BİLET AL':'1. BUY TICKET','❌ KAYBETTİ':'❌ LOST',

// ── Sosyal ──
'Aklından ne geçiyor? (en fazla 280 karakter)':'What\'s on your mind? (max 280 characters)',
'Henüz kimseyi takip etmiyorsun.':'You are not following anyone yet.',
'Kendine mesaj gönderemezsin.':'You cannot message yourself.',
'Milli takıma mesaj yaz...':'Message the national team...',
'Örn: Antrenman saati 18:00\'a alınsın mı?':'e.g. Should training move to 18:00?',
'da paylaşıldı':'shared on','📤 Paylaşıldı':'📤 Shared','💬 Özel':'💬 Private',
'Mevcut oyuncular · Çevrimiçi oyuncular':'Current players · Online players',
'🔍 Takım Ara':'🔍 Search Team','🔍 İtem ara...':'🔍 Search item...',
'Eşleşen takım bulunamadı.':'No matching team found.','🆓 Takımsız':'🆓 Free Agent',

// ── Genel durum / hata ──
'⚠️ Bağlantı yok.':'⚠️ No connection.','⚠️ Önemli:':'⚠️ Important:',
'Supabase bağlantısı yok. Sayfayı yenile.':'No server connection. Please refresh the page.',
'❌ Sunucuya ulaşılamadı.':'❌ Could not reach the server.',
'❌ Kaydetme başarısız oldu.':'❌ Save failed.','Yüklenemedi — sekmeye tekrar dokun':'Failed to load — tap the tab again',
'İşlemi onaylıyor musun?':'Do you confirm this action?','İptal et':'Cancel',
'— Belli değil —':'— Undecided —','↩️ Listeye Geri Dön':'↩️ Back to List',
'💡 İPUÇLARI':'💡 TIPS','📌 NASIL ÇALIŞIR':'📌 HOW IT WORKS','💎 ÖDÜLLER':'💎 REWARDS',
'💰 KAZANILAN ÖDÜLLER':'💰 REWARDS EARNED','Toplam Kasaya:':'Total to treasury:',
'📜 Önceki Seçim Sonuçları':'📜 Previous Election Results',
'Kendi takımının maçına tahmin yapılamaz':'You cannot predict on your own team\'s match',
'gönderildi':'sent','yükleniyor':'loading','tamamlandı':'completed','gün':'days',
'güvenli':'safe','süper':'super','baş':'head','sırt':'back','aşil':'achilles',
'Çorap':'Socks','Şort':'Shorts','Şu an':'Currently','🏆 Önce ülke seç':'🏆 Select a country first',
'🏳️ — Sıra':'🏳️ — Rank','İsrail':'Israel',
'Bu kuponu oyna':'Place this slip','Maçlar başladı':'Matches have started',
'Yaklaşan maç yok':'No upcoming match','Fikstürü Aç':'Open Fixtures','Bir takıma katıl':'Join a team',
'Bugün lig maçı yok':'No league matches today',
'Şikayet Gönder':'Send Complaint','İstek Gönder':'Send Request','Talep Gönder':'Send Enquiry',
'Gönder':'Send','Gönderiliyor…':'Sending…','Buraya yaz…':'Write here…',
'Cevap geldiğinde gelen kutuna bildirim düşer.':'You will get an inbox notification when we reply.',
'En az 10 karakter yaz.':'Write at least 10 characters.','Oturum bulunamadı.':'Session not found.',
'Özet':'Summary','İstatistik':'Stats','Reyting':'Ratings','⭐ Oyuncu Reytingleri':'⭐ Player Ratings',
'⚽ Goller':'⚽ Goals','🏆 Maçın Adamı':'🏆 Man of the Match','Maçın adamı verisi yok':'No man of the match data',
'Topla Oynama':'Possession','Korner':'Corners','Faul':'Fouls','Grup Aşaması':'Group Stage',
'Yaklaşan maç bulunmuyor.':'No upcoming matches.'
});

/* ── 3. dalga ─────────────────────────────────────────── */
Object.assign(window.I18N.en, {
'YÜKLENİYOR':'LOADING','Canlı':'Live','Arşiv':'Archive','Özet':'Summary','ÖZETİ':'SUMMARY','ÖZETİM':'MY SUMMARY',
'AKIŞI':'FEED','ERİŞİM':'ACCESS','LİG':'LEAGUE','EĞLENCE':'ENTERTAINMENT','MAĞAZA':'SHOP',
'GÖREVLER':'QUESTS','BAŞARILAR':'ACHIEVEMENTS','PRO GÖREVLER':'PRO QUESTS','SERİ GÖREVLER':'SERIES QUESTS',
'MİLLİ TAKIM':'NATIONAL TEAM','MİLLİ TAKIMLAR':'NATIONAL TEAMS','HAZIRLIK MAÇLARI':'FRIENDLY MATCHES',
'MAÇ SONA ERDİ':'FULL TIME','SEZON 1 SONA ERDİ':'SEASON 1 HAS ENDED','PENALTI ATIŞLARI':'PENALTY SHOOTOUT',
'GÜNLÜK SINIRLAR':'DAILY LIMITS','YARIŞ BİLGİSİ':'RACE INFO','ÖDÜL TABLOSU':'REWARD TABLE',
'SON BİLETLERİM':'MY RECENT TICKETS','SONRAKİ ÖDEME':'NEXT PAYMENT','SATIŞ LİSTESİ':'SALE LIST',
'SERBEST LİSTESİ':'FREE AGENT LIST','BRONZ BİLET':'BRONZE TICKET','BİLET SEÇ':'CHOOSE TICKET',
'BİLET AL · 50 €':'BUY TICKET · €50','Kazı Kazan':'Scratch Card','Şans':'Luck',

// ── Taktik / diziliş ──
'Hücum Yönü':'Attacking Side','Defans Hattı':'Defensive Line','Şut Tercihi':'Shooting Preference',
'Diziliş + Taktik':'Formation + Tactics','Diziliş ve maç taktiği':'Formation and match tactics',
'Önerilen Formasyon':'Suggested Formation','Takım dizilişinden':'from the team formation',
'Geç Pres':'Late Press','Yapılandırma':'Build-up','sabırlı':'patient','sabırlı kuruluş':'patient build-up',
'kısa pas':'short passing','ofsayt baskısı':'offside trap','yüksek risk':'high risk',
'sağ taraf':'right side','her fırsatta':'at every chance','çok seçici':'very selective',
'direkt geçiş':'direct play','Tehlikeli Bölge':'Danger Zone','Uzmanlık':'Specialty','Uzmanlık Alanı':'Area of Expertise',
'🔄 Diziliş':'🔄 Formation','🔄 Oyuncu Değişikliği':'🔄 Substitution','🔄 Mevki Değiştir':'🔄 Change Position',
'Mevki Değiştir':'Change Position','📊 Maç İstatistikleri':'📊 Match Statistics','📊 İSTATİSTİK':'📊 STATISTICS',
'📋 Canlı Olaylar':'📋 Live Events','📜 Son Maçlar':'📜 Recent Matches','Son 5 Maç':'Last 5 Matches',
'Son 5 maç':'Last 5 matches','Özel Olay':'Special Event','Karşılaşma':'Fixture','İzleyici Modu':'Spectator Mode',
'⚽ Maç devam ediyor...':'⚽ Match in progress...','2. yarı otomatik başlayacak':'The second half will start automatically',
'Maç saatinde otomatik başlayacak':'Will start automatically at kick-off',
'🔥 Anlık Strateji Değişikliği':'🔥 Live Strategy Change','📝 Detaylı Strateji Paneli':'📝 Detailed Strategy Panel',

// ── Takım ──
'Takım Ara':'Search Team','Kullanıcı Ara':'Search User','Takım Satın Al':'Buy Team','Takıma Katıl?':'Join Team?',
'Katıl ✓':'Join ✓','Katılma İsteği':'Join Request','Katılmak İstiyorum':'I Want to Join',
'İsteği Gönder':'Send Request','💡 İstek Gönder':'💡 Send Request','Kaptana Talep Gönder ✉':'Send Request to Captain ✉',
'📋 Talep İlet':'📋 Submit Request','Teklifi Gönder ✓':'Send Offer ✓','Henüz Bir Takımın Yok':'You Don\'t Have a Team Yet',
'Takım Değeri':'Team Value','Takım Formaları':'Team Kits','Takım Manifestosu':'Team Manifesto',
'Takım Vitrini':'Team Showcase','🛡️ Takım Geçmişi':'🛡️ Team History','💬 Takım Sohbeti':'💬 Team Chat',
'Senin Takımın · SEN':'Your Team · YOU','↩ Kendi Takımım':'↩ My Own Team','Takımsız oyuncular':'Free agents',
'Mevcut takımlara üye olarak katıl':'Join an existing team as a member',
'Lideri olmayan takımları satın al, kaptan ol':'Buy a team without a leader and become captain',
'Bu Takıma Sadece Satın Alarak Girebilirsin':'You Can Only Join This Team by Buying It',
'Bu takıma sahip olmanın tek yolu':'The only way to own this team is',
'gerçek bir kaptanı yok':'has no real captain','Şehir Nüfusu':'City Population',
'🌍 Hangi ülkeden takım almak istersin?':'🌍 Which country do you want to buy a team from?',
'🌍 Hangi ülkeden takım arıyorsun?':'🌍 Which country are you looking for a team in?',
'Bir takıma katıl ya da takım kur — maçların burada görünür':'Join or create a team — your matches will appear here',
'Günün maçlarını ve Avrupa sahnesini görmek için bir takıma katıl.':'Join a team to see today\'s matches and the European stage.',
'İki forma seti tanımla — motor çakışmayanı seçer':'Define two kit sets — the engine picks the non-clashing one',

// ── Finans ──
'Finans Yönetimi':'Finance Management','Mevcut Bütçe':'Current Budget','💎 Bütçen':'💎 Your Budget',
'Maaşlar':'Salaries','Oyuncu Maaşları':'Player Salaries','Maaş Ödeme Planı':'Salary Payment Schedule',
'Güncel Maaş':'Current Salary','Sezonluk Maaş':'Season Salary','Sezonluk Maaş (€)':'Season Salary (€)',
'Sezon Maaşı (€)':'Season Salary (€)','Sezon Toplamı (€)':'Season Total (€)',
'Sezon Maaşı (€) — sistem belirler, değiştirilemez':'Season Salary (€) — set by the system, cannot be changed',
'Maaş ve bonservis':'Salary and transfer fee','Bonservis (Satıcı Takım Kasasına)':'Transfer Fee (to Selling Club)',
'Geçiş Ücreti':'Transfer Fee','Satıcı kasasına':'To the seller\'s treasury','Satıcı:':'Seller:',
'Kasaya Bağış Yap':'Donate to Treasury','Bağışla →':'Donate →','Bağış Sayısı':'Donations',
'Euro Bağışla':'Donate Euros','Elmas Bağışla':'Donate Diamonds','Euro geri dönüşü':'Euro return',
'Son İşlemler':'Recent Transactions','Kazanılan €':'€ Earned','Kazanılan 💎':'💎 Earned',
'Günlük adet':'Daily count','Günlük elmas':'Daily diamonds','Günlük harcama':'Daily spending',
'Günlük kazanç':'Daily earnings','Sınır':'Limit','Cüzdanında:':'In your wallet:','cüzdana':'to wallet',
'Satın aldıktan sonra bütçen:':'Your budget after purchase:','💎 Bu Fiyata Satın Al':'💎 Buy at This Price',
'💎 satın almak':'to buy with diamonds','Olası Kazanç':'Potential Return','Oranlı tahmin':'Odds-based prediction',
'🏆 Ödül Havuzları':'🏆 Prize Pools','Puanın':'Your Points','Sıralaman':'Your Rank','ücretsiz':'free',

// ── Transfer ──
'Oyuncuyu Satışa Çıkar':'List Player for Sale','Satışa Çıkar ✓':'List for Sale ✓',
'Satış Fiyatı':'Sale Price','Satış Fiyatı (Diamond 💎)':'Sale Price (Diamonds 💎)',
'Önerilen fiyat:':'Suggested price:','Minimum (satıcı fiyatı):':'Minimum (seller price):',
'İmza Parası (💎)':'Signing Fee (💎)','İmza Talebi (💎)':'Signing Request (💎)',
'İmza Parası 💎 (Oyuncu Cüzdanına)':'Signing Fee 💎 (to Player\'s Wallet)','imza elmasını':'signing diamonds',
'Sözleşme Yenileme':'Contract Renewal','Sözleşme Süresi (1-5 sezon)':'Contract Length (1-5 seasons)',
'Süre Seç':'Choose Duration','Süre seç ve çalışmaya başla':'Choose a duration and start training',
'Yeni Değer (€)':'New Value (€)','💶 Piyasa Değeri Belirle':'💶 Set Market Value',
'💰 Piyasa Değeri Gelişimi':'💰 Market Value Progression',
'Sadece takım kaptanı bu değeri güncelleyebilir':'Only the team captain can update this value',
'Item Adı':'Item Name','İtem Adı':'Item Name','📤 İtem Sat':'📤 Sell Item','🎒 İtemler':'🎒 Items',
'🏪 Mağaza İtemler':'🏪 Shop Items','🛒 Pazar Yeri Satın Alma':'🛒 Marketplace Purchase',
'🛒 Mağazadan kişisel ekipman al':'🛒 Buy personal gear from the shop',
'Bu itemi pazar yerinde satışa çıkar.':'List this item on the marketplace.',
'Dolapdaki itemini satışa çıkar':'List an item from your locker',
'Yetenek %\'si artıran itemler':'Items that boost attribute percentages','⚡ Yetenek Bonusları':'⚡ Attribute Bonuses',

// ── Antrenman ──
'Antrenman Başlat':'Start Training','Antrenman Kuralları':'Training Rules',
'Antrenman Tamamlandı':'Training Complete','Antrenman Tamamlandı!':'Training Complete!',
'Çalışmanın karşılığı kazanıldı':'You earned the reward for your work',
'Beceri Puanı':'Skill Points','Beceri Puanı:':'Skill Points:','Genel Gelişim':'Overall Progress',
'Aynı anda çalıştırılabilecek antrenman sayısı':'Number of trainings that can run at once',
'Kullanılmayan enerji':'Unused energy','bir sonraki güne aktarılmaz':'does not carry over to the next day',
'Tesisini yükselttikçe günlük enerji tavanın artar.':'Your daily energy cap rises as you upgrade your facility.',
'Ülkelere Göre Yenilenme Saati':'Reset Time by Country','Her gün':'Every day','her gün otomatik':'automatically every day',
'Yetenekler 4 mevki grubuna ayrılır:':'Attributes are split into 4 position groups:',

// ── Milli takım / federasyon ──
'Milli Takım T.D.':'National Team Manager','Milli Takım Forma Numarası':'National Team Shirt Number',
'Forma Numarası':'Shirt Number','⚙️ Milli Takım Stratejisi':'⚙️ National Team Strategy',
'Milli takıma 18 kişilik kadro seçimi':'Selecting an 18-man national squad',
'Ziyaretçi görünümü — bu milli takımda değişiklik yapamazsın.':'Visitor view — you cannot make changes to this national team.',
'Türkiye Futbol Federasyonu':'Turkish Football Federation','Federasyon yapısında':'In the federation structure',
'Yönetim':'Board','Yönetim Kurulu Yetkileri':'Board Powers','Yardımcılar':'Vice-Presidents',
'Yardımcıları atama / değiştirme':'Appointing / changing vice-presidents','Üyeler':'Members','üye':'member',
'Oylamayı Başlat':'Start Voting','Yeni Oylama Başlat':'Start New Vote','Yeni Kaptan Adayı':'New Captain Candidate',
'Başkan: —':'President: —','Şampiyon: —':'Champion: —','4 farklı rol':'4 different roles',
'3 kişi · Başkan tarafından atandı':'3 people · appointed by the President',
'Hazırlık maçları ve eleme grupları yönetimi':'Managing friendlies and qualifying groups',
'Felsefe, hedefler ve değerler':'Philosophy, goals and values',
'Kupa koleksiyonu ve tarihçesi':'Trophy collection and history',
'Her tesis takımına ne katar?':'What does each facility add to your team?',

// ── Sıralamalar ──
'Genel Sıralama':'Overall Ranking','EURO Sıralama':'EURO Ranking','Sıralamalar — LİGLER':'Rankings — LEAGUES',
'Sıralamalar — MİLLİ TAKIMLAR':'Rankings — NATIONAL TEAMS','Sıralamalar — OYUNCULAR':'Rankings — PLAYERS',
'Sıralamalar — TAKIMLAR':'Rankings — TEAMS','LİGLER sıralaması':'LEAGUES ranking',
'MİLLİ TAKIMLAR sıralaması':'NATIONAL TEAMS ranking','OYUNCULAR sıralaması':'PLAYERS ranking',
'TAKIMLAR sıralaması':'TEAMS ranking','🌐 Milli Takımlar':'🌐 National Teams','🌍 Ülkeler':'🌍 Countries',
'🏆 En İyi 50 Takım — küresel sıralama':'🏆 Top 50 Teams — global ranking',
'🌍 Ülke Puanı — kulüplerin Takım Puanı toplamı · son 5 sezon':'🌍 Country Points — sum of club Team Points · last 5 seasons',
'🌐 Milli Takım Sıralaması — EURO National Cup performansı':'🌐 National Team Ranking — EURO National Cup performance',
'🏟️ Yarışmalara Göre':'🏟️ By Competition','🎯 Kariyer Özeti':'🎯 Career Summary',
'Lig Şampiyonluğu ›':'League Title ›','Son Şampiyonluk ›':'Last Title ›','Avrupa Kupası ›':'European Cup ›',
'🏆 Başarılar':'🏆 Achievements','🏆 Sıralamaları takip et':'🏆 Follow the rankings',
'🌍 Lig ve turnuvaları izle':'🌍 Watch leagues and tournaments',
'🎲 Eğlence (Toto) oyunlarına katıl':'🎲 Join the entertainment (Toto) games',
'⚡ Kendi yeteneklerini geliştir (Antrenman)':'⚡ Develop your own attributes (Training)',
'💡 Takımsız oyuncu olarak neler yapabilirsin?':'💡 What can you do as a free agent?',

// ── Profil / ayarlar ──
'Profili Düzenle':'Edit Profile','T.D. Profilini Düzenle':'Edit Manager Profile',
'Teknik Direktör Profili':'Manager Profile','Avatar Değiştir':'Change Avatar','🎭 Avatar Değiştir':'🎭 Change Avatar',
'Profilinde görünecek avatarı seç ·':'Choose the avatar shown on your profile ·',
'Müzik':'Music','Maç Sesi':'Match Sound','Titreşim':'Vibration','Takipçilerim':'My Followers',
'🗑️ Hesabını Sil':'🗑️ Delete Your Account','📄 Kullanım Koşulları':'📄 Terms of Use',
'🚨 Şikayet Bildir':'🚨 Report a Problem','geri alınamaz':'cannot be undone','Bu işlem':'This action',
'Oyuncu kartın ve tüm yeteneklerin silinir':'Your player card and all attributes will be deleted',
'Cüzdanın (€ ve 💎), kuponların ve envanterin silinir':'Your wallet (€ and 💎), slips and inventory will be deleted',
'Gelen kutun, paylaşımların ve başarımların silinir':'Your inbox, posts and achievements will be deleted',
'Takımdaysan takımdan çıkarılırsın; kaptansan yetkin devredilir':'You will be removed from your team; if you are captain, your role will be transferred',
'Aynı e-posta ile yeniden kayıt olabilirsin ama ilerlemen geri gelmez':'You can sign up again with the same email, but your progress will not return',
'Onaylamak için':'To confirm','. Silindiğinde:':'. When deleted:',

// ── Sosyal / anket ──
'Anketi Kaldır':'Remove Poll','Gönderiyi sil?':'Delete post?',
'Bu anketi silmek istediğine emin misin? Tüm oylar silinecek.':'Are you sure you want to delete this poll? All votes will be lost.',
'Seçenekler (virgülle ayır)':'Options (comma separated)','⭐ Özel':'⭐ Special',
'Oyuncu listesi yükleniyor...':'Loading player list...','Son güncelleme:':'Last updated:',
'Oyuncu sayısına göre sıralı · Bugünün havuzları':'Sorted by player count · Today\'s pools',
'🎁 Günlük Giriş Ödülleri':'🎁 Daily Login Rewards','🎯 BÜLTEN':'🎯 COUPON','⚡ HEPSİNİ AÇ':'⚡ REVEAL ALL',
'basılı tut':'hold down','9 kutucuğu parmakla aç':'Reveal the 9 squares with your finger',
'3 aynı sembol':'3 matching symbols','Aynı sembol 3 kez = kazanç':'Same symbol 3 times = win',
'Bronz, Gümüş veya Altın':'Bronze, Silver or Gold','Gümüş':'Silver','ⓘ nasıl oynanır':'ⓘ how to play',
'en az 5 maç seç':'select at least 5 matches','Yabancı':'Foreign','altında':'below','süre':'duration',
'Hazırlık Maçını İptal':'Cancel Friendly Match',
'İptal edilen maç hem takviminden hem sunucudan kaldırılır.':'A cancelled match is removed from both your calendar and the server.',

// ── Ek ülkeler (bayraklı etiketler) ──
'🇦🇪 Birleşik Arap Emirlikleri':'🇦🇪 United Arab Emirates','🇧🇩 Bangladeş':'🇧🇩 Bangladesh',
'🇨🇮 Fildişi Sahili':'🇨🇮 Ivory Coast','🇨🇱 Şili':'🇨🇱 Chile','🇨🇳 Çin':'🇨🇳 China','🇨🇺 Küba':'🇨🇺 Cuba',
'🇨🇾 Kıbrıs':'🇨🇾 Cyprus','🇪🇬 Mısır':'🇪🇬 Egypt','🇬🇧 Birleşik Krallık':'🇬🇧 United Kingdom',
'🇬🇪 Gürcistan':'🇬🇪 Georgia','🇮🇷 İran':'🇮🇷 Iran','🇮🇸 İzlanda':'🇮🇸 Iceland','🇯🇴 Ürdün':'🇯🇴 Jordan',
'🇰🇬 Kırgızistan':'🇰🇬 Kyrgyzstan','🇰🇭 Kamboçya':'🇰🇭 Cambodia','🇰🇷 Güney Kore':'🇰🇷 South Korea',
'🇱🇧 Lübnan':'🇱🇧 Lebanon','🇱🇮 Lihtenştayn':'🇱🇮 Liechtenstein','🇱🇺 Lüksemburg':'🇱🇺 Luxembourg',
'🇲🇪 Karadağ':'🇲🇪 Montenegro','🇲🇭 Marshall Adaları':'🇲🇭 Marshall Islands','🇲🇳 Moğolistan':'🇲🇳 Mongolia',
'🇸🇧 Solomon Adaları':'🇸🇧 Solomon Islands','🇸🇸 Güney Sudan':'🇸🇸 South Sudan','🇹🇩 Çad':'🇹🇩 Chad',
'🇹🇱 Doğu Timor':'🇹🇱 Timor-Leste','🇹🇲 Türkmenistan':'🇹🇲 Turkmenistan',
'🇺🇸 Amerika Birleşik Devletleri':'🇺🇸 United States','🇺🇿 Özbekistan':'🇺🇿 Uzbekistan','🇿🇦 Güney Afrika':'🇿🇦 South Africa',
'Amerika Birleşik Devletleri':'United States','Birleşik Krallık':'United Kingdom',

// ── Kısa parçalar ──
'değiştirebilir.':'can change.','düzenleyebilir.':'can edit.','güncellenir':'updated',
'vardır.':'exist.','kazanır.':'wins.','harcar. Enerjin yetmiyorsa antrenman yapamazsın.':'is spent. If you don\'t have enough energy you cannot train.',
'Bu sezon çıkan':'issued this season','Bu takıma':'to this team','Bu takımın':'this team\'s',
'olarak görüntülüyorsun.':'You are viewing as.','Sonraki değişim:':'Next change:',
'Diğer tüm kaptanlar':'All other captains','Sezonun sona ermesine 3 gün kaldı':'3 days until the season ends',
'Sezonun 40 günü boyunca neler yaşanacak':'What happens over the season\'s 40 days',
'Maliyet kasadan düşülür · her değişimde +100 artar':'Cost is deducted from the treasury · rises by +100 each change',
'Düşük puan: -%2 takım performansı · Yüksek puan: +%4':'Low score: -2% team performance · High score: +4%',
'sistem tarafından dinamik':'dynamically by the system','sistemce belirlenir, değiştirilemez':'set by the system, cannot be changed',
'satın alma anında sunucuda':'on the server at the moment of purchase','tüm kademeler aynı':'all tiers are the same',
'. Bot oyuncularının maaşı yoktur.':'. Bot players receive no salary.',
'. Kaptanı bot olan takımlara katılma isteği gönderilemez.':'. You cannot send a join request to a team whose captain is a bot.',
'. Sayfayı normal kaydırabilirsin.':'. You can scroll the page normally.',
'✓ Diziliş ve taktik belirle':'✓ Set formation and tactics','✓ Hazırlık maçı ayarlama':'✓ Arrange friendlies',
'✓ Hazırlık maçı planlama':'✓ Schedule friendlies','✓ Adaylık başvurusu':'✓ Apply for candidacy',
'✓ Yardımcılık adaylığı':'✓ Vice-president candidacy','✓ 3 yardımcı atama yetkisi':'✓ Power to appoint 3 vice-presidents',
'✓ Federasyon yönetimini görüntüle':'✓ View federation management',
'✓ Milli takım kadrosunu seç':'✓ Select the national squad',
'✓ Milli takım kadrosuna oyuncu öner':'✓ Nominate players for the national squad',
'✓ Milli takım performansını izle':'✓ Track national team performance',
'✓ Sezon sonu başkan seçiminde 1 oy':'✓ 1 vote in the end-of-season presidential election',
'✗ Oy hakkı yok':'✗ No voting rights','✗ Doğrudan kadro müdahalesi yok':'✗ No direct squad control',
'✗ Diziliş ve taktik (sadece Başkan)':'✗ Formation and tactics (President only)',
'✗ Yardımcı atama (sadece Başkan)':'✗ Appointing vice-presidents (President only)',
'🔒 Diziliş ve stratejiyi sadece':'🔒 Formation and strategy can only be set by',
'⚡ Maç içinde formasyon değişikliği kalan dakikalara etki eder.':'⚡ Changing formation mid-match affects the remaining minutes.',
'⚠️ Aynı grupta alt mevki değişimi':'⚠️ Changing sub-position within the same group',
'↺ Otomatik Hesaba Döndür':'↺ Reset to Automatic','🏃 Hücum:':'🏃 Attack:',
'• Günde en fazla':'• At most per day','• Kazançlar doğrudan':'• Winnings go directly',
'• Sonuç':'• Result','• Tek dünya: tüm oyuncular aynı olasılık tablosunu kullanır.':'• One world: all players use the same probability table.',
'• Elmas tavanı dolduysa fazlası euro karşılığı ödenir.':'• If the diamond cap is reached, the excess is paid as euros.',
'— her gün sıfırdan dolar, üst üste birikmez.':'— refills from zero each day, does not accumulate.'
});

/* ── 4. dalga ─────────────────────────────────────────── */
Object.assign(window.I18N.en, {
'Sonuçlar':'Results','Sonuç':'Result','Maç devam ediyor...':'Match in progress...',
'Maç, turnuva ve lig sıralama ödülleri':'Match, tournament and league ranking rewards',
'Maç, lig ve turnuva ödülleri otomatik olarak':'Match, league and tournament rewards are automatically',
'Bekleyen maç yok':'No pending matches','ödenir. Ödeme günleri: sezonun':'paid. Payment days: the season\'s',
'Antrenman, seçtiğin yeteneğe':'Training, for the attribute you choose,',
'kazandırır; yetenek seviyen yükseldikçe oyuncu gücün (OVR) artar.':
  'grants points; as your attribute level rises, your overall rating (OVR) increases.',
'. İstediğin gruptan çalışabilirsin.':'. You can train in any group you like.',
'. Farklı gruba (Kaleci / Defans / Orta Saha / Forvet) geçişte':
  '. When switching to a different group (Goalkeeper / Defence / Midfield / Forward)',
've o grubun yeni yetenekleri 10\'dan başlar.':'and that group\'s new attributes start at 10.',
'eşittir (Sv.1 → 1 eş zamanlı).':'is equal (Lv.1 → 1 concurrent).',
'ile başlarsın. Takım tesisin (Performans Merkezi) her seviye için':
  'you start with. Your team facility (Performance Centre) adds for each level',
'harcama; hangisi önce dolarsa orada durur.':'spending; whichever fills first is the cap.',
'işlenir, her bilet denetim için kaydedilir.':'is processed, and every ticket is logged for auditing.',
'kazanır. Elmas ortalama her 200 bilette bir çıkar.':'wins. A diamond appears on average once every 200 tickets.',
'\'de sıfırlanır. Kazanç tavanı Toto ile ortaktır.':'resets. The winnings cap is shared with Toto.',
'Ücretsiz günlük bilet 25\'e sayılmaz. Tüm sayaçlar':'The free daily ticket does not count towards 25. All counters',
'güncel sezon maaşı ÷ 4':'current season salary ÷ 4','ve talep ettiğin':'and the requested',
'(final galibi) ayrıca':'(the final winner) also','de buluşur. Final hariç tüm turlar çift maçlıdır.':
  'meet. Every round except the final is played over two legs.',
'. Lig sonunda hak kazanan takımlar turnuvalara katılır.':'. Teams that qualify at the end of the league enter the tournaments.',
'olarak katılacaksın. İstediğin zaman ayrılabilirsin.':'You will join as. You can leave at any time.',
'. Diğer üyeler oylarını veriyor.':'. Other members are casting their votes.',
'. Sonraki seçimde tekrar başvurabilirsin.':'. You can apply again in the next election.',
'Karşı takım kaptanı kabul ederse maç planlanır.':'The match is scheduled if the opposing captain accepts.',
'(Sahadan çıkarmak için diziliş ekranında yedeğe sürükleyin.)':
  '(To take a player off, drag them to the bench on the formation screen.)',
'. Tüm takımlar, oyuncular ve maçlar kurgusaldır.':'. All teams, players and matches are fictional.',
'. Katılım yalnızca oyun içi sanal para ile yapılır;':'. Entry is only with in-game virtual currency;',
', kazanılan ödüller yalnızca oyun içinde kullanılır ve':', rewards won are used only inside the game and',
', oyuncunun yeteneklerinin ortalamasıdır ve':'is the average of the player\'s attributes and',
'00:00\'da sıfırlanır':'resets at 00:00','\'ında biter':'ends on','\'da başlar,':'starts on,',
'1 kişi':'1 person','%100 hazır':'100% ready','+ Maç Kadrosu':'+ Matchday Squad',
'Sv. 12':'Lv. 12','Şu an':'Currently','Yarın ·':'Tomorrow ·',
'⚽ Maç tamamlandı · 90\'':'⚽ Match completed · 90\''
});


/* ── 5. dalga · statik ekran metinleri (paket 1) ─────────────────────
   Kaynak: auth-screen + 14 sayfa bloğunda çevrilmemiş kalan metinler.
   ATLANANLAR ve sebepleri:
     'Ahmet Yılmaz'  → örnek isim; oyunda aynı adlı bir oyuncu varsa
                       onun adı da çevrilirdi. Riskli, dokunulmadı.
     '🇹🇷 Türkçe ›'   → cftUpdateLangDisplay() zaten dinamik yazıyor.
   ─────────────────────────────────────────────────────────────────── */
Object.assign(window.I18N.en, {
  // ── giriş / ana sayfa ──
  'Bu sezon giren':'Signed this season',
  'Sezon başlamak üzere':'Season about to start',

  // ── oyuncu ──
  'Gücünüzü artırmak için ekipman kullanın. Maçlarda yetenek bonusu sağlayan itemleri mağazadan satın alıp slotlara kuşanın.':'Use equipment to boost your strength. Buy items that give skill bonuses in matches from the shop and equip them to your slots.',
  '🌍 Milli Takım Oyuncusu':'🌍 National Team Player',
  '📅 Bu Sezon':'📅 This Season',

  // ── takım ──
  '10., 20., 30. ve 40. günleri':'days 10, 20, 30 and 40',
  'Bir takıma katıl veya kendi takımını kur. Takımsız oyuncu olarak antrenman, lig ve turnuva izleme erişimin var.':'Join a team or found your own. As a free agent you still have access to training and to watching leagues and tournaments.',
  'Bu sezon: +0':'This season: +0',
  'Bu sezon: +0 €':'This season: +0 €',
  'Elmas':'Diamond',
  'Elmas ile Kaydet':'Save with Diamonds',
  'Evet, Hayır':'Yes, No',
  'Gün 1 / 40':'Day 1 / 40',
  'Kişisel cüzdanından kasaya euro veya elmas bağışla. Bağışlar geri alınamaz.':'Donate euros or diamonds from your personal wallet to the treasury. Donations cannot be reversed.',
  'Kupa Koleksiyonu':'Trophy Collection',
  'Seviye 1 → 2':'Level 1 → 2',
  'Sezon Geliri & Giderleri · Sezon':'Season Income & Expenses · Season',
  'Takımın felsefesini, hedeflerini ve değerlerini buraya yaz... (max 2000 karakter)':'Write your team’s philosophy, goals and values here... (max 2000 characters)',
  'Toplam Kupa ›':'Total Trophies ›',
  'belirlenir: oyuncunun güncel yetenek seviyesine göre hesaplanır, oyuncu geliştikçe maaşı artar. Her maaş gününde':'is set automatically: it is calculated from the player’s current skill level, so wages rise as the player improves. On each pay day',
  'değiştirebilir. Sen sadece görüntülüyorsun.':'can change it. You are only viewing.',
  'eklenir. Transferler ve oyuncu maaşları finanstan ödenir. Bağış yaparak finansa kişisel destek verebilirsin.':'is added. Transfers and player wages are paid from the finances. You can support the finances personally by donating.',
  '‹ Geri':'‹ Back',

  // ── antrenman ──
  'ANTRENMAN':'TRAINING',
  'Antrenman & Enerji':'Training & Energy',
  'Antrenman Merkezi seviyesine':'to the Training Centre level',
  'Antrenman süresi uzadıkça kazanım artar, ama daha çok enerji ve süre ister.':'Longer sessions give bigger gains, but cost more energy and time.',
  'Düzenli antrenman, takımdaki yerini ve transfer değerini yükseltmenin en hızlı yoludur.':'Regular training is the fastest way to raise your place in the squad and your transfer value.',
  'Enerji sunucu saatiyle (UTC 00:00) yenilenir. Bu, her ülkede aşağıdaki yerel saate denk gelir:':'Energy refills on server time (UTC 00:00). That corresponds to the following local time in each country:',
  'Her antrenman':'Every training session costs',
  'puan ve XP':'points and XP',

  // ── transfer ──
  'TRANSFER':'TRANSFERS',
  'Teklif sunabilmek için':'To make an offer,',
  '📋 Bonservis teklifini kendin girebilirsin. Satıcının belirlediği fiyatın':'📋 You can enter your own transfer fee. Of the price set by the seller,',

  // ── eğlence / toto ──
  '\'de sıfırlanır.':' reset.',
  'Elmas ortalama her 200 bilette bir çıkar.':'A diamond appears on average once every 200 tickets.',
  'Kazanç tavanı Toto ile ortaktır.':'The payout cap is shared with Toto.',
  'Kupon 5–15 maç · misli 5 – 5.000 € · kazanç tavanı 2.500.000 € · oran tavanı 500':'Coupon 5–15 matches · stake 5 – 5,000 € · payout cap 2,500,000 € · odds cap 500',
  'belirlenir; kazıma yalnızca animasyondur. Sayfayı yenilesen sonuç değişmez.':'is decided in advance; scratching is only an animation. Refreshing the page does not change the result.',
  '⬛ Boş':'⬛ Blank',
  '💎 Elmas':'💎 Diamond',

  // ── takvim ──
  'Gün 0 / 40':'Day 0 / 40',
  'Transfer/Ara':'Transfer/Break',
  '📅 Tümü':'📅 All',
  '🔄 Transfer':'🔄 Transfer',
  '🗓️ Sezon Takvimi':'🗓️ Season Calendar',

  // ── federasyon ──
  '+%3 hücum, +%3 savunma':'+3% attack, +3% defence',
  '3 kişi':'3 people',
  'Bu ülkede takım sahibi olan tüm kaptanlar otomatik olarak federasyon üyesidir. Sezon sonu seçimde her üyenin':'Every captain who owns a team in this country is automatically a federation member. In the end-of-season election each member has',
  'SEZON 1':'SEASON 1',
  'Sezon 1 görev süresi':'Season 1 term of office',
  'vardır. Her rolün milli takım üzerinde farklı yetkileri vardır.':'. Each role has different powers over the national team.',

  // ── görevler ──
  'ANTRENMAN YILDIZI':'TRAINING STAR',
  '🏆 Pro görevler oyunun en büyük zaferleri — şampiyonluklar ve milli takım. Tek seferlik, kalıcı.':'🏆 Pro missions are the game’s biggest achievements — titles and the national team. One-off and permanent.',

  // ── sonuçlar / medya ──
  'Veri yok':'No data',
  '🤝 Hazırlık':'🤝 Friendly',
  'Bu işlem geri alınamaz. Gönderi ve tüm beğeni bilgileri kalıcı olarak silinecek.':'This cannot be undone. The post and all of its likes will be permanently deleted.',

  // ── sıralamalar ──
  '🏆 Takım Puanı':'🏆 Team Points',
  '💶 Piyasa Değeri':'💶 Market Value',
  '📈 Seviye':'📈 Level',
  '🛡️ Takım Gücü':'🛡️ Team Strength',
  '🛡️ Takımlar':'🛡️ Teams',

  // ── mağaza ──
  '· Sonra:':'· After:',
  '🏟️ Satıştaki takımları gör ve satın al. Listings kullanıcı ve botların ilanlarından oluşur.':'🏟️ Browse and buy teams that are for sale. Listings come from both users and bots.',
  '🏟️ Takımlar':'🏟️ Teams',
  '💡 Diamond ile oyuncu transfer eder, tesis yükseltir, item ve takım satın alabilirsin. Büyük paketler kademeli bonus kazandırır.':'💡 Use diamonds to sign players, upgrade facilities and buy items or teams. Larger packs give progressively bigger bonuses.',

  // ── ayarlar ──
  '2 sezon':'2 seasons',
  'Aynısını tekrar yaz':'Type the same again',
  'Beceri puanı maç motoruna ±%5 etki eder. Uzmanlık alanı belirli istatistiklere bonus verir.':'Skill points affect the match engine by ±5%. A specialisation gives a bonus to certain stats.',
  'Bonservis ve maaş sistemce belirlenmiştir. Maaş sezonun 10., 20., 30. ve 40. günlerinde 4 taksit halinde takım kasasından oyuncu cüzdanına ödenir.':'The transfer fee and wage are set by the system. The wage is paid from the team treasury to the player’s wallet in 4 instalments, on days 10, 20, 30 and 40 of the season.',
  'Bu oyuncu zaten kadronda':'This player is already in your squad',
  'Daha Sonra':'Later',
  'Hesabın için yeni bir şifre yaz.':'Choose a new password for your account.',
  'Hesabını silmek kalıcıdır. Takımın, oyuncun, cüzdanın ve tüm ilerlemen geri alınamaz şekilde kaldırılır.':'Deleting your account is permanent. Your team, player, wallet and all progress are removed irreversibly.',
  'Kupondan çıkar':'Remove from coupon',
  'Opsiyonel. Onay verildiği an oyuncunun elmas cüzdanına aktarılır. Kasa elması (€ değil) kullanılır.':'Optional. Transferred to the player’s diamond wallet the moment it is approved. Treasury diamonds are used (not €).',
  'Oyuncu Transfer › Boştaki Oyuncular kısmına eklenecek. Yerine yeni bir oyuncu gelecek.':'The player will be added to Transfers › Free Agents. A new player will take their place.',
  'Oyuncu seviyesine göre hesaplandı (40 günlük antrenman maliyeti × 1,045).':'Calculated from the player’s level (40 days of training cost × 1.045).',
  'Oyuncunun mevcut piyasa değeri. Onay verildiği an satıcı kasasına aktarılır.':'The player’s current market value. Transferred to the seller’s treasury the moment it is approved.',
  'PUAN':'POINTS',
  'Serbest oyuncu · bonservis yok':'Free agent · no transfer fee',
  'Sürüm':'Version',
  'Turnuva Şampiyonları':'Tournament Champions',
  'Yeni Sezona Devam ▶':'Continue to New Season ▶',
  'Yeni Şifre':'New Password',
  'Yeni Şifre (tekrar)':'New Password (again)',
  'Yeni Şifre Belirle':'Set New Password',
  'seçebilirsin. Kaptan onaylarsa sözleşme imzalanır; maaş sezonun 10/20/30/40. günlerinde 4 taksit halinde ödenir.':'you can choose. If the captain approves, the contract is signed; the wage is paid in 4 instalments on days 10/20/30/40 of the season.',
  'İki ödeme tipi de talep edilebilir. En az birini 0\'dan büyük belirle.':'You may request both payment types. Set at least one above 0.',
  'İmza Parası 💎 — talep ettiğin elmas (kabul edilirse kasadan cüzdanına)':'Signing Fee 💎 — the diamonds you request (from the treasury to your wallet if accepted)',
  'Şifreyi Güncelle':'Update Password',
  'Şikayet, istek ve taleplerin admine iletilir. Genelde 24 saat içinde yanıtlanır.':'Your complaints, requests and suggestions go to the admin. Usually answered within 24 hours.',
  '🔒 Gizlilik Politikası':'🔒 Privacy Policy',
  '🗑️ Hesabımı Sil':'🗑️ Delete My Account'
});
