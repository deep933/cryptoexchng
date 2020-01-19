import React from "react";

const GoogleAuth = props => {
  return (
    <div className="dialog-back flex-center google-auth-dialog">
      <div className="dialog">
        <div className="dialog-header">
          <div className="level middle">
            <div className="level-left">
              <div className="subtitle is-5">Google Auth</div>
            </div>
            <div className="level-right">
              <span
                className="close-icon flex-center"
                onClick={() => {
                  props.onclose();
                }}
              >
                <i class="fas fa-times"></i>
              </span>
            </div>
          </div>
        </div>
        <div className="dialog-content">
          <div className="input-auth">
            <input type="text" placeholder="------" />
          </div>
<br/>
          <div className="level middle">
              <div className="level-left">
                  <div className="text-left"><a>Can't Access Google Authenticator</a></div>
              </div>
              <div className="level-right"> <button class="btn-primary">Save</button>
</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoogleAuth;
