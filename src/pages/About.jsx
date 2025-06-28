function About() {
    return (
      <div className="text-center">
        <h1 className="mb-4">Meet the Mind Behind BrewSpot</h1>
  
        <img
          src="/images/drinkmezen.jpg"
          alt="Las Vegas Coffee"
          className="img-fluid rounded mb-4"
          style={{ maxWidth: "300px" }}
        />
  
        <p>
          Hi, I'm <strong>Darwin Casasola Cifuentes</strong> — aspiring software engineer, soccer enthusiast, and coffee fanatic. This project was built as part of my software engineering journey to combine design, interactivity, and data handling into a single user-friendly web app.
        </p>
  
        <p>
          It has evolved into something meaningful and personal. I hope you enjoy it and discover something new. Below is what I aspire BrewSpot to provide to the Las Vegas community:
        </p>
  
        <ul className="text-start mx-auto" style={{ maxWidth: "700px" }}>
          <li> Find local mom and pop coffee and roasters</li>
          <li> Filter by neighborhood, rating, or type of drink</li>
          <li> Save your favorite spots and build a coffee passport to share with friends and family</li>
        </ul>
  
        <hr />
  
        <p>
          Built by Darwin Casasola — yes, I will definitely take donations for more coffee! <em>(insert Venmo here)</em>
        </p>
  
        <div className="d-flex justify-content-center gap-3 mt-3">
          <a
            className="btn btn-outline-success"
            href="https://github.com/DarwinCasasola"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            className="btn btn-outline-success"
            href="https://www.linkedin.com/in/darwin-casasola-cifuentes-3b1151348"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    );
  }
  
  export default About;
  