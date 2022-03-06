import React,{PureComponent} from 'react';
import ReactToPrint from 'react-to-print';

import { PatientReport } from './PatientReport';

class ReportPdf extends PureComponent {
  render() {
    return (
      <div>
        <ReactToPrint
          trigger={() => {
            // NOTE: could just as easily return <SomeComponent />. Do NOT pass an `onClick` prop
            // to the root node of the returned component as it will be overwritten.
            return <a href="#">Print this out!</a>;
          }}
          content={() => this.componentRef}
        />
        <PatientReport ref={el => (this.componentRef = el)} />
      </div>
    );
  }
}
export default ReportPdf;