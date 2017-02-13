import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { WelcomeModal } from '../components/index'

function mapStateToProps(state) {
  return {
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch)
}

class DashboardPage extends Component {
  static propTypes = {
  }

  constructor(props) {
    super(props)

    this.state = {
      modalIsOpen: false,
      password: ''
    }

    this.openModal = this.openModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
  }

  openModal() {
    console.log('opening modal')
    this.setState({modalIsOpen: true})
  }

  closeModal() {
    console.log('closing modal')
    this.setState({modalIsOpen: false})
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="container profile-wrap-wide">

          <WelcomeModal
            isOpen={this.state.modalIsOpen}
            closeModal={this.closeModal} />

          <section>
            <div className="container-fluid no-padding">
              <div className="col-sm-12 app-container no-padding">
                <div className="col-sm-4">
                  <Link to="/profiles"
                        className="app-box-container" target="_blank">
                    <div className="app-box container-fluid">
                      <img src="/images/app-icon-profiles@2x.png" />
                    </div>
                  </Link>
                  <div className="app-text-container">
                    <h3>Profiles</h3>
                  </div>
                </div>
                <div className="col-sm-4">
                  <Link to="/account/settings"
                        className="app-box-container" target="_blank">
                    <div className="app-box">
                      <img src="/images/app-settings.png" />
                    </div>
                  </Link>
                  <div className="app-text-container">
                    <h3>Settings</h3>
                  </div>
                </div>
                <div className="col-sm-4">
                  <a href="https://helloblockstack.com"
                     className="app-box-container" target="_blank">
                    <div className="app-box">
                      <img src="/images/app-hello-blockstack.png" />
                    </div>
                  </a>
                  <div className="app-text-container">
                    <h3>Hello, Blockstack</h3>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="container-fluid no-padding">
              <div className="app-text-container">
                <button onClick={this.openModal} className="btn btn-primary">
                  Open Welcome Modal
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage)