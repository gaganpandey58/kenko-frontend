import React,{PureComponent} from 'react';
import './PdfReport.css';
import background from '../images/kenko-png.png'

export class PatientReport extends PureComponent {
  render() {
    return (
      <div className="watermark">
      <h1 className="pr">Patient Report</h1>
      <div className="pdfreport">
         <div> 
     Patients's Name:
      Ritee Maharjan
      </div>
      <div>
        Age:
        21
        </div>
        <div>
          Gender:
          Female
        </div>
      <div> 
      Symptoms:
      Headache,
      Vomit,
      Diarrhoea
      </div>
      <div> 
      Predicted Disease:
      Typhoid
      </div>
      
        
        </div>
        <div className='contact'>
        Contact us:
        <br></br>
        +977 9861030743
        <br></br>
        predictdisease@gmail.com

        </div>
        </div>
    );
  }
}