import React, { Component } from 'react';
import '../App.css';

class Contact extends Component {
  render() {
    return (
      <div class="container contact" align="center">
        <h3>Get In Touch</h3>
        <p class="lead">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis,
          aliquam.
        </p>
        <form>
          <div class="input-group input-group-lg mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text">
                <i class="fa fa-user"></i>
              </span>
            </div>
            <input type="text" class="form-control" placeholder="Name" />
          </div>
          <div class="input-group input-group-lg mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text">
                <i class="fa fa-envelope"></i>
              </span>
            </div>
            <input type="text" class="form-control" placeholder="Email" />
          </div>
          <div class="input-group input-group-lg mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text">
                <i class="fa fa-pencil-alt"></i>
              </span>
            </div>
            <textarea
              class="form-control"
              placeholder="Message"
              rows="5"
            ></textarea>
          </div>

          <input
            type="submit"
            value="Submit"
            class="btn btn-dark btn-block btn-lg"
          />
        </form>
      </div>
    );
  }
}

export default Contact;
