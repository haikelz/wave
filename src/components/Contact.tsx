const Contact = () => {
  return (
    <section id="contact">
      <div className="container mt-5">
        <div className="row text-center mb-3">
          <div className="col">
            <h2>Contact</h2>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-md-6">
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Nama Lengkap</label>
                <input type="text" className="form-control" id="name" aria-describedby="name" />

              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">E-Mail</label>
                <input type="email" className="form-control" id="email" />
              </div>

              <div className="mb-3">
                <label htmlFor="keterangan" className="form-label">Keterangan</label>
                <textarea className="form-control" id="keterangan" rows={3}></textarea>
              </div>

              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#e2edff" fillOpacity="1" d="M0,160L80,186.7C160,213,320,267,480,245.3C640,224,800,128,960,106.7C1120,85,1280,139,1360,165.3L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
      </svg>
    </section>
  )
}

export default Contact;
