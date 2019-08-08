import React from 'react';

import '../styles/Contact.css'

// @TODO add validation form
// @TODO handle form with firebase(?)
// @TODO think about div.address-info - is it neccesary
// @TODO add google map?
class ContactPage extends React.Component {
  state = {
    username: '',
    email: '',
    area: '',
    msg: ''
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      username: '',
      email: '',
      area: '',
      msg: "Przepraszamy pracujemy nad tym!"
    })
  }

  // Message that form was send (or not working yet)
  componentDidUpdate() {
    if (this.state.msg) {
      setTimeout(() => {
        this.setState({
          msg: '',
        })
      }, 3000)
    }
  }

  render() {

    const { username, email, area } = this.state;

    return (
      <div className="contact-page">
        <h3 className='main-section-title'>Kontakt</h3>
        <div className="contact-list">
          <p>W razie jakichkolwiek pytań prosimy o kontakt!</p>
          <ul>
            <li>{this.props.envelope}<strong>valeyofborders@gmail.com</strong></li>
            <li>{this.props.phone}<strong>697 961 160</strong></li>
            <li>{this.props.fb}<strong><a href="https://pl-pl.facebook.com/bordercollieBielsko/">facebook</a></strong> </li>
          </ul>
        </div>
        <form action="" className='form' onSubmit={this.handleSubmit} noValidate>
          <input type="text" name="username" value={username} onChange={this.handleChange} placeholder="Twoje imię" />
          <input type="email" name="email" value={email} onChange={this.handleChange} placeholder="Twój adres email" />
          <textarea name="area" value={area} onChange={this.handleChange} placeholder="Twoja wiadomość"></textarea>
          <button className='btn btn-form'>Wyślij</button>
          {this.state.msg && <span>{this.state.msg}</span>}
        </form>
        <div className="address-info">
          <h3>Odwiedź nas!</h3>
          <p>{this.props.location}ul. Pieska 34 02-509 Mazańcowice (Bielsko-Biała)</p>
          {/* <p>{this.props.envelope}valeyofborders@gmail.com</p>
          <p>{this.props.phone}697 961 160</p> */}
        </div>
      </div >
    );
  }
}

export default ContactPage;