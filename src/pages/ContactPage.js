import React from 'react';

import ContactList from '../components/ContactList'

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

    const { username, email, area, msg } = this.state;

    return (
      <div className="contact">
        <h3 className="page__title">Kontakt</h3>
        <ContactList fb={this.props.fb} phone={this.props.phone} envelope={this.props.envelope} />
        <form className="form contact__form" onSubmit={this.handleSubmit} noValidate>
          <h3 className="form__title">Napisz do nas!</h3>
          <input className="form__input" type="text" name="username" value={username} onChange={this.handleChange} placeholder="Twoje imię" />
          <input className="form__input" type="email" name="email" value={email} onChange={this.handleChange} placeholder="Twój adres email" />
          <textarea className="form__textarea" name="area" value={area} onChange={this.handleChange} placeholder="Twoja wiadomość"></textarea>
          <button className='btn form__btn'>Wyślij</button>
          {msg && <span>{msg}</span>}
        </form>
      </div >
    );
  }
}

export default ContactPage;