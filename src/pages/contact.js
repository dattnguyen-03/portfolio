import styles from '../styles/Contact.module.css';

export default function Contact() {
  return (
    <div className={styles.container}>
      <section className={styles.contact}>
        <h2>Contact Me</h2>
        <form className={styles.contactForm}>
          <div>
            <label htmlFor="name">Name</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              placeholder="Enter your name" 
              required 
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              placeholder="Enter your email" 
              required 
            />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea 
              id="message" 
              name="message" 
              placeholder="What would you like to discuss?" 
              required
            ></textarea>
          </div>
          <button type="submit">
            Send Message ✉️
          </button>
        </form>
      </section>
    </div>
  );
}
