import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contacthead">
        <h1>CONTACT US</h1>
      </div>
      <div className="contactmid">
        <div className="contactmid-1">
          <h1>We’d Love to Hear From You!</h1>
          <p>
            Whether you have questions about our tools, need support, or are
            interested in partnering with us, we are always happy to connect.
            Reach out to us via the form below, and our team will get back to
            you as soon as possible.
          </p>
          <h1>Why Reach Out?</h1>
          <ul>
            <li>
              Inquiries: Learn more about our developer, marketing, and testing
              tools and how they can help your business.
            </li>
            <li>
              Support: Have a question or issue? Our dedicated support team is
              here to assist with any technical or tool-related concerns
            </li>
            <li>
              Partnerships: Looking to collaborate on new solutions or tools?
              We’re always open to working with innovators and problem-solvers.
            </li>
            <li>
              Custom Solutions: If you have specific needs that aren’t addressed
              by our existing tools, we can discuss custom development options.
            </li>
          </ul>
          <h1>Our Contact Information</h1>
          <p>Email: craftydevtools@gmail.com</p>
        </div>
        <div className="contactmid-2">
          <h1>Send Us a Message</h1>
          <form>
            <label htmlFor="">Your Name:</label>
            <br />
            <input type="text" placeholder="Enter Your Name" />
            <br />
            <label htmlFor="">Your Email:</label>
            <br />
            <input type="text" placeholder="Enter Your Email" />
            <br />
            <label htmlFor="">Subject:</label>
            <br />
            <input type="text" placeholder="Enter Subject" />
            <br />
            <label htmlFor="">Your Message:</label>
            <br />
            <textarea name="" id="" rows='5' placeholder="Write Your Message"></textarea>
            <br />
            <button>Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
