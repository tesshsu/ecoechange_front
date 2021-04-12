import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Form as FinalForm, Field } from "react-final-form";

class FileUpload extends PureComponent {
  static propTypes = {
    message: PropTypes.string,
    progress: PropTypes.number,
    submitting: PropTypes.bool,
    onSubmit: PropTypes.func,
    onCancel: PropTypes.func
  };
  static defaultProps = {
    message: "",
    progress: 0,
    submitting: false,
    onSubmit: () => {},
    onCancel: () => {}
  };
  handleCancel = e => {
    e.preventDefault();
    this.props.onCancel();
  };
  handleFormSubmit = () => {
    const file = this.fileInput.files[0];
    const formData = new FormData();
    formData.append("image", file);
    this.props.onSubmit(formData);
  };
  validateForm = values => {
    const errors = {};
    if (!values.file) {
      errors.file = "No file selected.";
    }
    return errors;
  };
  render() {
    const { message, progress, submitting } = this.props;
    return (
      <FinalForm
        onSubmit={this.handleFormSubmit}
        validate={this.validateForm}
        render={props => (
          <form className="ts form" onSubmit={props.handleSubmit}>
            <Field name="file">
              {({ input, meta: { error, touched } }) => (
                <div className="items-center justify-center">
                  <input
					ref={fileInput => (this.fileInput = fileInput)}
                    key="fileInput"
                    type="file"
                    {...input}
                  />
                </div>
              )}
            </Field>
            <div className="ts relaxed separated buttons">
              {!submitting && (
                <button
                  id="send"
                  type="submit"
                  className="bg-green-500 text-white px-4 py-2 rounded shadow mr-1 mt-2"
                  disabled={submitting}
                >
                  <i class="fas fa-download"></i> Envoyer
                </button>
              )}
              {!submitting && (
                <button
                  type="button"
                  className="bg-gray-600 text-white px-4 py-2 rounded shadow mr-1"
                  disabled={submitting}
                  onClick={e => {
                    props.form.reset();
                    this.handleCancel(e);
                  }}
                >
                  Retirer
                </button>
              )}
              {submitting && (
                <button className="bg-green-500 text-white active:bg-grey-500 text-sm font-bold uppercase px-4 py-2 my-4 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
				    onClick={this.handleCancel}
				>
                  Annuler
                </button>
              )}

            </div>
            {(submitting || message) && <hr />}
            {submitting && (
              <div className="ts tiny primary progress">
                <div className="bar" style={{ width: `${progress * 100}%` }} />
              </div>
            )}
            {message}
          </form>
        )}
      />
    );
  }
}

export default FileUpload;
