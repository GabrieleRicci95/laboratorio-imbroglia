import { motion } from 'framer-motion';
import { 
  Phone, 
  MapPin, 
  Clock, 
  CheckCircle2,
  Stethoscope,
  Smile,
  Shield,
  ArrowRight,
  Mail,
  Wrench
} from 'lucide-react';

function App() {
  const services = [
    {
      title: 'Protesi Fissa, Mobile e Scheletrica',
      description: 'Lavorazioni di alta precisione su misura: protesi fissa, mobile e scheletrati.',
      icon: <Smile size={32} />
    },
    {
      title: 'Riparazioni Immediate',
      description: 'Servizio rapido e tempestivo di riparazione per risolvere ogni urgenza dello studio.',
      icon: <Shield size={32} />
    },
    {
      title: 'Ortodonzia e CAD CAM',
      description: 'Realizzazione di dispositivi ortodontici e progettazione digitale avanzata CAD CAM.',
      icon: <Stethoscope size={32} />
    },
    {
      title: 'Lavorazioni Speciali',
      description: 'Zirconia, Cromo Cobalto Fresato e Sintetizzato, Toronto Bridge.',
      icon: <CheckCircle2 size={32} />
    }
  ];

  const ToothLogo = () => (
    <img 
      src="/logo.jpg" 
      alt="Logo Laboratorio" 
      style={{ height: '45px', width: '45px', objectFit: 'contain', mixBlendMode: 'multiply' }} 
    />
  );

  return (
    <div>
      {/* Navigation */}
      <nav className="navbar">
        <div className="container nav-content">
          <div className="logo" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '0' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
              <ToothLogo />
              <span style={{ fontSize: '1.4rem', fontFamily: "'Great Vibes', cursive", fontWeight: 400, color: 'var(--text)' }}>
                Laboratorio Odontotecnico di Imbroglia Marco
              </span>
            </div>
          </div>
          <div className="nav-links">
            <a href="#chi-siamo">Chi Siamo</a>
            <a href="#servizi">Servizi</a>
            <a href="#contatti">Contatti</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <header className="hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="hero-title">
              Precisione e Innovazione <br />
              <span className="primary-text">al servizio del tuo Sorriso</span>
            </h1>
            <p className="hero-subtitle">
              Dal 1992, il Laboratorio Odontotecnico di Marco Imbroglia offre soluzioni protesiche di altissima qualità per dentisti e professionisti del settore.
            </p>
            <div className="btn-group">
              <a href="#servizi" className="btn btn-primary">
                Scopri i Servizi <ArrowRight size={20} />
              </a>
              <a href="#contatti" className="btn btn-secondary">
                Contattaci <Phone size={20} />
              </a>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Chi Siamo */}
      <section id="chi-siamo" className="section bg-white">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
            <div>
              <h2 className="section-title" style={{ textAlign: 'left' }}>L'Esperienza fa la Differenza</h2>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                Con oltre 30 anni di esperienza nel settore odontotecnico, Marco Imbroglia unisce l'artigianalità tradizionale alle più moderne tecnologie CAD/CAM per garantire manufatti perfetti.
              </p>
              <ul style={{ listStyle: 'none' }}>
                {['Materiali Certificati CE', 'Puntualità nelle consegne', 'Assistenza continua allo studio', 'Tecnologie all\'avanguardia'].map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1rem', fontSize: '1.1rem' }}>
                    <CheckCircle2 color="var(--primary)" size={24} /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div style={{ borderRadius: '16px', height: '450px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
              <img src="/scultore.jpeg" alt="Marco Imbroglia al lavoro" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Servizi */}
      <section id="servizi" className="section">
        <div className="container">
          <h2 className="section-title">I Nostri Servizi</h2>
          <div className="grid">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                className="card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="card-icon">{service.icon}</div>
                <h3 className="card-title">{service.title}</h3>
                <p style={{ color: 'var(--text-muted)' }}>{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Banner Privati */}
      <section style={{ backgroundColor: 'var(--primary)', color: 'white', padding: '4rem 0', margin: '2rem 0' }}>
        <div className="container">
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '2rem' }}>
            <div style={{ flex: '1 1 500px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                <Wrench size={36} color="var(--accent)" />
                <h2 style={{ fontSize: '2.2rem', fontWeight: 800, margin: 0 }}>Sei un Privato? Hai un'urgenza?</h2>
              </div>
              <p style={{ fontSize: '1.15rem', opacity: 0.9, maxWidth: '700px' }}>
                Oltre ad affiancare gli studi dentistici, il nostro laboratorio è aperto al pubblico per <strong>riparazioni immediate</strong> di protesi dentali danneggiate. Se hai rotto la tua protesi, vieni a trovarci: te la restituiamo riparata e perfetta <strong>in giornata</strong>!
              </p>
            </div>
            <div>
              <a href="tel:0652352710" className="btn" style={{ backgroundColor: 'var(--accent)', color: 'var(--text)', fontSize: '1.2rem', padding: '1rem 2rem', boxShadow: '0 4px 15px rgba(0,0,0,0.2)' }}>
                <Phone size={24} /> Chiama Ora: 0652352710
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contatti */}
      <section id="contatti" className="section bg-white">
        <div className="container">
          <div className="contact-grid">
            <div>
              <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '2rem' }}>Siamo qui per te.</h2>
              <p style={{ marginBottom: '3rem', fontSize: '1.1rem', opacity: 0.9 }}>
                Contattaci per informazioni, preventivi o per richiedere una consulenza. Il nostro laboratorio è pronto a soddisfare ogni esigenza del tuo studio dentistico.
              </p>
              
              <div className="contact-item">
                <MapPin size={24} />
                <span>Via Francesco Ingoli, 50, 00125 Roma RM</span>
              </div>
              <div className="contact-item">
                <Phone size={24} />
                <span>0652352710</span>
              </div>
              <div className="contact-item">
                <Mail size={24} />
                <span>marco.imbroglia@gmail.com</span>
              </div>
              <div className="contact-item">
                <Clock size={24} />
                <span>Lun - Ven: 09:00 - 13:00 / 15:00 - 18:00</span>
              </div>
            </div>
            
            <div style={{ backgroundColor: 'white', borderRadius: '12px', padding: '2rem', color: 'var(--text)' }}>
              <h3 style={{ marginBottom: '1.5rem', color: 'var(--primary)' }}>Scrivici un messaggio</h3>
              <form>
                <input type="text" placeholder="Nome / Studio" style={{ width: '100%', padding: '1rem', marginBottom: '1rem', borderRadius: '8px', border: '1px solid var(--border)' }} />
                <input type="email" placeholder="Email" style={{ width: '100%', padding: '1rem', marginBottom: '1rem', borderRadius: '8px', border: '1px solid var(--border)' }} />
                <textarea placeholder="Il tuo messaggio..." rows={4} style={{ width: '100%', padding: '1rem', marginBottom: '1rem', borderRadius: '8px', border: '1px solid var(--border)' }}></textarea>
                <button type="button" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>Invia Richiesta</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ backgroundColor: 'var(--text)', color: 'white', padding: '3rem 0', textAlign: 'center' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.8rem', marginBottom: '1rem' }}>
            <ToothLogo />
            <span style={{ fontSize: '1.5rem', fontFamily: "'Great Vibes', cursive", fontWeight: 400 }}>Laboratorio Odontotecnico di Imbroglia Marco</span>
          </div>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem' }}>
            © {new Date().getFullYear()} Laboratorio Odontotecnico di Imbroglia Marco. Tutti i diritti riservati.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
