import React from "react";
import { GrFormClose } from "react-icons/gr";
import ModalWrapper from "../../../partials/modal/ModalWrapper";
import { InputText } from "../../../helpers/FormInputs";
import { Form, Formik } from "formik";

const ModalAddHeader = ({ setIsHeader }) => {
  const [animate, setAnimate] = React.useState("translate-x-full");

  const handleClose = () => {
    setAnimate("translate-x-full");
    document.body.classList.remove("overflow-hidden");
    setTimeout(() => {
      setIsHeader(false);
    }, 200);
  };

  React.useEffect(() => {
    setAnimate("");
  }, []);

  return (
    <>
      <ModalWrapper
        className={`transition-all ease-linear transform duration-200 z-[9999] ${animate}`}
        handleClose={handleClose}
      >
        <div className="modal-title">
          <h2 className="text-sm font-primary">Edit Header</h2>
          <button onClick={handleClose}>
            <GrFormClose className="text-[25px]" />
          </button>
        </div>
        <div className="modal-content">
          <Formik
            // initialValues={initVal}
            // validationSchema={yupSchema}
            onSubmit={async (values) => {
              console.log(values);
              //   mutation.mutate(values);
            }}
          >
            {() => {
              return (
                <Form className="modal-form">
                  <div className="form-input">
                    <div className="input-wrapper font-primary">
                      <InputText
                        label="Navigation Text 1"
                        type="text"
                        name="header_nav_a"
                      />
                    </div>
                    <div className="input-wrapper font-primary">
                      <InputText
                        label="Navigation Text 2"
                        type="text"
                        name="header_nav_b"
                      />
                    </div>
                    <div className="input-wrapper font-primary">
                      <InputText
                        label="Navigation Text 3"
                        type="text"
                        name="header_nav_c"
                      />
                    </div>
                    <div className="input-wrapper font-primary">
                      <InputText
                        label="Navigation Text 4"
                        type="text"
                        name="header_nav_d"
                      />
                    </div>
                    <div className="input-wrapper font-primary">
                      <InputText
                        label="Navigation Text 5"
                        type="text"
                        name="header_nav_e"
                      />
                    </div>
                    <div className="input-wrapper font-primary">
                      <InputText
                        label="Navigation Text 6"
                        type="text"
                        name="header_nav_f"
                      />
                    </div>
                  </div>
                  <div className="form-action">
                    <div className="form-btn">
                      <button
                        className="btn-modal-submit font-primary"
                        type="submit"
                      >
                        Save
                      </button>
                      <button
                        className="btn-modal-cancel font-primary"
                        type="button"
                        onClick={handleClose}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </Form>
              );
            }}
          </Formik>
        </div>
      </ModalWrapper>
    </>
  );
};

export default ModalAddHeader;
