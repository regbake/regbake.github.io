// const CookiePolicy = () => {

//   const handleExit = () => {
//     console.log('handle exit');
//   }

//   return (
//     isCookieBannerDisplayed && (
//       <div className="cookie-policy-container">
//         <p>
//           Your Privacy: no cookies or analytics are used on this site
//         </p>

//         <button>
//           View Cookie Policy
//         </button>

//         <span
//           onClick={handleExit}
//         >
//           x
//         </span>
//       </div>
//     )
//   );
// }

class CookiePolicy extends React.Component {
  constructor() {
    super()
    this.state = {
      isDisplayCookieBanner: true,
      isDisplayPolicyModal: false,
    }
  }

  handleExit = () => {
    console.log('handle exit')
    this.setState(
      {
        isDisplayCookieBanner: false,
        isDisplayPolicyModal: false,
      }
    );
  }

  handlePolicyModal = () => {
    console.log('handle policy modal');
    this.setState(
      {
        isDisplayCookieBanner: true,
        isDisplayPolicyModal: true,
      }
    );
  }

  handlePolicyExit = () => {
    console.log('handle policy exit');
    this.setState(
      {
        isDisplayCookieBanner: false,
        isDisplayPolicyModal: false,
      } 
    )
  }

  render() {
    return this.state.isDisplayCookieBanner && (
      <React.Fragment>
        {
          this.state.isDisplayPolicyModal && (
            <div className="policy-modal">
              <span
                className="policy-exit"
                onClick={this.handlePolicyExit}
              >
                X
              </span>

              <h3>select your cookies</h3>

              <div className="policy-items">
                <span>chocolate chip</span>
                <label className="switch">
                  <input type="checkbox" />
                  <span className="slider round"></span>
                </label>

                <span>peanut butter</span>
                <label className="switch">
                  <input type="checkbox" />
                  <span className="slider round"></span>
                </label>

                <span>gluten free</span>
                <label className="switch">
                  <input type="checkbox" />
                  <span className="slider round"></span>
                </label>
              </div>
            </div>
          )
        }
        <div className="cookie-policy-container">
          <p>
            Your Privacy: no cookies or analytics are used on this site. No browser storage is used either so you'll always see this farce
          </p>

          <button onClick={this.handlePolicyModal}>
            View Cookie Policy
          </button>

          <span
            onClick={this.handleExit}
          >
            X
          </span>
        </div>
      </React.Fragment>
    )
  }
}
  
const domContainer = document.querySelector('#cookie-policy');
const root = ReactDOM.createRoot(domContainer);
// root.render(CookiePolicy());
root.render(<CookiePolicy />);
  