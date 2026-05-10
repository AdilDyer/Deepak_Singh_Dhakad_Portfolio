'use client';

import { useState, useEffect, useRef } from 'react';
import styles from "./page.module.css";
import { PillDoodle, CrossDoodle, DocumentDoodle, FlaskDoodle, DNAHelixDoodle } from "../components/Doodles";

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(err => console.log("Autoplay blocked:", err));
      }
      setIsPlaying(!isPlaying);
    }
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(err => {
        console.log("Autoplay blocked by browser.");
      });
    }
  }, []);

  return (
    <main className={styles.main}>
      {/* Background Audio */}
      <audio ref={audioRef} src="/bg_music.mp3" loop />
      <button className={styles.audioToggle} onClick={toggleAudio} title="Toggle Background Music">
        {isPlaying ? '🔊' : '🔇'}
      </button>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="fade-in">
          <h1 className={styles.heroTitle}>Deepak Singh Dhakad</h1>
          <p className={styles.heroSubtitle}>
            Research & Development | Public Health | Clinical Operations
          </p>
        </div>
        <div className="fade-in delay-1">
          <div style={{ position: 'relative', marginTop: '2rem' }}>
            <div className={styles.imagePlaceholder} style={{ marginTop: 0 }}>
              <img src="/profile.png" alt="Deepak Singh Dhakad" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'inherit' }} />
            </div>
            <CrossDoodle className={`${styles.doodleTopLeft} ${styles.float1} ${styles.glow}`} />
            <PillDoodle className={`${styles.doodleTopRight} ${styles.pulse1}`} />
            <DocumentDoodle className={`${styles.doodleMidLeft} ${styles.float2} ${styles.glow}`} />
            <FlaskDoodle className={`${styles.doodleMidRight} ${styles.float3}`} />
            <DNAHelixDoodle className={`${styles.doodleBottomLeft} ${styles.pulse1} ${styles.glow}`} />
            <CrossDoodle className={`${styles.doodleBottomRight} ${styles.float1}`} />
          </div>
        </div>
      </section>

      <div className="container" style={{ position: 'relative' }}>

        {/* Sideline Background Doodles */}
        <FlaskDoodle className={`${styles.doodleSideLeft1} ${styles.float1} ${styles.glow}`} style={{ color: "var(--color-gs-1)" }} />
        <DNAHelixDoodle className={`${styles.doodleSideRight1} ${styles.pulse1}`} style={{ color: "var(--color-gs-5)" }} />
        <PillDoodle className={`${styles.doodleSideLeft2} ${styles.float2} ${styles.glow}`} style={{ color: "var(--color-gs-1)" }} />
        <CrossDoodle className={`${styles.doodleSideRight2} ${styles.float3}`} style={{ color: "var(--color-gs-5)" }} />
        <DocumentDoodle className={`${styles.doodleSideLeft3} ${styles.pulse1} ${styles.glow}`} style={{ color: "var(--color-gs-1)" }} />
        <FlaskDoodle className={`${styles.doodleSideRight3} ${styles.float1}`} style={{ color: "var(--color-gs-5)" }} />

        <DNAHelixDoodle className={`${styles.doodleSideLeft4} ${styles.pulse1} ${styles.glow}`} style={{ color: "var(--color-gs-1)" }} />
        <PillDoodle className={`${styles.doodleSideRight4} ${styles.float2}`} style={{ color: "var(--color-gs-5)" }} />
        <FlaskDoodle className={`${styles.doodleSideLeft5} ${styles.float3} ${styles.glow}`} style={{ color: "var(--color-gs-1)" }} />
        <DocumentDoodle className={`${styles.doodleSideRight5} ${styles.float1}`} style={{ color: "var(--color-gs-5)" }} />
        <CrossDoodle className={`${styles.doodleSideLeft6} ${styles.pulse1} ${styles.glow}`} style={{ color: "var(--color-gs-1)" }} />
        <DNAHelixDoodle className={`${styles.doodleSideRight6} ${styles.float2}`} style={{ color: "var(--color-gs-5)" }} />

        <PillDoodle className={`${styles.doodleSideLeft7} ${styles.float1} ${styles.glow}`} style={{ color: "var(--color-gs-1)" }} />
        <FlaskDoodle className={`${styles.doodleSideRight7} ${styles.float2}`} style={{ color: "var(--color-gs-5)" }} />
        <DNAHelixDoodle className={`${styles.doodleSideLeft8} ${styles.pulse1} ${styles.glow}`} style={{ color: "var(--color-gs-1)" }} />
        <CrossDoodle className={`${styles.doodleSideRight8} ${styles.float3}`} style={{ color: "var(--color-gs-5)" }} />
        <DocumentDoodle className={`${styles.doodleSideLeft9} ${styles.float1} ${styles.glow}`} style={{ color: "var(--color-gs-1)" }} />
        <PillDoodle className={`${styles.doodleSideRight9} ${styles.float2}`} style={{ color: "var(--color-gs-5)" }} />
        <FlaskDoodle className={`${styles.doodleSideLeft10} ${styles.float3} ${styles.glow}`} style={{ color: "var(--color-gs-1)" }} />
        <DNAHelixDoodle className={`${styles.doodleSideRight10} ${styles.pulse1}`} style={{ color: "var(--color-gs-5)" }} />
        <CrossDoodle className={`${styles.doodleSideLeft11} ${styles.float1} ${styles.glow}`} style={{ color: "var(--color-gs-1)" }} />
        <DocumentDoodle className={`${styles.doodleSideRight11} ${styles.float2}`} style={{ color: "var(--color-gs-5)" }} />
        <PillDoodle className={`${styles.doodleSideLeft12} ${styles.pulse1} ${styles.glow}`} style={{ color: "var(--color-gs-1)" }} />
        <FlaskDoodle className={`${styles.doodleSideRight12} ${styles.float3}`} style={{ color: "var(--color-gs-5)" }} />

        {/* Professional Summary */}
        <section className="section fade-in delay-2">
          <h2 className={styles.sectionTitle}>Professional Summary</h2>
          <p className={styles.paragraph}>
            Passionate about Research and Development, Health Outreach and Advocacy, and Health Policy.
            I have hands-on experience in driving Health Research, Project Management, Programme Coordination,
            and Government Engagement. My goal is to contribute to the sustainable growth of organizations
            through my technical, innovative, and analytical abilities.
          </p>
        </section>

        {/* Expertise */}
        <section className="section">
          <h2 className={styles.sectionTitle}>Area of Expertise</h2>
          <div className={styles.grid}>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Technical</h3>
              <ul className={styles.list}>
                <li className={styles.listItem}>ISO 14155, ISO 13485, ISO 14971</li>
                <li className={styles.listItem}>Regulatory Submission</li>
                <li className={styles.listItem}>US, EU and CDSCO Guidelines</li>
                <li className={styles.listItem}>Medical Device Guidelines and Submission Procedure</li>
                <li className={styles.listItem}>Clinical Procedures and Clinical Trial Submission</li>
                <li className={styles.listItem}>Data Management & Technical Reports</li>
              </ul>
            </div>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Regulations</h3>
              <ul className={styles.list}>
                <li className={styles.listItem}>EU MDR 745/2017</li>
                <li className={styles.listItem}>NDCT Rules</li>
                <li className={styles.listItem}>21 CFR Regulations</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="section">
          <h2 className={styles.sectionTitle}>Certifications</h2>
          <div className={styles.grid}>
            <div className={`${styles.card} ${styles.certCard}`} onClick={() => window.open('/cert7.pdf', '_blank')}>
              <h3 className={styles.cardTitle}>Pharmaceutical Regulatory Affairs</h3>
              <p className={styles.paragraph}>Comprehensive introduction to regulatory frameworks and lesson-based certifications.</p>
              <img src="/cert7_thumb.jpg" alt="Certificate" className={styles.certImage} />
            </div>
            <div className={`${styles.card} ${styles.certCard}`} onClick={() => window.open('/cert4.pdf', '_blank')}>
              <h3 className={styles.cardTitle}>CDSCO Regulatory Certification</h3>
              <p className={styles.paragraph}>Global regulatory standards and clinical trial procedures certification.</p>
              <img src="/cert4_thumb.jpg" alt="Certificate" className={styles.certImage} />
            </div>
            <div className={`${styles.card} ${styles.certCard}`} onClick={() => window.open('/cert1.pdf', '_blank')}>
              <h3 className={styles.cardTitle}>Medical Writing Skills</h3>
              <p className={styles.paragraph}>Scientific writing and documentation for medical professionals.</p>
              <img src="/cert1_thumb.jpg" alt="Certificate" className={styles.certImage} />
            </div>
            <div className={`${styles.card} ${styles.certCard}`} onClick={() => window.open('/cert2.pdf', '_blank')}>
              <h3 className={styles.cardTitle}>National Science Day Quiz</h3>
              <p className={styles.paragraph}>Recognized for success in pharmaceutical science knowledge initiatives.</p>
              <img src="/cert2_thumb.jpg" alt="Certificate" className={styles.certImage} />
            </div>
          </div>
        </section>

        {/* Workshops */}
        <section className="section">
          <h2 className={styles.sectionTitle}>Workshops</h2>
          <div className={styles.grid}>
            <div className={`${styles.card} ${styles.certCard}`} onClick={() => window.open('/cert5.jpeg', '_blank')}>
              <h3 className={styles.cardTitle}>Medical Devices - Regulatory Pathway</h3>
              <p className={styles.paragraph}>Webinar on submission pathways for medical devices by Learntoupgrade.</p>
              <img src="/cert5.jpeg" alt="Certificate" className={styles.certImage} />
            </div>
            <div className={`${styles.card} ${styles.certCard}`} onClick={() => window.open('/cert6.jpeg', '_blank')}>
              <h3 className={styles.cardTitle}>Career in Medical Devices</h3>
              <p className={styles.paragraph}>Professional opportunities exploration in the device sector by Learntoupgrade.</p>
              <img src="/cert6.jpeg" alt="Certificate" className={styles.certImage} />
            </div>
            <div className={`${styles.card} ${styles.certCard}`} onClick={() => window.open('/cert3.pdf', '_blank')}>
              <h3 className={styles.cardTitle}>MLSU Pharmaceutical Seminar</h3>
              <p className={styles.paragraph}>Modern pharmaceutical trends and industry practices seminar at MLS University.</p>
              <img src="/cert3_thumb.jpg" alt="Certificate" className={styles.certImage} />
            </div>
          </div>
        </section>

        {/* Contact & Footer */}
        <section className={styles.contactInfo}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
            <div style={{ position: 'relative' }}>
              <div className={styles.imagePlaceholder} style={{ marginTop: 0 }}>
                <img src="/profile.png" alt="Deepak Singh Dhakad" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'inherit' }} />
              </div>
            </div>
          </div>

          <div className={styles.footerLinks}>
            <a href="mailto:deepak.mpfp@gj.nfsu.edu.in" className={styles.contactLink}>
              deepak.mpfp@gj.nfsu.edu.in
            </a>
            <a href="mailto:deepaksinghdhakad47@gmail.com" className={styles.contactLink}>
              deepaksinghdhakad47@gmail.com
            </a>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginTop: '1rem' }}>
              <a href="https://wa.me/919460291447" target="_blank" rel="noopener noreferrer" className={styles.socialIconLink} title="Chat on WhatsApp">
                <svg viewBox="0 0 24 24" width="28" height="28" fill="#25D366">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.431 5.63 1.432h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </a>
              <a href="https://wa.me/919460291447" target="_blank" rel="noopener noreferrer" className={styles.contactLink} style={{ margin: 0 }}>
                +91 9460291447
              </a>
              <a href="https://www.linkedin.com/in/deepak-singh-dhakad-182383409?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" className={styles.socialIconLink} title="LinkedIn Portfolio">
                <svg viewBox="0 0 24 24" width="28" height="28" fill="#0077B5">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
          <p className={styles.paragraph} style={{ marginTop: "1.5rem", fontSize: "0.9rem", opacity: 0.6 }}>
            NFSU, Gandhinagar, Gujarat
          </p>
        </section>

        <footer className={styles.footer}>
          <p>© {new Date().getFullYear()} Deepak Singh Dhakad. All rights reserved.</p>
        </footer>
      </div>
    </main>
  );
}
